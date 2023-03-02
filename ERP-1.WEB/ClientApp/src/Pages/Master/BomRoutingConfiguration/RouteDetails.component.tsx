import * as React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { WriteTable } from '../../../components/CustomTable/CustomTable.component';
import BOMModals from '../../../components/Modals/BomModals';
import { AddRow, DeleteRow, getCurrentRowNo } from '../../Helper Functions/table';
import Modal from 'react-modal';
import WriteGrid from '../../../components/Grid Component/grid.component';
import { AutocompleteSelectCellEditor } from 'ag-grid-autocomplete-editor';
import { MasterInput } from '../../../components/custom-input/custom-input.component';

const customStyles : any = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        maxHeight: '100vh',
        minHeight: '100vh',
        overflowX: 'hidden',
        overflowY : 'auto'
    },
};

export default function RouteDetails({ isItemBox, setIsItemBox, itemCodeLst, handleProduce, handleConsume, ...props }: any) {
    let subtitle: any;
  
    let [isBomAltItem, setIsBomAltItem]: any = React.useState(false);
    let [isOtherItem, setIsOtherItem]: any = React.useState(false);


    const OpenAltItemPopUp = (e: any) => {
        if (e.data.altItm.value) {
        if (e.event.keyCode === 13 || e.event.key === 'Enter') {
            setIsBomAltItem(true);
        }

        }
       
    }


    const OpenOtherProduce = (e: any) => {
        if (e.data.OPI.value) {

        if (e.event.keyCode === 13 || e.event.key === 'Enter') {
            setIsOtherItem(true);
          
        }
        }
      
    }

  
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeItemBox() {
        setIsItemBox(false);
    }
    
    const colDef1: any[] = [{ field: 'srno', headerName: "Sr. No.", minWidth: 80, valueGetter: 'node.rowIndex + 1', cellStyle: { paddingLeft: '10px' } }, {
        field: 'itC', headerName: "Item Code", minWidth: 200,
        cellEditor: AutocompleteSelectCellEditor,
        cellEditorParams: {

            selectData: itemCodeLst,
            placeholder: 'Select an option',
        },
        valueFormatter: (params: any) => {
            if (params.value) {
                return params.value.label || params.value.value || params.value;
            }
            return "";
        },
        editable: true
    }, {
        field: 'itN', headerName: "Item Name", minWidth: 400, valueGetter: (params: any) => { return params.data.itC },
        valueFormatter: (params: any) => {
            if (params.value) {
                return params.value.label || params.value.value || params.value;
            }
            return "";
        }
        }, { field: 'rt', headerName: "Rate", minWidth: 200 }, { field: 'consQty', headerName: "Consume Qty.", minWidth: 200 }, , { field: 'uom4cons', headerName: "UOM", minWidth: 200 }, { field: 'prdcQty', headerName: "Produce Quantity", minWidth: 200 }, { field: 'uom4prdc', headerName: "UOM", minWidth: 200 }, { field: 'cst', headerName: "Cost", minWidth: 200 }, {
        field: 'altItm', headerName: "Alt Item", minWidth: 200,
        cellEditor: AutocompleteSelectCellEditor,
        cellEditorParams: {

            selectData: [
                { label: 'Y', value: '1'},
                { label: 'N', value: '2'}
            ],
            placeholder: 'Select an option',
        },
        valueFormatter: (params: any) => {
            if (params.value) {
                return params.value.label || params.value.value || params.value;
            }
            return "";
        },
        editable: true

    }]

    let rawData1: any[] = [{ itC: null, itN: null, rt: null, consQty: null, uom4cons: null, prdcQty: null, uom4prdc: null, cst: null, altItm: null}]


    const colDef2: any = [{ field: 'srno', headerName: "Sr. No.", minWidth: 80, valueGetter: 'node.rowIndex + 1', cellStyle: { paddingLeft: '10px' } },{ field: 'itC', headerName: "Item Code", minWidth: 200 }, { field: 'itmName', headerName: "Item Name", minWidth: 400 }, { field: 'qty', headerName: "Quantity", minWidth: 200 }, { field: 'uom', headerName: "UOM", minWidth: 200 }, , { field: 'rat', headerName: "Rate", minWidth: 200 }, { field: 'cst', headerName: "Cost", minWidth: 200 }, {
        
            field: 'OPI', headerName: "Other Prod", minWidth: 200,
            cellEditor: AutocompleteSelectCellEditor,
            cellEditorParams: {

                selectData: [
                    { label: 'Y', value: '1' },
                    { label: 'N', value: '2' }
                ],
                placeholder: 'Select an option',
            },
            valueFormatter: (params: any) => {
                if (params.value) {
                    return params.value.label || params.value.value || params.value;
                }
                return "";
            },
            editable: true
    }]
    let rawData2: any[] = [{ itC: null, itmName: null, qty: null, uom: null, rat: null, cst: null, OPI: null}]
    return (
        <>
            {
                isBomAltItem ? (<BOMModals isCopy={false} isBomAltItem={isBomAltItem} isOtherItem={isOtherItem} setIsOtherItem={setIsOtherItem} setIsBomAltItem={setIsBomAltItem} />) : null
            }
            {
                isOtherItem ? (<BOMModals isCopy={false} isBomAltItem={isBomAltItem} isOtherItem={isOtherItem} setIsOtherItem={setIsOtherItem} setIsBomAltItem={setIsBomAltItem} />) : null
            }
                <Modal
            isOpen={isItemBox}
            onAfterOpen={afterOpenModal}
                onRequestClose={closeItemBox}
                style={customStyles}
            contentLabel="Example Modal"
        >
     <>
                    <span className="row row-content d-flex section2 col-sm-12">
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>BOM Process Item Details </h2>
                        <svg className="m-0 ml-1 p-0" type="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={closeItemBox} style={{ width: '20px', cursor: 'pointer' }}><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z" /></svg>
                    </span>
                    <hr />
                    <div style={{width:'90%',padding:'38px', border:'1px solid gray'}}>
                            <div className="collapse show" id="genDetails">
                                <span className="d-flex section2 col-sm-12">
                                <MasterInput name="name" label="Item Name" ipTitle="Routing Name" ipType="text" classCategory="form-control BOMHeader inp text" />
                                <MasterInput name="unit" label="UOM" ipTitle="Unit" ipType="text" classCategory="form-control BOMHeader inp text"/>
                                <MasterInput name="process" label="Process" ipTitle="Process" ipType="text" classCategory="form-control BOMHeader inp text"  />
                                </span>

                                <span className="d-flex section2 col-sm-12">
                                <MasterInput name="stage" label="Stage No." ipTitle="Satege Number" ipType="text" classCategory="form-control BOMHeader inp text"  />
                                <MasterInput name="qty" label="Quantity" ipTitle="Quantity" ipType="text" classCategory="form-control BOMHeader inp text"  />
                                <MasterInput name="overheadamt" label="Overhead Amt." ipTitle="Enter OverHead Amount" ipType="text" classCategory="form-control BOMHeader inp number" handleChange={() => { }} />
                                   
                                </span>

                                <span className="d-flex section2 col-sm-12">
                                <MasterInput name="routingcost" label="Rate" ipTitle="Enter Routing Cost" ipType="text" classCategory="form-control BOMHeader inp number" handleChange={() => { }}  />
                                  <span className="col-8"></span>

                                </span>

                                
                          

                            </div>
                       

                            <hr />
                            <WriteGrid title="Consumed Item Details" titleClr="lightsteelblue" OpenSubLayer={OpenAltItemPopUp} colDef={colDef1} data={rawData1}/>

                   

                            <hr/>
                            <WriteGrid title="Produce Item Details" titleClr="lightsteelblue" OpenSubLayer={OpenOtherProduce} colDef={colDef2} data={rawData2} />


             
             
                    <hr style={{ margin: '0', padding: '0' }} />
              
                    <button type="button" style={{ border: '2px solid #42ba96', letterSpacing: 3 }} className="btn btn-success p-2 m-3 col-1">Save</button>
                <><NavLink to="/add-bom-routing-configuration-master" ><button type="button" style={{ border: '2px solid red', letterSpacing: 3 }} className="btn btn-danger p-2 m-3 col-1">Quit</button></NavLink></>

                    </div>
                  
               
            </>
            </Modal>
           </>
        )
    
}