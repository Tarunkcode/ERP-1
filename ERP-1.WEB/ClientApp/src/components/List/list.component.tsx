import * as React from 'react';
import DatalistInput from 'react-datalist-input';
import 'react-datalist-input/dist/styles.css';
import CustomInput, { MasterInput2 } from '../custom-input/custom-input.component';
import WriteGrid from '../Grid Component/grid.component';
import 'ag-grid-autocomplete-editor/dist/main.css';
import UnderConstruction from '../under-construction';
import AutocompleteSelectCellEditor from 'ag-grid-autocomplete-editor';
const List = () => {

    let data: any[] = [{ prc: null, ut: null, amt: null, setup: null, cyc: null, manpow: null, ifin: null, elec: null, totOvr: null, jbWork: null, mcDep: null }]

    var ColDef: any[] = [{ field: 'sn', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },
    {
        field: 'code', headerName: 'Codestr', minWidth: 400, cellStyle: { paddingLeft: '0', paddingRight: '0' },

        cellEditor: AutocompleteSelectCellEditor,
        cellEditorParams: {
            required: true,
            //selectData: React.useMemo(() => { return processLoad }, [processLoad]),
            placeholder: "Codestr"
        },
        valueFormatter: (params: any) => {
            if (params.value) {
                return params.value.label || params.value.value || params.value;
            }
            return "";
        },
        editable: true

    },
    { field: 'name', headerName: 'Name', minWidth: 200, editable: true },
    { field: 'group', headerName: 'Group', minWidth: 200, editable: true },
    { field: 'pg', headerName: 'Parent Group', minWidth: 200, editable: true },
    { field: 'opb', headerName: 'OP Bal.(DR)', minWidth: 200, editable: true },
    { field: 'opc', headerName: 'OP Bal.(CR)', minWidth: 200, editable: true },
    { field: 'dt', headerName: 'Del. Term', minWidth: 200, editable: true },
    { field: 'pt', headerName: 'Payment Term', minWidth: 200, editable: true },
    { field: 'contact', headerName: 'Contact', minWidth: 200, editable: true },
    { field: 'mbile', headerName: 'Mobile No.', minWidth: 200, editable: true },
    { field: 'email', headerName: 'Email Id', minWidth: 200, editable: true },
    { field: 'gst', headerName: 'GST No.', minWidth: 200, editable: true },
    { field: 'pan', headerName: 'PAN No.', minWidth: 200, editable: true },
    { field: 'add1', headerName: 'Address1', minWidth: 200, editable: true },
    { field: 'add2', headerName: 'Address2', minWidth: 200, editable: true },
    { field: 'add3', headerName: 'Address3', minWidth: 200, editable: true },
    { field: 'add4', headerName: 'Address4', minWidth: 200, editable: true },
    { field: 'country', headerName: 'Country', minWidth: 200, editable: true },
    { field: 'zone', headerName: 'Zone', minWidth: 200, editable: true },
    { field: 'state', headerName: 'State', minWidth: 200, editable: true },
    { field: 'city', headerName: 'City', minWidth: 200, editable: true },
    { field: 'tel', headerName: 'Tel. No.', minWidth: 200, editable: true },
    { field: 'pin', headerName: 'Pin No.', minWidth: 200, editable: true },
    { field: 'station', headerName: 'Station', minWidth: 200, editable: true }
    ]

    return (
        <>
            <div className="main card firstDiv" >

                <div className="text-center card-title col-12" style={{ textAlign: 'start' }}>
                    <span className="row-header p-0 m-0" >List</span>
                </div>
                <div className="card-body row col-sm-12 m-0 p-0">

                    <form className="row-content form col-sm-12 pt-0">
                        <fieldset className="form-group border p-0" >
                            <legend className="px-2" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>{[]}</legend>

                            <div className="show" id="genDetails">
                                <span className="d-flex section2 col-sm-12">

                                    <>
                                        <label htmlFor="series" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 labl2">Series</label>
                                    </>
                                    <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                                        <DatalistInput

                                            className="d-flex col-12 m-0 p-0"
                                            inputProps={{ className: 'form-control inp col-12 datalist int', name: 'series' }}
                                            listboxProps={{ className: 'text-left mt-5' }}

                                            onSelect={(item: any) => { console.log('id', item.id); }}
                                            items={[{ id: 1, value: 'Himanshu' }, { id: 2, value: 'Tarun' }]}
                                        />

                                    </span>

                                    <span className='col-1'></span>

                                    <MasterInput2 name="codestr" classCategory="form-control inp col-4" ipType="date" label="From Date" ipTitle="" dataArray={[]} />
                                </span>
                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="name" classCategory="form-control inp col-4" ipType="date" label='To Date' ipTitle='' dataArray={[]} />
                                    <span className='col-1'></span>

                                    <button type="button" className="btn pl-2 pr-0 mt-3 mb-2 col-2" style={{ borderRadius: '21px', color: 'white', backgroundColor: "rgb(121, 140, 212)", letterSpacing: 3, marginLeft: '10%', top: '-11px' }} data-toggle="modal" data-target="#qcPlanCopy">
                                        GetDetails
                                    </button>
                                </span>


                            </div>
                        </fieldset>
                    </form>
                    <hr />

                    <WriteGrid title="Grid" w='100vw' titleClr="blue" OpenSubLayer={() => { }} colDef={ColDef} data={data} />



                </div>

            </div>
            <div className="btn-group col-6 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', float: 'right' }}>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0">Export</button>
                <button type="button" style={{ border: '2px solid orange', letterSpacing: 3 }} className="btn btn-warning pl-0 pr-0 ml-2 mr-2">Quit</button>
            </div>

        </>
    )
}
export default List;

 //<span>This is Under Construction...</span>
 //           <UnderConstruction />