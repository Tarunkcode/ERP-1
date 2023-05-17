
import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, Prompt, useHistory } from 'react-router-dom';
import { InputList, MasterInput, MasterInput2 } from '../../../components/custom-input/custom-input.component';
import CustomeSwitch, { CustomeSwitch2 } from '../../../components/CustomSwitch/custom-switch.component';

import BOMModals from '../../../components/Modals/BomModals';
import { AddRow, DeleteRow, getCurrentRowNo } from '../../Helper Functions/table';
import { Dayjs } from 'dayjs';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import RouteDetails from './RouteDetails.component';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
/*import DataGrid from '../../../components/GRID_COMPONENT/Grid.index';*/
/*import { OLYMPIC_SPORTS, OLYMPIC_COUNTRIES } from "../../../components/GRID_COMPONENT/ApiData/list";*/
import { TextField, Autocomplete } from '@mui/material'

import { AutocompleteSelectCellEditor } from 'ag-grid-autocomplete-editor';
import 'ag-grid-autocomplete-editor/dist/main.css';
import WriteGrid from '../../../components/Grid Component/grid.component';
import DatalistInput from 'react-datalist-input';
import 'react-datalist-input/dist/styles.css';
import AutoComp from '../../../components/custom-input/droplist/droplist.component';
import { BOM_STORE } from '../../../Redux/BOM/bom.reducer';
import { NumericEditor } from '../../../components/Grid Component/EnterOnlyNumbers';
import { toast } from 'react-toastify';
import useFetch from '../../../components/Hooks/useFetch';
import { LoaderContext } from '../../../AppContext/loaderContext';

