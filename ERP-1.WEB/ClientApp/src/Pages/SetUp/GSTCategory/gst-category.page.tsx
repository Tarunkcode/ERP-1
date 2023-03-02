import * as React from 'react';
import { useLocation } from 'react-router';
import { MasterInput } from '../../../components/custom-input/custom-input.component';
import CustomeSwitch from '../../../components/CustomSwitch/custom-switch.component';

import UnderConstruction from '../../../components/under-construction';
import { store2 } from '../../../Redux/config/config.reducer';

export default function GSTCategory_Page() {

    var [rawObj, setRawObj]: any = React.useState({});
    var [def, setDef]: any = React.useState({});
    var obj: object = {};
    var compCode = window.localStorage.getItem('compCode') || ""
    var customer: string = window.localStorage.getItem('customer') || ""

    var loc = useLocation();
    const state : any = loc.state;

    const LoadDefaultData = async () => {
        if (state === null || !state) { console.log('state', state) }
        else {
            let urlStr = `http://103.25.128.155:12019/api/LoadMasterDetails?Code=${state.code}&Company=${compCode}&Customer=${customer}`
            console.log('urlStr', urlStr)
            var req: Request;
            const h = new Headers();
            h.append('Accept', 'application/json');
            h.append('Content-Type', 'application/json');
            h.append('CompCode', 'ESERPDB');
            h.append('FYear', '0');


            req = new Request(urlStr, {
                method: 'GET',
                headers: h,
                mode: 'cors'
            })

            try {

                await fetch(req).then((res: any) => res.json()).then((res: any) => {
                   setDef(res.data[0]);
                   
                });
            } catch (err) {
                alert(err)
            }
        }
    }
    React.useEffect(() => {
        LoadDefaultData();
    }, [])
   const handleChange = (e: any) => {

        e.preventDefault();

       var value = e.target.value;
       var name = e.target.name;
        var label: string = ''
       if (e.currentTarget.classList.contains('subMaster')) label = "subMaster";
        else alert("category Label are not set for one or multiple inputs 1")

      if(name !== "name") value = parseFloat(value);

       if (state === null || !state) {
           // INSERT
           store2.dispatch({ payload: value, key: e.target.name, type: "changeConfig", label: label });
           obj = {
               "MasterType": parseInt("2008"),
               'UserName': "U1",
               "Code": 0,
               'Customer': parseInt(customer),
               'Company': parseInt(compCode),
               ...store2.getState().subMaster
           }

       }
       else {
           // UPDATE
           let change = { [name]: value }
           var obj = {...def, ...change}
           store2.dispatch({ payload: obj, key: "", type: "changeConfig", label: "modifySubMaster" });
           obj = {
               "MasterType": parseInt("2008"),
               'UserName': "U1",
               "Code": parseInt(state.code),
               'Customer': parseInt(customer),
               'Company': parseInt(compCode),
               ...store2.getState().subMaster
           }
       }
        
           
       setRawObj(obj);
      
    }
   const handlePosting = async (e: any) => {
        e.preventDefault();
        console.log('calling');
       let i: any = JSON.stringify(rawObj);
        console.log('i:', i);
        //console.log('calling')
       //const confUrl = 'http://103.25.128.155:12019/api/GstCategorySaving';
       const confUrl = 'http://103.25.128.155:12019/api/SaveMasterData';


        var req1: Request;
        let h = new Headers();
        h.append('Accept', 'application/json');
        h.append('Content-Type', 'application/json');
        h.append('CompCode', 'ESERPDB');
        h.append('FYear', '0');
        req1 = new Request(confUrl, {
            method: 'POST',
            headers: h,
            body: i,
            mode: 'cors'
        });
        try {
            const response = await fetch(req1);
            const data = await response.json();
            console.log('got response msg', data);
            alert(data.msg);
        } catch (err) {
            alert(err)
        }

    }
    return (
        <div className="main card firstDiv">
            <div className="card-title mb-2 col-12 text-center" style={{ margin: '0 auto' }}>
                <span style={{ fontSize: "20px" }}>GST Category</span>
            </div>
            <div className="card-body" style={{ margin: '0', padding: '0', minHeight: '80vh' }}>
                <div className="form">
                    
                        <span className="d-flex flex-column section2 col-sm-12">
                         
                        <MasterInput label="Name" defaultt={def.name } name="name" ipType="text" ipTitle="" handleChange={handleChange} classCategory="form-control col-4 subMaster" />
                        <MasterInput label="CGST" name="d1" defaultt={def.d1} ipType="number" ipTitle="" handleChange={handleChange} classCategory="form-control col-4 subMaster" />
                        
                        <MasterInput label="SGST" name="d2" defaultt={def.d2} ipType="number" ipTitle="" handleChange={handleChange} classCategory="form-control col-4 subMaster" />
                        <MasterInput label="IGST" name="d3" defaultt={def.d3} ipType="number" ipTitle="" handleChange={handleChange} classCategory="form-control col-4 subMaster" />
                        </span>
                   
                </div>
             

                       <button className="btn btn-danger p-2 m-3" onClick={handlePosting}>Save</button>
        
             
            </div>
        </div>
    )
}