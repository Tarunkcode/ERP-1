import * as React from 'react';
import DatalistInput from 'react-datalist-input';
import { toast } from 'react-toastify';
import { MasterInput2 } from '../../components/custom-input/custom-input.component';
import AutoComp from '../../components/custom-input/droplist/droplist.component';
import useFetch from '../../components/Hooks/useFetch';

const City_Page = ({ UgList, defaultData, getMasterType, pageTitle, collectSelectedItem, configType, handleChange, handlePosting }: any) => {
    let compCode = window.localStorage.getItem('compCode') || ""
    let customer = window.localStorage.getItem('customer') || ""
    let username = window.sessionStorage.getItem('username') || ""
    const api = useFetch();
    var [ugList, setUgList]: any = React.useState([]);
    var [ugList2, setUgList2]: any = React.useState([]);
    React.useEffect(() => {
        getMasterType(120)
        getUgList([26, 143 ])
    }, [])
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
                    <span className="row-header p-0 m-0" >{pageTitle}</span>
                </div>

                <div className="card-body row col-sm-12 m-0 p-0" >
                
                        <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">

                            <div className="card-body" style={{ margin: '0', padding: '0' }}>
                                <form className="form">
                                <span className="d-flex section2 col-sm-12">
                                    <AutoComp name="c1" label="Country" defaultt={defaultData ? defaultData.c1 : ''} ipTitle="Select Role" list={ugList} classCategory="form-control col-4 inp str" collect={collectSelectedItem} />
                                    <span className="col-1 m-0"></span>
                                    <AutoComp name="c2" label="State" defaultt={defaultData ? defaultData.c2 : ''} ipTitle="Select Role" list={ugList2} classCategory="form-control col-4 inp str" collect={collectSelectedItem} />
                                    </span>

                                <span className="d-flex section2 col-sm-12 mb-2">
                                    
                                   
                                        <MasterInput2 name="name" label="City" defaultt={defaultData ? defaultData.name : ''} ipTitle="Enter Zone" ipType="text" classCategory="form-control col-4 inp subMaster" handleChange={handleChange} />
                                    <span className="col-1 m-0"></span>
                                    <span className="col-4 m-0"></span>

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
export default City_Page;