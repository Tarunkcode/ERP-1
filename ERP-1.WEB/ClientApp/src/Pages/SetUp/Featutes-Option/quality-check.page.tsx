import * as React from 'react';
import CustomeSwitch from "../../../components/CustomSwitch/custom-switch.component"

export default function Quality_Page({ handleChange, handlePosting, defConf, ...oherProps }: any) {
    console.log(defConf)
    return (
        <div className="main card firstDiv">

            <div className="card-title mb-2 col-12 text-center" style={{ margin: '0 auto' }}>
                <span style={{ fontSize: "20px" }}>Quality Check Configurations</span>
            </div>
            <div className="col-12 p-3" style={{ margin: '0 auto' }}>
                <button type="button" onClick={handlePosting} className="btn btn-danger col-1 p-1 mr-2" style={{ float: 'right' }}>Save</button>
            </div>
            <div className="d-flex flex-row m-0 p-0">
                <div className="card addSalecard col-sm-6">
                <div className="card-body" style={{ margin: '0', padding: '0', minHeight: '100vh' }}>
                    <form className="form">
                        <span className="d-flex flex-column section2 col-sm-12">

                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable QC" id="eQC" name="eQC" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.eQC} />
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Upload QC Report" id="upQCRpt" name="upQCRpt" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.upQCRpt} />

                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable QC Rejection Reason" id="eQcRejReason" name="eQcRejReason" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.eQcRejReason} />
                            <CustomeSwitch lablClass="custom-control-label col-8" label="QC Rejection Mail To Supplier" id="qCRejMailSup" name="qCRejMailSup" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.qCRejMailSup}  />
                            <CustomeSwitch lablClass="custom-control-label col-8" label="QC Rejection Mail To Department" id="qCRejMailDep" name="qCRejMailDep" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.qCRejMailDep}  />
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