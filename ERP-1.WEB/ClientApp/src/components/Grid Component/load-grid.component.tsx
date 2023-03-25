import * as React from 'react';
import { useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { useState } from 'react'
import { v4 } from "uuid";

import 'ag-grid-autocomplete-editor/dist/main.css';
import './styles.css';
import { GridOptions } from 'ag-grid-community';



export default function LoadGrid({ data, colDef, title, titleClr, OpenSubLayer, collect, srProps, ...rest }: any) {
    const [gridApi, setGridApi]: any = useState(null);
    const [columnApi, setColumnApi]: any = useState(null);
    var gridRef = React.useRef(null);
    const rowBuffer = 0;
    //const [rowData, setRowData]: any = useState(null);
    const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
    const gridStyle = useMemo(() => ({ width: '100vw', height: 500 }), []);
        //let firstRow = data[0];


    const defaultColDef = useMemo(() => {
        return {
            //resizable: true,
            /* editable: true,*/
            sortable: true,

            filter: true,
        };
    }, []);

    //const frameworkComponents = {}
    //const init100Rows = () => {
        
    //    let collection = [];
    //    for (let i = 0; i < 100; i++) collection.push({ ...firstRow, [srProps]: 1 + i});
    //    setRowData(collection);
    //}
    //const initailsRowCount = () => {
        
    //    let collection = [];
    //    for (let i = 0; i < 10; i++) collection.push({ ...firstRow, [srProps]: 1 + i});
    //    setRowData(collection);

    //}


    function onGridReady(params: any) {
        //if (title === 'Consumed Item Details') {
        //    init100Rows()
        //} else {
        //    initailsRowCount();

        //}
        setGridApi(params.api);
        collect(params.api);
        setColumnApi(params.columnApi);
        params.api.sizeColumnsToFit();


        params.api.sizeColumnsToFit();
    }
    const gridOptions = {
        rowData: data,
        columnDefs: colDef,
        defaultColDef: defaultColDef,
        onCellKeyDown: OpenSubLayer,
        
    };

    //const onAddRow = () => {
        
    //    let lastrow = gridApi.getDisplayedRowAtIndex(gridApi.getLastDisplayedRow());
    //    let lastIndex = lastrow.rowIndex;
    //    console.log('length++', lastrow.rowIndex);
    //    let emptyRow = { [srProps]: lastIndex + 2 };
    //    gridApi.updateRowData({ add: [emptyRow] });
    

    //}
  /*  <button className="p-1 m-3 btn btn-primary" onClick={onAddRow}>Add Row </button>*/
   
    return (
        <>

            <div
                className="text-center col-12 m-0 card-title"
                style={titleClr ? { textAlign: "start" } : { textAlign: "start" }}
            >
                <span className="row-header p-0 m-0" style={{ fontSize: '1.1rem' }}>{title}</span>
            </div>



            <div style={gridStyle} className="ag-theme-alpine">
                <AgGridReact
                    rowData={data}
                    columnDefs={colDef}
                    defaultColDef={defaultColDef}
                    scrollbarWidth={8}
                    getRowNodeId={(data: any) => data.id}
                    gridOptions={gridOptions}
                    onGridReady={onGridReady}
                    alwaysShowHorizontalScroll={true}
                    alwaysShowVerticalScroll={true}
                   
                ></AgGridReact>
            </div>




        </>
    );
}