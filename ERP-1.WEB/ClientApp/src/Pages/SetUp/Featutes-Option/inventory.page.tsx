import * as React from 'react';
import CustomeSwitch from '../../../components/CustomSwitch/custom-switch.component';


export default function Inventory_Page({ handleChange, handlePosting, defConf, ...oherProps }: any) {
   
    return (
         <>
            <div className="main card firstDiv">
                  
                        <div className="card-title mb-2 col-12 text-center" style={{ margin: '0 auto' }}>
                            <span style={{ fontSize: "20px" }}>Inventory Configurations</span>
                        </div>
                <div className="col-12 p-3" style={{ margin: '0 auto' }}>
                    <button type="button" onClick={handlePosting} className="btn btn-success col-1 p-1 mr-2" style={{ float: 'right' }}>Save</button>
                </div>
                <div className="d-flex flex-row m-0 p-0">
                    <div className="card addSalecard col-sm-6">
            <div className="card-body" style={{ margin: '0', padding: '0', minHeight: '80vh' }}>
                <form className="form">
                    <span className="d-flex flex-column section2 col-sm-12">

                                <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Freeze Transaction" id="eFrzTran" name="eFrzTran" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.eFrzTran} />

                                <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Alt.Uom Of Item" id="EAltUom" name="eAltUom" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.eAltUom} />

                                <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Branch" id="EBranch" name="eBranch" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.eBranch} />

                                <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Approval" id="EApproval" name="eApproval" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.eApproval} />

                                <CustomeSwitch lablClass="custom-control-label col-8" label="Stock Valuation Method FIFO / LIFO / Weight Avg./" name="sTValuation" id="sTValuation" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.sTValuation}/>

                                <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Party Wise Item Code" name="ePartyItemCode" classCat="form-control custom-control-input col-3 InventoryDet switch" id="EPartyItemCode" handleChange={handleChange} default={defConf.ePartyItemCode}/>


                                <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Item Wise Material Center" name="eItemWMc" classCat="form-control custom-control-input col-3 InventoryDet switch" id="EItemWMc" handleChange={handleChange} default={defConf.eItemWMc} />

{/*------------------------------------------------------------------------------------------------------------------------------------*/}

                                <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Negative Stock" name="ngtStock" classCat="form-control custom-control-input col-3 InventoryDet switch" id="NgtStock" handleChange={handleChange} default={defConf.ngtStock}/>

                                <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Negative On Sale" name="ngtOnSale" classCat="form-control custom-control-input col-3 InventoryDet switch" id="ngtOnSale" handleChange={handleChange} default={defConf.ngtOnSale}/>

                                <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Negative On Product" classCat="form-control custom-control-input col-3 InventoryDet switch" id="ngtOnProd" name="ngtOnProd" handleChange={handleChange} default={defConf.ngtOnProd}/>

                                <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Negative On Issue" classCat="form-control custom-control-input col-3 InventoryDet switch" id="ngtOnIssue" name="NgtOnIssue" handleChange={handleChange} default={defConf.ngtOnIssue}/>

{/*------------------------------------------------------------------------------------------------------------------------------------*/}

                                <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Negative Stock Negative On Sale / Production / Issue / Challan Issue" name="ngtOnChallan" classCat="form-control custom-control-input col-3 InventoryDet switch" id="NgtOnChallan" handleChange={handleChange} default={defConf.ngtOnChallan}/>

                                <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Scheme" id="EScheem" name="eScheem" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.eScheem}/>
                                <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Item Description" name="eItemDes" classCat="form-control custom-control-input col-3 InventoryDet switch" id="EItemDes" handleChange={handleChange} default={defConf.eItemDes}/>

                                <CustomeSwitch lablClass="custom-control-label col-8" label="Enable O.F" id="eOF" name="eOF" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.eOF}/>

                                <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Customer Supplier Description" name="eCustSupDes" classCat="form-control custom-control-input col-3 InventoryDet switch" id="ECustSupDes" handleChange={handleChange} default={defConf.eCustSupDes}/>

                                <CustomeSwitch lablClass="custom-control-label col-8" label="Show Closing Balance" id="SClsBal" name="sClsBal" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.sClsBal}/>
                            </span>

                </form>
                    </div>
                    </div>
                    <div className="card addSalecard col-sm-6">
                        <span></span>
                        </div>
                </div>
            </div>
            </>
        )
}