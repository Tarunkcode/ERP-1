import * as React from 'react';
import { useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { useState } from 'react'
import { v4 } from "uuid";

import 'ag-grid-autocomplete-editor/dist/main.css';
//import './styles.css';
import { GridOptions } from 'ag-grid-community';
import { Color } from 'ag-grid-community';


export default function ListGrid({ rowData, cellClicked, colDef, title, titleClr, OpenSubLayer, groupIncludeTotalFooter, groupIncludeFooter, total, ...rest }: any) {
    const [gridApi, setGridApi]: any = useState(null);

    var gridRef:any = React.useRef(null);
    const rowBuffer = 0;
  
    const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
    const gridStyle = useMemo(() => ({ width: '98vw', height: 600 }), []);


    const defaultColDef = useMemo(() => {
        return {
            //resizable: true,
            /* editable: true,*/
            sortable: true,
            flex: 1,
            filter: true,

        };
    }, []);

    const onBtExport = React.useCallback(() => {
        gridRef.current.api.exportDataAsCsv();
    }, []);

   
    
    function onGridReady(params: any) {
      
        setGridApi(params.api);
        
        params.api.sizeColumnsToFit();


        params.api.sizeColumnsToFit();
    }

    //const onCellClicked: any = (params: any) => {

      
    //    console.log('params')
    //};

    //console.log('grid-cell-clicked', onCellClicked())

        //console.log('iiiiiiiiiiiiiiiiiiiiiiiiii',id)

    return (
        <>
            <button className='btn btn-secondary mb-2 ml-1' onClick={onBtExport}>Export</button>
            <div
                className="text-center col-12 m-0 card-title"
                style={titleClr ? { textAlign: "start" } : { textAlign: "start" }}
            >
                <span className="row-header p-0 m-0" style={{ fontSize: '1.1rem', color:'white' }}>{title}</span>
            </div>



            <div style={gridStyle} className="ag-theme-alpine">

                <AgGridReact
                    ref={gridRef}
                    rowData={rowData}
                    columnDefs={colDef}
                    defaultColDef={defaultColDef}
                    scrollbarWidth={8}
                    onCellClicked={cellClicked}
                    onGridReady={onGridReady}               
                ></AgGridReact>

            </div>




        </>
    );
}