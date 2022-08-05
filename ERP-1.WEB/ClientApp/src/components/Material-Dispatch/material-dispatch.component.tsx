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
            <div className="firstDiv">


                <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                    <div className="row row-content col-sm-12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>

                        <span className="card-title" style={{
                            fontSize: '15px', color: 'white', padding: '0',
                            margin: '0'
                        }}>Add Material Dispatch</span>

                    </div>
                    <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                        <div className="card addSalecard" style={{width:'40%', padding:'0 20px'}}>
                            <div className="card-body" style={{ margin: '0', padding: '0' }}>
                                <form className="form">


                                    <span className="form-group col-sm-12" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '0' }}>
                                       <> <label style={{padding: '0', fontSize: '14px' }} className="form-label col-sm-3" htmlFor="series">Series</label>
                                        <span className="col-sm-5" style={{ color: 'red', fontWeight: 'bold', fontSize: '15px', margin: '0', padding: '0' }}>{this.getSoSeries}</span></>
                                    </span>

                                    <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '0' }}>
                                        <> <label style={{ padding: '0', fontSize: '14px' }}  className="form-label col-sm-3" htmlFor="so-date">Date</label>
                                            <input className="form-control col-sm-5" type="date" name="so-date" /></>

                                      
                                    </span>

                                    <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '0' }}>
                                        <><label style={{ padding: '0', fontSize: '14px' }} className="form-label col-sm-3" htmlFor="del-date">Supplier</label>
                                            <input className="form-control col-sm-5" type="text" name="del-date" value={this.supplierName!} readOnly /></>

                                       
                                    </span>

                                    <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '0' }}>
                                        <> <label style={{  padding: '0', fontSize: '14px' }} className="form-label col-sm-3" htmlFor="po-no">Po No.</label>
                                            <input className="form-control col-sm-5" type="text" name="po-no"  /> </>
                                       
                                    </span>
                                    <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '0' }}>
                                        <div style={{ visibility: 'hidden' }}>
                                            <label style={{ padding: '0', fontSize: '14px' }} className="form-label col-sm-3"></label>
                                            <input className="form-control col-sm-5" type="text" /> </div>
                                       
                                    </span>
                                  
                                </form>
                            </div>

                        </div>
                 
                        <div className="card addSalecard" style={{width:'60%'}}>
                            <div className="card-body" style={{ margin: '0', padding: '20 0'}}>
                                <form className="form">


                                    <span className="form-group col-sm-12" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '0px' }}>
                                        <><label style={{ padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="series">Bill No.</label>
                                            <input className="form-control col-sm-3" type="text" name="number" /></>

                                        <> <label style={{padding: '0', fontSize: '14px', marginLeft:'50px' }} className="form-label col-sm-2" htmlFor="bill-date">Bill Date</label>
                                            <input className="form-control col-sm-3" type="date" name="bill-date" /> </>
                                    </span>

                                   

                                    <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '0' }}>
                                        <><label style={{  padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="bill-qty">Bill Qty</label>
                                            <input className="form-control col-sm-3" type="text" name="bill-qty" /></>

                                        <> <label style={{ padding: '0', fontSize: '14px', marginLeft: '50px'}} className="form-label col-sm-2" htmlFor="bill-amt">Bill Amt.</label>
                                            <input className="form-control col-sm-3" type="text" name="bill-amt" /> </>

                                    </span>

                                  
                                    <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '0' }}>
                                        <> <label style={{ padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="bill-curr">Bill Currency</label>
                                            <input className="form-control col-sm-3" type="text" name="bill-curr" /> </>

                                        <> <label style={{ padding: '0', fontSize: '14px', marginLeft: '50px' }} className="form-label col-sm-2" htmlFor="curr-rate">Curr. Rate</label>
                                            <input className="form-control col-sm-3" type="text" name="curr-rate" /> </>
                                    </span>

                                  
                                    <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '0' }}>
                                        <> <label style={{ padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="upload-bill">Upload Bill</label>
                                            <input className="form-control col-sm-3" type="text" name="upload-bill" /> </>

                                    </span>
                                </form>
                            </div>

                        </div>
                    </div>

                </div>
              

                <hr style={{ border: '2px solid grey', opacity: '0.5' }} />
                

                <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                    <div className="card">

                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>
                            <span className="card-title" style={{ fontSize: '15px', color: 'white', margin: '0', padding: '0' }}>Item Details</span>
                        </div>

                        <div className="table-responsive" style={{ padding: '0' }}>

                            <table className="table table-striped table-bordered table-hover table-sm" style={{ margin: '0' }}>
                                <thead className="thead-light table-secondary">
                                    <tr>
                                        <th scope="col" className="text-center col-sm-1" style={{ fontWeight:400 }}>S.No.</th>
                                        <th scope="col" className="col-sm-3 text-center" style={{ fontWeight: 400 }}><span>Item Code</span></th>


                                        <th scope="col" className="text-center" style={{ fontWeight: 400 }}><span>Item Name</span></th>


                                        <th scope="col" className="text-center"  style={{ fontWeight:400 }}><span>Bal. Po Qty</span></th>
                                        <th scope="col" className="text-center"  style={{ fontWeight:400 }}><span>Qty</span></th>
                                        <th scope="col" className="text-center"  style={{ fontWeight:400 }}><span>UOM</span></th>
                                        <th scope="col" className="text-center"  style={{ fontWeight:400 }}><span>Basic Rate</span></th>
                                        <th scope="col" className="text-center" style={{ fontWeight: 400 }}><span>Value</span></th>
                                       
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <th scope="row">1</th>
                                        <td className="item-code">
                                            <input style={{ margin: '0', padding: '0', width: '100%' }} className="form-control" list="itemCodeList" type="text" id="cell-ItemCode" />
                                            {/*{*/}
                                            {/*    itemCodeArr != null && itemCodeArr.length > 0 ?*/}

                                            {/*        (*/}
                                            {/*            <datalist className='item-code-list' id='itemCodeList'>*/}
                                            {/*                {*/}
                                            {/*                    itemCodeArr.map((obj: any) => {*/}
                                            {/*                        return <option data-value={obj.ITEMCODE}>{obj.ITEMNAME}</option>*/}
                                            {/*                    })*/}
                                            {/*                }*/}


                                            {/*            </datalist>*/}

                                            {/*        )*/}

                                            {/*        : null*/}


                                            {/*}*/}

                                       </td>
                                        <td></td>
                                        <td></td>
                                        
                                        <td className="item-code">
                                            <input style={{ margin: '0', padding: '0', width: '100%' }} className="form-control" list="itemCodeList" type="text" id="cell-ItemCode" /></td>
                                       <td></td>
                                       <td></td>
                                       <td></td>
                                                                              {/*{*/}
                                        {/*    itemDetails.map((item: any) => {*/}
                                        {/*        return (*/}

                                        {/*            <>*/}
                                        {/*                <td></td>*/}
                                        {/*                <td><input type="text" className="form-control" /></td>*/}
                                        {/*                <td>{item.UOMNAME}</td>*/}
                                        {/*                <td>{item.MRP}</td>*/}
                                        {/*                <td></td>*/}
                                        {/*                <td></td>*/}
                                        {/*                <td></td>*/}
                                        {/*                <td></td>*/}
                                        {/*                <td></td>*/}
                                        {/*                <td></td>*/}
                                        {/*                <td>{item.CGST}</td>*/}
                                        {/*                <td>{item.SGST}</td>*/}
                                        {/*                <td>{item.SALEPRICE}</td>*/}
                                        {/*                <td>{item.IGST}</td>*/}
                                        {/*                <td>{item.GSTCAT}</td>*/}
                                        {/*            </>*/}
                                        {/*        );*/}
                                        {/*    }*/}
                                        {/*    )}*/}





                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

                <hr style={{ border: '2px solid grey', opacity: '0.5' }} />

                <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                    <div className="card col-sm-6" style={{padding:'0', margin:'0'}}>

                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>
                            <span className="card-title" style={{ fontSize: '15px', color: 'white', margin: '0', padding: '0' }}>Tax Details</span>
                        </div>
                        <div className="card-body table-responsive" style={{ margin: '0', padding: '0' }}>
                            <table className="table table-striped table-bordered table-hover table-sm" style={{ margin: '0' }}>
                                <thead className="thead-light table-secondary">
                                    <tr>
                                        <th  style={{ fontWeight:400 }}>S. No</th>
                                        <th  style={{ fontWeight:400 }}>Description</th>
                                        <th  style={{ fontWeight:400 }}>Rate</th>
                                   
                                        <th style={{ fontWeight: 400 }}>Amount (₹)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td></td>
                                        <td></td>
                                   

                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="card col-sm-5" style={{padding:'0', marginRight:'0'}}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>
                            <span className="card-title" style={{ fontSize: '15px', color: 'white', margin: '0', padding: '0' }}>Transporter Details</span>
                        </div>

                        {/*<div className="table-responsive card-body" style={{ margin: '0', padding: '0' }}>*/}
                        {/*    <table className="table table-striped table-bordered table-hover table-sm" style={{ margin: '0' }}>*/}
                        {/*        <thead className="thead-light table-secondary">*/}
                        {/*            <tr>*/}
                        {/*                <th>S. No</th>*/}
                        {/*                <th>Transporter</th>*/}
                        {/*                <th>Vehical No.</th>*/}
                        {/*                <th>Driver Name</th>*/}
                        {/*                <th>Driver Mob. No.</th>*/}
                        {/*                <th>Every Bill No.</th>*/}
                        {/*                <th>Billty No.</th>*/}
                                        
                        {/*            </tr>*/}
                        {/*        </thead>*/}
                        {/*        <tbody>*/}
                        {/*            <tr>*/}
                        {/*                <th scope="row">1</th>*/}
                        {/*                <td></td>*/}
                        {/*                <td></td>*/}
                        {/*                <td></td>*/}
                        {/*                <td></td>*/}
                                        
                        {/*                <td></td>*/}
                        {/*                <td></td>*/}
                                        
                        {/*            </tr>*/}
                        {/*        </tbody>*/}
                        {/*    </table>*/}


                        {/*</div>*/}


                        <div className="transporter-details col-sm-12" style={{ margin: '3px 0', padding: '10px' }}>
                            <span className="col-sm-12" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', textAlign:'left', alignItems: 'space-around', width: '100%', margin: '0', padding: '0' }}>
                                <label htmlFor="transporter" className="form-label col-4">Transporter</label>
                                <input name="transporter" className="form-control col-5" type="text"/>
                            </span>

                            <span className="col-sm-12" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', textAlign: 'left', alignItems: 'space-around', width: '100%', margin: '0', padding: '0'}}>
                                <label htmlFor="vehicalNo" className="form-label col-4">Vehical No.</label>
                                <input name="vehicalNo" className="form-control col-5" type="text" />
                            </span>
                            <span className="col-sm-12" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', textAlign: 'left', alignItems: 'space-around', width: '100%', margin: '0', padding: '0' }}>
                                <label htmlFor="driver" className="form-label col-4">Driver Name</label>
                                <input name="driver" className="form-control col-5" type="text" />
                            </span>
                            <span className="col-sm-12" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', textAlign: 'left', alignItems: 'space-around', width: '100%', margin: '0', padding: '0' }}>
                                <label htmlFor="mobNo" className="form-label col-4">Driver Mob. No.</label>
                                <input name="mobNo" className="form-control col-5" type="text" />
                            </span>
                            <span className="col-sm-12" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', textAlign: 'left', alignItems: 'space-around', width: '100%', margin: '0', padding: '0' }}>
                                <label htmlFor="billNo" className="form-label col-4">Every Bill No.</label>
                                <input name="billNo" className="form-control col-5" type="text" />
                            </span>
                            <span className="col-sm-12" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', textAlign: 'left', alignItems: 'space-around', width: '100%', margin: '0', padding: '0' }}>
                                <label htmlFor="billty" className="form-label col-4">Billty No.</label>
                                <input name="billty" className="form-control col-5" type="text" />
                            </span>

                        </div>



                        {/*<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '50%' }}>*/}
                        {/*    <button className="hsn-btn btn btn-sm btn-success">Save</button>*/}
                           
                        {/*</div>*/}
                    </div>
                </div>

            </div>
            );
    }
}
export default MarerialDispatch;