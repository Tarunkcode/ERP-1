import * as React from 'react';
import { useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { useState } from 'react'


import 'ag-grid-autocomplete-editor/dist/main.css';
import './styles.css';
//import { GridOptions } from 'ag-grid-community';
import { toast } from 'react-toastify';

export default function WriteGrid({ data, colDef, title, titleClr, OpenSubLayer, collect,H, srProps, ...rest }: any) {

    const [gridApi, setGridApi]: any = useState(null);
    const [columnApi, setColumnApi]: any = useState(null);
    const [rowData, setRowData]: any = useState(null);
    const gridStyle = useMemo(() => ({ width: '100%', height: H ? H : 500 }), []);
    let firstRow = data[0];

    const defaultColDef = useMemo(() => {
        return {
            //resizable: true,
            /* editable: true,*/
            sortable: true,

            filter: true,
        };
    }, []);

    var gridOptions: any = {
        rowData: rowData,
        columnDefs: colDef
     /*   defaultColDef: defaultColDef*/

    };
    // custom navigation

    //--------------------------------------------------------------------------------
    const CustomFunctionalities = (e: any) => {
     
        if (e.event.key === 'Enter') {
            if (rowData[e.rowIndex][e.colDef.field] !== null) {
            
                OpenSubLayer(e);
                gridApi.tabToNextCell();

               
            } else {
                console.log('do nothing !')
            }
        }
        
        else if (e.event.key === 'F9') {
            // get index
            let inDex = e.rowIndex;
            // copy rowData
            let copy: any[] = [...rowData];
            // remove row
            copy.splice(inDex, 1);
            //rearrange s.r
            let lastInd = copy.length;
            copy.map((item: any, ind: number) => {
                item[srProps] = ind + 1
            })
            copy.push({ ...firstRow, [srProps]: lastInd + 1 })
            // SET New values to grid
            setRowData([...copy])
            gridApi.refreshCells({ force: true });
        } else if (e.event.code == "Space") {
            var currentCell = gridApi.getFocusedCell();
            gridApi.startEditingCell({
                rowIndex: currentCell.rowIndex,
                colKey: currentCell.column.colId
            });
        }

        else { }
        //refresh columns 
    }
    const init100Rows = () => {

        let collection = [];
        for (let i = 0; i < 100; i++) collection.push({ ...firstRow, [srProps]: 1 + i });
        setRowData(collection);
    }
    const initailsRowCount = () => {

        let collection = [];
        for (let i = 0; i < 10; i++) collection.push({ ...firstRow, [srProps]: 1 + i });
        setRowData(collection);

    }
    function onGridReady(params: any) {
        //if (title === 'Consumed Item Details') {
        //    init100Rows()
        //} else {
        //    initailsRowCount();

        //}
            initailsRowCount();
        setGridApi(params.api);

        collect(params.api);
        setColumnApi(params.columnApi);
        params.api.sizeColumnsToFit();


        params.api.sizeColumnsToFit();
    }
    const checkDuplicacy = (e: any) => {
        console.log(e);
        if (e.value && e.value.label) {
            for (let i = 0; i < rowData.length; i++) {
                if (i !== e.rowIndex && rowData[i][e.colDef.field] !== null && e.value.label === rowData[i][e.colDef.field].label) {
                    //------------------------------------------------------------------
                    // restore current row
                    let copy = [...rowData];
                    let restoreItem = { ...firstRow, [srProps]: e.rowIndex + 1 }

                    copy.splice(e.rowIndex, 1, restoreItem);
                    setRowData([...copy]);
                    gridApi.refreshCells({ force: true });
                    //----------------------------------------------------------------------
                    toast.info('Hey! You cannot Select Same Item More than One Time');
                    gridApi.stopEditing();
                    break;
                }
                else {
                    gridApi.startEditingCell(e);

                }

            }

        } else {

        }
    }
    const onCellClicked = (e: any) => {
        //let keyArr: any[] = Object.keys(rowData[0]);

        let clickedOn = parseInt(e.rowIndex);
        let checkOnIndex = clickedOn - 1;
        let copiedObj = rowData[checkOnIndex];

        if (checkOnIndex !== -1) {
            let isremove: boolean = delete copiedObj[srProps];

            if (isremove === true && JSON.stringify(copiedObj) === JSON.stringify(firstRow)) {
                toast.info('Please Fill Previous Row First');
                gridApi.stopEditing();
            }
            else {
                gridApi.startEditingCell(e);

            }
        }
    }


    const onAddRow = (e : any) => {
        e.preventDefault();
        let lastrow = gridApi.getDisplayedRowAtIndex(gridApi.getLastDisplayedRow());
        let lastIndex = lastrow.rowIndex;
        console.log('length++', lastrow.rowIndex);
        let emptyRow = { [srProps]: lastIndex + 2 };
        gridApi.updateRowData({ add: [emptyRow] });


    }


    return (
        <>

            <button className="p-1 m-3 btn btn-primary" onClick={onAddRow}>Add Row </button>
            <div
                className="text-center m-0 card-title"
                style={{ textAlign: "start" }}
            >
                <span className="row-header p-0 m-0" style={{ fontSize: '1.1rem' }}>{title}</span>
            </div>



            <div id="myGrid" style={gridStyle} className="ag-theme-alpine">
                <AgGridReact
                    rowData={rowData}
                    columnDefs={colDef}
                    scrollbarWidth={8}
                    getRowNodeId={(data: any) => data.id}
                    onGridReady={onGridReady}
                    onCellEditingStarted={onCellClicked}
                    onCellEditingStopped={checkDuplicacy}
                    onCellKeyDown={CustomFunctionalities}
                    enableCellEditingOnBackspace={true}
                    gridOptions={gridOptions}
                    alwaysShowHorizontalScroll={true}
                    alwaysShowVerticalScroll={true}

                ></AgGridReact>
            </div>




        </>
    );
    /*    onCellKeyPress={onCellClicked}*/
}