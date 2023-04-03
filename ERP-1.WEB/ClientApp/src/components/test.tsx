import * as React from 'react';
import AutoComp from './custom-input/droplist/droplist.component';
import { AgGridReact } from 'ag-grid-react';
import AutocompleteSelectCellEditor from 'ag-grid-autocomplete-editor';
export default function Test() {
    console.log('called')
    const col: any[] = [{
        field: 'droplist', maxWidth: 400, minWidth: 400, cellStyle: { paddingLeft: '0', paddingRight: '0' },

        cellEditor: AutocompleteSelectCellEditor,
        cellEditorParams: {
            required: true,
            selectData: React.useMemo(() => { [{ label: 'apple', value: '1' }, { label: 'banana', value: '2' }, { label: 'pineapple', value: '3' }] }, []),
          
        },

        valueFormatter: (params: any) => {
            if (params.value) {
                return params.value.label || params.value.value || params.value;
            }
            return params.label;
        },
        editable: true

    }]
    return (
        <>
            <AgGridReact
                rowData={[{ droplist: { label: 'apple', value: '1' } }]}
                columnDefs={col}


            ></AgGridReact>
        </>
        )
}