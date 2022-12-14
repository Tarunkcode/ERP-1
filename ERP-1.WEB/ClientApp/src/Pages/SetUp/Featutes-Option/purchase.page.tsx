import * as React from 'react';
import { useState, useEffect } from 'react';
import { MasterInput } from '../../../components/custom-input/custom-input.component';
import CustomeSwitch from "../../../components/CustomSwitch/custom-switch.component"



export default function Purchase_Page({ handleChange, handlePosting, ...oherProps }: any) {
const compCode = window.sessionStorage.getItem('compCode') || ""
const customer = window.sessionStorage.getItem('customer') || ""
    var [defConf, setDefConf]: any = useState({});
    useEffect(() => {
        const loadDefaultStateConf = `http://103.25.128.155:12019/api/LoadConfiguration?Company=${compCode}&Customer=${customer}`
        var req: Request;
        let h = new Headers();
        h.append('Accept', 'application/json');
        h.append('Content-Type', 'application/json');
        h.append('CompCode', 'ESERPDB');
        h.append('FYear', '0');

        req = new Request(loadDefaultStateConf, {
            method: 'GET',
            headers: h,
            mode: 'cors'
        });
        try {
            fetch(req).then(res => res.json()).then(r => setDefConf(r.data[0]))

        } catch (err) {
            alert(err);
        }
    }, [])
    console.log('currentSTtae', defConf);
   
    return (
        <div className="main card firstDiv">

            <div className="card-title mb-2 col-12 text-center" style={{ margin: '0 auto' }}>
                <span style={{ fontSize: "20px" }}>Purchase Configurations</span>
            </div>
            <div className="card addSalecard col-sm-12">
                <div className="card-body" style={{ margin: '0', padding: '0', minHeight: '100vh' }}>
                    <form className="form">
                        <span className="d-flex flex-column section2 col-sm-12">


                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Purchase Requisition" id="EPR" name="EPR" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange} default={defConf.epr} />
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Purchase Requisition with M.S.L" id="EPRWithMSL" name="EPRWithMSL" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange} default={defConf.eprWithMSL} />
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Quotation" id="EQut" name="EQut" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange} default={defConf.eQut}/>
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Purchase Order" id="EPO" name="EPO" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange} default={defConf.epo}/>
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Duplicate Item in Purchase Order" id="EDupItemPO" name="EDupItemPO" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange} default={defConf.eDupItemPO}/>
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable SFG Purchase" id="ESfgPur" name="ESfgPur" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange} default={defConf.eSfgPur}/>
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable FG Purchase" id="EFgPur" name="EFgPur" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange} default={defConf.eFgPur}/>
                            {/*  <CustomeSwitch lablClass="custom-control-label col-8" label=" " id="QtyTolPo" name="QtyTolPo" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange} default={defConf.qtyTolPo}/>*/}
                            <span className="col-10 d-flex flex-row mr-2">
                                <label htmlFor="QtyTolPo" style={{ fontSize: '0.8em' }} className="form-label mr-1 col-6">Quantity Tol. on Pur Order</label>
                                <input name="QtyTolPo" title="Enter Decimal Value" type="number" onChange={handleChange} className="form-control col-4 InventoryDet" />
                            </span>
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Department On Purchase Order" id="EDepPo" name="EDepPo" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange} default={defConf.eDepPo}/>
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Purchase Order Send To Supplier " id="PoSendToSup" name="PoSendToSup" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange} default={defConf.poSendToSup}/>
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Purchase Order Send To Department" id="PoSendToDep" name="PoSendToDep" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange} default={defConf.poSendToDep}/>
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Open Purchase Order" id="EOpnPO" name="EOpnPO" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange} default={defConf.eOpnPO}/>
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Gate Entry" id="EGE" name="EGE" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange} default={defConf.ege}/>
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Item Details In Gate Entry" id="EItemDetGE" name="EItemDetGE" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange} default={defConf.eItemDetGE} />
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Material Receipt" id="EMRN" name="EMRN" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange} default={defConf.emrn}/>
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Direct Purchase" id="DirPurch" name="DirPurch" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange} default={defConf.dirPurch}/>
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Material In Transit " id="EMatTransit" name="EMatTransit" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange} default={defConf.eMatTransit}/>
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Purchase Schedule" id="EPS" name="EPS" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange} default={defConf.eps}/>
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable MRN without Purchase Order" id="EMRNWithoutPO" name="EMRNWithoutPO" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange} default={defConf.emrnWithoutPO} />
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Check Schedule Qty on Gate Entry and MRN" id="ChkPSQty" name="ChkPSQty" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange} default={defConf.chkPSQty}/>
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Purchase Material Center" id="PurchMC" name="PurchMC" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange} default={defConf.purchMC}/>
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Check Contact Person Details" id="CPDMCS" name="CPDMCS" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange} default={defConf.cpdmcs}/>
                        </span>

                    </form>
                </div>
                <div className="float-right col-12">
                    <button type="button" onClick={handlePosting} className="btn btn-danger col-2">Finish</button>
                </div>
            </div>
        </div>
        )
}