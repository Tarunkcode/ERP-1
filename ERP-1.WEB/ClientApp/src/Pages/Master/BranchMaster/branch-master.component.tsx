import * as React from 'react';
import { MasterInput2 } from '../../../components/custom-input/custom-input.component';


class BranchMaster extends React.Component {
    render() {
        return (
            <>
                <div className="main card firstDiv">

                    <div className="text-center card-title col-12" style={{ textAlign: 'start', backgroundColor: '#8389d4' }}>
                        <span className="row-header p-0 m-0" >Branch Master</span>
                    </div>
                    <div className="card-body row col-sm-12 m-0 p-0" >

                        <form className="row-content form col-sm-12 pt-0">
                            <fieldset className="form-group border p-0" >
                                <legend className="px-2" data-toggle="collapse" data-target="#branch" aria-expanded="true" aria-controls="branch" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Branch Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>

                                <div className="collapse show" id="branch">
                                    <span className="d-flex section2 col-sm-12">
                                        <>
                                            <MasterInput2 name="name" label="Name" ipTitle="Enter Name" ipType="text" classCategory="form-control col-4 inp" />

                                        </>

                                    </span>
                                    <span className="d-flex section2 col-sm-12">

                                        <MasterInput2 name="code" label="Code" ipTitle="Enter Code" ipType="text" classCategory="form-control col-4 inp" />
                                        <span className="col-1 m-0"></span>
                                        <MasterInput2 name="matCenter" label="MatCenter" ipTitle="Enter MatCenter" ipType="text" classCategory="form-control col-4 inp" />
                                    </span>

                                    <span className="d-flex section2 col-sm-12">

                                        <MasterInput2 name="add1" label="Address" ipTitle="Enter Address" ipType="text" classCategory="form-control col-4 inp" />
                                        <span className="col-1 m-0"></span>
                                        <MasterInput2 name="add2" label="" ipTitle="Enter Address" ipType="text" classCategory="form-control col-4 inp" />
                                    </span>

                                    <span className="d-flex section2 col-sm-12">

                                        <MasterInput2 name="add3" label="" ipTitle="Enter Address" ipType="text" classCategory="form-control col-4 inp" />
                                        <span className="col-1 m-0"></span>
                                        <MasterInput2 name="add4" label="" ipTitle="Enter Address" ipType="text" classCategory="form-control col-4 inp" />
                                    </span>

                                    <span className="d-flex section2 col-sm-12">

                                        <MasterInput2 name="pan" label="IT PAN" ipTitle="Enter IT PAN" ipType="text" classCategory="form-control col-4 inp" />
                                        <span className="col-1 m-0"></span>
                                        <MasterInput2 name="tel" label="Tel. No." ipTitle="Enter Tel. No." ipType="text" classCategory="form-control col-4 inp" />
                                    </span>
                                    <span className="d-flex section2 col-sm-12">

                                        <MasterInput2 name="email" label="E-Mail" ipTitle="Enter E-Mail" ipType="text" classCategory="form-control col-4 inp" />
                                        <span className="col-1 m-0"></span>
                                        <MasterInput2 name="fax" label="Fax" ipTitle="Enter Fax" ipType="text" classCategory="form-control col-4 inp" />
                                    </span>

                                    <span className="d-flex section2 col-sm-12">

                                        <MasterInput2 name="State" label="State" ipTitle="Enter State" ipType="text" classCategory="form-control col-4 inp" />
                                        <span className="col-1 m-0"></span>
                                        <MasterInput2 name="statecode" label="State Code" ipTitle="Enter State Code" ipType="text" classCategory="form-control col-4 inp" />
                                    </span>


                                </div>
                            </fieldset>
                        </form>

                        {/*<form className="form col-sm-12 row-content card-body pt-0 pb-0">*/}
                        {/*    <fieldset className="form-group border p-0">*/}
                        {/*        <legend className="px-2" data-toggle="collapse" data-target="#addDet" aria-expanded="false" aria-controls="addDet" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Address Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0    96v320c0  35.34 28.65 64 64  64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2    230.7 352 224   352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120   192h208c9.531  0 18.19 5.656   21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>*/}
                        {/*        <div className="collapse" id="addDet">*/}



                        {/*        </div>*/}
                        {/*    </fieldset>*/}
                        {/*</form>*/}

                        <form className="form col-sm-12 row-content card-body pt-0 pb-0">
                            <fieldset className="form-group border p-0">
                                <legend className="px-2" data-toggle="collapse" data-target="#vatGst" aria-expanded="false" aria-controls="vatGst" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>VAT/GST Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0    96v320c0  35.34 28.65 64 64  64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2    230.7 352 224   352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120   192h208c9.531  0 18.19 5.656   21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>
                                <div className="collapse" id="vatGst">

                                    <span className="d-flex section2 col-sm-12">

                                        <MasterInput2 name="cstr" label="CST Reg. No." ipTitle="Enter CST Reg. No." ipType="text" classCategory="form-control col-4 inp" />
                                        <span className="col-1 m-0"></span>
                                        <MasterInput2 name="gst" label="GST No." ipTitle="Enter GST No." ipType="text" classCategory="form-control col-4 inp" />
                                    </span>
                                    <span className="d-flex section2 col-sm-12">

                                        <MasterInput2 name="tin" label="TIN No." ipTitle="Enter TIN No." ipType="text" classCategory="form-control col-4 inp" />
                                        <span className="col-1 m-0"></span>
                                        <MasterInput2 name="cin" label="CIN No." ipTitle="Enter CIN No." ipType="text" classCategory="form-control col-4 inp" />
                                    </span>

                                </div>
                            </fieldset>
                        </form>

                        {/*<form className="form col-sm-12 row-content card-body pt-0 pb-0">*/}
                        {/*    <fieldset className="form-group border p-0">*/}
                        {/*        <legend className="px-2" data-toggle="collapse" data-target="#exciseDet" aria-expanded="false" aria-controls="exciseDet" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Excise Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0    96v320c0  35.34 28.65 64 64  64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2    230.7 352 224   352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120   192h208c9.531  0 18.19 5.656   21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>*/}
                        {/*        <div className="collapse" id="exciseDet">*/}

                        {/*            <span className="d-flex section2 col-sm-12">*/}

                        {/*                <MasterInput2 name="reg" label="Excise Reg. No." ipTitle="Enter Excise Reg. No." ipType="text" classCategory="form-control col-4 inp" />*/}
                        {/*                <span className="col-1 m-0"></span>*/}
                        {/*                <MasterInput2 name="plano" label="PLA No" ipTitle="Enter PLA No" ipType="text" classCategory="form-control col-4 inp" />*/}
                        {/*            </span>*/}

                        {/*            <span className="d-flex section2 col-sm-12">*/}

                        {/*                <MasterInput2 name="division" label="Division" ipTitle="Enter Division" ipType="text" classCategory="form-control col-4 inp" />*/}
                        {/*                <span className="col-1 m-0"></span>*/}
                        {/*                <MasterInput2 name="ecc" label="ECC Code" ipTitle="Enter ECC Code" ipType="text" classCategory="form-control col-4 inp" />*/}
                        {/*            </span>*/}


                        {/*            <span className="d-flex section2 col-sm-12">*/}

                        {/*                <MasterInput2 name="Range" label="Range" ipTitle="Enter Division" ipType="text" classCategory="form-control col-4 inp" />*/}

                        {/*            </span>*/}


                        {/*        </div>*/}
                        {/*    </fieldset>*/}
                        {/*</form>*/}

                        {/*<form className="form col-sm-12 row-content card-body pt-0 pb-0">*/}
                        {/*    <fieldset className="form-group border p-0">*/}
                        {/*        <legend className="px-2" data-toggle="collapse" data-target="#serviceTax" aria-expanded="false" aria-controls="serviceTax" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Service Tax Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0    96v320c0  35.34 28.65 64 64  64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2    230.7 352 224   352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120   192h208c9.531  0 18.19 5.656   21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>*/}
                        {/*        <div className="collapse" id="serviceTax">*/}

                        {/*            <span className="d-flex section2 col-sm-12">*/}

                        {/*                <MasterInput2 name="regno" label="Registration No." ipTitle="Enter Registration No." ipType="text" classCategory="form-control col-4 inp" />*/}
                        {/*                <span className="col-1 m-0"></span>*/}
                        {/*                <MasterInput2 name="pcn" label="Permises Code NO" ipTitle="Enter Permises Code NO" ipType="text" classCategory="form-control col-4 inp" />*/}
                        {/*            </span>*/}


                        {/*            <span className="d-flex section2 col-sm-12">*/}

                        {/*                <MasterInput2 name="stcn" label="STC No." ipTitle="Enter STC No." ipType="text" classCategory="form-control col-4 inp" />*/}

                        {/*            </span>*/}

                        {/*        </div>*/}
                        {/*    </fieldset>*/}
                        {/*</form>*/}

                        <form className="form col-sm-12 row-content card-body pt-0 pb-0">
                            <fieldset className="form-group border p-0">
                                <legend className="px-2" data-toggle="collapse" data-target="#bank" aria-expanded="false" aria-controls="bank" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Bank Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0    96v320c0  35.34 28.65 64 64  64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2    230.7 352 224   352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120   192h208c9.531  0 18.19 5.656   21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>
                                <div className="collapse" id="bank">

                                    <span className="d-flex section2 col-sm-12">

                                        <MasterInput2 name="bankname" label="Bank Name" ipTitle="Enter Bank Name" ipType="text" classCategory="form-control col-4 inp" />
                                        <span className="col-1 m-0"></span>
                                        <MasterInput2 name="bbranch" label="Bank Branch" ipTitle="Enter Bank Branch" ipType="text" classCategory="form-control col-4 inp" />
                                    </span>

                                    <span className="d-flex section2 col-sm-12">

                                        <MasterInput2 name="accno" label="Account No." ipTitle="Enter Account No." ipType="text" classCategory="form-control col-4 inp" />
                                        <span className="col-1 m-0"></span>
                                        <MasterInput2 name="ifsc" label="IFSC Code" ipTitle="Enter IFSC Code" ipType="text" classCategory="form-control col-4 inp" />
                                    </span>

                                    <span className="d-flex section2 col-sm-12">

                                        <MasterInput2 name="insurance" label="Insurance No." ipTitle="Enter Insurance No." ipType="text" classCategory="form-control col-4 inp" />

                                    </span>

                                </div>
                            </fieldset>
                        </form>

                    </div>
                    <hr style={{ margin: '0', padding: '0' }} />
                </div>
                <div className="btn-group col-6 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', float: 'right' }}>
                    <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0">Save</button>
                    <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} onClick={() => { }} className="btn btn-success mr-2 ml-2 pl-0 pr-0 ">Save & Submit</button>
                    <button type="button" style={{ border: '2px solid orange', letterSpacing: 3 }} className="btn btn-warning pl-0 pr-0">Quit</button>
                </div>
            </>
        );
    }
}

export default BranchMaster;