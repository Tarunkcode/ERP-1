import * as React from 'react';
import CustomeSwitch from '../../../components/CustomSwitch/custom-switch.component';

/*label = "Enable Negative Stock Negative On Sale / Production / Issue / Challan Issue" name = "NgtOnChallan" classCat = "form-control custom-control-input col-3 InventoryDet" id = "NgtOnChallan" handleChange = { handleChange }*/


export default function Sale_Page({ handleChange, handlePosting, ...oherProps }: any) {
    return (
        <>
            <div className="main card firstDiv">

                <div className="card-title mb-2 col-12 text-center" style={{ margin: '0 auto' }}>
                    <span style={{ fontSize: "20px" }}>Sale Configurations</span>
                </div>
                <div className="card addSalecard col-sm-12">
                    <div className="card-body" style={{ margin: '0', padding: '0', minHeight: '100vh' }}>
                        <form className="form">
                            <span className="d-flex flex-column section2 col-sm-12">

                                <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Projection" id="EProj" name="EProj" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange } />
                                <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Sale Order" id="ESO" name="ESO" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange } />
                                <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Tolerance On Sale Order" id="ETolSO" name="ETolSO" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange }/>
                                <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Soda " id="ESoda" name="ESoda" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange } />
                                <CustomeSwitch lablClass="custom-control-label col-8" label="Soda Tolerance " id="ESodaTol" name="ESodaTol" classCat="form-control custom-control-input col-3 InventoryDet"handleChange={handleChange } />
                                <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Dispatch Advice" id="EDA" name="EDA" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange} />
                                <CustomeSwitch lablClass="custom-control-label col-8" label="Enable Supplementary Sale" id="ESupSale" name="ESupSale" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange}/>
                                <CustomeSwitch lablClass="custom-control-label col-8"  label="Enable Broker / Sale Person" id="EBSP" name="EBSP" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange } />
                                <CustomeSwitch lablClass="custom-control-label col-8" label="Sale Material Center" id="ESaleMC" name="ESaleMC" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange } />
                                <CustomeSwitch lablClass="custom-control-label col-8" label="Sale Price cannot be zero" id="SalePriceZero" name="SalePriceZero" classCat="form-control custom-control-input col-3 InventoryDet" handleChange={handleChange } />
                           
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