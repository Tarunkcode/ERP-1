
import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, Prompt, useHistory } from 'react-router-dom';
import { InputList, MasterInput } from '../../../components/custom-input/custom-input.component';
import CustomeSwitch from '../../../components/CustomSwitch/custom-switch.component';

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

function BomRoutingConfig_Page({ seriesLoad, processLoad, codeNameLoad, handleBOMAltItem, handleBomCutComponenet, handleBomDetails, handleBOMHeader, handleBOMItemLocation, handleBOMItemSupplier, handleBomJWDetails, handleBomOtherProdDetails, handleBOMProcessPOH, handleBOMSAMEITEM, handleRoutingDetails, handleRoutingJobWork, handleRoutingMachineDetails, handleROUTINGOPRATIONDETAILS, handleRoutingOtherHead, SaveRoutingMaster, handle_BOM_Header_List, ...otherProps }: any) {


 let [isCopy, setIsCopy] : any = useState(false)
 let [iCode, setICode] : any = useState("")
    let [iName, setIName]: any = useState("")
    //-------------------------------------------------------------------------Routing Variable--------------------------------------------------------
    let [iUom, setIUom]: any = useState({})
    var [seriesCode, setSeriesCode] : any = useState(0)
    var [seriesNumType, setSeriesNumType] : any = useState(0)





















    //-----------------------------------------------------------------------------------------------------------------------------------------------
    const history = useHistory();

    const OpenPrompt = (e: any) => {
        if (e.key === 'Insert') {
        let res = confirm("Do You Wnat to Copy");
        console.log(res);
        setIsCopy(res);

        }
    };
 
    let [isItemBox, setIsItemBox]: any = React.useState(false);
    const OpenBOMItemCons = (e: any) => {
        console.log('process value', e.data.prc.value)
        console.log('event', e)
        if (e.data.prc.value) {
            if (e.event.keyCode === 13 || e.event.key === 'Enter') {
                setIsItemBox(true);
            }
        } else {}
  
    }

    let data: any[] = [{ prc:null, ut: null, amt: null, setup: null, cyc: null, manpow: null, ifin: null, elec: null, totOvr: null, jbWork: null, mcDep: null }]

    var ColDef: any[] = [{ maxWidth: 100, headerName: "Stage", valueGetter: 'node.rowIndex + 1' },
        {
            field: 'prc', headerName: 'Process', minWidth: 400, cellStyle: { paddingLeft: '0', paddingRight: '0' },

            cellEditor: AutocompleteSelectCellEditor,
            cellEditorParams: {
                required: true,
                selectData: React.useMemo(() => { return processLoad }, [processLoad]),
                placeholder: "Select a Process"
            },
                valueFormatter: (params: any) => {
                    if (params.value) {
                        return params.value.label || params.value.value || params.value;
                    }
                    return "";
                },
                editable: true
            
        },
    { field: 'ut', headerName: 'Unit', minWidth: 200 },
    { field: 'amt', headerName: 'Amount', minWidth: 200 },
    { field: 'setup', headerName: 'Set Up Time', minWidth: 200 },
    { field: 'cyc', headerName: 'Cycle Time', minWidth: 200 },
    { field: 'manpow', headerName: 'Manpower', minWidth: 200 },
    { field: 'ifin', headerName: 'Is Final', minWidth: 200 },
    { field: 'elec', headerName: 'Electricity Unit', minWidth: 200 },
    { field: 'totOvr', headerName: 'Total OverHead', minWidth: 200 },
    { field: 'jbWork', headerName: 'Job Work', minWidth: 200 },
    { field: 'mcDep', headerName: 'Machine Dep.', minWidth: 200 }
    ]

   
    const [value, setValue] = React.useState<Dayjs | null>(null);
    useEffect(() => {
        let date : any = new Date();
        setValue(date);
    }, [])
    return (
            <>

            <BOMModals isCopy={isCopy} isBOMAlt={false} isBOMProcess={false} isBOMRouting={false} setIsCopy={setIsCopy} handleAlt={handleBOMAltItem} handleOther={handleBomOtherProdDetails} handleConsume={() => {}} />
                {
                    isItemBox ? (

                    <RouteDetails isItemBox={isItemBox} setIsItemBox={setIsItemBox} itemCodeLst={codeNameLoad} handleConsume={() => { }} handleProduce={() => { }} />
                    ): null
                }
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
                                  

                                    <span className="col-4 m-0 p-0 d-flex">
                                            
                                        <>
                                            <label htmlFor="series" style={{ fontSize: '1rem', marginRight:'35px' }} className="form-label pr-0 labl labl2 col-3">Series</label>
                                        </>
                                        <span className="m-0 p-0" style={{width:'100%'}}>
                                            <DatalistInput
                                              
                                                className="d-flex col-12 m-0 p-0"
                                                inputProps={{ className: 'form-control inp col-12 BOMHeader int', name:'series' }}
                                                listboxProps={{ className: 'text-left mt-5' }}

                                                onSelect={(item: any) => { setSeriesCode(item.id); setSeriesNumType(item.numbertype); handle_BOM_Header_List(item)}}
                                                items={seriesLoad}
                                            />
                                       </span>
                                    </span>
                                    <MasterInput name="code" label="Routing Code" ipTitle="Enter Routing Code" ipType="text" classCategory="form-control inp BOMHeader text" read={seriesNumType === 1 ? true : false} handleChange={handleBOMHeader} />


 
                                    <MasterInput name="name" label="Routing Name" ipTitle="Enter Routing Name" ipType="text" classCategory="form-control BOMHeader inp text" handleChange={() => { }} />
                                  
                                    
                                </span>
                             
                                    <span className="d-flex section2 col-sm-12">
                                    <span className="col-4 m-0 p-0 d-flex">
                                        <>
                                            <label htmlFor="item" style={{ fontSize: '1rem', marginRight: '35px' }} className="form-label pr-0 labl labl2 col-3">Item Code</label>
                                        </>
                                        <span className="m-0 p-0" style={{ width: '100%' }}>
                                            <DatalistInput

                                                className="d-flex col-12 m-0 p-0"
                                                inputProps={{ className: 'form-control inp col-12 BOMHeader', name:'item' }}
                                                listboxProps={{ className: 'text-left mt-5' }}
                                                value={iCode }
                                                onSelect={(item: any) => {
                                                    let arr = item.value.split("|")
                                                    console.log('arr', arr)
                                                    let iName = arr[0]
                                                    let iCode = arr[1]
                                                    let iUomName = item.uomname
                                                    let uom = item.uom
                                                    setIUom({uom: uom, uomName: iUomName})
                                                    setICode(iCode);
                                                    setIName(iName);
                                                    handle_BOM_Header_List(item)
                                                }}
                                                items={codeNameLoad}
                                            />
                                        </span>
                                    </span>

                                    {/*missed*/}
                                    <MasterInput name="itemname" defaultt={iName} label="Item Name" ipTitle="Enter Item Name" ipType="text" classCategory="form-control BOMHeader inp text" read={true} handleChange={handleBOMHeader } />



                                    <MasterInput name="unit" defaultt={iUom.uomName} label="UOM" ipTitle="Enter UOM" ipType="text" classCategory="form-control BOMHeader inp text" read={true} handleChange={handleBOMHeader} />
                                    </span>

                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput name="qty" label="Produce Qty" ipTitle="Enter Produce Qty" ipType="number" classCategory="form-control inp number BOMHeader" handleChange={handleBOMHeader} />
                                       
                                       
                                        <>
                                        <label htmlFor="majProd" style={{ fontSize: '1rem' }} className="form-label labl labl2">Valid From</label>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                            inputFormat="DD/MM/YYYY"
                                                value={value}
                                                className="form-control inp BOMHeader"
                                                name='validfrom'
                                            onChange={(newValue : any) => {
                                                setValue(newValue);
                                            }}
                                            renderInput={(params : any) => <TextField {...params} />}
                                            />
                                        </LocalizationProvider>
                                        </>
                                    <span className="col-4">
                                        <CustomeSwitch lablClass="custom-control-label col-10 m-0 ml-4 switch BOMHeader" label="Freeze" id="c25" name="c25" classCat="form-control custom-control-input BOMHeader col-3" handleChange={handleBOMHeader} />
                                        </span>
                                    </span>

                                </div>
                            </fieldset>
                        </form>
                   
                     
                        <hr style={{ margin: '0', padding: '0' }} />
              
                        <WriteGrid title="Routing Details" titleClr="blue" OpenSubLayer={OpenBOMItemCons} colDef={ColDef} data={data }/>
                   
                    </div>
                    <hr style={{ margin: '0', padding: '0' }} />
                </div>

                   

                <div className=" row col-12 pl-4">
                    
                    <div className="col-4 mr-0" style={{ float: 'left' }}>
                            <label htmlFor="docs" style={{ fontSize: '0.8em' }} className="form-label ml-2">Upload Image</label>
                            <input type="file" name="docs" />

                    </div>

                    <div className="btn-group col-6 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', float:'right' }}>
                    <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0">Save</button>
                    <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} onClick={SaveRoutingMaster } className="btn btn-success mr-2 ml-2 pl-0 pr-0 ">Save & Submit</button>
                        <button type="button" style={{ border: '2px solid orange', letterSpacing: 3 }} className="btn btn-warning pl-0 pr-0">Quit</button>
                    </div>

                </div>
                
            </>
            );
  
}

export default BomRoutingConfig_Page;