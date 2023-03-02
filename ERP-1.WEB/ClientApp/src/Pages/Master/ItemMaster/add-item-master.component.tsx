import * as React from 'react';
import { InputList, MasterInput2 } from '../../../components/custom-input/custom-input.component';
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
    subCat, ...props }: any) {

    return (
        <>
            <div className="main card firstDiv">

                <div className="text-center card-title col-12" style={{ textAlign: 'start' }}>
                    <span className="row-header p-0 m-0" >{title}</span>
                </div>
                <div className="card-body row col-sm-12 m-0 p-0" >
                    <form className="row-content form col-sm-12 pt-0">
                        <fieldset className="form-group border p-0" >

                            <legend className="px-2" data-toggle="collapse" data-target="#genDetails" aria-expanded="true" aria-controls="genDetails" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Item Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>

                            <div className="collapse show" id="genDetails">
                                <span className="d-flex justify-content-space-evenly flex-row section2 col-sm-12">

                                    <MasterInput2 name="series" label="Series" ipTitle="Enter Series" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp int" />
                                    <span className="col-1 m-0"></span>


                                    <MasterInput2 name="codestr" label="Code" ipTitle="Enter Code" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp str" />

                                </span>

                                <span className="d-flex flex-row section2 col-sm-12">
                                    <MasterInput2 name="name" label="Name" ipTitle="Enter Name" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp " />
                                    <span className="col-1 m-0"></span>

                                    <MasterInput2 name="printname" label="Print Name" ipTitle="Enter Print Name" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp" />
                                    {/*<MasterInput2 name="sizedepyn" label="Size Dependent" ipTitle="Enter Size Dependent" ipType="text" handleChange={handleChangeField} classCategory="form-control inp int" />*/}

                                    {/**/}

                                    {/*<InputList label="MatCenter" name=" itemmatcenter" id="itemmatcenter" dataArray={matCanter} placeholder="" s="20%" classCategory="form-control inp" />*/}


                                </span>



                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="group" label="Group" ipTitle="Enter group" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp " />
                                    <span className="col-1 m-0"></span>

                                    <MasterInput2 name="type" label="Type" ipTitle="Enter type" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp" />


                                    {/* <InputList label="Alt UOM" name="itemcategory" id="itemcategory" dataArray={category} placeholder="Select Category" s="80%" classCategory="form-control col-12 inp m-3" />*/}

                                    {/*    <InputList label="UOM" name="itemcategory" id="itemcategory" dataArray={category} placeholder="Select Category" s="80%" classCategory="form-control col-12 inp m-3" />*/}

                                </span>

                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="category" label="Category" ipTitle="Enter category" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="subcategory" label="Sub-Category" ipTitle="Enter sub-category" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp" />
                                </span>
                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="itembrand" label="Brand" ipTitle="Enter Brand" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="otherDesc" label="Other Desc." ipTitle="Enter sub-category" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp" />
                                    {/*<InputList label="Brand" name="itembrand" id="itembrand" dataArray={brand} change={HandleIpSelect} placeholder="Select Brand" s="80%" classCategory="form-control inp col-12 m-3" />*/}
                                    {/*<MasterInput2 name="opening" label="Open Stock" ipTitle="Enter Open Stock" ipType="text" handleChange={handleChangeField} classCategory="form-control inp double" />*/}
                                </span>
                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="nature" label="Nature" ipTitle="Enter Nature" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="itemuom" label="UOM" ipTitle="Enter UOM" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp" />

                                    {/*<MasterInput2 name="sacc" label="Sale Account" ipTitle="Enter Sale Account" ipType="text" handleChange={handleChangeField} classCategory="form-control inp" />*/}
                                    {/*<MasterInput2 name="pacc" label="Purchase Account" ipTitle="Enter Purchase Account" ipType="text" handleChange={handleChangeField} classCategory="form-control inp" />*/}

                                </span>
                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="itemaltuom" label="Alt. UOM" ipTitle="Enter Alt UOM" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4  inp int" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="itemmatcenter" label="MatCenter" ipTitle="Enter MatCenter" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp int" />

                                </span>
                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="itemconvfact" label="Conv. Fact" ipTitle="Enter Conv Fact" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp decimal" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="sizedependent" label="Size Dependent" ipTitle="Enter " ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp int" />
                                    {/*<CustomeSwitch lablClass="custom-control-label col-4" label="Coupon" id="c7" name="c7" classCat="form-control custom-control-input col-4 subMaster switch" handleChange={handleChangeField} />*/}
                                </span>
                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="convtype" label="Conv. Type" ipTitle="Enter Conv Type" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp str" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="evaltype" label="Eval. Type" ipTitle="Enter Eval. Type" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp int" />
                                </span>
                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="itemwt" label="Net Wt." ipTitle="Enter Net Weight" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp double" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="grosswt" label="Gross Weight" ipTitle="Enter Gross Weight" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp double" />
                                </span>

                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="valtype" label="Val. Type" ipTitle="Enter Val. Type" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp double" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="hsnno" label="HSN/ SA No." ipTitle="Enter HSN" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp" />
                                </span>
                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="gstcategory" label="GST Type" ipTitle="Select GST Type" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp int" />
                                    <span className="col-1 m-0"></span>

                                </span>

                            </div>
                        </fieldset>
                    </form>

                    <form className="form col-sm-12 row-content card-body pt-0 pb-0">
                        <fieldset className="form-group border p-0">
                            <legend className="px-2" data-toggle="collapse" data-target="#otherDetails" aria-expanded="false" aria-controls="otherDetails" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Other Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0    96v320c0  35.34 28.65 64 64  64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2    230.7 352 224   352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120   192h208c9.531  0 18.19 5.656   21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>
                            <div id="otherDetails" className="collapse row row-content col-sm-12 addSaleForm container container-fluid container-lg">

                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="saleprice" label="Sale Price" ipTitle="Enter Sale.Price" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp double" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="purprice" label="Purchase Price" ipTitle="Enter Purchase Price" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp" />
                                </span>
                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="saleacc" label="Sale Account" ipTitle="Enter Sale.Price" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp double" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="purchaseacc" label="Purc. Account" ipTitle="Enter Purchase Price" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp" />

                                </span>

                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="mrp" label="MRP" ipTitle="Enter MRP" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp double" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="mfgcost" label="MFG. Cost" ipTitle="Enter MFG. Cost" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp" />

                                </span>

                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 name="minstock" label="Min. Stock Level" ipTitle="Enter Min. Stock Level" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>

                                    <MasterInput2 name="maxstock" label="Max. Stock Level" ipTitle="Enter Max. Stock Level" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp double" />
                                </span>

                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="minsupply" label="Min. Supply Qty." ipTitle="Enter Min. Supply Qty." ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="reorderpoint" label="Reorder Point" ipTitle="Enter Reorder Point" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp" />

                                </span>
                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="alternateitem" label="Alternate Item" ipTitle="Enter Alternate Item" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp double" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="clerance" label="Clerance" ipTitle="Enter Clerance" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp" />

                                </span>
                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="itemused" label="Item Used" ipTitle="Enter Item Used" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp double" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="itemlife" label="Item Life(month)" ipTitle="Enter Item Life" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp" />

                                </span>

                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="consumestock" label="Con. Stock Level" ipTitle="Enter Consume Stock Level" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp double" />

                                </span>

                                <div className="card addSalecard col-sm-12">
                                    <div className="card-body" style={{ margin: '0', padding: '0', minHeight: '36vh' }}>
                                        <form className="form col-sm-12 row-content card-body pt-0 pb-0 px-2">
                                            <span className="d-flex flex-column section2 col-sm-12" style={{ marginLeft: '36px' }}>
                                                <CustomeSwitch lablClass="custom-control-label col-9" label="Is Parameterized" id="c1" name="c1" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChangeField} />
                                                <CustomeSwitch lablClass="custom-control-label col-9" label="Bil Sun" id="c2" name="c2" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChangeField} />
                                                <CustomeSwitch lablClass="custom-control-label col-9" label="QC Applicable" id="c3" name="c3" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChangeField} />
                                                <CustomeSwitch lablClass="custom-control-label col-9" label="Quotation" id="c4" name="c4" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChangeField} />
                                                <CustomeSwitch lablClass="custom-control-label col-9" label="is blocked" id="c5" name="c5" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChangeField} />
                                                <CustomeSwitch lablClass="custom-control-label col-9" label="Batch Managed" id="c6" name="c6" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChangeField} />
                                                <CustomeSwitch lablClass="custom-control-label col-9" label="Coupon" id="c7" name="c7" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChangeField} />
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