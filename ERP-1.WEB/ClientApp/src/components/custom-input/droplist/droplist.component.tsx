////import * as React from 'react';
////import Autocomplete from 'react-autocomplete';
import * as React from 'react';
import { useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { useState } from 'react'
import AutocompleteSelectCellEditor from 'ag-grid-autocomplete-editor';

import 'ag-grid-autocomplete-editor/dist/main.css';

//import { GridOptions } from 'ag-grid-community';



export default function AutoComp() {

    const [gridApi, setGridApi]: any = useState(null);
    const [columnApi, setColumnApi]: any = useState(null);
    const [rowData, setRowData]: any = useState(null);

    const col: any[] = [{
        field: 'droplist', cellStyle: { paddingLeft: '0', paddingRight: '0' },

        cellEditor: AutocompleteSelectCellEditor,
        cellEditorParams: {
            required: true,
            selectData:
                [{ label: 'apple', value: '1' },
                { label: 'banana', value: '2' },
                { label: 'pineapple', value: '3' }],
            autocomplete: {
                customize: function ({ input, inputRect, container, maxHeight }: any) {
                    if (maxHeight < 100) {
                        container.style.top = '';
                        container.style.bottom = (window.innerHeight - inputRect.bottom + input.offsetHeight) + 'px';
                        container.style.maxHeight = '200px';
                    }
                },
                showOnFocus: true

            }
        },

        valueFormatter: (params: any) => {
            if (params.value) {
                return params.value.label || params.value.value || params.value;
            }
            return params.label;
        },
        editable: true

    }]
    const defaultColDef = useMemo(() => {
        return {
            //resizable: true,
            /* editable: true,*/
            sortable: true,

            filter: true,
        };
    }, []);

    var gridOptions: any = {

        defaultColDef: defaultColDef

    };
    // custom navigation

    //--------------------------------------------------------------------------------
    const CustomFunctionalities = (e: any) => {

        if (e.event.key === 'Enter') {
            if (rowData[e.rowIndex][e.colDef.field] !== null) {


                gridApi.tabToNextCell();

            }
        }

        else if (e.event.code == "Space") {
            var currentCell = gridApi.getFocusedCell();
            gridApi.startEditingCell({
                rowIndex: currentCell.rowIndex,
                colKey: currentCell.column.colId
            });
        }

        else { }
        //refresh columns 
    }
    function onGridReady(params: any) {

        setGridApi(params.api);

        setColumnApi(params.columnApi);
        params.api.sizeColumnsToFit();


        params.api.sizeColumnsToFit();
    }



    return (

    
            <div style={{ width: '100%', height: '50px', margin: '0', border: 'none' }} className="ag-theme-alpine m-0 p-0 col-4">
                <AgGridReact
                    rowData={[{ droplist: null }]}
                    columnDefs={col}
                    headerHeight={0}
                    onCellKeyDown={CustomFunctionalities}
                    suppressHorizontalScroll={true}
                    suppressVerticalScroll={true}
                    enableCellEditingOnBackspace={true}
                    gridOptions={gridOptions}
                    onGridReady={onGridReady}

                ></AgGridReact>
            </div >


 
    );
    /*    onCellKeyPress={onCellClicked}*/
}



