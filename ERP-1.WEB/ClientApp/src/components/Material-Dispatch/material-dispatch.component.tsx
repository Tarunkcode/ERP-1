import * as React from 'react';
import './material-dispatch.styles.css'

//interface IProps {
//    supplier: string;
//}
//interface IState {
//    supplieName: string;
//}
class MarerialDispatch extends React.Component {
    //constructor(props: IProps) {
       // super(props);
        //this.state = {
        //    supplierName : ''
        //};
   // }
    supplierName = window.sessionStorage.getItem('acc-name');
    getSoSeries = window.sessionStorage.getItem('so-series')
    getState = window.localStorage.getItem('state');
    state = JSON.parse(this.getState!)
    getCompCode = window.sessionStorage.getItem('compCode');
    render() {
        return (
            <div style={{ margin: '10px -3em 0 -3em' }}>


                <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                    <div className="row row-content col-sm-12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#8389d4', margin: '10px 0 0 0', padding: '0' }}>

                        <span className="card-title" style={{
                            fontSize: '15px', color: 'white', fontWeight: 900, padding: '0',
                            margin: '0'
                        }}>Add Material Dispatch</span>

                    </div>
                    <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                        <div className="card addSalecard" style={{width:'40%'}}>
                            <div className="card-body" style={{ margin: '0', padding: '0' }}>
                                <form className="form">


                                    <span className="form-group col-sm-12" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '10px 0px' }}>
                                       <> <label style={{ margin: '0 30px 0 5px', padding: '0', fontSize: '14px' }} className="form-label col-sm-3" htmlFor="series">Series</label>
                                        <span className="col-sm-5" style={{ color: 'red', fontWeight: 'bold', fontSize: '15px', margin: '0', padding: '0' }}>{this.getSoSeries}</span></>
                                    </span>

