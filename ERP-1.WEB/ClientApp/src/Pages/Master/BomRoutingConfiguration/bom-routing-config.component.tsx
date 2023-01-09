import * as React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

function BomRoutingConfig() {
    const history = useHistory();
    const handleClickRoute = () => {

        history.push('/route-details');

    }
        return (
            
            <>
                <div className="main card firstDiv">

                    <div className="text-center card-title col-12" style={{ textAlign: 'start' }}>
                        <span className="row-header p-0 m-0" >BOM Routing Configuration</span>
                    </div>
                    <div className="card-body row col-sm-12 m-0 p-0" >
                        <form className="row-content form col-sm-12 pt-0">
                            <fieldset className="form-group border p-0" >
                                <legend className="px-2" data-toggle="collapse" data-target="#genDetails" aria-expanded="false" aria-controls="genDetails" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Item Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>

                                <div className="collapse show" id="genDetails">
                                    <span className="d-flex section2 col-sm-12">
                                        <>
                                            <label htmlFor="series" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Series</label>
                                            <input type="text" name="series" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="RCode" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Routing Code</label>
                                            <input type="text" name="RCode" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="RName" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Routing Name</label>
                                            <input type="text" name="RName" className="form-control inp" />
                                        </>
                                    </span>

                                    <span className="d-flex section2 col-sm-12">
                                        <>
                                            <label htmlFor="series" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Item</label>
                                            <input type="text" name="custCode" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="majProd" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Valid From</label>
                                            <input type="date" name="payTerm" className="form-control inp" />
                                        </>
                                    </span>

                                    <span className="d-flex section2 col-sm-12">
                                        <>
                                            <label htmlFor="series" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Produce Quantity</label>
                                            <input type="text" name="custName" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="majProd" style={{ fontSize: '0.8em' }} className="form-label labl labl2">UOM</label>
                                            <input type="text" name="payTerm" className="form-control inp" />
                                        </>
                                       <>
                                            <label htmlFor="majProd" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Alt UOM</label>
                                            <input type="text" name="payTerm" className="form-control inp" />
                                        </>
                                     
                                    </span>

                                 

                                 
                                </div>
                            </fieldset>
                        </form>
                   
                     
                        <hr style={{ margin: '0', padding: '0' }} />
                        <div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">
                            <div className="card-body col-sm-12 addCustomer container container-fluid container-lg" style={{ overflowX: 'auto', overflowY: 'auto' }}>

                                <div className="text-center card-title col-12" style={{ textAlign: 'start' }}>
                                    <span className="row-header p-0 m-0" >Route Details</span>
                                </div>
                                <table id="dtHorizontalExample" className="table table-striped table-bordered table-sm" style={{
                                    width: "100%"
                                }}>
                                    <thead>
                                        <tr>
                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>S.No</th>
                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Process</th>
                                           
                                         
                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>UoM</th>
                                           
                                       
                                          
                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Is Final</th>
                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Man Power</th>
                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Electricity(/Unit)</th>
                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Total Overhead</th>
                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Produce Prod. No.</th>
                                    <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Description</th>
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
                                            {/*Route Details below navLink*/}
                                            <td><NavLink to="/add-bom-routing-configuration-master"><button type="button" className="btn btn-info m-0 p-0">Enter Details</button></NavLink></td>
                                        </tr>
                                      

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div style={{ margin: '0 auto' }} className="col-12 card-footer">
                            <textarea rows={5} className="col-7 form-control active" placeholder="Enter Item Description..." />
                        </div>
                        <div className="row card-footer col-12 " style={{ margin: '1em 0%'}}>
                            <span className="d-flex align-items-center m-0 p-0">
                                <>
                                    <label htmlFor="1payDate" style={{ fontSize: '0.8em', width: '100%', marginLeft: '2em' }} className="form-label">Created By</label>
                                    <input className="form-control" name="1payDate" type="text" title="Created By" />


                                </>

                                <>
                                    <label htmlFor="daysFreq" style={{ fontSize: '0.8em', width: '100%', marginLeft: '2em' }} className="form-label ">Created On</label>
                                    <input type="date" name="daysFreq" className="form-control" title="Created On" />

                                </>
                                <>
                                    <label htmlFor="daysFreq" style={{ fontSize: '0.8em', width: '100%', marginLeft: '2em' }} className="form-label ">Modify By</label>
                                    <input type="text" name="daysFreq" className="form-control" title="Created On" />

                                </>

                                <>
                                    <label htmlFor="daysFreq" style={{ fontSize: '0.8em', width: '100%', marginLeft: '2em' }} className="form-label ">Modify On</label>
                                    <input type="text" name="daysFreq" className="form-control" title="Created On" />

                                </>



                            </span>
                        </div>
                        <div className="row card-footer col-12 m-0">
                            <span className="d-flex col-12 align-items-center m-0 p-0">
                               
                                    <label htmlFor="1payDate" style={{ fontSize: '0.8em', margin: 'auto 2em' }} className="form-label">Approval Details</label>
                                    <input className="form-control col-5" name="1payDate" type="text" title="Approval Details" />

                            </span>
                        </div>
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

export default BomRoutingConfig;