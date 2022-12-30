import * as React from 'react';
import { toast } from 'react-toastify'
interface IState {
    defSubMaster: object;
}
interface IProps {
    location: any
}

export default function DefaultSubMaster(Component: any) {

    class SubMasterData extends React.Component<IProps, IState> {
        constructor(props: any) {
            super(props);
            this.state = {
                defSubMaster: {},
          
            }
        }
        compCode = window.sessionStorage.getItem('compCode') || ""
        customer = window.sessionStorage.getItem('customer') || ""
        username = window.sessionStorage.getItem('username') || ""
        routeObj = this.props.location.state;
        defInitStateObj = {}
        AlterLoadedData = (obj: object) => {
            this.defInitStateObj = { ...this.defInitStateObj, ...obj }
            var newObj = this.defInitStateObj;
            return newObj;
        }

        FetchLoadingSubMasterDetails = async () => {
            if (this.props.location.state !== null) {
                let urlStr = `http://103.25.128.155:12019/api/LoadMasterDetails?Code=${this.props.location.state.code}&Company=${this.compCode}&Customer=${this.customer}`
                console.log('load sub Master', urlStr);

                var req: Request;
                const h = new Headers();
                h.append('Accept', 'application/json');
                h.append('Content-Type', 'application/json');
                h.append('CompCode', 'ESERPDB');
                h.append('FYear', '0');


                req = new Request(urlStr, {
                    method: 'GET',
                    headers: h,
                    mode: 'cors'
                })

                try {

                   await fetch(req).then((res: any) => res.json()).then((res: any) => {
                        this.setState({ defSubMaster: res.data[0] }); res.data.length === 0 ? console.log('No data found for loading') : null;
                        this.defInitStateObj = { ...this.state.defSubMaster }
                    });
                } catch (err) {
                    alert(err)
                }

            } else {}
    }
        componentDidMount() {
            if (!this.routeObj) { }
            else {
               
                this.FetchLoadingSubMasterDetails();
            }


        }
        componentDidUpdate(prevProps: any) {
            if (prevProps.location !== this.props.location)
                if (!this.routeObj) { }
                else {

                    this.FetchLoadingSubMasterDetails();
                }
        }
        render() {
            return <Component defSubMaster={this.state.defSubMaster} AlterLoadedData={this.AlterLoadedData.bind(this)} gettingVirtualCode={(!this.routeObj) ? 0 : parseInt(this.routeObj.code)} {...this.props} />
        }
    }
    return SubMasterData;
}