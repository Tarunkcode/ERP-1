import * as React from 'react';
import UnderConstruction from '../../under-construction';
const MaterialRecieve = () => {
    var getSoSeries = window.sessionStorage.getItem('so-series');
    var getAccName = window.sessionStorage.getItem('acc-name');
    const getState = window.localStorage.getItem('state');
    const state = JSON.parse(getState!)
    const getCompCode = window.sessionStorage.getItem('compCode');

    var [itemCodeArr, setItemCodeArr]: any = React.useState([]);
    var kinda = React.useRef('');
    var [masterDetails, setMasterDetails]: any = React.useState([]);
    var [changeItemCode, setChangeItemCode]: any = React.useState('');
    var [changeItemName, setChangeItemName]: any = React.useState('');
    var [wholeLineItem, setWholeLineItem]: any = React.useState([{ UOMNAME: '', MRP: '', SGST: '', CGST: '', IGST: '', GSTCAT: '', SALEPRICE: '' }]);
    return (
        <>
            <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                <div className="row row-content col-sm-12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>

                    <span className="card-title" style={{
                        fontSize: '15px', color: 'white', padding: '0',
                        margin: '0'
                    }}>Dilevery Reciept To Party</span>

                </div>
                <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                    {/*<div className="card col-sm-6" style={{ padding: '0', margin: '0', minHeight: '37vh' }}>*/}


                        <div className="card addSalecard col-sm-6" style={{ minHeight: '31vh' }}>
                            <div className="card-body" style={{ margin: '0', padding: '20 0' }}>
                                <form className="form">


                                    <span className="form-group col-sm-12" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '0px' }}>

                                        <><label style={{ padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="bill-qty">Series</label>
                                            <input className="form-control col-3" type="text" name="bill-qty" /></>
                                        <> <label style={{ padding: '0', fontSize: '14px', marginLeft: '50px' }} className="form-label col-sm-2" htmlFor="bill-date">Date</label>
                                            <input className="form-control" type="date" name="bill-date" /> </>
                                    </span>

                                    <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '0' }}>
                                        <> <label style={{ padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="upload-bill">Party</label>
                                            <input className="form-control col-7" type="text" name="upload-bill" /> </>

                                    </span>

                                   <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '0' }}>
                                        <> <label style={{ padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="upload-bill">Vch No.</label>
                                            <input className="form-control col-7" type="text" name="upload-bill" /> </>

                                    </span>

                                   

                                    <span className="form-group col-sm-12" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '0px' }}>

                                        <><label style={{ padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="bill-qty">Challan Type</label>
                                            <input className="form-control" type="text" name="bill-qty" /></>
                                        <> <label style={{ padding: '0', fontSize: '14px', marginLeft: '50px' }} className="form-label col-sm-2" htmlFor="bill-date">Dept. Po No.</label>
                                            <input className="form-control" type="text" name="bill-date" /> </>
                                    </span>








                                </form>
                            {/*</div>*/}

                        </div>
                    </div>
                    <div className="card col-sm-6" style={{ padding: '0', marginRight: '0' }}>

                        <div className="transporter-details col-sm-12" style={{ margin: '3px 0', padding: '10px' }}>
                            <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '0' }}>
                                <> <label style={{ padding: '0', fontSize: '14px' }} className="form-label col-sm-2 pl-3 mr-5" htmlFor="upload-bill">Transporter</label>
                                    <input className="form-control col-7" type="text" name="upload-bill" /> </>

                            </span>

                            <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '0' }}>
                                <> <label style={{ padding: '0', fontSize: '14px' }} className="form-label col-sm-2 pl-3 mr-5" htmlFor="upload-bill">Driver</label>
                                    <input className="form-control col-7" type="text" name="upload-bill" /> </>

                            </span>
                            <span className="col-sm-12" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', textAlign: 'left', alignItems: 'space-around', width: '100%', margin: '0', padding: '0' }}>
                                <> <label htmlFor="driver" className="form-label col-3">Vehicle No.</label>
                                    <input name="driver" className="form-control col-3" type="text" /></>

                                <> <label htmlFor="driver" className="form-label col-3">Ref No.</label>
                                    <input name="driver" className="form-control col-3" type="text" /></>
                            </span>
                            <span className="col-sm-12" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', textAlign: 'left', alignItems: 'space-around', width: '100%', margin: '0', padding: '0' }}>
                                <> <label htmlFor="mobNo" className="form-label col-3">Gate Entry No.</label>
                                    <input name="mobNo" className="form-control col-3" type="text" /> </>

                                <> <label htmlFor="mobNo" className="form-label col-3">Bill No.</label>
                                    <input name="mobNo" className="form-control col-3" type="text" /> </>
                            </span>
                            <span className="col-sm-12" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', textAlign: 'left', alignItems: 'space-around', width: '100%', margin: '0', padding: '0' }}>
                                <>  <label htmlFor="billNo" className="form-label col-3">Bill Amt.</label>
                                    <input name="billNo" className="ml-0" type="checkbox" /></>

                               
                            </span>
                          

                        </div>



                        {/*<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '50%' }}>*/}
                        {/*    <button className="hsn-btn btn btn-sm btn-success">Save</button>*/}

                        {/*</div>*/}
                    </div>
                </div>
            </div>
            <hr style={{ border: '2px solid grey', opacity: '0.5' }} />


            <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                <div className="card">

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>
                        <span className="card-title" style={{ fontSize: '15px', color: 'white', fontWeight: 900, margin: '0', padding: '0' }}>Challan Item Details</span>
                    </div>

                    <div className="table-responsive" style={{ padding: '0' }}>

                        <table className="table table-striped table-bordered table-hover table-sm" style={{ margin: '0' }}>
                            <thead className="thead-light table-secondary text-center">
                                <tr>
                                    <th scope="col">S.No.</th>
                                    <th scope="col" style={{ padding: '0 12em' }}><span>ItemCode </span></th>
                                    <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >ItemName</span></th>
                                    <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >From Process</span></th>
                                    <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Challan Qty</span></th>
                                    <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Bal Qty.</span></th>
                                    <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Qty</span></th>
                                    <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >UoM</span></th>
                                    <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >JW Rate</span></th>
                                    <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >JW Value</span></th>
                                    <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Price</span></th>
                                    <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Value</span></th>
                                    <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Challan No.</span></th>
                                    <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Rec.Weight(KG)</span></th>
                                    <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >S.Dis.Amt</span></th>
                                    <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Amount</span></th>
                                    <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >GST(%)</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    wholeLineItem.map((obj: any, i: any) => {
                                        return (
                                            <tr>

                                                <th scope="row" className="text-center">{i + 1}</th>


                                                <td><input type="text" className="form-control" required /></td>
                                                <td></td>

                                                <td><input type="text" className="form-control" required /></td>
                                                <td>{obj.UOMNAME}</td>
                                                <td>{obj.MRP}</td>
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
                                             
                                                <td>{obj.GSTCAT}</td>
                                                {
                                                    i == wholeLineItem.length - 2 ? (<button type="button" value={i} ><i><svg style={{ width: '21px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M576 384C576 419.3 547.3 448 512 448H205.3C188.3 448 172 441.3 160 429.3L9.372 278.6C3.371 272.6 0 264.5 0 256C0 247.5 3.372 239.4 9.372 233.4L160 82.75C172 70.74 188.3 64 205.3 64H512C547.3 64 576 92.65 576 128V384zM271 208.1L318.1 256L271 303C261.7 312.4 261.7 327.6 271 336.1C280.4 346.3 295.6 346.3 304.1 336.1L352 289.9L399 336.1C408.4 346.3 423.6 346.3 432.1 336.1C442.3 327.6 442.3 312.4 432.1 303L385.9 256L432.1 208.1C442.3 199.6 442.3 184.4 432.1 175C423.6 165.7 408.4 165.7 399 175L352 222.1L304.1 175C295.6 165.7 280.4 165.7 271 175C261.7 184.4 261.7 199.6 271 208.1V208.1z" /></svg></i></button>) : null
                                                }


                                            </tr>
                                        )
                                    })

                                }

                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
            <hr style={{ border: '2px solid grey', opacity: '0.5' }} />

            <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                <div className="card col-sm-7" style={{ padding: '0', margin: '0', minHeight: '20vh' }}>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>
                        <span className="card-title" style={{ fontSize: '15px', color: 'white', fontWeight: 900, margin: '0', padding: '0' }}>Bill Sundry Details</span>
                    </div>
                    <div className="card-body table-responsive" style={{ margin: '0', padding: '0' }}>
                        <table className="table table-striped table-bordered table-hover table-sm" style={{ margin: '0' }}>
                            <thead className="thead-light table-secondary text-center">
                                <tr>
                                    <th>S. No</th>
                                    <th>Bill Sundary</th>
                                    <th>Narration</th>
                                    <th>@</th>

                                    <th>Amount (₹)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>

                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
            <hr style={{ border: '2px solid grey', opacity: '0.5' }} />
            <div className="btn-group col-12 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0 ml-2">Save</button>
                <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} className="btn btn-success mr-2 ml-2 pl-0 pr-0 ">Save & Submit</button>
                <button type="button" style={{ border: '2px solid red', letterSpacing: 3 }} className="btn btn-danger pl-0 pr-0">Quit</button>


            </div>
        </>
    )
}

export default MaterialRecieve;