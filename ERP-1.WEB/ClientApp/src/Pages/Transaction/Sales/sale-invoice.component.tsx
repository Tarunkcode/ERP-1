import * as React from 'react';
import { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { MasterInput2 } from '../../../components/custom-input/custom-input.component';
import WriteGrid from '../../../components/Grid Component/grid.component';
//import UnderConstruction from '../../under-construction';

  
const SaleInvoice = () => {
    var getSoSeries = window.sessionStorage.getItem('so-series');
    var getAccName = window.sessionStorage.getItem('acc-name');
    const getState = window.localStorage.getItem('state');
    const state = JSON.parse(getState!)
    const getCompCode = window.sessionStorage.getItem('compCode');

 
    var [masterDetails, setMasterDetails]: any = React.useState([]);
 

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

    let data: any[] = [{ qcparameter: null, desc: null, smp: null, uom: null, targetval: null, lowerval: null, upperval: null, narration: null, qctype: null, measuringmethod: null }]

    var ColDef: any[] = [
    { field: 'srno', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },
    
    { field: 'itemcode', headerName: 'ItemCode', minWidth: 200 },
   
    { field: 'desc', headerName: 'Description', minWidth: 200 },
    { field: 'stock', headerName: 'Stock Qty.', minWidth: 200 },
    { field: 'balqty', headerName: 'Bal. Qty.', minWidth: 200 },
    { field: 'qty ', headerName: 'Qty.', minWidth: 200 },
    { field: 'uom ', headerName: 'UOM', minWidth: 200 },
    { field: 'abat ', headerName: 'Abat(%)', minWidth: 200 },
    { field: 'assr ', headerName: 'Ass.Rate', minWidth: 200 },
    { field: 'brate ', headerName: 'Base Rate', minWidth: 200 },
    { field: 'srate ', headerName: 'Sale Rate', minWidth: 200 },
    { field: 'discamt ', headerName: 'Dis. Amount', minWidth: 200 },
    { field: 'amt', headerName: 'Amount', minWidth: 200 },
    { field: 'sdp', headerName: 'Sch. Dis.%', minWidth: 200 },
    { field: 'value', headerName: 'Value', minWidth: 200 },
    { field: 'assvalue', headerName: 'Ass. Value', minWidth: 200 },
    { field: 'hsn', headerName: 'HSN NO', minWidth: 200 },
    { field: 'gst', headerName: 'GST Category', minWidth: 200 },
    { field: 'igst', headerName: 'IGST(%)', minWidth: 200 },
    { field: 'stamt', headerName: 'ST(Amt)', minWidth: 200 },
    { field: 'sono', headerName: 'So.No.', minWidth: 200 },

    ]


    let dataBill: any[] = [{ bill: null, narration: null, rate: null, amount: null }]

    var ColDefBill: any[] = [{ field: 'srno', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1', cellStyle: { width: '100%' } },
        { field: 'bill', headerName: 'Bill Sundary', minWidth: 200, cellStyle: {width:'100%'} },
        { field: 'narration', headerName: 'Narration', minWidth: 200, cellStyle: { width: '100%' } },
        { field: 'rate', headerName: '@', minWidth: 200, cellStyle: { width: '100%' } },
        { field: 'amount', headerName: 'Amount', minWidth: 200, cellStyle: { width: '100%' } }


    ]

    let dataHsn: any[] = [{ bill: null, narration: null, rate: null, amount: null }]

    var ColDefHsn: any[] = [{ field: 'srno', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },
    { field: 'hsn', headerName: 'HSN No.', minWidth: 200 },
    { field: 'qty', headerName: 'Quantity', minWidth: 200 },
    { field: 'uom', headerName: 'UOM', minWidth: 200 },
    { field: 'totamt', headerName: 'Tot. Amt.', minWidth: 200 },
    { field: 'taxamt', headerName: 'Taxable Amt.', minWidth: 200 },
    { field: 'gst', headerName: 'GST %', minWidth: 200 },
    { field: 'igst', headerName: 'IGST Amt', minWidth: 200 },
    { field: 'cgst', headerName: 'CGST %', minWidth: 200 },
    { field: 'cgstamt', headerName: 'CGST Amt.', minWidth: 200 },


    ]

    return (
        <>
        <div className="firstDiv" >


            <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                <div className="row row-content col-sm-12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#8389d4', margin: '10px 0 0 0', padding: '0' }}>

                    <span className="card-title" style={{
                        fontSize: '15px', color: 'white', fontWeight: 900, padding: '0',
                        margin: '0'
                    }}>Add Sale Invoice</span>

                </div>
                
                        <div className="card-body" >
                            <form className="form">
                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 defaultt={[]} label="Series" name="series" ipType="text" ipTitle="Enter Code" handleChange={[]} classCategory="form-control col-4 inp subMaster" readOnly/>
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 defaultt={[]} label="Date" name="date" ipType="date" ipTitle="Enter Date" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                                </span>

                        <span className="d-flex section2 col-sm-12">

                            <MasterInput2 defaultt={[]} label="Inv No." name="inv" ipType="text" ipTitle="Enter Inv No." handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                            <span className="col-1 m-0"></span>
                            <MasterInput2 defaultt={[]} label="Customer" name="cust" ipType="text" ipTitle="Enter Customer" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                        </span>

                        <span className="d-flex section2 col-sm-12">

                            <MasterInput2 defaultt={[]} label="Po. No." name="pono" ipType="text" ipTitle="Enter Po. No." handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                            <span className="col-1 m-0"></span>
                            <MasterInput2 defaultt={[]} label="Tran Type" name="tran" ipType="text" ipTitle="Enter Tran Type" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                        </span>

                        <span className="d-flex section2 col-sm-12">

                            <MasterInput2 defaultt={[]} label="Distance" name="distance" ipType="text" ipTitle="Enter Distance" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                            <span className='col-1 m-0'></span>
                            <MasterInput2 defaultt={[]} label="State" name="state" ipType="text" ipTitle="Enter State" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                        </span>

                        <span className="d-flex section2 col-sm-12">

                            <MasterInput2 defaultt={[]} label="Against Pck." name="againstpck" ipType="text" ipTitle="Enter Against Pck." handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                            <span className="col-1 m-0"></span>
                            <MasterInput2 defaultt={[]} label="PCK No." name="pckno" ipType="text" ipTitle="Enter PCK No." handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                        </span>



                        <span className="d-flex section2 col-sm-12">

                            <MasterInput2 defaultt={[]} label="Del. Terms" name="delterm" ipType="text" ipTitle="Enter Del. Terms" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                            <span className="col-1 m-0"></span>
                            <MasterInput2 defaultt={[]} label="PCK Type" name="pcktype" ipType="text" ipTitle="Enter PCK Type" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                        </span>

                        <span className="d-flex section2 col-sm-12">

                            <MasterInput2 defaultt={[]} label="Pay Terms" name="payterm" ipType="text" ipTitle="Enter Pay Terms" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                            <span className="col-1 m-0"></span>
                            <MasterInput2 defaultt={[]} label="Ref. No." name="ref" ipType="text" ipTitle="Enter Ref. No." handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                        </span>


                         <span className="d-flex section2 col-sm-12">

                            <MasterInput2 defaultt={[]} label="Currency" name="curr" ipType="text" ipTitle="Enter Currency" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                            <span className="col-1 m-0"></span>
                            <MasterInput2 defaultt={[]} label="Sale Type" name="sale" ipType="text" ipTitle="Enter Sale Type" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                        </span>
                        
           
                         <span className="d-flex section2 col-sm-12">

                            <MasterInput2 defaultt={[]} label="Currency Rate" name="currate" ipType="text" ipTitle="Enter Currency Rate" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                            <span className="col-1 m-0"></span>
                            <MasterInput2 defaultt={[]} label="No Of Pallets" name="nop" ipType="text" ipTitle="Enter No Of Pallets" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                        </span>
                        
           
           
                         <span className="d-flex section2 col-sm-12">

                            <MasterInput2 defaultt={[]} label="Dis. Through" name="disthrough" ipType="text" ipTitle="Enter Dis. Through" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                            <span className="col-1 m-0"></span>
                            <MasterInput2 defaultt={[]} label="Reverse Charge" name="revchar" ipType="text" ipTitle="Enter Revers Charge" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                        </span>
                    
                            </form>
                        </div>

                    </div>
                
          
            <hr style={{ border: '2px solid grey', opacity: '0.5' }} />
            <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                <WriteGrid title="Line Item Details" w='100vw' titleClr="blue" OpenSubLayer={() => { }} colDef={ColDef} data={data} />
                

            </div>

            <hr style={{ border: '2px solid grey', opacity: '0.5' }} />

            <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                <WriteGrid title="Bill Sundry Details" titleClr="blue" OpenSubLayer={() => { }} colDef={ColDefBill} data={dataBill} />
            </div>

            <hr style={{ border: '2px solid grey', opacity: '0.5' }} />

            <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                <WriteGrid title="HSN Details" w='100vw' titleClr="blue" OpenSubLayer={() => { }} colDef={ColDefHsn} data={dataHsn} />
                
            </div>

        </div>
            <div className="btn-group col-6 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', float: 'right' }}>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0">Save</button>
                <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} onClick={() => { }} className="btn btn-success mr-2 ml-2 pl-0 pr-0 ">Save & Submit</button>
                <button type="button" style={{ border: '2px solid orange', letterSpacing: 3 }} className="btn btn-warning pl-0 pr-0">Quit</button>
            </div>
        </>
    )
}

export default SaleInvoice;