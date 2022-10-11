import * as React from 'react';

export function fetchMasters(Component: any) {

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
            const urlStr = `http://103.25.128.155:12019/api/GetSeries?TranType=${masterCode}&SrType=1&TranSubType=0`;
            const urlMaster = `http://103.25.128.155:12019/api/GetMasterData?MasterType=${masterCode}`;
            try {

            var req: Request;
            let h = new Headers();
            h.append('Accept', 'application/json');
            h.append('CompCode', 'Comp0021');
            h.append('FYear', '2022');
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
                <Component fetchApi={this.fetchApi} {...this.props} />
            )
        }
    }
  
    return MasterApi;
}

