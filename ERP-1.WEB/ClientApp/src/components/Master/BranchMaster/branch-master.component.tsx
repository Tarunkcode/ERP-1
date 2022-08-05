import * as React from 'react';


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
                                    <span className="d-flex section2 col-sm-10">
                                        <>
                                            <label htmlFor="series" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Name</label>
                                            <input type="text" name="series" className="form-control inp" />
                                        </>
                                       
                                    </span>

                                    <span className="d-flex section2 col-sm-10">
                                        <>
                                            <label htmlFor="series" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Alias</label>
                                            <input type="text" name="custCode" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="majProd" style={{ fontSize: '0.8em' }} className="form-label labl labl2">MatCenter</label>
                                            <input type="text" name="delTerm" className="form-control inp" />
                                        </>
                                    </span>
                                </div>
                            </fieldset>
                        </form>

                        <form className="form col-sm-12 row-content card-body pt-0 pb-0">
                            <fieldset className="form-group border p-0">
                                <legend className="px-2" data-toggle="collapse" data-target="#addDet" aria-expanded="false" aria-controls="addDet" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Address Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0    96v320c0  35.34 28.65 64 64  64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2    230.7 352 224   352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120   192h208c9.531  0 18.19 5.656   21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>
                                <div className="collapse" id="addDet">

                                    <span className="d-flex section2 col-sm-10">
                                        <>
                                            <label htmlFor="contPerson" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Address-1</label>
                                            <input type="text" name="contPerson" className="form-control inp" />
                                        </>

                                        <>
                                            <label htmlFor="TelNo" style={{ fontSize: '0.8em' }} className="form-label labl labl2">IT PAN</label>
                                            <input type="text" name="TelNo" className="form-control inp" />
                                        </>


                                    </span>

                                    <span className="d-flex section2 col-sm-10">
                                        <>
                                            <label htmlFor="desg" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Add-2.</label>
                                            <input type="text" name="desg" className="form-control inp" />
                                        </>

                                        <>
                                            <label htmlFor="mob" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Tel. No.</label>
                                            <input type="text" name="mob" className="form-control inp" />
                                        </>
                                    </span>

                                    <span className="d-flex section2 col-sm-10">
                                        <>
                                            <label htmlFor="cheifExe" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Add.3</label>
                                            <input type="text" name="cheifExe" className="form-control inp" />
                                        </>

                                        <>
                                            <label htmlFor="fax" style={{ fontSize: '0.8em' }} className="form-label labl labl2">E-Mail</label>
                                            <input type="text" name="fax" className="form-control inp" />
                                        </>
                                    </span>

                                    <span className="d-flex section2 col-sm-10">
                                        <>
                                            <label htmlFor="cheifExeTelNo" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Add.4</label>
                                            <input type="text" name="cheifExeTelNo" className="form-control inp" />
                                        </>

                                        <>
                                            <label htmlFor="email" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Fax</label>
                                            <input type="text" name="email" className="form-control inp" />
                                        </>
                                    </span>
                                    <span className="d-flex section2 col-sm-10">
                                        <>
                                            <label htmlFor="mulCurr" style={{ fontSize: '0.8em' }} className="form-label labl labl2">State</label>
                                            <input type="text" name="mulCurr" className="form-control inp" />
                                            <div className="col-1"></div>
                                        </>
                                       
                                        <>
                                            <label htmlFor="email" style={{ fontSize: '0.8em' }} className="form-label labl labl2">State Code</label>
                                            <input type="text" name="email" className="form-control inp" />
                                        </>
                                    </span>
                                </div>
                            </fieldset>
                        </form>

                        <form className="form col-sm-12 row-content card-body pt-0 pb-0">
                            <fieldset className="form-group border p-0">
                                <legend className="px-2" data-toggle="collapse" data-target="#vatGst" aria-expanded="false" aria-controls="vatGst" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>VAT/GST Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0    96v320c0  35.34 28.65 64 64  64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2    230.7 352 224   352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120   192h208c9.531  0 18.19 5.656   21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>
                                <div className="collapse" id="vatGst">

                                    <span className="d-flex section2 col-sm-10">
                                        <>
                                            <label htmlFor="add" style={{ fontSize: '0.8em' }} className="form-label labl labl2">CST Reg. No.</label>
                                            <input type="text" name="add" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="zone" style={{ fontSize: '0.8em' }} className="form-label labl labl2">GST No.</label>
                                            <input type="text" name="zone" className="form-control inp" />
                                        </>
                                       

                                    </span>

                                    <span className="d-flex section2 col-sm-10">
                                        <>
                                            <label htmlFor="state" style={{ fontSize: '0.8em' }} className="form-label labl labl2">TIN No.</label>
                                            <input type="text" name="state" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="country" style={{ fontSize: '0.8em' }} className="form-label labl labl2">CIN No.</label>
                                            <input type="text" name="country" className="form-control inp" />
                                        </>

                                    
                                    </span>

                                </div>
                            </fieldset>
                        </form>

                        <form className="form col-sm-12 row-content card-body pt-0 pb-0">
                            <fieldset className="form-group border p-0">
                                <legend className="px-2" data-toggle="collapse" data-target="#exciseDet" aria-expanded="false" aria-controls="exciseDet" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Excise Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0    96v320c0  35.34 28.65 64 64  64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2    230.7 352 224   352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120   192h208c9.531  0 18.19 5.656   21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>
                                <div className="collapse" id="exciseDet">

                                    <span className="d-flex section2 col-sm-10">
                                        <>
                                            <label htmlFor="add" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Excise Reg. No.</label>
                                            <input type="text" name="add" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="zone" style={{ fontSize: '0.8em' }} className="form-label labl labl2">PLA No</label>
                                            <input type="text" name="zone" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="city" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Division</label>
                                            <input type="text" name="city" className="form-control inp" />
                                        </>


                                    </span>

                                    <span className="d-flex section2 col-sm-10">
                                        <>
                                            <label htmlFor="state" style={{ fontSize: '0.8em' }} className="form-label labl labl2">ECC Code</label>
                                            <input type="text" name="state" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="country" style={{ fontSize: '0.8em', marginLeft: '2%' }} className="form-label labl labl2">Range</label>
                                            <input type="text" name="country" className="form-control inp" />
                                        </>

                                 
                                    </span>

                                  
                                </div>
                            </fieldset>
                        </form>

                        <form className="form col-sm-12 row-content card-body pt-0 pb-0">
                            <fieldset className="form-group border p-0">
                                <legend className="px-2" data-toggle="collapse" data-target="#serviceTax" aria-expanded="false" aria-controls="serviceTax" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Service Tax Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0    96v320c0  35.34 28.65 64 64  64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2    230.7 352 224   352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120   192h208c9.531  0 18.19 5.656   21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>
                                <div className="collapse" id="serviceTax">

                                    <span className="d-flex section2 col-sm-10">
                                        <>
                                            <label htmlFor="add" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Registration No.</label>
                                            <input type="text" name="add" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="zone" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Permises Code NO</label>
                                            <input type="text" name="zone" className="form-control inp" />
                                        </>
                                       
                                    </span>

                                    <span className="d-flex section2 col-sm-10">
                                        <>
                                            <label htmlFor="state" style={{ fontSize: '0.8em' }} className="form-label labl labl2">STC No.</label>
                                            <input type="text" name="state" className="form-control inp" />
                                        </>
                                      
                                    </span>

                                </div>
                            </fieldset>
                        </form>

                        <form className="form col-sm-12 row-content card-body pt-0 pb-0">
                            <fieldset className="form-group border p-0">
                                <legend className="px-2" data-toggle="collapse" data-target="#bank" aria-expanded="false" aria-controls="bank" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Bank Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0    96v320c0  35.34 28.65 64 64  64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2    230.7 352 224   352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120   192h208c9.531  0 18.19 5.656   21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>
                                <div className="collapse" id="bank">

                                    <span className="d-flex section2 col-sm-10">
                                        <>
                                            <label htmlFor="add" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Bank Name</label>
                                            <input type="text" name="add" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="zone" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Bank Branch</label>
                                            <input type="text" name="zone" className="form-control inp" />
                                        </>
                                       
                                    </span>

                                    <span className="d-flex section2 col-sm-10">
                                        <>
                                            <label htmlFor="state" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Account No.</label>
                                            <input type="text" name="state" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="country" style={{ fontSize: '0.8em' }} className="form-label labl labl2">IFSC Code</label>
                                            <input type="text" name="country" className="form-control inp" />
                                        </>

                                      
                                    </span>

                                    <span className="d-flex section2 col-sm-10">
                                        <>
                                            <label htmlFor="telNo" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Insurance No.</label>
                                            <input type="text" name="telNo" className="form-control inp" />
                                        </>
                                     
                                    </span>

                                </div>
                            </fieldset>
                        </form>

                    </div>
                    <hr style={{ margin: '0', padding: '0' }} />
                </div>
                <div className="btn-group col-12 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0">Save</button>
                    <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} className="btn btn-success mr-2 ml-2 pl-0 pr-0 ">Save & Submit</button>
                    <button type="button" style={{ border: '2px solid red', letterSpacing: 3 }} className="btn btn-danger pl-0 pr-0">Quit</button>
                </div>
            </>
            );
    }
}

export default BranchMaster;