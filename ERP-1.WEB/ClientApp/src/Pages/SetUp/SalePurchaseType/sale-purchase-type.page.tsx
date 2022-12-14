import * as React from 'react';
import { useState, useEffect } from 'react';
import CustomInput from '../../../components/custom-input/custom-input.component';
export default function SalePurchaseType_Page({ handleChange}: any) {

    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");
    const [tableData, setTabledata] = useState([]);

    const [billSundry, setbillSundry] = useState("");
    const [nature, setNature] = useState("");
    const [type, setType] = useState("");

    const handelBill = (e: any) => {
        setbillSundry(e.target.value)
    }

    const handelnature = (e: any) => {
        setNature(e.target.value)
    }

    const handeltype = (e : any) => {
        setType(e.target.value)
    }


    const handelClick = () => {
        setbillSundry(tableData[0]["name"])
        setNature(tableData[0]["bsType"])
        setType(tableData[0]["bsNature"])
    }

    // const twoCall = ()=>{
    //   handelBill()
    //   handelClick()
    // }

    // ---------------------------------------------------grid load---------------------------------------------------------------------------
    const fetchTableData = async () => {
        setError("")
        try {
            const response = await fetch('http://103.25.128.155:12019/api/BSMasterLoad?Company=1&Customer=1', {
                method: "Get",
                headers: {
                    "CompCode": "ESERPDB",
                    "FYear": "0",
                }
            })
            if (!response.ok) {

                throw new Error("Sorry something went wrong")
            }
            const userTableData = await response.json()
            setTabledata(userTableData.data)
            // console.log(response,"user response")

        } catch (error) {

            setError(error.message)
        }
    }
    console.log(tableData, "users tabledata")


    useEffect(() => {
        fetchTableData()

    }, [])



    // -----------------------------------------------------------------------------------------------------------------------



    const fetchData = async () => {
        setError("")
        try {
            const response = await fetch('http://103.25.128.155:12019/api/LoadMasterData?MasterType=2008&Company=1&Customer=1', {
                method: "Get",
                headers: {
                    "CompCode": "ESERPDB",
                    "FYear": "0",
                }
            })
            if (!response.ok) {

                throw new Error("Sorry something went wrong")
            }
            const userData = await response.json()
            setUsers(userData.data)
            // console.log(response,"user response")

        } catch (error) {

            setError(error.message)
        }
    }
    //  console.log(users,"users data")

    useEffect(() => {
        fetchData()
    }, [])

    // -------------------------------------------------------------------------------------------------------------------------


    return (
        <>
            <div className="main card firstDiv">
                <div
                    className="text-center card-title col-12"
                    style={{ textAlign: "start", backgroundColor: "#8389d4" }}
                >
                    <span className="row-header p-0 m-0">Sale Type</span>
                </div>
                <form className="row-content form col-sm-12 pt-0">
                    <fieldset className="form-group border p-0">
                        <legend
                            className="px-2"
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
                            <>
                                <span className="d-flex section2 col-sm-12">
                                    <>
                                        <CustomInput
                                            name="Name"
                                            classCategory="form-control inp  AccountMaster"
                                            ipType="text"
                                            label="Name"
                                            ipTitle="Enter Name"
                                            dataArray={[]}
                                        />
                                    </>

                                    <>
                                        <label
                                            htmlFor="Tax Inclusive"
                                            style={{ fontSize: "0.8em" }}
                                            className="form-label labl labl2"
                                        >
                                            Tax Inclusive
                                        </label>
                                        <input type="checkbox" onBlur={handleChange} className="form-control custom-control-input col-3 InventoryDet" name="" id="" style={{ cursor: 'pointer' }} />
                                    </>
                                    <>
                                        <label
                                            htmlFor="Tax Exempted"
                                            style={{ fontSize: "0.8em" }}
                                            className="form-label labl labl2"
                                        >
                                            Tax Exempted
                                        </label>
                                        <input type="checkbox" onBlur={handleChange} className="form-control custom-control-input col-3 InventoryDet" name="" id="" style={{ cursor: 'pointer' }} />
                                    </>
                                    <>
                                        <label
                                            htmlFor="GST Enable"
                                            style={{ fontSize: "0.8em" }}
                                            className="form-label labl labl2"
                                        >
                                            GST Enable
                                        </label>
                                        <input type="checkbox" onBlur={handleChange} className="form-control custom-control-input col-3 InventoryDet" name="" id="" style={{ cursor: 'pointer' }} />
                                    </>
                                </span>
                                <span className="d-flex section2 mt-1 col-sm-12">
                                    <>
                                        <label
                                            htmlFor="BillSundryType"
                                            style={{ fontSize: "0.8em" }}
                                            className="form-label labl labl2"
                                        >
                                            GST Category
                                        </label>
                                        {error && <p>{error}</p>}

                                        {
                                            users.length > 0 && (
                                                <select
                                                    name=" GSTCategory"
                                                    className="form-control inp mb-2 AccountMaster"
                                                    style={{ height: "" }}
                                                    title=" GST Category"
                                                >
                                                    {users.map((user : any) => (
                                                        <option key={user.id}>{user.name}</option>
                                                    ))}
                                                    {/* <option value={0}>Subtractive</option> */}
                                                </select>
                                            )
                                        }
                                    </>
                                    <>
                                        <label
                                            htmlFor="GSTType "
                                            style={{ fontSize: "0.8em" }}
                                            className="form-label labl labl2"
                                        >
                                            GST Type
                                        </label>

                                        <select
                                            name="GSTType "
                                            className="form-control inp mb-2 AccountMaster"
                                            style={{ height: "" }}
                                            title="GST Type "
                                        >
                                            <option value={0}>Enter State</option>
                                            <option value={1}>Local</option>
                                            <option value={2}>Export</option>
                                        </select>
                                    </>
                                </span>
                            </>

                            <div className="col-4"></div>
                        </>
                    </fieldset>
                </form>

                <hr style={{ margin: "0", padding: "0" }} />
                <div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">
                    <div
                        className="card-body col-sm-12 addCustomer container container-fluid container-lg"
                        style={{ overflowX: "auto", overflowY: "auto" }}
                    >
                        {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0', width: '100%' }}>
                <span className="card-title" style={{ fontSize: '15px', margin: '0', padding: '0' }}>Bank Details</span>
            </div> */}


                        <table
                            id="dtHorizontalExample"
                            className="table table-responsive table-striped table-bordered table-sm"
                            style={{
                                width: "100%",
                            }}
                        >
                            <thead>
                                <tr>
                                    <th
                                        className="text-center"
                                        style={{
                                            fontWeight: 400,
                                            backgroundColor: "grey",
                                            color: "white",
                                        }}
                                    >
                                        S.No
                                    </th>
                                    <th
                                        className="text-center"
                                        style={{
                                            fontWeight: 400,
                                            backgroundColor: "grey",
                                            color: "white",
                                        }}
                                    >
                                        Bill Sundry
                                    </th>
                                    <th
                                        className="text-center"
                                        style={{
                                            fontWeight: 400,
                                            backgroundColor: "grey",
                                            color: "white",
                                        }}
                                    >
                                        Nature
                                    </th>
                                    <th
                                        className="text-center"
                                        style={{
                                            fontWeight: 400,
                                            backgroundColor: "grey",
                                            color: "white",
                                        }}
                                    >
                                        Type
                                    </th>
                                    <th
                                        className="text-center"
                                        style={{
                                            fontWeight: 400,
                                            backgroundColor: "grey",
                                            color: "white",
                                        }}
                                    >
                                        Value
                                    </th>
                                </tr>
                            </thead>
                            <tbody >
                                {error && <p>{error}</p>}
                                {tableData.map((user : any) => (
                                    <tr>
                                        <th style={{ width: "100px" }}>{user.code}</th>

                                        <td style={{ width: "340px" }}>
                                            <input list="bill list" name="billsandry"
                                                value={billSundry}
                                                // onChange={handelBill}
                                                onChange={handelClick}
                                                className="form-control inp Nature"
                                                type="text"
                                                title="Nature"
                                                style={{ width: "340px" }} />
                                            <datalist
                                                id="bill list"

                                            >
                                                {/* <option value={1}>Local</option> */}
                                                <option >{user.name}</option>
                                                {/* <option value={2}>Export</option> */}
                                            </datalist>

                                        </td>
                                        <td style={{ width: "340px" }}>
                                            {" "}
                                            <input

                                                value={nature}
                                                onChange={handelnature}
                                                name="Nature"
                                                className="form-control inp Nature"
                                                type="text"
                                                title="Nature"
                                                style={{ width: "340px" }}
                                            />
                                        </td>
                                        <td style={{ width: "340px" }}>
                                            {" "}
                                            <input
                                                value={type}
                                                onChange={handeltype}
                                                name="Type"
                                                className="form-control inp Type"
                                                type="text"
                                                title="Type"
                                                style={{ width: "340px" }}
                                            />
                                        </td>
                                        <td style={{ width: "340px" }}>
                                            {" "}
                                            <input
                                                name="Value"
                                                className="form-control inp Value"
                                                type="number"
                                                title="Value"
                                                style={{ width: "340px" }}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                </div>

                <hr style={{ margin: "0", padding: "0" }} />
            </div>

            <div className="btn-group col-12 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0">Save</button>
                <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} className="btn btn-success mr-2 ml-2 pl-0 pr-0 ">Save & Submit</button>
                <button type="button" style={{ border: '2px solid red', letterSpacing: 3 }} className="btn btn-danger pl-0 pr-0">Quit</button>
            </div>
        </>
    );
}

