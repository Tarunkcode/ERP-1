import * as React from 'react';
import CustomeSwitch from '../../../components/CustomSwitch/custom-switch.component';


export default function Inventory_Page({ handleChange, handlePosting, ...oherProps }: any) {
   
    return (
         <>
            <div className="main card firstDiv">
                  
                        <div className="card-title mb-2 col-12 text-center" style={{ margin: '0 auto' }}>
                            <span style={{ fontSize: "20px" }}>Inventory Configurations</span>
                        </div>
                <div className="card addSalecard col-sm-12">
            <div className="card-body" style={{ margin: '0', padding: '0', minHeight: '80vh' }}>
                <form className="form">
                    <span className="d-flex flex-column section2 col-sm-12">

                                <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Freeze Transaction " name="EFrzTran" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange} />

                                <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Alt.Uom Of Item" id="EAltUom" name="EAltUom" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange} />

                                <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Branch" id="EBranch" name="EBranch" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange} />

                                <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Approval" id="EApproval" name="EApproval" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange} />

                                <CustomeSwitch lablClass="custom-control-label col-8" label="Stock Valuation Method FIFO / LIFO / Weight Avg./" name="STValuation" id="STValuation" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange}/>

                                <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Party Wise Item Code" name="EPartyItemCode" classCat="form-control custom-control-input col-3 InventoryDet" id="EPartyItemCode" handleChange={handleChange} />


                                <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Item Wise Material Center" name="EItemWMc" classCat="form-control custom-control-input col-3 InventoryDet" id="EItemWMc" handleChange={handleChange} />

{/*------------------------------------------------------------------------------------------------------------------------------------*/}

                                <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Negative Stock" name="NgtStock" classCat="form-control custom-control-input col-3 InventoryDet" id="NgtStock" handleChange={handleChange} />

                                <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Negative On Sale" name="NgtOnSale" classCat="form-control custom-control-input col-3 InventoryDet" id="NgtOnSale" handleChange={handleChange} />

                                <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Negative On Product" classCat="form-control custom-control-input col-3 InventoryDet" id="NgtOnProd" name="NgtOnProd" handleChange={handleChange} />

                                <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Negative On Issue"  classCat="form-control custom-control-input col-3 InventoryDet" id="NgtOnIssue" name="NgtOnIssue" handleChange={handleChange} />

{/*------------------------------------------------------------------------------------------------------------------------------------*/}

                                <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Negative Stock Negative On Sale / Production / Issue / Challan Issue" name="NgtOnChallan" classCat="form-control custom-control-input col-3 InventoryDet" id="NgtOnChallan" handleChange={handleChange} />

                                <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Scheme" id="EScheem" name="EScheem" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange} />
                                <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Item Description" name="EItemDes" classCat="form-control custom-control-input col-3 InventoryDet" id="EItemDes" handleChange={handleChange} />

                                <CustomeSwitch lablClass="custom-control-label col-8" label="Enable O.F" id="EOF" name="EOF" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange} />

                                <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Customer Supplier Description" name="ECustSupDes" classCat="form-control custom-control-input col-3 InventoryDet" id="ECustSupDes" handleChange={handleChange} />

                                <CustomeSwitch lablClass="custom-control-label col-8" label="Show Closing Balance" id="SClsBal" name="SClsBal" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange} />
                            </span>

                </form>
                    </div>
                    <div className="float-right col-12">
                        <button type="button" onClick={handlePosting} className="btn btn-danger col-2">Finish</button>
                        </div>
                </div>
            </div>
            </>
        )
}