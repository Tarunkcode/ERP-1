import * as React from 'react';
import { useHistory } from 'react-router';
import { LoaderContext } from '../../AppContext/loaderContext';
import useFetch from '../Hooks/useFetch';
interface IState {
    defaultConf: object,
}
interface IProps {
    location : any

}

export default function DefaultConfigConf(Component: any) {

    const api = useFetch();
  
    class ConfSettings extends React.Component<IProps, IState> {
        static contextType = LoaderContext;
        constructor(props: any) {
            super(props);
            this.state = {
                defaultConf: {},
               
            }
        }
        compCode = window.localStorage.getItem('compCode') || ""
        customer = window.localStorage.getItem('customer') || ""
        username = window.sessionStorage.getItem('username') || ""
        ccBody = {
            "Customer": parseInt(this.customer),
            "Company": parseInt(this.compCode)
        }
        routeObj = this.props.location.state;
        
        defInitConfStateObj = {}
        AlterLoadedData = (obj: object) => {
         
            this.defInitConfStateObj = { ...this.defInitConfStateObj, ...obj }
            var newObj = this.defInitConfStateObj;
            return newObj;
        }
        FetchLoadingConfDetails = async () => {
            const loader = this.context;
            let urlStr = `/api/LoadConfiguration`
            let body = {
                "Customer": parseInt(this.customer),
                "Company": parseInt(this.compCode)
            }
            try {
                loader.setLoader(true);
                let { res, got } = await api(urlStr, "POST", body);
                if (res.status == 200) {
             

                    this.setState({ defaultConf: got.data[0] })
                    this.defInitConfStateObj = this.state.defaultConf;
                    loader.setLoader(false);
                }
            } catch (err) {
                loader.setLoader(false);
                alert(err)
            }
        }

        componentDidMount() {
            this.FetchLoadingConfDetails();

        }
     
        render() {
            return <Component api={api} defFeatureOptionMaster={this.state.defaultConf} AlterLoadedData={this.AlterLoadedData.bind(this)} {...this.props} />
        }
    }
        return ConfSettings;
}