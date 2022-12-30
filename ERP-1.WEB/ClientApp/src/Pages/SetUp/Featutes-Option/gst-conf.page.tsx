import * as React from 'react';
import CustomInput, { CustomSelect, InputList } from '../../../components/custom-input/custom-input.component';
import CustomeSwitch from '../../../components/CustomSwitch/custom-switch.component';

export default function GSTConf_Page({ handleChange, handlePosting, defConf, HandleIpSelect, ...otherProps}: any) {
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
 

                    <span className="d-flex section2 mb-2 col-sm-4">

                        <CustomeSwitch lablClass="custom-control-label col-9" label="Enable GST" id="eGst" name="eGst" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.eGst } />
                    </span>

                    <span className="d-flex section2 col-sm-12">
                        <>
                            <InputList
                                label="Type"
                                name="taxtype"
                                id="taxtype"
                                ipType="text"
                                dataArray={[{ code: 1, name: 'VAT' }, { code: 2, name: 'GST' }]}
                                change={HandleIpSelect}
                                classCategory="form-control inp mb-2 InventoryDet ipselect"
                                s="20%"
                                lablCat="form-label labl labl2"
                                ipTitle="select type"
                                placeholder="Select From Type List"
                                default={defConf.taxtype} />

                        </>
                   
                    </span>
                    <span className="d-flex section2 col-sm-12">
                        <CustomInput
                            change={handleChange}
                            name="gstint"
                            default={defConf.gstint }
                            classCategory="form-control inp mb-2 InventoryDet"
                            ipType="text"
                            label="GSTIN"
                            ipTitle="Enter GSTIN"
                            dataArray={[]}
                        />
                    </span>
                    <span className="d-flex section2 mb-2 col-sm-4">
                        <CustomeSwitch lablClass="custom-control-label col-9" label="E-Way Bill Required" id="ewbill" name="ewbill" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.ewbill} />
                    </span>
                    <span className="d-flex section2 mb-2 col-sm-4">
                        <CustomeSwitch lablClass="custom-control-label col-9" label="E-Invoice Required" id="einv" name="einv" classCat="form-control custom-control-input col-3 InventoryDet switch" handleChange={handleChange} default={defConf.einv } />
                    </span>
                    <span className="d-flex section2 col-sm-12">
                        <>
                            <InputList
                                label="Default GST Category"
                                ipType="text"
                                name="dgst"
                                id="dgst"
                                dataArray={[{ code: 1, name: 'Category1' }, { code: 2, name: 'Category2' }]}
                                change={HandleIpSelect}
                                classCategory="form-control inp mb-2 InventoryDet ipselect"
                                s="20%"
                                lablCat="form-label labl labl2"
                                ipTitle="Select Default GST Category List"
                                placeholder="Select From Default GST Category List"
                                default={defConf.dgst} />

                        </>
                       
                       

                    </span>
                    <span className="d-flex section2 col-sm-12">
                        <>
                            <InputList
                                label="Transporter details in local"
                                ipType="text"
                                name="tdsp"
                                id="tdsp"
                                dataArray={[{ code: 1, name: 'Sale' }, { code: 2, name: 'Purchase' }]}
                                change={HandleIpSelect}
                                classCategory="form-control inp mb-2 ipselect InventoryDet"
                                s="20%"
                                lablCat="form-label labl labl2"
                                ipTitle="select From Transporter Det. List"
                                placeholder="Select From Transporter Det. List"
                                default={defConf.tdsp} />

                        </>
                    </span>
                    <span className="d-flex section2 col-sm-12">
                        <CustomInput
                            name="mdhsn"
                            classCategory="form-control inp mb-2 InventoryDet"
                            ipType="number"
                            change={handleChange}
                            label="Minimum Digits for HSN"
                            ipTitle="Enter Minimum Digits for HSN Code"
                            dataArray={[]}
                            default={defConf.mdhsn }
                        />

                    </span>
                    <div className="btn-group col-12 mt-3" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3, width: "100px" }} className="btn btn-info pl-0 pr-0 col-md-1 col-xs-6" onClick={handlePosting}>Save</button>

            </div>
            
                </form>
            </div>
        </>
    );
}

