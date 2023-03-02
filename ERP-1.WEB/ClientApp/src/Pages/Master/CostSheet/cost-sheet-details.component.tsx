﻿import * as React from 'react';


class CostSheetDetails extends React.Component {
    render() {
        return (
            
            <>
                <div className="main card firstDiv">

                    <div className="text-center card-title col-12" style={{ textAlign: 'start', backgroundColor: '#8389d4' }}>
                        <span className="row-header p-0 m-0" >Cost Sheet Details</span>
                    </div>
                    <div className="card-body row col-sm-12 m-0 p-0" >
                        <form className="row-content form col-sm-12 pt-0">
                            <fieldset className="form-group border p-0" >
                                <legend className="px-2" data-toggle="collapse" data-target="#genDetails" aria-expanded="true" aria-controls="genDetails" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Item Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>

                                <div className="collapse show" id="genDetails">
                                    <span className="d-flex section2 col-sm-12">
                                        <>
                                            <label htmlFor="series" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Series</label>
                                            <input type="text" name="series" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="majProd" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Code</label>
                                            <input type="text" name="majProd" className="form-control inp" />
                                        </>
                                    </span>

                                    <span className="d-flex section2 col-sm-12">
                                        <>
                                            <label htmlFor="series" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Item</label>
                                            <input type="text" name="custCode" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="majProd" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Item Desc.</label>
                                            <input type="text" name="delTerm" className="form-control inp" />
                                        </>
                                    </span>

                                    <span className="d-flex section2 col-sm-12">
                                        <>
                                            <label htmlFor="series" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Quantity</label>
                                            <input type="text" name="custName" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="majProd" style={{ fontSize: '0.8em' }} className="form-label unit labl labl2">Unit</label>
                                            <input type="text" name="payTerm" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="majProd" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Valid From</label>
                                            <input type="date" name="payTerm" className="form-control inp" />
                                        </>
                                    </span>

                                    <span className="d-flex section2 col-sm-12">
                                        <>
                                            <label htmlFor="series" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Color</label>
                                            <input type="text" name="printName" className="form-control inp" />
                                        </>
                                      
                                    </span>

                                    <span className="d-flex section2 col-sm-12">
                                        <>
                                            <label htmlFor="series" style={{ fontSize: '0.8em' }} className="form-label labl labl2 ">Is Packing</label>
                                            <input type="text" name="custGrp" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="majProd" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Packing Size</label>
                                            <input type="text" name="majProd" className="form-control inp" />
                                        </>
                                    </span>
                                </div>
                            </fieldset>
                        </form>
                        <hr style={{ margin: '0', padding: '0' }} />
                        <div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">
                            <div className="card-body col-sm-12 addCustomer container container-fluid container-lg" style={{ overflowX: 'auto', overflowY: 'auto' }}>

                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0', width: '100%' }}>
                                    <span className="card-title" style={{ fontSize: '15px', margin: '0', padding: '0' }}>Consumed Item Details</span>
                                </div>
                                <table id="dtHorizontalExample" className="table table-striped table-bordered table-sm" style={{
                                    width: "100%"
                                }}>
                                    <thead>
                                        <tr>
                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>S.No</th>
                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Item Code</th>
                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Description</th>
                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Source</th>
                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Rate</th>
                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Cons. Qty</th>
                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Uom</th>
                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Produce Qty(Avg.)</th>
                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Cost</th>
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
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <hr style={{ margin: '0', padding: '0' }} />
                        <form className="form col-sm-12 row-content card-body pt-0 pb-0">
                            <fieldset className="form-group border p-0">
                                <legend className="px-2" data-toggle="collapse" data-target="#personalDet" aria-expanded="false" aria-controls="personalDet" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Bom Cost Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0    96v320c0  35.34 28.65 64 64  64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2    230.7 352 224   352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120   192h208c9.531  0 18.19 5.656   21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>
                                <div className="collapse" id="personalDet">

                                    <span className="d-flex section2 col-sm-12">
                                        <>
                                            <label htmlFor="contPerson" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Routing Cost</label>
                                            <input type="text" name="contPerson" className="form-control inp" />
                                        </>

                                        <>
                                            <label htmlFor="TelNo" style={{ fontSize: '0.8em' }} className="form-label labl labl2">EX-Factory Amt.</label>
                                            <input type="text" name="TelNo" className="form-control inp" />
                                        </>


                                    </span>

                                    <span className="d-flex section2 col-sm-12">
                                        <>
                                            <label htmlFor="desg" style={{ fontSize: '0.8em' }} className="form-label labl labl2">RM Cost</label>
                                            <input type="text" name="desg" className="form-control inp" />
                                        </>

                                        <>
                                            <label htmlFor="mob" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Markup(%)</label>
                                            <input type="text" name="mob" className="form-control inp" />
                                        </>

                                        <>
                                            <label htmlFor="mob" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Markup Amt.</label>
                                            <input type="text" name="mob" className="form-control inp" />
                                        </>
                                    </span>

                                    <span className="d-flex section2 col-sm-12">
                                        <>
                                            <label htmlFor="cheifExe" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Over Head Amt.</label>
                                            <input type="text" name="cheifExe" className="form-control inp" />
                                        </>

                                        <>
                                            <label htmlFor="fax" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Over Head(%)</label>
                                            <input type="text" name="fax" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="fax" style={{ fontSize: '0.8em' }} className="form-label labl labl2">MRP</label>
                                            <input type="text" name="fax" className="form-control inp" />
                                        </>
                                    </span>

                                    <span className="d-flex section2 col-sm-12">
                                        <>
                                            <label htmlFor="cheifExeTelNo" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Total Cost</label>
                                            <input type="text" name="cheifExeTelNo" className="form-control inp" />
                                        </>

                                        <>
                                            <label htmlFor="email" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Discount</label>
                                            <input type="text" name="email" className="form-control inp" />
                                        </>
                                    </span>
                                    <span className="d-flex section2 col-sm-12">
                                        <>
                                            <label htmlFor="mulCurr" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Discount Amt.</label>
                                            <input type="text" name="mulCurr" className="form-control inp" />
                                            <div className="col-1"></div>
                                        </>
                                    </span>
                                </div>
                            </fieldset>
                        </form>

                   
                    </div>
                    <hr style={{ margin: '0', padding: '0' }} />
                </div>
                <div className="btn-group col-12 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0">Save</button>
                    <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} className="btn btn-success mr-2 ml-2 pl-0 pr-0 ">Save & Submit</button>
                    <button type="button" style={{ border: '2px solid red', letterSpacing: 3 }} className="btn btn-danger pl-0 pr-0">Quit</button>
                </div>
            </>
            );
    }
}

export default CostSheetDetails;