import * as React from 'react';
import CustomeSwitch from "../../../components/CustomSwitch/custom-switch.component"

export default function Production_Page({ handleChange, handlePosting, defConf, ...oherProps }: any) {
    console.log('dddd', defConf)
    return (
        <div className="main card firstDiv">

            <div className="card-title mb-2 col-12 text-center" style={{ margin: '0 auto' }}>
                <span style={{ fontSize: "20px" }}>Production Configurations</span>
            </div>
            <div className="col-12 p-3" style={{ margin: '0 auto' }}>
                <button type="button" onClick={handlePosting} className="btn btn-danger col-1 p-1 mr-2" style={{ float: 'right' }}>Save</button>
            </div>
            <div className="d-flex flex-row m-0 p-0">
            <div className="card addSalecard col-sm-6">
                <div className="card-body" style={{ margin: '0', padding: '0', minHeight: '100vh' }}>
                    <form className="form">
                        <span className="d-flex flex-column section2 col-sm-12">
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Production Indent with M.S.L" id="prodIndMSL" name="prodIndMSL" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.prodIndMSL} />
                            <CustomeSwitch lablClass="custom-control-label col-8" label="One Routing For Multi Items" id="oneRoutMItem" name="oneRoutMItem" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.oneRoutMItem} />
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Rack In Material Center" id="eRckMC" name="eRckMC" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.eRckMC}/>
                           {/* <CustomeSwitch label="Enable Sale Order In Production Indent" id="switch_4" name="" classCat="" handleChange={handleChange}/>*/}
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Shift Wise Planning " id="shiftWPlan" name="shiftWPlan" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.shiftWPlan}/>
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Raw Material In Re - work Sample Production" id="eRMRWSMP" name="eRMRWSMP" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.eRMRWSMP}/>
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Plan No Month Wise" id="planNoMonth" name="planNoMonth" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.planNoMonth} />
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Job worker Name in Day wise Plan" id="eJWNameDWP" name="eJWNameDWP" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.eJWNameDWP}/>
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Item Location in Routing" id="eItemLRouting" name="eItemLRouting" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.eItemLRouting}/>
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Routing Version" id="eRoutingVer" name="eRoutingVer" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.eRoutingVer}/>
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Barcode" id="eBarcode" name="eBarcode" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.eBarcode}/>
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Production Schedule " id="eProdSchedule" name="eProdSchedule" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.eProdSchedule} />
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Single Indent MRP" id="eSingIndMRP" name="eSingIndMRP" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.eSingIndMRP}/>
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Production Indent Convert To Purchase Requisition" id="prodIndToPR" name="prodIndToPR" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.prodIndToPR}/>
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Department Wise Planning " id="deptWPlan" name="deptWPlan" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.deptWPlan}/>
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Mold Life" id="eMoldLife" name="eMoldLife" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.eMoldLife}/>
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Document Upload In Production" id="eDocUploadProd" name="eDocUploadProd" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.eDocUploadProd}/>
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Rejection Reason In Production" id="eRejReasonProd" name="eRejReasonProd" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.eRejReasonProd}/>
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Production Over Head" id="eProdOH" name="eProdOH" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.eProdOH}/>
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Production Operation" id="eProdOpr" name="eProdOpr" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.eProdOpr}/>
                           
                        </span>

                    </form>
              </div>
                </div>
                <div className="card addSalecard col-sm-6">
                      <span></span>
                </div>
            </div>
        </div>
        )
}