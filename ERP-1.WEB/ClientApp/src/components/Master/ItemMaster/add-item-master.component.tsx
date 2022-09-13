import * as React from 'react';
import Test from '../../test';

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
                                            <label htmlFor="name" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Name</label>
                                            <input type="text" name="name" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="printName" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Print Name</label>
                                            <input type="text" name="printName" className="form-control inp" />
                                        </>
                                    </span>

                                    <span className="d-flex section2 col-sm-10">
                                        <>
                                            <label htmlFor="code" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Code</label>
                                            <input type="text" name="code" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="sizeDependent" style={{ fontSize: '0.8em', marginLeft:'2%' }} className="form-label labl labl2">Size Dependent</label>
                                            <input type="text" name="sizeDependent" className="form-control inp" />
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
                                            <label htmlFor="valType" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Val. Type</label>
                                            <input type="text" name="valType" className="form-control inp" />
                                        </>

                                        <>
                                            <label htmlFor="opnStock" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Opn. Stock</label>
                                            <input type="text" name="opnStock" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="gst" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Tax Category</label>
                                            <input type="text" name="gst" className="form-control inp" />
                                        </>
                                    </span>
                                    <span className="d-flex section2 col-sm-10">
                                        <>
                                            <label htmlFor="hsn" style={{ fontSize: '0.8em' }} className="form-label labl labl2">HSN/SA No.</label>
                                            <input type="text" name="hsn" className="form-control inp" />
                                        </>
                                        
                                        <>
                                            <label htmlFor="gst" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Sale Acc.</label>
                                            <input type="text" name="gst" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="gst" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Pur. Acc.</label>
                                            <input type="text" name="gst" className="form-control inp" />
                                        </>
                                       
                                    </span>


                                </div>
                            </fieldset>
                        </form>

                      
                        {/*-------------------------------------*/}

                        {/*<div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">*/}
                        {/*    <div className="row row-content col-sm-12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#8389d4', margin: '10px 0 0 0', padding: '0' }}>*/}

                        {/*        <span className="card-title" style={{*/}
                        {/*            fontSize: '15px', color: 'white', fontWeight: 900, padding: '0',*/}
                        {/*            margin: '0'*/}
                        {/*        }}>Other Details</span>*/}

                        {/*    </div>*/}
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
                                  
                                    <div className="card-body" style={{ margin: '0', padding: '0', minHeight: '28vh' }}>
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
                                                <span className="d-flex flex-column section2 col-sm-12">
                                                    <div className="m-0 p-0 d-flex flex-row">
                                                        <label htmlFor="brand" style={{ fontSize: '0.8em' }} className="form-label col-4">is Parameterized</label>
                                                        <input type="checkbox" name="brand" className="col-1" />
                                                    </div>

                                                    <div className="m-0 p-0 d-flex flex-row">
                                                        <label htmlFor="brand" style={{ fontSize: '0.8em' }} className="form-label col-4">Bil Sun</label>
                                                        <input type="checkbox" name="brand" className="col-1" />
                                                    </div>
                                                      <div className="m-0 p-0 d-flex flex-row">
                                                        <label htmlFor="brand" style={{ fontSize: '0.8em' }} className="form-label col-4">QC Applicable</label>
                                                        <input type="checkbox" name="brand" className="col-1" />
                                                    </div>
                                                     <div className="m-0 p-0 d-flex flex-row">
                                                        <label htmlFor="brand" style={{ fontSize: '0.8em' }} className="form-label col-4">Quotation</label>
                                                        <input type="checkbox" name="brand" className="col-1" />
                                                    </div>
                                                     <div className="m-0 p-0 d-flex flex-row">
                                                        <label htmlFor="brand" style={{ fontSize: '0.8em' }} className="form-label col-4">is blocked</label>
                                                        <input type="checkbox" name="brand" className="col-1" />
                                                    </div>
                                                     <div className="m-0 p-0 d-flex flex-row">
                                                        <label htmlFor="brand" style={{ fontSize: '0.8em' }} className="form-label col-4">Batch Managed</label>
                                                        <input type="checkbox" name="brand" className="col-1" />
                                                    </div>

                                                </span>

                                        </form>
                                    </div>
                                </div>

                            </div>
                            </fieldset>

                        </form>
                        {/*</div>*/}

                        {/*-------------------------------------*/}
               

                        <hr style={{ margin: '0', padding: '0' }} />
                       

                        <div className="detailsComponent m-0 p-0  col-12">

                          

                          
                                     
                      
                        </div>

                    </div>
                    <hr style={{ margin: '0', padding: '0' }} />
                </div>
                <div className="btn-group col-12 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0">Save</button>
                    <Test isSeriesMaster={false} isOpeningStock={true} />
                    <button type="button" style={{ border: '2px solid red', letterSpacing: 3 }} className="btn btn-danger pl-0 pr-0">Quit</button>
                </div>
            </>
            
            );
    }
}

export default AddItemMaster;