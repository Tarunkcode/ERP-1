import * as React from 'react';
import UnderConstruction from '../../../components/under-construction';
import { MasterInput2 } from '../../../components/custom-input/custom-input.component';
import WriteGrid from '../../../components/Grid Component/grid.component';
const PurcahseRequisation = () => {

    let data: any[] = [{ bill: null, narration: null, rate: null, amount: null }]

    var ColDef: any[] = [{ field: 'srno', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },
    { field: 'itemcode', headerName: 'Item Code', minWidth: 200 },
    { field: 'itemname', headerName: 'Item Name', minWidth: 200 },
    { field: 'Qty', headerName: 'Quantity', minWidth: 200, editable: true },
    { field: 'uom', headerName: 'UOM', minWidth: 200 },
    { field: 'dd', headerName: 'Delivery Date', minWidth: 200, editable: true },
    { field: 'rate', headerName: 'Rate', minWidth: 200, editable: true },
    { field: 'amount', headerName: 'Amount', minWidth: 200, editable: true },
        { field: 'mc', headerName: 'Material Center', minWidth: 200, editable: true },
        { field: 'st', headerName: 'ST. Qty', minWidth: 200, editable: true },
        { field: 'quot', headerName: 'Quotation', minWidth: 200, editable: true },


    ]

    return (
        <>
            <div className="main card firstDiv">

                <div className="row row-content col-sm-12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>

                    <span className="card-title" style={{
                        fontSize: '15px', color: 'white', fontWeight: 900, padding: '0',
                        margin: '0'
                    }} >Manual Purchase Requisation</span>
                </div>
                <div className="card-body row col-sm-12 m-0 p-0" >
                    <form className="row-content form col-sm-12 pt-0">
                        <fieldset className="form-group border p-0" >
                            <legend className="px-2" data-toggle="collapse" data-target="#genDetails" aria-expanded="true" aria-controls="genDetails" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Purchase Requisation Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>

                            <div className="collapse show" id="genDetails">

                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 name="prtype" label="PR Type" ipTitle="Enter PR Type" ipType="text" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="vch" label="Vch No." ipTitle="Enter Item Code" ipType="text" classCategory="form-control col-4 inp" />
                                </span>

                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 name="prdate" label="PR. Date" ipTitle="Enter PR Type" ipType="date" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="Department" label="Department" ipTitle="Enter Department" ipType="text" classCategory="form-control col-4 inp" />
                                </span>


                            </div>
                        </fieldset>
                    </form>
                    <hr style={{ margin: '0', padding: '0' }} />

                    <WriteGrid title="Projection Item Details" w='100vw' titleClr="blue" OpenSubLayer={() => { }} colDef={ColDef} data={data} />
                    {/*<div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">*/}
                    {/*    <div className="card-body col-sm-12 addCustomer container container-fluid container-lg" style={{ overflowX: 'auto', overflowY: 'auto' }}>*/}

                    {/*        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0', width: '100%' }}>*/}
                    {/*            <span className="card-title" style={{ fontSize: '15px', margin: '0', padding: '0' }}>Purchase Requisation Item Details</span>*/}
                    {/*        </div>*/}
                    {/*        <table id="dtHorizontalExample" className="table table-striped table-bordered table-sm" style={{*/}
                    {/*            width: "100%"*/}
                    {/*        }}>*/}
                    {/*            <thead>*/}
                    {/*                <tr>*/}
                    {/*                    <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>S.No</th>*/}
                    {/*                    <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Item Code</th>*/}
                    {/*                    <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Item Name</th>*/}
                    {/*                    <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Qty.</th>*/}
                    {/*                    <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>UoM</th>*/}
                    {/*                    <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Supplier</th>*/}
                    {/*                    <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Del.Date</th>*/}
                    {/*                    <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Rate</th>*/}
                    {/*                    <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Amount</th>*/}
                    {/*                    <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Material Center</th>*/}
                    {/*                    <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>ST.Qty</th>*/}
                    {/*                    <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Quotation</th>*/}
                    {/*                </tr>*/}
                    {/*            </thead>*/}
                    {/*            <tbody>*/}
                    {/*                <tr>*/}
                    {/*                    <th>1</th>*/}
                    {/*                    <td></td>*/}
                    {/*                    <td></td>*/}
                    {/*                    <td></td>*/}
                    {/*                    <td></td>*/}
                    {/*                    <td></td>*/}
                    {/*                    <td></td>*/}
                    {/*                    <td></td>*/}
                    {/*                    <td></td>*/}
                    {/*                    <td></td>*/}
                    {/*                    <td></td>*/}
                    {/*                    <td></td>*/}
                    {/*                </tr>*/}
                    {/*                <tr>*/}
                    {/*                    <th>2</th>*/}
                    {/*                    <td></td>*/}
                    {/*                    <td></td>*/}
                    {/*                    <td></td>*/}
                    {/*                    <td></td>*/}
                    {/*                    <td></td>*/}
                    {/*                    <td></td>*/}
                    {/*                    <td></td>*/}
                    {/*                    <td></td>*/}
                    {/*                    <td></td>*/}
                    {/*                    <td></td>*/}
                    {/*                    <td></td>*/}
                    {/*                </tr>*/}
                    {/*                <tr>*/}
                    {/*                    <th>3</th>*/}
                    {/*                    <td></td>*/}
                    {/*                    <td></td>*/}
                    {/*                    <td></td>*/}
                    {/*                    <td></td>*/}
                    {/*                    <td></td>*/}
                    {/*                    <td></td>*/}
                    {/*                    <td></td>*/}
                    {/*                    <td></td>*/}
                    {/*                    <td></td>*/}
                    {/*                    <td></td>*/}
                    {/*                    <td></td>*/}
                    {/*                </tr>*/}

                    {/*            </tbody>*/}
                    {/*        </table>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <hr style={{ margin: '0', padding: '0' }} />



                </div>
                <hr style={{ margin: '0', padding: '0' }} />

                <span className="d-flex section2 col-sm-12 mb-2 mt-2">
                    <label htmlFor="s1" style={{ fontSize: '1em' }} className="form-label mr-2 ml-2 labl labl2">Remark</label>
                    <textarea name="s1" style={{ borderColor: '#86a4c3' }} placeholder="Enter Remark" rows={2} cols={7} className="form-control col-10 subMaster" />
                </span>


            </div>
            <div className="btn-group col-6 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', float: 'right' }}>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0">Save</button>
                <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} onClick={() => { }} className="btn btn-success mr-2 ml-2 pl-0 pr-0 ">Save & Submit</button>
                <button type="button" style={{ border: '2px solid orange', letterSpacing: 3 }} className="btn btn-warning pl-0 pr-0">Quit</button>
            </div>
        </>
    )
}

export default PurcahseRequisation;