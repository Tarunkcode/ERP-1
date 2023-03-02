import * as React from 'react';
import { useState, useRef } from 'react'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const MRP = () => {
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
    return (
        <>
            <div className="main card firstDiv">

                <div className="text-center card-title col-12" style={{ textAlign: 'start', backgroundColor: '#8389d4' }}>
                    <span className="row-header p-0 m-0" >MRP On Production Indent</span>
                </div>
                <div className="card-body row col-sm-12 m-0 p-0" >

                    <form className="row-content form col-sm-12 pt-0">
                        <fieldset className="form-group border p-0" >
                            <legend className="px-2" data-toggle="collapse" data-target="#branch" aria-expanded="true" aria-controls="branch" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Selection<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>

                            <div className="collapse show" id="branch">
                                <span className="d-flex section2 col-sm-10">
                                    <>
                                        <label htmlFor="series" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Planning Series</label>
                                        <input type="text" name="series" className="form-control inp" />
                                    </>
                                    <>
                                        <label htmlFor="majProd" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Item</label>
                                        <input type="text" name="delTerm" className="form-control inp" />
                                    </>
                                    <>
                                        <label htmlFor="series" style={{ fontSize: '0.8em' }} className="form-label labl labl2">From Date</label>
                                        <input type="date" name="custCode" className="form-control inp" />
                                    </>
                                    <>
                                        <label htmlFor="contPerson" style={{ fontSize: '0.8em' }} className="form-label labl labl2">To Date</label>
                                        <input type="date" name="contPerson" className="form-control inp" />
                                    </>
                                </span>

                            </div>
                        </fieldset>
                          
                          
                    </form>
                    <button type="button" className="btn btn-primary col-1 m-3">Load</button>

                

                </div>
                <hr style={{ border: '2px solid grey', opacity: '0.5' }} />


                <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                    <div className="card">

                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>
                            <span className="card-title" style={{ fontSize: '15px', color: 'white', fontWeight: 900, margin: '0', padding: '0' }}>Indent Details</span>
                        </div>

                        <div className="table-responsive" style={{ padding: '0' }}>

                            <table className="table table-striped table-bordered table-hover table-sm" style={{ margin: '0' }}>
                                <thead className="thead-light table-secondary text-center">
                                    <tr>
                                        <th scope="col">S.No.</th>
                                        <th scope="col" style={{ padding: '0 12em' }}><span>IndentNo. </span></th>
                                        <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Date</span></th>
                                        <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Due Date</span></th>
                                        <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >For Month</span></th>
                                        <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Item Code</span></th>
                                        <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Item Name</span></th>
                                        <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Indent Qty</span></th>
                                        <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Exploded Qty</span></th>
                                        <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Balance Qty</span></th>
                                        <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >MRP Qty</span></th>
                                        <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >UoM</span></th>
                                        <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >StockQty</span></th>
                                        <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Cons.Qty</span></th>
                                        <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Toll(%)</span></th>
                                        <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Toll(Qty)</span></th>
                                        <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Total MRP</span></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        wholeLineItem.map((obj: any, i: any) => {
                                            return (
                                                <tr>

                                                    <th scope="row" className="text-center">{i + 1}</th>
                                                    <td className="item-code"></td>

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
                    
                    <div className="card col-sm-12" style={{ padding: '0', margin: '0', minHeight: '20vh' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>
                            <span className="card-title" style={{ fontSize: '15px', color: 'white', fontWeight: 900, margin: '0', padding: '0' }}> Details</span>
                        </div>

                        <div className="table-responsive card-body" style={{ margin: '0', padding: '0' }}>
                            <table className="table table-striped table-bordered table-hover table-sm" style={{ margin: '0' }}>
                                <thead className="thead-light table-secondary text-center">
                                    <tr>
                                        <th>S. No</th>
                                        <th>Indent No.</th>
                                        <th>Item COde</th>
                                        <th>Item Name</th>
                                        <th>Indent Qty</th>
                                        <th>PSr.No</th>
                                        <th>Process</th>
                                        <th>BOM Item Code</th>
                                        <th>Item Name </th>

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
                                        <td></td>

                                    </tr>
                                </tbody>
                            </table>


                        </div>

                    </div>
                </div>
                <span className="d-flex section2 col-sm-10 flex-start">
                    <>
                        <label htmlFor="series" style={{ fontSize: '0.8em' }} className="form-label labl labl2 col-2 m-3">PR Series</label>
                        <input type="text" name="custName" className="form-control inp col-3 m-3" />
                    </>
                     <>
                        <label htmlFor="majProd" style={{ fontSize: '0.8em' }} className="form-label unit labl labl2">Date</label>
                        <input type="date" name="payTerm" className="form-control inp m-3" />
                    </>
                    <>
                        <label htmlFor="majProd" style={{ fontSize: '0.8em' }} className="form-label unit labl labl2 col-2 m-3">Vch. No.</label>
                        <input type="text" name="payTerm" className="form-control inp col-3 m-3" />
                    </>

                </span>
            </div>
            <div className="btn-group col-12 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0 col-1">Save</button>
               
                <button type="button" style={{ border: '2px solid red', letterSpacing: 3 }} className="btn btn-danger pl-0 pr-0 col-1 ml-1">Quit</button>
            </div>
        </>
    )
}

export default MRP;