import * as React from 'react';


class AddQcPlan extends React.Component {

    render() {
        return (
            <>
                <div className="modal fade" id="qcPlanCopy" role="dialog" aria-labelledby="qcPlanModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="qcPlanLabel">QC Plan Copy Details</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                            
                                    <> 
                                    <label style={{ margin: '0 0 0 10px', padding: '0', fontSize: '14px' }} className="form-label col-12" htmlFor="material">Material</label>
                                        <input className="form-control col-12 p-0" type="text" name="material" />
                                    </>
                               
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary">Copy</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>

                 

                <>
                    <div className="main card firstDiv">
                                <div className="text-center card-title col-12" style={{ textAlign: 'start', backgroundColor: '#8389d4' }}>
                                    <span className="row-header p-0 m-0" >Add QC Plan</span>
                                </div>

                        <div className="card-body row col-sm-12 m-0 p-0" >
                            <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                                <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                                
                                        <div className="card-body" style={{ margin: '0', padding: '0' }}>
                                            <form className="form">


                                                <span className="form-group col-sm-12" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '10px 0px' }}>
                                                <> <label style={{ margin: '0 0 0 10px', padding: '0', fontSize: '14px' }} className="form-label labl" htmlFor="series">Series</label>
                                                    <input className="form-control inp" type="text" name="series" />
                                                </>

                                                <> <label style={{ margin: '0 0 0 10px', padding: '0', fontSize: '14px' }} className="form-label labl" htmlFor="code">Code</label>
                                                    <input className="form-control inp" type="text" name="code" /></>
                                                <> <label style={{ margin: '0 0 0 10px', padding: '0', fontSize: '14px' }} className="form-label labl" htmlFor="publicationNo">Pub. No.</label>
                                                    <input className="form-control inp" type="text" name="publicationNo" />
                                                </>

                                                </span>

                                                <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' }}>
                                                    <> <label style={{ margin: '0 0 0 10px', padding: '0', fontSize: '14px' }} className="form-label labl" htmlFor="material">Material</label>
                                                    <input className="form-control inp" type="text" name="material" />
                                                    </>

                                                    <> <label style={{ margin: '0 0 0 10px', padding: '0', fontSize: '14px' }} className="form-label labl" htmlFor="description">Desc.</label>
                                                    <input className="form-control inp" type="text" name="description" /></>
                                                <div className="col-2"></div>
                                                </span>


                                        </form>
                                    
                                        </div>

                              

                                </div>

                            </div>
                            <form className="row-content form col-sm-12 pt-0">
                                <fieldset className="form-group border p-0" >
                                    <legend className="px-2" data-toggle="collapse" data-target="#validation" aria-expanded="false" aria-controls="validation" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Validation<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>

                                    <div className="collapse" id="validation">
                                        <span className="d-flex section2 col-sm-10 m-0 mb-2 pl-0 pr-0">
                                            <>
                                                <label htmlFor="validFrom" style={{ fontSize: '0.8em' }} className="form-label labl m-0">ValidFrom</label>
                                                <input type="date" name="validFrom" className="form-control inp" />
                                            </>
                                            <>
                                                <label htmlFor="validTo" style={{ fontSize: '0.8em' }} className="form-label unit labl labl2">ValidTo</label>
                                                <input type="date" name="validTo" className="form-control inp" />
                                            </>
                                        </span>

                                        
                                    </div>
                                </fieldset>
                            </form>
                            <button type="button" className="mt-3" data-toggle="modal" data-target="#qcPlanCopy">
                                QC Plan Copy
                            </button>
                            <hr/>
                          
                                <div className="col-sm-12 addQcPlan container container-fluid container-lg mt-3" style={{ overflowX: 'auto', overflowY: 'auto' }}>

                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', margin: '0', padding: '0', width: '100%' }}>
                                        <fieldset className="form-group border p-0">
                                            <legend className="px-2" style={{ fontSize: '15px', margin: '0', padding: '0' }}>Specification</legend>
                                    <table id="dtHorizontalExample" className="table table-striped table-bordered table-sm" style={{
                                        width: "100%"
                                    }}>
                                        <thead>
                                            <tr>
                                                <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>S.No</th>
                                                <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Quality Parameter(MIC)</th>
                                                <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Desc.</th>
                                                <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Sampling Plan</th>
                                                <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>UOM</th>
                                                <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Target Value</th>
                                                <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Lower Value</th>
                                                <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Upper Value</th>
                                                <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Narration</th>
                                                <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>QC Type</th>
                                                <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Measuring Method</th>
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
                                                <td></td>
                                                <td></td>
                                            </tr>

                                        </tbody>
                                    </table>

                                        </fieldset>
                                    </div>
                                </div>
                           

                            
                        </div>
                      
                    </div>
                    <div className="btn-group col-12 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0">Save</button>
                        <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} className="btn btn-success mr-2 ml-2 pl-0 pr-0 ">Save & Submit</button>
                        <button type="button" style={{ border: '2px solid red', letterSpacing: 3 }} className="btn btn-danger pl-0 pr-0">Quit</button>
                    </div>
                </>

       
            </>
            );
    }
}

export default AddQcPlan;