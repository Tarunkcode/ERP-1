import * as React from 'react';


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
export default function ItemMasterWithLoad(Component : any) {
    class ParentItemMaster extends React.Component<{}, ISTATE> {
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
                    let urlStr: string = `http://103.25.128.155:12019/api/LoadMasterData?MasterType=${loadCred[i].mstr}&Company=46&Customer=57`
            req = new Request(urlStr,
                {
                    method: 'GET',
                    headers: header,
                    mode: 'cors'
                })
                    let response = await fetch(req);
                    if (response.status === 200) {
                        let got: any = await response.json();
                        switch (loadCred[i].set) {
                            case 'group': this.setState({ group : got.data })
                            case 'type': this.setState({ type: got.data })
                            case 'category': this.setState({ category: got.data })
                            case 'brand': this.setState({ brand : got.data })
                            case 'matCanter': this.setState({ matCanter : got.data })
                            case 'uom': this.setState({ uom: got.data })
                            case 'gstCat': this.setState({ gstCat: got.data })
                            case 'subCat': this.setState({ subCat: got.data })
                            
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
        }

        render() {
            return (
                <Component
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