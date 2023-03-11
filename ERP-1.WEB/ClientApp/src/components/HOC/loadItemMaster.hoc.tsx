import * as React from 'react';
import { toast } from 'react-toastify';
import useFetch from '../Hooks/useFetch';

interface IProps {
    api: any;
}
interface ISTATE {
    defaultData: any,
    series: any[],
    group: any[],
    type: any[],
    category: any[],
    brand: any[],
    matCanter: any[],
    uom: any[],
    gstCat: any[],
    subCat : any[]
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
                brand: [],
                matCanter: [],
                uom: [],
                gstCat: [],
                subCat : [],
                series: []
            }
        }
        fetchMasterData = async () => {

        }
        getSeries = async () => {
            let SeriesUrl = '/api/GetSeries?TranType=6&SrType=0&Company=46&Customer=57';
            try {
                let { res, got } = await api(SeriesUrl, "GET", '');
                if (res.status == 200) {
                    let series: any = got.data.map((option: any) => ({
                     
                        id: option.code,
                        value: option.name,

                    }))
                    this.setState({ series: series })
                    console.log('1', series)
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
            let loadCred = [{ 'set': "group", 'mstr': 79 }, { 'set': 'type', 'mstr': 1009 }, { 'set': 'category', 'mstr': 1010 }, { 'set': 'brand', 'mstr': 1002 }, { 'set': 'matCanter', 'mstr': 22 }, { 'set': 'uom', 'mstr': 21 }, { 'set': 'gstCat', 'mstr': 2008 }, { 'set':'subCat', 'mstr' : 1035 }]
            try {
                for (let i = 0; i < loadCred.length; i++) {
                    let urlStr: string = `/api/LoadMasterData?MasterType=${loadCred[i].mstr}&Company=46&Customer=57`
           
                    let {res, got } = await api(urlStr,"GET",'');
                    if (res.status === 200) {
                        let modify_list: any = got.data.map((option: any) => ({

                            id: option.code,
                            value: option.name,

                        }))
                        switch (loadCred[i].set) {
                            case 'group': this.setState({ group: modify_list })
                            case 'type': this.setState({ type: modify_list })
                            case 'category': this.setState({ category: modify_list })
                            case 'brand': this.setState({ brand: modify_list })
                            case 'matCanter': this.setState({ matCanter: modify_list})
                            case 'uom': this.setState({ uom: modify_list })
                            case 'gstCat': this.setState({ gstCat: modify_list })
                            case 'subCat': this.setState({ subCat: modify_list})
                            
                        }
                        
                       
                    }
                    else throw new Error('Bad Fetch 1')
                }

            } catch (err) {
                alert(err);
            }
        }
        componentDidMount() {
            this.fetchMasterData();
            this.loadSubMasters();
            this.getSeries();
        }

        render() {
            return (
                <Component
                    api2={api }
                    default={this.state.defaultData}
                    series={this.state.series}
                    group={this.state.group}
                    type={this.state.type}
                    category={this.state.category}
                    brand={this.state.brand}
                    matCanter={this.state.matCanter}
                    uom={this.state.uom}
                    gstCat={this.state.gstCat}
                    subCat={this.state.subCat}
                    {...this.props} />
                )
        }
    }
    return ParentItemMaster;
}