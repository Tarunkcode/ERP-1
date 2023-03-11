import * as React from 'react';
import CustomeSwitch from '../../../components/CustomSwitch/custom-switch.component';

//Enable Job Work
//Enable Item Issue Slip With Challan
//Enable Challan Bill Entry
//Challan Gate Entry

export default function JobWork_Page({ handleChange, handlePosting, defConf, ...oherProps }: any) {
    return (<>
        <div className="main card firstDiv">

            <div className="card-title mb-2 col-12 text-center" style={{ margin: '0 auto' }}>
                <span style={{ fontSize: "20px" }}>Job Work Configurations</span>
            </div>
            <div className="col-12 p-3" style={{ margin: '0 auto' }}>
                <button type="button" onClick={handlePosting} className="btn btn-success col-1 p-1 mr-2" style={{ float: 'right' }}>Save</button>
            </div>
            <div className="d-flex flex-row m-0 p-0">
            <div className="card addSalecard col-sm-6">
                <div className="card-body" style={{ margin: '0', padding: '0', minHeight: '100vh' }}>
                    <form className="form">
                        <span className="d-flex flex-column section2 col-sm-12">

                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Job Work " id="eJW" name="eJW" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.eJW} />
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Item Issue Slip With Challan" id="eItemIssueJw" name="eItemIssueJw" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.eItemIssueJw} />
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Challan Bill Entry" id=" eChBill" name="eChBill" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.eChBill} />
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Challan Gate Entry" id="chGE" name="chGE" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.chGE} />
                        </span>

                    </form>
                </div>
            
                </div>
                <div className="card addSalecard col-sm-6">
                    <span></span>
                </div>
                </div>
        </div>
    </>)
}