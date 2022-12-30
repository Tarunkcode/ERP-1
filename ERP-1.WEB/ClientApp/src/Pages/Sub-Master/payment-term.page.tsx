import * as React from 'react';
import CustomInput from '../../components/custom-input/custom-input.component';
import CustomeSwitch from '../../components/CustomSwitch/custom-switch.component';

export default function PaymentTrem_Page({ getMasterType, pageTitle, handlePosting, handleChange, configType,defaultData, ...otherProps}: any) {
    const [payment, setPayment] = React.useState(false)
    const [discount, setDiscount] = React.useState(false)
    React.useEffect(() => {
        configType == '10' ? getMasterType(31) : null;
        configType == '9' ? getMasterType(30) : null;
    }, [])
    return (
        <>
            <div className="main card firstDiv">
                <div
                    className="text-center card-title col-12"
                    style={{ textAlign: "start", backgroundColor: "#8389d4" }}
                >
                    <span className="row-header p-0 m-0">{pageTitle}</span>
                </div>
                <form className="row-content form col-sm-12 pt-0">
                

                    <span className="d-flex section2 mb-2 col-sm-12">
                        <CustomInput
                            change={handleChange}
                            default={defaultData.name}
                            name="name"
                            classCategory="form-control inp subMaster"
                            ipType="text"
                            label={`${pageTitle} (Name)`}
                            ipTitle={`Enter ${pageTitle} (Name)`}
                            dataArray={[]}
                        />

                        <CustomInput
                            change={handleChange}
                            name="s1"
                            default={defaultData.s1}
                            classCategory="form-control inp mb-2 subMaster"
                            ipType="text"
                            label="Description"
                            ipTitle="Enter Description"
                            dataArray={[]}
                        />
                        <CustomInput
                            change={handleChange}
                            name="c1"
                            default={defaultData.c1}
                            classCategory="form-control inp mb-2 subMaster"
                            ipType="text"
                            label="Due Days"
                            ipTitle="Enter Due Days"
                            dataArray={[]}
                        />
                    </span>


                    <span className="d-flex section2 mb-2 col-sm-12">
                        <span className="d-flex section2 mb-2 col-sm-12"  >

                            <CustomeSwitch lablClass="custom-control-label col-9" default={defaultData.c2} label="Advance Payment" id="c2" name="c2" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChange } />

                        </span>
                    </span>


                    <span className="d-flex section2 mb-2 col-sm-12"  >

                        <CustomeSwitch lablClass="custom-control-label col-9" default={defaultData.c3} label="Payment Structure" id="c3" name="c3" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChange } />

                    </span>
                    {/* </fieldset> */}
                </form>
                {/* ------------------------------------------------------payment structure table------------------------------------------------------------- */}
                <hr style={{ margin: "0", padding: "0" }} />
                {
                    payment === false ? (
                        <>
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
                                                    Description
                                                </th>
                                                <th
                                                    className="text-center"
                                                    style={{
                                                        fontWeight: 400,
                                                        backgroundColor: "grey",
                                                        color: "white",
                                                    }}
                                                >
                                                    No Of Days
                                                </th>
                                                <th
                                                    className="text-center"
                                                    style={{
                                                        fontWeight: 400,
                                                        backgroundColor: "grey",
                                                        color: "white",
                                                    }}
                                                >
                                                    Percentage
                                                </th>

                                            </tr>
                                        </thead>
                                        <tbody >

                                            <tr>
                                                <th style={{ width: "100px" }}>1</th>

                                                <td style={{ width: "500px" }}>
                                                    <input list="bill list" name="desc"
                                                       className="form-control select inp table"
                                                        type="text"
                                                        onChange={handleChange}
                                                        title="Nature"
                                                        style={{ width: "500px" }} />
                                                    <datalist
                                                        id="bill list"

                                                    >
                                                        <option value={1}>Local</option>
                                                        {/* <option >{user.name}</option> */}
                                                        <option value={2}>Export</option>
                                                    </datalist>

                                                </td>
                                                <td style={{ width: "400px" }}>
                                                    {" "}
                                                    <input

                                                        onChange={handleChange}
                                                        name="noOfDay"
                                                        className="form-control select inp table"
                                                        type="text"
                                                        title="Nature"
                                                        style={{ width: "440px" }}
                                                    />
                                                </td>
                                                <td style={{ width: "400px" }}>
                                                    {" "}
                                                    <input
                                                        onChange={handleChange}
                                                        name="per"
                                                        className="form-control inp select table"
                                                        type="text"
                                                        title="Type"
                                                        style={{ width: "400px" }}
                                                    />
                                                </td>

                                            </tr>

                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </>
                    ) : null
                }
                {/* ---------------------------------------------------------------------------------------------------------------------------------- */}
                <span className="row-content form col-sm-12 mt-2 pt-0">
                    <span className="d-flex section2 mb-2 col-sm-12"  >

                        <CustomeSwitch lablClass="custom-control-label col-9" default={defaultData.c4 } label="Discount Structure" id="c4" name="c4" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChange} />

                    </span>
                </span>
                {/* -------------------------------------------------------discount structure table------------------------------------------------------------- */}
                {
                    discount === false ? (
                        <>
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
                                                    Description
                                                </th>
                                                <th
                                                    className="text-center"
                                                    style={{
                                                        fontWeight: 400,
                                                        backgroundColor: "grey",
                                                        color: "white",
                                                    }}
                                                >
                                                    No Of Days
                                                </th>
                                                <th
                                                    className="text-center"
                                                    style={{
                                                        fontWeight: 400,
                                                        backgroundColor: "grey",
                                                        color: "white",
                                                    }}
                                                >
                                                    Percentage
                                                </th>

                                            </tr>
                                        </thead>
                                        <tbody >

                                            <tr>
                                                <th style={{ width: "100px" }}>1</th>

                                                <td style={{ width: "500px" }}>
                                                    <input list="bill list" name="desc"


                                                        onChange={handleChange}
                                                        className="form-control inp select table"
                                                        type="text"
                                                        title="Nature"
                                                        style={{ width: "500px" }} />
                                                    <datalist
                                                        id="bill list"

                                                    >
                                                        <option value={1}>Local</option>
                                                        {/* <option >{user.name}</option> */}
                                                        <option value={2}>Export</option>
                                                    </datalist>

                                                </td>
                                                <td style={{ width: "400px" }}>
                                                    {" "}
                                                    <input

                                                        onChange={handleChange}
                                                        name="noOfDay"
                                                        className="form-control select inp table"
                                                        type="number"
                                                        title="Nature"
                                                        style={{ width: "440px" }}
                                                    />
                                                </td>
                                                <td style={{ width: "400px" }}>
                                                    {" "}
                                                    <input
                                                        onChange={handleChange}
                                                        name="per"
                                                        className="form-control select inp table"
                                                        type="number"
                                                        title="Type"
                                                        style={{ width: "400px" }}
                                                    />
                                                </td>

                                            </tr>

                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </>
                    ) : null
                }
            </div>
            <div className="btn-group col-12 mt-3" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3, width: "100px", marginLeft: "400px" }} className="btn btn-info pl-0 pr-0 col-xs-6 col-md-1" onClick={ handlePosting }>Save</button>

            </div>
        </>
    )
}
