import * as React from 'react';
import { toast } from 'react-toastify';
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
            let SeriesUrl = `/api/GetSeries?TranType=6&SrType=0&Company=${this.compCode}&Customer=${this.customer}`;
            try {
                let { res, got } = await api(SeriesUrl, "GET", '');
                if (res.status == 200) {
                  
                    await this.setState({ series: got.data })
                
                }
                else toast.error(got.msg);
            }
            catch (err) {
                alert(err)
            }
        }
        loadSubMasters = async () => {
            let header = new Headers;
            var req: Request;
            header.append('Accept', 'application/json');
            header.append('Content-Type', 'application/json');
            header.append('CompCode', 'ESERPDB');
            header.append('FYear', '0');
            let loadCred = [{ 'set': "group", 'mstr': 79 }, { 'set': 'type', 'mstr': 1009 }, { 'set': 'category', 'mstr': 1010 }, { 'set': 'brand', 'mstr': 1002 }, { 'set': 'matCanter', 'mstr': 22 }, { 'set': 'uom', 'mstr': 21 }, { 'set': 'gstCat', 'mstr': 2008 }, { 'set': 'subCat', 'mstr': 1035 }, { 'set': 'clear', 'mstr': 1032 }]
            try {
                for (let i = 0; i < loadCred.length; i++) {
                    let urlStr: string = `/api/LoadMasterData?MasterType=${loadCred[i].mstr}&Company=${this.compCode}&Customer=${this.customer}`

                    let { res, got } = await api(urlStr, "GET", '');
                    if (res.status === 200) {
                       
                        switch (loadCred[i].set) {
                            case 'group': await this.setState({ group: got.data })
                            case 'type': await this.setState({ type: got.data })
                            case 'category': await this.setState({ category: got.data })
                            case 'brand': await this.setState({ brand: got.data })
                            case 'matCanter': await this.setState({ matCanter: got.data })
                            case 'uom': await this.setState({ uom: got.data })
                            case 'gstCat': await this.setState({ gstCat: got.data })
                            case 'subCat': await this.setState({ subCat: got.data })
                            case 'clear': await this.setState({ clearance: got.data })

                        }


                    }
                    else throw new Error('Bad Fetch 1')
                }

            } catch (err) {
                alert(err);
            }
        }

        loadItemDetails = async () => {
           
                let url = `/api/LoadItemMasterDetails?Code=${this.routeObj.code}&Customer=${this.customer}&Company=${this.compCode}`;
                try {
                    let { res, got } = await api(url, "GET", '');
                    if (res.status == 200) {
                        let data = got.data;
                     
                        await this.setState({ itemModifyDetails: data[0] });
                    } else {
                        toast.error('loading data failed')
                    }
                } catch (err) {
                    alert(err)
                }

        }

        componentDidMount() {

            this.fetchMasterData();
            this.loadSubMasters();
            this.getSeries();
            if (!this.routeObj) { }
            else {
            this.loadItemDetails();

            }

        }

        render() {
            return (
                <Component
                    api2={api}
                    default={this.state.defaultData}
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