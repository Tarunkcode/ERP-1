
import * as React from 'react';
import { useState, useEffect } from 'react';
import CustomInput, { CustomSelect } from '../../../components/custom-input/custom-input.component';
import {CustomeSwitch2} from '../../../components/CustomSwitch/custom-switch.component';
export default function SalePurchaseType_Page({ handleChange, handlePosting, pageTitle, getMasterType, configType, ...otherProps }: any) {
    useEffect(() => {
        if (configType == '/add-sale-type') {
            getMasterType(13)
        }
        else if (configType == '/add-purchase-type') {
            getMasterType(14)
        }
    }, [configType])
  
    // -------------------------------------------------------------------------------------------------------------------------


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
                 
         
                           
                                <span className="d-flex section2 col-sm-12">
                                    <>
                                     <CustomInput
                                         change={handleChange}
                                            name="Name"
                                            classCategory="form-control inp col-4  seriesConf"
                                            ipType="text"
                                            label="Name"
                                            ipTitle="Enter Name"
                                            dataArray={[]}
                                        />
                                    </>

                    </span>
                                <span className="d-flex section2 col-sm-12 mt-2 mb-2">

                        <>
                            <CustomeSwitch2 lablClass="custom-control-label col-9" label="Tax Inclusive" id="TaxInc" name="TaxInc" classCat="form-control custom-control-input col-3 seriesConf switch" handleChange={handleChange} />
                        </>
                        <>
                            <CustomeSwitch2 lablClass="custom-control-label col-9" label="Tax Exempted" id="TaxExem" name="TaxExem" classCat="form-control custom-control-input col-3 seriesConf switch" handleChange={handleChange} />
                        </>
                        <>
                            <CustomeSwitch2 lablClass="custom-control-label col-9" label="Primary Group" id="GSTEnable" name="GSTEnable" classCat="form-control custom-control-input col-3 seriesConf switch" handleChange={handleChange} />
                        </>

                    </span>
                                <span className="d-flex section2 mt-1 col-sm-12">
                                    <>
                            <CustomSelect label="GST Category" name="GSTCat" dataArray={[{ code: 1, name: "cat-1" }, { code: 2, name: 'cat-2' }, { code: 3, name:'cat-3'}]} handleChange={handleChange} classCategory="form-control col-4 seriesConf select" />
                                          
                                    </>
                       
                                </span>
                           <span className="d-flex section2 mt-1 col-sm-12">
                              <>
                                     <CustomSelect label="GST Type" name="GSTType" dataArray={[{ code: 1, name: 'Enter State' }, { code: 2, name: 'Local' }, { code: 3, name:'Export'}]} handleChange={handleChange} classCategory="form-control col-4 seriesConf select" />
                                     
                              </>
                           </span>
                   
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
                             
                                    <tr>
                                        <th style={{ width: "100px" }}>1</th>

                                    <td>
                                        <input
                                            onChange={handleChange}
                                            name="BSSRNo"
                                            className="form-control inp roleMaster"
                                            type="number"
                                            title=""
                                            style={{ width: "340px" }}
                                        />
                                        </td>
                                        <td style={{ width: "340px" }}>
                                            {" "}
                                            <input
                                            onChange={handleChange}
                                                name="BSCode"
                                                className="form-control inp roleMaster"
                                                type="number"
                                                title=""
                                                style={{ width: "340px" }}
                                            />
                                        </td>
                                        <td style={{ width: "340px" }}>
                                            {" "}
                                            <input
                                            onChange={handleChange}
                                                name="BSVal"
                                                className="form-control inp roleMaster"
                                                type="number"
                                                title=""
                                                style={{ width: "340px" }}
                                            />
                                        </td>
                                        <td style={{ width: "340px" }}>
                                            {" "}
                                        <input
                                            onChange={handleChange}
                                                name="BSType"
                                                className="form-control inp roleMaster"
                                                type="number"
                                                title=""
                                                style={{ width: "340px" }}
                                            />
                                        </td>
                                    </tr>
                               
                            </tbody>
                        </table>

                    </div>
                </div>

                <hr style={{ margin: "0", padding: "0" }} />
            </div>

            <div className="btn-group col-12 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0">Save</button>
                <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} className="btn btn-success mr-2 ml-2 pl-0 pr-0 " onClick={ handlePosting}>Save & Submit</button>
                <button type="button" style={{ border: '2px solid red', letterSpacing: 3 }} className="btn btn-danger pl-0 pr-0">Quit</button>
            </div>
        </>
    );
}

