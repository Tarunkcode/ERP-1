import * as React from 'react';

import '../masterStyle.css';


class AddItemMaster extends React.Component {
    render() {
        return (
            <>
                <div className="main card firstDiv">

                    <div className="text-center card-title col-12" style={{ textAlign: 'start', backgroundColor: '#8389d4' }}>
                        <span className="row-header p-0 m-0" >Item Master</span>
                    </div>
                    <div className="card-body row col-sm-12 m-0 p-0" >
                        <form className="row-content form col-sm-12 pt-0">
                            <fieldset className="form-group border p-0" >
                                <legend className="px-2" data-toggle="collapse" data-target="#genDetails" aria-expanded="true" aria-controls="genDetails" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Item Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>

                                <div className="collapse show" id="genDetails">
                                    <span className="d-flex section2 col-sm-10">
                                        <>
                                            <label htmlFor="series" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Series</label>
                                            <input type="text" name="series" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="code" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Code</label>
                                            <input type="text" name="code" className="form-control inp" />
                                        </> <>
                                            <label htmlFor="name" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Name</label>
                                            <input type="text" name="name" className="form-control inp" />
                                        </>
                                    </span>

                                    <span className="d-flex section2 col-sm-10">
                                        <>
                                            <label htmlFor="printName" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Print Name</label>
                                            <input type="text" name="printName" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="sizeDependent" style={{ fontSize: '0.8em', marginLeft:'2%' }} className="form-label labl labl2">Size Dep.</label>
                                            <input type="text" name="sizeDependent" className="form-control inp" />
                                        </>
                                    </span>

                                    <span className="d-flex section2 col-sm-10">
                                        <>
                                            <label htmlFor="group" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Group</label>
                                            <input type="text" name="group" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="type" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Type</label>
                                            <input type="text" name="type" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="category" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Category</label>
                                            <input type="text" name="category" className="form-control inp" />
                                        </>
                                    </span>

                                    <span className="d-flex section2 col-sm-10">
                                        <>
                                            <label htmlFor="brand" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Brand</label>
                                            <input type="text" name="brand" className="form-control inp" />
                                        </>
                                        
                                        <>
                                            <label htmlFor="nature" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Nature</label>
                                  {/*          <input type="text" name="uom" className="form-control inp" list="nature" />*/}
                                            <select id="nature" className="form-control inp" style={{height:'25px'}}>

                                                <option value="Item">Item</option>
                                                <option value="Service">Service</option>
                                                <option value="Asset">Asset</option>

                                            </select>
                                        </>
                                        <>
                                            <label htmlFor="matcenter" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Matcenter</label>
                                            <input type="text" name="matcenter" className="form-control inp" />
                                        </>
                                    </span>

                                    <span className="d-flex section2 col-sm-10">
                                        <>
                                            <label htmlFor="uom" style={{ fontSize: '0.8em' }} className="form-label labl labl2">UOM</label>
                                            <input type="text" name="uom" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="altUom" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Alt. UOM</label>
                                            <input type="text" name="altUom" className="form-control inp" />
                                        </>

                                        <>
                                            <label htmlFor="convFact" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Conv.Fact</label>
                                            <input type="text" name="convFact" className="form-control inp" />
                                        </>
                                    </span>

                                    <span className="d-flex section2 col-sm-10">
                                        <>
                                            <label htmlFor="convType" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Conv. Type</label>
                                            <input type="text" name="convType" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="netWt" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Net WT</label>
                                            <input type="text" name="netWt" className="form-control inp" />
                                        </>

                                        <>
                                            <label htmlFor="grossWt" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Gross WT</label>
                                            <input type="text" name="grossWt" className="form-control inp" />
                                        </>
                                    </span>
                                    <span className="d-flex section2 col-sm-10">
                                        <>
                                            <label htmlFor="isParameterize" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Is Parameterize</label>
                                         {/*   <input type="text" name="isParameterize" className="form-control inp" list="isParameterizedList" />*/}
                                            <select id="isParameterize" className="form-control inp" style={{ height: '25px' }}>

                                                <option value="Y">Y</option>
                                                <option value="N">N</option>
                                                

                                            </select>
                                        </>
                                        <>
                                            <label htmlFor="valType" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Val. Type</label>
                                            <input type="text" name="valType" className="form-control inp" />
                                        </>

                                        <>
                                            <label htmlFor="opnStock" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Opn. Stock</label>
                                            <input type="text" name="opnStock" className="form-control inp" />
                                        </>
                                    </span>
                                    <span className="d-flex section2 col-sm-10">
                                        <>
                                            <label htmlFor="hsn" style={{ fontSize: '0.8em' }} className="form-label labl labl2">HSN/SA No.</label>
                                            <input type="text" name="hsn" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="bil" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Bil Sun</label>
                                            
                                          {/*  <input type="text" name="bil" className="form-control inp" list="bilList" />*/}
                                            <select id="bil" className="form-control inp" style={{ height: '25px' }}>

                                                <option value="Y">Y</option>
                                                <option value="N">N</option>


                                            </select>
                                        </>

                                        <>
                                            <label htmlFor="gst" style={{ fontSize: '0.8em' }} className="form-label labl labl2">GST Category</label>
                                            <input type="text" name="gst" className="form-control inp" />
                                        </>
                                    </span>


                                </div>
                            </fieldset>
                        </form>

                        <form className="form col-sm-12 row-content card-body pt-0 pb-0">
                            <fieldset className="form-group border p-0">
                                <legend className="px-2" data-toggle="collapse" data-target="#personalDet" aria-expanded="false" aria-controls="personalDet" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Other Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0    96v320c0  35.34 28.65 64 64  64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2    230.7 352 224   352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120   192h208c9.531  0 18.19 5.656   21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>
                                <div className="collapse" id="personalDet">

                                    <span className="d-flex section2 col-sm-10">
                                        <>
                                            <label htmlFor="contPerson" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Tax Applicable</label>
                                            <input type="text" name="tax" className="form-control inp" />
                                        </>

                                        <>
                                            <label htmlFor="TelNo" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Chapter HD</label>
                                            <input type="text" name="chapter" className="form-control inp" />
                                        </>
                                          <>
                                            <label htmlFor="TelNo" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Min Stock Level</label>
                                            <input type="text" name="minStock" className="form-control inp" />
                                        </>


                                    </span>

                                    <span className="d-flex section2 col-sm-10">
                                        <>
                                            <label htmlFor="desg" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Is blocked</label>
                                            {/*<input type="text" name="isBlocked" className="form-control inp" list="isBlockedList" />*/}
                                            <select id="isBlocked" className="form-control inp" style={{ height: '25px' }}>

                                                <option value="Y">Y</option>
                                                <option value="N">N</option>


                                            </select>
                                        </>

                                        <>
                                            <label htmlFor="mob" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Max Stock Level</label>
                                            <input type="text" name="mob" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="mob" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Re-Order point</label>
                                            <input type="text" name="reOrder" className="form-control inp" />
                                        </>
                                    </span>

                                    <span className="d-flex section2 col-sm-10">
                                        <>
                                            <label htmlFor="cheifExe" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Batch Managed</label>
                                            <input type="text" name="batchManaged" className="form-control inp" />
                                        </>

                                        <>
                                            <label htmlFor="fax" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Weight UOM</label>
                                            <input type="text" name="weightUom" className="form-control inp" />
                                        </>

                                        <>
                                            <label htmlFor="fax" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Min. Supply Qty.</label>
                                            <input type="text" name="minSupply" className="form-control inp" />
                                        </>
                                    </span>

                                    <span className="d-flex section2 col-sm-10">
                                        <>
                                            <label htmlFor="cheifExeTelNo" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Alternate Item</label>
                                            <input type="text" name="altItem" className="form-control inp" />
                                        </>

                                        <>
                                            <label htmlFor="email" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Other Description</label>
                                            <input type="text" name="otherDesc" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="email" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Item Used:</label>
                                            <input type="text" name="itmused" className="form-control inp" />
                                        </>
                                    </span>
                                    <span className="d-flex section2 col-sm-10">
                                        <>
                                            <label htmlFor="mulCurr" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Cost Sheet Group</label>
                                            <input type="text" name="costSheet" className="form-control inp" />
                                         
                                        </>
                                        <>
                                            <label htmlFor="email" style={{ fontSize: '0.8em', marginLeft:'2%' }} className="form-label labl labl2">Tax Category</label>
                                            <input type="text" name="taxCat" className="form-control inp" />
                                        </>
                                    </span>

                                    <span className="d-flex section2 col-sm-10">
                                        <>
                                            <label htmlFor="mulCurr" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Cons. Stk Levels</label>
                                            <input type="text" name="stkLevels" className="form-control inp" />
                                           
                                        </>
                                        <>
                                            <label htmlFor="email" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Quotation Rec.</label>
                                            <input type="text" name="quotationRec" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="email" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Clearance</label>
                                            <input type="text" name="clearance" className="form-control inp" />
                                        </>
                                    </span>

                                    <span className="d-flex section2 col-sm-10">
                                        <>
                                            <label htmlFor="mulCurr" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Sub Category</label>
                                            <input type="text" name="subCat" className="form-control inp" />
                                            <div className="col-1"></div>
                                        </>
                                      
                                    </span>
                                </div>
                            </fieldset>
                        </form>
                        {/*<div className="card-footer row row-content col-12">*/}
                        {/*    <span className="d-flex m-0 p-0">*/}
                        {/*        <>*/}
                        {/*            <label htmlFor="zone" style={{ fontSize: '0.8em' }} className="form-label labl m-0 ml-3">Add. Options</label>*/}
                        {/*            <input type="text" name="zone" className="form-control inp" />*/}
                        {/*        </>*/}
                        {/*    </span>*/}
                        {/*</div>*/}

               

                        <hr style={{ margin: '0', padding: '0' }} />
                       

                        <div className="detailsComponent m-0 p-0  col-12">

                            <div className="detCard card text-center mb-3" style={{ border: '1px solid black', borderRadius: '20px', backgroundColor: '#8389d4' }}>
                                <span className=" m-0" style={{ fontSize: '1rem', color:'#fff' }}>Pricing Details</span>
                                <div className="col-12 m-0 p-0 text-left">

                                    <span className="d-flex section2 col-sm-12">
                                        <>
                                            <label htmlFor="salePrice" style={{ fontSize: '0.8em', color: '#fff' }} className="form-label m-0 col-4 pr-0">Sale.Price</label>
                                            <input type="text" name="salePrice" className="form-control m-0 mb-3 p-0" />

                                        </>
                                        <>
                                            <label htmlFor="per" style={{ fontSize: '0.8em', color: '#fff' }} className="form-label m-0 col-3">Per</label>
                                            <input type="text" name="per" className="form-control p-0" />
                                        </>
                                     
                                    </span>
                                     <span className="d-flex section2 col-sm-12">
                                        <>
                                            <label htmlFor="purPrice" style={{ fontSize: '0.8em', color: '#fff' }} className="form-label m-0 col-4 pr-0">Pur.Price</label>
                                            <input type="text" name="purPrice" className="form-control m-0 mb-3 p-0" />
                                        </>
                                        <>
                                            <label htmlFor="per" style={{ fontSize: '0.8em', color: '#fff' }} className="form-label m-0 col-3">Per</label>
                                            <input type="text" name="per" className="form-control p-0" />
                                        </>
                                     
                                    </span>
                                    <span className="d-flex section2 col-sm-12">
                                        <>
                                            <label htmlFor="mrp" style={{ fontSize: '0.8em', color: '#fff' }} className="form-label m-0 col-4 pr-0">MRP.</label>
                                            <input type="text" name="mrp" className="form-control m-0 mb-3 p-0" />
                                        </>
                                        <>
                                            <label htmlFor="per" style={{ fontSize: '0.8em', color: '#fff' }} className="form-label m-0 col-3">Per</label>
                                            <input type="text" name="per" className="form-control p-0" />
                                        </>
                                     
                                    </span>
                                   
                                   
                                    <span className="d-flex section2 col-sm-10 mt-2 mb-2">
                                        <>
                                            <label htmlFor="selfValuation" style={{ fontSize: '0.8em', color: '#fff' }} className="form-label m-0 col-5 pr-0">Self Valuation</label>
                                            <input type="text" name="selfValuation" className="form-control m-0 mb-4" />
                                        </>
                                  </span>
                                      
                                </div>
                            </div>


                          
                                     
                            <div className="detCard card text-center mb-3" style={{ border: '1px solid black', borderRadius: '20px', backgroundColor: '#8389d4' }}>
                                <span className=" m-0" style={{ fontSize: '1rem', color: '#fff' }}>Item QC Details</span>
                                <div className="col-12 m-0 card-body text-left">

                                    <div className="d-flex section2 col-sm-12 m-0">
                                        <span className="mr-3">
                                            <label htmlFor="qcApp" style={{ fontSize: '0.8em', width:'100%', color:'#fff' }} className="form-label labl labl2">Qc Applicable</label>
                                            {/*<input type="text" name="qcApp" style={{width:'100%', margin:'0'}} className="form-control" list="isBlockedList" />*/}
                                            <select id="qcApp" style={{ width: '100%', margin: '0' }} className="form-control">

                                                <option value="Y">Y</option>
                                                <option value="N">N</option>


                                            </select>
                                        </span>

                                        <span className="ml-3">
                                            <label htmlFor="mob" style={{ fontSize: '0.8em', width:'100%', color:'#fff' }} className="form-label labl labl2">Max Stock Level</label>
                                            <input type="text" name="mob" style={{ margin:'0', width: '100%' }}  className="form-control" />
                                        </span>
                                      
                                    </div>

                                   
                                    <>
                                        <label htmlFor="email" style={{ fontSize: '0.8em', color: '#fff' }} className="form-label m-0">Type</label>
                                        <input type="text" name="quotationRec" className="form-control m-0 mb-3 col-12" />
                                    </>
                                   
                                    
                                </div>
                            </div>
                           
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
}

export default AddItemMaster;