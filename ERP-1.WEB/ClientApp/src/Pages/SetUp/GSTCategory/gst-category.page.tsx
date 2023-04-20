import * as React from 'react';
import { useHistory, useLocation } from 'react-router';
import { toast } from 'react-toastify';
import { MasterInput, MasterInput2 } from '../../../components/custom-input/custom-input.component';
import CustomeSwitch from '../../../components/CustomSwitch/custom-switch.component';
import useFetch from '../../../components/Hooks/useFetch';

import UnderConstruction from '../../../components/under-construction';
import { store2 } from '../../../Redux/config/config.reducer';
import { clear_form } from '../../Helper Functions/table';


export default function GSTCategory_Page() {
    const api = useFetch();
    var [rawObj, setRawObj]: any = React.useState({});
    var [def, setDef]: any = React.useState({});
    var obj: object = {};
    var compCode = window.localStorage.getItem('compCode') || ""
    var customer: string = window.localStorage.getItem('customer') || ""
    const history: any = useHistory();
    var loc = useLocation();
    const state : any = loc.state;

    const LoadDefaultData = async () => {
        if (state === null || !state) console.log(state, 'location state object')
          else {
            let urlStr = `/api/LoadMasterDetails?Code=${state.code}&Company=${compCode}&Customer=${customer}`
            console.log(state, 'location state object')

            try {
                let { res, got } = await api(urlStr, "GET", '');
                if (res.status == 200) {
                    setDef(got.data[0]);


                } else {
                    toast.error(got.msg);
                }
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
       let i: any = rawObj;
        console.log('i:', i);
        //console.log('calling')
       //const confUrl = 'http://103.25.128.155:12019/api/GstCategorySaving';
       const confUrl = '/api/SaveMasterData';

       try {
           let { res, got } = await api(confUrl, "POST", i);
           if (res.status == 200) {
             
               let ref = document.getElementById("form");
               toast.success(got.msg)
               clear_form(ref);
               state === null || !state ? null : history.push('/successfully-modify')
           }else toast.error(got.msg)
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
                <form className="form" id="form">
                    
                        <span className="d-flex section2 col-sm-12">
                         
                        <MasterInput2 label="Name" defaultt={def.name} name="name" ipType="text" ipTitle="" handleChange={handleChange} classCategory="form-control col-12 subMaster" />
                    </span>
                    <span className="d-flex section2 col-sm-12">
                        <MasterInput2 label="CGST" name="d1" defaultt={def.d1} ipType="number" ipTitle="" handleChange={handleChange} classCategory="form-control col-12 subMaster" />
                    </span>
                    <span className="d-flex section2 col-sm-12">
                        <MasterInput2 label="SGST" name="d2" defaultt={def.d2} ipType="number" ipTitle="" handleChange={handleChange} classCategory="form-control col-12 subMaster" />
                    </span>
                    <span className="d-flex section2 col-sm-12">
                        <MasterInput2 label="IGST" name="d3" defaultt={def.d3} ipType="number" ipTitle="" handleChange={handleChange} classCategory="form-control col-12 subMaster" />
                        </span>
                   
                </form>
             
                <div className="d-flex justify-content-center">
                <button className="btn btn-success col-md-1 p-1 m-3" onClick={handlePosting}>Save</button>
               </div>
             
            </div>
        </div>
    )
}