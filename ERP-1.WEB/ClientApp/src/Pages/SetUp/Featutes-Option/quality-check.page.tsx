import * as React from 'react';
import CustomeSwitch from "../../../components/CustomSwitch/custom-switch.component"

export default function Quality_Page({ handleChange, handlePosting, ...oherProps }: any) {
    return (
        <div className="main card firstDiv">

            <div className="card-title mb-2 col-12 text-center" style={{ margin: '0 auto' }}>
                <span style={{ fontSize: "20px" }}>Quality Check Configurations</span>
            </div>
            <div className="card addSalecard col-sm-12">
                <div className="card-body" style={{ margin: '0', padding: '0', minHeight: '100vh' }}>
                    <form className="form">
                        <span className="d-flex flex-column section2 col-sm-12">

                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable QC" id="EQC" name="EQC" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange}/>
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Upload QC Report" id="UpQCRpt" name="UpQCRpt" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange}/>
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable QC Rejection Reason" id="EQcRejReason" name="EQcRejReason" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange}/>
                            <CustomeSwitch lablClass="custom-control-label col-8" label="QC Rejection Mail To Supplier" id="QCRejMailSup" name="QCRejMailSup" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange} />
                            <CustomeSwitch lablClass="custom-control-label col-8" label="QC Rejection Mail To Department" id="QCRejMailDep" name="QCRejMailDep" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange} />
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