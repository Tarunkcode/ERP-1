
import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, Prompt, useHistory } from 'react-router-dom';
import { InputList } from '../../../components/custom-input/custom-input.component';
import CustomeSwitch from '../../../components/CustomSwitch/custom-switch.component';

import BOMModals from '../../../components/Modals/BomModals';
import { AddRow, DeleteRow, getCurrentRowNo } from '../../Helper Functions/table';

import RouteDetails from './RouteDetails.component';
/*import DataGrid from '../../../components/GRID_COMPONENT/Grid.index';*/
/*import { OLYMPIC_SPORTS, OLYMPIC_COUNTRIES } from "../../../components/GRID_COMPONENT/ApiData/list";*/
import { TextField, Autocomplete } from '@mui/material'

import { AutocompleteSelectCellEditor } from 'ag-grid-autocomplete-editor';
import 'ag-grid-autocomplete-editor/dist/main.css';
import WriteGrid from '../../../components/Grid Component/grid.component';
import DatalistInput from 'react-datalist-input';
import 'react-datalist-input/dist/styles.css';

function BomRoutingConfig_Page({ options,process, ...otherProps }: any) {
 let [isCopy, setIsCopy] : any = useState(false)
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
                selectData: React.useMemo(() => {return process }, [process]),
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


    const items = React.useMemo(
        () =>
            options.map((option : any) => ({
              
                id: option.code,
                value: option.name,
               
            })),
        [options],
    );
   
    return (
            <>
          
                <BOMModals isCopy={isCopy} isBOMAlt={false} isBOMProcess={false} isBOMRouting={false} setIsCopy={setIsCopy} />
                {
                    isItemBox ? (

                <RouteDetails isItemBox={isItemBox} setIsItemBox={setIsItemBox} />
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
                                            <label htmlFor="series" style={{ fontSize: '1rem', marginRight:'35px' }} className="form-label labl labl2 col-3">Series</label>
                                        </>
                                        <span className="m-0 p-0" style={{width:'100%'}}>
                                            <DatalistInput
                                              
                                                className="d-flex col-12 m-0 p-0"
                                                inputProps={{ className: 'form-control inp col-12' }}
                                                listboxProps={{ className: 'text-left mt-5' }}
                                              
                                                onSelect={(item : any) => console.log(item.value)}
                                                items={items}
                                            />
                                       </span>
                                    </span>
                                        <>
                                        <label htmlFor="RCode" style={{ fontSize: '1rem' }} className="form-label labl labl2">Routing Code</label>
                                        <input type="text" name="RCode" className="form-control inp" />
                                       </>
 
                                       <>
                                        <label htmlFor="RName" style={{ fontSize: '1rem' }} className="form-label labl labl2">Routing Name</label>
                                        <input type="text" name="RName" className="form-control inp" />
                                       </>
                                  
                                    
                                    </span>
                             
                                    <span className="d-flex section2 col-sm-12">
                                        <>
                                      
                                            <label htmlFor="series" style={{ fontSize: '1rem' }} className="form-label labl labl2">Item Code</label>
                                            <input type="text" name="custCode" className="form-control inp" onKeyUp={OpenPrompt } />
                                        </>
                                        <>
                                            <label htmlFor="series" style={{ fontSize: '1rem' }} className="form-label labl labl2">Item Name</label>
                                            <input type="text" name="custCode" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="majProd" style={{ fontSize: '1rem' }} className="form-label labl labl2">UOM</label>
                                            <input type="text" name="payTerm" className="form-control inp" />
                                        </>
                                    </span>

                                    <span className="d-flex section2 col-sm-12">
                                        <>
                                            <label htmlFor="series" style={{ fontSize: '1rem' }} className="form-label labl labl2">Produce Qty</label>
                                            <input type="text" name="custName" className="form-control inp" />
                                        </>
                                       
                                       
                                        <>
                                            <label htmlFor="majProd" style={{ fontSize: '1rem' }} className="form-label labl labl2">Valid From</label>
                                            <input type="date" name="payTerm" className="form-control inp" />
                                        </>
                                        <span className="col-4">
                                            <CustomeSwitch lablClass="custom-control-label col-10 m-0 ml-4" label="Freeze" id="freeze" name="freeze" classCat="form-control custom-control-input col-3" handleChange={() => { }} />
                                        </span>
                                    </span>

                                 

                                 
                                </div>
                            </fieldset>
                        </form>
                   
                     
                        <hr style={{ margin: '0', padding: '0' }} />
              
                        <WriteGrid title="Routing Details" titleClr="blue" OpenSubLayer={OpenBOMItemCons} colDef={ColDef} data={data }/>
                    {/*    <GridA title="Routing Details" titleClr="blue" colDef={route_det}/>*/}
                        {/*<DataGrid title="Routing Details" titleClr="blue" colDef={route_det}/>*/}
                        {/*<WriteTable*/}
                        {/*    HandleIpSelect={() => { }}*/}
                        {/*    firstCol="Stage"*/}
                        {/*    getCurrentRowNo={getCurrentRowNo}*/}
                        {/*    addRowFunc={AddRow}*/}
                        {/*    tableProps={route_det}*/}
                        {/*    setRowFunc={setRouteDet}*/}
                        {/*    deleteRowFunc={DeleteRow}*/}
                        {/*    columns={[{ field: 'pro', header: "Process" },{ field: 'ut', header: "Unit" }, { field: 'amt', header: "Amount" }, { field: 'setTime', header: "Set Up Time" }, , { field: 'cycTime', header: "Cyclic Time" }, { field: 'manPow', header: "Man Power" }, { field: 'isFinal', header: "Is Final" }, { field: 'elecUt', header: "Electricity Unit" }, { field: 'totOvrHd', header: "Total OverHead" }, { field: 'jw', header: "Job Worker" }, { field: 'mcDep', header: "Machine Dep." }]}*/}
                        {/*    dataArr={RouteDet}*/}
                        {/*    title="Routing Details"*/}
                        {/*/>*/}
                     
                        {/*<div style={{ margin: '0 auto' }} className="col-12 card-footer">*/}
                        {/*    <textarea rows={5} className="col-7 form-control active" placeholder="Enter Item Description..." />*/}
                        {/*</div>*/}
                        {/*<div className="row card-footer col-12 " style={{ margin: '1em 0%'}}>*/}
                        {/*    <span className="d-flex align-items-center m-0 p-0">*/}
                        {/*        <>*/}
                        {/*            <label htmlFor="1payDate" style={{ fontSize: '1rem', width: '100%', marginLeft: '2em' }} className="form-label">Created By</label>*/}
                        {/*            <input className="form-control" name="1payDate" type="text" title="Created By" />*/}


                        {/*        </>*/}

                        {/*        <>*/}
                        {/*            <label htmlFor="daysFreq" style={{ fontSize: '1rem', width: '100%', marginLeft: '2em' }} className="form-label ">Created On</label>*/}
                        {/*            <input type="date" name="daysFreq" className="form-control" title="Created On" />*/}

                        {/*        </>*/}
                        {/*        <>*/}
                        {/*            <label htmlFor="daysFreq" style={{ fontSize: '1rem', width: '100%', marginLeft: '2em' }} className="form-label ">Modify By</label>*/}
                        {/*            <input type="text" name="daysFreq" className="form-control" title="Created On" />*/}

                        {/*        </>*/}

                        {/*        <>*/}
                        {/*            <label htmlFor="daysFreq" style={{ fontSize: '1rem', width: '100%', marginLeft: '2em' }} className="form-label ">Modify On</label>*/}
                        {/*            <input type="text" name="daysFreq" className="form-control" title="Created On" />*/}

                        {/*        </>*/}



                        {/*    </span>*/}
                        {/*</div>*/}
                        {/*<div className="row card-footer col-12 m-0">*/}
                        {/*    <span className="d-flex col-12 align-items-center m-0 p-0">*/}
                               
                        {/*            <label htmlFor="1payDate" style={{ fontSize: '1rem', margin: 'auto 2em' }} className="form-label">Approval Details</label>*/}
                        {/*            <input className="form-control col-5" name="1payDate" type="text" title="Approval Details" />*/}

                        {/*    </span>*/}
                        {/*</div>*/}
                       
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
                        <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} className="btn btn-success mr-2 ml-2 pl-0 pr-0 ">Save & Submit</button>
                        <button type="button" style={{ border: '2px solid orange', letterSpacing: 3 }} className="btn btn-warning pl-0 pr-0">Quit</button>
                    </div>

                </div>
                
            </>
            );
  
}

export default BomRoutingConfig_Page;