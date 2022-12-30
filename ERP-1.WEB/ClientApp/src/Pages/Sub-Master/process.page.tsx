import * as React from 'react';
import { useState } from 'react';
import CustomInput from '../../components/custom-input/custom-input.component';
import {CustomeSwitch2} from '../../components/CustomSwitch/custom-switch.component';
export default function Process_Page({ getMasterType , pageTitle, configType, handleChange ,handlePosting, defaultData, ...otherProps}: any) {
    const [ToggelValue, setToggelValue]: any = useState(false);
    console.log("toggel Value", ToggelValue);


    return (
        <>
            <div className="main card firstDiv">
                <div
                    className="text-center card-title col-12"
                    style={{ textAlign: "start", backgroundColor: "#8389d4" }}
                >
                    <span className="row-header p-0 m-0">{pageTitle}</span>
                </div>
                {/* ------------------------------TextBox------------------------------------------------------------------------------------------- */}
                <form className="row-content form col-sm-12 pt-0">
                   

                        <>
                            <span className="d-flex section2 col-sm-12">
                                <CustomInput
                                    name="process"
                                    classCategory="form-control inp mb-2 Process"
                                    ipType="text"
                                    label="Process"
                                    ipTitle="Enter Process"
                                    dataArray={[]}
                                />

                                <CustomInput
                                    name="processFloor"
                                    classCategory="form-control inp mb-2 ProcessFloor"
                                    ipType="text"
                                    label="Process Floor"
                                    ipTitle="Enter Process Floor"
                                    dataArray={[]}
                                />

                                <CustomInput
                                    name="clipBoard"
                                    classCategory="form-control inp mb-2 ClipBoard"
                                    ipType="text"
                                    label="P Srno For ClipBoard"
                                    ipTitle="Enter ClipBoard"
                                    dataArray={[]}
                                />
                            </span>

                            <span className="d-flex section2 col-sm-12">
                                <CustomInput
                                    name="debitorAccount"
                                    classCategory="form-control inp mb-2 DebitorAccount"
                                    ipType="text"
                                    label="Debitor Account"
                                    ipTitle="Enter Debitor Account"
                                    dataArray={[]}
                                />

                                <CustomInput
                                    name="addJobWork"
                                    classCategory="form-control inp mb-2 AddJobWork"
                                    ipType="text"
                                    label="Add JobWork chrgs."
                                    ipTitle="Enter Add JobWork chrgs."
                                    dataArray={[]}
                                />

                                <CustomInput
                                    name="tollerance"
                                    classCategory="form-control inp mb-2 Tollerance"
                                    ipType="number"
                                    label="Tollerance (%)"
                                    ipTitle="Enter Tollerance"
                                    dataArray={[]}
                                />
                            </span>
                            <span className="d-flex section2 col-sm-12">
                                <CustomInput
                                    name="overHead"
                                    classCategory="form-control inp mb-2 OverHead"
                                    ipType="number"
                                    label="OverHead (%)"
                                    ipTitle="Enter OverHead"
                                    dataArray={[]}
                                />

                                <CustomInput
                                    name="Material Req"
                                    classCategory="form-control inp mb-2 MaterialReq"
                                    ipType="text"
                                    label="Material Req. before Days"
                                    ipTitle="Enter Material Req. before Days"
                                    dataArray={[]}
                                />

                                <CustomInput
                                    name="Process Group No"
                                    classCategory="form-control inp mb-2 MaterialReq"
                                    ipType="text"
                                    label="Process Group No"
                                    ipTitle="Enter Process Group No"
                                    dataArray={[]}
                                />
                            </span>
                            <span className="d-flex section2 col-sm-12">
                                <CustomInput
                                    name="PlanHours"
                                    classCategory="form-control inp mb-2 PlanHours"
                                    ipType="number"
                                    label="Plan Hours Per Day"
                                    ipTitle="Enter Plan Hours Per Day"
                                    dataArray={[]}
                                />

                                <CustomInput
                                    name="Before Days"
                                    classCategory="form-control inp mb-2 BeforeDays"
                                    ipType="text"
                                    label="Before Days"
                                    ipTitle="Enter Before Days"
                                    dataArray={[]}
                                />
                            </span>
                        </>
                        <div className="col-4"></div>
                    
                </form>
                {/* -------------------------------------------------CheckBox-------------------------------------------------------------------- */}
                <span className="row-content col-sm-12 pt-0">
                  

                        <div className="show" id="Switch">
                            <span className="d-flex justify-content-between section2 col-sm-12">

                                <>
                                    <CustomeSwitch2 lablClass="custom-control-label col-9" label="For Job Working" id="SClsBal" name="SClsBal" classCat="form-control custom-control-input col-3 seriesConf" handleChange={handleChange} />
                                </>
                                <>
                                    <CustomeSwitch2 lablClass="custom-control-label col-9" label="is Accounting Posting" id="SClsBal" name="SClsBal" classCat="form-control custom-control-input col-3 seriesConf" handleChange={handleChange} />
                                </>

                                <>
                                    <CustomeSwitch2 lablClass="custom-control-label col-9" label="Produce Qty is Greater then Paln Qty" id="SClsBal" name="SClsBal" classCat="form-control custom-control-input col-3 seriesConf" handleChange={handleChange} />
                            </>


                            </span>
                            <span className="d-flex justify-content-between section2 col-sm-12">
                            <>
                                <CustomeSwitch2 lablClass="custom-control-label col-9" label="Change Consume Item Quantity" id="SClsBal" name="SClsBal" classCat="form-control custom-control-input col-3 seriesConf" handleChange={handleChange} />
                            </>
                            <>
                                <CustomeSwitch2 lablClass="custom-control-label col-9" label="Is Consume Qty Less than Req. Qty" id="SClsBal" name="SClsBal" classCat="form-control custom-control-input col-3 seriesConf" handleChange={handleChange} />
                            </>
                               <>
                                <CustomeSwitch2 lablClass="custom-control-label col-9" label="Is Consume Qty Zero" id="SClsBal" name="SClsBal" classCat="form-control custom-control-input col-3 seriesConf" handleChange={handleChange} />
                            </>
                               

                            </span>
                        <span className="d-flex justify-content-between section2 col-sm-12">
                               
                             <>
                                <CustomeSwitch2 lablClass="custom-control-label col-9" label=" Mold Req" id="SClsBal" name="SClsBal" classCat="form-control custom-control-input col-3 seriesConf" handleChange={handleChange} />
                            </>
                           <>
                                <CustomeSwitch2 lablClass="custom-control-label col-9" label="Minus Stock Qty in Req." id="SClsBal" name="SClsBal" classCat="form-control custom-control-input col-3 seriesConf" handleChange={handleChange} />
                            </>
                              <>
                                <CustomeSwitch2 lablClass="custom-control-label col-9" label="Add New Cons. Item at Production" id="SClsBal" name="SClsBal" classCat="form-control custom-control-input col-3 seriesConf" handleChange={handleChange} />
                            </>
                        </span>
                            <span className="d-flex justify-content-between section2 col-sm-12">

                            
                              <>
                                <CustomeSwitch2 lablClass="custom-control-label col-9" label="Plan As Per Del. Date" id="SClsBal" name="SClsBal" classCat="form-control custom-control-input col-3 seriesConf" handleChange={handleChange} />
                            </>
                              <>
                                <CustomeSwitch2 lablClass="custom-control-label col-9" label="Consumption Not on Rejection" id="SClsBal" name="SClsBal" classCat="form-control custom-control-input col-3 seriesConf" handleChange={handleChange} />
                            </>
                            <>
                                <CustomeSwitch2 lablClass="custom-control-label col-9" label="Produce Item As Per Process In Sample Prod" id="SClsBal" name="SClsBal" classCat="form-control custom-control-input col-3 seriesConf" handleChange={handleChange} />
                            </>
                            </span>

                            <span className="d-flex justify-content-between section2 col-sm-12">

                              <>
                                <CustomeSwitch2 lablClass="custom-control-label col-9" label="Electricity Req." id="SClsBal" name="SClsBal" classCat="form-control custom-control-input col-3 seriesConf" handleChange={handleChange} />
                            </>
                                
                               <>
                                <CustomeSwitch2 lablClass="custom-control-label col-9" label=" Show in Rejection Details Report" id="SClsBal" name="SClsBal" classCat="form-control custom-control-input col-3 seriesConf" handleChange={handleChange} />
                            </>
                             
                                
                               <>
                                <CustomeSwitch2 lablClass="custom-control-label col-9" label=" Enable Operator Details" id="SClsBal" name="SClsBal" classCat="form-control custom-control-input col-3 seriesConf" handleChange={handleChange} />
                            </>
                                
                            


                            </span>
                            <span className="d-flex justify-content-between section2 col-sm-12">

                              <>
                                <CustomeSwitch2 lablClass="custom-control-label col-9" label=" Production With Scan Data" id="SClsBal" name="SClsBal" classCat="form-control custom-control-input col-3 seriesConf" handleChange={handleChange} />
                            </>
                                  <>
                                <CustomeSwitch2 lablClass="custom-control-label col-9" label=" Time Slab Wise Production" id="SClsBal" name="SClsBal" classCat="form-control custom-control-input col-3 seriesConf" handleChange={handleChange} />
                            </>
                                
                               <>
                                <CustomeSwitch2 lablClass="custom-control-label col-9" label="Show Rejection % In Production MIS Report" id="SClsBal" name="SClsBal" classCat="form-control custom-control-input col-3 seriesConf" handleChange={handleChange} />
                            </>
                            </span>
                                
                        <span className="d-flex justify-content-between section2 col-sm-12">
                            <>
                                <CustomeSwitch2 lablClass="custom-control-label col-9" label=" Tollerance Not Required" id="SClsBal" name="SClsBal" classCat="form-control custom-control-input col-3 seriesConf" handleChange={handleChange} />
                            </><>
                                <CustomeSwitch2 lablClass="custom-control-label col-9" label=" Enable Produce Item Serial No." id="SClsBal" name="SClsBal" classCat="form-control custom-control-input col-3 seriesConf" handleChange={handleChange} />
                            </>

                            <div className="col-4"></div>
                           </span>

                    
                        </div>
                
                </span>
                {/*---------------------------------------------------Tables-----------------------------------------------------------------  */}
                <hr/>
                <span className="row-content form col-sm-12 pt-0">
                  
                        <div className="show collapse" id="OverHead">
                            <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                                <div
                                    className="card col-sm-6"
                                    style={{ padding: "0", margin: "0" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            borderBottom: "1px solid grey",
                                            backgroundColor: "#8389d4",
                                            margin: "0",
                                            padding: "0",
                                        }}
                                    >
                                        <span
                                            className="card-title"
                                            style={{ fontSize: "15px", margin: "0", padding: "0" }}
                                        >
                                            Process OverHead
                                        </span>
                                    </div>
                                    <div
                                        className="card-body table-responsive"
                                        style={{ margin: "0", padding: "0" }}
                                    >
                                        <table
                                            className="table table-striped table-bordered table-hover table-sm"
                                            style={{ margin: "0" }}
                                        >
                                            <thead className="thead-light table-secondary text-center">
                                                <tr>
                                                    <th>S. No</th>
                                                    <th>Name</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>
                                                        {" "}
                                                        <input
                                                            name="Name1"
                                                            className="form-control inp AccountMaster"
                                                            type="text"
                                                            title="Enter Name"
                                                            style={{
                                                                width: "100%",
                                                                margin: "auto",
                                                                height: "25px",
                                                            }}
                                                        />
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>
                                                        <input
                                                            name="Name2"
                                                            className="form-control inp AccountMaster"
                                                            type="text"
                                                            title="Enter Name"
                                                            style={{
                                                                width: "100%",
                                                                margin: "auto",
                                                                height: "25px",
                                                            }}
                                                        />
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>
                                                        <input
                                                            name="Name3"
                                                            className="form-control inp AccountMaster"
                                                            type="text"
                                                            title="Enter Name"
                                                            style={{
                                                                width: "100%",
                                                                margin: "auto",
                                                                height: "25px",
                                                            }}
                                                        />
                                                    </td>

                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div
                                    className="card col-sm-6 "
                                    style={{ padding: "0", margin: "0" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            borderBottom: "1px solid grey",
                                            backgroundColor: "#8389d4",
                                            margin: "0",
                                            padding: "0",
                                        }}
                                    >
                                        <span
                                            className="card-title"
                                            style={{ fontSize: "15px", margin: "0", padding: "0" }}
                                        >
                                            Job Worker List
                                        </span>
                                    </div>
                                    <div
                                        className="card-body table-responsive"
                                        style={{ margin: "0", padding: "0" }}
                                    >
                                        <table
                                            className="table table-striped table-bordered table-hover table-sm"
                                            style={{ margin: "0" }}
                                        >
                                            <thead className="thead-light table-secondary text-center">
                                                <tr>
                                                    <th>S. No</th>
                                                    <th>Name</th>
                                                    <th>Job Work On</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>
                                                        {" "}
                                                        <input
                                                            name="Name1"
                                                            className="form-control inp AccountMaster"
                                                            type="text"
                                                            title="Enter Name"
                                                            style={{
                                                                width: "100%",
                                                                margin: "auto",
                                                                height: "25px",
                                                            }}
                                                        />
                                                    </td>
                                                    <td>
                                                        {" "}
                                                        <input
                                                            name="jobWork1"
                                                            className="form-control inp AccountMaster"
                                                            type="text"
                                                            title="Enter job Work"
                                                            style={{
                                                                width: "100%",
                                                                margin: "auto",
                                                                height: "25px",
                                                            }}
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>
                                                        <input
                                                            name="Name2"
                                                            className="form-control inp AccountMaster"
                                                            type="text"
                                                            title="Enter Name"
                                                            style={{
                                                                width: "100%",
                                                                margin: "auto",
                                                                height: "25px",
                                                            }}
                                                        />
                                                    </td>
                                                    <td>
                                                        <input
                                                            name="jobWork2"
                                                            className="form-control inp AccountMaster"
                                                            type="text"
                                                            title="Enter job Work"
                                                            style={{
                                                                width: "100%",
                                                                margin: "auto",
                                                                height: "25px",
                                                            }}
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>
                                                        <input
                                                            name="Name3"
                                                            className="form-control inp AccountMaster"
                                                            type="text"
                                                            title="Enter Name"
                                                            style={{
                                                                width: "100%",
                                                                margin: "auto",
                                                                height: "25px",
                                                            }}
                                                        />
                                                    </td>
                                                    <td>
                                                        <input
                                                            name="jobWork3"
                                                            className="form-control inp AccountMaster"
                                                            type="text"
                                                            title="Enter job Work"
                                                            style={{
                                                                width: "100%",
                                                                margin: "auto",
                                                                height: "25px",
                                                            }}
                                                        />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div
                                    className="card col-sm-6 mt-2"
                                    style={{ padding: "0", margin: "0" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            borderBottom: "1px solid grey",
                                            backgroundColor: "#8389d4",
                                            margin: "0",
                                            padding: "0",
                                        }}
                                    >
                                        <span
                                            className="card-title"
                                            style={{
                                                fontSize: "15px",
                                                margin: "0",
                                                padding: "0",
                                                height: "25px",
                                            }}
                                        >
                                            Process Operation Details{" "}
                                        </span>
                                    </div>
                                    <div
                                        className="card-body table-responsive"
                                        style={{ margin: "0", padding: "0" }}
                                    >
                                        <table
                                            className="table table-striped table-bordered table-hover table-sm"
                                            style={{ margin: "0" }}
                                        >
                                            <thead className="thead-light table-secondary text-center">
                                                <tr>
                                                    <th>S. No</th>
                                                    <th>Opeartion</th>
                                                    {/* <th>TurnOver(Lacks)</th> */}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>
                                                        {" "}
                                                        <input
                                                            name="Operation1"
                                                            className="form-control inp AccountMaster"
                                                            type="text"
                                                            title="Enter Operation"
                                                            style={{
                                                                width: "100%",
                                                                margin: "auto",
                                                                height: "25px",
                                                            }}
                                                        />
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>
                                                        <input
                                                            name="Operation2"
                                                            className="form-control inp AccountMaster"
                                                            type="text"
                                                            title="Enter Operation"
                                                            style={{
                                                                width: "100%",
                                                                margin: "auto",
                                                                height: "25px",
                                                            }}
                                                        />
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>
                                                        <input
                                                            name="Operation3"
                                                            className="form-control inp AccountMaster"
                                                            type="text"
                                                            title="Enter Operation"
                                                            style={{
                                                                width: "100%",
                                                                margin: "auto",
                                                                height: "25px",
                                                            }}
                                                        />
                                                    </td>

                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                 
                </span>
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