import * as React from 'react';
import DatalistInput from 'react-datalist-input';
import { toast } from 'react-toastify';
import { MasterInput2 } from '../../components/custom-input/custom-input.component';
import AutoComp from '../../components/custom-input/droplist/droplist.component';
import CustomeSwitch from '../../components/CustomSwitch/custom-switch.component';
import useFetch from '../../components/Hooks/useFetch';

const State_Page = ({UgList, defaultData, getMasterType, pageTitle, collectSelectedItem, configType, handleChange, handlePosting }: any) => {

    React.useEffect(() => {
        getMasterType(26)
        getUgList([1004, 143])
    }, [])
    let compCode = window.localStorage.getItem('compCode') || ""
    let customer = window.localStorage.getItem('customer') || ""

    const api = useFetch();
    var [ugList2, setUgList2]: any = React.useState([]);
    var [ugList, setUgList]: any = React.useState([]);
   
    const getUgList = async (mType: any[]) => {
        for (let i = 0; i < 2; i++) {
        const urlUGList = `/api/LoadMasterData?MasterType=${mType[i]}&Company=${compCode}&Customer=${customer}`;

        try {
            let { res, got } = await api(urlUGList, "GET", '')
            if (res.status == 200) {
                i == 1 ? setUgList(got.data) : setUgList2(got.data)
            }
            else {
                toast.error('Error in loading Master Data')
            }

        } catch (err) {
            alert(err)
        }

        }


    }
    return (
        <>
            <div className="main card firstDiv">
                <div className="text-center card-title col-12" style={{ textAlign: 'start', backgroundColor: '#8389d4' }}>
                    <span className="row-header p-0 m-0" >{ pageTitle}</span>
                </div>

                <div className="card-body row col-sm-12 m-0 p-0" >
                  
                        <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">

                            <div className="card-body" style={{ margin: '0', padding: '0' }}>
                                <form className="form">
                                <span className="d-flex section2 col-sm-12">
                                    <AutoComp name="c1" label="Country" defaultt={defaultData ? defaultData.c1 : ''} ipTitle="Select Role" list={ugList} classCategory="form-control col-4 inp str" collect={collectSelectedItem} />
                                    <span className="col-1 m-0"></span>
                                    <AutoComp name="c2" label="Zone" defaultt={defaultData ? defaultData.c2 : ''} ipTitle="Select Role" list={ugList2} classCategory="form-control col-4 inp str" collect={collectSelectedItem} />
                             

                                </span>

                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="name" label="State" defaultt={defaultData ? defaultData.name : ''} ipTitle="Enter Zone" ipType="text" classCategory="form-control col-12 subMaster" handleChange={handleChange} />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="s1" label="Name" defaultt={defaultData ? defaultData.s1 : ''} ipTitle="Enter Name" ipType="text" classCategory="form-control col-12 subMaster" handleChange={handleChange} />
                                </span>

                                <span className="form col-sm-12 row-content card-body pt-0 pb-0 px-2 mb-2">
                                    <span className="d-flex flex-column section2 col-sm-12" style={{ marginLeft: '23px' }}>
                                        <CustomeSwitch lablClass="custom-control-label col-9" label="Eway Bill Required" id="c3" name="c3" classCat="form-control custom-control-input col-3 subMaster switch" default={defaultData ? defaultData.c3 : ''} handleChange={handleChange}/>
                                     
                                    </span>

                                </span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
      
         <div className="btn-group col-6 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', float: 'right' }}>
                    <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0">Save</button>
                    <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} onClick={handlePosting} className="btn btn-success mr-2 ml-2 pl-0 pr-0 ">Save & Submit</button>
                    <button type="button" style={{ border: '2px solid orange', letterSpacing: 3 }} className="btn btn-warning pl-0 pr-0">Quit</button>
                </div>
            </>

    )
}
export default State_Page;