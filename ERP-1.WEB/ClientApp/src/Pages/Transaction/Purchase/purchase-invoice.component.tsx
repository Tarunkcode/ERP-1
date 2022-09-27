import * as React from 'react';
import { useState } from 'react';
import UnderConstruction from '../../../components/under-construction';
const PurcahseInvoice = () => {
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


    //------------ default date block-----------------------------------------------------------------------------------------------------------------------
    const today = new Date();
    var format = today.toString().slice(4, 15)
    var yearOnly = format.slice(7, 11)
    var dateOnly = format.slice(4, 6)
    var MonthOnly = format.slice(0, 3)
    var monthNo = 0;
    if (MonthOnly.toLowerCase() == "jan") monthNo = 1;
    else if (MonthOnly.toLowerCase() == "feb") monthNo = 2;
    else if (MonthOnly.toLowerCase() == "mar") monthNo = 3;
    else if (MonthOnly.toLowerCase() == "apr") monthNo = 4;
    else if (MonthOnly.toLowerCase() == "may") monthNo = 5;
    else if (MonthOnly.toLowerCase() == "jun") monthNo = 6;
    else if (MonthOnly.toLowerCase() == "jul") monthNo = 7;
    else if (MonthOnly.toLowerCase() == "aug") monthNo = 8;
    else if (MonthOnly.toLowerCase() == "sep") monthNo = 9;
    else if (MonthOnly.toLowerCase() == "oct") monthNo = 10;
    else if (MonthOnly.toLowerCase() == "nov") monthNo = 11;
    else if (MonthOnly.toLowerCase() == "dec") monthNo = 12;

    var defaultDate = `${yearOnly}-${monthNo}-${dateOnly}`

    var [startDate, setStartDate]: any = useState(new Date("2022-04-01"));
    var [endDate, setEndDate]: any = useState(new Date);
    var [changeStartDate, setChangeStartDate]: any = useState("2022-04-01");
    var [changeEndDate, setChangeEndDate]: any = useState(defaultDate);
    //--------------------------------------------------------------------------------------------------------------------------------------------------------------
    return (
        <div className="firstDiv" >


            <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                <div className="row row-content col-sm-12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#8389d4', margin: '10px 0 0 0', padding: '0' }}>

                    <span className="card-title" style={{
                        fontSize: '15px', color: 'white', fontWeight: 900, padding: '0',
                        margin: '0'
                    }}>Pending MRN for Purchase</span>

                </div>
                <div className="row row-content card col-sm-12 addSaleForm container container-fluid container-lg">
                    
                    <div className="card-body" style={{ margin: '0', padding: '0', minHeight: '28vh', width:'100%' }}>
                        <form className="form col-7 ml-1">


                                <span className="form-group col-sm-12" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '10px 2px' }}>
                                    <label style={{ margin: '0 30px 0 12px', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="series">MRN Series</label>
                                    <span style={{ color: 'red', fontWeight: 'bold', fontSize: '15px', margin: '0', padding: '0' }}>{getSoSeries}</span>
                                </span>
                                <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0 10px', padding: '10px 0' }}>
                                    <> <label style={{ margin: '0 28px 0 0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="so-date">Supplier</label>
                                        <input className="form-control col-sm-5" type="text" name="so-date" /></>

                                </span>

                                <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' }}>
                                    <> <label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="sold-to">MRN No. From</label>
                                        <input className="form-control col-sm-3" type="text" name="sold-to" value={getAccName!} />
                                    </>
                                    <> <label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="address">MRN No. To</label>
                                        <input className="form-control col-sm-3" type="text" name="address" value={masterDetails.ADDRESSNAME} />
                                    </>
                                </span>

                                <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' }}>
                                    <> <label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="sold-to">Reciept Date From</label>
                                        <input className="form-control col-sm-3" type="text" name="sold-to" value={getAccName!} />
                                    </>
                                    <> <label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="address">Reciept Date To</label>
                                        <input className="form-control col-sm-3" type="text" name="address" value={masterDetails.ADDRESSNAME} />
                                    </>
                                </span>
                                <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0 10px', padding: '10px 0' }}>
                                    <> <label style={{ margin: '0 28px 0 0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="so-date">Item Code</label>
                                        <input className="form-control col-sm-5" type="text" name="so-date" /></>

                                </span>

                                <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0 10px', padding: '10px 0' }}>
                                    <> <label style={{ margin: '0 28px 0 0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="so-date">Customer Bill No.</label>
                                        <input className="form-control col-sm-5" type="text" name="so-date" /></>

                                </span>
                                <div className="col-12"></div>
                                <button type="submit" className="btn btn-primary m-2 col-2 d-flex flex-start">Load Data</button>

                            </form>
                       

                    </div>

               
                </div>

            </div>
          

            <hr style={{ border: '2px solid grey', opacity: '0.5' }} />
        
         

            <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                <div className="card">

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>
                        <span className="card-title" style={{ fontSize: '15px', color: 'white', fontWeight: 900, margin: '0', padding: '0' }}>Pending Mrn For Purchase Details</span>
                    </div>

                    <div className="table-responsive" style={{ padding: '0' }}>

                        <table className="table table-striped table-bordered table-hover table-sm" style={{ margin: '0' }}>
                            <thead className="thead-light table-secondary text-center">
                                <tr>
                                    <th scope="col">S.No.</th>
                                    
                                    <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >GRN.No</span></th>
                                    <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >GRN Date</span></th>
                                    <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Purchase Ord</span></th>
                                    <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Supplier Name</span></th>
                                    <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Bill No.</span></th>
                                    <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Bill Date</span></th>
                                    <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Item Code</span></th>
                                    <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Description</span></th>
                                    <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Model No.</span></th>
                                    <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >GRN Qty</span></th>
                                    <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >UoM</span></th>
                                    <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Processed Qty</span></th>
                                    <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Balance Qty</span></th>
                                    <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Mat.Center</span></th>
                                    <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Process</span></th>
                                    <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >GRSRNO</span></th>
                                    <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Batch No.</span></th>
                                    <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Color</span></th>
                                    <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Size</span></th>
                                    <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >P3</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    wholeLineItem.map((obj: any, i: any) => {
                                        return (
                                            <tr>

                                                <th scope="row" className="text-center">{i + 1}</th>
                                                

                                                <td>{kinda.current}</td>

                                                <td><input type="text" className="form-control" required /></td>
                                                <td>{obj.UOMNAME}</td>
                                                <td>{obj.MRP}</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td>{obj.CGST}</td>
                                                <td>{obj.SGST}</td>
                                                <td>{obj.SALEPRICE}</td>
                                                <td>{obj.IGST}</td>
                                                <td>{obj.GSTCAT}</td>
                                                {
                                                    i == wholeLineItem.length - 2 ? (<button type="button" value={i} ><i><svg style={{ width: '21px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M576 384C576 419.3 547.3 448 512 448H205.3C188.3 448 172 441.3 160 429.3L9.372 278.6C3.371 272.6 0 264.5 0 256C0 247.5 3.372 239.4 9.372 233.4L160 82.75C172 70.74 188.3 64 205.3 64H512C547.3 64 576 92.65 576 128V384zM271 208.1L318.1 256L271 303C261.7 312.4 261.7 327.6 271 336.1C280.4 346.3 295.6 346.3 304.1 336.1L352 289.9L399 336.1C408.4 346.3 423.6 346.3 432.1 336.1C442.3 327.6 442.3 312.4 432.1 303L385.9 256L432.1 208.1C442.3 199.6 442.3 184.4 432.1 175C423.6 165.7 408.4 165.7 399 175L352 222.1L304.1 175C295.6 165.7 280.4 165.7 271 175C261.7 184.4 261.7 199.6 271 208.1V208.1z" /></svg></i></button>) : null
                                                }
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>


                                            </tr>
                                        )
                                    })

                                }

                            </tbody>
                        </table>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default PurcahseInvoice;