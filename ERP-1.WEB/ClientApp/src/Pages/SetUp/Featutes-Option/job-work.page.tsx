import * as React from 'react';
import CustomeSwitch from '../../../components/CustomSwitch/custom-switch.component';

//Enable Job Work
//Enable Item Issue Slip With Challan
//Enable Challan Bill Entry
//Challan Gate Entry

export default function JobWork_Page({ handleChange, handlePosting, ...oherProps }: any) {
    return (<>
        <div className="main card firstDiv">

            <div className="card-title mb-2 col-12 text-center" style={{ margin: '0 auto' }}>
                <span style={{ fontSize: "20px" }}>Job Work Configurations</span>
            </div>
            <div className="card addSalecard col-sm-12">
                <div className="card-body" style={{ margin: '0', padding: '0', minHeight: '100vh' }}>
                    <form className="form">
                        <span className="d-flex flex-column section2 col-sm-12">

                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Job Work " id="EJW" name="EJW" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange}  />
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Item Issue Slip With Challan" id="EItemIssueJw" name="EItemIssueJw" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange} />
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Challan Bill Entry" id=" EChBill" name="EChBill" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange} />
                            <CustomeSwitch lablClass="custom-control-label col-8" label="Challan Gate Entry" id="ChGE" name="ChGE" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange}  />
                        </span>

                    </form>
                </div>
                <div className="float-right col-12">
                    <button type="button" onClick={handlePosting} className="btn btn-danger col-2">Finish</button>
                </div>
            </div>
        </div>
    </>)
}