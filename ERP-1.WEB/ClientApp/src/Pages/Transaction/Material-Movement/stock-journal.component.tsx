import * as React from 'react';
import { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { MasterInput2 } from '../../../components/custom-input/custom-input.component';
import RadioButton from '../../../components/RadioButton/radio-button.component';
import WriteGrid from '../../../components/Grid Component/grid.component';
const StockJournal = () => {
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

    let data: any[] = [{ bill: null, narration: null, rate: null, amount: null }]

    var ColDef: any[] = [{ field: 'srno', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },
    { field: 'ic', headerName: 'Item Code', minWidth: 200 },
    { field: 'in', headerName: 'Item Name', minWidth: 200 },
    { field: 'mc', headerName: 'Material Center', minWidth: 200, editable: true },
        { field: 'mct', headerName: 'Mat. Cen. Type', minWidth: 200 },
    { field: 'stock', headerName: 'Stock Qty.', minWidth: 200, editable: true },
    { field: 'qty', headerName: 'Qty.', minWidth: 200, editable: true },
    { field: 'uom', headerName: 'UOM', minWidth: 200, editable: true },
    { field: 'altqty', headerName: 'Alt. Qty', minWidth: 200, editable: true },
    { field: 'altuo', headerName: 'Alt. Uo', minWidth: 200, editable: true },
        { field: 'price', headerName: 'Price', minWidth: 200, editable: true },
        { field: 'value', headerName: 'Value', minWidth: 200, editable: true },
        { field: 'actualstk', headerName: 'Actual Stk.', minWidth: 200, editable: true },

    ]

    return (
        <div className="firstDiv" >


            <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                <div className="row row-content col-sm-12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>

                    <span className="card-title" style={{
                        fontSize: '15px', color: 'white', fontWeight: 900, padding: '0',
                        margin: '0'
                    }}>Stock Journal</span>

                </div>
                <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">

                    <div className="card-body row col-sm-12 m-0 p-0" >
                        <form className="row-content form col-sm-12 pt-0">
                            <fieldset className="form-group border p-0" >
                                <legend className="px-2" style={{ fontSize: '1.1rem' }}>Stock Journal Details</legend>


                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="series" label="Series" ipTitle="Enter Series" ipType="text" value={getSoSeries} classCategory="form-control col-4 inp" readOnly />
                                    <span className="col-1 m-0"></span>

                                    <MasterInput2 name="vch" label="Vch. No." ipTitle="Enter Vch. No." ipType="text"  classCategory="form-control col-4 inp" />
                                </span>

                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="date" label="Date" ipTitle="Enter date" ipType="text" classCategory="form-control col-4 inp" />
                                   
                                </span>

                            </fieldset>

                        </form>


                    </div>

                    <form className="row-content form col-sm-12 pt-0">
                        <fieldset className="form-group border p-0" >
                            <legend className="px-2" data-toggle="collapse" data-target="#billdetails" aria-expanded="true" aria-controls="billdetails" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Import From<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>

                            <div className="collapse show" id="billdetails">


                                <span className="d-flex section2 col-sm-12">
                                    
                                    <RadioButton label='Excel' name='excel' id='c1' classCat='col-4 ml-2' lablClass='form-label labl ml-2 mr-2 mt-2 labl2' />
                                    <span className="col-1 m-0"></span>
                                    <div className="col-10 mt-2 mb-2 d-flex justify-content-end">
                                        <button type="button" style={{ border: '2px solid ', letterSpacing: 3, width: '200px', borderRadius: '19px' }} onClick={() => { }} className="btn btn-secondary mr-2 ml-2 pl-0 pr-0 ">Path</button>
                                    <button type="button" style={{ border: '2px solid ', letterSpacing: 3, width: '230px', borderRadius: '19px' }} className="btn btn-secondary pl-0 pr-0">File Formate</button>
                                        </div>

                                </span>

                              

                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="rnf" label="Row No. From" ipTitle="Enter Row No. From" ipType="text" classCategory="form-control col-4 inp" />
                                   
                                    <span className="col-1 m-0"></span>

                                    <MasterInput2 name="to" label="To" ipTitle="Enter Currency" ipType="text" min='0' classCategory="form-control col-4 inp" />
                                </span>

                                <div className="col-12 mt-2 d-flex justify-content-between">
                                    <button className="p-0 btn btn-info mb-2" style={{ border: '2px solid ', letterSpacing: 3, width: '200px', borderRadius: '19px', height: '40px' }}>Import</button>
                                </div>
                               
                            </div>

                        </fieldset>

                    </form>
                </div>

            </div>
            <hr style={{ margin: '0', padding: '0' }} />
            <div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">

            <WriteGrid title="Item Details" titleClr="blue" OpenSubLayer={() => { }} colDef={ColDef} data={data} />
             </div>
                           
                            <hr style={{ margin: '0', padding: '0' }} />
            <span className="d-flex section2 col-sm-12 mb-2 mt-2">
                <label htmlFor="s1" style={{ fontSize: '1em' }} className="form-label mr-2 ml-2 labl labl2">Remark</label>
                <textarea name="s1" style={{ borderColor: '#86a4c3' }} placeholder="Enter Remark" rows={2} cols={7} className="form-control col-10 subMaster" />
            </span>

            <hr style={{ border: '2px solid grey', opacity: '0.5' }} />

            <div className="btn-group col-6 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', float: 'right' }}>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0">Save</button>
                <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} onClick={() => { }} className="btn btn-success mr-2 ml-2 pl-0 pr-0 ">Save & Submit</button>
                <button type="button" style={{ border: '2px solid orange', letterSpacing: 3 }} className="btn btn-warning pl-0 pr-0">Quit</button>
            </div>
        </div>
    )
}

export default StockJournal;