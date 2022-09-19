import * as React from 'react';
import UnderConstruction from '../../under-construction';
const MaterialMovement = () => {
    return (
        <>
        
                <div className="main card firstDiv">
                    <div className="text-center card-title col-12" style={{ textAlign: 'start', backgroundColor: '#8389d4' }}>
                        <span className="row-header p-0 m-0" >Material InTransit Details</span>
                    </div>

                    <div className="card-body row col-sm-12 m-0 p-0" >
                        <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                            <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">

                                <div className="card-body" style={{ margin: '0', padding: '0' }}>
                                    <form className="form">


                                        <span className="form-group col-sm-12" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '10px 0px' }}>
                                            <> <label style={{ margin: '0 0 0 10px', padding: '0', fontSize: '14px' }} className="form-label labl" htmlFor="series">Series</label>
                                                <input className="form-control inp" type="text" name="series" />
                                            </>

                                        <div className="col-2"></div>
                                        <div className="col-2"></div>
                                        </span>

                                        <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' }}>
                                            <> <label style={{ margin: '0 0 0 10px', padding: '0', fontSize: '14px' }} className="form-label labl" htmlFor="material">Supplier</label>
                                                <input className="form-control inp" type="text" name="material" />
                                            </>

                                            
                                            <div className="col-2"></div>
                                            <div className="col-2"></div>
                                    </span>
                                     <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' }}>
                                    <> <label style={{ margin: '0 0 0 10px', padding: '0', fontSize: '14px' }} className="form-label labl" htmlFor="code">Item</label>
                                            <input className="form-control inp" type="text" name="code" /></>  <div className="col-2"></div>
                                        <div className="col-2"></div> </span>

                                    <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' }}>
                                    <> <label style={{ margin: '0 0 0 10px', padding: '0', fontSize: '14px' }} className="form-label labl" htmlFor="publicationNo">From No.</label>
                                        <input className="form-control inp" type="text" name="publicationNo" />
                                     </>
                                    <> <label style={{ margin: '0 0 0 10em', padding: '0', fontSize: '14px' }} className="form-label labl" htmlFor="publicationNo">End. No.</label>
                                        <input className="form-control inp" type="text" name="publicationNo" />
                                        </>
                                        <div className="col-2"></div>
                                    </span>
                                      <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' }}>
                                    <> <label style={{ margin: '0 0 0 10px', padding: '0', fontSize: '14px' }} className="form-label labl" htmlFor="publicationNo">From Date</label>
                                        <input className="form-control inp" type="date" name="publicationNo" />
                                     </>
                                        <> <label style={{ margin: '0 0 0 10em', padding: '0', fontSize: '14px' }} className="form-label labl" htmlFor="publicationNo">To Date</label>
                                        <input className="form-control inp" type="date" name="publicationNo" />
                                        </>
                                        <div className="col-2"></div>
                                       
                                    </span>

                                    </form>

                                </div>



                            </div>

                        </div>
                    
                        <hr />

                        <div className="col-sm-12 addQcPlan container container-fluid container-lg mt-3" style={{ overflowX: 'auto', overflowY: 'auto' }}>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', margin: '0', padding: '0', width: '100%' }}>
                                <fieldset className="form-group border p-0">
                                    <legend className="px-2" style={{ fontSize: '15px', margin: '0', padding: '0' }}>Details</legend>
                                    <table id="dtHorizontalExample" className="table table-striped table-bordered table-sm" style={{
                                        width: "100%"
                                    }}>
                                        <thead>
                                            <tr>
                                                <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>S.No</th>
                                                <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Plan No.</th>
                                                <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Plan Month.</th>
                                                <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Po No.</th>
                                                <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Po Date</th>
                                                <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Supplier</th>
                                                <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Item Code</th>
                                                <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Item Name</th>
                                                <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Po. Qty</th>
                                                <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Po.Price</th>
                                                <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Rec. Qty</th>
                                                <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Bal Qty.</th>
                                                <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Dispatch Date</th>
                                                <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Date Of Arrival</th>
                                                <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Bill Qty</th>
                                                <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Remark</th>
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
                                            </tr>

                                        </tbody>
                                    </table>

                                </fieldset>
                            </div>
                        </div>



                    </div>

                </div>
                <div className="btn-group col-12 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0">UpDate</button>
                    <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} className="btn btn-success mr-2 ml-2 pl-0 pr-0 ">ExPort</button>
                    <button type="button" style={{ border: '2px solid red', letterSpacing: 3 }} className="btn btn-danger pl-0 pr-0">Quit</button>
                </div>
            </>


    )
}

export default MaterialMovement;