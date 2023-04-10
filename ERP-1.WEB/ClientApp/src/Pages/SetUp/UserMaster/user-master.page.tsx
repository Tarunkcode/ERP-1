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
import AutoComp from '../../../components/custom-input/droplist/droplist.component';
import { useEffect } from 'react';
import { LoaderContext } from '../../../AppContext/loaderContext';

function UserMaster_Page({ loadUserDetails, gettingVirtualCode, roleList, customer, compCode, username }: any) {
    const { setLoader } = React.useContext(LoaderContext);
    var [rawObj, setRawObj]: any = React.useState({});

  
    
    var [lApi, setLApi]: any = React.useState(null);
    const api = useFetch();
    var obj: object = {};
  
    const setDefaultState = async () => {
        if (gettingVirtualCode !== 0) {
            store2.getState().seriesConf = loadUserDetails;

        } else {
            store2.getState().seriesConf = {}
        }
    }

    React.useEffect(() => { setDefaultState() }, [loadUserDetails])


    const history: any = useHistory();
    //var loc = useLocation();
    //const state: any = loc.state;
   

    const collectListData = (data: any) => {
     
        setLApi(data);
    }

    const handleList = (name : string, value : any) => {
    
        //lApi.forEachNode(function (node: any) {
        //    let keyArr = Object.keys(node.data);
        //    if (!node.data.role) return;
        //    let val = node.data.role.value;

        //});
            store2.dispatch({ payload: parseInt(value), key: name, type: "changeConfig", label: 'seriesConf' })
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
        setLoader(true)

        //'block' in rawObj ? null : rawObj['block'] = 0
        //'su' in rawObj ? null : rawObj['su'] = 0

        let i: any = { ...loadUserDetails, ...rawObj };
/*        console.log('i:', i);*/
        //console.log('calling')
        const confUrl = '/api/UserSave';



        try {
            let { res, got } = await api(confUrl, "POST", i);
            if (res.status == 200) {
                toast.success(got.msg);
                setLoader(false);
                let formObj = document.getElementById("form");
                gettingVirtualCode === 0 ? clear_form(formObj) : history.push('/successfully-modify')
            }
            else {
                setLoader(false)
                toast.error(got.msg);
            }
        } catch (err) {
            setLoader(false)
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

                        <MasterInput2 defaultt={loadUserDetails ? loadUserDetails.uname : ''} name="uname" label="Name" ipTitle="Enter Name" ipType="text" handleChange={handleChange} classCategory="form-control col-4 inp seriesConf" />
                        <span className="col-1 m-0"></span>
                        <MasterInput2 defaultt={loadUserDetails ? loadUserDetails.pwd :''} name="pwd" label="Password" ipTitle="Enter Password" ipType="text" handleChange={handleChange} classCategory="form-control col-4 inp seriesConf" />
                    </span>

                    <span className="d-flex section2 col-sm-12">

                        <span className="d-flex justify-content-space-evenly flex-row section2 col-sm-12">

                            <CustomSelect classCategory="form-control col-4 inp select seriesConf" handleChange={handleChange} name="su" label="Super User" def={loadUserDetails ?  loadUserDetails.su:''} />
                            <span className="col-1 m-0"></span>
                            <CustomSelect classCategory="form-control col-4 inp select seriesConf" handleChange={handleChange} name="block" label="Block" def={loadUserDetails ? loadUserDetails.block :''} />

                        </span>



                    </span>

                    <span className="d-flex section2 col-sm-12">

                        <label htmlFor="role" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 labl2">Role</label>
                        <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                            <AutoComp collect={collectListData} list={React.useMemo(() => { return roleList }, [roleList])} name="role" saveData={handleList} vccode={gettingVirtualCode} data={gettingVirtualCode !== 0 ? loadUserDetails ? [{ role: { label: loadUserDetails.rolename, value: loadUserDetails.role } }] : [{ role: null }] : [{ role: null }]} />

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
