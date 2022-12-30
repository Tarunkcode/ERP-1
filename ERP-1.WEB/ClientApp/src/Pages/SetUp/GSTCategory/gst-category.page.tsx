import * as React from 'react';
import { MasterInput } from '../../../components/custom-input/custom-input.component';
import CustomeSwitch from '../../../components/CustomSwitch/custom-switch.component';

import UnderConstruction from '../../../components/under-construction';
import { store2 } from '../../../Redux/config/config.reducer';

export default function GSTCategory_Page() {
    var [rawObj, setRawObj]: any = React.useState({});
    var obj: object = {};

   const handleChange = (e: any) => {

        e.preventDefault();

       var value = e.target.value;
       var name = e.target.name;
        var label: string = ''
        if (e.currentTarget.classList.contains('seriesConf')) label = "seriesConf";
        else alert("category Label are not set for one or multiple inputs 1")

      if(name !== "Name") value = parseFloat(value);
        //console.log('key : ' + e.target.name + ',value : ' + value);
        store2.dispatch({ payload: value, key: e.target.name, type: "changeConfig", label: label });

        
            obj = {
                "MasterType": parseInt("2008"),
                'UserName': "U1",
                'Customer': 1,
                'Company': 1,
                ...store2.getState().seriesConf
       }
       setRawObj(obj);
      
    }
   const handlePosting = async (e: any) => {
        e.preventDefault();
        console.log('calling');
       let i: any = JSON.stringify(rawObj);
        console.log('i:', i);
        //console.log('calling')
       const confUrl = 'http://103.25.128.155:12019/api/GstCategorySaving';


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
                    
                        <span className="d-flex section2 col-sm-6">
                         
                        <MasterInput label="Name" name="Name" ipType="text" ipTitle="" handleChange={handleChange} classCategory="form-control col-7 seriesConf" />
                        <MasterInput label="CGST" name="CGST" ipType="number" ipTitle="" handleChange={handleChange} classCategory="form-control col-7 seriesConf" />
                        </span>
                     <span className="d-flex section2 col-sm-6">
                        <MasterInput label="SGST" name="SGST" ipType="number" ipTitle="" handleChange={handleChange} classCategory="form-control col-7 seriesConf" />
                        <MasterInput label="IGST" name="IGST" ipType="number" ipTitle="" handleChange={handleChange} classCategory="form-control col-7 seriesConf" />
                        </span>
                   
                </div>
             

                       <button className="btn btn-danger p-2 m-3" onClick={handlePosting}>Save</button>
        
             
            </div>
        </div>
    )
}