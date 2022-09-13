import * as React from 'react';
import UnderConstruction from '../../under-construction';
const ProductionIndent = () => {
    return (
        <>
            <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                <div className="row row-content col-sm-12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>

                    <span className="card-title" style={{
                        fontSize: '15px', color: 'white', padding: '0',
                        margin: '0'
                    }}>Add Production Indent</span>

                </div>
                <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                    <div className="card addSalecard" style={{ width: '60%' }}>
                        <div className="card-body" style={{ margin: '0', padding: '20 0', minHeight:'45vh' }}>
                            <form className="form">


                                <span className="form-group col-sm-12" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '0px' }}>
                                    <> <label style={{ padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="series">Series</label>
                                        <span className="col-sm-3" style={{ color: 'red', fontWeight: 'bold', fontSize: '15px', margin: '0', padding: '0' }}>Series</span></>

                                    <> <label style={{ padding: '0', fontSize: '14px', marginLeft: '50px' }} className="form-label col-sm-2" htmlFor="bill-date">Date</label>
                                        <input className="form-control col-sm-3" type="date" name="bill-date" /> </>
                                </span>



                                <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '0' }}>
                                    <><label style={{ padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="bill-qty">Vch No.</label>
                                        <input className="form-control col-sm-3" type="text" name="bill-qty" /></>

                                    <> <label style={{ padding: '0', fontSize: '14px', marginLeft: '50px' }} className="form-label col-sm-2" htmlFor="bill-amt">For Month</label>
                                        <input className="form-control col-sm-3" type="date" name="bill-amt" /> </>

                                </span>




                                <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '0' }}>
                                    <> <label style={{ padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="upload-bill">Excel File Details Path</label>
                                        <input type="file" name="upload-bill" />
                                    </>
                                    
                                </span>
                                        <button className="p-0 btn btn-info col-2">Import</button>
                            </form>
                        </div>

                    </div>

                    <div className="card addSalecard" style={{ width: '40%', padding: '0 20px' }}>
                        <div className="card-body" style={{ margin: '0', padding: '0' }}>
                            <form className="form">


                                

                                <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '0' }}>
                                    <> <label style={{ padding: '0', fontSize: '14px' }} className="form-label col-sm-3" htmlFor="so-date">From Date</label>
                                        <input className="form-control col-sm-5" type="date" name="so-date" /></>


                                </span>
                                 <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '0' }}>
                                    <> <label style={{ padding: '0', fontSize: '14px' }} className="form-label col-sm-3" htmlFor="so-date"> To Date</label>
                                        <input className="form-control col-sm-5" type="date" name="so-date" /></>


                                </span>

                                <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '0' }}>
                                    <><label style={{ padding: '0', fontSize: '14px' }} className="form-label col-sm-3" htmlFor="del-date">Item Group</label>
                                        <input className="form-control col-sm-5" type="text" name="del-date" /></>


                                </span>

                                <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '0' }}>
                                    <> <label style={{ padding: '0', fontSize: '14px' }} className="form-label col-sm-3" htmlFor="po-no">Item Group</label>
                                        <input className="form-control col-sm-5" type="text" name="po-no" /> </>

                                </span>
                                <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '0' }}>
                                    <>
                                        <label style={{ padding: '0', fontSize: '14px' }} className="form-label col-sm-3">Age Projection</label>
                                        <input type="checkbox" style={{ float: 'right' }} /> </>
                                
                                </span>
                                <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '0' }}>
                                    <> <label style={{ padding: '0', fontSize: '14px' }} className="form-label col-sm-3" htmlFor="so-date"> Due Date</label>
                                        <input className="form-control col-sm-5" type="date" name="so-date" /></>
                                </span>

                            </form>
                        </div>
                        <>
                        <button type="button" className="btn btn-primary col-2">Load</button>
                        <button type="button" className="btn btn-secondary mt-3 col-5">Load Item as M.S.L</button></>
                    </div>
                </div>

            </div>
            <hr style={{ border: '2px solid grey', opacity: '0.5' }} />

            <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                <div className="card col-sm-7" style={{ padding: '0', margin: '0', minHeight: '20vh' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>
                        <span className="card-title" style={{ fontSize: '15px', color: 'white', fontWeight: 900, margin: '0', padding: '0' }}>Line Details</span>
                    </div>

                    <div className="table-responsive card-body" style={{ margin: '0', padding: '0' }}>
                        <table className="table table-striped table-bordered table-hover table-sm" style={{ margin: '0' }}>
                            <thead className="thead-light table-secondary text-center">
                                <tr>
                                    <th>S. No</th>
                                    <th>Item COde</th>
                                    <th>Item Name </th>
                                    <th>Qty.</th>
                                    <th>UOM</th>
                                    <th>Price</th>
                                    <th>Value</th>
                                    <th>Due Date</th>
                                
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
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
                <div className="card col-sm-4" style={{ padding: '0', margin: '0', minHeight: '20vh' }}>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>
                        <span className="card-title" style={{ fontSize: '15px', color: 'white', fontWeight: 900, margin: '0', padding: '0' }}>Details</span>
                    </div>
                    <div className="card-body table-responsive" style={{ margin: '0', padding: '0' }}>
                        <table className="table table-striped table-bordered table-hover table-sm" style={{ margin: '0' }}>
                            <thead className="thead-light table-secondary text-center">
                                <tr>
                                    <th>S. No</th>
                                    <th>Item Name</th>
                                    <th>Item COde</th>
                                    <th>Qty</th>
                                    <th>UOM</th>
                                    <th>Price</th>
                                    <th>Value</th>

                                    <th>Due Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
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
                    <button type="button" className="col-8 btn-btn-info">Load Sub BOM Item</button>
                </div>
            </div>
            <hr style={{ border: '2px solid grey', opacity: '0.5' }} />
            <div className="btn-group col-12 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0 ml-2">Save</button>
                <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} className="btn btn-success mr-2 ml-2 pl-0 pr-0 ">Save & Submit</button>
                <button type="button" style={{ border: '2px solid red', letterSpacing: 3 }} className="btn btn-danger pl-0 pr-0">Quit</button>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-primary pl-0 pr-0 ml-2">Export</button>

            </div>
        </>
    )
}

export default ProductionIndent;