import * as React from 'react';
import { toast } from 'react-toastify';
import { LoaderContext } from '../../AppContext/loaderContext';

import useFetch from '../Hooks/useFetch';
interface IProps {
    location: any;
}
interface IState {
    defSPType: any;
    gstCat: any[];
    billSundry: any[];
    lApi: any;
}
export default function SalePurchaseTypeLoadDetails(Component: any) {
    let api = useFetch();



    const getBSTypeName = (code: any) => {
        let name: string = code.toString();
        let typeName: string = '';
        switch (name) {
            case '1': typeName = "Rs."; break;
            case '2': typeName = "Per Main Qty"; break;
            case '3': typeName = "Per Alt Qty"; break;
            case '4': typeName = "Per Packaging Qty"; break;
            case '5': typeName = "%"; break;
        }
        return typeName;
    }


    class SPDefault extends React.Component<IProps, IState> {
        static contextType = LoaderContext;
        constructor(props: any) {
            super(props);
            this.state = {
                defSPType: {},
                gstCat: [],
                billSundry: [],
                lApi: undefined
            }
        }
        compCode = window.localStorage.getItem('compCode') || ""
        customer = window.localStorage.getItem('customer') || ""
        username = window.sessionStorage.getItem('username') || ""
        routeObj = this.props.location.state;

        loadSPTypeMaster = async () => {
            let url = `/api/SPTypeModify?Code=${this.props.location.state.code}`;
            const loader = this.context;
            try {
                loader.setLoader(true);
                let { res, got } = await api(url, "GET", '');
                if (res.status == 200) {
                    // alter got obj to show in default values
                    let sptypedetail_length = got.data[0].sptypedetail.length;
                    if (got.data[0].sptypedetail.length > 0) {
                        await got.data[0].sptypedetail.map((item: any) => {
                            if (item.bscode !== 0) {
                                //item.bssrno = item.bssrno;
                                item.bscode = { label: item.bsname, value: item.bscode };
                                item.bsval = item.bsval;

                                // Ensure that name of type $ nature should match from getBSTypeName() to this Api returns
                                item.bstype = item.bstypename;
                                item.nature = item.naturename;

                                // codes 
                                item.bstypecode = item.bstype
                                item.naturecode = item.nature

                            } else {
                                item.bscode = null;
                                item.bsval = null;
                                item.bstype = null;
                                item.nature = null;

                            }
                        })

                        for (let i = 0; i < 10 - sptypedetail_length; i++) {
                            console.log(';hit')
                            got.data[0].sptypedetail.push({
                                bscode: null,
                                bsval: null,
                                bstype: null,
                                nature: null

                            })
                        }


                    }



                    this.setState({ defSPType: got.data[0] })
                    /*this.defInitStateObj = { ...got.data[0] }*/
                    loader.setLoader(false)
                } else {
                    loader.setLoader(false)
                    toast.error("Data Load Failed")
                }
            } catch (err) {
                loader.setLoader(false)
                alert(err);
            }
        }

        loadGstCat = async () => {
            const loader = this.context;
            let urlStr: string = `/api/LoadMasterData?MasterType=${2008}&Company=${this.compCode}&Customer=${this.customer}`
            try {
                loader.setLoader(true)
                let { res, got } = await api(urlStr, "GET", '');
                if (res.status === 200) {

                    this.setState({ gstCat: got.data });
                    loader.setLoader(false)

                }
                else {
                    loader.setLoader(false)
                    throw new Error('Bad Fetch 1')
                }
            } catch (err) {
                loader.setLoader(false)
                alert(err);
            }
        }


        getBillSundryList = async () => {
            const loader = this.context;
            let url = `/api/BSMasterLoad?&Company=${this.compCode}&Customer=${this.customer}`;
            try {
                loader.setLoader(true)
                let { res, got } = await api(url, "GET", '');
                if (res.status === 200) {
                    // need to add the name of codes for type, nature 
                    // this is linked to page cellValueChanged
                    let billsun: any = got.data.map((option: any) => ({

                        value: option.value,
                        label: option.label,
                        bscode: { label: option.label, value: option.value },
                        bstype: getBSTypeName(option.bsfed),
                        nature: option.bstype == 1 ? "Additive" : "Subtractive",
                        bsval: option.bsvalue,
                        bstypecode: option.bsfed,
                        naturecode: option.bstype
                    }))

                    this.setState({ billSundry: billsun });
                    loader.setLoader(false)
                }
                else {
                    loader.setLoader(false)
                    throw new Error('Bad Fetch 1 load Bill Sundry List')
                }
            } catch (err) {
                loader.setLoader(false)
                alert(err);
            }
        }




        componentDidMount() {

            this.loadGstCat();
            this.getBillSundryList();
            if (!this.routeObj) { }
            else {

                this.loadSPTypeMaster();
            }

        }
        render() {
            return (
                <Component api={api} billSundryList={this.state.billSundry} customer={parseInt(this.customer)} compCode={parseInt(this.compCode)} username={this.username} gstCategory={this.state.gstCat} loadSPTypeMaster={this.state.defSPType} gettingVirtualCode={(!this.routeObj) ? 0 : parseInt(this.routeObj.code)} {...this.props} />
            )
        }
    }
    return SPDefault;
}