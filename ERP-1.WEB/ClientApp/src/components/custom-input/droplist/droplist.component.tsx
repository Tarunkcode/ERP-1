
import * as React from 'react';
import { useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { useState } from 'react'
import AutocompleteSelectCellEditor from 'ag-grid-autocomplete-editor';

import 'ag-grid-autocomplete-editor/dist/main.css';

//import { GridOptions } from 'ag-grid-community';



export default function AutoComp({ list, name, collect, saveData, vccode, data, ...rest }: any) {


    const [listApi, setListApi]: any = useState(null);
    //const [makerList, setMakerList]: any = useState([]);
    const [columnApi, setColumnApi]: any = useState(null);


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

    //const addCellBlurListener = (e: any) => {
    //    const target: any = document.activeElement;
    //    if (target) {
    //        target.addEventListener('blur', onCellBlur);
    //    }
    //}
    //const onCellBlur = () => {
 
    //};
    // custom navigation

    //--------------------------------------------------------------------------------
    const CustomFunctionalities = (e: any) => {
        //if (e.event.key === 'Enter') {
        //    if (data[e.rowIndex][e.colDef.field] !== null) {


        //        listApi.tabToNextCell();

        //    }
        //}

        if (e.event.code == "Space") {
            var currentCell = listApi.getFocusedCell();
            listApi.startEditingCell({
                rowIndex: currentCell.rowIndex,
                colKey: currentCell.column.colId
            });
        }

        else { }
        //refresh columns 
    }
    function onGridReady(params: any) {

        setListApi(params.api);
              collect(params.api);
        setColumnApi(params.columnApi);
        params.api.sizeColumnsToFit();
                


        params.api.sizeColumnsToFit();
    }



    return (


        <div key={list.length} style={{ width: '100%', height: '50px', margin: '0', border: 'none' }} className="ag-theme-alpine m-0 p-0 col-12 mt-1">
            <AgGridReact
                rowData={data}
                columnDefs={[{
                    field: name, cellStyle: { paddingLeft: '0', paddingRight: '0' },

                    cellEditor: AutocompleteSelectCellEditor,
                    cellEditorParams: {
                        required: true,
                        selectData: React.useMemo(() => { return list }, [list]),
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
                    onCellValueChanged: (params: any) => {
                        if (params.oldValue !== params.newValue) {
                            params.api.refreshCells({ force: true });
                        }
                    },
                    valueFormatter: (params: any) => {
                        if (params.value) {
                            saveData( name, params.value.value);
                            return params.value.label || params.value.value || params.value;
                        }
                        return params.label;
                    },
                    editable: true

                }]}
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
          {/*      onCellEditingStoped={onCellBlur}*/}
                {/*onCellFocused={addCellBlurListener}*/}
}


