import * as React from 'react';
import DatalistInput from 'react-datalist-input';
import { CustomSelect, InputList, MasterInput2 } from '../../../components/custom-input/custom-input.component';
import AutoComp from '../../../components/custom-input/droplist/droplist.component';
import CustomeSwitch from '../../../components/CustomSwitch/custom-switch.component';
import { StockMasterModal } from '../../../components/Modals/master.modals';

import '../masterStyle.css';


function AddItemMaster({ handleChangeField, handleSave$Submit, title, defItemDetails, accountType,

    collectSelectedItem,
    gettingVirtualCode,
    series,
    group,
    type,
    category,
    brand,
    matCanter,
    uom,
    gstCat,
    clearance,
    subCat, ...props }: any) {
    const nature = [{ value: 1, label: 'Item' }, { value: 2, label: 'Service' }, { value: 3, label: 'Asset' }]
    const valueType = [{ value: 1, label: 'FIFO' }, { value: 2, label: 'LIFO' }, { value: 3, label: 'Average' }, { value: 4, label: 'Wt. Average' }]


    React.useEffect(() => { console.log('default', defItemDetails) }, [defItemDetails])
    return (
        <>
            <div className="main card firstDiv">

                <div className="text-center card-title col-12" style={{ textAlign: 'start' }}>
                    <span className="row-header p-0 m-0" >{title}</span>
                </div>
                <form className="row-content form col-sm-12 pt-0">
                    <div className="card-body row col-sm-12 m-0 p-0" >
                        <div className="form col-sm-12 row-content card-body pt-0 pb-0">
                            <fieldset className="form-group border p-0" >

                                <legend className="px-2" data-toggle="collapse" data-target="#genDetails" aria-expanded="true" aria-controls="genDetails" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Item Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>

                                <div className="collapse show" id="genDetails">


                                    <span className="d-flex justify-content-space-evenly flex-row section2 col-sm-12">

                                        <AutoComp name="series" label="Series" ipTitle="Enter Series" list={series} defaultt={defItemDetails ? defItemDetails.seriesname : ''} ipType="text" collect={collectSelectedItem} classCategory="form-control col-4 inp str" isMandate={true } />

                                        <span className="col-1 m-0"></span>
                                        <MasterInput2 name="codestr" defaultt={defItemDetails ? defItemDetails.codestr : ''} label="Code" ipTitle="Enter Code" ipType="text" handleChange={handleChangeField} classCategory="form-control col-12 str" length={20} isMandate={true} />
                                    </span>


                                    <span className="d-flex flex-row section2 col-sm-12">
                                        <MasterInput2 name="name" label="Name" defaultt={defItemDetails ? defItemDetails.name : ''} ipTitle="Enter Name" ipType="text" handleChange={handleChangeField} classCategory="form-control col-12 " length={60} isMandate={true}/>
                                        <span className="col-1 m-0"></span>

                                        <MasterInput2 name="printname" label="Print Name" defaultt={defItemDetails ? defItemDetails.printname : ''} ipTitle="Enter Print Name" ipType="text" handleChange={handleChangeField} classCategory="form-control col-12" length={60} isMandate={true} />


                                    </span>





                                    <span className="d-flex justify-content-space-evenly flex-row section2 col-sm-12">

                                        <AutoComp name="itemgrp" label="Group" ipTitle="Enter Group" list={group} defaultt={defItemDetails ? defItemDetails.itemgrp : ''} ipType="text" collect={collectSelectedItem} classCategory="form-control col-4 inp str" isMandate={true}/>
                                        <span className="col-1 m-0"></span>

                                        <AutoComp name="itemtype" label="Type" ipTitle="Enter Type" list={type} defaultt={defItemDetails ? defItemDetails.itemtypename : ''} ipType="text" collect={collectSelectedItem} classCategory="form-control col-4 inp str" isMandate={true}/>
                                    </span>



                                    <span className="d-flex justify-content-space-evenly flex-row section2 col-sm-12">

                                        <AutoComp name="itemcategory" label="category" ipTitle="Enter Category" list={category} defaultt={defItemDetails ? defItemDetails.itemcategoryname : ''} ipType="text" collect={collectSelectedItem} classCategory="form-control col-4 inp str" isMandate={true}/>
                                        <span className="col-1 m-0"></span>

                                        <AutoComp name="subcat" label="Sub Category" ipTitle="Enter Sub-Category" list={subCat} defaultt={defItemDetails ? defItemDetails.subcatname : ''} ipType="text" collect={collectSelectedItem} classCategory="form-control col-4 inp str" />

                                    </span>





                                    {/*<MasterInput2 name="opening" label="Open Stock" ipTitle="Enter Open Stock" ipType="text" handleChange={handleChangeField} classCategory="form-control inp double" />*/}

                                    <span className="d-flex section2 col-sm-12">

                                        <AutoComp name="itembrand" label="Item Brand" ipTitle="Enter Item Brand" list={brand} defaultt={defItemDetails ? defItemDetails.itembrandname : ''} ipType="text" collect={collectSelectedItem} classCategory="form-control col-4 inp str" isMandate={true}/>
                                        <span className="col-1 m-0"></span>
                                        <MasterInput2 name="otherdes" label="Other Desc." defaultt={defItemDetails ? defItemDetails.otherdes : ''} ipTitle="Enter sub-category" ipType="text" handleChange={handleChangeField} classCategory="form-control col-12" />
                                    </span>



                                    <span className="d-flex section2 col-sm-12">

                                        <AutoComp name="c1" label="Nature" ipTitle="Enter Nature" list={nature} defaultt={defItemDetails ? defItemDetails.c1name : ''} ipType="text" collect={collectSelectedItem} classCategory="form-control col-4 inp str" isMandate={true} />
                                        <span className="col-1 m-0"></span>

                                        <AutoComp name="itemuom" label="UOM" ipTitle="Enter UOM" list={uom} defaultt={defItemDetails ? defItemDetails.itemuomname : ''} ipType="text" collect={collectSelectedItem} classCategory="form-control col-4 inp str" isMandate={true} />

                                    </span>

                                    <span className="d-flex justify-content-space-evenly flex-row section2 col-sm-12">

                                        <AutoComp name="itemaltuom" label="Alt UOM" ipTitle="Enter Alt UOM" list={uom} defaultt={defItemDetails ? defItemDetails.itemaltuomname : ''} ipType="text" collect={collectSelectedItem} classCategory="form-control col-4 inp str" isMandate={true}/>
                                        <span className="col-1 m-0"></span>

                                        <AutoComp name="itemmatcenter" label="Material Center" ipTitle="Enter Material Center" list={matCanter} defaultt={defItemDetails ? defItemDetails.itemmatcentername : ''} ipType="text" collect={collectSelectedItem} classCategory="form-control col-4 inp str" isMandate={true} />
                                    </span>



                                    <span className="d-flex section2 col-sm-12">
                                        <MasterInput2 name="itemconvfact" label="Conv. Fact" defaultt={defItemDetails ? defItemDetails.itemconvfact : ''} ipTitle="Enter Conv Fact" ipType="number" handleChange={handleChangeField} classCategory="form-control col-12 decimal" />
                                        <span className="col-1 m-0"></span>

                                        <CustomSelect classCategory="form-control col-4 inp int seriesConf" handleChange={handleChangeField} name="sizedepyn" label="Size Dependent" def={defItemDetails ? defItemDetails.sizedepyn : ''} />

                                    </span>
                                    <span className="d-flex section2 col-sm-12">

                                        <MasterInput2 name="lday" defaultt={defItemDetails ? defItemDetails.lday : ''} label="Lead Days" ipTitle="Enter Lead Days" ipType="number" handleChange={handleChangeField} classCategory="form-control col-12 int" />

                                        <span className="col-1 m-0"></span>
                                        <AutoComp name="convtype" label="Conv. Type" ipTitle="Enter Material Center" list={[{ label: "Division", value: "Division" }, { label: "Multiplication", value: "Multiplication" }]} defaultt={defItemDetails ? defItemDetails.convtype : ''} ipType="text" collect={collectSelectedItem} classCategory="form-control col-4 inp str" />



                                    </span>
                                    <span className="d-flex section2 col-sm-12">
                                        <MasterInput2 name="evaltype" defaultt={defItemDetails ? defItemDetails.evaltype : ''} label="Eval. Type" ipTitle="Enter Eval. Type" ipType="number" handleChange={handleChangeField} classCategory="form-control col-12 int" />
                                        <span className="col-1 m-0"></span>
                                        <MasterInput2 name="itemwt" label="Net Wt." defaultt={defItemDetails ? defItemDetails.itemwt : ''} ipTitle="Enter Net Weight" ipType="number" handleChange={handleChangeField} classCategory="form-control col-12 double" />
                                    </span>

                                    <span className="d-flex section2 col-sm-12">
                                        <MasterInput2 name="grosswt" label="Gross Weight" defaultt={defItemDetails ? defItemDetails.grosswt : ''} ipTitle="Enter Gross Weight" ipType="number" handleChange={handleChangeField} classCategory="form-control col-12 double" />
                                        <span className="col-1 m-0"></span>

                                        <MasterInput2 name="opening" label="Opn. Stock" defaultt={defItemDetails ? defItemDetails.opening : ''} ipTitle="Enter Opn. Stock" ipType="number" handleChange={handleChangeField} classCategory="form-control col-12 double" />
                                    </span>
                                    <span className="d-flex section2 col-sm-12">
                                        <MasterInput2 name="hsnno" label="HSN/ SA No." defaultt={defItemDetails ? defItemDetails.hsnno : ''} ipTitle="Enter HSN" ipType="number" handleChange={handleChangeField} classCategory="form-control col-12" />
                                        <span className="col-1 m-0"></span>



                                        <AutoComp name="valtype" label="Val. Type" ipTitle="Enter Value Type" list={valueType} defaultt={defItemDetails ? defItemDetails.valtypename : ''} ipType="text" collect={collectSelectedItem} classCategory="form-control col-4 inp str" />

                                    </span>
                                    <span className="d-flex section2 col-sm-12">

                                        <AutoComp name="gstcategory" label="Tax" ipTitle="Enter GST Category" list={gstCat} defaultt={defItemDetails ? defItemDetails.gstcategoryname : ''} ipType="text" collect={collectSelectedItem} classCategory="form-control col-4 inp str" isMandate={true} />
                                        <span className="col-1 m-0"></span>
                                        <span className="col-4 m-0"></span>
                                    </span>
                                </div>
                            </fieldset>

                            <hr style={{ margin: '0', padding: '0' }} />
                            <fieldset className="form-group border p-0">
                                <legend className="px-2" data-toggle="collapse" data-target="#otherDetails" aria-expanded="true" aria-controls="otherDetails" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Other Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0    96v320c0  35.34 28.65 64 64  64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2    230.7 352 224   352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120   192h208c9.531  0 18.19 5.656   21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>
                                <div id="otherDetails" className="collapse row row-content col-sm-12 addSaleForm container container-fluid container-lg">

                                    <span className="d-flex section2 col-sm-12">
                                        <MasterInput2 name="saleprice" label="Sale Price" defaultt={defItemDetails ? defItemDetails.saleprice : ''} ipTitle="Enter Sale.Price" ipType="number" handleChange={handleChangeField} classCategory="form-control col-12 double" />
                                        <span className="col-1 m-0"></span>
                                        <MasterInput2 name="purprice" label="Purchase Price" defaultt={defItemDetails ? defItemDetails.purprice : ''} ipTitle="Enter Purchase Price" ipType="number" handleChange={handleChangeField} classCategory="form-control col-12 decimal" />
                                    </span>
                                    <span className="d-flex section2 col-sm-12">
                                        <MasterInput2 name="sacc" label="Sale Account" defaultt={defItemDetails ? defItemDetails.sacc : ''} ipTitle="Enter Sale.Price" ipType="text" handleChange={handleChangeField} classCategory="form-control col-12" />
                                        <span className="col-1 m-0"></span>
                                        <MasterInput2 name="pacc" label="Purc. Account" defaultt={defItemDetails ? defItemDetails.pacc : ''} ipTitle="Enter Purchase Price" ipType="text" handleChange={handleChangeField} classCategory="form-control col-12" />

                                    </span>

                                    <span className="d-flex section2 col-sm-12">
                                        <MasterInput2 name="mrp" label="MRP" ipTitle="Enter MRP" defaultt={defItemDetails ? defItemDetails.mrp : ''} ipType="number" handleChange={handleChangeField} classCategory="form-control col-12 double" />
                                        <span className="col-1 m-0"></span>
                                        <MasterInput2 name="mfgcost" label="MFG. Cost" defaultt={defItemDetails ? defItemDetails.mfgcost : ''} ipTitle="Enter MFG. Cost" ipType="number" handleChange={handleChangeField} classCategory="form-control col-12 double" />

                                    </span>

                                    <span className="d-flex section2 col-sm-12">

                                        <MasterInput2 name="minstock" label="Min. Stock Level" defaultt={defItemDetails ? defItemDetails.minstock : ''} ipTitle="Enter Min. Stock Level" ipType="number" handleChange={handleChangeField} classCategory="form-control col-12 double" />
                                        <span className="col-1 m-0"></span>

                                        <MasterInput2 name="maxstock" label="Max. Stock Level" defaultt={defItemDetails ? defItemDetails.maxstock : ''} ipTitle="Enter Max. Stock Level" ipType="number" handleChange={handleChangeField} classCategory="form-control col-12 double" />
                                    </span>

                                    <span className="d-flex section2 col-sm-12">
                                        <MasterInput2 name="minqty" label="Min. Supply Qty." defaultt={defItemDetails ? defItemDetails.minqty : ''} ipTitle="Enter Min. Supply Qty." ipType="number" handleChange={handleChangeField} classCategory="form-control col-12 decimal" />
                                        <span className="col-1 m-0"></span>
                                        <MasterInput2 name="reorder" label="Reorder Point" defaultt={defItemDetails ? defItemDetails.reorder : ''} ipTitle="Enter Reorder Point" ipType="number" handleChange={handleChangeField} classCategory="form-control col-12 double" />

                                    </span>
                                    <span className="d-flex section2 col-sm-12">

                                        <AutoComp name="clearance" label="Clearance" ipTitle="Enter Clearance" list={clearance} defaultt={defItemDetails ? defItemDetails.clearancename : ''} ipType="text" collect={collectSelectedItem} classCategory="form-control col-4 inp str" isMandate={true} />
                                        <span className="col-1 m-0"></span>
                                        <AutoComp name="itemuse" label="Item Use" ipTitle="Select Item Use" list={[{ label: "Commonly", value: "Commonly" }, { label: "Exclusively", value: "Exclusively" }]} defaultt={defItemDetails ? defItemDetails.itemuse : ''} ipType="text" collect={collectSelectedItem} classCategory="form-control col-4 inp str" />

                                    </span>
                                    <span className="d-flex section2 col-sm-12">
                                        <MasterInput2 name="itemlife" label="Item Life(month)" defaultt={defItemDetails ? defItemDetails.itemlife : ''} ipTitle="Enter Item Life" ipType="number" handleChange={handleChangeField} classCategory="form-control col-12 int" />
                                        <span className="col-1 m-0"></span>
                                        <>
                                            <label htmlFor="costsheetgrp" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 labl2">Cost Sheet Group</label>
                                        </>
                                        <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                                            <DatalistInput

                                                className="d-flex col-12 m-0 p-0"
                                                inputProps={{ className: 'form-control col-12 inp', name: 'costsheetgrp', id: "costsheetgrp", style: { padding: '22px 0 22px 10px', fontSize: '20px' }, placeholder: 'Select Material Center' }}

                                                listboxProps={{ className: 'text-left mt-5' }}
                                                onSelect={(item: any) => console.log(item)}
                                                items={[{}]}
                                            />
                                        </span>

                                    </span>


                                    <div className="card addSalecard col-sm-12 p-4 mt-4">
                                        <div className="card-body" style={{ margin: '0', padding: '0', minHeight: '36vh' }}>
                                            <form className="form col-sm-12 row-content card-body pt-0 pb-0 px-2">
                                                <span className="d-flex flex-column section2 col-sm-12" style={{ marginLeft: '36px' }}>
                                                    <CustomeSwitch default={defItemDetails ? defItemDetails.c2 : ''} lablClass="custom-control-label col-9" label="Bil Sun" id="c2" name="c2" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChangeField} />
                                                    <CustomeSwitch default={defItemDetails ? defItemDetails.c3 : ''} lablClass="custom-control-label col-9" label="QC Applicable" id="c3" name="c3" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChangeField} />
                                                    <CustomeSwitch default={defItemDetails ? defItemDetails.c4 : ''} lablClass="custom-control-label col-9" label="Quotation" id="c4" name="c4" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChangeField} />
                                                    <CustomeSwitch default={defItemDetails ? defItemDetails.c5 : ''} lablClass="custom-control-label col-9" label="Is Blocked" id="c5" name="c5" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChangeField} />
                                                    <CustomeSwitch default={defItemDetails ? defItemDetails.c6 : ''} lablClass="custom-control-label col-9" label="Batch Managed" id="c6" name="c6" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChangeField} />
                                                    <CustomeSwitch default={defItemDetails ? defItemDetails.c7 : ''} lablClass="custom-control-label col-9" label="Coupon" id="c7" name="c7" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChangeField} />
                                                    <CustomeSwitch default={defItemDetails ? defItemDetails.c8 : ''} lablClass="custom-control-label col-9" label="Is Parameterized" id="c8" name="c8" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChangeField} />

                                                    <CustomeSwitch default={defItemDetails ? defItemDetails.stockeffect : ''} lablClass="custom-control-label col-9" label="SV Effected" id="stockeffect" name="stockeffect" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChangeField} />
                                                    <CustomeSwitch default={defItemDetails ? defItemDetails.consumestock : ''} lablClass="custom-control-label col-9" label="Con. Stock Level" id="consumestock" name="consumestock" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChangeField} />
                                                    <CustomeSwitch default={defItemDetails ? defItemDetails.altitem : ''} lablClass="custom-control-label col-9" label="Enter Alternate Item" id="altitem" name="altitem" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChangeField} />
                                                    <CustomeSwitch default={defItemDetails ? defItemDetails.srnosale : ''} lablClass="custom-control-label col-9" label="Sr. No. On Sale Invoice" id="srnosale" name="srnosale" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChangeField} />


                                                </span>

                                            </form>
                                        </div>
                                    </div>

                                </div>
                            </fieldset>

                        </div>




                    </div>
                    <div className="btn-group col-12 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0" onClick={handleSave$Submit}>Save</button>
                        <StockMasterModal />
                        <button type="button" style={{ border: '2px solid red', letterSpacing: 3 }} className="btn btn-danger pl-0 pr-0">Quit</button>
                    </div>

                </form>
            </div>
            <hr style={{ margin: '0', padding: '0' }} />
        </>

    );
}


export default AddItemMaster;