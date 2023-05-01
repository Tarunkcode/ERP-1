import * as React from 'react';
import useFetch from '../components/Hooks/useFetch';
import { LoaderContext } from './loaderContext';
export const ConfigContext = React.createContext({ conf: {}, resetConf: (arg : any) => { }});


//1. Create Context(basic box)
//2. Declare Provider(place to hold conf)

//4. Create Consumer( to enable access to other components)

interface IState {
    defaultConf: any;
    resetConf: any;
}
interface Iprops {

    children: any;
}
export default class ConfigProvider extends React.Component<Iprops, IState> {
    static contextType = LoaderContext;
    constructor(props: any) {
        super(props);
        this.state = {
            defaultConf: {},
            resetConf: () => { }
        }
    }
    compCode = window.localStorage.getItem('compCode') || ""
    customer = window.localStorage.getItem('customer') || ""


    FetchLoadingConfDetails = async () => {
        let api = useFetch();
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
      
                loader.setLoader(false);
            }
        } catch (err) {
            loader.setLoader(false);
            alert(err)
        }
    }
    handleConfChange = (arg: any) => {
        this.FetchLoadingConfDetails();
    }
    componentDidMount() {
        this.FetchLoadingConfDetails();
    }
 
    render() {
        return (
            <ConfigContext.Provider value={{ conf: this.state.defaultConf, resetConf: this.handleConfChange }}>{this.props.children}</ConfigContext.Provider>
        )
    }
}