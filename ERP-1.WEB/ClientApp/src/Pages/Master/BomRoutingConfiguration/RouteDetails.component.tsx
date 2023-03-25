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
import BOMModals_layer2 from '../../../components/Modals/BOM_Modals(II layer)';

const customStyles: any = {
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
        overflowY: 'auto'
    },
};

export default function RouteDetails({ isItemBox, setIsItemBox, itemCodeLst12, itemCodeLst23, handleProduce, handleConsume, ...props }: any) {
    let subtitle: any;

    let [isBomAltItem, setIsBomAltItem]: any = React.useState(false);
    let [isOtherItem, setIsOtherItem]: any = React.useState(false);
    var [isItemCost, setIsItemCost]: any = React.useState(false);


    const OpenAltItemPopUp = (e: any) => {
        
        if (e.colDef.field === "altitem") {
            if (e.data.altitem.label === 'Y' && e.event.keyCode === 13) {
                setIsBomAltItem(true);
                setIsItemCost(false);
            }

        }
        else if (e.colDef.field === "bomitem") {
            if (e.data.bomitem && e.event.keyCode === 13) {
                setIsBomAltItem(false);
                setIsItemCost(true);

            }

        }

    }


    const OpenOtherProduce = (e: any) => {
        if (e.colDef.field === "isotherprod") {

            if (e.data.isotherprod.label === 'Y' && e.event.keyCode === 13) {
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
        field: 'bomitem', headerName: "Item Code", minWidth: 200,
        cellEditor: AutocompleteSelectCellEditor,
        cellEditorParams: {
            required: true,
            selectData: React.useMemo(() => {return itemCodeLst23 }, [itemCodeLst23] ),
            placeholder: 'Select an option',
        },
        valueFormatter: (params: any) => {
            if (params.value) {
                return params.value.label || params.value.value || params.value;
            }
            return params.label;
        },
        editable: true
    }, {
        field: 'itemname', headerName: "Item Name", minWidth: 400, valueGetter: (params: any) => { return params.data.itC },
        valueFormatter: (params: any) => {
            if (params.value) {
                return params.value.label || params.value.value || params.value;
            }
            return params.label;
        }
    }, { field: 'rate', headerName: "Rate", minWidth: 200 }, { field: 'consqty', headerName: "Consume Qty.", minWidth: 200 }, , { field: 'conuom', headerName: "UOM", minWidth: 200 }, { field: 'prodavgqty', headerName: "Produce Quantity", minWidth: 200 }, { field: 'prodavguom', headerName: "UOM", minWidth: 200 }, { field: 'cost', headerName: "Cost", minWidth: 200 }, {
        field: 'altitem', headerName: "Alt Item", minWidth: 200,
        cellEditor: AutocompleteSelectCellEditor,
        cellEditorParams: {
            required: true,
            selectData: [{ label: 'Y', value: '1' }, { label: 'N', value: '2'}],
            placeholder: 'Select an option',
        },
        valueFormatter: (params: any) => {
            if (params.value) {
                return params.value.label || params.value.value || params.value;
            }
            return params.label;
        },
        editable: true

    }]

    let rawData1: any[] = [{ bomitem: null,itemname:null,  rate: null, consqty: null, conuom: null, prodavgqty: null, prodavguom: null, cost: null, altitem: null }]


    const colDef2: any = [{ field: 'srno', headerName: "Sr. No.", minWidth: 80, valueGetter: 'node.rowIndex + 1', cellStyle: { paddingLeft: '10px' } }, {
        field: 'bomitem', headerName: "Item Code", minWidth: 200,
        cellEditor: AutocompleteSelectCellEditor,
        cellEditorParams: {
            required:true,
            selectData: React.useMemo(() => {return itemCodeLst12 }, [itemCodeLst12]),
            placeholder: 'Select an option',
        },
        valueFormatter: (params: any) => {
            if (params.value) {
                return params.value.label || params.value.value || params.value;
            }
            return params.label;
        },
        editable: true
    }, { field: 'itemname', headerName: "Item Name", minWidth: 400 }, { field: 'prodavgqty', headerName: "Quantity", minWidth: 200, editable:true }, { field: 'prodavguom', headerName: "UOM", minWidth: 200 }, , { field: 'rate', headerName: "Rate", minWidth: 200 }, { field: 'cost', headerName: "Cost", minWidth: 200 }, {

        field: 'isotherprod', headerName: "Other Prod", minWidth: 200,
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
            return params.label;
        },
        editable: true
    }]
    let rawData2: any[] = [{ bomitem: null, itemname:null, prodavgqty: null, prodavguom: null, rate: null, cost: null, isotherprod: null }]
    return (
        <>
            {
                isBomAltItem ? (<BOMModals itemList={itemCodeLst23} isCopy={false} isBomAltItem={isBomAltItem} isOtherItem={isOtherItem} setIsOtherItem={setIsOtherItem} setIsBomAltItem={setIsBomAltItem} />) : null
            }
            {
                isOtherItem ? (<BOMModals itemList={itemCodeLst23} isCopy={false} isBomAltItem={isBomAltItem} isOtherItem={isOtherItem} setIsOtherItem={setIsOtherItem} setIsBomAltItem={setIsBomAltItem} />) : null
            }
            {
                isItemCost ? (
                    <BOMModals_layer2 isItemCostDet={isItemCost} setItemCostDet={setIsItemCost} handleChange={handleConsume} />

                ) : null
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
                    <div style={{ width: '90%', padding: '38px', border: '1px solid gray' }}>
                        <div className="collapse show" id="genDetails">
                            <span className="d-flex section2 col-sm-12">
                                <MasterInput name="name" label="Item Name" ipTitle="Routing Name" ipType="text" classCategory="form-control BOMHeader inp text" />
                                <MasterInput name="unit" label="UOM" ipTitle="Unit" ipType="text" classCategory="form-control BOMHeader inp text" />
                                <MasterInput name="process" label="Process" ipTitle="Process" ipType="text" classCategory="form-control BOMHeader inp text" />
                            </span>

                            <span className="d-flex section2 col-sm-12">
                                <MasterInput name="stage" label="Stage No." ipTitle="Satege Number" ipType="text" classCategory="form-control BOMHeader inp text" />
                                <MasterInput name="qty" label="Quantity" ipTitle="Quantity" ipType="text" classCategory="form-control BOMHeader inp text" />
                                <MasterInput name="overheadamt" label="Overhead Amt." ipTitle="Enter OverHead Amount" ipType="text" classCategory="form-control BOMHeader inp number" handleChange={() => { }} />

                            </span>

                            <span className="d-flex section2 col-sm-12">
                                <MasterInput name="routingcost" label="Rate" ipTitle="Enter Routing Cost" ipType="text" classCategory="form-control BOMHeader inp number" handleChange={() => { }} />
                                <span className="col-8"></span>

                            </span>




                        </div>


                        <hr />
                        <WriteGrid title="Consumed Item Details" titleClr="lightsteelblue" OpenSubLayer={OpenAltItemPopUp} colDef={colDef1} data={rawData1} />



                        <hr />
                        <WriteGrid title="Produce Item Details" titleClr="lightsteelblue" OpenSubLayer={OpenOtherProduce} colDef={colDef2} data={rawData2} />




                        <hr style={{ margin: '0', padding: '0' }} />

                        <button type="button" style={{ border: '2px solid #42ba96', letterSpacing: 3 }} className="btn btn-success p-2 m-3 col-1">Save</button>
                        <button type="button" style={{ border: '2px solid red', letterSpacing: 3 }} className="btn btn-danger p-2 m-3 col-1" onClick={closeItemBox }>Quit</button>

                    </div>


                </>
            </Modal>
        </>
    )

}