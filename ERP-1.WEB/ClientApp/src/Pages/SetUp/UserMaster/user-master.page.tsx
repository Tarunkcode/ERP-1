import * as React from 'react';
import DatalistInput from 'react-datalist-input';
import 'react-datalist-input/dist/styles.css';
import { useHistory, useLocation } from 'react-router';
import { toast } from 'react-toastify';
import { CustomSelect, InputList, MasterInput, MasterInput2 } from '../../../components/custom-input/custom-input.component';
import useFetch from '../../../components/Hooks/useFetch';
import { store2 } from '../../../Redux/config/config.reducer';
import { clear_form } from '../../Helper Functions/table';

function UserMaster_Page() {
    var [currRoleData, setCurrRoleData]: any = React.useState([]);
    var [rawObj, setRawObj]: any = React.useState({});
    const api = useFetch();
    var obj: object = {};

    const compCode = window.localStorage.getItem('compCode') || ""
    const customer = window.localStorage.getItem('customer') || ""
    const username = window.sessionStorage.getItem('username') || ""

    const history: any = useHistory();
    var loc = useLocation();
    const state: any = loc.state;


    const loadUserRoles = async () => {
        const url = `/api/LoadUserRoles?Customer=${customer}&Company=${compCode}`

        try {
            let { res, got } = await api(url, "GET", '');
            if (res.status == 200) {
                let modify_list: any = got.data.map((option: any) => ({

                    id: option.code,
                    value: option.name,
                    name: "Role"
                }))
                setCurrRoleData(modify_list)
            } else toast.error(got.msg)

        } catch (err) {
            alert(err);
        }
    }
    React.useEffect(() => {
        loadUserRoles();

    }, [])
    const handleList = (item : any) => {
        let value = parseInt(item.id)
        let name = (item.name)
        let label = "seriesConf";
        store2.dispatch({ payload: value, key: name, type: "changeConfig", label: label });


        obj = {
            "Code": 0,
            "Active": 1,
            'UserName': "U1",
            'Customer': parseInt(customer),
            'Company': parseInt(compCode),
            ...store2.getState().seriesConf
        }
        setRawObj(obj);
    }
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
            "Active": 1,
            'UserName': "U1",
            'Customer': parseInt(customer),
            'Company': parseInt(compCode),
            ...store2.getState().seriesConf
        }
        setRawObj(obj);
    }
    const handlePosting = async (e: any) => {
        e.preventDefault();
        
        'Block' in rawObj ? null : rawObj['Block'] = 0
        'SU' in rawObj ? null : rawObj['SU'] = 0

        let i: any = rawObj;
        console.log('i:', i);
        //console.log('calling')
        const confUrl = '/api/UserSave';


        
        try {
            let { res, got } = await api(confUrl, "POST", i);
            if (res.status == 200) {
                toast.success(got.msg);
                let formObj = document.getElementById("form");
                clear_form(formObj);
                state === null || !state ? null : history.push('/successfully-modify')
            }
            else toast.error(got.msg);
            
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
                <form className="form" id="form">

                    <span className="d-flex section2 col-sm-12">

                        <MasterInput2 name="UName" label="Name" ipTitle="Enter Name" ipType="text" handleChange={handleChange} classCategory="form-control col-4 inp seriesConf" />
                        <span className="col-1 m-0"></span>
                        <MasterInput2 name="PWD" label="Password" ipTitle="Enter Password" ipType="text" handleChange={handleChange} classCategory="form-control col-4 inp seriesConf" />
                    </span>

                    <span className="d-flex section2 col-sm-12">

                        <span className="d-flex justify-content-space-evenly flex-row section2 col-sm-12">


                            <>
                                <label htmlFor="SU" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 labl2">Super User</label>
                            </>
                            <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                                <DatalistInput

                                    className="d-flex col-12 m-0 p-0"
                                    inputProps={{ className: 'form-control col-12 inp seriesConf', name : "SU" , style: { padding: '22px 0', fontSize: '20px' } }}
                                    listboxProps={{ className: 'text-left mt-5' }}
                                    onSelect={(item: any) => handleList(item)}
                                    items={[{ 'id': 0, value: 'N', name: 'SU' }, { 'id': 1, value: 'Y', name: 'SU' }]}
                                />

                            </span>

                            <span className="col-1 m-0"></span>
                            <>
                                <label htmlFor="Block" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 labl2">is Block</label>
                            </>
                            <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                                <DatalistInput

                                    className="d-flex col-12 m-0 p-0"
                                    inputProps={{ className: 'form-control col-12 inp seriesConf', name: "Block", id: "type", style: { padding: '22px 0', fontSize: '20px' } }}
                                    listboxProps={{ className: 'text-left mt-5' }}
                                    onSelect={(item: any) => handleList(item)}
                                    items={[{ 'id': 0, value: 'N', name: "Block" }, { 'id': 1, value: 'Y', name: "Block" }]}
                                />

                            </span>
                        </span>



                    </span>
                    {/*<span className="d-flex section2 col-sm-6">*/}
                    {/*    <CustomSelect label="SuperUser" name="SU" change={[{ 'code': 0, name: 'N' }, { 'code': 1, name: 'Y' }]} handleChange={handleChange} classCategory="form-control col-7 seriesConf" />*/}
                    {/*    <CustomSelect label="is Block" name="Block" change={[{ 'code': 0, name: 'N' }, { 'code': 1, name: 'Y' }]} handleChange={handleChange} classCategory="form-control col-7 seriesConf" />*/}
                    {/*</span>*/}
                    <span className="d-flex section2 col-sm-12">
                        <>
                            <label htmlFor="Role" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 labl2">Role</label>
                        </>
                        <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                            <DatalistInput

                                className="d-flex col-12 m-0 p-0"
                                inputProps={{ className: 'form-control inp col-12 seriesConf int', name: 'Role' }}
                                listboxProps={{ className: 'text-left mt-5' }}
                                onSelect={(item: any) => handleList(item)}
                                items={currRoleData}
                            />

                        </span>
                      
                        <span className="col-1 m-0"></span>
                        <><label htmlFor="" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 labl2"></label></>
                        <span className="col-4 m-0 p-0"></span>
                        {/* <CustomSelect label="Role" name="Role" dataArray={currRoleData} change={handleChange} classCategory="form-control col-4 seriesConf" />*/}

                    </span>

                </form>
                <div className="btn-group col-2 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', float: 'left' }}>

                    <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} onClick={handlePosting} className="btn btn-success mr-2 ml-2 pl-0 pr-0 ">Done</button>

                </div>


                {/*<button className="btn btn-danger p-2 m-3" onClick={handlePosting}>Done</button>*/}


            </div>
        </div>
    )
}
export default UserMaster_Page;