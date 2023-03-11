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

const AddQcPlan = () => {
    const [value, setValue] = React.useState<Dayjs | null>(null);
    const [tovalue, setToValue] = React.useState<Dayjs | null>(null);
    const [serieslist, setSerieslist]: any = React.useState([]);

    var api = useFetch();
    const getList = async () => {
        try {

            let path = `/api/GetSeries?TranType=48&SrType=0&Company=46&Customer=57`
            let { res, got } = await api(path, 'GET', '')
            console.log('res', res)
            if (res.status === 200) {
                var r = got.data;
                let modify_list: any = r.map((option: any) => ({

                    id: option.code,
                    value: option.name,

                }))
                setSerieslist(modify_list)
            }
            else throw new Error('Bad Fetch 1')
        } catch (err) { alert(err) }

    }



    React.useEffect(() => {
        let date: any = new Date();
        setValue(date);
        setToValue(date);
        getList();
    }, [])

    let data: any[] = [{ prc: null, ut: null, amt: null, setup: null, cyc: null, manpow: null, ifin: null, elec: null, totOvr: null, jbWork: null, mcDep: null }]

    var ColDef: any[] = [{ field: 'sn', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },
    {
        field: 'qp', headerName: 'Quality Parameter(MIC)', minWidth: 400, cellStyle: { paddingLeft: '0', paddingRight: '0' },

        cellEditor: AutocompleteSelectCellEditor,
        cellEditorParams: {
            required: true,
            //selectData: React.useMemo(() => { return processLoad }, [processLoad]),
            placeholder: "Select Quality Parameter(MIC)"
        },
        valueFormatter: (params: any) => {
            if (params.value) {
                return params.value.label || params.value.value || params.value;
            }
            return "";
        },
        editable: true

    },
    { field: 'desc', headerName: 'Description', minWidth: 200 },
    {
        field: 'sp', headerName: 'Sampling Plan', minWidth: 400, cellStyle: { paddingLeft: '0', paddingRight: '0' },

        cellEditor: AutocompleteSelectCellEditor,
        cellEditorParams: {
            required: true,

            placeholder: "Select Sampling Plan"
        },
        valueFormatter: (params: any) => {
            if (params.value) {
                return params.value.label || params.value.value || params.value;
            }
            return "";
        },
        editable: true

    },
    { field: 'uom', headerName: 'UOM', minWidth: 200 },
    { field: 'tv', headerName: 'Target Value', minWidth: 200 },
    { field: 'lv', headerName: 'Lower Value', minWidth: 200 },
    { field: 'uv', headerName: 'Upper Value', minWidth: 200 },
    { field: 'narration', headerName: 'Narration', minWidth: 200 },
    {
        field: 'qct', headerName: 'QC Type', minWidth: 400, cellStyle: { paddingLeft: '0', paddingRight: '0' },

        cellEditor: AutocompleteSelectCellEditor,
        cellEditorParams: {
            required: true,

            placeholder: "Select QC Type"
        },
        valueFormatter: (params: any) => {
            if (params.value) {
                return params.value.label || params.value.value || params.value;
            }
            return "";
        },
        editable: true

    },
    {
        field: 'mm', headerName: 'Measuring Method', minWidth: 400, cellStyle: { paddingLeft: '0', paddingRight: '0' },

        cellEditor: AutocompleteSelectCellEditor,
        cellEditorParams: {
            required: true,

            placeholder: "Select Measuring Method"
        },
        valueFormatter: (params: any) => {
            if (params.value) {
                return params.value.label || params.value.value || params.value;
            }
            return "";
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


                                            <>
                                                <label htmlFor="series" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 labl2">Series</label>
                                            </>
                                            <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                                                <DatalistInput

                                                    className="d-flex col-12 m-0 p-0"
                                                    inputProps={{ className: 'form-control inp col-12 qcdatalist int', name: 'series' }}
                                                    listboxProps={{ className: 'text-left mt-5' }}

                                                    onSelect={(item: any) => { console.log('id', item.id); }}
                                                    items={serieslist}
                                                />

                                            </span>
                                            {/*<MasterInput2 name="Series" label="Series" ipTitle="Enter Series" ipType="text" classCategory="form-control col-4 inp" />*/}
                                            <span className="col-1 m-0"></span>
                                            <MasterInput2 name="Code" label="Code" ipTitle="Enter Code" ipType="text" classCategory="form-control col-4 inp" />
                                        </span>

                                        <span className="d-flex section2 col-sm-12">

                                            <MasterInput2 name="Pub. No." label="Pub. No." ipTitle="Enter Pub. No." ipType="text" classCategory="form-control col-4 inp" />
                                            <span className="col-1 m-0"></span>
                                            <MasterInput2 name="Itemcode" label="Item Code" ipTitle="Enter Item Code" ipType="text" classCategory="form-control col-4 inp" />
                                        </span>

                                        <span className="d-flex section2 col-sm-12">

                                            <MasterInput2 name="Itemname" label="Item Name" ipTitle="Enter Item Name" ipType="text" classCategory="form-control col-4 inp" />
                                            <span className="col-1 m-0"></span>
                                            <label htmlFor="majProd" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 labl2">Valid From</label>
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DatePicker
                                                    inputFormat="DD/MM/YYYY"
                                                    value={value}
                                                    className="dateborder mt-2"
                                                    onChange={(newValue: any) => {
                                                        setValue(newValue);
                                                    }}
                                                    renderInput={(params: any) => <TextField {...params} />}
                                                />
                                            </LocalizationProvider>


                                        </span>
                                        <span className="d-flex section2 col-sm-12 mt-2">

                                            <>

                                                <label htmlFor="majProd" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 labl2">Valid To</label>
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <DatePicker
                                                        inputFormat="DD/MM/YYYY"
                                                        value={tovalue}
                                                        className="form-control inp todate"

                                                        onChange={(newValue: any) => {
                                                            setToValue(newValue);
                                                        }}
                                                        renderInput={(params: any) => <TextField {...params} />}
                                                    />
                                                </LocalizationProvider>
                                            </>
                                            <span className="col-1 m-0"></span>

                                            <button type="button" className="btn pl-2 pr-0 mt-3 mb-2 col-2" style={{ borderRadius: '21px', color: 'white', backgroundColor: "rgb(121, 140, 212)", letterSpacing: 3, marginLeft: '10%', top: '-11px' }} data-toggle="modal" data-target="#qcPlanCopy">
                                                QC Plan Copy
                                            </button>

                                        </span>
                                    </form>

                                </div>

                            </div>

                        </div>


                        <hr />

                        <WriteGrid title="Process Operation Details" w='100vw' titleClr="blue" OpenSubLayer={() => { }} colDef={ColDef} data={data} />


                    </div>

                </div>
                <div className="btn-group col-6 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', float: 'right' }}>
                    <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0">Save</button>
                    <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} onClick={() => { }} className="btn btn-success mr-2 ml-2 pl-0 pr-0 ">Save & Submit</button>
                    <button type="button" style={{ border: '2px solid orange', letterSpacing: 3 }} className="btn btn-warning pl-0 pr-0">Quit</button>
                </div>
            </>


        </>
    );
}

export default AddQcPlan;