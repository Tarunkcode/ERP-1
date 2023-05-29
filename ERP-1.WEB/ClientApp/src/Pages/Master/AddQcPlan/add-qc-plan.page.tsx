import * as React from 'react';
import { MasterInput2 } from '../../../components/custom-input/custom-input.component';
import useFetch from '../../../components/Hooks/useFetch';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TextField, Autocomplete } from '@mui/material';
import { Dayjs } from 'dayjs';
import { AutocompleteSelectCellEditor } from 'ag-grid-autocomplete-editor';
import 'ag-grid-autocomplete-editor/dist/main.css';
import WriteGrid from '../../../components/Grid Component/grid.component';
import DatalistInput from 'react-datalist-input';
import 'react-datalist-input/dist/styles.css';
import AutoComp from '../../../components/custom-input/droplist/droplist.component';
import CustomDate from '../../../components/Date Component/CustomDate.component';
import { NumericEditor } from '../../../components/Grid Component/EnterOnlyNumbers';

const AddQcPlan = ({ seriesList, itemCodes, handleHeaderChange, handleDrops, getApi, SaveQcMaster, uomList, qcParaList, qcTypeList, samplingPlanList, measuringList,...otherProps }: any) => {
    const [value, setValue] = React.useState<Dayjs | null>(null);
    const [tovalue, setToValue] = React.useState<Dayjs | null>(null);
 
    React.useEffect(() => {
        let date: any = new Date();
        setValue(date);
        setToValue(date);
    }, [])

    let data: any[] = [{ qcparameter: null, desc: null, smp: null, uom: null, targetval: null, lowerval: null, upperval: null, narration: null, qctype: null, measuringmethod : null }]

    var ColDef: any[] = [{ field: 'sn', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },
    {
        field: 'qcparameter', headerName: 'Quality Parameter(MIC)', minWidth: 400, cellStyle: { paddingLeft: '0', paddingRight: '0' },

        cellEditor: AutocompleteSelectCellEditor,
        cellEditorParams: {
            required: true,
            selectData: React.useMemo(() => { return qcParaList }, [qcParaList]),
            autocomplete: {
                customize: function ({ input, inputRect, container, maxHeight }: any) {
                    if (maxHeight < 100) {
                        container.style.top = '';
                        container.style.bottom = (window.innerHeight - inputRect.bottom + input.offsetHeight) + 'px';
                        container.style.maxHeight = '200px';
                    }
                },
                showOnFocus: true

            },
        },
        valueFormatter: (params: any) => {
            if (params.value) {
                return params.value.label || params.value.value || params.value;
            }
            return params.label;
        },
            editable: true

    },
    { field: 'desc', headerName: 'Description', minWidth: 400 },
    {
        field: 'smp', headerName: 'Sampling Plan', minWidth: 400, cellStyle: { paddingLeft: '0', paddingRight: '0' },

        cellEditor: AutocompleteSelectCellEditor,
        cellEditorParams: {
            required: true,
            selectData: React.useMemo(() => { return samplingPlanList }, [samplingPlanList]),
            autocomplete: {
                customize: function ({ input, inputRect, container, maxHeight }: any) {
                    if (maxHeight < 100) {
                        container.style.top = '';
                        container.style.bottom = (window.innerHeight - inputRect.bottom + input.offsetHeight) + 'px';
                        container.style.maxHeight = '200px';
                    }
                },
                showOnFocus: true

            },

        },
        valueFormatter: (params: any) => {
            if (params.value) {
                return params.value.label || params.value.value || params.value;
            }
            return params.label;
        },
            editable: true
    },
        {
            field: 'uom', headerName: 'Uom', minWidth: 200, cellStyle: { paddingLeft: '0', paddingRight: '0' },

            cellEditor: AutocompleteSelectCellEditor,
            cellEditorParams: {
                required: true,
                selectData: React.useMemo(() => { return uomList }, [uomList]),
                autocomplete: {
                    customize: function ({ input, inputRect, container, maxHeight }: any) {
                        if (maxHeight < 100) {
                            container.style.top = '';
                            container.style.bottom = (window.innerHeight - inputRect.bottom + input.offsetHeight) + 'px';
                            container.style.maxHeight = '200px';
                        }
                    },
                    showOnFocus: true

                },

            },
            valueFormatter: (params: any) => {
                if (params.value) {
                    return params.value.label || params.value.value || params.value;
                }
                return params.label;
            },
                editable: true
        },
        { field: 'targetval', headerName: 'Target Value', minWidth: 200, editable: true, cellEditor: NumericEditor },
        { field: 'lowerval', headerName: 'Lower Value', minWidth: 200, editable: true, cellEditor: NumericEditor},
        { field: 'upperval', headerName: 'Upper Value', minWidth: 200, editable: true, cellEditor: NumericEditor},
        { field: 'narration', headerName: 'Narration', minWidth: 200, editable: true},
    {
        field: 'qctype', headerName: 'QC Type', minWidth: 400, cellStyle: { paddingLeft: '0', paddingRight: '0' },

        cellEditor: AutocompleteSelectCellEditor,
        cellEditorParams: {
            required: true,
            selectData: React.useMemo(() => { return qcTypeList }, [qcTypeList]),
            autocomplete: {
                customize: function ({ input, inputRect, container, maxHeight }: any) {
                    if (maxHeight < 100) {
                        container.style.top = '';
                        container.style.bottom = (window.innerHeight - inputRect.bottom + input.offsetHeight) + 'px';
                        container.style.maxHeight = '200px';
                    }
                },
                showOnFocus: true

            },
        },
        valueFormatter: (params: any) => {
            if (params.value) {
                return params.value.label || params.value.value || params.value;
            }
            return params.label;
        },
            editable: true
    },
    {
        field: 'measuringmethod', headerName: 'Measuring Method', minWidth: 400, cellStyle: { paddingLeft: '0', paddingRight: '0' },

        cellEditor: AutocompleteSelectCellEditor,
        cellEditorParams: {
            required: true,
            selectData: React.useMemo(() => { return measuringList }, [measuringList]),
            autocomplete: {
                customize: function ({ input, inputRect, container, maxHeight }: any) {
                    if (maxHeight < 100) {
                        container.style.top = '';
                        container.style.bottom = (window.innerHeight - inputRect.bottom + input.offsetHeight) + 'px';
                        container.style.maxHeight = '200px';
                    }
                },
                showOnFocus: true

            },
        },
        valueFormatter: (params: any) => {
            if (params.value) {
                return params.value.label || params.value.value || params.value;
            }
            return params.label;
        },
            editable: true
    }

    ]

    return (
        <>
            <div className="modal fade" id="qcPlanCopy" role="dialog" aria-labelledby="qcPlanModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="qcPlanLabel">QC Plan Copy Details</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">

                            <>
                                <label style={{ display: 'flex', justifyContent: 'center', margin: '0 0 0 10px', padding: '0', fontSize: '14px' }} className="form-label col-12" htmlFor="material">Material</label>
                                <input className="form-control col-12 p-0" type="text" name="material" style={{ width: '456px' }} />
                            </>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Copy</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>



            <>
                <div className="main card firstDiv">
                    <div className="text-center card-title col-12" style={{ textAlign: 'start', backgroundColor: '#8389d4' }}>
                        <span className="row-header p-0 m-0" >Add QC Plan</span>
                    </div>

                    <div className="card-body row col-sm-12 m-0 p-0" >
                        <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                            <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">

                                <div className="card-body" style={{ margin: '0', padding: '0' }}>
                                    <form className="form">
                                        <span className="d-flex section2 col-sm-12">

                                            <AutoComp name="series" label="Series" ipTitle="Enter Series" list={seriesList} ipType="text" collect={handleDrops} classCategory="form-control col-4 inp" isMandate={true} />

                                            <span className="col-1 m-0"></span>
                                            <MasterInput2 name="Code" label="Code" ipTitle="Enter Code" ipType="text" classCategory="form-control col-12" />
                                        </span>

                                        <span className="d-flex section2 col-sm-12">
                                            <AutoComp name="item" label="Item Code" ipTitle="Select Item" list={itemCodes} ipType="text" collect={handleDrops} classCategory="form-control col-4 inp" isMandate={true} />

                                            <span className="col-1 m-0"></span>
                                            <MasterInput2 name="Itemname" label="Item Name" ipTitle="Enter Item Name" ipType="text" classCategory="form-control col-12" />
                                        </span>

                                        <span className="d-flex section2 col-sm-12">
                                            <CustomDate value={tovalue} setValue={setToValue} label="Valid Till" name="toDate" classCategory="form-control col-4" />
                                            <span className="col-1 m-0"></span>
                                            <CustomDate value={value} setValue={setValue} label="Valid From" name="fromDate" classCategory="form-control col-4" />
                                        </span>
                                        <hr/>
                                        <span className="d-flex section2 col-sm-12">
                                            <MasterInput2 name="Pub. No." label="Pub. No." ipTitle="Enter Pub. No." ipType="text" classCategory="form-control col-12" />

                                            <span className="col-1 m-0"></span>

                                            <button type="button" className="btn pl-2 pr-0 mt-3 mb-2 col-2 p-2" style={{ borderRadius: '21px', color: 'white', backgroundColor: "rgb(121, 140, 212)", letterSpacing: 3, marginLeft: '10%', top: '-11px' }} data-toggle="modal" data-target="#qcPlanCopy">
                                                QC Plan Copy
                                            </button>

                                        </span>
                                    </form>

                                </div>

                            </div>

                        </div>
                    </div>

                </div>
                <hr />
                <WriteGrid title="Process Operation Details" w='100vw' titleClr="blue" OpenSubLayer={() => { }} colDef={ColDef} data={data} collect={getApi }/>
                <div className="btn-group col-6 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', float: 'right' }}>
                    <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0">Save</button>
                    <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} onClick={SaveQcMaster} className="btn btn-success mr-2 ml-2 pl-0 pr-0 ">Save & Submit</button>
                    <button type="button" style={{ border: '2px solid orange', letterSpacing: 3 }} className="btn btn-warning pl-0 pr-0">Quit</button>
                </div>
            </>


        </>
    );
}

export default AddQcPlan;