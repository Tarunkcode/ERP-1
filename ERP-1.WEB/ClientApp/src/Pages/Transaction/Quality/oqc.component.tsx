﻿import * as React from 'react';
import UnderConstruction from '../../../components/under-construction';
const OQC = () => {
    return (
        <>
            <div className="main card firstDiv">

                <div className="text-center card-title col-12" style={{ textAlign: 'start', backgroundColor: '#8389d4' }}>
                    <span className="row-header p-0 m-0" >QC Incoming Material From Production Confirmation</span>
                </div>
                <div className="card-body row col-sm-12 m-0 p-0" >
                    <form className="row-content form col-sm-12 pt-0">
                        <fieldset className="form-group border p-0" >
                            <legend className="px-2" data-toggle="collapse" data-target="#genDetails" aria-expanded="true" aria-controls="genDetails" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Searching Details From QC<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>

                            <div className="collapse show" id="genDetails">
                                <span className="d-flex section2 col-sm-10">
                                    <>
                                        <label htmlFor="series" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Production Series</label>
                                        <input type="text" name="custName" className="form-control inp" />
                                    </>

                                </span>

                                <span className="d-flex section2 col-sm-10">
                                    <>
                                        <label htmlFor="majProd" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Prod. No. From</label>
                                        <input type="text" name="payTerm" className="form-control inp" />
                                    </>
                                    <>
                                        <label htmlFor="series" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Prod. No. To</label>
                                        <input type="text" name="custCode" className="form-control inp" />
                                    </>

                                </span>

                                <span className="d-flex section2 col-sm-10">
                                    <>
                                        <label htmlFor="series" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Prod. From</label>
                                        <input type="date" name="custName" className="form-control inp" />
                                    </>
                                    <>
                                        <label htmlFor="majProd" style={{ fontSize: '0.8em' }} className="form-label unit labl labl2">Prod. To</label>
                                        <input type="date" name="payTerm" className="form-control inp" />
                                    </>

                                </span>

                                <span className="d-flex section2 col-sm-10">
                                    <>
                                        <label htmlFor="series" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Item Code</label>
                                        <input type="text" name="custName" className="form-control inp" />
                                    </>

                                </span>

                            </div>
                            <button type="submit" className="btn btn-primary m-2">Load Data</button>
                        </fieldset>
                    </form>
                    <hr style={{ margin: '0', padding: '0' }} />
                    <div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">
                        <div className="card-body col-sm-12 addCustomer container container-fluid container-lg" style={{ overflowX: 'auto', overflowY: 'auto' }}>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0', width: '100%' }}>
                                <span className="card-title" style={{ fontSize: '15px', margin: '0', padding: '0' }}>QC Details</span>
                            </div>
                            <table id="dtHorizontalExample" className="table table-striped table-bordered table-sm" style={{
                                width: "100%"
                            }}>
                                <thead>
                                    <tr>
                                        <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>S.No</th>
                                        <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Prod. No.</th>
                                        <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Prod.Date</th>
                                        <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Customer Name</th>
                                        <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Item Code</th>
                                        <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Item Name</th>
                                        <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Model No.</th>
                                        <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Prod. Qty</th>
                                        <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Processed Qty</th>
                                        <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Balance Qty</th>
                                        <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>UoM</th>
                                        <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Mat. Center</th>
                                        <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Process</th>
                                        <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>JobSRNO</th>
                                        <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>p1</th>
                                        <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>p2</th>
                                        <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>p3</th>
                                        <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Process Code</th>
                                        <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Price</th>
                                        <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>PlanNo</th>
                                        <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>DWCODE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>1</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>2</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>3</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>

                    <hr style={{ margin: '0', padding: '0' }} />



                </div>
                <hr style={{ margin: '0', padding: '0' }} />
            </div>
            <div>

               

            </div>
            <div className="btn-group col-12 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
               
                <button type="button" style={{ border: '2px solid red', letterSpacing: 3 }} className="btn btn-danger pl-0 pr-0 col-1">Quit</button>
            </div>
        </>
    )
}

export default OQC;