function BomRoutingConfig_Page({ seriesLoad, processLoad, codeNameLoad12, codeNameLoad23, handleBOMHeader, SaveRoutingMaster, routingCode, CollectList, CollectListWithItem, seriesNumType, provide_conf, watchItemObj, getRoutingDetailApi, getBomConsumeDetailApi, getBomProduceDetailApi, uomList, collectBOMConsDetails, collectBOMProdDetails, currentConsDetails, currentProdDetails, prodItemRow, consItemRow, getAltItemDetailApi, getOtherProdDetailApi, getOperationDetailApi, getCurrentRow, collectAltItemDetails, currentAltItemDetails, altItemRow, collectOperationDetails, currentOperationDetails, oprDefRow, collectOtherProdDetails, currentOtherProdDetails, otherProdDefRow, getProdItemCurrentRow, getAltItemCurrentRow, currentOverheadDetails, getOverheadDetApi, overheadDefRow, collectOverheadDetails,details,...otherProps }: any) {

 
    var [currentRowData, setCurrentRowData]: any = React.useState({});
    var [currentRowNo, setCurrentRowNo]: any = React.useState(null);
    React.useEffect(() => {
        console.log('loaded master details', details);
    }, [details])

    //-------------------------------------------------------------------------Routing Variable--------------------------------------------------------

    //-----------------------------------------------------------------------------------------------------------------------------------------------
    const history = useHistory();
    React.useEffect(() => {console.log('uom list', uomList) }, [uomList.length])
    const OpenPrompt = (e: any) => {
        if (e.key === 'Insert') {
            let res = confirm("Do You Wnat to Copy");
            console.log(res);
            setIsCopy(res);

        }
    };

    let [isCopy, setIsCopy]: any = useState(false)
    let [isItemBox, setIsItemBox]: any = React.useState(false);
    let [isOperation, setIsOperation]: any = React.useState(false);
    let [isOverhead, setIsOverhead]: any = React.useState(false);
   

    const OpenBOMItemCons = (e: any) => {
        console.log('thid id row data ', e)
        if (e.colDef.field === "process") {
            if (e.data.process && e.event.keyCode === 13) {
                let currentRowData = { ...e.data, sr: e.rowIndex + 1 }
                setCurrentRowData(currentRowData);
                let currentRow = parseInt(e.rowIndex + 1);
                
                setCurrentRowNo(currentRow);
                getCurrentRow(currentRow, currentRowData);
                //provide_conf.eProdOH
                    setIsItemBox(true);
                if (provide_conf.eProdOpr === 1 && provide_conf.eProdOH === 1) {
                    setIsOperation(true)
                    setIsOverhead(true)
                } else if (provide_conf.eProdOpr === 1) {

                    setIsOperation(true);

                } else if (provide_conf.eProdOH === 1) {
                    setIsOverhead(true);
                } else {

                }
           
             
            }
        } else { }

    }

    let data: any[] = [{ process: null, amt: null, settime: null, machinetime: null, manpower: null, finalprocess: null, electricity: null, poh: null, job: null, machinedep: null }]

    var ColDef: any[] = [{ field: 'sr', headerName: "Stage", valueGetter: 'node.rowIndex + 1', maxWidth: 200, minWidth: 200 },
    {
        field: 'process', headerName: 'Process', minWidth: 400, cellStyle: { paddingLeft: '0', paddingRight: '0' },

        cellEditor: AutocompleteSelectCellEditor,
        cellEditorParams: {
            required: true,
            selectData: React.useMemo(() => { return processLoad }, [processLoad]),
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
            placeholder: "Select a Process"
        },
        onCellValueChanged: (params: any) => {
            if (params.oldValue !== params.newValue) {
                params.data.amt = 0.00;
                params.data.settime = 0.00;
                params.data.machinetime = 0.00;
                params.data.manpower = 0.00;
                params.data.finalprocess = { label: 'N', value: 0 };
                params.data.electricity = 0.00;
                params.data.poh = 0.00;
                params.data.job = { label: 'N', value: 0 };
                params.data.machinedep = {label : 'N', value : 0};

                params.api.refreshCells({ force: true });
            }
        },

        valueFormatter: (params: any) => {
            if (params.value) {
                return params.value.label || params.value.value || params.value;
            }
            return params.label;
        },
        editable: true

    },

        { field: 'amt', headerName: 'Amount', minWidth: 200, editable: true, cellEditor: NumericEditor},
        { field: 'settime', headerName: 'Set Up Time', minWidth: 200, editable: true, cellEditor: NumericEditor},
        { field: 'machinetime', headerName: 'Cycle Time', minWidth: 200, editable: true, cellEditor: NumericEditor},
        { field: 'manpower', headerName: 'Manpower', minWidth: 200, editable: true, cellEditor: NumericEditor},

    {
        field: 'finalprocess', headerName: 'Is Final', minWidth: 200,
        cellEditor: AutocompleteSelectCellEditor,
        cellEditorParams: {
            required: true,
            selectData: [{ label: 'Y', value: 1 }, { label: 'N', value: 0 }],
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
            placeholder: 'Select an option',
        },
        valueFormatter: (params: any) => {
            if (params.value) {
                return params.value.label || params.value.value || params.value;
            }
            return params.label;
        },
        editable: true

    },


        { field: 'electricity', headerName: 'Electricity Unit', minWidth: 200, editable: true, cellEditor: NumericEditor },
        { field: 'poh', headerName: 'Total OverHead', minWidth: 200, editable: true, cellEditor: NumericEditor },

    {
        field: 'job', headerName: 'Job Work', minWidth: 200,
        cellEditor: AutocompleteSelectCellEditor,
        cellEditorParams: {
            required: true,
            selectData: [{ label: 'Y', value: 1 }, { label: 'N', value: 0 }],
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
            placeholder: 'Select an option',
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
        field: 'machinedep', headerName: 'Machine Dep.', minWidth: 200,
        cellEditor: AutocompleteSelectCellEditor,
        cellEditorParams: {
            required: true,
            selectData: [{ label: 'Y', value: 1 }, { label: 'N', value: 0 }],
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
            placeholder: 'Select an option',
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


    const [value, setValue] = React.useState<Dayjs | null>(null);
    useEffect(() => {
        let date: any = new Date();
        setValue(date);
    }, [])
    return (
        <>

            {
                isOperation || isCopy || isOverhead ? (<BOMModals isOperation={isOperation} isOverHead={isOverhead} handleOperation={setIsOperation} handleOverhead={setIsOverhead} uomList={uomList} isCopy={isCopy} setIsCopy={setIsCopy} getOperationDetApi={getOperationDetailApi} collectOperationDetails={collectOperationDetails} currentOperationDetails={currentOperationDetails} oprDefRow={oprDefRow} processDetails={currentRowData} currentOverheadDetails={currentOverheadDetails} getOverheadDetApi={getOverheadDetApi} overheadDefRow={overheadDefRow} collectOverheadDetails={collectOverheadDetails} details={details } />) : null
            }
           

            <RouteDetails blindWatch={watchItemObj} isItemBox={isItemBox} setIsItemBox={setIsItemBox} itemCodeLst12={codeNameLoad12} itemCodeLst23={codeNameLoad23} currentRowData={currentRowData} uomList={uomList} getBomConsumeDetailApi={getBomConsumeDetailApi} getBomProduceDetailApi={getBomProduceDetailApi} collectBOMConsDetails={collectBOMConsDetails} collectBOMProdDetails={collectBOMProdDetails} currentConsDetails={currentConsDetails} currentProdDetails={currentProdDetails} rawData2={prodItemRow} rawData1={consItemRow} handleChange={handleBOMHeader} getAltItemDetailApi={getAltItemDetailApi} getOtherProdDetailApi={getOtherProdDetailApi} collectAltItemDetails={collectAltItemDetails} currentAltItemDetails={currentAltItemDetails} altItemRow={altItemRow} collectOtherProdDetails={collectOtherProdDetails} currentOtherProdDetails={currentOtherProdDetails} otherProdDefRow={otherProdDefRow} currentRowNo={currentRowNo} getProdItemCurrentRow={getProdItemCurrentRow} getAltItemCurrentRow={getAltItemCurrentRow} details={ details} />

            <div className="main card firstDiv">

                <div className="text-center card-title col-12" style={{ textAlign: 'start' }}>
                    <span className="row-header p-0 m-0" >BOM Routing Configuration</span>
                </div>
                <div className="card-body row col-sm-12 m-0 p-0" >
                    <form className="row-content form col-sm-12 pt-0">
                        <fieldset className="form-group border p-0" >
                            <legend className="px-2" data-toggle="collapse" data-target="#genDetails" aria-expanded="false" aria-controls="genDetails" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Item Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>

                            <div className="collapse show" id="genDetails">

                                <span className="d-flex section2 col-sm-12">



                                    <AutoComp name="series" label="Series" ipTitle="Select Series" list={seriesLoad} ipType="text" collectWithItem={CollectListWithItem} classCategory="form-control col-4 inp str" isMandate={true} />
                                    <span className="col-1 m-0"></span>
                                    <CustomeSwitch2 lablClass="custom-control-label col-4" label="Freeze" id="c25" name="c25" classCat="form-control switch custom-control-input col-3 BOMHeader" handleChange={handleBOMHeader} default={details.bomheader && details.bomheader.length > 0 ? details.bomheader[0].c25 : 0} />
                                </span>
                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 name="vchno" label="Routing Code" ipTitle="Enter Routing Code" ipType="text" classCategory="form-control col-12  BOMHeader text" length={60} isMandate={true} read={seriesNumType === 1 ? true : false} defaultt={details.bomheader && details.bomheader.length > 0 ? details.bomheader[0].vchno : routingCode} />


                                    <span className="col-1 m-0"></span>

                                    <MasterInput2 name="name" label="Routing Name" ipTitle="Enter Routing Name" ipType="text" classCategory="form-control col-12  BOMHeader text" length={60} isMandate={true} handleChange={handleBOMHeader} defaultt={details.bomheader && details.bomheader.length > 0 ? details.bomheader[0].name : ''} />
                                </span>

                                <span className="d-flex section2 col-sm-12">

                                    <AutoComp name="item" label="Item Code" ipTitle="Select Item Code" list={codeNameLoad12} ipType="text" collectWithItem={CollectListWithItem} classCategory="form-control col-4 inp str" isMandate={true} defaultt={watchItemObj.itemcode} />
                                    {/*missed*/}

                                    <span className="col-1 m-0"></span>

                                    <MasterInput2 name="itemname" defaultt={watchItemObj.itemname} label="Item Name" ipTitle="Enter Item Name" ipType="text" handleChange={() => { }} classCategory="form-control col-12  BOMHeader text" length={60} read={true} isMandate={true} />

                                </span>

                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="unit" defaultt={watchItemObj.uomname} label="UOM" ipTitle="Enter UOM" ipType="text" classCategory="form-control BOMHeader col-12 text" length={60} read={true} isMandate={true}/>
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="qty" label="Produce Qty" ipTitle="Enter Produce Qty" ipType="number" classCategory="form-control col-12 number BOMHeader" handleChange={handleBOMHeader} isMandate={true} length={60} />


                                </span>

                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 name="validfrom" label="Valid From" ipTitle="Enter Valid From Date" ipType="date" classCategory="form-control col-12 BOMHeader" handleChange={handleBOMHeader} isMandate={true} />
                                    <span className="col-1 m-0"></span>
                                    {
                                        provide_conf.eRoutingVer === 1 ? (<MasterInput2 name="version" label="Version" ipTitle="Enter Version" ipType="text" handleChange={() => { }} classCategory="form-control col-12  BOMHeader text" length={60} isMandate={true} />) : null
                                    }

                                </span>

                            </div>
                        </fieldset>
                    </form>


                </div>
            </div>

            <hr style={{ margin: '0', padding: '0' }} />

            <WriteGrid title="Routing Details" titleClr="blue" OpenSubLayer={OpenBOMItemCons} colDef={ColDef} data={data} srProps="sr" collect={getRoutingDetailApi} chkDup="process" />

            <hr style={{ margin: '0', padding: '0' }} />


            <div className=" row col-12 pl-4">

                <div className="col-4 mr-0" style={{ float: 'left' }}>
                    <label htmlFor="docs" style={{ fontSize: '0.8em' }} className="form-label ml-2">Upload Image</label>
                    <input type="file" name="docs" />

                </div>

                <div className="btn-group col-6 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', float: 'right' }}>
                    <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0">Save</button>
                    <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} onClick={SaveRoutingMaster} className="btn btn-success mr-2 ml-2 pl-0 pr-0 ">Save & Submit</button>
                    <button type="button" style={{ border: '2px solid orange', letterSpacing: 3 }} className="btn btn-warning pl-0 pr-0" onClick={() => { history.push('quit-successfully') }}>Quit</button>
                </div>

            </div>

        </>
    );

}

export default BomRoutingConfig_Page;