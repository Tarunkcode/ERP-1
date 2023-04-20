import * as React from 'react';
import { toast } from 'react-toastify';
import { LoaderContext } from '../../AppContext/loaderContext';
import useFetch from '../Hooks/useFetch';

interface IPROPS {
    location: any
}
interface ISTATE {
    series: any[],
    delTerms: any[],
    PayTerms: any[],
    custGp: any[],
    supGp: any[],
    country: any[],
    zone: any[],
    state: any[],
    city: any[],
    bank: any[],
    branch: any[],
    currency: any[],
    scheme: any[],
    nature: any[],
    master: any,
    gstCat: any[],
    default_data: any
}
export function fetchMasters(Component: any) {
    const token: any = window.sessionStorage.getItem('token');
    const api = useFetch();
    class MasterApi extends React.Component<IPROPS, ISTATE> {
        static contextType = LoaderContext;
        constructor(props: any) {
            super(props);
            this.state = {
                series: [],
                delTerms: [],
                PayTerms: [],
                custGp: [],
                supGp: [],
                country: [],
                zone: [],
                state: [],
                city: [],
                bank: [],
                branch: [],
                currency: [],
                scheme: [],
                nature: [],
                default_data: null,
                gstCat: [],
                master: {}
            }
        }
        compCode = window.localStorage.getItem('compCode') || ""
        customer = window.localStorage.getItem('customer') || ""
        username = window.sessionStorage.getItem('username') || ""
        routeObj = this.props.location.state;
        getDefaultData = async () => {
            const loader = this.context;
            loader.setLoader(true)
            let defaultUrl = `/api/LoadAccMasterDetails?Code=${this.props.location.state.code}&company=${this.compCode}&customer=${this.customer}`
            try {
                let { res, got } = await api(defaultUrl, "GET", '');
                if (res.status == 200) {
                    let dataObj = got.data[0];
                    //alter dataObj
                    got.data[0].bankdetail.map((item: any) => {
                        item.name = { label: item.bankname, value: item.bank };
                        item.address = { label: item.branchname, value: item.address }
                        item.acno = item.acno;
                        item.actype = item.actype;
                        item.swiftcode = item.swiftcode;
                        item.ifsccode = item.ifsccode;
                        item.currency = { label: item.currencyname, value: item.currency };
                        item.country = {label : item.countryname, value: item.country };
                        item.accno = item.accno;
                        item.acctype = item.acctype;
                    })
                    this.setState({ default_data: got.data[0] });
                    loader.setLoader(false)
                }
                else {
                    loader.setLoader(false)
                    toast.error('default data load failed')
                }
            } catch (err) {

                loader.setLoader(false)
                alert(err)
            }
        }
        getSeriesList = async () => {
            const loader = this.context;
            loader.setLoader(true);
            let seriesUrl = `/api/GetSeries?TranType=48&SrType=0&customer=${this.customer}&company=${this.compCode}`;
            try {
                let { res, got } = await api(seriesUrl, 'GET', '');
                if (res.status == 200) {
                    this.setState({ series: got.data })
                    loader.setLoader(false);
                } else {

                    loader.setLoader(false);
                    toast.error('Something Went Wrong in Series loading')
                }
            } catch (err) {
                loader.setLoader(false);
                alert(err);
            }
        }
        getMasterData = async () => {
            const loader = this.context;
            loader.setLoader(true);
            const masterCode = [{ name: 'delT', code: 30 }, { name: 'payT', code: 31 }, { name: 'custGp', code: 1005 }, { name: 'supGp', code: 111 }, { name: 'count', code: 143 }, { name: 'zon', code: 1004 }, { name: 'stat', code: 26 }, { name: 'cty', code: 120 }, { name: 'bnk', code: 1018 }, { name: 'bnch', code: 1019 }, { name: 'curr', code: 102 }, { name: 'gstCat', code: 2008 }, { name: 'nature', code: 1031 }]
            try {
                for (let i = 0; i < masterCode.length; i++) {
                    const urlMaster = `/api/GetMasterData?MasterType=${masterCode[i].code}&SrType=1&customer=${this.customer}&company=${this.compCode}`;
                    let { res, got }: any = await api(urlMaster, "GET", '');
                    if (res.status == 200) {
                        let data = got.data;
                        switch (masterCode[i].name) {
                            case 'delT': this.setState({ delTerms: got.data })
                            case 'payT': this.setState({ PayTerms: got.data })
                            case 'custGp': this.setState({ custGp: got.data })
                            case 'supGp': this.setState({ supGp: got.data })
                            case 'count': this.setState({ country: got.data })
                            case 'zon': this.setState({ zone: got.data })
                            case 'stat': this.setState({ state: got.data })
                            case 'cty': this.setState({ city: got.data })
                            case 'bnk': this.setState({ bank: got.data })
                            case 'bnch': this.setState({ branch: got.data })
                            case 'curr': this.setState({ currency: got.data })

                            case 'gstCat': this.setState({ gstCat: got.data })
                            case 'nature': this.setState({ nature: got.data })

                        }

                    } else {
                        loader.setLoader(false);
                        toast.error('ERROR: Masters loading failed')
                    }
                }
                this.setState({
                    master: {
                        delTerms: this.state.delTerms,
                        PayTerms: this.state.PayTerms,
                        custGp: this.state.custGp,
                        supGp: this.state.supGp,
                        country: this.state.country,
                        zone: this.state.zone,
                        state: this.state.state,
                        city: this.state.city,
                        bank: this.state.bank,
                        branch: this.state.branch,
                        currency: this.state.currency,

                        nature: this.state.nature,

                        gstCat: this.state.gstCat
                    }
                })
                loader.setLoader(false);
            } catch (err) {
                loader.setLoader(false);
                alert(err)
            }

        }
        componentDidMount() {
            this.getSeriesList();
            this.getMasterData();
            if (!this.routeObj) { }
            else {

                this.getDefaultData();
            }
        }

        render() {
            return (
                <Component api={api} series={this.state.series} masters={this.state.master} defaultData={this.state.default_data} gettingVirtualCode={!this.routeObj ? 0 : parseInt(this.routeObj.code)} {...this.props} />
            )
        }
    }

    return MasterApi;
}

