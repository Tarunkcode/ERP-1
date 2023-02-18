import * as React from 'react';
import {useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import {useState } from 'react'
import { v4 } from "uuid";

import 'ag-grid-autocomplete-editor/dist/main.css';
import './styles.css';

export default function WriteGrid({data, colDef,title,titleClr, ...rest }: any) {
    const [gridApi, setGridApi]: any = useState(null);
    const [columnApi, setColumnApi]: any = useState(null);
    var gridRef = React.useRef(null);
    const rowBuffer = 0;
    const [rowData, setRowData]: any = useState(null);
    const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
    const gridStyle = useMemo(() => ({ width: '96vw', height: 500 }), []);

    const defaultColDef = useMemo(() => {
        return {
            resizable: true,
            editable: true,
            sortable: true,
            minWidth: 100,
            filter: true,
        };
    }, []);

    const frameworkComponents = {}

    function onGridReady(params: any) {
     
      
        setGridApi(params.api);
        setColumnApi(params.columnApi);
        params.api.sizeColumnsToFit();
        setRowData(data)
        params.api.sizeColumnsToFit();
    }
    const onAddRow = () => {
        let id = v4();
        let emptyRow = { id };
        gridApi.updateRowData({ add: [emptyRow] });
        let node = gridApi.getRowNode(id);
        gridApi.ensureIndexVisible(node.rowIndex);

    }
    return (
        <>
            <button className="p-1 m-3 btn btn-primary" onClick={onAddRow }>Add Row </button>
            <div
                className="text-center col-12 m-0 card-title"
                style={titleClr ? { textAlign: "start" } : { textAlign: "start" }}
            >
                <span className="row-header p-0 m-0" style={{ fontSize: '1.1rem' }}>{title}</span>
            </div>
           
         

                <div style={gridStyle} className="ag-theme-alpine">
                    <AgGridReact
                    rowData={rowData}
                    columnDefs={colDef}
                    defaultColDef={defaultColDef}
                    getRowNodeId={(data: any) => data.id}
                    onGridReady={onGridReady}
                    alwaysShowHorizontalScroll={true }
                    alwaysShowVerticalScroll={true }
                    ></AgGridReact>
                </div>
         

           
       
        </>
    );
}