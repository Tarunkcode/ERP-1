import * as React from 'react';
import { useState } from 'react';
import CustomInput from '../../components/custom-input/custom-input.component';
export default function Process_Page({ handleChange}: any) {
    const [ToggelValue, setToggelValue]: any = useState(false);
    console.log("toggel Value", ToggelValue);


    return (
        <>
            <div className="main card firstDiv">
                <div
                    className="text-center card-title col-12"
                    style={{ textAlign: "start", backgroundColor: "#8389d4" }}
                >
                    <span className="row-header p-0 m-0">Add Process Master</span>
                </div>
                {/* ------------------------------TextBox------------------------------------------------------------------------------------------- */}
                <form className="row-content form col-sm-12 pt-0">
                    <fieldset className="form-group border p-0">
                        <legend
                            className="px-2"
                            aria-expanded="true"
                            style={{ fontSize: "1.1rem", cursor: "pointer" }}
                        >
                            <svg
                                className="ml-1"
                                style={{ width: "15px" }}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                            >
                                <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" />
                            </svg>
                        </legend>

                        <>
                            <span className="d-flex section2 col-sm-12">
                                <CustomInput
                                    name="Process"
                                    classCategory="form-control inp mb-2 Process"
                                    ipType="text"
                                    label="Process"
                                    ipTitle="Enter Process"
                                    dataArray={[]}
                                />

                                <CustomInput
                                    name="ProcessFloor"
                                    classCategory="form-control inp mb-2 ProcessFloor"
                                    ipType="text"
                                    label="Process Floor"
                                    ipTitle="Enter Process Floor"
                                    dataArray={[]}
                                />

                                <CustomInput
                                    name="ClipBoard"
                                    classCategory="form-control inp mb-2 ClipBoard"
                                    ipType="text"
                                    label="P Srno For ClipBoard"
                                    ipTitle="Enter ClipBoard"
                                    dataArray={[]}
                                />
                            </span>

                            <span className="d-flex section2 col-sm-12">
                                <CustomInput
                                    name="DebitorAccount"
                                    classCategory="form-control inp mb-2 DebitorAccount"
                                    ipType="text"
                                    label="Debitor Account"
                                    ipTitle="Enter Debitor Account"
                                    dataArray={[]}
                                />

                                <CustomInput
                                    name="AddJobWork"
                                    classCategory="form-control inp mb-2 AddJobWork"
                                    ipType="text"
                                    label="Add JobWork chrgs."
                                    ipTitle="Enter Add JobWork chrgs."
                                    dataArray={[]}
                                />

                                <CustomInput
                                    name="Tollerance"
                                    classCategory="form-control inp mb-2 Tollerance"
                                    ipType="number"
                                    label="Tollerance (%)"
                                    ipTitle="Enter Tollerance"
                                    dataArray={[]}
                                />
                            </span>
                            <span className="d-flex section2 col-sm-12">
                                <CustomInput
                                    name="OverHead"
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
                    </fieldset>
                </form>
                {/* -------------------------------------------------CheckBox-------------------------------------------------------------------- */}
                <span className="row-content col-sm-12 pt-0">
                    <fieldset className="form-group border p-0">
                        <legend
                            className="px-2"
                            data-toggle="collapse"
                            data-target="#Switch"
                            aria-expanded="true"
                            aria-controls="Switch"
                            style={{ fontSize: "1.1rem", cursor: "pointer" }}
                        >
                            <svg
                                className="ml-1"
                                style={{ width: "15px" }}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                            >
                                <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" />
                            </svg>
                        </legend>

                        <div className="show" id="Switch">
                            <span className="d-flex justify-content-between section2 col-sm-12">

                                <label
                                    htmlFor="Consumption Not"
                                    style={{ fontSize: "0.8em" }}
                                    className="form-label labl labl2"
                                >
                                    For Job Work
                                </label>
                                <input type="checkbox" onBlur={handleChange} className="form-control custom-control-input col-3 InventoryDet" name="" id="" style={{ cursor: 'pointer' }} />


                                <label
                                    htmlFor="Accounting Posting"
                                    style={{ fontSize: "0.8em" }}
                                    className="form-label labl labl2"
                                >
                                    Is Accounting Posting
                                </label>
                                <input type="checkbox" onBlur={handleChange} className="form-control custom-control-input col-3 InventoryDet" name="" id="" style={{ cursor: 'pointer' }} />


                                <label
                                    htmlFor="Produce Qty"
                                    style={{ fontSize: "0.8em" }}
                                    className="form-label labl labl2"
                                >
                                    Produce Qty is Greater then Paln Qty
                                </label>
                                <input type="checkbox" onBlur={handleChange} className="form-control custom-control-input col-3 InventoryDet" name="" id="" style={{ cursor: 'pointer' }} />


                                <label
                                    htmlFor="Produce Qty"
                                    style={{ fontSize: "0.8em" }}
                                    className="form-label labl labl2"
                                >
                                    Change Consume Item Quantity
                                </label>
                                <input type="checkbox" onBlur={handleChange} className="form-control custom-control-input col-3 InventoryDet" name="" id="" style={{ cursor: 'pointer' }} />

                            </span>
                            <span className="d-flex justify-content-between section2 col-sm-12">

                                <label
                                    htmlFor=" IsConsumeQty"
                                    style={{ fontSize: "0.8em" }}
                                    className="form-label labl labl2"
                                >
                                    Is Consume Qty Less than Req. Qty
                                </label>
                                <input type="checkbox" onBlur={handleChange} className="form-control custom-control-input col-3 InventoryDet" name="" id="" style={{ cursor: 'pointer' }} />

                                <label
                                    htmlFor=" IsConsumeQtyZero"
                                    style={{ fontSize: "0.8em" }}
                                    className="form-label labl labl2"
                                >
                                    Is Consume Qty Zero
                                </label>
                                <input type="checkbox" onBlur={handleChange} className="form-control custom-control-input col-3 InventoryDet" name="" id="" style={{ cursor: 'pointer' }} />


                                <label
                                    htmlFor=" Mold Req."
                                    style={{ fontSize: "0.8em" }}
                                    className="form-label labl labl2"
                                >
                                    Mold Req.
                                </label>
                                <input type="checkbox" onBlur={handleChange} className="form-control custom-control-input col-3 InventoryDet" name="" id="" style={{ cursor: 'pointer' }} />

                                <label
                                    htmlFor="Minus Stock"
                                    style={{ fontSize: "0.8em" }}
                                    className="form-label labl labl2"
                                >
                                    Minus Stock Qty in Req.
                                </label>
                                <input type="checkbox" onBlur={handleChange} className="form-control custom-control-input col-3 InventoryDet" name="" id="" style={{ cursor: 'pointer' }} />

                            </span>

                            <span className="d-flex justify-content-between section2 col-sm-12">

                                <label
                                    htmlFor=" Add New Cons"
                                    style={{ fontSize: "0.8em" }}
                                    className="form-label labl labl2"
                                >
                                    Add New Cons. Item at Production
                                </label>
                                <input type="checkbox" onBlur={handleChange} className="form-control custom-control-input col-3 InventoryDet" name="" id="" style={{ cursor: 'pointer' }} />

                                <label
                                    htmlFor="Plan As Per Del"
                                    style={{ fontSize: "0.8em" }}
                                    className="form-label labl labl2"
                                >
                                    Plan As Per Del. Date
                                </label>
                                <input type="checkbox" onBlur={handleChange} className="form-control custom-control-input col-3 InventoryDet" name="" id="" style={{ cursor: 'pointer' }} />


                                <label
                                    htmlFor="Consumption Not"
                                    style={{ fontSize: "0.8em" }}
                                    className="form-label labl labl2"
                                >
                                    Consumption Not on Rejection
                                </label>
                                <input type="checkbox" onBlur={handleChange} className="form-control custom-control-input col-3 InventoryDet" name="" id="" style={{ cursor: 'pointer' }} />


                                <label
                                    htmlFor="Produce Item"
                                    style={{ fontSize: "0.8em" }}
                                    className="form-label labl labl2"
                                >
                                    Produce Item As Per Process In Sample Prod
                                </label>
                                <input type="checkbox" onBlur={handleChange} className="form-control custom-control-input col-3 InventoryDet" name="" id="" style={{ cursor: 'pointer' }} />

                            </span>

                            <span className="d-flex justify-content-between section2 col-sm-12">

                                <label
                                    htmlFor="Electricity Req."
                                    style={{ fontSize: "0.8em" }}
                                    className="form-label labl labl2"
                                >
                                    Electricity Req.
                                </label>
                                <input type="checkbox" onBlur={handleChange} className="form-control custom-control-input col-3 InventoryDet" name="" id="" style={{ cursor: 'pointer' }} />


                                <label
                                    htmlFor="Show in Rejection"
                                    style={{ fontSize: "0.8em" }}
                                    className="form-label labl labl2"
                                >
                                    Show in Rejection Details Report
                                </label>
                                <input type="checkbox" onBlur={handleChange} className="form-control custom-control-input col-3 InventoryDet" name="" id="" style={{ cursor: 'pointer' }} />


                                <label
                                    htmlFor=" Enable Operator Details"
                                    style={{ fontSize: "0.8em" }}
                                    className="form-label labl labl2"
                                >
                                    Enable Operator Details
                                </label>
                                <input type="checkbox" onBlur={handleChange} className="form-control custom-control-input col-3 InventoryDet" name="" id="" style={{ cursor: 'pointer' }} />


                                <label
                                    htmlFor="Production With Scan Data"
                                    style={{ fontSize: "0.8em" }}
                                    className="form-label labl labl2"
                                >
                                    Production With Scan Data
                                </label>
                                <input type="checkbox" onBlur={handleChange} className="form-control custom-control-input col-3 InventoryDet" name="" id="" style={{ cursor: 'pointer' }} />

                            </span>
                            <span className="d-flex justify-content-between section2 col-sm-12">

                                <label
                                    htmlFor=" Time Slab"
                                    style={{ fontSize: "0.8em" }}
                                    className="form-label labl labl2"
                                >
                                    Time Slab Wise Production
                                </label>
                                <input type="checkbox" onBlur={handleChange} className="form-control custom-control-input col-3 InventoryDet" name="" id="" style={{ cursor: 'pointer' }} />

                                <label
                                    htmlFor="Show in Rejection per."
                                    style={{ fontSize: "0.8em" }}
                                    className="form-label labl labl2"
                                >
                                    Show Rejection % In Production MIS Report
                                </label>
                                <input type="checkbox" onBlur={handleChange} className="form-control custom-control-input col-3 InventoryDet" name="" id="" style={{ cursor: 'pointer' }} />

                                <label
                                    htmlFor="Tollerance Not Required"
                                    style={{ fontSize: "0.8em" }}
                                    className="form-label labl labl2"
                                >
                                    Tollerance Not Required
                                </label>
                                <input type="checkbox" onBlur={handleChange} className="form-control custom-control-input col-3 InventoryDet" name="" id="" style={{ cursor: 'pointer' }} />


                                <label
                                    htmlFor="Enable Produce Item Serial No."
                                    style={{ fontSize: "0.8em" }}
                                    className="form-label labl labl2"
                                >
                                    Enable Produce Item Serial No.
                                </label>
                                <input type="checkbox" onBlur={handleChange} className="form-control custom-control-input col-3 InventoryDet" name="" id="" style={{ cursor: 'pointer' }} />

                            </span>
                            {/* <span className="d-flex section2 col-sm-12">
                
                  <label
                    htmlFor="Consume Barcode Manual on Production"
                    style={{ fontSize: "0.8em" }}
                    className="form-label labl labl2"
                  >
                    Consume Barcode Manual on Production
                  </label>
                  <ToggleSwitch id="ConsumeBarcode" className="consumer" />
              
                  <label
                    htmlFor="Freeze"
                    style={{ fontSize: "0.8em" }}
                    className="form-label labl labl2"
                  >
                    Freeze
                  </label>
                  <ToggleSwitch id="Freeze" />
                
              </span> */}
                            <div className="col-4"></div>
                        </div>
                    </fieldset>
                </span>
                {/*---------------------------------------------------Tables-----------------------------------------------------------------  */}
                <span className="row-content form col-sm-12 pt-0">
                    <fieldset className="form-group border p-0">
                        <legend
                            className="px-2"
                            data-toggle="collapse"
                            data-target="#OverHead"
                            aria-expanded="true"
                            aria-controls="OverHead"
                            style={{ fontSize: "1.1rem", cursor: "pointer" }}
                        >
                            <svg
                                className="ml-1"
                                style={{ width: "15px" }}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                            >
                                <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" />
                            </svg>
                        </legend>
                        <div className="show" id="OverHead">
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
                    </fieldset>
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

