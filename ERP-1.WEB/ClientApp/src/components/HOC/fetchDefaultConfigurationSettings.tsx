import * as React from 'react';
interface IState {
    defaultConf: object,
}
interface IProps {
    location : any

}

export default function DefaultConfigConf(Component: any) {
    class ConfSettings extends React.Component<IProps, IState> {
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
            let urlStr = `http://103.25.128.155:12019/api/LoadConfiguration`
            console.log('urlStrrrrr', urlStr)
            var req: Request;
            const h = new Headers();
            h.append('Accept', 'application/json');
            h.append('Content-Type', 'application/json');
            h.append('CompCode', 'ESERPDB');
            h.append('FYear', '0');


            req = new Request(urlStr, {
                method: 'POST',
                headers: h,
                body: JSON.stringify(this.ccBody),
                mode: 'cors'
            })

            try {

               await fetch(req).then((res: any) => res.json()).then((res: any) => {

                    this.setState({ defaultConf: res.data[0] }); res.data.length === 0 ? console.log('No data found for loading') : null
                    this.defInitConfStateObj = this.state.defaultConf;
                    
                });
            } catch (err) {
                alert(err)
            }
        }

        componentDidMount() {
            this.FetchLoadingConfDetails();

        }
     
        render() {
            return <Component defFeatureOptionMaster={this.state.defaultConf} AlterLoadedData={this.AlterLoadedData.bind(this)} {...this.props} />
        }
    }
        return ConfSettings;
}