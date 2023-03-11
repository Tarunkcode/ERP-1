import * as React from 'react'
import useFetch from '../Hooks/useFetch';
interface IProps {
    location: any;
}
interface ISTATE {
    code: any
}
export default function LoadProcessMaster(Component: any) {
    const api = useFetch();
    class ProcessDefault extends React.Component<IProps, ISTATE> {
        constructor(props: any) {
            super(props);
            this.state = {
                code :null
            }
        }
        code = null;
        compCode = window.localStorage.getItem('compCode') || ""
        customer = window.localStorage.getItem('customer') || ""
    username = window.sessionStorage.getItem('username') || ""
        routeObj = this.props.location.state;
        //componentDidMount() {
        //    if (!this.routeObj) { }
        //    else {

        //        this.setState({ code: this.props.location.state.code  })
        //    }
        //}
        render() {
            
            return (
                <Component api={api } state={this.routeObj} gettingVirtualCode={(!this.routeObj) ? 0 : parseInt(this.routeObj.code)} {...this.props} />
                )
        }

    }
    return ProcessDefault;
}