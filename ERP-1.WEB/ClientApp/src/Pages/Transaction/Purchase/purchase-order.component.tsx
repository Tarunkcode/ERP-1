import * as React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { MasterInput2 } from '../../../components/custom-input/custom-input.component';
import DatalistInput from 'react-datalist-input';
import WriteGrid from '../../../components/Grid Component/grid.component';

const PurcahseOrder = () => {

    const [config, setConfig]: any = React.useState('');

    React.useEffect(() => {

        let id: string = window.location.pathname;
        console.log('id', id)
        let splits: any = id.split('/');
        console.log('s', splits)
        setConfig({
            configType: splits[splits.length - 1]
        })


    }, [])
    console.log('iddddddddd', config.configType)


    //-------------------------------------------------------------------------------------------------------------------------------------------------------

    let data: any[] = [{ ic: null, in: null, qty: null, amt: null, uom: null, vep: null, dd: null, rate: null, mc: null, tax: null, prno: null, prpty: null, rqty: null }]
  
    var ColDef: any[] = [
      
        { field: 'srno', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },
        { field: 'ic', headerName: 'Item Code', minWidth: 200 },
        { field: 'in', headerName: 'Item Name', minWidth: 200 },
        { field: 'qty', headerName: 'Quantity', minWidth: 200, editable: true },
        { field: 'uom', headerName: 'UOM', minWidth: 200, editable: true },
        { field: 'vep', headerName: 'VEP(%)', minWidth: 200 },
        { field: 'dd', headerName: 'Del. Date', minWidth: 200, editable: true },
        { field: 'rate', headerName: 'Rate', minWidth: 200, editable: true },
        { field: 'amt', headerName: 'Amount', minWidth: 200, editable: true },
        { field: 'mc', headerName: 'Material Center', minWidth: 200, editable: true },
        { field: 'tax', headerName: 'Tax %', minWidth: 200, editable: true },   
        { field: 'prno', headerName: 'PR No', minWidth: 200, editable: true },
        { field: 'prqty', headerName: 'PR QTY', minWidth: 200, editable: true },
        { field: 'rqty', headerName: 'R Bal QTY', minWidth: 200, editable: true },

      ]

        let dataQuot: any[] = [{ ic: null, in: null, qty: null, amt: null, uom: null, vep: null, dd: null, rate: null, mc: null, tax: null, close: null, reason: null }]

    var ColDefQuot: any[] = [
        { field: 'srno', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },
        { field: 'ic', headerName: 'Item Code', minWidth: 200 },
        { field: 'in', headerName: 'Item Name', minWidth: 200 },
        { field: 'qtyno', headerName: 'Quantity No.', minWidth: 200, editable: true },
        { field: 'cqn', headerName: 'Cust QT. No', minWidth: 200, editable: true },
        { field: 'qtqty', headerName: 'QT Qty', minWidth: 200, editable: true },
        { field: 'qbq', headerName: 'QT Bal Qty', minWidth: 200, editable: true },
        { field: 'qty', headerName: 'Quantity', minWidth: 200, editable: true },
        { field: 'uom', headerName: 'UOM', minWidth: 200, editable: true },
        { field: 'vep', headerName: 'VEP(%)', minWidth: 200 },
        { field: 'dd', headerName: 'Del. Date', minWidth: 200, editable: true },
        { field: 'rate', headerName: 'Rate', minWidth: 200, editable: true },
        { field: 'amt', headerName: 'Amount', minWidth: 200, editable: true },
        { field: 'mc', headerName: 'Material Center', minWidth: 200, editable: true },
        { field: 'tax', headerName: 'Tax %', minWidth: 200, editable: true },

    ]

    let datafrompr: any[] = [{ ic: null, in: null, qty: null, amt: null, uom: null, vep: null, dd: null, rate: null, mc: null, tax: null, prno: null, prpty: null, rqty: null }]

    var ColDeffrompr: any[] = [
    { field: 'srno', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },
    { field: 'ic', headerName: 'Item Code', minWidth: 200 },
    { field: 'in', headerName: 'Item Name', minWidth: 200 },
    { field: 'qty', headerName: 'Quantity', minWidth: 200, editable: true },
    { field: 'uom', headerName: 'UOM', minWidth: 200, editable: true },
    { field: 'vep', headerName: 'VEP(%)', minWidth: 200 },
    { field: 'dd', headerName: 'Del. Date', minWidth: 200, editable: true },
    { field: 'rate', headerName: 'Rate', minWidth: 200, editable: true },
    { field: 'amt', headerName: 'Amount', minWidth: 200, editable: true },
    { field: 'mc', headerName: 'Material Center', minWidth: 200, editable: true },
    { field: 'tax', headerName: 'Tax %', minWidth: 200, editable: true },

    ]

    

    /*------------------------------------------ BillSundry-Table-----------------------------------------------------*/

    let dataBill: any[] = [{ bill: null, narration: null, rate: null, amount: null }]

    var ColDefBill: any[] = [{ field: 'srno', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },
    { field: 'bill', headerName: 'Bill Sundary', minWidth: 200 },
    { field: 'narration', headerName: 'Narration', minWidth: 200 },
    { field: 'rate', headerName: '@', minWidth: 200 },
    { field: 'rs', headerName: '', minWidth: 200 },
    { field: 'amount', headerName: 'Amount', minWidth: 200 }

    ]

    return (
        <div className="firstDiv" >


            <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                <div className="row row-content col-sm-12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>

                    <span className="card-title" style={{
                        fontSize: '15px', color: 'white', fontWeight: 900, padding: '0',
                        margin: '0'
                    }}>{`${config.configType === 'add-Po' || config.configType === 'add-Po-PR' ? 'Add Purchase Order' : config.configType === 'add-Po-QT' ? 'Add Purchase With Quotation Order' : ''}`}
                    </span>

                </div>
                <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                   
                        <div className="card-body row col-sm-12 m-0 p-0">
                            <form className="row-content form col-sm-12 pt-0">
                            <fieldset className="form-group border p-0">
                                <legend className="px-2" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Purchase Order Details</legend>
                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="series" label="Series" ipTitle="Enter So No." ipType="text" classCategory="form-control col-4 inp" readOnly />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="so-date" label="PO Date" ipTitle="Enter PO Date" ipType="date" classCategory="form-control col-4 inp" />
                                </span>

                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="so-no" label="PO No." ipTitle="Enter PO No." ipType="text" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                  
                                    <MasterInput2 name="supplier" label="Supplier" ipTitle="Enter Supplier" ipType="text" classCategory="form-control col-4 inp" />
                                </span>

                                <span className="d-flex section2 col-sm-12">
                                    <>
                                        <label htmlFor="openpo" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 mt-2 labl2">Open PO</label>
                                    </>
                                    <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                                        <DatalistInput
                                            placeholder={'Select Open PO'}
                                            className="d-flex col-12 m-0 p-0"
                                            inputProps={{ className: 'form-control inp col-12 datalist int', name: 'openpo' }}
                                            listboxProps={{ className: 'text-left mt-5' }}

                                            onSelect={(item: any) => { console.log('id', item.id); }}
                                            items={[{ id: 1, value: 'Y' }, { id: 2, value: 'N' }]}
                                        />

                                    </span>
                                    <span className="col-1 m-0"></span>

                                    <MasterInput2 name="date" label="Valid Up to" ipTitle="Enter Valid Up to" ipType="text" classCategory="form-control col-4 inp" />
                                </span>

                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="state" label="State" ipTitle="Enter State" ipType="text" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="code" label="Code" ipTitle="Enter Valid Up to" ipType="text" classCategory="form-control col-4 inp" />

                                </span>
                              
                                </fieldset>
                            </form>
                    </div>



                    <div className="card-body row col-sm-12 m-0 p-0">
                        <form className="row-content form col-sm-12 pt-0">
                            <fieldset className="form-group border p-0" >
                                <legend className="px-2" data-toggle="collapse" data-target="#delivery" aria-expanded="false" aria-controls="delivery" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Purchase Order Payment Currency Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>

                                <div className="collapse" id="delivery">

                                    <span className="d-flex section2 col-sm-12">
                                        <MasterInput2 name="del-term" label="Del. Terms" ipTitle="Enter Del. Terms" ipType="text" classCategory="form-control col-4 inp" />
                                        <span className="col-1 m-0"></span>
                                        <MasterInput2 name="exc" label="Exch Rate"  ipTitle="Enter Valid Up to" ipType="text" classCategory="form-control col-4 inp" />

                                    </span>
                                    <span className="d-flex section2 col-sm-12">
                                        <MasterInput2 name="pay-term" label="Pay. Terms" ipTitle="Enter Pay. Terms" ipType="text" classCategory="form-control col-4 inp"  />
                                        <span className="col-1 m-0"></span>
                                        <MasterInput2 name="ptype" label="Purchase Type" ipTitle="Enter Purchase Type" ipType="text" classCategory="form-control col-4 inp" />

                                    </span>
                                    <span className="d-flex section2 col-sm-12">
                                        <MasterInput2 name="currency" label="Currency" ipTitle="Enter Currency" ipType="text" classCategory="form-control col-4 inp" />
                                        <span className="col-1 m-0"></span>
                                        <MasterInput2 name="reference" label="Reference" ipTitle="Enter Reference" ipType="text" classCategory="form-control col-4 inp" />

                                    </span>

                                    <span className="d-flex section2 col-sm-12">
                                        <MasterInput2 name="d-date" label="Del. Date" ipTitle="Enter Del. Date" ipType="text" classCategory="form-control col-4 inp" />
                                        <span className="col-1 m-0"></span>
                                        <MasterInput2 name="pricearea" label="Price Are" ipTitle="Enter Price Are" ipType="text" classCategory="form-control col-4 inp" />

                                    </span>


                                    <span className="d-flex section2 col-sm-12">
                                            <label htmlFor="refpo" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 mt-2 labl2">Ref. P.O</label>
                                        <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                                            <DatalistInput
                                                placeholder={'Select Reference PO'}
                                                className="d-flex col-12 m-0 p-0"
                                                inputProps={{ className: 'form-control inp col-12 datalist int', name: 'refpo' }}
                                                listboxProps={{ className: 'text-left mt-5' }}

                                                onSelect={(item: any) => { console.log('id', item.id); }}
                                                items={[{ id: 1, value: 'Y' }, { id: 2, value: 'N' }]}
                                            />

                                        </span>
                                      
                                        <span className="col-1 m-0"></span>
                                            <label htmlFor="againstrc" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 mt-2 labl2">Against R.C</label>
                                        <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                                            <DatalistInput
                                                placeholder={'Select Against R.C'}
                                                className="d-flex col-12 m-0 p-0"
                                                inputProps={{ className: 'form-control inp col-12 datalist int', name: 'againstrc' }}
                                                listboxProps={{ className: 'text-left mt-5' }}

                                                onSelect={(item: any) => { console.log('id', item.id); }}
                                                items={[{ id: 1, value: 'Y' }, { id: 2, value: 'N' }]}
                                            />
                                        </span>
                                    </span>

                                    <span className="d-flex section2 col-sm-12">
                                        <MasterInput2 name="rc-no" label="R.C. No." ipTitle="Enter R.C. No." ipType="text" classCategory="form-control col-4 inp" />
                                        <span className="col-1 m-0"></span>
                                    </span>
                                    </div>

                                </fieldset>

                            </form>
                        

                    </div>
                </div>

            </div>
          

            <hr style={{ border: '2px solid grey', opacity: '0.5' }} />

            <div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">
            {config.configType === 'add-Po' ?(
           
                <WriteGrid title="Purchase Order Line Item Details" titleClr="blue" OpenSubLayer={() => { }} colDef={ColDef} data={data} />
               
                ) : config.configType === 'add-Po-QT' ? (
                    <WriteGrid title="Purchase Order Line Item Details" titleClr="blue" OpenSubLayer={() => { }} colDef={ColDefQuot} data={dataQuot} />
                    ) : config.configType === 'add-Po-PR' ? (
                    <WriteGrid title="Purchase Order Line Item Details" titleClr="blue" OpenSubLayer={() => { }} colDef={ColDeffrompr} data={datafrompr} />
                            ):null
            }
                <div className="col-12 mt-2 d-flex justify-content-start">
                    <button className="p-0 btn btn-secondary mb-2" style={{ border: '2px solid ', letterSpacing: 3, width: '275px', borderRadius: '19px', height: '40px' }}>Load GST As Per Item</button>
                </div>
            </div>

            <hr style={{ border: '2px solid grey', opacity: '0.5' }} />

            <fieldset className="form-group border p-0" >
                <legend className="px-2" data-toggle="collapse" data-target="#billsundry" aria-expanded="true" aria-controls="billsundry" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Bill Sundry Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>

                <div className="show" id="billsundry">
                    <div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">
                        <WriteGrid title="Bill Sundry Details" w='100vw' titleClr="blue" OpenSubLayer={() => { }} colDef={ColDefBill} data={dataBill} />
                    </div>
                </div>
            </fieldset>

            <form className="row-content form col-sm-12 pt-0">
               
                    <span className="d-flex section2 col-sm-12">
                        <MasterInput2 name="materialc" label="Material Center" ipTitle="Enter Material Center" ipType="text" classCategory="form-control col-4 inp" />
                        <span className="col-1 m-0"></span>
                        <MasterInput2 name="dt" label="Dispatch Through" ipTitle="Enter Dispatch Through" ipType="text" classCategory="form-control col-4 inp" />
                    </span>
                    <span className="d-flex section2 col-sm-12 mb-2 mt-2">
                        <label htmlFor="s1" style={{ fontSize: '1em' }} className="form-label mr-2 ml-2 labl labl2">Remark</label>
                        <textarea name="s1" style={{ borderColor: '#86a4c3' }} placeholder="Enter Remark" rows={2} cols={7} className="form-control col-10 subMaster" />
                    </span>
              
            </form>

            <div className="btn-group col-6 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', float: 'right' }}>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0">Save</button>
                <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} onClick={() => { }} className="btn btn-success mr-2 ml-2 pl-0 pr-0 ">Save & Submit</button>
                <button type="button" style={{ border: '2px solid orange', letterSpacing: 3 }} className="btn btn-warning pl-0 pr-0">Quit</button>
            </div>
        </div>
    )
}

export default PurcahseOrder;