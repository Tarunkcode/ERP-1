import * as React from 'react';
import DatalistInput, { useComboboxControls } from 'react-datalist-input';
import 'react-datalist-input/dist/styles.css';
import { useHistory, useLocation } from 'react-router';
import { toast } from 'react-toastify';
import { CustomSelect, InputList, MasterInput, MasterInput2 } from '../../../components/custom-input/custom-input.component';
import useFetch from '../../../components/Hooks/useFetch';
import { store2 } from '../../../Redux/config/config.reducer';
import { clear_form } from '../../Helper Functions/table';
import UserLoadDetails from '../../../components/HOC/load-user-master';
function UserMaster_Page({ loadUserDetails, defaultRole, AlterLoadedData, gettingVirtualCode, roleList, customer, compCode, username }: any) {

    var [rawObj, setRawObj]: any = React.useState({});
    var [defaultRole, setDefaultRole]: any = React.useState('');
    var [defCodeNames, setDefCodeNames]: any = React.useState({});
    const api = useFetch();
    var obj: object = {};

    const setDefaultState = async () => {
        if (gettingVirtualCode !== 0) {
            store2.getState().seriesConf = loadUserDetails;
            //let role: any = await roleList.find((item: any) =>
            //    loadUserDetails.role == item.id
            //);

            await setDefCodeNames({
                ...loadUserDetails,
                super: loadUserDetails.su == 0 ? 'N' : 'Y',
                block: loadUserDetails.block == 0 ? 'N' : 'Y',

            })

        } else {
            store2.getState().seriesConf = {}
        }
    }

    React.useEffect(() => {setDefaultState()}, [loadUserDetails])
    React.useEffect(() => {
        roleList.map((option: any) => {
            if (option.id === loadUserDetails.role) {
                setDefaultRole(option.value)
                console.log('role value to set', option.value)

            }
        })
    }, [loadUserDetails, roleList])

    const history: any = useHistory();
    //var loc = useLocation();
    //const state: any = loc.state;
   

  
    const handleList = (item: any) => {
        let value = parseInt(item.id)
        let name = (item.name)
        let label = "seriesConf";
        store2.dispatch({ payload: value, key: name, type: "changeConfig", label: label });


        obj = {
            "code": gettingVirtualCode,
            "active": 1,
            'username': username,
            'customer': parseInt(customer),
            'company': parseInt(compCode),
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

        if (name === 'uname' || name === 'pwd' || name === 'UserName') value = value;
        else value = parseInt(value);

        store2.dispatch({ payload: value, key: e.target.name, type: "changeConfig", label: label });


        obj = {
            "code": gettingVirtualCode,
            "active": 1,
            'username': username,
            'customer': parseInt(customer),
            'company': parseInt(compCode),
            ...store2.getState().seriesConf
        }
        setRawObj(obj);
    }

    const handlePosting = async (e: any) => {
        e.preventDefault();

        'block' in rawObj ? null : rawObj['block'] = 0
        'su' in rawObj ? null : rawObj['su'] = 0

        let i: any = { ...loadUserDetails, ...rawObj };
        console.log('i:', i);
        //console.log('calling')
        const confUrl = '/api/UserSave';



        try {
            let { res, got } = await api(confUrl, "POST", i);
            if (res.status == 200) {
                toast.success(got.msg);
                let formObj = document.getElementById("form");

                gettingVirtualCode === 0 ? clear_form(formObj) : history.push('/successfully-modify')
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

                        <MasterInput2 defaultt={defCodeNames.uname} name="uname" label="Name" ipTitle="Enter Name" ipType="text" handleChange={handleChange} classCategory="form-control col-4 inp seriesConf" />
                        <span className="col-1 m-0"></span>
                        <MasterInput2 defaultt={defCodeNames.pwd} name="pwd" label="Password" ipTitle="Enter Password" ipType="password" handleChange={handleChange} classCategory="form-control col-4 inp seriesConf" />
                    </span>

                    <span className="d-flex section2 col-sm-12">

                        <span className="d-flex justify-content-space-evenly flex-row section2 col-sm-12">


                            <>
                                <label htmlFor="su" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 labl2">Super User</label>
                            </>
                            <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                                <DatalistInput
                                    value={defCodeNames.super}
                                    className="d-flex col-12 m-0 p-0"
                                    inputProps={{ className: 'form-control col-12 inp seriesConf', name: "su", style: { padding: '22px 0px 22px 10px', fontSize: '20px' } }}
                                    listboxProps={{ className: 'text-left mt-5' }}
                                    onSelect={(item: any) => handleList(item)}
                                    items={[{ 'id': 0, value: 'N', name: 'su' }, { 'id': 1, value: 'Y', name: 'su' }]}
                                />

                            </span>

                            <span className="col-1 m-0"></span>
                            <>
                                <label htmlFor="block" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 labl2">is Block</label>
                            </>
                            <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                                <DatalistInput
                                    value={defCodeNames.block}
                                    className="d-flex col-12 m-0 p-0"
                                    inputProps={{ className: 'form-control col-12 inp seriesConf', name: "block", id: "type", style: { padding: '22px 0px 22px 10px', fontSize: '20px' } }}
                                    listboxProps={{ className: 'text-left mt-5' }}
                                    onSelect={(item: any) => handleList(item)}
                                    items={[{ 'id': 0, value: 'N', name: "block" }, { 'id': 1, value: 'Y', name: "block" }]}
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
                            <label htmlFor="role" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 labl2">Role</label>
                        </>
                        <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                            <DatalistInput
                                value={defaultRole}
                                className="d-flex col-12 m-0 p-0"
                                inputProps={{ className: 'form-control inp col-12 seriesConf int', name: 'role', style: { padding: '22px 0px 22px 10px', fontSize: '20px' } }}
                                listboxProps={{ className: 'text-left mt-5' }}
                                onSelect={(item: any) => handleList(item)}
                                items={roleList}
                            />

                        </span>

                        <span className="col-1 m-0"></span>
                        <><label htmlFor="" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 labl2"></label></>
                        <span className="col-4 m-0 p-0"></span>
                        {/* <CustomSelect label="Role" name="Role" dataArray={currRoleData} change={handleChange} classCategory="form-control col-4 seriesConf" />*/}

                    </span>

                </form>
                <div className="btn-group col-2 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', float: 'left' }}>

                    <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} onClick={handlePosting} className="btn btn-success mr-2 ml-2 pl-0 pr-0 ">Save</button>

                </div>


                {/*<button className="btn btn-danger p-2 m-3" onClick={handlePosting}>Done</button>*/}


            </div>
        </div>
    )
}
let UserMaster = UserLoadDetails(UserMaster_Page);
export default UserMaster;