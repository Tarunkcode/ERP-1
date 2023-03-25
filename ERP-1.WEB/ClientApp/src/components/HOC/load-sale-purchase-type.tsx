import * as React from 'react';

import useFetch from '../Hooks/useFetch';
interface IProps {
    location: any;
}
interface IState {
    defSPType: any;
    gstCat: any[];
    billSundry: any[];
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
            case '1': typeName = "Absolute"; break;
            case '2': typeName = "Per Main Qty"; break;
            case '3': typeName = "Per Alt Qty"; break;
            case '4': typeName = "Per Packaging Qty"; break;
            case '5': typeName = "%"; break;
        }
        return typeName;
    }


    class SPDefault extends React.Component<IProps, IState> {
        constructor(props: any) {
            super(props);
            this.state = {
                defSPType: {},
                gstCat: [],
                billSundry: []
            }
        }
        routeObj = this.props.location.state;
        defInitStateObj = {}
        AlterLoadedFormData = (obj: object) => {
            this.defInitStateObj = { ...this.defInitStateObj, ...obj }
            var newObj = this.defInitStateObj;
            return newObj;
        }
        loadSPTypeMaster = async () => {
            let url = `/api/SPTypeModify?Code=${this.props.location.state.code}`;
            try {
                let { res, got } = await api(url, "GET", '');
                if (res.status == 200) {
                    // alter got obj to show in default values
                    if (!this.routeObj) { }
                    else {
                        // alter header
                        //await this.state.gstCat.map((option: any) => {
                        //    if (option.id == got.data[0].sptypeheader[0].gstcat) {
                        //        got.data[0].sptypeheader[0].gstcat = option.value;

                        //    }
                        //})

                        await got.data[0].sptypedetail.map((item: any) => {
                            this.state.billSundry.map((option : any, i :any)=>{
                                if (item.bscode == option.id) {

                                    item.bscode = option.label;
                                    item.bstype = option.type;
                                   
                                    item.nature = option.nature;

                                }

                            })

                        })


                    }



                    this.setState({ defSPType: got.data[0] })
                    this.defInitStateObj = { ...got.data[0] }
                } else {

                }
            } catch (err) {
                alert(err);
            }
        }

        loadGstCat = async () => {
            let urlStr: string = `/api/LoadMasterData?MasterType=${2008}&Company=${compCode}&Customer=${customer}`
            try {
                let { res, got } = await api(urlStr, "GET", '');
                if (res.status === 200) {
                    let gstCat: any = got.data.map((option: any) => ({

                        id: option.code,
                        value: option.name,
                        name: "gstcat"
                    }))

                    this.setState({ gstCat: gstCat });


                }
                else throw new Error('Bad Fetch 1')

            } catch (err) {
                alert(err);
            }
        }
        getBillSundryList = async () => {
            let url = `/api/BSMasterLoad?&Company=${compCode}&Customer=${customer}`;
            try {
                let { res, got } = await api(url, "GET", '');
                if (res.status === 200) {
                    let billsun: any = got.data.map((option: any) => ({

                        id: option.code,
                        label: option.name,
                        type: getBSTypeName(option.bsfed),
                        nature: option.bstype == 1 ? "Additive" : "Subtractive",
                        value: option.bsvalue
                    }))

                    this.setState({ billSundry: billsun });

                }
                else throw new Error('Bad Fetch 1')

            } catch (err) {
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
                <Component api={api} billSundryList={this.state.billSundry} customer={parseInt(customer)} compCode={parseInt(compCode)} username={username} gstCategory={this.state.gstCat} loadSPTypeMaster={this.state.defSPType} AlterLoadedFormData={this.AlterLoadedFormData.bind(this)} gettingVirtualCode={(!this.routeObj) ? 0 : parseInt(this.routeObj.code)} {...this.props} />
            )
        }
    }
    return SPDefault;
}