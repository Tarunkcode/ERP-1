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
                    let series: any = await got.data.map((option: any) => ({

                        id: option.code,
                        value: option.name,

                    }))
                    await this.setState({ series: series })
                
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
                        let modify_list: any = await got.data.map((option: any) => ({

                            id: option.code,
                            value: option.name,

                        }))
                        switch (loadCred[i].set) {
                            case 'group': await this.setState({ group: modify_list })
                            case 'type': await this.setState({ type: modify_list })
                            case 'category': await this.setState({ category: modify_list })
                            case 'brand': await this.setState({ brand: modify_list })
                            case 'matCanter': await this.setState({ matCanter: modify_list })
                            case 'uom': await this.setState({ uom: modify_list })
                            case 'gstCat': await this.setState({ gstCat: modify_list })
                            case 'subCat': await this.setState({ subCat: modify_list })
                            case 'clear': await this.setState({ clearance: modify_list })

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