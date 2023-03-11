import * as React from 'react';
import { useState, useEffect } from 'react';
import { MasterInput } from '../../../components/custom-input/custom-input.component';
import CustomeSwitch from "../../../components/CustomSwitch/custom-switch.component"



export default function Purchase_Page({ handleChange, handlePosting, defConf , ...otherProps }: any) {

    console.log('currentSTtae', defConf);
   
    return (
        <>
            <div className="main card firstDiv" style={{ maxHeight:'1000vh' }}>
            <div className="card-title m-0 p-0 col-12 text-center" style={{ margin: '0 auto' }}>
                <span style={{ fontSize: "20px" }}>Purchase Configurations</span>
                </div>
                <div className="col-12 p-3" style={{ margin: '0 auto' }}>
                    <button type="button" onClick={handlePosting} className="btn btn-success col-1 p-1 mr-2" style={{ float:'right' }}>Save</button>
                </div>
                <div className="d-flex flex-row m-0 p-0">
                    <div className="card addSalecard col-sm-6">
                <div className="card-body" style={{ margin: '0', padding: '0', minHeight: '100vh' }}>
                    <form className="form">
                        <span className="d-flex flex-column section2 col-sm-12">


                                    <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Purchase Requisition" id="ePR" name="ePR" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.ePR} />
                                    <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Purchase Requisition with M.S.L" id="ePRWithMSL" name="ePRWithMSL" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.ePRWithMSL} />
                                    <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Quotation" id="eQut" name="eQut" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.eQut}/>
                                    <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Purchase Order" id="ePO" name="ePO" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.ePO}/>
                                    <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Duplicate Item in Purchase Order" id="eDupItemPO" name="eDupItemPO" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.eDupItemPO}/>
                                    <CustomeSwitch lablClass="custom-control-label col-8" label="Enable SFG Purchase" id="eSfgPur" name="eSfgPur" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.eSfgPur}/>
                                    <CustomeSwitch lablClass="custom-control-label col-8" label="Enable FG Purchase" id="eFgPur" name="eFgPur" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.eFgPur}/>
                            {/*  <CustomeSwitch lablClass="custom-control-label col-8" label=" " id="QtyTolPo" name="QtyTolPo" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange} default={defConf.qtyTolPo}/>*/}
                          
                                    <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Department On Purchase Order" id="eDepPo" name="eDepPo" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.eDepPo}/>
                                    <CustomeSwitch lablClass="custom-control-label col-8" label="Purchase Order Send To Supplier " id="poSendToSup" name="poSendToSup" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.poSendToSup}/>
                                    <CustomeSwitch lablClass="custom-control-label col-8" label="Purchase Order Send To Department" id="poSendToDep" name="poSendToDep" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.poSendToDep}/>
                                    <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Open Purchase Order" id="eOpnPO" name="eOpnPO" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.eOpnPO}/>
                                    <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Gate Entry" id="eGE" name="eGE" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.eGE}/>
                                    <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Item Details In Gate Entry" id="eItemDetGE" name="eItemDetGE" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.eItemDetGE} />
                                    <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Material Receipt" id="eMRN" name="eMRN" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.eMRN}/>
                                    <CustomeSwitch lablClass="custom-control-label col-8" label="Direct Purchase" id="dirPurch" name="dirPurch" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.dirPurch}/>
                                    <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Material In Transit " id="eMatTransit" name="eMatTransit" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.eMatTransit}/>
                                    <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Purchase Schedule" id="ePS" name="ePS" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.ePS}/>
                                    <CustomeSwitch lablClass="custom-control-label col-8" label="Enable MRN without Purchase Order" id="eMRNWithoutPO" name="eMRNWithoutPO" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.eMRNWithoutPO} />
                                    <CustomeSwitch lablClass="custom-control-label col-8" label="Check Schedule Qty on Gate Entry and MRN" id="chkPSQty" name="chkPSQty" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.chkPSQty}/>
                                    <CustomeSwitch lablClass="custom-control-label col-8" label="Purchase Material Center" id="purchMC" name="purchMC" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.purchMC}/>
                                    <CustomeSwitch lablClass="custom-control-label col-8" label="Check Contact Person Details" id="cPDMCS" name="cPDMCS" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.cPDMCS}/>
                        </span>

                    </form>
                </div>
              
                    </div>
                    <div className="card addSalecard col-sm-6">
                <span className="col-12 d-flex flex-row m-0">
                            <label htmlFor="QtyTolPo" style={{ fontSize: '1rem' }} className="form-label mr-1 col-5">Quantity Tol. on Pur Order</label>
                            <input name="qtyTolPo" defaultValue={defConf.qtyTolPo} title="Enter Decimal Value" type="number" onChange={handleChange} className="form-control col-5 InventoryDet" />
                </span>
                    </div>
                    </div>
            </div>
            </>
        )
}