'use strict';

import * as React  from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';


import { AutocompleteSelectCellEditor } from 'ag-grid-autocomplete-editor';
import 'ag-grid-autocomplete-editor/dist/main.css';


export default function GridA() {


  
  
    const defaultColDef = React.useMemo(() => ({
        resizable: true,
            editable: true,
        sortable: true,

        filter: true,
    }), []);


    let rowDef = [{ ut: null, amt: null, setup: null, cyc: null, manpow: null, ifin: null, elec: null, totOvr: null, jbWork: null, mcDep: null }]


    const colDefs = [{
        field: 'prc', headerName: 'Process', width: 400, cellStyle: { paddingLeft: '0', paddingRight: '0' }, cellEditor: AutocompleteSelectCellEditor,
        cellEditorParams: {
            selectData: [
                { label: 'Canada', value: 'CA', group: 'North America' },
                { label: 'United States', value: 'US', group: 'North America' },
                { label: 'Uzbekistan', value: 'UZ', group: 'Asia' },
            ],
            placeholder: 'Select an option',
        },
        valueFormatter: (params: any) => {
            if (params.value) {
                return params.value.label || params.value.value || params.value;
            }
            return "";
        },
        editable: true,

    },
        { field: 'ut', headerName: 'Unit', width: 200 },
        { field: 'amt', headerName: 'Amount', width: 200 },
        { field: 'setup', headerName: 'Set Up Time', width: 200 },
        { field: 'cyc', headerName: 'Cyclic Time', width: 200 },
        { field: 'manpow', headerName: 'Manpower', width: 200 },
        { field: 'ifin', headerName: 'Is Final', width: 200 },
        { field: 'elec', headerName: 'Electricity Unit', width: 200 },
        { field: 'totOvr', headerName: 'Total OverHead', width: 200 },
        { field: 'jbWork', headerName: 'Job Work', width: 200 },
        { field: 'mcDep', headerName: 'Machine Dep.', width: 200 }]

    let gridApi: any;
    const OnGridReady = (params: any) => {
        gridApi = params.api;
    }

    const OnAddRow = () => {
        gridApi.updateRowData({

            add: [{Name : null, class: null, RollNo : null}]
        })
    }
   return (
        <div style={{ width: '100%', height: 'auto', maxHeight: '100%' }}>
           <button className="btn btn primary p-1 m-1" onClick={OnAddRow }>Add row</button>
            <div className="ag-theme-alpine" style={{ width: '95vw', height: 500 }}>
                <AgGridReact
                   rowData={rowDef} defaultColDef={defaultColDef} columnDefs={colDefs} onGridReady={OnGridReady } />
            </div>
       </div>
    );
};
