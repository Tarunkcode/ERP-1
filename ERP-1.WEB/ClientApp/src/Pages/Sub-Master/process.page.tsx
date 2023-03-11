import * as React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import CustomInput, { InputList, MasterInput2 } from '../../components/custom-input/custom-input.component';
import { CustomeSwitch2 } from '../../components/CustomSwitch/custom-switch.component';
import { WriteTable } from '../../components/CustomTable/CustomTable.component';
import useFetch from '../../components/Hooks/useFetch';
import { AddRow, DeleteRow, getCurrentRowNo } from '../Helper Functions/table';
export default function Process_Page({ getMasterType, pageTitle, configType, handleChange, handlePosting, HandleOverHeadIpSelect, HandleJobIpSelect, HandleOperationIpSelect, defaultData, virtualCode, ...otherProps }: any) {
    const [ToggelValue, setToggelValue]: any = useState(false);
    const [overHeadArr, setOverHeadArr]: any = useState([]);
    const [operationArr, setOperationArr]: any = useState([]);
    const [masterlist, setMasterList]: any = useState({});
    const [oprnlist, setOperationList]: any = useState([]);
    const [joblist, setJobList]: any = useState([]);
    const [overheadlist, setOverHeadList]: any = useState([]);

    const api = useFetch()

    const load1 = async () => {
        // Process OverHead
        const OvrHeadStr = `/api/LoadMasterData?MasterType=1030&company=${otherProps.compCode}&customer=${otherProps.customer}`;
        try {
            let { res, got } = await api(OvrHeadStr, "GET", '');

            if (res.status == 200) {
                setOverHeadArr(got.data);
            }
            else { toast.error(got.msg) }
        } catch (err) {
            alert(err)

        }
    }
    const load2 = async () => {
        // Process Operation
        const OprnStr = `/api/LoadMasterData?MasterType=1034&company=${otherProps.compCode}&customer=${otherProps.customer}`;
        try {
            let { res, got } = await api(OprnStr, "GET", '');

            if (res.status == 200) {
                setOperationArr(got.data);
            }
            else { toast.error(got.msg) }
        } catch (err) {
            alert(err)

        }
    }
    React.useEffect(() => {

        getMasterType(11);
        load1();
        load2();
      
    }, [overHeadArr, operationArr])
    React.useEffect(() => {

        if (defaultData.esmastertable !== undefined) {
            let masterlist: any = defaultData.esmastertable[0]
            setMasterList(masterlist);
        }
        if (defaultData.processopration !== undefined) {
            let oprlist: any = defaultData.processopration
            console.log('oprlist', oprlist)
            setOperationList(oprlist)
        }
        if (defaultData.processjobworker !== undefined) {
            let joblist: any = defaultData.processjobworker
            setJobList(joblist)
        }
        if (defaultData.processpoh !== undefined) {
            let overlist: any = defaultData.processpoh
            console.log('overlist', overlist)
            setOverHeadList(overlist)
        }
      
    }, [defaultData, masterlist, oprnlist, joblist, overheadlist])
    /*    var esMasterData: object = defaultData.esMsater*/
   
    var maindata: any[] = [{ Name: { name: 1, id: 'poh', ipTitle: "Enter Process OverHead Name", dataArray: overHeadArr, classCat: "form-control text-center pMasterOverHead select", placeholder: "Enter Process OverHead Name", defaultList: overheadlist } }];

    var jobTableProps : any[] = [{
        Name: { name: 100, id: "jbcode", ipTitle: "Enter Job Worker Name", dataArray: [{ code: 1, name: 'dumy-1' }, { code: 2, name: 'dumy-2' }], classCat: "form-control text-center select pMasterJob", placeholder: "Enter Job Worker Name", defaultList: joblist }

        , JWOn: { name: 200, id: "jobworkon", ipTitle: "Job Worker On", dataArray: [{ code: 1, name: 'Inside' }, { code: 2, name: 'Outside' }], classCat: "form-control pMasterJob select text-center", placeholder: "Select Job Worker On", defaultList: joblist }
    }]

    var oprnTableProps : any[] = [{ Oprn: { name: 300, id: "opr", ipTitle: "Enter Process Operation Name", dataArray: operationArr, classCat: "form-control text-center pMasterOperation select", placeholder: "Enter Operation Name", defaultList: oprnlist } }]

    var [JobTableArr, setJobTableArr]: any[] = useState(jobTableProps)

    var [OverHeadTableArr, setOverHeadtableArr]: any[] = useState(maindata)


    var [OprnTableArr, setOprnTableArr]: any[] = useState(oprnTableProps)

 
    return (
        <>
            <div className="main card firstDiv">
                <div
                    className="text-center card-title col-12"
                    style={{ textAlign: "start" }}
                >
                    <span className="row-header p-0 m-0">{pageTitle}</span>
                </div>
                {/* ------------------------------TextBox------------------------------------------------------------------------------------------- */}
                <form className="row-content form col-sm-12 pt-0">


                    <>
                        <span className="d-flex section2 col-sm-12">
                            <MasterInput2
                                name="name"
                                handleChange={handleChange}
                                defaultt={masterlist.name}
                                classCategory="form-control inp col-4 pMaster"
                                ipType="text"
                                label="Process"
                                ipTitle="Enter Process"

                            />
                            <span className="col-1 m-0"></span>

                            <MasterInput2
                                name="c21"
                                handleChange={handleChange}
                                defaultt={masterlist.c21}
                                classCategory="form-control inp col-4 pMaster select"
                                ipType="text"
                                label="Process Floor"
                                ipTitle="Enter Process Floor"

                            />
                        </span>
                        <span className="d-flex section2 col-sm-12">

                            <MasterInput2
                                name="c22"
                                defaultt={masterlist.c22}
                                handleChange={handleChange}
                                classCategory="form-control inp col-4 pMaster select"
                                ipType="text"
                                label="P Srno For ClipBoard"
                                ipTitle="Enter ClipBoard"

                            />
                            <span className="col-1 m-0"></span>
                            <MasterInput2
                                name="c23"
                                defaultt={masterlist.c23}
                                handleChange={handleChange}
                                classCategory="form-control inp col-4 pMaster select"
                                ipType="text"
                                label="Debitor Account"
                                ipTitle="Enter Debitor Account"

                            />
                        </span>

                        <span className="d-flex section2 col-sm-12">

                            <MasterInput2
                                name="c24"
                                defaultt={masterlist.c24}
                                handleChange={handleChange}
                                classCategory="form-control inp col-4 pMaster select"
                                ipType="text"
                                label="Add JobWork chrgs."
                                ipTitle="Enter Add JobWork chrgs."

                            />
                            <span className="col-1 m-0"></span>
                            <MasterInput2
                                defaultt={masterlist.d1}
                                name="d1"
                                handleChange={handleChange}
                                classCategory="form-control inp col-4 pMaster number"
                                ipType="number"
                                label="Tollerance (%)"
                                ipTitle="Enter Tollerance"

                            />
                        </span>
                        <span className="d-flex section2 col-sm-12">
                            <MasterInput2
                                defaultt={masterlist.d2}
                                name="d2"
                                handleChange={handleChange}
                                classCategory="form-control inp col-4 pMaster number"
                                ipType="number"
                                label="OverHead (%)"
                                ipTitle="Enter OverHead"

                            />
                            <span className="col-1 m-0"></span>
                            <MasterInput2
                                name="c25"
                                defaultt={masterlist.c25}
                                handleChange={handleChange}
                                classCategory="form-control inp col-4 pMaster select"
                                ipType="text"
                                label="Material Req. before Days"
                                ipTitle="Enter Material Req. before Days"

                            />
                        </span>
                        <span className="d-flex section2 col-sm-12">
                            <MasterInput2
                                name="d3"
                                defaultt={masterlist.d3}
                                handleChange={handleChange}
                                classCategory="form-control inp col-4 pMaster number"
                                ipType="text"
                                label="Process Group No"
                                ipTitle="Enter Process Group No"

                            />
                            <span className="col-1 m-0"></span>
                            <MasterInput2
                                name="d4"
                                defaultt={masterlist.d4}
                                handleChange={handleChange}
                                classCategory="form-control inp col-4 pMaster number"
                                ipType="number"
                                label="Plan Hours Per Day"
                                ipTitle="Enter Plan Hours Per Day"

                            />
                        </span>

                        <span className="d-flex section2 col-sm-12">

                            <MasterInput2
                                name="d5"
                                defaultt={masterlist.d5}
                                handleChange={handleChange}
                                classCategory="form-control inp col-4 pMaster number"
                                ipType="text"
                                label="Before Days"
                                ipTitle="Enter Before Days"


                            />
                        </span>
                    </>
                    <div className="col-4"></div>

                </form>
                {/* -------------------------------------------------CheckBox-------------------------------------------------------------------- */}
                <hr />
                <span className="d-flex col-sm-12 pt-0">

                    <div className="show m-0 p-0 col-6" id="Switch">
                        <span className="d-flex flex-column justify-content-between section2 col-sm-12">

                            <>
                                <CustomeSwitch2 lablClass="custom-control-label col-9" label="For Job Working" id="c1" name="c1" classCat="form-control custom-control-input col-3 pMaster switch" handleChange={handleChange} default={masterlist.c1} />
                            </>
                            <>
                                <CustomeSwitch2 lablClass="custom-control-label col-9" label="is Accounting Posting" id="c2" name="c2" classCat="form-control custom-control-input col-3 pMaster switch" handleChange={handleChange} default={masterlist.c2} />
                            </>

                            <>
                                <CustomeSwitch2 lablClass="custom-control-label col-9" label="Produce Qty is Greater then Paln Qty" id="c3" name="c3" classCat="form-control custom-control-input col-3 pMaster switch" handleChange={handleChange} default={masterlist.c3} />
                            </>



                            <>
                                <CustomeSwitch2 lablClass="custom-control-label col-9" label="Change Consume Item Quantity" id="c4" name="c4" classCat="form-control custom-control-input col-3 pMaster switch" handleChange={handleChange} default={masterlist.c4} />
                            </>
                            <>
                                <CustomeSwitch2 lablClass="custom-control-label col-9" label="Is Consume Qty Less than Req. Qty" id="c5" name="c5" classCat="form-control custom-control-input col-3 pMaster switch" handleChange={handleChange} default={masterlist.c5} />
                            </>
                            <>
                                <CustomeSwitch2 lablClass="custom-control-label col-9" label="Is Consume Qty Zero" id="c6" name="c6" classCat="form-control custom-control-input col-3 pMaster switch" handleChange={handleChange} default={masterlist.c6} />
                            </>




                            <>
                                <CustomeSwitch2 lablClass="custom-control-label col-9" label=" Mold Req" id="c7" name="c7" classCat="form-control custom-control-input col-3 pMaster switch" handleChange={handleChange} default={masterlist.c7} />
                            </>
                            <>
                                <CustomeSwitch2 lablClass="custom-control-label col-9" label="Minus Stock Qty in Req." id="c8" name="c8" classCat="form-control custom-control-input col-3 pMaster switch" handleChange={handleChange} default={masterlist.c8} />
                            </>
                            <>
                                <CustomeSwitch2 lablClass="custom-control-label col-9" label="Add New Cons. Item at Production" id="c9" name="c9" classCat="form-control custom-control-input col-3 pMaster switch" handleChange={handleChange} default={masterlist.c9} />
                            </>



                            <>
                                <CustomeSwitch2 lablClass="custom-control-label col-9" label="Plan As Per Del. Date" id="c10" name="c10" classCat="form-control custom-control-input col-3 pMaster switch" handleChange={handleChange} default={masterlist.c10} />
                            </>
                            <>
                                <CustomeSwitch2 lablClass="custom-control-label col-9" label="Consumption Not on Rejection" id="c11" name="c11" classCat="form-control custom-control-input col-3 pMaster switch" handleChange={handleChange} default={masterlist.c11} />
                            </>
                            <>
                                <CustomeSwitch2 lablClass="custom-control-label col-9" label="Produce Item As Per Process In Sample Prod" id="c12" name="c12" classCat="form-control custom-control-input col-3 pMaster switch" handleChange={handleChange} default={masterlist.c12} />
                            </>


                            <>
                                <CustomeSwitch2 lablClass="custom-control-label col-9" label="Electricity Req." id="c13" name="c13" classCat="form-control custom-control-input col-3 pMaster switch" handleChange={handleChange} default={masterlist.c13} />
                            </>

                            <>
                                <CustomeSwitch2 lablClass="custom-control-label col-9" label=" Show in Rejection Details Report" id="c14" name="c14" classCat="form-control custom-control-input col-3 pMaster switch" handleChange={handleChange} default={masterlist.c14} />
                            </>


                            <>
                                <CustomeSwitch2 lablClass="custom-control-label col-9" label=" Enable Operator Details" id="c15" name="c15" classCat="form-control custom-control-input col-3 pMaster switch" handleChange={handleChange} default={masterlist.c15} />
                            </>

                            <>
                                <CustomeSwitch2 lablClass="custom-control-label col-9" label=" Production With Scan Data" id="c16" name="c16" classCat="form-control custom-control-input col-3 pMaster switch" handleChange={handleChange} default={masterlist.c16} />
                            </>
                            <>
                                <CustomeSwitch2 lablClass="custom-control-label col-9" label=" Time Slab Wise Production" id="c17" name="c17" classCat="form-control custom-control-input col-3 pMaster switch" handleChange={handleChange} default={masterlist.c17} />
                            </>

                            <>
                                <CustomeSwitch2 lablClass="custom-control-label col-9" label="Show Rejection % In Production MIS Report" id="c18" name="c18" classCat="form-control custom-control-input col-3 pMaster switch" handleChange={handleChange} default={masterlist.c18} />
                            </>

                            <>
                                <CustomeSwitch2 lablClass="custom-control-label col-9" label=" Tollerance Not Required" id="c19" name="c19" classCat="form-control custom-control-input col-3 pMaster switch" handleChange={handleChange} default={masterlist.c19} />
                            </><>
                                <CustomeSwitch2 lablClass="custom-control-label col-9" label=" Enable Produce Item Serial No." id="c20" name="c20" classCat="form-control custom-control-input col-3 pMaster switch" handleChange={handleChange} default={masterlist.c20} />
                            </>

                            {/*<div className="col-4"></div>*/}
                        </span>
                    </div>
                    <span className="card d-flex flex-column justify-content-between section2 col-sm-6" style={{ height: '100vh' }}>
                       
                        <WriteTable
                            HandleIpSelect={HandleOverHeadIpSelect}
                            getCurrentRowNo={getCurrentRowNo}
                            addRowFunc={AddRow}
                            setRowFunc={setOverHeadtableArr}
                            deleteRowFunc={DeleteRow}
                            tableProps={maindata}
                            columns={[{ field: 'Name', header: "Name" }]}
                            dataArr={OverHeadTableArr}
                            title="Process OverHead"
                        />
                         
                        <WriteTable
                            HandleIpSelect={HandleJobIpSelect}
                            getCurrentRowNo={getCurrentRowNo}
                            addRowFunc={AddRow}
                            tableProps={jobTableProps}
                            setRowFunc={setJobTableArr}
                            deleteRowFunc={DeleteRow}
                            columns={[{ field: 'Name', header: "Name" }, { field: 'JWOn', header: "Job Worker On" }]}
                            dataArr={JobTableArr}
                            title="Job Worker List"
                        />

                        <WriteTable
                            HandleIpSelect={HandleOperationIpSelect}
                            getCurrentRowNo={getCurrentRowNo}
                            addRowFunc={AddRow}
                            tableProps={oprnTableProps}
                            setRowFunc={setOprnTableArr}
                            deleteRowFunc={DeleteRow}
                            columns={[{ field: 'Oprn', header: "Operation" }]}
                            dataArr={OprnTableArr}
                            title="Process Operation Details"
                        />
                    </span>

                </span>
                {/*---------------------------------------------------Tables-----------------------------------------------------------------  */}

            </div>
            <div
                className="btn-group col-12 mt-3"
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                }}
            >
                <button
                    type="button"
                    style={{
                        border: "2px solid #33b5e5",
                        letterSpacing: 3,
                        width: "100px",
                    }}
                    className="btn btn-info pl-0 pr-0"
                >
                    Save
                </button>
                <button
                    type="button"
                    style={{
                        border: "2px solid green",
                        letterSpacing: 3,
                        width: "200px",
                    }}
                    className="btn btn-success mr-2 ml-2 pl-0 pr-0 "
                    onClick={handlePosting}
                >
                    Save & Submit
                </button>
                <button
                    type="button"
                    style={{ border: "2px solid red", letterSpacing: 3, width: "100px" }}
                    className="btn btn-danger pl-0 pr-0"
                >
                    Quit
                </button>
            </div>
        </>
    );
}