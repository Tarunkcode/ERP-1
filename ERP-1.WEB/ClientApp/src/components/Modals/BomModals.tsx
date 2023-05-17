import * as React from 'react';

import BOMModals_layer2 from '../Modals/BOM_Modals(II layer)';
import Modal from 'react-modal';
import WriteGrid from '../Grid Component/grid.component';
import AutocompleteSelectCellEditor from 'ag-grid-autocomplete-editor';
import LoadGrid from '../Grid Component/load-grid.component';
import { BOM_STORE } from '../../Redux/BOM/bom.reducer';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { LoaderContext } from '../../AppContext/loaderContext';
import useFetch from '../Hooks/useFetch';
import { NumericEditor } from '../Grid Component/EnterOnlyNumbers';
import CheckBoxEditor from '../Grid Component/checkboxEditor';

const customStyles: object = {

    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '87.5%'

};
const customStyles2: object = {

    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '60%'

};



export default function BOMModals({ itemList, isCopy, isOperation, isOverHead, isBomAltItem, isOtherItem, itemCostDet, setIsCopy, setItemCostDet, setIsOtherItem, setIsBomAltItem, handleAlt, handleOther, handleConsume, handleOperation, handleOverhead, uomList, getOperationDetApi, getAltItemDetailApi, getOtherProdDetailApi, collectAltItemDetails, currentAltItemDetails, altItemRow, collectOperationDetails, currentOperationDetails, oprDefRow, collectOtherProdDetails, currentOtherProdDetails, otherProdDefRow, processDetails, altItemCurrentRowData, prodItemCurrentRowData, blindWatch, consItemCurrentRowNo, prodItemCurrentRowNo, currentOverheadDetails, getOverheadDetApi, overheadDefRow, collectOverheadDetails,...props }: any) {

    let [uomload, setUomload]: any = React.useState([]);
   
    let subtitle: any;
    React.useEffect(() => { console.log('Hey! i am item code list in bom modals', itemList, altItemRow) }, [itemList, altItemRow])
    React.useEffect(() => { console.log('Hey! i am item code list in bom modals', uomList) }, [uomList])
    let [overheadLoad, setOverheadLoad]: any = React.useState([])
    let [operationLoad, setOperationLoad]: any[] = React.useState([])
    const api = useFetch();
    const { setLoader } = React.useContext(LoaderContext);
    const fetchDefProcessMaster = async (code: any) => {

        let urlStr = `/api/LoadProcessMaster?Code=${code}&Company=${60}&Customer=${68}`
        setLoader(true);
        try {
            let { res, got } = await api(urlStr, "GET", '')
            if (res.status == 200) {
                let modify_Overhead = [];
                let modify_Operation = [];
                var data = got.data[0];
                //alter operation
                 modify_Operation = data.processopration.map((item: any) => ({
                    srno: item.srno,
                    opration: item.oprname,
                    process: null,
                    cycletime: null,
                    fop: null,
                    opn: item.opr

                }))


                // alter overhead

                 modify_Overhead = data.processpoh.map((item: any) => ({
                    srno: item.srno,
                    poh: item.pohname,
                    cost: null,
                    pohcode: item.poh
                }))



                console.log('operation', modify_Operation)
                console.log('overhead', modify_Overhead)
           
                setOperationLoad(modify_Operation)
                setOverheadLoad(modify_Overhead)
                setLoader(false);
            } else {
                toast.error('ERROR :: Loading Default Process Master Failed !');
                setLoader(false);
            }
        } catch (err) {
            setLoader(false);
            alert(err)
        }
    }
    React.useEffect(() => {
        // load Process
        if (processDetails.process) {
            fetchDefProcessMaster(processDetails.process.value || processDetails.process )
        }

    }, [])


    var [consUom, setConsUom]: any = React.useState(null)
    var [consQuantity, setConsQuantity]: any = React.useState(null)
    var [prodQuantity, setProdQuantity]: any = React.useState(null)
    var [bomPerQty, setBomPerQty]: any = React.useState(null)
    var [consCost, setConsCost]: any = React.useState(null)
    var [altRowParams, setAltRowParams]: any = React.useState(null)


    const savingConsQuantity = (e: any) => {
        let value = e.target.value;
        let consqty = parseFloat(value);
        setConsQuantity(consqty);
        altRowParams.data.consqty = parseFloat(value || '0');
    }
    const savingProdQuantity = (e: any) => {
        let value = e.target.value;
        let prodqty = parseFloat(value);
        setProdQuantity(prodqty);
        altRowParams.data.prodavgqty = parseFloat(value || '0');
    }
    const savingConsUom = (item: any, name: string) => {

        setConsUom(item);
        altRowParams.data.consuom = item || null;
        altRowParams.data.prodavguom = item || null;
    }

    React.useEffect(() => {
        if (altItemCurrentRowData.rate && consQuantity) {
            let cons_cost = parseFloat(altItemCurrentRowData.rate) * consQuantity;
            altRowParams.data.cost = cons_cost || null;
            setConsCost(cons_cost)
        }
        if (consQuantity && prodQuantity) {
            let bomQty = BOM_STORE.getState().BOMHeader[0].qty;
            let bpqty = parseFloat(bomQty ? bomQty : '1');
            let bpq = consQuantity / prodQuantity / bpqty;

            setBomPerQty(bpq);
        }
    }, [consQuantity, prodQuantity])


    let ColDef1: any[] = [{ field: "srno", headerName: 'Sr. No.', minWidth: 200, valueGetter: 'node.rowIndex + 1', cellStyle: { paddingLeft: '10px' } }, {
        field: "altitem", headerName: 'Item Code', minWidth: 400,
        cellEditor: AutocompleteSelectCellEditor,
        cellEditorParams: {
            required: true,
            selectData: React.useMemo(() => { return itemList }, [itemList]),
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
                setAltRowParams(params);
                let arr = params.newValue.label.split('|')
                let itemcode = { label: arr[1], value: params.newValue.value }
                let itemname = arr[0]
                params.data.altitem = itemcode;
                params.data.itemname = itemname;
                params.data.consuom = consUom || null;
                params.data.prodavguom = consUom || null;

                params.data.rate = params.newValue.rate;
                params.data.consqty = 0.00;

                params.data.prodavgqty = 0.00;

                params.data.cost = 0.00;



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
    }, { field: "itemname", headerName: 'Item Name', minWidth: 400 }, { field: "rate", headerName: 'Rate', minWidth: 200 }, { field: "consqty", headerName: 'Consume Qty', minWidth: 200 }, {
        field: "consuom", headerName: 'UOM', minWidth: 200, cellEditorParams: {
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
    }, { field: "prodavgqty", headerName: 'Produce Qty', minWidth: 200 }, {
        field: "prodavguom", headerName: 'UOM', minWidth: 200, cellEditorParams: {
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
    }, { field: "cost", headerName: 'Cost', minWidth: 200 }]
    




    let ColDef2: any[] = [{ field: "srno", headerName: 'Sr. No.', minWidth: 200, valueGetter: 'node.rowIndex + 1', cellStyle: { paddingLeft: '10px' } }, {
        field: "item", headerName: 'Item Code', minWidth: 400,
        cellEditor: AutocompleteSelectCellEditor,
        cellEditorParams: {
            required: true,
            selectData: React.useMemo(() => { return itemList }, [itemList]),
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
                params.data.item = itemcode;
                params.data.itemname = itemname;
                params.data.uom = { value: params.newValue.uom , label: params.newValue.uomname} ;

                params.data.rate = parseFloat(params.newValue.rate);
                params.data.qty = 0.00;



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
    }, { field: "itemname", headerName: 'Item Name', minWidth: 400 }, {
        field: "qty", headerName: 'Quantity', minWidth: 200, editable: true, cellEditor: NumericEditor, onCellValueChanged: (params: any) => {
            if (params.oldValue !== params.newValue) {
               
                params.data.qty = parseFloat(params.newValue);



                params.api.refreshCells({ force: true });
            }
        }  }, {
        field: "uom", headerName: 'UOM', minWidth: 200, cellEditorParams: {
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
    }, { field: "rate", headerName: 'Rate', minWidth: 200 }]

    let ColDef3: any[] = [{ field: 'srno', header: 'Serial No.', minWidth: 100, maxWidth: 100, valueGetter: 'node.rowIndex + 1' }, {
        field: 'process', header: 'Allowed', minWidth: 100, maxWidth: 100, editable: true
        , cellRenderer: "checkboxRenderer"
    }, { field: 'opration', header: 'Operation', minWidth: 600, maxWidth: 600 }, { field: 'cycletime', header: 'Cyclic Time', minWidth: 300, maxWidth: 300, editable: true, cellEditor: NumericEditor }, {
        field: 'fop', header: 'Final Operation', minWidth: 100, maxWidth: 100, editable: true, cellRenderer: "checkboxRenderer"
    }];


    let colDef4: any[] = [{ field: "srno", headerName: 'Sr. No.', minWidth: 200, valueGetter: 'node.rowIndex + 1', cellStyle: { paddingLeft: '10px' } },
    { field: "poh", headerName: 'Process Overhead Details', minWidth: 800 }
        , { field: "cost", headerName: 'Cost/Unit', minWidth: 200, editable: true, cellEditor: NumericEditor }
    ]

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }


    function closeBOMCopy() {
        setIsCopy(false);
    }

    function closeAltItem() {
        setIsBomAltItem(false);
    }
    function saveAltItemData() {
        collectAltItemDetails();
        setIsBomAltItem(false);
    }

    function closeProduceItem() {
        setIsOtherItem(false);
    }
    function saveOperation() {
        collectOperationDetails();
        handleOperation(false);
    }
    function saveOverhead() {

        collectOverheadDetails();
        handleOverhead(false)

    }
    function saveProduceItem() {
        collectOtherProdDetails();
        console.log('store on closing other produce item', BOM_STORE.getState().BomOtherProdDetails);
        setIsOtherItem(false);
    }

   

    var [isItemCost, setIsItemCost]: any = React.useState(false)
    var [altItemCurrentRowData, setAltItemCurrentRowData]: any = React.useState({})
    var [altItemCurrentRowNo, setAltItemCurrentRowNo]: any = React.useState({})
   

    const OpenItemCost = (e: any) => {
       
        if (e.colDef.field === "altitem") {
            if (e.data.altitem && e.event.keyCode === 13) {

                let currentRowData = { ...e.data, srno: e.rowIndex + 1 };
                setAltItemCurrentRowData(currentRowData);
                let currentRow = parseInt(e.rowIndex + 1);
                //getAltItemCurrentRow(currentRow, currentRowData);
                setAltItemCurrentRowNo(currentRow)

                setIsItemCost(true);

            }

        }
    }

    return (
        <>

            <Modal
                isOpen={isCopy}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeBOMCopy}
                style={customStyles2}
                contentLabel="BOM Routing Copy"
            >
                <div className="card" id="routing-process">
                    <span className="row row-content d-flex section2 col-sm-12">
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}> BOM Process Item Details</h2>
                        <svg className="m-0 ml-1 p-0" type="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={closeBOMCopy} style={{ width: '20px', cursor: 'pointer' }}><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z" /></svg>
                    </span>
                    <hr />
                    <div
                        className="card-body m-0 p-0 mb-1 table-responsive"
                        style={{ margin: "0", padding: "0", overflow: 'auto' }}
                    >
                        <table className="table table-bordered"
                            style={{
                                width: '100%', minHeight: '30vh', borderCollapse: "separate",
                                boxSizing: "border-box",
                                textIndent: "initial",
                                borderSpacing: "2px"
                            }}
                        >
                            <thead>
                                <tr>

                                    <th scope="col" className="text-center" style={{ backgroundColor: 'lightslategray' }} ><span style={{ fontWeight: 400, fontSize: '1.1rem', color: 'white' }}>Name</span></th>
                                    <th scope="col" className="text-center" style={{ backgroundColor: 'lightslategray' }} ><span style={{ fontWeight: 400, fontSize: '1.1rem', color: 'white' }}>Source Item Details</span></th>
                                    <th scope="col" className="text-center" style={{ backgroundColor: 'lightslategray' }} ><span style={{ fontWeight: 400, fontSize: '1.1rem', color: 'white' }}>Copy From Routing</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td>Item</td>
                                    <td className="p-0"><input readOnly className="m-0 form-control" style={{ padding: '22px 5px', border: 'none' }} /></td>
                                    <td className="p-0"><input className="m-0 form-control" style={{ padding: '22px 5px' }} /></td>
                                </tr>
                                <tr>

                                    <td>Color</td>
                                    <td></td>
                                    <td className="p-0"><input className="m-0 form-control" style={{ padding: '22px 5px' }} /></td>
                                </tr>
                                <tr>

                                    <td>Model</td>
                                    <td></td>
                                    <td className="p-0"><input disabled className="m-0" style={{ padding: '22px 5px' }} /></td>
                                </tr>
                                <tr>

                                    <td>Param3</td>
                                    <td></td>
                                    <td className="p-0"><input disabled className="m-0" style={{ padding: '22px 5px' }} /></td>
                                </tr>
                                <tr>

                                    <td colSpan={2}></td>
                                    <td><button type="submit" className="btn btn-primary m-o pr-2 pl-2 pt-1 pb-1" >Copy</button></td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </Modal>

            <Modal
                isOpen={isBomAltItem}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeAltItem}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div id="routing-process">
                    <span className="row row-content d-flex section2 col-sm-12">
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>BOM Alternate Item </h2>
                        <svg className="m-0 ml-1 p-0" type="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={closeAltItem} style={{ width: '20px', cursor: 'pointer' }}><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z" /></svg>
                    </span>
                    <hr />
                    {
                        isItemCost ? (
                            <BOMModals_layer2 isItemCostDet={isItemCost} setItemCostDet={setIsItemCost} itemCostCurrentRowData={altItemCurrentRowData} prevTableCurrentRowNo={altItemCurrentRowNo} blindWatch={blindWatch} consuom={consUom} produom={consUom} consqty={consQuantity} prodqty={prodQuantity} rate={altItemCurrentRowData.amt} conscost={consCost} savingConsQuantity={savingConsQuantity} savingProdQuantity={savingProdQuantity} savingConsUom={savingConsUom} bomPerQty={bomPerQty} params={altRowParams} />

                        ) : null
                    }
                    <div className="col-12 p-3 pt-0" style={{ maxHeight: '80vh' }}>

                        <div className="text-center col-12" style={{ textAlign: 'start', backgroundColor: "lightsteelblue" }}>
                            <span className="row-header p-0 m-0" >BOM Process Item Details</span>
                        </div>


                        <div className="collapse show m-1" id="genDetails">
                            <span className="d-flex section2 col-sm-12">
                                <>
                                    <label htmlFor="itemcode" style={{ fontSize: '1rem' }} className="form-label labl labl2">Item Code</label>
                                    <input type="text" name="itemcode" className="form-control inp" value={altItemCurrentRowData ? altItemCurrentRowData.bomitem : ''} readOnly />
                                </>
                                <>
                                    <label htmlFor="itemName" style={{ fontSize: '1rem' }} className="form-label labl labl2">Item Name</label>
                                    <input type="text" name="itemName" className="form-control inp" value={blindWatch ? blindWatch.itemname : ''} readOnly />
                                </>
                                <>
                                    <label htmlFor="process" style={{ fontSize: '1rem' }} className="form-label labl labl2">Process</label>
                                    <input type="process" name="payTerm" className="form-control inp" value={processDetails ? processDetails.process.label : ''} readOnly />
                                </>
                            </span>

                            <span className="d-flex section2 col-sm-12">
                                <>
                                    <label htmlFor="stage" style={{ fontSize: '1rem' }} className="form-label labl labl2">Stage</label>
                                    <input type="text" name="stage" className="form-control inp" value={processDetails ? processDetails.sr : ''} readOnly />
                                </>
                                <>
                                    <label htmlFor="srno" style={{ fontSize: '1rem' }} className="form-label labl labl2">Sr. No.</label>
                                    <input type="text" name="srno" className="form-control inp" value={altItemCurrentRowData ? altItemCurrentRowData.srno : ''} readOnly />
                                </>
                                <>
                                    <label htmlFor="bomitem" style={{ fontSize: '1rem' }} className="form-label labl labl2">Bom Item</label>
                                    <input type="text" name="bomitem" className="form-control inp" value={altItemCurrentRowData ? altItemCurrentRowData.itemname : ''} readOnly />
                                </>

                            </span>



                        </div>


                        <hr />
                        {
                            currentAltItemDetails && currentAltItemDetails[`Alt${consItemCurrentRowNo}${processDetails.sr}`] ? (<LoadGrid title="BOM Alt Item Details" titleClr="blue" OpenSubLayer={OpenItemCost} colDef={ColDef1} data={currentAltItemDetails && currentAltItemDetails[`Alt${consItemCurrentRowNo}${processDetails.sr}`] ? currentAltItemDetails[`Alt${consItemCurrentRowNo}${processDetails.sr}`] : altItemRow} collect={getAltItemDetailApi} srProps="srno" firstRow={altItemRow} chkDup="altitem" />) : (<WriteGrid title="BOM Alt Item Details" titleClr="blue" OpenSubLayer={OpenItemCost} colDef={ColDef1} data={altItemRow} collect={getAltItemDetailApi} chkDup="altitem" srProps="srno" />)
                        }


                        <div className="d-flex flex-row justify-content-start">
                            <button type="button" style={{ border: '2px solid #42ba96', letterSpacing: 3 }} className="btn btn-success p-2 m-3 col-1" onClick={saveAltItemData}>Save</button>
                            <button type="button" style={{ border: '2px solid red', letterSpacing: 3 }} className="btn btn-danger p-2 m-3 col-1" onClick={closeAltItem}>Quit</button>

                        </div>
                    </div>
                </div>
            </Modal>

            <Modal
                isOpen={isOtherItem}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeProduceItem}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div id="routing-process">
                    <span className="row row-content d-flex section2 col-sm-12">
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>BOM Routing Other Produce Item Details </h2>
                        <svg className="m-0 ml-1 p-0" type="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={closeProduceItem} style={{ width: '20px', cursor: 'pointer' }}><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z" /></svg>
                    </span>
                    <hr />

                    <div className="col-12 p-3 pt-0" style={{ maxHeight: '80vh' }}>

                        <div className="text-center col-12" style={{ textAlign: 'start', backgroundColor: "lightsteelblue" }}>
                            <span className="row-header p-0 m-0" >BOM Process Item Details</span>
                        </div>



                        <div className="collapse show m-1" id="genDetails">
                            <span className="d-flex section2 col-sm-12">
                                <>
                                    <label htmlFor="psrno" style={{ fontSize: '1rem' }} className="form-label labl labl2">Process Sr. No.</label>
                                    <input type="text" name="psrno" className="form-control inp" value={processDetails ? processDetails.sr : ''} readOnly />
                                </>
                                <>
                                    <label htmlFor="process" style={{ fontSize: '1rem' }} className="form-label labl labl2">Process</label>
                                    <input type="text" name="process" className="form-control inp" value={processDetails ? processDetails.process.label : ''} readOnly />
                                </>
                                <>
                                    <label htmlFor="prodSrNo" style={{ fontSize: '1rem' }} className="form-label labl labl2">Produce Sr.No.</label>
                                    <input type="text" name="prodSrNo" className="form-control inp" value={prodItemCurrentRowData ? prodItemCurrentRowData.srno : ''} readOnly />
                                </>
                            </span>

                            <span className="d-flex section2 col-sm-12">
                                <>
                                    <label htmlFor="pItem" style={{ fontSize: '1rem' }} className="form-label labl labl2">Produce Item</label>
                                    <input type="text" name="pItem" className="form-control inp" value={prodItemCurrentRowData && prodItemCurrentRowData.bomitem ? prodItemCurrentRowData.bomitem.label : ''} readOnly />
                                </>
                                <>
                                    <label htmlFor="qty" style={{ fontSize: '1rem' }} className="form-label labl labl2">Quantity</label>
                                    <input type="text" name="qty" className="form-control inp" value={prodItemCurrentRowData ? prodItemCurrentRowData.prodavgqty : ''} />
                                </>

                                <span className="col-4"></span>

                            </span>


                        </div>
                        <hr />
                        {
                            currentOtherProdDetails && currentOtherProdDetails[`Prod${prodItemCurrentRowNo}${processDetails.sr}`] ? (<LoadGrid title="BOM Routing Other Produce Item Details" titleClr="blue" OpenSubLayer={() => { }} colDef={ColDef2} data={currentOtherProdDetails && currentOtherProdDetails[`Prod${prodItemCurrentRowNo}${processDetails.sr}`] ? currentOtherProdDetails[`Prod${prodItemCurrentRowNo}${processDetails.sr}`] : otherProdDefRow} firstRow={otherProdDefRow} srProps="" collect={getOtherProdDetailApi} chkDup="item" />) : (<WriteGrid title="BOM Routing Other Produce Item Details" titleClr="blue" OpenSubLayer={() => { }} colDef={ColDef2} data={otherProdDefRow} collect={getOtherProdDetailApi} chkDup="item" />)
                        }

                        <div className="d-flex flex-row justify-content-start">
                            <button type="button" style={{ border: '2px solid #42ba96', letterSpacing: 3 }} className="btn btn-success p-2 m-3 col-1" onClick={saveProduceItem}>Save</button>
                            <button type="button" style={{ border: '2px solid red', letterSpacing: 3 }} className="btn btn-danger p-2 m-3 col-1" onClick={closeProduceItem}>Quit</button>

                        </div>

                    </div>
                </div>

            </Modal>


            <Modal
                isOpen={isOperation}
                onAfterOpen={afterOpenModal}
                onRequestClose={() => { handleOperation(false) }}
                style={customStyles}
                contentLabel="Operation Modal"
            >
                <div id="routing-process">
                    <span className="row row-content d-flex section2 col-sm-12">
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Process Operation Details </h2>
                        <svg className="m-0 ml-1 p-0" type="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={() => { handleOperation(false) }} style={{ width: '20px', cursor: 'pointer' }}><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z" /></svg>
                    </span>
                    <hr />
                    <div className="collapse show m-1" id="genDetails">
                        <span className="d-flex section2 col-sm-12">
                            <>
                                <label htmlFor="psrno" style={{ fontSize: '1rem' }} className="form-label labl labl2">Process Sr. No.</label>
                                <input type="text" name="psrno" className="form-control inp" value={processDetails ? processDetails.sr : ''} readOnly />
                            </>
                            <>
                                <label htmlFor="process" style={{ fontSize: '1rem' }} className="form-label labl labl2">Process</label>
                                <input type="text" name="process" className="form-control inp" value={processDetails ? processDetails.process.label : ''} readOnly />
                            </>
                            <span className="col-4"></span>
                        </span>


                    </div>
                    <hr />
                    <div className="col-12 p-3 pt-0" style={{ maxHeight: '100vh', width: '94%' }}>

                        {/*<div className="text-center col-12" style={{ textAlign: 'start', backgroundColor: "lightsteelblue" }}>*/}
                        {/*    <span className="row-header p-0 m-0" >BOM Process Operation Details</span>*/}
                        {/*</div>*/}
                        {
                            currentOperationDetails && currentOperationDetails[`${processDetails.sr}`] ? (<LoadGrid title="Process Operation Details " titleClr="blue" OpenSubLayer={() => { }} colDef={ColDef3} data={currentOperationDetails && currentOperationDetails[`${processDetails.sr}`] ? currentOperationDetails[`${processDetails.sr}`] : operationLoad} collect={getOperationDetApi} firstRow={oprDefRow} srProps="srno" chkDup="opration" />) : (<LoadGrid title="Process Operation Details " titleClr="blue" OpenSubLayer={() => { }} colDef={ColDef3} data={operationLoad} collect={getOperationDetApi} firstRow={oprDefRow} srProps="srno" chkDup="opration" />)
                        }

                        <div className="d-flex flex-row justify-content-start">
                            <button type="button" style={{ border: '2px solid #42ba96', letterSpacing: 3 }} className="btn btn-success p-2 m-3 col-1" onClick={() => { saveOperation() }}>Save</button>
                            <button type="button" style={{ border: '2px solid red', letterSpacing: 3 }} className="btn btn-danger p-2 m-3 col-1" onClick={() => { handleOperation(false) }}>Quit</button>

                        </div>

                    </div>
                </div>

            </Modal>

            <Modal
                isOpen={isOverHead}
                onAfterOpen={afterOpenModal}
                onRequestClose={() => { handleOverhead(false) }}
                style={customStyles}
                contentLabel="Operation Modal"
            >
                <div id="routing-process">
                    <span className="row row-content d-flex section2 col-sm-12">
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Process Overhead Rate Details </h2>
                        <svg className="m-0 ml-1 p-0" type="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={() => { handleOverhead(false) }} style={{ width: '20px', cursor: 'pointer' }}><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z" /></svg>
                    </span>

                    <hr />

                    <div className="collapse show m-1" id="genDetails">
                        <span className="d-flex section2 col-sm-12">
                            <>
                                <label htmlFor="psrno" style={{ fontSize: '1rem' }} className="form-label labl labl2">Process Sr. No.</label>
                                <input type="text" name="psrno" className="form-control inp" value={processDetails ? processDetails.sr : ''} readOnly />
                            </>
                            <>
                                <label htmlFor="process" style={{ fontSize: '1rem' }} className="form-label labl labl2">Process</label>
                                <input type="text" name="process" className="form-control inp" value={processDetails ? processDetails.process.label : ''} readOnly />
                            </>
                            <span className="col-4"></span>
                        </span>


                    </div>
                    <hr />

                    <div className="col-12 p-3 pt-0" style={{ maxHeight: '100vh', width: '90%' }}>
                        {
                            currentOverheadDetails && currentOverheadDetails[`${processDetails.sr}`] ? (<LoadGrid title="Process Overhead Details " titleClr="blue" OpenSubLayer={() => { }} colDef={colDef4} data={currentOverheadDetails && currentOverheadDetails[`${processDetails.sr}`] ? currentOverheadDetails[`${processDetails.sr}`]  : overheadLoad} collect={getOverheadDetApi} srProps="srno" firstRow={overheadDefRow} chkDup="overhead" />)
                                :

                                (<LoadGrid title="Process Overhead Details " titleClr="blue" OpenSubLayer={() => { }} colDef={colDef4} data={overheadLoad} collect={getOverheadDetApi} srProps="srno" firstRow={overheadDefRow} chkDup="overhead" />)
                        }

                        <div className="d-flex flex-row justify-content-start">
                            <button type="button" style={{ border: '2px solid #42ba96', letterSpacing: 3 }} className="btn btn-success p-2 m-3 col-1" onClick={() => { saveOverhead() } }>Save</button>
                            <button type="button" style={{ border: '2px solid red', letterSpacing: 3 }} className="btn btn-danger p-2 m-3 col-1" onClick={() => { handleOverhead(false) }}>Quit</button>

                        </div>

                    </div>
                </div>

            </Modal>
        </>
    )


}
