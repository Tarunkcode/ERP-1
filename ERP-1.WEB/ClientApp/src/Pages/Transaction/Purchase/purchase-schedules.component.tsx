import * as React from 'react';
import { MasterInput2 } from '../../../components/custom-input/custom-input.component';
import WriteGrid from '../../../components/Grid Component/grid.component';

const PurcahseSchedules = () => {

    let data: any[] = [{ bill: null, narration: null, rate: null, amount: null }]

    var ColDef: any[] = [{ field: 'srno', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },
        { field: 'itemcode', headerName: 'Item Code', minWidth: 200 },
        { field: 'itemname', headerName: 'Item Name', minWidth: 200 },
        { field: 'Qty', headerName: 'Qt. No', minWidth: 200, editable: true },
        { field: 'cust', headerName: 'Cust. QtNo', minWidth: 200, editable: true },
        { field: 'po.', headerName: 'Po.No', minWidth: 200, editable: true },
        { field: 'pd', headerName: 'Po Date', minWidth: 200, editable: true },
        { field: 'bal', headerName: 'Bal Qty', minWidth: 200, editable: true },
        { field: 'uom', headerName: 'UOM', minWidth: 200 },
        { field: 'qty', headerName: 'Qty', minWidth: 200, editable: true },
        { field: 'opn', headerName: 'Opn.Po', minWidth: 200, editable: true },



    ]

    return (
        <>
            <div className="main card firstDiv">

                <div className="row row-content col-sm-12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>

                    <span className="card-title" style={{
                        fontSize: '15px', color: 'white', fontWeight: 900, padding: '0',
                        margin: '0'
                    }} >Purchase Schedule</span>
                </div>
                <div className="card-body row col-sm-12 m-0 p-0" >
                    <form className="row-content form col-sm-12 pt-0">
                        <fieldset className="form-group border p-0" >
                            <legend className="px-2" data-toggle="collapse" data-target="#genDetails" aria-expanded="true" aria-controls="genDetails" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>PS Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>

                            <div className="collapse show" id="genDetails">
                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 name="series" label="Series" ipTitle="Enter Series" ipType="text" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="vch" label="Vch No." ipTitle="Enter Vch No." ipType="text" classCategory="form-control col-4 inp" />
                                </span>

                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="supp" label="Supplier Name" ipTitle="Enter Supplier Name" ipType="text" classCategory="form-control col-4 inp" />

                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="pono" label="P.O No." ipTitle="Enter P.O No." ipType="text" classCategory="form-control col-4 inp" />
                                </span>

                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 name="vchdate" label="Vch Date" ipTitle="Enter Vch Date" ipType="text" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="month" label="Month" ipTitle="Enter Month" ipType="text" classCategory="form-control col-4 inp" />
                                </span>


                            <button type="button" style={{ border: '2px solid ', letterSpacing: 3, width: '200px', borderRadius: '19px' }} onClick={() => { }} className="btn mr-2 ml-2 btn-secondary mt-2 mb-2 pl-0 pr-0 ">Load Item</button>

                            </div>
              
                        </fieldset>
                        
                    </form>
                    <hr style={{ margin: '0', padding: '0' }} />

                    <WriteGrid title="Projection Item Details" w='100vw' titleClr="blue" OpenSubLayer={() => { }} colDef={ColDef} data={data} />
                   



                </div>
                <hr style={{ margin: '0', padding: '0' }} />
            </div>
            <div className="btn-group col-6 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', float: 'right' }}>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0">Save</button>
                <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} onClick={() => { }} className="btn btn-success mr-2 ml-2 pl-0 pr-0 ">Save & Submit</button>
                <button type="button" style={{ border: '2px solid orange', letterSpacing: 3 }} className="btn btn-warning pl-0 pr-0">Quit</button>
            </div>
        </>
    )
}

export default PurcahseSchedules;