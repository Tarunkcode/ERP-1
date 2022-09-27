import * as React from 'react';
import { NavLink } from 'react-router-dom';
import BOMModals from '../../../components/Modals/BomModals';

export default class RouteDetails extends React.Component {
    render() {
        return (
     <>

            <div className="card col-12 p-3 pt-0" style={{ overflow:'auto' }}>

                <div className="text-center card-title col-12 bg-info" style={{ textAlign: 'start' }}>
                    <span className="row-header p-0 m-0" >BOM Process Item Details</span>
                </div>
               
                <div className="card-body row col-sm-12 m-0 p-0" >
                    <form className="row-content form col-sm-12 pt-0">
                        <fieldset className="form-group border p-0" >
                            <legend className="px-2" data-toggle="collapse" data-target="#genDetails" aria-expanded="false" aria-controls="genDetails" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Item Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>

                            <div className="collapse show" id="genDetails">
                                <span className="d-flex section2 col-sm-12">
                                    <>
                                        <label htmlFor="series" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Item Name</label>
                                        <input type="text" name="series" className="form-control inp" />
                                    </>
                                    <>
                                        <label htmlFor="RCode" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Color</label>
                                        <input type="text" name="RCode" className="form-control inp" />
                                    </>
                                    <>
                                        <label htmlFor="RName" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Assortment</label>
                                        <input type="text" name="RName" className="form-control inp" />
                                    </>
                                </span>

                                <span className="d-flex section2 col-sm-12">
                                    <>
                                        <label htmlFor="series" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Satge No.</label>
                                        <input type="text" name="custCode" className="form-control inp" />
                                    </>
                                    <>
                                        <label htmlFor="majProd" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Process</label>
                                        <input type="date" name="payTerm" className="form-control inp" />
                                    </>
                                    <>
                                        <label htmlFor="majProd" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Overhead Amt.</label>
                                        <input type="date" name="payTerm" className="form-control inp" />
                                    </>
                                </span>

                                <span className="d-flex section2 col-sm-12">
                                    <>
                                        <label htmlFor="series" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Quantity</label>
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

                                 <span className="d-flex section2 col-sm-12">
                                    <>
                                        <label htmlFor="series" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Amount</label>
                                        <input type="text" name="custName" className="form-control inp" />
                                    </>
                                    <>
                                        <label htmlFor="majProd" style={{ fontSize: '0.8em' }} className="form-label labl labl2">SetUp Time</label>
                                        <input type="text" name="payTerm" className="form-control inp" />
                                    </>
                                    <>
                                        <label htmlFor="majProd" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Cycle Time</label>
                                        <input type="text" name="payTerm" className="form-control inp" />
                                    </>

                                </span>

                                 <span className="d-flex section2 col-sm-12">
                                    <>
                                        <label htmlFor="jobW" style={{ fontSize: '0.8em' }} className="form-label labl labl2">JOB Work</label>
                                        <select name="jobW" className="form-control inp" style={{ height:'25px' }}>
                                                 <option value="1">Y</option>
                                                 <option value="0">N</option>
                                        </select>
                                    </>
                                    <>
                                        <label htmlFor="majProd" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Machine Department</label>
                                        <input type="text" name="payTerm" className="form-control inp" />
                                    </>
                                   

                                </span>




                            </div>
                        </fieldset>
                    </form>


                    <hr style={{ margin: '0', padding: '0' }} />
                    <div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">
                        <div className="card-body col-sm-12 addCustomer container container-fluid container-lg" style={{ overflowX: 'auto', overflowY: 'auto' }}>

                                <div className="text-center card-title col-12 bg-info m-0" style={{ textAlign: 'start' }}>
                                    <span className="row-header p-0 m-0" >Route Details</span>
                                </div>
                            <table id="dtHorizontalExample" className="table table-striped table-bordered table-sm" style={{
                                width: "100%"
                            }}>
                                <thead>
                                    <tr>
                                        <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Item Code</th>
                                        <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Description</th>





                                        <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Cons. Aty</th>
                                        <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>UOM</th>
                                        <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>isProcess Dep.</th>
                                        <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Alt Item</th>
                                        <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Operation</th>
                                      
                                  
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>1</th>
                                        <td></td>


                                     

                                        <td></td>
                                        <td></td>


                                        <td></td>
                                            <td><BOMModals isBOMAlt={true } isBOMProcess={false } isBOMRouting={false }/></td>
                                            <td><BOMModals isBOMAlt={false } isBOMProcess={ false} isBOMRouting={true } /></td>
                                    </tr>
                                    <tr>
                                        <th>2</th>
                                        <td></td>



                                        <td></td>
                                        <td></td>


                                        <td></td>
                                            <td><BOMModals isBOMAlt={true} isBOMProcess={false} isBOMRouting={false} /></td>
                                            <td><BOMModals isBOMAlt={false} isBOMProcess={false} isBOMRouting={true} /></td>
                                    </tr>
                                    <tr>
                                        <th>3</th>
                                        <td></td>


                                  

                                        <td></td>
                                        <td></td>


                                        <td></td>
                                            <td><BOMModals isBOMAlt={true} isBOMProcess={false} isBOMRouting={false} /></td>
                                            <td><BOMModals isBOMAlt={false} isBOMProcess={false} isBOMRouting={true} /></td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>



                    <hr style={{ margin: '0', padding: '0' }} />
                    <div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">
                        <div className="card-body col-sm-12 addCustomer container container-fluid container-lg" style={{ overflowX: 'auto', overflowY: 'auto' }}>

                                <div className="text-center card-title col-12 bg-info m-0" style={{ textAlign: 'start' }}>
                                    <span className="row-header p-0 m-0" >Produce Item Details</span>
                                </div>
                            <table id="dtHorizontalExample" className="table table-striped table-bordered table-sm" style={{
                                width: "100%"
                            }}>
                                <thead>
                                    <tr>
                                        <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Item Code</th>
                                        <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Description</th>





                                        <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Quantity</th>
                                        <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>UOM</th>
                                        <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Other Product</th>
                                      


                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>1</th>
                                        <td></td>




                                        <td></td>
                                        <td></td>


                                            <td><BOMModals isBOMAlt={false } isBOMProcess={true } isBOMRouting={ false} /></td>
                                      
                                    </tr>
                                    <tr>
                                        <th>2</th>
                                        <td></td>



                                        <td></td>
                                        <td></td>


                                            <td><BOMModals isBOMAlt={false} isBOMProcess={true} isBOMRouting={false} /></td>
                                      
                                    </tr>
                                    <tr>
                                        <th>3</th>
                                        <td></td>




                                        <td></td>
                                        <td></td>


                                            <td><BOMModals isBOMAlt={false} isBOMProcess={true} isBOMRouting={false} /></td>
                                       
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
             </div>
              
                    <hr style={{ margin: '0', padding: '0' }} />
              
                    <button type="button" style={{ border: '2px solid #42ba96', letterSpacing: 3 }} className="btn btn-success p-2 m-3 col-1">Save</button>
                    <><NavLink to="/bom-routing-configuration" ><button type="button" style={{ border: '2px solid red', letterSpacing: 3 }} className="btn btn-danger p-2 m-3 col-1">Quit</button></NavLink></>
                  
               
          </>
        )
    }
}