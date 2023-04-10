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
    let compCode = window.localStorage.getItem('compCode') || ""
    let customer = window.localStorage.getItem('customer') || ""
    let username = window.sessionStorage.getItem('username') || ""



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
        routeObj = this.props.location.state;

        loadSPTypeMaster = async () => {
            let url = `/api/SPTypeModify?Code=${this.props.location.state.code}`;
            const loader = this.context;
            try {
                loader.setLoader(true);
                let { res, got } = await api(url, "GET", '');
                if (res.status == 200) {
                    // alter got obj to show in default values
                    if (!this.routeObj) { }
                    else {
                      
                        // this is linked to collectTableData function in component
                        await got.data[0].sptypedetail.map((item: any) => {

                            //item.bssrno = item.bssrno;
                            item.bscode = { label: item.bsname, value: item.bscode };
                            item.bsval = item.bsval;

                            // Ensure that name of type $ nature should match from getBSTypeName() to this Api returns
                            item.bstype =  item.bstypename;
                            item.nature = item.naturename;

                            // codes 
                            item.bstypecode = item.bstype
                            item.naturecode = item.nature
                        })



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
            let urlStr: string = `/api/LoadMasterData?MasterType=${2008}&Company=${compCode}&Customer=${customer}`
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
            let url = `/api/BSMasterLoad?&Company=${compCode}&Customer=${customer}`;
            try {
                loader.setLoader(true)
                let { res, got } = await api(url, "GET", '');
                if (res.status === 200) {
                    // need to add the name of codes for type, nature 
                    // this is linked to page cellValueChanged
                    let billsun: any = got.data.map((option: any) => ({

                        value: option.value,
                        label: option.label,
                        bscode: {label: option.label, value : option.value},
                        bstype: getBSTypeName(option.bsfed),
                        nature: option.bstype == 1 ? "Additive" : "Subtractive",
                        bsval: option.bsvalue,
                        bstypecode: option.fed,
                        naturecode : option.bstype
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


        collectListData = (data: any) => {
            this.setState({ lApi: data })
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
                <Component api={api} billSundryList={this.state.billSundry} customer={parseInt(customer)} compCode={parseInt(compCode)} username={username} gstCategory={this.state.gstCat} loadSPTypeMaster={this.state.defSPType} gettingVirtualCode={(!this.routeObj) ? 0 : parseInt(this.routeObj.code)} collectListData={this.collectListData.bind(this)} {...this.props} />
            )
        }
    }
    return SPDefault;
}