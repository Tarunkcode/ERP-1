import * as React from 'react'
import { toast } from 'react-toastify';
import { LoaderContext } from '../../AppContext/loaderContext';
import useFetch from '../Hooks/useFetch';
interface IProps {
    location: any;
}
interface ISTATE {
    code: any,
    overhead: any[],
    operation: any[],
    jobwork: any[],
    matCanter : any[]
}
export default function LoadProcessMaster(Component: any) {
    const api = useFetch();
    class ProcessDefault extends React.Component<IProps, ISTATE> {
        static contextType = LoaderContext;
        constructor(props: any) {
            super(props);
            this.state = {
                code: null,
                overhead: [],
                operation: [],
                jobwork: [],
                matCanter : []
            }
        }
        code = null;
        compCode = window.localStorage.getItem('compCode') || ""
        customer = window.localStorage.getItem('customer') || ""
        username = window.sessionStorage.getItem('username') || ""
        routeObj = this.props.location.state;
        load1 = async () => {
            // Process OverHead
            const loader = this.context;
            const OvrHeadStr = `/api/LoadMasterData?MasterType=1030&company=${this.compCode}&customer=${this.customer}`;
            try {
                loader.setLoader(true)
                let { res, got } = await api(OvrHeadStr, "GET", '');

                if (res.status == 200) {
                    this.setState({ overhead: got.data });
                    loader.setLoader(false)
                }
                else { loader.setLoader(false); toast.error(got.msg) }
            } catch (err) {
                loader.setLoader(false);
                alert(err)

            }
        }
        load2 = async () => {
            // Process Operation
            const loader = this.context;
            const OprnStr = `/api/LoadMasterData?MasterType=1034&company=${this.compCode}&customer=${this.customer}`;
            try {
                loader.setLoader(true)
                let { res, got } = await api(OprnStr, "GET", '');

                if (res.status == 200) {
                    this.setState({ operation: got.data });
                    loader.setLoader(false)
                }
                else {loader.setLoader(false);toast.error(got.msg) }
            } catch (err) {
                 loader.setLoader(false)
                alert(err)

            }
        }
        load3 = async () => {

            const loader = this.context;
            const urlLoadModify = `/api/LoadAccMList`;
            let body = {
                "Customer": parseInt(this.customer),
                "Company": parseInt(this.compCode),
                "AccType": 3,
                "Series": 0,
                "Group": 0
            }
            try {
                loader.setLoader(true)
                
                let { res, got } = await api(urlLoadModify, "POST", body);

                if (res.status == 200) {
             
                        this.setState({ jobwork : got.data });
                        loader.setLoader(false)
                      
                   
                } else {
                    loader.setLoader(false)
                   
                    toast.error(got.msg)
                }

            } catch (err) {
                loader.setLoader(false)
                
                alert(err)
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
        componentDidMount() {
            this.load1();
            this.load2();
            this.load3();
            this.loadMatCanter();
            if (!this.routeObj) { }
            else {

                this.setState({ code: this.props.location.state.code  })
            }
        }
        render() {

            return (
                <Component api={api} state={this.routeObj} overhead={this.state.overhead} jobwork={this.state.jobwork} operation={this.state.operation} gettingVirtualCode={(!this.routeObj) ? 0 : parseInt(this.routeObj.code)} matCenter={this.state.matCanter} {...this.props} />
            )
        }

    }
    return ProcessDefault;
}