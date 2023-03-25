import * as React from 'react';
import { toast } from 'react-toastify'
import useFetch from '../Hooks/useFetch';
interface IState {
    defSubMaster: object;
}
interface IProps {
    location: any
}

export default function DefaultSubMaster(Component: any) {
    const api = useFetch();
    class SubMasterData extends React.Component<IProps, IState> {
        constructor(props: any) {
            super(props);
            this.state = {
                defSubMaster: {},
          
            }
        }
        compCode = window.localStorage.getItem('compCode') || ""
        customer = window.localStorage.getItem('customer') || ""
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
                let urlStr = `/api/LoadMasterDetails?Code=${this.props.location.state.code}&Company=${this.compCode}&Customer=${this.customer}`
                try {
                    let { res, got } = await api(urlStr, "GET", '');
                    if (res.status == 200) {
                        this.setState({ defSubMaster: got.data[0] });
                        this.defInitStateObj = { ...this.state.defSubMaster }
                    }
                    else {}
               
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
            return <Component api={api } defSubMaster={this.state.defSubMaster} AlterLoadedData={this.AlterLoadedData.bind(this)} gettingVirtualCode={(!this.routeObj) ? 0 : parseInt(this.routeObj.code)} {...this.props} />
        }
    }
    return SubMasterData;
}