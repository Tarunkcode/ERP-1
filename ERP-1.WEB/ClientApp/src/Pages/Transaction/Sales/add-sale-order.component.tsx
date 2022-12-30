import { param } from 'jquery';
import * as React from 'react';
import './add-sale-order.styles.css';
import { useState, useRef } from 'react'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
const AddSaleOrder = () => {

  /* */

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


    //Fetch Item COde 
    const fetchItemCodeArr = async () => {
        const itemCodeUrl = `http://${state.domain}:${state.port}/api/values/GetItemMaster?itemgroup=265&Itembrand=0&Itemcategory=0&Itemsubcategory=0&itemtype=0&itemgrptype=0&Comp=${getCompCode}&FY=${state.Fy}`;
        try {
            const response = await fetch(itemCodeUrl);
            const json = await response.json();
            if (json.Status == 1) {

                setItemCodeArr(json.Data);
                console.log('ItemCodeArr', itemCodeArr);


            } else {
                console.log("ItemCodeArr has no data");
            }


        } catch (error) {
            console.log("error", error);
        }
    };

    //Fetch MasterDetails
    const fetchMasterDetails = async () => {
        const partyCodeUrl = `http://${state.domain}:${state.port}/api/values/GetAccountMasterDetails`
        var params: any = [];

        params.push(`partyName=${getAccName}`)
        params.push(`comp=${getCompCode}`)
        params.push(`fy=${state.Fy}`)
        try {
            const response2 = await fetch(partyCodeUrl + '?' + params.join('&'));
            const json2 = await response2.json();
            if (json2.Status == 1) {

                setMasterDetails(json2.Data[0]);
                console.log('master-details', masterDetails);


            } else {
                console.log("Master Details has no data");
            }


        } catch (error) {
            console.log("error", error);
        }
    };
    React.useEffect(() => {
        fetchItemCodeArr()
        fetchMasterDetails()

    }, [itemCodeArr.length, masterDetails.length]);

    React.useEffect(() => {
        handleSetItemCode
        console.log('SelecteditemCode', changeItemCode)
        kinda.current = changeItemName.split(" | ")[1];
        console.log('change item Name',changeItemName.split(" | ")[1])
        fetchItemDetails()
    }, [changeItemCode])

    //fetch item Details
    const fetchItemDetails = async () => {
        const itemDetailsUrl = `http://${state.domain}:${state.port}/api/values/getitemDetails`
        var params2: any = [];
        params2.push(`item=${changeItemCode}`);
        params2.push(`comp=${getCompCode}`)
        params2.push(`fy=${state.Fy}`)

        if (changeItemCode != '') {

            try {
                console.log(itemDetailsUrl + '?' + params2.join('&'))
                const response3 = await fetch(itemDetailsUrl + '?' + params2.join('&'));
                const json3 = await response3.json();
                if (json3.Status == 1) {
                   
                    wholeLineItem = [...wholeLineItem]
                        wholeLineItem.pop();

                    wholeLineItem.push(json3.Data[0])
                    wholeLineItem.push({})
                    
                    setWholeLineItem(wholeLineItem);
                    console.log('wholeLineItem', wholeLineItem)
                } else {
                    console.log("Item Details has no data");
                }
            }
            catch (error) {
                console.log("error", error);
            }
        }
    }

    const handleSetItemCode = (e: any) => {
        var CHANGEITEMCODE = e.target.value
        console.log('itemCode', CHANGEITEMCODE)
        for (let i = 0; i < itemCodeArr.length; i++) {
            if (CHANGEITEMCODE == itemCodeArr[i].ITEMNAME) {
                setChangeItemCode(itemCodeArr[i].ITEMCODE)
                setChangeItemName(itemCodeArr[i].ITEMNAME)
               
                break;
            }
        }

    }

    function RemoveIndex(e: any) {
        const index = e.target.value;
        const ind = parseInt(index);
        const rows = [...wholeLineItem]
        rows.splice(ind, 1);
        setWholeLineItem(rows)
        console.log('remaining line items ',wholeLineItem)
    }

    return (
        <div className="firstDiv card main" >


            <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                <div className="row row-content col-sm-12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#8389d4', margin: '10px 0 0 0', padding: '0' }}>

                    <span className="card-title" style={{
                        fontSize: '15px', color: 'white', fontWeight: 900, padding: '0',
                        margin: '0'
                    }}>Add Sale Order</span>

                </div>
                <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                    <div className="card addSalecard">
                        <div className="card-body" style={{ margin: '0', padding: '0', minHeight:'28vh' }}>
                            <form className="form">


                                <span className="form-group col-sm-12" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '10px 2px' }}>
                                    <label style={{ margin: '0 30px 0 12px', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="series">Series</label>
                                    <span style={{ color: 'red', fontWeight: 'bold', fontSize: '15px', margin: '0', padding: '0' }}>{getSoSeries}</span>
                                </span>

                                <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' }}>
                                    <> <label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="so-date">SO Date</label>
                                        <input className="form-control col-sm-3" type="text" name="so-date" /></>

                                    <> <label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="so-no">So No.</label>
                                        <input className="form-control col-sm-3" type="text" name="so-no" /></>
                                </span>

                                <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' }}>
                                    <><label style={{ margin: '0 46px 0 10px', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="del-date">Del. Date</label>
                                        <DatePicker

                                            name="startDate"
                                            className="startDate form-control col-sm-10 m-0"
                                            selectsStart

                                            dateFormat="MMM dd, yyyy"
                                            closeOnScroll={true}
                                            selected={startDate}

                                            onChange={(k: Date) => {
                                                setStartDate(k)
                                                var format = k.toString().slice(4, 15)
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

                                                var fDate = `${yearOnly}-${monthNo}-${dateOnly}`
                                                console.log(fDate)
                                                setChangeStartDate(fDate)
                                            }
                                            }

                                        /></>

                                    <> <label style={{ margin: '0 46px 0 10px', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="del-date">Del. Exp. Date</label>
                                        <DatePicker name="toDate" className="toDate form-control col-sm-10" dateFormat="MMM dd, yyyy" closeOnScroll={true} selected={endDate} onChange={(date: Date) => {
                                            setEndDate(date)
                                            var format = date.toString().slice(4, 15)
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

                                            var eDate = `${yearOnly}-${monthNo}-${dateOnly}`
                                            console.log(eDate)
                                            setChangeEndDate(eDate)
                                        }} /></>
                                </span>

                                <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' }}>
                                    <> <label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="sold-to">Sold To</label>
                                        <input className="form-control col-sm-3" type="text" name="sold-to" value={getAccName!} readOnly />
                                    </>
                                    <> <label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="address">Address</label>
                                        <input className="form-control col-sm-3" type="text" name="address" value={masterDetails.ADDRESSNAME} readOnly />
                                    </>
                                </span>

                            </form>
                        </div>

                    </div>

                    <div className="card addSalecard">

                        <div className="card-body" style={{ margin: '0', padding: '0',minHeight:'28vh' }}>
                            <form className="form">


                                <span className="form-group col-sm-12" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' }}>

                                    <> <label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="delievery-terms">Del. Terms</label>
                                        <input className="form-control col-sm-3" type="text" name="delievery-terms" value={masterDetails.DELTERM} readOnly /></>

                                    <> <label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="open-po">Open P.O</label>
                                        <input className="form-control col-sm-3" type="text" name="open-po" /></>
                                </span>


                                <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' }}>
                                    <><label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="payment-terms">Pay. Terms</label>
                                        <input className="form-control col-sm-3" type="text" name="payment-terms" value={masterDetails.PAYTERM} readOnly /></>

                                    <> <label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="upload-po">Upload P.O</label>
                                        <input className="form-control col-sm-3" type="text" name="upload-po" /></>
                                </span>


                                <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' }}>
                                    <> <label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="currency">Currency</label>
                                        <input className="form-control col-sm-3" type="text" name="currency" /></>
                                    <><label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="sale-type">Sale Type</label>
                                        <input className="form-control col-sm-3" type="text" name="sale-type" readOnly value={masterDetails.TAXNAME} /></>



                                </span>


                                <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' }}>
                                    <> <label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="po-no">Po. No.</label>
                                        <input className="form-control col-sm-3" type="text" name="po-no" /></>

                                    <><label style={{ margin: '0', padding: '0', fontSize: '14px', visibility: 'hidden' }} className="form-label col-sm-2" htmlFor="sale-type"></label>
                                        <input className="form-control col-sm-3" style={{ visibility: 'hidden' }} type="text" /></>
                                </span>


                            </form>
                        </div>

                    </div>
                </div>

            </div>
            <div className="card-footer row row-content col-sm-12 form-group" style={{ margin: '0', padding: '0' }}>
                <label style={{ margin: '0' }} className='col-sm-1 label-control'>Type</label><input style={{ margin: '0' }} type="text" className='form-control col-sm-1' value={masterDetails.CUSTTYPE} readOnly />


                <label style={{ margin: '0' }} className='col-sm-1 label-control'>State</label><input style={{ margin: '0' }} type="text" className='form-control col-sm-1' value={masterDetails.STATENAME} readOnly />

                <label style={{ margin: '0' }} className='col-sm-2 label-control'>Scheme Enable</label><input style={{ margin: '0' }} type="text" className='form-control col-sm-1' value={masterDetails.SCHEME} readOnly />

                <label style={{ margin: '0' }} className='col-sm-2 label-control'>Pay Status</label><input style={{ margin: '0' }} type="text" className='form-control col-sm-1' value={masterDetails.PAYTO} readOnly />


                <label style={{ margin: '0' }} className='col-sm-1 label-control'>Dis %</label><input style={{ margin: '0' }} type="text" className='form-control col-sm-1' />

            </div>

            <hr style={{ border: '2px solid grey', opacity: '0.5' }} />


            <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                <div className="card">

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>
                        <span className="card-title" style={{ fontSize: '15px', color: 'white', fontWeight: 900, margin: '0', padding: '0' }}>Line Item Details</span>
                    </div>

                    <div className="table-responsive" style={{ padding: '0' }}>

                        <table className="table table-striped table-bordered table-hover table-sm" style={{ margin: '0' }}>
                            <thead className="thead-light table-secondary text-center">
                                <tr>
                                    <th scope="col">S.No.</th>
                                    <th scope="col" style={{ padding: '0 12em'}}><span>ItemCode </span></th>
                                    <th scope="col" style={{padding:'0 2em'}} ><span style={{ margin: '0 10px' }}  >ItemName</span></th>
                                    <th scope="col" style={{padding:'0 2em'}} ><span style={{ margin: '0 10px' }}  >Quantity</span></th>
                                    <th scope="col" style={{padding:'0 2em'}} ><span style={{ margin: '0 10px' }}  >Uom</span></th>
                                    <th scope="col" style={{padding:'0 2em'}} ><span style={{ margin: '0 10px' }}  >MRP</span></th>
                                    <th scope="col" style={{padding:'0 2em'}} ><span style={{ margin: '0 10px' }}  >Basic.Rate</span></th>
                                    <th scope="col" style={{padding:'0 2em'}} ><span style={{ margin: '0 10px' }}  >Sale.Rate</span></th>
                                    <th scope="col" style={{padding:'0 2em'}} ><span style={{ margin: '0 10px' }}  >Amount.Rate</span></th>
                                    <th scope="col" style={{padding:'0 2em'}} ><span style={{ margin: '0 10px' }}  >Dis(%)</span></th>
                                    <th scope="col" style={{padding:'0 2em'}} ><span style={{ margin: '0 10px' }}  >Dis.Sale.Rate</span></th>
                                    <th scope="col" style={{padding:'0 2em'}} ><span style={{ margin: '0 10px' }}  >Dis(₹)</span></th>
                                    <th scope="col" style={{padding:'0 2em'}} ><span style={{ margin: '0 10px' }}  >Amount</span></th>
                                    <th scope="col" style={{padding:'0 2em'}} ><span style={{ margin: '0 10px' }}  >S.Dis(%)</span></th>
                                    <th scope="col" style={{padding:'0 2em'}} ><span style={{ margin: '0 10px' }}  >S.Dis.Amt</span></th>
                                    <th scope="col" style={{padding:'0 2em'}} ><span style={{ margin: '0 10px' }}  >Amount</span></th>
                                    <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >GST(%)</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    wholeLineItem.map((obj: any, i: any) => {
                                        return (    
                                         <tr>

                                                <th scope="row" className="text-center">{i + 1}</th>
                                                <td className="item-code">
                                                    <input style={{ margin: '0', padding: '0', width: '100%' }} className="form-control text-center" list="itemCodeList" type="text" id="cell-ItemCode" onChange=  {handleSetItemCode} / >
                                                    {
                                                        itemCodeArr != null && itemCodeArr.length > 0 ?
                                                
                                                            (
                                                                <datalist className='item-code-list' id='itemCodeList'>
                                                                    {
                                                                        itemCodeArr.map((obj: any) => {
                                                                            return <option data-value={obj.ITEMCODE}>{obj.ITEMNAME}</option>
                                                                        })
                                                                    }
                                                
                                                
                                                                </datalist>
                                                
                                                            )
                                                
                                                            : null
                                                
                                                
                                                }

                                                </td>

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
                                                    i == wholeLineItem.length - 2 ? (<button type="button" onClick={RemoveIndex} value={i} ><i><svg style={{width:'21px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M576 384C576 419.3 547.3 448 512 448H205.3C188.3 448 172 441.3 160 429.3L9.372 278.6C3.371 272.6 0 264.5 0 256C0 247.5 3.372 239.4 9.372 233.4L160 82.75C172 70.74 188.3 64 205.3 64H512C547.3 64 576 92.65 576 128V384zM271 208.1L318.1 256L271 303C261.7 312.4 261.7 327.6 271 336.1C280.4 346.3 295.6 346.3 304.1 336.1L352 289.9L399 336.1C408.4 346.3 423.6 346.3 432.1 336.1C442.3 327.6 442.3 312.4 432.1 303L385.9 256L432.1 208.1C442.3 199.6 442.3 184.4 432.1 175C423.6 165.7 408.4 165.7 399 175L352 222.1L304.1 175C295.6 165.7 280.4 165.7 271 175C261.7 184.4 261.7 199.6 271 208.1V208.1z" /></svg></i></button>) : null
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
                <div className="card col-sm-5" style={{ padding: '0', margin: '0', minHeight:'20vh' }}>

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
                <div className="card col-sm-6" style={{ padding: '0', margin: '0', minHeight: '20vh' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>
                        <span className="card-title" style={{ fontSize: '15px', color: 'white', fontWeight: 900, margin: '0', padding: '0' }}>HSN Details</span>
                    </div>

                    <div className="table-responsive card-body" style={{ margin: '0', padding: '0' }}>
                        <table className="table table-striped table-bordered table-hover table-sm" style={{ margin: '0' }}>
                            <thead className="thead-light table-secondary text-center">
                                <tr>
                                    <th>S. No</th>
                                    <th>HSN No.</th>
                                    <th>Quantity</th>
                                    <th>UOM</th>
                                    <th>Tot. Amt</th>
                                    <th>Taxable Amt.</th>
                                    <th>GST %</th>
                                    <th>IGST Amt</th>
                                    <th>GST</th>
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
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
                        <button className="hsn-btn btn btn-sm btn-primary">Scheme Apply</button>
                        <button style={{ margin: '0 10px' }} className="hsn-btn btn btn-sm btn-secondary">Save</button>
                        <button style={{ margin: '0 10px' }} className="hsn-btn btn btn-sm btn-success">Save & Submit</button>
                        <button className="hsn-btn btn btn-sm btn-danger">Quit</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default AddSaleOrder;