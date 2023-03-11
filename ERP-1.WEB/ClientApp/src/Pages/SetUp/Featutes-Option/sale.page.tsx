import * as React from 'react';
import CustomeSwitch from '../../../components/CustomSwitch/custom-switch.component';

/*label = "Enable Negative Stock Negative On Sale / Production / Issue / Challan Issue" name = "NgtOnChallan" classCat = "form-control custom-control-input col-3 InventoryDet switch" id = "NgtOnChallan" handleChange = { handleChange }*/


export default function Sale_Page({ handleChange, handlePosting, defConf, ...oherProps }: any) {
    console.log('defCSale', defConf)
    return (
        <>
            <div className="main card firstDiv">

                <div className="card-title mb-2 col-12 text-center" style={{ margin: '0 auto' }}>
                    <span style={{ fontSize: "20px" }}>Sale Configurations</span>
                </div>
                <div className="col-12 p-3" style={{ margin: '0 auto' }}>
                    <button type="button" onClick={handlePosting} className="btn btn-success col-1 p-1 mr-2" style={{ float: 'right' }}>Save</button>
                </div>
                <div className="d-flex flex-row m-0 p-0">
                <div className="card addSalecard col-sm-6">
                    <div className="card-body" style={{ margin: '0', padding: '0', minHeight: '100vh' }}>
                        <form className="form">
                            <span className="d-flex flex-column section2 col-sm-12">

                                <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Projection" id="eProj" name="eProj" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.eProj } />
                                    <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Sale Order" id="eSO" name="eSO" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.eSO } />
                                <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Tolerance On Sale Order" id="eTolSO" name="eTolSO" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.eTolSO} />

                                <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Soda " id="eSoda" name="eSoda" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.eSoda } />
                                <CustomeSwitch lablClass="custom-control-label col-8" label="Soda Tolerance " id="eSodaTol" name="eSodaTol" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.eSodaTol } />
                                <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Dispatch Advice" id="eDA" name="eDA" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.eDA } />
                                <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Supplementary Sale" id="eSupSale" name="eSupSale" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.eSupSale }/>
                                <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Broker / Sale Person" id="eBSP" name="eBSP" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.eBSP } />
                                <CustomeSwitch lablClass="custom-control-label col-8" label="Sale Material Center" id="eSaleMC" name="eSaleMC" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.eSaleMC} />
                                {/*data not found in json for salePriceZero*/}
                                <CustomeSwitch lablClass="custom-control-label col-8" label="Sale Price cannot be zero" id="salePriceZero" name="salePriceZero" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.salePriceZero } />
                           
                            </span>

                        </form>

                    </div>
                  
                </div>
                <div className="card addSalecard col-sm-6">
                    <span className="col-12 d-flex flex-row m-0">
                        
                    </span>
                    </div>
                    </div>
            </div>
        </>
        )
}