import * as React from 'react';
import { CustomSelect, InputList, MasterInput } from '../../../components/custom-input/custom-input.component';
import { store2 } from '../../../Redux/config/config.reducer';

function UserMaster_Page() {
    var [currRoleData, setCurrRoleData]: any = React.useState([]);
    var [rawObj, setRawObj]: any = React.useState({});
   
    var obj: object = {};

    const compCode = window.sessionStorage.getItem('compCode') || ""
    const customer = window.sessionStorage.getItem('customer') || ""
    const username = window.sessionStorage.getItem('username') || ""
    React.useEffect(() => {
        const url =`http://103.25.128.155:12019/api/LoadUserRoles?Customer=${customer}&Company=${compCode}`
        var h = new Headers();
        h.append('Accept', 'application/json');
        h.append('Content-Type', 'application/json');
        h.append('CompCode', 'ESERPDB');
        h.append('FYear', '0');
        var req1: Request;
        req1 = new Request(url, {
            method: 'GET',
            headers: h,
            mode: 'cors'
        });
        try {
            fetch(req1).then(res => res.json()).then(r => { setCurrRoleData(r.data); console.log('dataArr', r.data) })

        } catch (err) {
            alert(err);
        }

    }, [])

    function handleChange(e: any) {
        e.preventDefault();
        var value = e.target.value;
        var name = e.target.name;
        var label: string = ''
        if (e.currentTarget.classList.contains('seriesConf')) label = "seriesConf";
        else alert("category Label are not set for one or multiple inputs 1")

        if (name === 'UName' || name === 'PWD' || name === 'UserName') value = value;
        else value = parseInt(value);

        store2.dispatch({ payload: value, key: e.target.name, type: "changeConfig", label: label });


        obj = {
            "Code": 0,
            "Active":1,
            'UserName': "U1",
            'Customer': parseInt(customer),
            'Company': parseInt(compCode),
            ...store2.getState().seriesConf
        }
        setRawObj(obj);
    }
    const handlePosting = async (e: any) => {
        e.preventDefault();
        console.log('calling');
       'Block' in rawObj ? null : rawObj['Block'] = 0
        'SU' in rawObj ? null : rawObj['SU'] = 0
        let i: any = JSON.stringify(rawObj);
        console.log('i:', i);
        //console.log('calling')
        const confUrl = 'http://103.25.128.155:12019/api/UserSave';


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
                <span style={{ fontSize: "20px" }}>User Master Saving</span>
            </div>
            <div className="card-body" style={{ margin: '0', padding: '0', minHeight: '80vh' }}>
                <div className="form">

                    <span className="d-flex section2 col-sm-6">

                        <MasterInput label="Name" name="UName" ipType="text" ipTitle="" handleChange={handleChange} classCategory="form-control col-7 seriesConf" />
                        <MasterInput label="Password" name="PWD" ipType="password" ipTitle="" handleChange={handleChange} classCategory="form-control col-7 seriesConf" />
                    </span>
                    <span className="d-flex section2 col-sm-6">
                        <CustomSelect label="SuperUser" name="SU" change={[{ 'code': 0, name: 'N' }, { 'code': 1, name: 'Y' }]} handleChange={handleChange} classCategory="form-control col-7 seriesConf" />
                        <CustomSelect label="is Block" name="Block" change={[{ 'code': 0, name: 'N' }, { 'code': 1, name: 'Y' }]} handleChange={handleChange} classCategory="form-control col-7 seriesConf" />
                    </span>
                    <span className="d-flex section2 col-sm-6">
                        <CustomSelect label="Role" name="Role" dataArray={currRoleData} change={handleChange} classCategory="form-control col-7 seriesConf" />
                       
                    </span>

                </div>


                <button className="btn btn-danger p-2 m-3" onClick={handlePosting}>Done</button>


            </div>
        </div>
        )
}
export default UserMaster_Page;