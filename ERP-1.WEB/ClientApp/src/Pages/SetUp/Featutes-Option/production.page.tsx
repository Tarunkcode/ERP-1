import * as React from 'react';
import CustomeSwitch from "../../../components/CustomSwitch/custom-switch.component"

export default function Production_Page({ handleChange, handlePosting, ...oherProps }: any) {
    return (
        <div className="main card firstDiv">

            <div className="card-title mb-2 col-12 text-center" style={{ margin: '0 auto' }}>
                <span style={{ fontSize: "20px" }}>Production Configurations</span>
            </div>
            <div className="card addSalecard col-sm-12">
                <div className="card-body" style={{ margin: '0', padding: '0', minHeight: '100vh' }}>
                    <form className="form">
                        <span className="d-flex flex-column section2 col-sm-12">
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Production Indent with M.S.L" id="ProdIndMSL" name="ProdIndMSL" classCat="form-control custom-control-input col-3 InventoryDet"handleChange={handleChange}/>
                            <CustomeSwitch lablClass="custom-control-label col-8" label="One Routing For Multi Items" id="OneRoutMItem" name="OneRoutMItem" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange}/>
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Rack In Material Center" id="ERckMC" name="ERckMC" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange}/>
                           {/* <CustomeSwitch label="Enable Sale Order In Production Indent" id="switch_4" name="" classCat="" handleChange={handleChange}/>*/}
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Shift Wise Planning " id="ShiftWPlan" name="ShiftWPlan " classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange}/>
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Raw Material In Re - work Sample Production" id="ERMRWSMP" name="ERMRWSMP" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange}/>
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Plan No Month Wise" id="PlanNoMonth" name="PlanNoMonth" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange} />
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Job worker Name in Day wise Plan" id="EJWNameDWP" name="EJWNameDWP" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange}/>
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Item Location in Routing" id="EItemLRouting" name="EItemLRouting" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange}/>
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Routing Version" id="ERoutingVer" name="ERoutingVer" classCat="form-control custom-control-input col-3 InventoryDet"handleChange={handleChange} />
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Barcode" id="EBarcode" name="EBarcode" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange}/>
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Production Schedule " id="EProdSchedule" name="EProdSchedule" classCat="form-control custom-control-input col-3 InventoryDet"handleChange={handleChange} />
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Single Indent MRP" id="ESingIndMRP" name="ESingIndMRP" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange}/>
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Production Indent Convert To Purchase Requisition" id="ProdIndToPR" name="ProdIndToPR" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange}/>
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Department Wise Planning " id="DeptWPlan" name="DeptWPlan" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange} />
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Mold Life" id="EMoldLife" name="EMoldLife" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange}/>
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Document Upload In Production" id="EDocUploadProd" name="EDocUploadProd" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange}/>
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Rejection Reason In Production" id="ERejReasonProd" name="ERejReasonProd" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange} />
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Production Over Head" id="EProdOH" name="EProdOH" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange} />
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Production Operation" id="EProdOpr" name="EProdOpr" classCat="form-control custom-control-input col-3 InventoryDet"handleChange={handleChange}/>
                           
                        </span>

                    </form>
                <div className="float-right col-12">
                    <button type="button" onClick={handlePosting} className="btn btn-danger col-2">Finish</button>
                </div>
                </div>
            </div>
        </div>
        )
}