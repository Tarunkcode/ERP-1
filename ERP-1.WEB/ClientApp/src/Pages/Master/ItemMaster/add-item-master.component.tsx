import * as React from 'react';
import { MasterInput } from '../../../components/custom-input/custom-input.component';
import CustomeSwitch from '../../../components/CustomSwitch/custom-switch.component';
import { StockMasterModal } from '../../../components/Modals/master.modals';

import '../masterStyle.css';


class AddItemMaster extends React.Component {
    render() {
        return (
            <>
                <div className="main card firstDiv">

                    <div className="text-center card-title col-12" style={{ textAlign: 'start' }}>
                        <span className="row-header p-0 m-0" >Item Master</span>
                    </div>
                    <div className="card-body row col-sm-12 m-0 p-0" >
                        <form className="row-content form col-sm-12 pt-0">
                            <fieldset className="form-group border p-0" >
                                <legend className="px-2" data-toggle="collapse" data-target="#genDetails" aria-expanded="true" aria-controls="genDetails" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Item Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>

                                <div className="collapse show" id="genDetails">
                                    <span className="d-flex flex-row section2 col-sm-12">
                           
                                            <MasterInput name="series" label="Series" ipTitle="Enter Series" ipType="text" handleChange={() => { }} classCategory="form-control inp" />
                                       
                                            <MasterInput name="name" label="Name" ipTitle="Enter Name" ipType="text" handleChange={() => { }} classCategory="form-control inp" />
                                      
                                            <MasterInput name="printname" label="Print Name" ipTitle="Enter Print Name" ipType="text" handleChange={() => { }} classCategory="form-control inp" />
                                            
                                  
                                    </span>

                                    <span className="d-flex flex-row section2 col-sm-12">
                                        <MasterInput name="code" label="Code" ipTitle="Enter Code" ipType="text" handleChange={() => { }} classCategory="form-control inp" />
                           
                                         <MasterInput name="sizedependent" label="Size Dependent" ipTitle="Enter Size Dependent" ipType="text" handleChange={() => { }} classCategory="form-control inp" />
                           
                                        
                                     
                                        <MasterInput name="matcenter" label="MatCenter" ipTitle="Enter MatCenter" ipType="text" handleChange={() => { }} classCategory="form-control inp" />

                                    </span>

                                

                                    <span className="d-flex section2 col-sm-12">
                                        <MasterInput name="uom" label="UOM" ipTitle="Enter UOM" ipType="text" handleChange={() => { }} classCategory="form-control inp" />
                                        <MasterInput name="altUom" label="Alt UOM" ipTitle="Enter Alt UOM" ipType="text" handleChange={() => { }} classCategory="form-control inp" />

                                        <MasterInput name="convfact" label="Conv Fact" ipTitle="Enter Conv Fact" ipType="text" handleChange={() => { }} classCategory="form-control inp" />
                                    </span>

                                    <span className="d-flex section2 col-sm-12">
                                        <MasterInput name="convtype" label="Conv Type" ipTitle="Enter Conv Type" ipType="text" handleChange={() => { }} classCategory="form-control inp" />
                                        <MasterInput name="netwt" label="Net Wt." ipTitle="Enter Net Weight" ipType="text" handleChange={() => { }} classCategory="form-control inp" />
                                        <MasterInput name="grossWt" label="Gross Weight" ipTitle="Enter Gross Weight" ipType="text" handleChange={() => { }} classCategory="form-control inp" />
                                    </span>
                                    <span className="d-flex section2 col-sm-12">
                                        <MasterInput name="valtype" label="Val. Type" ipTitle="Enter Val Type" ipType="text" handleChange={() => { }} classCategory="form-control inp" />
                                        <MasterInput name="opnstock" label="Open Stock" ipTitle="Enter Open Stock" ipType="text" handleChange={() => { }} classCategory="form-control inp" />
                                        <MasterInput name="gst" label="GST" ipTitle="Enter GST" ipType="text" handleChange={() => { }} classCategory="form-control inp" />
                                    </span>
                                    <span className="d-flex section2 col-sm-12">
                                        <MasterInput name="hsn" label="HSN/ SA No." ipTitle="Enter HSN" ipType="text" handleChange={() => { }} classCategory="form-control inp" />
                                        <MasterInput name="saleacc" label="Sale Account" ipTitle="Enter Sale Account" ipType="text" handleChange={() => { }} classCategory="form-control inp" />
                                        <MasterInput name="puracc" label="Purchase Account" ipTitle="Enter Purchase Account" ipType="text" handleChange={() => { }} classCategory="form-control inp" />
                                       
                                    </span>


                                </div>
                            </fieldset>
                        </form>

                        <form className="form col-sm-12 row-content card-body pt-0 pb-0">
                            <fieldset className="form-group border p-0">
                                <legend className="px-2" data-toggle="collapse" data-target="#otherDetails" aria-expanded="false" aria-controls="otherDetails" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Other Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0    96v320c0  35.34 28.65 64 64  64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2    230.7 352 224   352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120   192h208c9.531  0 18.19 5.656   21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>
                            <div id="otherDetails" className="collapse row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                                <div className="card addSalecard col-sm-4">
                                  
                                    <div className="card-body" style={{ margin: '0', padding: '0', minHeight: '36vh' }}>
                                        <form className="form">

                                     
                                                        <span className="d-flex section2 col-sm-12 mt-3">
                                                            <>
                                                                <label htmlFor="salePrice" style={{ fontSize: '0.8em' }} className="form-label col-4">Sale.Price</label>
                                                                <input type="text" name="salePrice" className="form-control inp" />

                                                            </>
                                                            <>
                                                        <label htmlFor="per" style={{ fontSize: '0.8em' }} className="form-label col-2">Per</label>
                                                                <input type="text" name="per" className="form-control inp" />
                                                            </>

                                                        </span>
                                                        <span className="d-flex section2 col-sm-12">
                                                            <>
                                                        <label htmlFor="purPrice" style={{ fontSize: '0.8em' }} className="form-label col-4">Purchase Price</label>
                                                                <input type="text" name="purPrice" className="form-control inp" />
                                                            </>
                                                            <>
                                                        <label htmlFor="per" style={{ fontSize: '0.8em' }} className="form-label col-2">Per</label>
                                                                <input type="text" name="per" className="form-control inp" />
                                                            </>

                                                        </span>
                                                        <span className="d-flex section2 col-sm-12">
                                                            <>
                                                        <label htmlFor="mrp" style={{ fontSize: '0.8em' }} className="form-label col-4">MRP.</label>
                                                                <input type="text" name="mrp" className="form-control inp" />
                                                            </>
                                                            <>
                                                                <label htmlFor="per" style={{ fontSize: '0.8em' }} className="form-label col-2">Per</label>
                                                                <input type="text" name="per" className="form-control inp" />
                                                            </>

                                                        </span>


                                                <span className="d-flex section2 col-sm-12">
                                                            <>
                                                        <label htmlFor="selfValuation" style={{ fontSize: '0.8em' }} className="form-label col-4">Self Valuation Price</label>
                                                                <input type="text" name="selfValuation" className="form-control col-7" />
                                                            </>
                                                        </span>

                                                  

                                        </form>
                                    </div>
                                </div>
                                <div className="card addSalecard col-sm-4">
                                  
                                        <div className="card-body" style={{ margin: '0', padding: '0', minHeight: '36vh' }}>
                                        <form className="form">
                                                <span className="d-flex flex-column section2 col-sm-12 mt-3">
                                                    <div className="m-0 p-0 d-flex flex-row">
                                                    <label htmlFor="group" style={{ fontSize: '0.8em' }} className="form-label col-4">Group</label>
                                                    <input type="text" name="group" className="form-control col-5" />
                                                </div>
                                                    <div className="m-0 p-0 d-flex flex-row">
                                                    <label htmlFor="type" style={{ fontSize: '0.8em' }} className="form-label col-4">Type</label>
                                                    <input type="text" name="type" className="form-control col-5" />
                                                </div>
                                                    <div className="m-0 p-0 d-flex flex-row">
                                                    <label htmlFor="category" style={{ fontSize: '0.8em' }} className="form-label col-4">Category</label>
                                                    <input type="text" name="category" className="form-control col-5" />
                                                    </div>

                                                    <div className="m-0 p-0 d-flex flex-row">
                                                    <label htmlFor="category" style={{ fontSize: '0.8em' }} className="form-label col-4">Sub Category</label>
                                                    <input type="text" name="category" className="form-control col-5" />
                                                </div>
                                            </span>

                                            <span className="d-flex flex-column section2 col-sm-12">
                                                    <div className="m-0 p-0 d-flex flex-row">
                                                    <label htmlFor="brand" style={{ fontSize: '0.8em' }} className="form-label col-4">Brand</label>
                                                    <input type="text" name="brand" className="form-control col-5" />
                                                </div>
                                                     <div className="m-0 p-0 d-flex flex-row">
                                                    <label htmlFor="brand" style={{ fontSize: '0.8em' }} className="form-label col-4">Clearance</label>
                                                    <input type="text" name="brand" className="form-control col-5" />
                                                </div>

                                                    <div className="m-0 p-0 d-flex flex-row">
                                                    <label htmlFor="nature" style={{ fontSize: '0.8em' }} className="form-label col-4">Nature</label>
                                                    {/*          <input type="text" name="uom" className="form-control inp" list="nature" />*/}
                                                    <select id="nature" className="form-control col-5 p-0" style={{ height: '25px' }}>

                                                        <option value="Item">Item</option>
                                                        <option value="Service">Service</option>
                                                        <option value="Asset">Asset</option>

                                                    </select>
                                                </div>

                                            </span>

                                        </form>
                                    </div>
                                </div>

                                <div className="card addSalecard col-sm-4">
                                    <div className="card-body" style={{ margin: '0', padding: '0', minHeight: '36vh' }}>
                                        <form className="form">
                                                <span className="d-flex flex-column section2 col-sm-8">
                                                    <CustomeSwitch lablClass="custom-control-label col-9" label="Parameterized" id="c1" name="c1" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={() => { }} />
                                                    <CustomeSwitch lablClass="custom-control-label col-9" label="Bil Sun" id="c2" name="c2" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={() => { }} />
                                                    <CustomeSwitch lablClass="custom-control-label col-9" label="QC Applicable" id="c3" name="c3" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={() => { }} />
                                                    <CustomeSwitch lablClass="custom-control-label col-9" label="Quotation" id="c4" name="c4" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={() => { }} />
                                                    <CustomeSwitch lablClass="custom-control-label col-9" label="is blocked" id="c5" name="c5" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={() => { }} />
                                                   <CustomeSwitch lablClass="custom-control-label col-9" label="Batch Managed" id="c6" name="c6" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={() => { }} />
                                                  
                                    
                              
                                        
                                                 
                                                </span>

                                        </form>
                                    </div>
                                </div>

                            </div>
                            </fieldset>

                        </form>
               
               

                        <hr style={{ margin: '0', padding: '0' }} />
                       

                        <div className="detailsComponent m-0 p-0  col-12">

                          

                          
                                     
                      
                        </div>

                    </div>
                    <hr style={{ margin: '0', padding: '0' }} />
                </div>
                <div className="btn-group col-12 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0">Save</button>
                    <StockMasterModal />
                    <button type="button" style={{ border: '2px solid red', letterSpacing: 3 }} className="btn btn-danger pl-0 pr-0">Quit</button>
                </div>
            </>
            
            );
    }
}

export default AddItemMaster;