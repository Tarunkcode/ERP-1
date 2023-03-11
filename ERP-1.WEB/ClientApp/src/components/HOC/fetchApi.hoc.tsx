import * as React from 'react';
import useFetch from '../Hooks/useFetch';

export function fetchMasters(Component: any) {
    const token: any = window.sessionStorage.getItem('token');
    const api = useFetch();
    class MasterApi extends React.Component {
        constructor(props: any) {
            super(props);
            this.state = {
                series: [],
                fetchApi: () => { },
                postApi: () => { }
            }
        }
        //urlStr = this.props.url;

        fetchApi = ( masterCode : number, label: string ) => {
            const urlStr = `http://103.25.128.155:12019/api/GetSeries?TranType=48&SrType=0&customer=57&company=46`;
            const urlMaster = `http://103.25.128.155:12019/api/GetMasterData?MasterType=${masterCode}&SrType=1&customer=${57}&company=${46}`;
            try {

                var req: Request;
                let h = new Headers();
                h.append('Accept', 'application/json');
                h.append('CompCode', 'ESERPDB');
                h.append("Content-Type", "application/json");
                h.append('FYear', '0');
                h.append('Authorization', `Bearer ${token}`)
            switch (label) {
                case 'series':
                    req = new Request(urlStr, {
                        method: 'GET',
                        headers: h,
                        mode: 'cors'
                    });
                    return fetch(req);

                case 'master':
                    req = new Request(urlMaster, {
                        method: 'GET',
                        headers: h,
                        mode: 'cors'
                    });
                    return fetch(req);
                default: alert('Something Went Wrong');
            }

            } catch (err) {alert(err)}
        }
     
         
        
        render() {
            return (
                <Component api={api } fetchApi={this.fetchApi} {...this.props} />
            )
        }
    }
  
    return MasterApi;
}

