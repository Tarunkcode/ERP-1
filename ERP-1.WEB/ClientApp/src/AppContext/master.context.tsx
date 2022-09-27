
import * as React from 'react';
import { useState, createContext, useEffect } from 'react';
//interface IApiData {
//    masterApiData: {}
//}
//
export var MasterApiContext = createContext({ seriesMasterData: [], delMasterData: [], payMasterData: [], customerMasterData: []});
export function MasterApiProvider({ children }: any) {
   
    var [seriesMasterData, setSeriesMasterData] = useState([]);
    var [delMasterData, setDelMasterData] = useState([]);
    var [payMasterData, setPayMasterData] = useState([]);
    var [customerMasterData, setCustomerMasterData] = useState([]);
    useEffect(() => {
        const urlSeries = 'http://103.25.128.155:12019/api/GetSeries?TranType=3&SrType=1&TranSubType=0';
        const urlDelTerms = 'http://103.25.128.155:12019/api/GetMasterData?MasterType=30';
        const urlPayTerms = 'http://103.25.128.155:12019/api/GetMasterData?MasterType=31';
        const urlCustomerGroup = 'http://103.25.128.155:12019/api/GetMasterData?MasterType=1005';
        let count = 1;
        let h = new Headers();
        h.append('Accept', 'application/json');
        h.append('CompCode', 'Comp0021');
        h.append('FYear', '2022');
        var sendObj: {} = {};
        var req1 = new Request(urlSeries, {
            method: 'GET',
            headers: h,
            mode: 'cors'
        });
        var req2 = new Request(urlDelTerms, {
            method: 'GET',
            headers: h,
            mode: 'cors'
        });
        var req3 = new Request(urlPayTerms, {
            method: 'GET',
            headers: h,
            mode: 'cors'
        });
        var req4 = new Request(urlCustomerGroup, {
            method: 'GET',
            headers: h,
            mode: 'cors'
        });

        try {

            fetch(req1)
                .then((res) => {
                    if (res.ok) {
                        let json = res.json();

                        return json;
                    }
                    else {
                        throw new Error('Bad Fetch 1');
                    }
                })
                .then((result) => {
                  
                    setSeriesMasterData(result.data);
                })


            fetch(req2)
                .then((res) => {
                    if (res.ok) {
                        let json = res.json();

                        return json;
                    }
                    else {
                        throw new Error('Bad Fetch 2');
                    }
                })
                .then((result) => {
                    setDelMasterData(result.data);
                
                })


            fetch(req3)
                .then((res) => {
                    if (res.ok) {
                        let json = res.json();

                        return json;
                    }
                    else {
                        throw new Error('Bad Fetch 3');
                    }
                })
                .then((result) => {

                    setPayMasterData(result.data);

                })

            fetch(req4)
                .then((res) => {
                    if (res.ok) {
                        let json = res.json();

                        return json;
                    }
                    else {
                        throw new Error('Bad Fetch 4');
                    }
                })
                .then((result) => {
                    
                    setCustomerMasterData(result.data);

                })
           
        } catch ( err) {
            alert(err)
        }


    }, [])
        
    var value = {seriesMasterData, delMasterData, payMasterData, customerMasterData };

    return <MasterApiContext.Provider value={value}>{children}</MasterApiContext.Provider>
}