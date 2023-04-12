import * as React from 'react';
import { toast } from 'react-toastify';
import { LoaderContext } from '../../AppContext/loaderContext';
import useFetch from '../Hooks/useFetch';

interface IProps {
    location: any;
}
interface ISTATE {
    defaultData: any,
    series: any[],
    group: any[],
    type: any[],
    category: any[],
    clearance: any[],
    itemModifyDetails: object;
    brand: any[],
    matCanter: any[],
    uom: any[],
    gstCat: any[],
    subCat: any[]
}
export default function ItemMasterWithLoad(Component: any) {
    const api = useFetch();
    class ParentItemMaster extends React.Component<IProps, ISTATE> {
        static contextType = LoaderContext;
        constructor(props: any) {
            super(props);
            this.state = {
                defaultData: {},
                group: [],
                type: [],
                category: [],
                itemModifyDetails: {},
                brand: [],
                clearance: [],
                matCanter: [],
                uom: [],
                gstCat: [],
                subCat: [],
                series: []
            }
        }
        fetchMasterData = async () => {

        }
        compCode = window.localStorage.getItem('compCode') || ""
        customer = window.localStorage.getItem('customer') || ""
        username = window.sessionStorage.getItem('username') || ""
        routeObj = this.props.location.state;

        getSeries = async () => {
            const { setLoader } = this.context;
            let SeriesUrl = `/api/GetSeries?TranType=6&SrType=0&Company=${this.compCode}&Customer=${this.customer}`;
            try {
                setLoader(true)
                let { res, got } = await api(SeriesUrl, "GET", '');
                if (res.status == 200) {

                    await this.setState({ series: got.data })
                    setLoader(false);
                }
                else {
                    setLoader(false)
                    toast.error(got.msg);
                 
                }
            }
            catch (err) {
                setLoader(false);
                alert(err)
            }
        }
        loadGroup = async () => {
            const { setLoader } = this.context;
            setLoader(true)
            let header = new Headers;
            var req: Request;
            header.append('Accept', 'application/json');
            header.append('Content-Type', 'application/json');
            header.append('CompCode', 'ESERPDB');
            header.append('FYear', '0');
        
            try {
               
            
                    let urlStr: string = `/api/LoadMasterData?MasterType=${79}&Company=${this.compCode}&Customer=${this.customer}`

                    let { res, got } = await api(urlStr, "GET", '');
                    if (res.status === 200) {
                            this.setState({ group: got.data })

                       

                        setLoader(false)
                    }
                    else {
                        setLoader(false);
                        throw new Error('Bad Fetch 1')
                    }
          

            } catch (err) {
                setLoader(false);
                alert(err);
            }
        }
      
        loadCategory = async () => {
            const { setLoader } = this.context;
            setLoader(true)
        
            try {


                let urlStr: string = `/api/LoadMasterData?MasterType=${1010}&Company=${this.compCode}&Customer=${this.customer}`

                let { res, got } = await api(urlStr, "GET", '');
                if (res.status === 200) {
                    this.setState({ category: got.data })



                    setLoader(false)
                }
                else {
                    setLoader(false);
                    throw new Error('Bad Fetch 1')
                }


            } catch (err) {
                setLoader(false);
                alert(err);
            }
        }
        loadBrand = async () => {
            const { setLoader } = this.context;
            setLoader(true)
       
            try {


                let urlStr: string = `/api/LoadMasterData?MasterType=${1002}&Company=${this.compCode}&Customer=${this.customer}`

                let { res, got } = await api(urlStr, "GET", '');
                if (res.status === 200) {
                    this.setState({ brand: got.data })



                    setLoader(false)
                }
                else {
                    setLoader(false);
                    throw new Error('Bad Fetch 1')
                }


            } catch (err) {
                setLoader(false);
                alert(err);
            }
        }
        loadMatCanter = async () => {
            const { setLoader } = this.context;
            setLoader(true)
    
            try {


                let urlStr: string = `/api/LoadMasterData?MasterType=${22}&Company=${this.compCode}&Customer=${this.customer}`

                let { res, got } = await api(urlStr, "GET", '');
                if (res.status === 200) {
                    this.setState({ matCanter: got.data })



                    setLoader(false)
                }
                else {
                    setLoader(false);
                    throw new Error('Bad Fetch 1')
                }


            } catch (err) {
                setLoader(false);
                alert(err);
            }
        }
        loadUom = async () => {
            const { setLoader } = this.context;
            setLoader(true)
       
            try {


                let urlStr: string = `/api/LoadMasterData?MasterType=${21}&Company=${this.compCode}&Customer=${this.customer}`

                let { res, got } = await api(urlStr, "GET", '');
                if (res.status === 200) {
                    this.setState({ uom: got.data })



                    setLoader(false)
                }
                else {
                    setLoader(false);
                    throw new Error('Bad Fetch 1')
                }


            } catch (err) {
                setLoader(false);
                alert(err);
            }
        }
        loadGstCat = async () => {
            const { setLoader } = this.context;
            setLoader(true)
         
            try {


                let urlStr: string = `/api/LoadMasterData?MasterType=${2008}&Company=${this.compCode}&Customer=${this.customer}`

                let { res, got } = await api(urlStr, "GET", '');
                if (res.status === 200) {
                    this.setState({ gstCat: got.data })



                    setLoader(false)
                }
                else {
                    setLoader(false);
                    throw new Error('Bad Fetch 1')
                }


            } catch (err) {
                setLoader(false);
                alert(err);
            }
        }
        loadSubCat = async () => {
            const { setLoader } = this.context;
            setLoader(true)
         
            try {


                let urlStr: string = `/api/LoadMasterData?MasterType=${1035}&Company=${this.compCode}&Customer=${this.customer}`

                let { res, got } = await api(urlStr, "GET", '');
                if (res.status === 200) {
                    this.setState({ subCat: got.data })



                    setLoader(false)
                }
                else {
                    setLoader(false);
                    throw new Error('Bad Fetch 1')
                }


            } catch (err) {
                setLoader(false);
                alert(err);
            }
        }
        loadCleareance = async () => {
            const { setLoader } = this.context;
            setLoader(true)
    
        
            try {


                let urlStr: string = `/api/LoadMasterData?MasterType=${1032}&Company=${this.compCode}&Customer=${this.customer}`

                let { res, got } = await api(urlStr, "GET", '');
                if (res.status === 200) {
                    this.setState({ clearance: got.data })



                    setLoader(false)
                }
                else {
                    setLoader(false);
                    throw new Error('Bad Fetch 1')
                }


            } catch (err) {
                setLoader(false);
                alert(err);
            }
        }
        loadType = async () => {
            const { setLoader } = this.context;
            setLoader(true)
         
            try {


                let urlStr: string = `/api/LoadMasterData?MasterType=${1009}&Company=${this.compCode}&Customer=${this.customer}`

                let { res, got } = await api(urlStr, "GET", '');
                if (res.status === 200) {
                    this.setState({ type: got.data })



                    setLoader(false)
                }
                else {
                    setLoader(false);
                    throw new Error('Bad Fetch 1')
                }


            } catch (err) {
                setLoader(false);
                alert(err);
            }
        }



        loadItemDetails = async () => {
            const { setLoader } = this.context;
                let url = `/api/LoadItemMasterDetails?Code=${this.routeObj.code}&Customer=${this.customer}&Company=${this.compCode}`;
            try {
                    setLoader(true)
                    let { res, got } = await api(url, "GET", '');
                    if (res.status == 200) {
                        let data = got.data;
                     
                        await this.setState({ itemModifyDetails: data[0] });
                        setLoader(false)
                    } else {
                        setLoader(false)
                        toast.error('loading data failed')
                    }
            } catch (err) {
                setLoader(false);
                    alert(err)
                }

        }

        componentDidMount() {
            this.getSeries();
            this.fetchMasterData();
            this.loadGroup();
            this.loadCategory();
            this.loadBrand();
            this.loadMatCanter();
            this.loadUom();
            this.loadGstCat();
            this.loadSubCat();
            this.loadCleareance();
            this.loadType();
            if (!this.routeObj) { }
            else {
            this.loadItemDetails();

            }

        }

        render() {
            return (
                <Component
                    api2={api}
            
                    series={this.state.series}
                    group={this.state.group}
                    type={this.state.type}
                    category={this.state.category}
                    gettingVirtualCode={this.routeObj ? parseInt(this.routeObj.code) : 0}
                    defItemMaster={this.state.itemModifyDetails}
                    brand={this.state.brand}
                    matCanter={this.state.matCanter}
                    clearance={this.state.clearance}
                    uom={this.state.uom}
                    gstCat={this.state.gstCat}
                    subCat={this.state.subCat}
                    {...this.props} />
            )
        }
    }
    return ParentItemMaster;
}