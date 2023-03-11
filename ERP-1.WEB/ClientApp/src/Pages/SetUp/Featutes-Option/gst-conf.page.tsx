import * as React from 'react';
import DatalistInput from 'react-datalist-input';
import CustomInput, { CustomSelect, InputList, MasterInput3 } from '../../../components/custom-input/custom-input.component';
import CustomeSwitch from '../../../components/CustomSwitch/custom-switch.component';

export default function GSTConf_Page({ handleChange, LoadedList, handlePosting, defConf, SelectList, ...otherProps }: any) {
    const dataArr = [{ code: 1, name: 'VAT' }, { code: 2, name: 'GST' }];
    return (
        <>
            <div className="main card firstDiv">
                <div
                    className="text-center card-title col-12"
                    style={{ textAlign: "start", backgroundColor: "#8389d4" }}
                >
                    <span className="row-header p-0 m-0">GST Configuration</span>
                </div>
                <form className="row-content form col-sm-12 pt-0">
 

                    <span className="d-flex section2 col-sm-12">
                     
                        <>
                            <label htmlFor="taxtype" style={{ fontSize: '1rem' }} className="form-label labl col-2 ml-2 mr-2 labl2">Type</label>
                        </>
                        <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                            <DatalistInput

                                className="d-flex col-12 m-0 p-0"
                                inputProps={{ className: 'form-control inp  datalist col-12  InventoryDet', name: 'taxtype' }}
                                listboxProps={{ className: 'text-left mt-5' }}
                               
                                onSelect={(item: any) => SelectList(item)}
                                items={dataArr}
                            />

                        </span>
                        <span className="col-1 m-0"></span>

                        <CustomeSwitch lablClass="custom-control-label col-8" label="Enable GST" id="eGst" name="eGst" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.eGst} />

                    </span>
                    <span className="d-flex section2 col-sm-12">
                       
                        <MasterInput3 name="gstint" label="GSTIN" defaultt={defConf.gstint } ipTitle="Enter GSTIN" ipType="text" classCategory="form-control col-4 inp InventoryDet" handleChange={ handleChange}/>
                        <span className="col-1 m-0"></span>
                        <CustomeSwitch lablClass="custom-control-label col-8" label="E-Way Bill Required" id="ewbill" name="ewbill" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.ewbill} />
                    </span>
                   
                    <span className="d-flex section2 col-sm-12">
                        <>
                            <label htmlFor="dgst" style={{ fontSize: '1rem' }} className="form-label labl col-2 ml-2 mr-2 labl2">Def. GST Category</label>
                        </>
                        <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                            <DatalistInput

                                className="d-flex col-12 m-0 p-0"
                                inputProps={{ className: 'form-control inp datalist col-12  InventoryDet', name: 'dgst' }}
                                listboxProps={{ className: 'text-left mt-5' }}
                               
                                onSelect={(item: any) => SelectList(item)}
                                items={LoadedList}
                            />

                        </span>
                        <span className="col-1 m-0"></span>

                        <CustomeSwitch lablClass="custom-control-label col-8" label="E-Invoice Required" id="einv" name="einv" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.einv } />
                    </span>
                   
                    <span className="d-flex section2 col-sm-12">
                        <MasterInput3 name="mdhsn" label="Min. Digits for HSN" defaultt={defConf.mdhsn} ipTitle="Enter Minimum Digits for HSN Code" ipType="number" classCategory="form-control col-4 inp InventoryDet select" handleChange={handleChange} />
                          <span className="col-1 m-0"></span>
                          <CustomeSwitch lablClass="custom-control-label col-8" label="Transporter details in local" id="tdsp" name="tdsp" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.tdsp} />
                     
                    </span>
                   
                    <div className="btn-group col-12 mt-3" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3, width: "100px" }} className="btn btn-success pl-0 pr-0 col-md-1 col-xs-6" onClick={handlePosting}>Save</button>

            </div>
            
                </form>
            </div>
        </>
    );
}

