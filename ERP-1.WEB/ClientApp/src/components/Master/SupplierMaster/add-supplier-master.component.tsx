import * as React from 'react';
import '../masterStyle.css';

class AddSupplierMaster extends React.Component {
    render() {
        return (
            <>
                <div className="main card firstDiv">

                    <div className="text-center card-title col-12" style={{ textAlign: 'start', backgroundColor: '#8389d4' }}>
                        <span className="row-header p-0 m-0" >Add Supplier Master</span>
                    </div>
                    <div className="card-body row col-sm-12 m-0 p-0" >
                        <form className="row-content form col-sm-12 pt-0">
                            <fieldset className="form-group border p-0" >
                                <legend className="px-2" data-toggle="collapse" data-target="#genDetails" aria-expanded="true" aria-controls="genDetails" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>General Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>

                                <div className="collapse show" id="genDetails">
                                    <span className="d-flex section2 col-sm-10">
                                        <>
                                            <label htmlFor="series" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Series</label>
                                            <input type="text" name="series" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="delTerm" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Delivery Term</label>
                                            <input type="text" name="delTerm" className="form-control inp" />
                                        </>
                                    </span>

                                    <span className="d-flex section2 col-sm-10">
                                        <>
                                            <label htmlFor="supplierCode" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Supplier Code</label>
                                            <input type="text" name="supplierCode" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="majProd" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Major Products</label>
                                            <input type="text" name="majProd" className="form-control inp" />
                                        </>
                                    </span>

                                    <span className="d-flex section2 col-sm-10">
                                        <>
                                            <label htmlFor="supplierName" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Supplier Name</label>
                                            <input type="text" name="supplierName" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="payTerm" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Payment Term</label>
                                            <input type="text" name="payTerm" className="form-control inp" />
                                        </>
                                    </span>

                                    <span className="d-flex section2 col-sm-10">
                                        <>
                                            <label htmlFor="printName" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Print Name</label>
                                            <input type="text" name="printName" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="Opnbal" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Opening Bal.</label>
                                            <input type="text" name="Opnbal" className="form-control inp" />
                                        </>
                                    </span>

                                    <span className="d-flex section2 col-sm-10">
                                        <>
                                            <label htmlFor="supplierGrp" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Supplier Group</label>
                                            <input type="text" name="supplierGrp" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="excisable" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Excisable</label>
                                            <input type="text" name="excisable" className="form-control inp" />
                                        </>
                                    </span>
                                </div>
                            </fieldset>
                        </form>

                        <form className="form col-sm-12 row-content card-body pt-0 pb-0">
                            <fieldset className="form-group border p-0">
                                <legend className="px-2" data-toggle="collapse" data-target="#personalDet" aria-expanded="false" aria-controls="personalDet" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Personal Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0    96v320c0  35.34 28.65 64 64  64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2    230.7 352 224   352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120   192h208c9.531  0 18.19 5.656   21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>
                                <div className="collapse" id="personalDet">

                                    <span className="d-flex section2 col-sm-10">
                                        <>
                                            <label htmlFor="contPerson" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Cont. Person</label>
                                            <input type="text" name="contPerson" className="form-control inp" />
                                        </>

                                        <>
                                            <label htmlFor="TelNo" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Tel No.</label>
                                            <input type="text" name="TelNo" className="form-control inp" />
                                        </>


                                    </span>

                                    <span className="d-flex section2 col-sm-10">
                                        <>
                                            <label htmlFor="desg" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Desig.</label>
                                            <input type="text" name="desg" className="form-control inp" />
                                        </>

                                        <>
                                            <label htmlFor="mob" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Mobile</label>
                                            <input type="text" name="mob" className="form-control inp" />
                                        </>
                                    </span>

                                    <span className="d-flex section2 col-sm-10">
                                        <>
                                            <label htmlFor="cheifExe" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Cheif Exec.</label>
                                            <input type="text" name="cheifExe" className="form-control inp" />
                                        </>

                                        <>
                                            <label htmlFor="email" style={{ fontSize: '0.8em' }} className="form-label labl2 labl ">Email</label>
                                            <input type="text" name="email" className="form-control inp" />
                                        </>

                                    </span>

                                    <span className="d-flex section2 col-sm-10">
                                        <>
                                            <label htmlFor="cheifExeTelNo" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Cheif Exe Tel No.</label>
                                            <input type="text" name="cheifExeTelNo" className="form-control inp" />
                                        </>

                                       
                                    </span>
                                    <span className="d-flex section2 col-sm-10">
                                        <>
                                            <label htmlFor="mulCurr" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Mul. Curr.</label>
                                            <input type="text" name="mulCurr" className="form-control inp" />
                                            <div className="col-1"></div>
                                        </>
                                    </span>
                                </div>
                            </fieldset>
                        </form>
                        <div className="row row-content col-12 " style={{ margin: '1em 0%', backgroundColor:'whitesmoke' }}>
                            <span className="d-flex m-0 p-0">
                                <>
                                    <label htmlFor="zone" style={{ fontSize: '0.8em', width: '100%', marginLeft: '2em' }} className="form-label">Address. Options</label>
                                    <input type="text" name="zone" className="form-control" />
                                </>
                             
                            </span>
                        </div>

                        <form className="form col-sm-12 row-content card-body pt-0">
                            <fieldset className="form-group border p-0">
                                <legend className="px-2" data-toggle="collapse" data-target="#contAdd" aria-expanded="false" aria-controls="personalDet" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Corporate / Contact Address<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0    96v320c0  35.34 28.65 64 64  64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2    230.7 352 224   352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120   192h208c9.531  0 18.19 5.656   21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>
                                <div className="collapse" id="contAdd">

                                    <span className="d-flex section2 col-sm-10">
                                        <>
                                            <label htmlFor="add" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Address</label>
                                            <input type="text" name="add" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="zone" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Zone</label>
                                            <input type="text" name="zone" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="city" style={{ fontSize: '0.8em' }} className="form-label labl  labl2">City</label>
                                            <input type="text" name="city" className="form-control inp" />
                                        </>


                                    </span>

                                    <span className="d-flex section2 col-sm-10">
                                        <>
                                            <label htmlFor="state" style={{ fontSize: '0.8em' }} className="form-label labl labl2">State</label>
                                            <input type="text" name="state" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="country" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Country</label>
                                            <input type="text" name="country" className="form-control inp" />
                                        </>

                                        <>
                                            <label htmlFor="pin" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Pin</label>
                                            <input type="text" name="pin" className="form-control inp" />
                                        </>
                                    </span>

                                    <span className="d-flex section2 col-sm-10">
                                        <>
                                            <label htmlFor="telNo" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Tel No.</label>
                                            <input type="text" name="telNo" className="form-control inp" />
                                        </>
                                       
                                     
                                    </span>

                                    <span className="d-flex section2 col-sm-10">
                                        <>
                                            <label htmlFor="station" style={{ fontSize: '0.8em', width: '11%' }} className="form-label labl labl2">Station</label>
                                            <input type="text" name="station" className="form-control" style={{ width: '20%' }} />
                                            <div className="col-2"></div>
                                        </>
                                    </span>

                                </div>
                            </fieldset>
                        </form>

                        <hr style={{ margin: '0', padding: '0' }} />
                        <div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">
                            <div className="card-body col-sm-12  container container-fluid container-lg" style={{ overflowX: 'auto', overflowY: 'auto' }}>

                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0', width: '100%' }}>
                                    <span className="card-title" style={{ fontSize: '15px', margin: '0', padding: '0' }}>Bank Details</span>
                                </div>
                                <table id="dtHorizontalExample" className="table table-striped table-bordered table-sm" style={{
                                    width: "100%"
                                }}>
                                    <thead>
                                        <tr>
                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>S.No</th>
                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Name of the Bank</th>
                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Branch</th>
                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>A/C No.</th>
                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>A/C Type</th>
                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Swift Code</th>
                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>IFSC Code</th>
                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Currency</th>
                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Country</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>1</th>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th>2</th>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th>3</th>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <hr style={{ margin: '0', padding: '0' }} />

                        <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                          
                            <div className="card col-sm-6" style={{ padding: '0', margin: '0' }}>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>
                                    <span className="card-title" style={{ fontSize: '15px', margin: '0', padding: '0' }}>Employee Information</span>
                                </div>

                                <div className="card-body col-12" style={{ margin: '0', padding: '0' }}>

                                    <span className="d-flex col-sm-10 m-0 pl-0 pr-0">
                                        <>
                                            <label htmlFor="empName" style={{ fontSize: '0.8em' }} className="form-label labl2 labl">Name</label>
                                            <input type="text" name="empName" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="date" style={{ fontSize: '0.8em' }} className="form-label labl2 labl">Date</label>
                                            <input type="date" style={{ fontSize: '0.8em' }} name="date" className="form-control inp" />
                                        </>

                                    </span>
                                    <span className="d-flex col-sm-10 m-0 pl-0 pr-0">
                                        <>
                                            <label htmlFor="position" style={{ fontSize: '0.8em' }} className="form-label labl2 labl">Position</label>
                                            <input type="text" name="position" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="place" style={{ fontSize: '0.8em' }} className="form-label labl2 labl">Place</label>
                                            <input type="date" style={{ fontSize: '0.8em' }} name="place" className="form-control inp" />
                                        </>

                                    </span>

                                    <span className="d-flex col-sm-10 m-0 pl-0 pr-0">
                                        <>
                                            <label htmlFor="docs" style={{ fontSize: '0.8em' }} className="form-label ml-2">Upload Docs</label>
                                            <input type="file" name="docs" />
                                        </>
                                        <span>
                                            <button type="button">Remove</button>
                                        </span>


                                    </span>
                                </div>

                            </div>
                        </div>


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

export default AddSupplierMaster;