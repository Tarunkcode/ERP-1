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

export default function RouteDetails({ blindWatch, isItemBox, setIsItemBox, itemCodeLst12, itemCodeLst23, currentRowData, getBomConsumeDetailApi, getBomProduceDetailApi, uomList, collectBOMConsDetails, collectBOMProdDetails, currentConsDetails, currentProdDetails, rawData2, rawData1, handleChange, getAltItemDetailApi, getOtherProdDetailApi, collectAltItemDetails, currentAltItemDetails, altItemRow, collectOtherProdDetails, currentOtherProdDetails, otherProdDefRow, currentRowNo, getAltItemCurrentRow, getProdItemCurrentRow, defaultAltItem, defaultOtherProduce, modifyCode, consItemDetails, prodItemDetails, lengthOfRoutingDetailsTable, afterFormatConsItem, afterFormatProdItem, ...props }: any) {
    let subtitle: any;

    let [isBomAltItem, setIsBomAltItem]: any = React.useState(false);
    let [isOtherItem, setIsOtherItem]: any = React.useState(false);
    var [isItemCost, setIsItemCost]: any = React.useState(false);
    var [altItemCurrentRowData, setAltItemCurrentRowData]: any = React.useState({})

    var [afterFormatAltData, setAfterFormatAltItem]: any = React.useState({})
    var [afterFormatOtherProdItem, setAfterFormatOtherProdItem]: any = React.useState({})

    var [prodItemCurrentRowData, setProdItemCurrentRowData]: any = React.useState({})
    var [consItemCurrentRowNo, setConsItemCurrentRowNo]: any = React.useState(null)
    var [prodItemCurrentRowNo, setProdItemCurrentRowNo]: any = React.useState(null)
    var [currOtherProd, setCurrentOtherProdState]: any = React.useState({});
    var [currAltItem, setCurrentAltItemState]: any = React.useState({});



    var [consUom, setConsUom]: any = React.useState(null)
    var [consQuantity, setConsQuantity]: any = React.useState(null)
    var [prodQuantity, setProdQuantity]: any = React.useState(null)
    var [bomPerQty, setBomPerQty]: any = React.useState(null)
    var [consCost, setConsCost]: any = React.useState(null)
    var [consRowParams, setConsRowParams]: any = React.useState(null)

    //--------------------------------- format alt item and other produce item details ------------------------------------------------------------------
    React.useEffect(() => {
        if (modifyCode && modifyCode !== 0 && isBomAltItem === true) {
            if (defaultAltItem && defaultAltItem.length > 0) {
                let currentAltItemState: any = {};

                defaultAltItem.map((item: any, ind: number) => {
                    if (item.altitem) {

                        item.altitem = { value: item.altitem, label: item.altitemname };
                        item.itemname = item.bomitemcodestr;
                        item.rate = parseFloat(item.rate)
                        item.consqty = parseFloat(item.consqty)
                        item.consuom = { value: item.consuom, label: item.consuomname  }
                        item.prodavgqty = parseFloat(item.prodavgqty)
                        item.prodavguom = { value: item.prodavguom, label: item.prodavguomname };
                        item.cost = parseFloat(item.cost)
                        let prop = item.psrno;
                        let prop2 = item.bomsrno;
                        !currentAltItemState[`Alt${prop2}${prop}`] ? currentAltItemState[`Alt${prop2}${prop}`] = [item] : currentAltItemState[`Alt${prop2}${prop}`] = [...currentAltItemState[`Alt${prop2}${prop}`], item];

                        // ek array banana h jiske andar utne obj jitne psrno h in bomDetails;
                    }


                })
                setCurrentAltItemState(currentAltItemState)

            }

        }
    }, [defaultAltItem && defaultAltItem.length, modifyCode, isBomAltItem])

    React.useEffect(() => {
        if (modifyCode && modifyCode !== 0 && isOtherItem === true ) {
            if (defaultOtherProduce && defaultOtherProduce.length > 0) {
                let currentOtherProdState: any = {};

                defaultOtherProduce.map((item: any, ind: number) => {
                    if (item.item) {

                        item.item = { label: item.itemcodestr, value: item.item };
                        item.itemname = item.itemname;

                        item.qty = parseFloat(item.qty);
                        item.uom = { label: item.uomname, value: item.uom }
                        let prop = item.psrno;
                        let prop2 = item.prodsrno;
                        !currentOtherProdState[`${prop2}${prop}`] ? currentOtherProdState[`${prop2}${prop}`] = [item] : currentOtherProdState[`${prop2}${prop}`] = [...currentOtherProdState[`${prop2}${prop}`], item];
                    }


                })
                setCurrentOtherProdState(currentOtherProdState)
            }

        }




    }, [defaultOtherProduce && defaultOtherProduce.length, modifyCode, isOtherItem])
    React.useEffect(() => {
        if (modifyCode && modifyCode !== 0 && isBomAltItem === true) {
            if (consItemCurrentRowNo && currentRowNo) {
                if (currAltItem[`Alt${consItemCurrentRowNo}${currentRowNo}`]) {
                    let newObj = { ...currAltItem }
                    let onCurrentRowAltItemDetLength = newObj[`Alt${consItemCurrentRowNo}${currentRowNo}`].length;
                    for (let j = 1; j <= 10 - onCurrentRowAltItemDetLength; j++) newObj[`Alt${consItemCurrentRowNo}${currentRowNo}`].push({ ...altItemRow[0], srno: onCurrentRowAltItemDetLength + j + 1 })
                    
                setAfterFormatAltItem(newObj);


            }
        }

        }
    }, [consItemCurrentRowNo, currentRowNo, currAltItem, modifyCode, isBomAltItem])
    React.useEffect(() => {
        if (modifyCode && modifyCode !== 0) {
        if (prodItemCurrentRowNo && currentRowNo) {
            if (currOtherProd[`${prodItemCurrentRowNo}${currentRowNo}`]) {
                let newObj = { ...currOtherProd}
                let onCurrentRowOtherProdDetLength = newObj[`${prodItemCurrentRowNo}${currentRowNo}`].length;
                for (let k = 0; k < 10 - onCurrentRowOtherProdDetLength; k++) newObj[`${prodItemCurrentRowNo}${currentRowNo}`].push({ ...otherProdDefRow[0], srno: onCurrentRowOtherProdDetLength + k + 1 })
                setAfterFormatOtherProdItem(newObj);

            }

        }

        }
    }, [prodItemCurrentRowNo, currentRowNo, currOtherProd, modifyCode, isOtherItem])







    //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    const savingConsQuantity = (e: any) => {
        let value = e.target.value;
        let consqty = parseFloat(value);
        setConsQuantity(consqty);
        consRowParams.data.consqty = parseFloat(value || '0');
    }
    const savingProdQuantity = (e: any) => {
        let value = e.target.value;
        let prodqty = parseFloat(value);
        setProdQuantity(prodqty);
        consRowParams.data.prodavgqty = parseFloat(value || '0');
    }
    const savingConsUom = (item: any, name: string) => {

        setConsUom(item);
        consRowParams.data.conuom = item || null;
        consRowParams.data.prodavguom = item || null;
    }

    React.useEffect(() => {
        if (altItemCurrentRowData.rate && consQuantity) {
            let cons_cost = parseFloat(altItemCurrentRowData.rate) * consQuantity;
            consRowParams.data.cost = cons_cost || null;
            setConsCost(cons_cost)
        }
        if (consQuantity && prodQuantity) {
            let bomQty = BOM_STORE.getState().BOMHeader[0].qty;
            let bpqty = parseFloat(bomQty ? bomQty : '1');
            let bpq = consQuantity / prodQuantity / bpqty;

            setBomPerQty(bpq);
        }
    }, [consQuantity, prodQuantity])
    // calculate cost 


    // end private functions
    const OpenAltItemPopUp = (e: any) => {
        console.log('alt item field', e.colDef.field)
        if (e.colDef.field === "altitem") {
            if (e.data.altitem.label === 'Y' && e.event.keyCode === 13) {
                let currentRowData = { ...e.data, srno: e.rowIndex + 1 };
                setAltItemCurrentRowData(currentRowData);
                let currentRow = parseInt(e.rowIndex + 1);
                getAltItemCurrentRow(currentRow, currentRowData);
                setConsItemCurrentRowNo(currentRow)

                setIsBomAltItem(true);
                setIsItemCost(false);
            }

        }
        else if (e.colDef.field === "bomitem") {
            if (e.data.bomitem && e.event.keyCode === 13) {
                console.log('event is calling', e)
                setConsRowParams(e)
                let currentRowData = { ...e.data, srno: e.rowIndex + 1 };
                setAltItemCurrentRowData(currentRowData);
                let currentRow = parseInt(e.rowIndex + 1);
                //getAltItemCurrentRow(currentRow, currentRowData);
                setConsItemCurrentRowNo(currentRow)

                setIsBomAltItem(false);
                setIsItemCost(true);

            }

        }
        else {

        }

    }


    const OpenOtherProduce = (e: any) => {

        if (e.colDef.field === "isotherprod") {
            console.log('field', e.colDef.field)
            if (e.data.isotherprod.label === 'Y' && e.event.keyCode === 13) {
                if (e.data.bomitem && e.event.keyCode === 13) {
                    let currentRowData = { ...e.data, srno: e.rowIndex + 1 }
                    setProdItemCurrentRowData(currentRowData);
                    let currentRow = parseInt(e.rowIndex + 1);
                    getProdItemCurrentRow(currentRow, currentRowData);
                    setProdItemCurrentRowNo(currentRow)

                    setIsOtherItem(true);

                }

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
    function saveRoutingData() {
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
                setConsRowParams(params)
                let arr = params.newValue.label.split('|')
                let itemcode = { label: arr[1], value: params.newValue.value }
                let itemname = arr[0]
                params.data.bomitem = itemcode;
                params.data.itemname = itemname;
                params.data.rate = parseFloat(params.newValue.rate);
                params.data.consqty = parseFloat(consQuantity || '0');
                params.data.conuom = consUom || null;
                params.data.prodavgqty = parseFloat(prodQuantity || '0');
                params.data.prodavguom = consUom || null;
                params.data.cost = parseFloat(consCost || '0');
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
        }, editable: false
    },


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
        }, editable: false
    },



    { field: 'cost', headerName: "Cost", minWidth: 200, cellEditor: NumericEditor }, {
        field: 'altitem', headerName: "Alt Item", minWidth: 200,
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

    }]




    const colDef2: any = [{ field: 'srno', headerName: "Sr. No.", minWidth: 200, valueGetter: 'node.rowIndex + 1', cellStyle: { paddingLeft: '10px' } },
    {
        field: 'bomitem', headerName: "Item Code", minWidth: 400,
        cellEditor: AutocompleteSelectCellEditor,
        cellEditorParams: {
            required: true,
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
                let itemcode = { label: arr[1], value: params.newValue.value }
                let itemname = arr[0]
                params.data.bomitem = itemcode;
                params.data.itemname = itemname;

                params.data.prodavgqty = 0.00;
                params.data.prodavguom = { label: params.newValue.uomname, value: params.newValue.uom };
                params.data.rate = parseFloat(params.newValue.rate || '0');
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
    }, { field: 'itemname', headerName: "Item Name", minWidth: 400 }, {
        field: 'prodavgqty', headerName: "Quantity", minWidth: 200, editable: true, cellEditor: NumericEditor,
        onCellValueChanged: (params: any) => {
            if (params.oldValue !== params.newValue) {

                params.data.prodavgqty = parseFloat(params.newValue || '0');


                params.data.cost = params.data.rate / parseFloat(params.newValue);


                params.api.refreshCells({ force: true });
            }
        }
    }, {
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
        }, editable: false
    }, { field: 'rate', headerName: "Rate", minWidth: 200, cellEditor: NumericEditor }, { field: 'cost', headerName: "Cost", minWidth: 200, cellEditor: NumericEditor }, {

        field: 'isotherprod', headerName: "Other Prod", minWidth: 200,
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

    }]

    return (
        <>
            {
                isBomAltItem || isOtherItem ? (<BOMModals itemList={itemCodeLst23} isBomAltItem={isBomAltItem} isOtherItem={isOtherItem} setIsOtherItem={setIsOtherItem} setIsBomAltItem={setIsBomAltItem} uomList={uomList} getAltItemDetailApi={getAltItemDetailApi} getOtherProdDetailApi={getOtherProdDetailApi} collectAltItemDetails={collectAltItemDetails} currentAltItemDetails={currentAltItemDetails} altItemRow={altItemRow} collectOtherProdDetails={collectOtherProdDetails} currentOtherProdDetails={currentOtherProdDetails} otherProdDefRow={otherProdDefRow} processDetails={currentRowData} prodItemCurrentRowData={prodItemCurrentRowData} altItemCurrentRowData={altItemCurrentRowData} blindWatch={blindWatch} consItemCurrentRowNo={consItemCurrentRowNo} prodItemCurrentRowNo={prodItemCurrentRowNo} defaultAltItem={afterFormatAltData} defaultOtherProduce={afterFormatOtherProdItem} modifyCode={modifyCode} />) : null
            }

            {
                isItemCost ? (
                    <BOMModals_layer2 isItemCostDet={isItemCost} setItemCostDet={setIsItemCost} itemCostCurrentRowData={altItemCurrentRowData} prevTableCurrentRowNo={consItemCurrentRowNo} blindWatch={blindWatch} consuom={consUom} produom={consUom} consqty={consQuantity} prodqty={prodQuantity} rate={currentRowData.amt} conscost={consCost} savingConsQuantity={savingConsQuantity} savingProdQuantity={savingProdQuantity} savingConsUom={savingConsUom} bomPerQty={bomPerQty} params={consRowParams} />

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
                                <MasterInput name="unit" label="UOM" ipTitle="Unit" ipType="text" classCategory="form-control BOMHeader inp text" defaultt={blindWatch.uomname} read={true} />
                                <MasterInput name="process" label="Process" ipTitle="Process" ipType="text" classCategory="form-control BOMHeader inp text" defaultt={currentRowData && currentRowData.process ? currentRowData.process.label : ''} read={true} />
                            </span>

                            <span className="d-flex section2 col-sm-12">
                                <MasterInput name="stage" label="Stage No." ipTitle="Stage Number" ipType="text" classCategory="form-control BOMHeader inp text" defaultt={currentRowData && currentRowData.sr ? currentRowData.sr : ''} read={true} />
                                <MasterInput name="qty" label="Quantity" ipTitle="Quantity" ipType="number" classCategory="form-control BOMHeader double inp text" defaultt={BOM_STORE.getState().BOMHeader[0].qty ? BOM_STORE.getState().BOMHeader[0].qty : 0} read={true} />
                                <MasterInput name="overheadamt" label="Overhead Amt." ipTitle="Enter OverHead Amount" ipType="number" classCategory="form-control BOMHeader inp double number" />

                            </span>

                            <span className="d-flex section2 col-sm-12">
                                <MasterInput name="routingcost" label="Rate" ipTitle="Enter Routing Cost" ipType="number" classCategory="form-control BOMHeader double inp number" handleChange={handleChange} defaultt={currentRowData && currentRowData.amt ? currentRowData.amt : 0} />
                                <span className="col-8"></span>

                            </span>




                        </div>


                        <hr />
                        {

                            currentConsDetails && currentConsDetails[currentRowNo] ? (<LoadGrid title="Consumed Item Details" titleClr="lightsteelblue" OpenSubLayer={OpenAltItemPopUp} colDef={colDef1} data={currentConsDetails && currentConsDetails[currentRowNo] ? currentConsDetails[currentRowNo] : rawData1} firstRow={rawData1} srProps="srno" collect={getBomConsumeDetailApi} chkDup="bomitem" />) : modifyCode && modifyCode !== 0 && afterFormatConsItem && afterFormatConsItem[currentRowNo] ? (<LoadGrid title="Consumed Item Details" titleClr="lightsteelblue" OpenSubLayer={OpenAltItemPopUp} colDef={colDef1}

                                data={afterFormatConsItem && afterFormatConsItem[currentRowNo] ? afterFormatConsItem[currentRowNo] : rawData1}

                                firstRow={rawData1}

                                srProps="srno" collect={getBomConsumeDetailApi} chkDup="bomitem" />) : (<WriteGrid title="Consumed Item Details" titleClr="lightsteelblue" OpenSubLayer={OpenAltItemPopUp} colDef={colDef1} data={rawData1} srProps="srno" collect={getBomConsumeDetailApi} chkDup="bomitem" />)


                        }




                        <hr />
                        {

                            currentProdDetails && currentProdDetails[currentRowNo] ? (<LoadGrid title="Produce Item Details" titleClr="lightsteelblue" OpenSubLayer={OpenOtherProduce} colDef={colDef2} data={currentProdDetails && currentProdDetails[currentRowNo] ? currentProdDetails[currentRowNo] : rawData2} firstRow={rawData2} srProps="srno" collect={getBomProduceDetailApi} chkDup="bomitem" />) : modifyCode && modifyCode !== 0 && afterFormatProdItem && afterFormatProdItem[currentRowNo] ? (<LoadGrid title="Produce Item Details" titleClr="lightsteelblue" OpenSubLayer={OpenOtherProduce} colDef={colDef2}

                                data={afterFormatProdItem && afterFormatProdItem[currentRowNo] ? afterFormatProdItem[currentRowNo] : rawData2}

                                firstRow={rawData2}

                                srProps="srno" collect={getBomProduceDetailApi} chkDup="bomitem" />) : (<WriteGrid title="Produce Item Details" titleClr="lightsteelblue" OpenSubLayer={OpenOtherProduce} colDef={colDef2} data={rawData2} srProps="srno" collect={getBomProduceDetailApi} chkDup="bomitem" />)


                        }





                        <hr style={{ margin: '0', padding: '0' }} />

                        <button type="button" style={{ border: '2px solid #42ba96', letterSpacing: 3 }} className="btn btn-success p-2 m-3 col-1" onClick={saveRoutingData}>Save</button>
                        <button type="button" style={{ border: '2px solid red', letterSpacing: 3 }} className="btn btn-danger p-2 m-3 col-1" onClick={closeItemBox}>Quit</button>

                    </div>


                </div>
            </Modal>
        </>
    )

}