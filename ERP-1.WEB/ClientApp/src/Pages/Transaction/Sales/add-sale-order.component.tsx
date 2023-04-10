import { param } from 'jquery';
import * as React from 'react';
import './add-sale-order.styles.css';
import { useState, useRef } from 'react'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { MasterInput2 } from '../../../components/custom-input/custom-input.component';
import DatalistInput from 'react-datalist-input';
import 'react-datalist-input/dist/styles.css';
import 'ag-grid-autocomplete-editor/dist/main.css';
import WriteGrid from '../../../components/Grid Component/grid.component';
import AutocompleteSelectCellEditor from 'ag-grid-autocomplete-editor';
import CustomeSwitch from '../../../components/CustomSwitch/custom-switch.component';
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
        console.log('change item Name', changeItemName.split(" | ")[1])
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
        console.log('remaining line items ', wholeLineItem)
    }


    let data: any[] = [{ qcparameter: null, desc: null, smp: null, uom: null, targetval: null, lowerval: null, upperval: null, narration: null, qctype: null, measuringmethod: null }]

    var ColDef: any[] = [{ field: 'srno', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },
    { field: 'itemname', headerName: 'Item Name', minWidth: 200 },
    { field: 'qty', headerName: 'Quantity', minWidth: 200 },
    { field: 'uom', headerName: 'UOM', minWidth: 200 },
    { field: 'mrp', headerName: 'MRP', minWidth: 200 },
    { field: 'basicrate', headerName: 'Basic Rate', minWidth: 200 },
    { field: 'sale', headerName: 'Sale Rate', minWidth: 200 },
    { field: 'amountrate ', headerName: 'Amount Rate', minWidth: 200 },
    { field: 'disp ', headerName: 'Dis(%)', minWidth: 200 },
    { field: 'dissale', headerName: 'Dis. Sale. Rate', minWidth: 200 },
    { field: 'dis ', headerName: 'Dis(₹)', minWidth: 200 },
    { field: 'amount ', headerName: 'Amount', minWidth: 200 },
    { field: 'sdisp ', headerName: 'S.Dis(%)', minWidth: 200 },
    { field: 'sdispa', headerName: 'S.Dis.Amt.', minWidth: 200 },
    { field: 'amountt', headerName: 'Amount', minWidth: 200 },
    { field: 'gst', headerName: 'GST', minWidth: 200 },

    ]

    let dataBill: any[] = [{ bill: null, narration: null, rate: null, amount: null }]

    var ColDefBill: any[] = [
        { field: 'srno', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },
        { field: 'bill', headerName: 'Bill Sundary', minWidth: 100 },
        { field: 'narration', headerName: 'Narration', minWidth: 100 },
        { field: 'rate', headerName: '@', minWidth: 100 },
        { field: 'amount', headerName: 'Amount', minWidth: 100 }

    ]

    let dataHsn: any[] = [{ bill: null, narration: null, rate: null, amount: null }]

    var ColDefHsn: any[] = [{ field: 'srno', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },
    { field: 'hsn', headerName: 'HSN No.', minWidth: 200 },
    { field: 'qty', headerName: 'Quantity', minWidth: 200 },
    { field: 'uom', headerName: 'UOM', minWidth: 200 },
    { field: 'totamt', headerName: 'Tot. Amt', minWidth: 200 },
    { field: 'tax', headerName: 'Taxable Amt', minWidth: 200 },
    { field: 'gst', headerName: 'GST %', minWidth: 200 },
    { field: 'igst', headerName: 'IGST Amt', minWidth: 200 },



    ]


    return (
        <>
            <div className="firstDiv card main" >


                <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                    <div className="row row-content col-sm-12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>

                        <span className="card-title" style={{
                            fontSize: '15px', color: 'white', fontWeight: 900, padding: '0',
                            margin: '0'
                        }}>Add Sale Order</span>

                    </div>
                    <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                        <div className="card-body row col-sm-12 m-0 p-0">
                            <form className="row-content form col-sm-12 pt-0">
                                <fieldset className="form-group border p-0" >
                                    <legend className="px-2" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>State Order Details</legend>



                                    <span className="d-flex section2 col-sm-12">
                                        <MasterInput2 name="series" label="Series" ipTitle="Enter So No." ipType="text" classCategory="form-control col-4 inp" value={getSoSeries} readOnly />
                                        <span className="col-1 m-0"></span>
                                        {/*<label style={{ margin: '0 30px 0 12px', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="series">Series</label>*/}
                                        {/*<span style={{ color: 'red', fontWeight: 'bold', fontSize: '15px', margin: '0', padding: '0' }}>{getSoSeries}</span>*/}
                                        <MasterInput2 name="so-no" label="So No." ipTitle="Enter So No." ipType="text" classCategory="form-control col-4 inp" />
                                    </span>

                                    <span className="d-flex section2 col-sm-12">


                                        {/*<> */}
                                        {/*    <label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="so-date">SO Date</label>*/}
                                        {/*    <input className="form-control col-sm-3" type="text" name="so-date" />*/}
                                        {/*</>*/}
                                        <MasterInput2 name="customername" label="Customer Name" ipTitle="Enter Customer Name" ipType="text" classCategory="form-control col-4 inp" />
                                        <span className="col-1 m-0"></span>
                                        {/*  <MasterInput2 name="so-date" label="SO Date" ipTitle="Enter SO Date" ipType="text" classCategory="form-control col-4 inp" />*/}
                                        {/*<> <label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="so-no">So No.</label>*/}
                                        {/*    <input className="form-control col-sm-3" type="text" name="so-no" /></>*/}
                                        <MasterInput2 name="address" label="Address" ipTitle="Enter Address" value={masterDetails.ADDRESSNAME} ipType="text" classCategory="form-control col-4 inp" readOnly />
                                    </span>

                                    <span className="d-flex section2 col-sm-12">


                                        <MasterInput2 name="sodate" label="So Date" ipTitle="Enter So Date" ipType="text" classCategory="form-control col-4 inp" />
                                        <span className="col-1 m-0"></span>

                                        <MasterInput2 name="deldate" label="Del. Date" ipTitle="Enter Del. Date" ipType="date" classCategory="form-control col-4 inp" />
                                    </span>

                                    <span className="d-flex section2 col-sm-12">


                                        <MasterInput2 name="deledate" label="Del. Exp. Date" ipTitle="Enter So Date" ipType="date" classCategory="form-control col-4 inp" />
                                        <span className="col-1 m-0"></span>

                                    </span>


                                    {/*<span className="d-flex section2 col-sm-12">*/}
                                    {/*   <label style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 mt-2  labl2" htmlFor="del-date">Del. Date</label>*/}

                                    {/*        <DatePicker*/}

                                    {/*            name="startDate"*/}
                                    {/*            className="startDate form-control col-sm-4 m-0"*/}
                                    {/*            selectsStart*/}

                                    {/*            dateFormat="MMM dd, yyyy"*/}
                                    {/*            closeOnScroll={true}*/}
                                    {/*            selected={startDate}*/}

                                    {/*            onChange={(k: Date) => {*/}
                                    {/*                setStartDate(k)*/}
                                    {/*                var format = k.toString().slice(4, 15)*/}
                                    {/*                var yearOnly = format.slice(7, 11)*/}
                                    {/*                var dateOnly = format.slice(4, 6)*/}
                                    {/*                var MonthOnly = format.slice(0, 3)*/}
                                    {/*                var monthNo = 0;*/}
                                    {/*                if (MonthOnly.toLowerCase() == "jan") monthNo = 1;*/}
                                    {/*                else if (MonthOnly.toLowerCase() == "feb") monthNo = 2;*/}
                                    {/*                else if (MonthOnly.toLowerCase() == "mar") monthNo = 3;*/}
                                    {/*                else if (MonthOnly.toLowerCase() == "apr") monthNo = 4;*/}
                                    {/*                else if (MonthOnly.toLowerCase() == "may") monthNo = 5;*/}
                                    {/*                else if (MonthOnly.toLowerCase() == "jun") monthNo = 6;*/}
                                    {/*                else if (MonthOnly.toLowerCase() == "jul") monthNo = 7;*/}
                                    {/*                else if (MonthOnly.toLowerCase() == "aug") monthNo = 8;*/}
                                    {/*                else if (MonthOnly.toLowerCase() == "sep") monthNo = 9;*/}
                                    {/*                else if (MonthOnly.toLowerCase() == "oct") monthNo = 10;*/}
                                    {/*                else if (MonthOnly.toLowerCase() == "nov") monthNo = 11;*/}
                                    {/*                else if (MonthOnly.toLowerCase() == "dec") monthNo = 12;*/}

                                    {/*                var fDate = `${yearOnly}-${monthNo}-${dateOnly}`*/}
                                    {/*                console.log(fDate)*/}
                                    {/*                setChangeStartDate(fDate)*/}
                                    {/*            }*/}
                                    {/*            }*/}

                                    {/*        />*/}
                                    {/*    <span className="col-1 m-0"></span>*/}

                                    {/*    <> <label style={{ fontSize:'1rem' }} className="form-label labl ml-2 mr-2 mt-2  labl2" htmlFor="del-date">Del. Exp. Date</label>*/}
                                    {/*        <DatePicker name="toDate" className="toDate form-control col-sm-10" dateFormat="MMM dd, yyyy" closeOnScroll={true} selected={endDate} onChange={(date: Date) => {*/}
                                    {/*            setEndDate(date)*/}
                                    {/*            var format = date.toString().slice(4, 15)*/}
                                    {/*            var yearOnly = format.slice(7, 11)*/}
                                    {/*            var dateOnly = format.slice(4, 6)*/}
                                    {/*            var MonthOnly = format.slice(0, 3)*/}
                                    {/*            var monthNo = 0;*/}
                                    {/*            if (MonthOnly.toLowerCase() == "jan") monthNo = 1;*/}
                                    {/*            else if (MonthOnly.toLowerCase() == "feb") monthNo = 2;*/}
                                    {/*            else if (MonthOnly.toLowerCase() == "mar") monthNo = 3;*/}
                                    {/*            else if (MonthOnly.toLowerCase() == "apr") monthNo = 4;*/}
                                    {/*            else if (MonthOnly.toLowerCase() == "may") monthNo = 5;*/}
                                    {/*            else if (MonthOnly.toLowerCase() == "jun") monthNo = 6;*/}
                                    {/*            else if (MonthOnly.toLowerCase() == "jul") monthNo = 7;*/}
                                    {/*            else if (MonthOnly.toLowerCase() == "aug") monthNo = 8;*/}
                                    {/*            else if (MonthOnly.toLowerCase() == "sep") monthNo = 9;*/}
                                    {/*            else if (MonthOnly.toLowerCase() == "oct") monthNo = 10;*/}
                                    {/*            else if (MonthOnly.toLowerCase() == "nov") monthNo = 11;*/}
                                    {/*            else if (MonthOnly.toLowerCase() == "dec") monthNo = 12;*/}

                                    {/*            var eDate = `${yearOnly}-${monthNo}-${dateOnly}`*/}
                                    {/*            console.log(eDate)*/}
                                    {/*            setChangeEndDate(eDate)*/}
                                    {/*        }} /></>*/}
                                    {/*</span>*/}

                                    {/*<span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' }}>*/}
                                    {/*    <> <label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="sold-to">Sold To</label>*/}
                                    {/*        <input className="form-control col-sm-3" type="text" name="sold-to" value={getAccName!} readOnly />*/}
                                    {/*    </>*/}
                                    {/*<> <label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="address">Address</label>*/}
                                    {/*    <input className="form-control col-sm-3" type="text" name="address" value={masterDetails.ADDRESSNAME} readOnly />*/}
                                    {/*</>*/}
                                    {/*</span>*/}

                                </fieldset>
                            </form>
                        </div>



                        <div className="card-body row col-sm-12 m-0 p-0">
                            <form className="row-content form col-sm-12 pt-0">
                                <fieldset className="form-group border p-0" >
                                    <legend className="px-2" data-toggle="collapse" data-target="#delivery" aria-expanded="true" aria-controls="delivery" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Delivery & Payment Term<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>

                                    <div className="show" id="delivery">


                                        <span className="d-flex section2 col-sm-12">
                                            <MasterInput2 name="delterm" label="Del. Terms" ipTitle="Enter Del. Terms" ipType="text" classCategory="form-control col-4 inp" value={masterDetails.DELTERM} readOnly />
                                            <span className="col-1 m-0"></span>

                                            <MasterInput2 name="payterms" label="Pay. Terms" ipTitle="Enter Pay. Terms" ipType="text" classCategory="form-control col-4 inp" value={masterDetails.PAYTERM} readOnly />

                                            {/*<> <label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="delievery-terms">Del. Terms</label>*/}
                                            {/*    <input className="form-control col-sm-3" type="text" name="delievery-terms" value={masterDetails.DELTERM} readOnly /></>*/}

                                            {/*<> <label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="open-po">Open P.O</label>*/}
                                            {/*    <input className="form-control col-sm-3" type="text" name="open-po" /></>*/}
                                        </span>

                                        <span className="d-flex section2 col-sm-12">
                                            <MasterInput2 name="currency" label="Currency" ipTitle="Enter Currency" ipType="text" classCategory="form-control col-4 inp" />
                                            <span className="col-1 m-0"></span>
                                            <>
                                                <label htmlFor="series" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 labl2">Open Po.</label>
                                            </>
                                            <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                                                <DatalistInput
                                                    placeholder={'Select Open Po....'}
                                                    className="d-flex col-12 m-0 p-0"
                                                    inputProps={{ className: 'form-control inp col-12 datalist int', name: 'openpo' }}
                                                    listboxProps={{ className: 'text-left mt-5' }}

                                                    onSelect={(item: any) => { console.log('id', item.id); }}
                                                    items={[{ id: 1, value: 'Y' }, { id: 2, value: 'N' }]}
                                                />

                                            </span>

                                        </span>

                                        <span className="d-flex section2 col-sm-12">
                                            <MasterInput2 name="uploadfield" label="Upload Field" ipTitle="Enter Upload Field" ipType="text" classCategory="form-control col-4 inp" />
                                            <span className="col-1 m-0"></span>
                                            <MasterInput2 name="uploadpo" label="Upload PO" ipTitle="Enter Upload Po" ipType="text" classCategory="form-control col-4 inp" />

                                        </span>


                                        <span className="d-flex section2 col-sm-12">
                                            <MasterInput2 name="saletype" label="Sale Type" ipTitle="Enter Sale Type" ipType="text" value={masterDetails.TAXNAME} classCategory="form-control col-4 inp" readOnly />
                                            <span className="col-1 m-0"></span>

                                        </span>

                                        <span className="form col-sm-12 row-content card-body pt-0 pb-0 px-2">
                                            <span className="d-flex flex-column section2 col-sm-12" style={{ marginLeft: '' }}>
                                                <CustomeSwitch lablClass="custom-control-label col-9" label="Cancel Order" id="c1" name="c1" classCat="form-control custom-control-input col-2 subMaster switch" />
                                                <CustomeSwitch lablClass="custom-control-label col-9" label="Project Order" id="c2" name="c2" classCat="form-control custom-control-input col-2 subMaster switch" />
                                            </span>
                                        </span>

                                        {/*<span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' }}>*/}
                                        {/*    <> <label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="po-no">Po. No.</label>*/}
                                        {/*        <input className="form-control col-sm-3" type="text" name="po-no" /></>*/}

                                        {/*    <><label style={{ margin: '0', padding: '0', fontSize: '14px', visibility: 'hidden' }} className="form-label col-sm-2" htmlFor="sale-type"></label>*/}
                                        {/*        <input className="form-control col-sm-3" style={{ visibility: 'hidden' }} type="text" /></>*/}
                                        {/*        </span>*/}
                                    </div>

                                </fieldset>
                            </form>
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

                <div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">
                    <WriteGrid title="Item Details" titleClr="blue" OpenSubLayer={() => { }} colDef={ColDef} data={data} />
                </div>

                {/*<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>*/}
                {/*    <span className="card-title" style={{ fontSize: '15px', color: 'white', fontWeight: 900, margin: '0', padding: '0' }}>Line Item Details</span>*/}
                {/*</div>*/}

                {/*<div className="table-responsive" style={{ padding: '0' }}>*/}

                {/*    <table className="table table-striped table-bordered table-hover table-sm" style={{ margin: '0' }}>*/}
                {/*        <thead className="thead-light table-secondary text-center">*/}
                {/*            <tr>*/}
                {/*                <th scope="col">S.No.</th>*/}
                {/*                <th scope="col" style={{ padding: '0 12em'}}><span>ItemCode </span></th>*/}
                {/*                <th scope="col" style={{padding:'0 2em'}} ><span style={{ margin: '0 10px' }}  >ItemName</span></th>*/}
                {/*                <th scope="col" style={{padding:'0 2em'}} ><span style={{ margin: '0 10px' }}  >Quantity</span></th>*/}
                {/*                <th scope="col" style={{padding:'0 2em'}} ><span style={{ margin: '0 10px' }}  >Uom</span></th>*/}
                {/*                <th scope="col" style={{padding:'0 2em'}} ><span style={{ margin: '0 10px' }}  >MRP</span></th>*/}
                {/*                <th scope="col" style={{padding:'0 2em'}} ><span style={{ margin: '0 10px' }}  >Basic.Rate</span></th>*/}
                {/*                <th scope="col" style={{padding:'0 2em'}} ><span style={{ margin: '0 10px' }}  >Sale.Rate</span></th>*/}
                {/*                <th scope="col" style={{padding:'0 2em'}} ><span style={{ margin: '0 10px' }}  >Amount.Rate</span></th>*/}
                {/*                <th scope="col" style={{padding:'0 2em'}} ><span style={{ margin: '0 10px' }}  >Dis(%)</span></th>*/}
                {/*                <th scope="col" style={{padding:'0 2em'}} ><span style={{ margin: '0 10px' }}  >Dis.Sale.Rate</span></th>*/}
                {/*                <th scope="col" style={{padding:'0 2em'}} ><span style={{ margin: '0 10px' }}  >Dis(₹)</span></th>*/}
                {/*                <th scope="col" style={{padding:'0 2em'}} ><span style={{ margin: '0 10px' }}  >Amount</span></th>*/}
                {/*                <th scope="col" style={{padding:'0 2em'}} ><span style={{ margin: '0 10px' }}  >S.Dis(%)</span></th>*/}
                {/*                <th scope="col" style={{padding:'0 2em'}} ><span style={{ margin: '0 10px' }}  >S.Dis.Amt</span></th>*/}
                {/*                <th scope="col" style={{padding:'0 2em'}} ><span style={{ margin: '0 10px' }}  >Amount</span></th>*/}
                {/*                <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >GST(%)</span></th>*/}
                {/*            </tr>*/}
                {/*        </thead>*/}
                {/*        <tbody>*/}
                {/*            {*/}
                {/*                wholeLineItem.map((obj: any, i: any) => {*/}
                {/*                    return (    */}
                {/*                     <tr>*/}

                {/*                            <th scope="row" className="text-center">{i + 1}</th>*/}
                {/*                            <td className="item-code">*/}
                {/*                                <input style={{ margin: '0', padding: '0', width: '100%' }} className="form-control text-center" list="itemCodeList" type="text" id="cell-ItemCode" onChange=  {handleSetItemCode} / >*/}
                {/*                                {*/}
                {/*                                    itemCodeArr != null && itemCodeArr.length > 0 ?*/}

                {/*                                        (*/}
                {/*                                            <datalist className='item-code-list' id='itemCodeList'>*/}
                {/*                                                {*/}
                {/*                                                    itemCodeArr.map((obj: any) => {*/}
                {/*                                                        return <option data-value={obj.ITEMCODE}>{obj.ITEMNAME}</option>*/}
                {/*                                                    })*/}
                {/*                                                }*/}


                {/*                                            </datalist>*/}

                {/*                                        )*/}

                {/*                                        : null*/}


                {/*                            }*/}

                {/*                            </td>*/}

                {/*                            <td>{kinda.current}</td>*/}

                {/*                            <td><input type="text" className="form-control" required /></td>*/}
                {/*                            <td>{obj.UOMNAME}</td>*/}
                {/*                            <td>{obj.MRP}</td>*/}
                {/*                            <td></td>*/}
                {/*                            <td></td>*/}
                {/*                            <td></td>*/}
                {/*                            <td></td>*/}
                {/*                            <td></td>*/}
                {/*                            <td></td>*/}
                {/*                            <td>{obj.CGST}</td>*/}
                {/*                            <td>{obj.SGST}</td>*/}
                {/*                            <td>{obj.SALEPRICE}</td>*/}
                {/*                            <td>{obj.IGST}</td>*/}
                {/*                            <td>{obj.GSTCAT}</td>*/}
                {/*                            {*/}
                {/*                                i == wholeLineItem.length - 2 ? (<button type="button" onClick={RemoveIndex} value={i} ><i><svg style={{width:'21px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M576 384C576 419.3 547.3 448 512 448H205.3C188.3 448 172 441.3 160 429.3L9.372 278.6C3.371 272.6 0 264.5 0 256C0 247.5 3.372 239.4 9.372 233.4L160 82.75C172 70.74 188.3 64 205.3 64H512C547.3 64 576 92.65 576 128V384zM271 208.1L318.1 256L271 303C261.7 312.4 261.7 327.6 271 336.1C280.4 346.3 295.6 346.3 304.1 336.1L352 289.9L399 336.1C408.4 346.3 423.6 346.3 432.1 336.1C442.3 327.6 442.3 312.4 432.1 303L385.9 256L432.1 208.1C442.3 199.6 442.3 184.4 432.1 175C423.6 165.7 408.4 165.7 399 175L352 222.1L304.1 175C295.6 165.7 280.4 165.7 271 175C261.7 184.4 261.7 199.6 271 208.1V208.1z" /></svg></i></button>) : null*/}
                {/*                            }*/}


                {/*                     </tr>*/}
                {/*                        )*/}
                {/*                })*/}

                {/*            }*/}

                {/*        </tbody>*/}
                {/*    </table>*/}
                {/*</div>*/}




                <hr style={{ border: '2px solid grey', opacity: '0.5' }} />


                <fieldset className="form-group border p-0" >
                    <legend className="px-2" data-toggle="collapse" data-target="#billsundry" aria-expanded="true" aria-controls="billsundry" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Bill Sundry Details/HSN Summary<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>

                    <div className="show d-flex col-sm-12 justify-content-evenly" id="billsundry">
                        <div className="row card row-content col-sm-6 addSaleForm container container-fluid container-lg mb-3 mr-3">
                            <WriteGrid title="Bill Sundry Details" h='200px' titleClr="blue" OpenSubLayer={() => { }} colDef={ColDefBill} data={dataBill} />
                        </div>
                        {/*<div className="col-1"></div>*/}
                        <div className="row card row-content col-sm-6 addSaleForm container container-fluid container-lg mb-3">
                            <WriteGrid title="HSN Details" h='200px' titleClr="blue" OpenSubLayer={() => { }} colDef={ColDefHsn} data={dataHsn} />
                        </div>
                    </div>
                </fieldset>

                {/*<div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">*/}
                {/*    <div className="card col-sm-5" style={{ padding: '0', margin: '0', minHeight:'20vh' }}>*/}

                {/*        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>*/}
                {/*            <span className="card-title" style={{ fontSize: '15px', color: 'white', fontWeight: 900, margin: '0', padding: '0' }}>Bill Sundry Details</span>*/}
                {/*        </div>*/}
                {/*        <div className="card-body table-responsive" style={{ margin: '0', padding: '0' }}>*/}
                {/*            <table className="table table-striped table-bordered table-hover table-sm" style={{ margin: '0' }}>*/}
                {/*                <thead className="thead-light table-secondary text-center">*/}
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
                {/*<div className="card col-sm-6" style={{ padding: '0', margin: '0', minHeight: '20vh' }}>*/}
                {/*    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>*/}
                {/*        <span className="card-title" style={{ fontSize: '15px', color: 'white', fontWeight: 900, margin: '0', padding: '0' }}>HSN Details</span>*/}
                {/*    </div>*/}

                {/*<div className="table-responsive card-body" style={{ margin: '0', padding: '0' }}>*/}
                {/*    <table className="table table-striped table-bordered table-hover table-sm" style={{ margin: '0' }}>*/}
                {/*        <thead className="thead-light table-secondary text-center">*/}
                {/*            <tr>*/}
                {/*                <th>S. No</th>*/}
                {/*                <th>HSN No.</th>*/}
                {/*                <th>Quantity</th>*/}
                {/*                <th>UOM</th>*/}
                {/*                <th>Tot. Amt</th>*/}
                {/*                <th>Taxable Amt.</th>*/}
                {/*                <th>GST %</th>*/}
                {/*                <th>IGST Amt</th>*/}
                {/*                <th>GST</th>*/}
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
                {/*                <td></td>*/}
                {/*                <td></td>*/}
                {/*            </tr>*/}
                {/*        </tbody>*/}
                {/*    </table>*/}


                {/*</div>*/}

                {/*    <fieldset className="form-group border p-0" >*/}
                {/*        <legend className="px-2" data-toggle="collapse" data-target="#hsn" aria-expanded="true" aria-controls="hsn" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>HSN Summary<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>*/}

                {/*<div className="show" id="hsn">*/}
                {/*    <div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">*/}
                {/*            <WriteGrid title="HSN Details" h='200px' titleClr="blue" OpenSubLayer={() => { }} colDef={ColDefHsn} data={dataHsn} />*/}
                {/*        </div>*/}
                {/*        </div>*/}
                {/*    </fieldset>*/}


            </div>
            <div className="btn-group col-6 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', float: 'right' }}>
                <button type="button" style={{ border: '2px solid blue', letterSpacing: 3 }} onClick={() => { }} className="btn btn-secondry pl-0 pr-0 ">Other Disc.</button>
                <button type="button" style={{ border: '2px solid blue', letterSpacing: 3 }} onClick={() => { }} className="btn btn-primary mr-2 ml-2 pl-0 pr-0 ">Scheme Apply</button>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0">Save</button>
                <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} onClick={() => { }} className="btn btn-success mr-2 ml-2 pl-0 pr-0 ">Save & Submit</button>
                <button type="button" style={{ border: '2px solid orange', letterSpacing: 3 }} className="btn btn-warning pl-0 pr-0">Quit</button>
            </div>

        </>


    )
}
export default AddSaleOrder;