import * as React from 'react'
interface IProps {
    location: any;
}
interface ISTATE {
    code: any
}
export default function LoadProcessMaster(Component: any) {

    class ProcessDefault extends React.Component<IProps, ISTATE> {
        constructor(props: any) {
            super(props);
            this.state = {
                code :null
            }
        }
        code = null;
    compCode = window.sessionStorage.getItem('compCode') || ""
    customer = window.sessionStorage.getItem('customer') || ""
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
                <Component state={this.routeObj} gettingVirtualCode={(!this.routeObj) ? 0 : parseInt(this.routeObj.code)} {...this.props} />
                )
        }

    }
    return ProcessDefault;
}