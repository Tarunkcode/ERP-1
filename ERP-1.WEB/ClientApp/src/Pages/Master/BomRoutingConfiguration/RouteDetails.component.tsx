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
import { BOM_STORE } from '../../../Redux/BOM/bom.reducer';
import { NumericEditor } from '../../../components/Grid Component/EnterOnlyNumbers';
import LoadGrid from '../../../components/Grid Component/load-grid.component';

const customStyles: object = {

        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        maxHeight: '100vh',
        minHeight: '100vh',

};

export default function RouteDetails({ blindWatch, isItemBox, setIsItemBox, itemCodeLst12, itemCodeLst23, defaultObj, currentRowData, getBomConsumeDetailApi, getBomProduceDetailApi, uomList, collectBOMConsDetails, collectBOMProdDetails, currentConsDetails, currentProdDetails, rawData2, rawData1, handleChange, getAltItemDetailApi, getOtherProdDetailApi, ...props }: any) {
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
        collectBOMConsDetails();
        collectBOMProdDetails();
        setIsItemBox(false);
    }

    const colDef1: any[] = [{ field: 'srno', headerName: "Sr. No.", minWidth: 200, valueGetter: 'node.rowIndex + 1', cellStyle: { paddingLeft: '10px' } }, {
        field: 'bomitem', headerName: "Item Code", minWidth: 400,
        cellEditor: AutocompleteSelectCellEditor,
        cellEditorParams: {
            required: true,
            selectData: React.useMemo(() => { return itemCodeLst23 }, [itemCodeLst23]),
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
        onCellValueChanged: (params: any) => {
            if (params.oldValue !== params.newValue) {
                let arr = params.newValue.label.split('|')
                let itemcode = arr[1] 
                let itemname = arr[0] 
                params.data.bomitem = itemcode;
                params.data.itemname = itemname;
                params.data.rate = 0.00;
                params.data.consqty = 0.00;
                params.data.conuom = null;
                params.data.prodavgqty = 0.00;
                params.data.prodavguom = null;
                params.data.cost = 0.00;
                params.data.job = { label: 'N', value: 0 };
                params.data.altitem = { label: 'N', value: 0 };

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
    }, {
        field: 'itemname', headerName: "Item Name", minWidth: 400,
        valueFormatter: (params: any) => {
            if (params.value) {
                return params.value.label || params.value.value || params.value;
            }
            return params.label;
        }
        }, { field: 'rate', headerName: "Rate", minWidth: 200, cellEditor: NumericEditor }, { field: 'consqty', headerName: "Consume Qty.", minWidth: 200, cellEditor: NumericEditor },


        {
            field: 'conuom', headerName: "UOM", minWidth: 200, cellEditor: AutocompleteSelectCellEditor,
            cellEditorParams: {
                required: true,
                selectData: React.useMemo(() => {return uomList }, [uomList]),
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
            }, editable: true },


        { field: 'prodavgqty', headerName: "Produce Quantity", minWidth: 200, cellEditor: NumericEditor },
        {
            field: 'prodavguom', headerName: "UOM", minWidth: 200, cellEditor: AutocompleteSelectCellEditor,
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
                placeholder: 'Select an option',
            },
            valueFormatter: (params: any) => {
                if (params.value) {
                    return params.value.label || params.value.value || params.value;
                }
                return params.label;
            }, editable: true },



        { field: 'cost', headerName: "Cost", minWidth: 200, cellEditor: NumericEditor }, {
        field: 'altitem', headerName: "Alt Item", minWidth: 200,
        cellEditor: AutocompleteSelectCellEditor,
        cellEditorParams: {
            required: true,
            selectData: [{ label: 'Y', value: '1' }, { label: 'N', value: '2' }],
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

    }]

  


    const colDef2: any = [{ field: 'srno', headerName: "Sr. No.", minWidth: 200, valueGetter: 'node.rowIndex + 1', cellStyle: { paddingLeft: '10px' } }, {
        field: 'bomitem', headerName: "Item Code", minWidth: 400,
        cellEditor: AutocompleteSelectCellEditor,
        cellEditorParams: {
            required:true,
            selectData: React.useMemo(() => { return itemCodeLst12 }, [itemCodeLst12]),
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
        onCellValueChanged: (params: any) => {
            if (params.oldValue !== params.newValue) {
                let arr = params.newValue.label.split('|')
                let itemcode = arr[1]
                let itemname = arr[0]
                params.data.bomitem = itemcode;
                params.data.itemname = itemname;
           
                params.data.prodavgqty = 0.00;
                params.data.prodavguom = null;
                params.data.rate = 0.00;
                params.data.cost = 0.00;
                params.data.isotherprod = { label: 'N', value: 0 };

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
    }, { field: 'itemname', headerName: "Item Name", minWidth: 400 }, { field: 'prodavgqty', headerName: "Quantity", minWidth: 200, editable: true, cellEditor: NumericEditor }, {
        field: 'prodavguom', headerName: "UOM", minWidth: 200, cellEditor: AutocompleteSelectCellEditor,
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
                placeholder: 'Select an option',
            },
            valueFormatter: (params: any) => {
                if (params.value) {
                    return params.value.label || params.value.value || params.value;
                }
                return params.label;
        }, editable: true }, , { field: 'rate', headerName: "Rate", minWidth: 200, cellEditor: NumericEditor }, { field: 'cost', headerName: "Cost", minWidth: 200, cellEditor: NumericEditor}, {

        field: 'isotherprod', headerName: "Other Prod", minWidth: 200,
        cellEditor: AutocompleteSelectCellEditor,
        cellEditorParams: {

            selectData: [
                { label: 'Y', value: '1' },
                { label: 'N', value: '2' }
            ],
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
    }]

    return (
        <>
            {
                isBomAltItem || isOtherItem ? (<BOMModals itemList={itemCodeLst23} isBomAltItem={isBomAltItem} isOtherItem={isOtherItem} setIsOtherItem={setIsOtherItem} setIsBomAltItem={setIsBomAltItem} defaultObj={defaultObj} uomList={uomList} getAltItemDetailApi={getAltItemDetailApi} getOtherProdDetailApi={getOtherProdDetailApi} />) : null
            }
            
            {
                isItemCost ? (
                    <BOMModals_layer2 isItemCostDet={isItemCost} setItemCostDet={setIsItemCost} handleChange={() => { }} defaultObj={defaultObj}/>

                ) : null
            }
            <Modal
                isOpen={isItemBox}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeItemBox}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="card" id="routing-process">
                    <span className="row row-content d-flex section2 col-sm-12">
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>BOM Process Item Details </h2>
                        <svg className="m-0 ml-1 p-0" type="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={closeItemBox} style={{ width: '20px', cursor: 'pointer' }}><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z" /></svg>
                    </span>
                    <hr />
                    <div style={{ width: '90%', padding: '10px', border: '1px solid gray' }}>
                        <div className="collapse show" id="genDetails">
                            <span className="d-flex section2 col-sm-12">
                                <MasterInput name="name" label="Item Name" ipTitle="Routing Name" ipType="text" classCategory="form-control BOMHeader inp text" read={true} defaultt={blindWatch.itemname} />
                                <MasterInput name="unit" label="UOM" ipTitle="Unit" ipType="text" classCategory="form-control BOMHeader inp text" defaultt={blindWatch.uomname} read={true}  />
                                <MasterInput name="process" label="Process" ipTitle="Process" ipType="text" classCategory="form-control BOMHeader inp text" defaultt={currentRowData.process ? currentRowData.process.label : ''} read={ true} />
                            </span>

                            <span className="d-flex section2 col-sm-12">
                                <MasterInput name="stage" label="Stage No." ipTitle="Satege Number" ipType="text" classCategory="form-control BOMHeader inp text" defaultt={currentRowData.process ? currentRowData.sr : ''} read={true}/>
                                <MasterInput name="qty" label="Quantity" ipTitle="Quantity" ipType="number" classCategory="form-control BOMHeader double inp text" handleChange={handleChange}/>
                                <MasterInput name="overheadamt" label="Overhead Amt." ipTitle="Enter OverHead Amount" ipType="number" classCategory="form-control BOMHeader inp double number" handleChange={handleChange} />

                            </span>

                            <span className="d-flex section2 col-sm-12">
                                <MasterInput name="routingcost" label="Rate" ipTitle="Enter Routing Cost" ipType="number" classCategory="form-control BOMHeader double inp number"  handleChange={handleChange}/>
                                <span className="col-8"></span>

                            </span>




                        </div>


                        <hr />
                        {
                            currentConsDetails && currentConsDetails.length > 0 ? (<LoadGrid title="Consumed Item Details" titleClr="lightsteelblue" OpenSubLayer={OpenAltItemPopUp} colDef={colDef1} data={currentConsDetails && currentConsDetails.length > 0 ? currentConsDetails : rawData1} firstRow={rawData1} srProps="srno" collect={getBomConsumeDetailApi} />) : (<WriteGrid title="Consumed Item Details" titleClr="lightsteelblue" OpenSubLayer={OpenAltItemPopUp} colDef={colDef1} data={currentConsDetails && currentConsDetails.length > 0 ? currentConsDetails : rawData1} srProps="srno" collect={getBomConsumeDetailApi} />)
                        }
                        



                        <hr />
                        {
                            currentProdDetails && currentProdDetails.length > 0 ? (<LoadGrid title="Produce Item Details" titleClr="lightsteelblue" OpenSubLayer={OpenOtherProduce} colDef={colDef2} data={currentProdDetails && currentProdDetails.length > 0 ? currentProdDetails : rawData2} firstRow={rawData2} srProps="srno" collect={getBomProduceDetailApi} />) : (<WriteGrid title="Produce Item Details" titleClr="lightsteelblue" OpenSubLayer={OpenOtherProduce} colDef={colDef2} data={currentProdDetails && currentProdDetails.length > 0 ? currentProdDetails : rawData2} srProps="srno" collect={getBomProduceDetailApi} />)
                        }
                        




                        <hr style={{ margin: '0', padding: '0' }} />

                        <button type="button" style={{ border: '2px solid #42ba96', letterSpacing: 3 }} className="btn btn-success p-2 m-3 col-1">Save</button>
                        <button type="button" style={{ border: '2px solid red', letterSpacing: 3 }} className="btn btn-danger p-2 m-3 col-1" onClick={closeItemBox }>Quit</button>

                    </div>


                </div>
            </Modal>
        </>
    )

}