                                    <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '10px 0' }}>
                                        <> <label style={{ margin: '0 30px 0 5px', padding: '0', fontSize: '14px' }}  className="form-label col-sm-3" htmlFor="so-date">Date</label>
                                            <input className="form-control col-sm-5" type="date" name="so-date" /></>

                                      
                                    </span>

                                    <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '10px 0' }}>
                                        <><label style={{ margin: '0 30px 0 5px', padding: '0', fontSize: '14px' }} className="form-label col-sm-3" htmlFor="del-date">Supplier</label>
                                            <input className="form-control col-sm-5" type="text" name="del-date" value={this.supplierName!} readOnly /></>

                                       
                                    </span>

                                    <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '10px 0' }}>
                                        <> <label style={{ margin: '0 30px 0 5px', padding: '0', fontSize: '14px' }} className="form-label col-sm-3" htmlFor="sold-to">Po No.</label>
                                            <input className="form-control col-sm-5" type="text" name="sold-to"  /> </>
                                       
                                    </span>
                                    <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '10px 0' }}>
                                        <> <label style={{ margin: '0 30px 0 5px', padding: '0', fontSize: '14px' }} className="form-label col-sm-3" htmlFor="sold-to">Item Code</label>
                                            <input className="form-control col-sm-5" type="text" name="sold-to" /> </>

                                    </span>

                                    <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '10px 0' }}>
                                        <> <label style={{ margin: '0 30px 0 5px', padding: '0', fontSize: '14px' }} className="form-label col-sm-3" htmlFor="sold-to">Item Name</label>
                                            <input className="form-control col-sm-5" type="text" name="sold-to" /> </>

                                    </span>
                                </form>
                            </div>

                        </div>
                 
                        <div className="card addSalecard" style={{width:'60%'}}>
                            <div className="card-body" style={{ margin: '0', padding: '20 0'}}>
                                <form className="form">


                                    <span className="form-group col-sm-12" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '10px 0px' }}>
                                        <label style={{ margin: '0 30px 0 5px', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="series">Number</label>
                                        <input className="form-control col-sm-3" type="text" name="number" />
                                    </span>

                                    <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '10px 0' }}>
                                        <> <label style={{ margin: '0 30px 0 5px', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="so-date">Date</label>
                                            <input className="form-control col-sm-3" type="date" name="so-date" /></>


                                    </span>

                                    <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '10px 0' }}>
                                        <><label style={{ margin: '0 30px 0 5px', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="del-date">Quantity</label>
                                            <input className="form-control col-sm-3" type="text" name="del-date" /></>

                                        <> <label style={{ margin: '0 30px 0 5px', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="sold-to">UOM</label>
                                            <input className="form-control col-sm-3" type="text" name="sold-to" /> </>

                                    </span>

                                  
                                    <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '10px 0' }}>
                                        <> <label style={{ margin: '0 30px 0 5px', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="sold-to">Currency</label>
                                            <input className="form-control col-sm-3" type="text" name="sold-to" /> </>

                                        <> <label style={{ margin: '0 30px 0 5px', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="sold-to">Currency Rate</label>
                                            <input className="form-control col-sm-3" type="text" name="sold-to" /> </>
                                    </span>

                                  
                                    <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '10px 0' }}>
                                        <> <label style={{ margin: '0 30px 0 5px', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="sold-to">Every Bill Name</label>
                                            <input className="form-control col-sm-3" type="text" name="sold-to" /> </>

                                    </span>
                                </form>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="card-footer row row-content col-sm-12 form-group" style={{ margin: '0', padding: '0' }}>
                    <label style={{ margin: '0' }} className='col-sm-1 label-control'>Tramsporter</label><input style={{ margin: '0' }} type="text" className='form-control col-sm-1' />


                    <label style={{ margin: '0' }} className='col-sm-1 label-control'>Vehical Type</label><input style={{ margin: '0' }} type="text" className='form-control col-sm-1' />

                    <label style={{ margin: '0' }} className='col-sm-2 label-control'>Vehical No.</label><input style={{ margin: '0' }} type="text" className='form-control col-sm-1' />

                    <label style={{ margin: '0' }} className='col-sm-2 label-control'>Driver Name</label><input style={{ margin: '0' }} type="text" className='form-control col-sm-1' />


                    <label style={{ margin: '0' }} className='col-sm-1 label-control'>Billty No.</label><input style={{ margin: '0' }} type="text" className='form-control col-sm-1' />

                </div>

                <hr style={{ border: '2px solid grey', opacity: '0.5' }} />
                

                {/*<div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">*/}
                {/*    <div className="card">*/}

                {/*        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>*/}
                {/*            <span className="card-title" style={{ fontSize: '15px', color: 'white', fontWeight: 900, margin: '0', padding: '0' }}>Line Item Details</span>*/}
                {/*        </div>*/}

                {/*        <div className="table-responsive" style={{ padding: '0' }}>*/}

                {/*            <table className="table table-striped table-bordered table-hover table-sm" style={{ margin: '0' }}>*/}
                {/*                <thead className="thead-light table-secondary">*/}
                {/*                    <tr>*/}
                {/*                        <th scope="col">S.No.</th>*/}
                {/*                        <th scope="col col-sm-3"><span>Item Code</span></th>*/}


                {/*                        <th scope="col"><span>Item Name</span></th>*/}


                {/*                        <th scope="col"><span>Quantity</span></th>*/}
                {/*                        <th scope="col"><span>Uom</span></th>*/}
                {/*                        <th scope="col"><span>MRP</span></th>*/}
                {/*                        <th scope="col"><span>Basic Rate</span></th>*/}
                {/*                        <th scope="col"><span>Sale Rate</span></th>*/}
                {/*                        <th scope="col"><span>Amount Rate</span></th>*/}
                {/*                        <th scope="col"><span>Dis %</span></th>*/}
                {/*                        <th scope="col"><span>Dis. Sale Rate</span></th>*/}
                {/*                        <th scope="col"><span>Dis (Rs)</span></th>*/}
                {/*                        <th scope="col"><span>Amount</span></th>*/}
                {/*                        <th scope="col"><span>S.Dis(%)</span></th>*/}
                {/*                        <th scope="col"><span>S.Dis Amt</span></th>*/}
                {/*                        <th scope="col"><span>Amount</span></th>*/}
                {/*                        <th scope="col"><span>GST (%)</span></th>*/}
                {/*                    </tr>*/}
                {/*                </thead>*/}
                {/*                <tbody>*/}

                {/*                    <tr>*/}
                {/*                        <th scope="row">1</th>*/}
                {/*                        <td className="item-code">*/}
                {/*                            <input style={{ margin: '0', padding: '0', width: '100%' }} className="form-control" list="itemCodeList" type="text" id="cell-ItemCode" />*/}
                {/*                        */}{/*    {*/}
                {/*                        */}{/*        itemCodeArr != null && itemCodeArr.length > 0 ?*/}

                {/*                        */}{/*            (*/}
                {/*                        */}{/*                <datalist className='item-code-list' id='itemCodeList'>*/}
                {/*                        */}{/*                    {*/}
                {/*                        */}{/*                        itemCodeArr.map((obj: any) => {*/}
                {/*                        */}{/*                            return <option data-value={obj.ITEMCODE}>{obj.ITEMNAME}</option>*/}
                {/*                        */}{/*                        })*/}
                {/*                        */}{/*                    }*/}


                {/*                        */}{/*                </datalist>*/}

                {/*                        */}{/*            )*/}

                {/*                        */}{/*            : null*/}


                {/*                        */}{/*    }*/}

                {/*                       </td>*/}


                {/*                        */}{/*{*/}
                {/*                        */}{/*    itemDetails.map((item: any) => {*/}
                {/*                        */}{/*        return (*/}

                {/*                        */}{/*            <>*/}
                {/*                        */}{/*                <td></td>*/}
                {/*                        */}{/*                <td><input type="text" className="form-control" /></td>*/}
                {/*                        */}{/*                <td>{item.UOMNAME}</td>*/}
                {/*                        */}{/*                <td>{item.MRP}</td>*/}
                {/*                        */}{/*                <td></td>*/}
                {/*                        */}{/*                <td></td>*/}
                {/*                        */}{/*                <td></td>*/}
                {/*                        */}{/*                <td></td>*/}
                {/*                        */}{/*                <td></td>*/}
                {/*                        */}{/*                <td></td>*/}
                {/*                        */}{/*                <td>{item.CGST}</td>*/}
                {/*                        */}{/*                <td>{item.SGST}</td>*/}
                {/*                        */}{/*                <td>{item.SALEPRICE}</td>*/}
                {/*                        */}{/*                <td>{item.IGST}</td>*/}
                {/*                        */}{/*                <td>{item.GSTCAT}</td>*/}
                {/*                        */}{/*            </>*/}
                {/*                        */}{/*        );*/}
                {/*                        */}{/*    }*/}
                {/*                        */}{/*    )}*/}





                {/*                    </tr>*/}

                {/*                </tbody>*/}
                {/*            </table>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*</div>*/}

                <hr style={{ border: '2px solid grey', opacity: '0.5' }} />

                {/*<div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">*/}
                {/*    <div className="card">*/}

                {/*        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>*/}
                {/*            <span className="card-title" style={{ fontSize: '15px', color: 'white', fontWeight: 900, margin: '0', padding: '0' }}>Bill Sundry Details</span>*/}
                {/*        </div>*/}
                {/*        <div className="card-body table-responsive" style={{ margin: '0', padding: '0' }}>*/}
                {/*            <table className="table table-striped table-bordered table-hover table-sm" style={{ margin: '0' }}>*/}
                {/*                <thead className="thead-light table-secondary">*/}
                {/*                    <tr>*/}
                {/*                        <th>S. No</th>*/}
                {/*                        <th>Bill Sundary</th>*/}
                {/*                        <th>Narration</th>*/}
                {/*                        <th>@</th>*/}

                {/*                        <th>Amount (₹)</th>*/}
                {/*                    </tr>*/}
                {/*                </thead>*/}
                {/*                <tbody>*/}
                {/*                    <tr>*/}
                {/*                        <th scope="row">1</th>*/}
                {/*                        <td></td>*/}
                {/*                        <td></td>*/}
                {/*                        <td></td>*/}

                {/*                        <td></td>*/}
                {/*                    </tr>*/}
                {/*                </tbody>*/}
                {/*            </table>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="card">*/}
                {/*        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>*/}
                {/*            <span className="card-title" style={{ fontSize: '15px', color: 'white', fontWeight: 900, margin: '0', padding: '0' }}>HSN Details</span>*/}
                {/*        </div>*/}

                {/*        <div className="table-responsive card-body" style={{ margin: '0', padding: '0' }}>*/}
                {/*            <table className="table table-striped table-bordered table-hover table-sm" style={{ margin: '0' }}>*/}
                {/*                <thead className="thead-light table-secondary">*/}
                {/*                    <tr>*/}
                {/*                        <th>S. No</th>*/}
                {/*                        <th>HSN No.</th>*/}
                {/*                        <th>Quantity</th>*/}
                {/*                        <th>UOM</th>*/}
                {/*                        <th>Tot. Amt</th>*/}
                {/*                        <th>Taxable Amt.</th>*/}
                {/*                        <th>GST %</th>*/}
                {/*                        <th>IGST Amt</th>*/}
                {/*                        <th>GST</th>*/}
                {/*                    </tr>*/}
                {/*                </thead>*/}
                {/*                <tbody>*/}
                {/*                    <tr>*/}
                {/*                        <th scope="row">1</th>*/}
                {/*                        <td></td>*/}
                {/*                        <td></td>*/}
                {/*                        <td></td>*/}
                {/*                        <td></td>*/}
                {/*                        <td></td>*/}
                {/*                        <td></td>*/}
                {/*                        <td></td>*/}
                {/*                        <td></td>*/}
                {/*                    </tr>*/}
                {/*                </tbody>*/}
                {/*            </table>*/}


                {/*        </div>*/}
                {/*        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '50%' }}>*/}
                {/*            <button className="hsn-btn btn btn-sm btn-primary">Scheme Apply</button>*/}
                {/*            <button style={{ margin: '0 10px' }} className="hsn-btn btn btn-sm btn-secondary">Save</button>*/}
                {/*            <button style={{ margin: '0 10px' }} className="hsn-btn btn btn-sm btn-success">Save & Submit</button>*/}
                {/*            <button className="hsn-btn btn btn-sm btn-danger">Quit</button>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

            </div>
            );
    }
}
export default MarerialDispatch;