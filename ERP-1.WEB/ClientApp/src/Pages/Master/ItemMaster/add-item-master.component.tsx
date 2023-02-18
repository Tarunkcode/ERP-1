import * as React from 'react';
import { InputList, MasterInput } from '../../../components/custom-input/custom-input.component';
import CustomeSwitch from '../../../components/CustomSwitch/custom-switch.component';
import { StockMasterModal } from '../../../components/Modals/master.modals';

import '../masterStyle.css';


function AddItemMaster({ handleChangeField, HandleIpSelect, handleSave$Submit, title, accountType, default: any,
    series,
    group,
    type,
    category,
    brand,
    matCanter,
    uom,
    gstCat,
    subCat,...props}: any) {

        return (
            <>
                <div className="main card firstDiv">

                    <div className="text-center card-title col-12" style={{ textAlign: 'start' }}>
                        <span className="row-header p-0 m-0" >{title }</span>
                    </div>
                    <div className="card-body row col-sm-12 m-0 p-0" >
                        <form className="row-content form col-sm-12 pt-0">
                            <fieldset className="form-group border p-0" >

                                <legend className="px-2" data-toggle="collapse" data-target="#genDetails" aria-expanded="true" aria-controls="genDetails" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Item Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>

                                <div className="collapse show" id="genDetails">
                                    <span className="d-flex flex-row section2 col-sm-12">
                           
                                        <MasterInput name="series" label="Series" ipTitle="Enter Series" ipType="text" handleChange={handleChangeField} classCategory="form-control inp int" />
                                       
                                        <MasterInput name="name" label="Name" ipTitle="Enter Name" ipType="text" handleChange={handleChangeField} classCategory="form-control inp " />
                                      
                                        <MasterInput name="printname" label="Print Name" ipTitle="Enter Print Name" ipType="text" handleChange={handleChangeField} classCategory="form-control inp" />
                                            
                                  
                                    </span>

                                    <span className="d-flex flex-row section2 col-sm-12">
                                        <MasterInput name="codestr" label="Code" ipTitle="Enter Code" ipType="text" handleChange={handleChangeField} classCategory="form-control inp str" />
                           
                                        <MasterInput name="sizedepyn" label="Size Dependent" ipTitle="Enter Size Dependent" ipType="text" handleChange={handleChangeField} classCategory="form-control inp int" />

                                        <MasterInput name="itemmatcenter" label="MatCenter" ipTitle="Enter MatCenter" ipType="text" handleChange={handleChangeField} classCategory="form-control inp int" />

                                        {/*<InputList label="MatCenter" name=" itemmatcenter" id="itemmatcenter" dataArray={matCanter} placeholder="" s="20%" classCategory="form-control inp" />*/}


                                    </span>

                                

                                    <span className="d-flex section2 col-sm-12">
                                         <MasterInput name="itemuom" label="UOM" ipTitle="Enter UOM" ipType="text" handleChange={handleChangeField} classCategory="form-control inp int" />

                                       {/* <InputList label="Alt UOM" name="itemcategory" id="itemcategory" dataArray={category} placeholder="Select Category" s="80%" classCategory="form-control col-12 inp m-3" />*/}

                                        <MasterInput name="itemaltuom" label="Alt UOM" ipTitle="Enter Alt UOM" ipType="text" handleChange={handleChangeField} classCategory="form-control inp int" />

                                    {/*    <InputList label="UOM" name="itemcategory" id="itemcategory" dataArray={category} placeholder="Select Category" s="80%" classCategory="form-control col-12 inp m-3" />*/}

                                        <MasterInput name="itemconvfact" label="Conv Fact" ipTitle="Enter Conv Fact" ipType="text" handleChange={handleChangeField} classCategory="form-control inp decimal" />


                                     

                                    </span>

                                    <span className="d-flex section2 col-sm-12">
                                        <MasterInput name="convtype" label="Conv Type" ipTitle="Enter Conv Type" ipType="text" handleChange={handleChangeField} classCategory="form-control inp str" />
                                        <MasterInput name="itemwt" label="Net Wt." ipTitle="Enter Net Weight" ipType="text" handleChange={handleChangeField} classCategory="form-control inp double" />
                                        <MasterInput name="grosswt" label="Gross Weight" ipTitle="Enter Gross Weight" ipType="text" handleChange={handleChangeField} classCategory="form-control inp double" />
                                    </span>
                                    <span className="d-flex section2 col-sm-12">
                                        <MasterInput name="validationtype" label="Val. Type" ipTitle="Enter Val Type" ipType="text" handleChange={handleChangeField} classCategory="form-control inp int" />
                                        <MasterInput name="opening" label="Open Stock" ipTitle="Enter Open Stock" ipType="text" handleChange={handleChangeField} classCategory="form-control inp double" />
                                        <MasterInput name="gstcategory" label="GST Type" ipTitle="Select GST Type" ipType="text" handleChange={handleChangeField} classCategory="form-control inp int" />
                                    </span>
                                    <span className="d-flex section2 col-sm-12">
                                        <MasterInput name="hsnno" label="HSN/ SA No." ipTitle="Enter HSN" ipType="text" handleChange={handleChangeField} classCategory="form-control inp" />
                                        <MasterInput name="sacc" label="Sale Account" ipTitle="Enter Sale Account" ipType="text" handleChange={handleChangeField} classCategory="form-control inp" />
                                        <MasterInput name="pacc" label="Purchase Account" ipTitle="Enter Purchase Account" ipType="text" handleChange={handleChangeField} classCategory="form-control inp" />
                                       
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
                                                        <label htmlFor="saleprice" style={{ fontSize: '0.8em' }} className="form-label col-4">Sale.Price</label>
                                                        <input type="text" name="saleprice" className="form-control inp decimal" onChange={handleChangeField } />

                                                            </>
                                                            <>
                                                        <label htmlFor="saleper" style={{ fontSize: '0.8em' }} className="form-label col-2">Per</label>
                                                        <input type="text" name="saleper" className="form-control inp int" onChange={handleChangeField} />
                                                            </>

                                                        </span>
                                                        <span className="d-flex section2 col-sm-12">
                                                            <>
                                                        <label htmlFor="purprice" style={{ fontSize: '0.8em' }} className="form-label col-4">Purchase Price</label>
                                                        <input type="text" name="purprice" className="form-control inp decimal" onChange={handleChangeField} />
                                                            </>
                                                            <>
                                                        <label htmlFor="purper" style={{ fontSize: '0.8em' }} className="form-label col-2">Per</label>
                                                        <input type="text" name="purper" className="form-control inp int" onChange={handleChangeField}/>
                                                            </>

                                                        </span>
                                                        <span className="d-flex section2 col-sm-12">
                                                            <>
                                                        <label htmlFor="mrp" style={{ fontSize: '0.8em' }} className="form-label col-4">MRP.</label>
                                                        <input type="text" name="mrp" className="form-control inp double" onChange={handleChangeField} />
                                                            </>
                                                         
                                                        </span>


                                                <span className="d-flex section2 col-sm-12">
                                                            <>
                                                        <label htmlFor="selfvaluation" style={{ fontSize: '0.8em' }} className="form-label col-4">Self Valuation Price</label>
                                                        <input type="text" name="validationtype" className="form-control col-7 int" onChange={handleChangeField}/>
                                                            </>
                                                        </span>

                                                  

                                        </form>
                                    </div>
                                </div>
                                <div className="card addSalecard col-sm-4">
                                  
                                        <div className="card-body" style={{ margin: '0', padding: '0', minHeight: '36vh' }}>
                                        <form className="form">
                                                <span className="d-flex flex-column section2 col-sm-12 mt-3">
                                              
                                                    <InputList label="" name="itemgrp" id="itemgrp" dataArray={group} placeholder="Select Group" change={HandleIpSelect } s="80%" classCategory="form-control inp m-3 col-12" />
                                                    


                                                    <InputList label="" name="itemtype" id="itemtype" dataArray={type} change={HandleIpSelect} placeholder="Select Type" s="80%" classCategory="form-control inp col-12 m-3" />


                                                    <InputList label="" name="itemcategory" id="itemcategory" dataArray={category} change={HandleIpSelect} placeholder="Select Category" s="80%" classCategory="form-control col-12 inp m-3" />

                                        
                                                    <InputList label="" name="subcat" id="subcat" dataArray={subCat} change={HandleIpSelect} placeholder="Select Sub Category" s="80%" classCategory="form-control inp col-12 m-3" />

                                            </span>

                                            <span className="d-flex flex-column section2 col-sm-12">
                                            

                                                    <InputList label="" name="itembrand" id="itembrand" dataArray={brand} change={HandleIpSelect} placeholder="Select Brand" s="80%" classCategory="form-control inp col-12 m-3" />


                                                     <div className="m-0 p-0 d-flex flex-row">
                                                        <label htmlFor="clearance" style={{ fontSize: '0.8em' }} className="form-label col-4">Clearance</label>
                                                        <input type="text" name="clearance" className="form-control col-5 int" onChange={handleChangeField}/>
                                                     </div>

                                                    <div className="m-0 p-0 d-flex flex-row">
                                                    <label htmlFor="c1" style={{ fontSize: '0.8em' }} className="form-label col-4">Nature</label>
                                                   
                                                        <select id="c1" name="c1" className="form-control col-5 p-0 int" style={{ height: '25px' }} onChange={handleChangeField}>

                                                        <option value={1}>Item</option>
                                                            <option value={2}>Service</option>
                                                            <option value={3}>Asset</option>

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
                                                    <CustomeSwitch lablClass="custom-control-label col-9" label="Parameterized" id="c1" name="c1" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChangeField} />
                                                    <CustomeSwitch lablClass="custom-control-label col-9" label="Bil Sun" id="c2" name="c2" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChangeField} />
                                                    <CustomeSwitch lablClass="custom-control-label col-9" label="QC Applicable" id="c3" name="c3" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChangeField} />
                                                    <CustomeSwitch lablClass="custom-control-label col-9" label="Quotation" id="c4" name="c4" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChangeField} />
                                                    <CustomeSwitch lablClass="custom-control-label col-9" label="is blocked" id="c5" name="c5" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChangeField} />
                                                    <CustomeSwitch lablClass="custom-control-label col-9" label="Batch Managed" id="c6" name="c6" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChangeField} />
                                                  
                                    
                              
                                        
                                                 
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
                    <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0" onClick={handleSave$Submit}>Save</button>
                    <StockMasterModal />
                    <button type="button" style={{ border: '2px solid red', letterSpacing: 3 }} className="btn btn-danger pl-0 pr-0">Quit</button>
                </div>
            </>
            
            );
}


export default AddItemMaster;