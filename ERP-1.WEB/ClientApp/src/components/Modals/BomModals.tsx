import * as React from 'react';

import BOMModals_layer2 from '../Modals/BOM_Modals(II layer)';
import Modal from 'react-modal';
import WriteGrid from '../Grid Component/grid.component';
import AutocompleteSelectCellEditor from 'ag-grid-autocomplete-editor';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '90%'
    },
};
const customStyles2 = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '60%'
    },
};



export default function BOMModals({ isCopy, isBomAltItem, isOtherItem, itemCostDet, setIsCopy, setItemCostDet, setIsOtherItem, setIsBomAltItem, handleAlt, handleOther, handleConsume, itemList, isOperation, handleOperation, ...props }: any) {
    let subtitle: any;

    let ColDef1: any[] = [{ field: "srno", headerName: 'Sr. No.', minWidth: 100, valueGetter: 'node.rowIndex + 1', cellStyle: { paddingLeft: '10px' } }, {
        field: "bomitem", headerName: 'Item Code', minWidth: 200,
        cellEditor: AutocompleteSelectCellEditor,
        cellEditorParams: {
            required: true,
            selectData: React.useMemo(() => { return itemList }, [itemList]),
            placeholder: 'Select an option',
        },
        valueFormatter: (params: any) => {
            if (params.value) {
                return params.value.label || params.value.value || params.value;
            }
            return params.label;
        },
        editable: true
    }, { field: "itn", headerName: 'Item Name', minWidth: 400 }, { field: "rate", headerName: 'Rate', minWidth: 200 }, { field: "consqty", headerName: 'Consume Qty', minWidth: 200 }, { field: "consuom", headerName: 'UOM', minWidth: 200 }, { field: "prodavgqty", headerName: 'Produce Qty', minWidth: 200 }, { field: "prodavguom", headerName: 'UOM', minWidth: 200 }, { field: "cost", headerName: 'Cost', minWidth: 200 }, { field: "altitem", headerName: 'Alt Item', minWidth: 200 }]



    const rawData1: any[] = [{ bomitem: null }, { itn: null }, { rate: null }, { consqty: null }, { consuom: null }, { prodavgqty: null }, { prodavguom: null }, { cost: null }, { altitem: null }];



    let ColDef2: any[] = [{ field: "srno", headerName: 'Sr. No.', minWidth: 100, valueGetter: 'node.rowIndex + 1', cellStyle: { paddingLeft: '10px' } }, {
        field: "itemcode", headerName: 'Item Code', minWidth: 200,
        cellEditor: AutocompleteSelectCellEditor,
        cellEditorParams: {
            required: true,
            selectData: React.useMemo(() => { return itemList }, [itemList]),
            placeholder: 'Select an option',
        },
        valueFormatter: (params: any) => {
            if (params.value) {
                return params.value.label || params.value.value || params.value;
            }
            return params.label;
        },
        editable: true
    }, { field: "itemname", headerName: 'Item Name', minWidth: 400 }, { field: "qty", headerName: 'Quantity', minWidth: 200, editable: true }, { field: "uom", headerName: 'UOM', minWidth: 200 }, { field: "rate", headerName: 'Rate', minWidth: 200 }]

    let ColDef3: any[] = [{ field: 'srno', header: 'Serial No.', minWidth: 100, maxWidth: 100, valueGetter: 'node.rowIndex + 1'}, { field: 'process', header: 'Allowed', minWidth: 100, maxWidth: 100 }, { field: 'opration', header: 'Operation', minWidth: 600, maxWidth: 600 }, { field: 'cycletime', header: 'Cyclic Time', minWidth: 600, maxWidth: 600 }, { field: 'fop', header: 'Final Operation', minWidth: 100, maxWidth: 100 }];

    const rawData3: any[] = [{ srno: 1, process : null, opration : null, cycletime: null, fop: null }]

    const rawData2: any[] = [{ itemcode: null }, { itemname: null }, { qty: null }, { uom: null }, { rate: null }]

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

    function closeProduceItem() {
        setIsOtherItem(false);
    }

    function closeItemCostDet() {
        setItemCostDet(false);
    }

    var [isItemCost, setIsItemCost]: any = React.useState(false)

    const OpenItemCost = (e: any) => {
        if (e.colDef.field === "bomitem") {
            if (e.data.bomitem && e.event.keyCode === 13) {

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
            </Modal>

            <Modal
                isOpen={isBomAltItem}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeAltItem}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <span className="row row-content d-flex section2 col-sm-12">
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>BOM Alternate Item </h2>
                    <svg className="m-0 ml-1 p-0" type="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={closeAltItem} style={{ width: '20px', cursor: 'pointer' }}><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z" /></svg>
                </span>
                <hr />
                {
                    isItemCost ? (
                        <BOMModals_layer2 isItemCostDet={isItemCost} setItemCostDet={setIsItemCost} handleChange={handleConsume} />

                    ) : null
                }
                <div className="card col-12 p-3 pt-0" style={{ overflow: 'auto', maxHeight: '80vh' }}>

                    <div className="text-center col-12" style={{ textAlign: 'start', backgroundColor: "lightsteelblue" }}>
                        <span className="row-header p-0 m-0" >BOM Process Item Details</span>
                    </div>


                    <div className="collapse show m-1" id="genDetails">
                        <span className="d-flex section2 col-sm-12">
                            <>
                                <label htmlFor="itemcode" style={{ fontSize: '1rem' }} className="form-label labl labl2">Item Code</label>
                                <input type="text" name="itemcode" className="form-control inp" onKeyUp={OpenItemCost} />
                            </>
                            <>
                                <label htmlFor="itemName" style={{ fontSize: '1rem' }} className="form-label labl labl2">Item Name</label>
                                <input type="text" name="itemName" className="form-control inp" />
                            </>
                            <>
                                <label htmlFor="process" style={{ fontSize: '1rem' }} className="form-label labl labl2">Process</label>
                                <input type="process" name="payTerm" className="form-control inp" />
                            </>
                        </span>

                        <span className="d-flex section2 col-sm-12">
                            <>
                                <label htmlFor="stage" style={{ fontSize: '1rem' }} className="form-label labl labl2">Stage</label>
                                <input type="text" name="stage" className="form-control inp" />
                            </>
                            <>
                                <label htmlFor="srno" style={{ fontSize: '1rem' }} className="form-label labl labl2">Sr. No.</label>
                                <input type="text" name="srno" className="form-control inp" />
                            </>
                            <>
                                <label htmlFor="bomitem" style={{ fontSize: '1rem' }} className="form-label labl labl2">Bom Item</label>
                                <input type="text" name="bomitem" className="form-control inp" />
                            </>

                        </span>



                    </div>


                    <hr />
                    <WriteGrid title="BOM Alt Item Details" titleClr="blue" OpenSubLayer={OpenItemCost} colDef={ColDef1} data={rawData1} />

                </div>
                <div className="d-flex flex-row justify-content-start">
                    <button type="button" style={{ border: '2px solid #42ba96', letterSpacing: 3 }} className="btn btn-success p-2 m-3 col-1">Save</button>
                    <button type="button" style={{ border: '2px solid red', letterSpacing: 3 }} className="btn btn-danger p-2 m-3 col-1" onClick={closeAltItem}>Quit</button>

                </div>
            </Modal>

            <Modal
                isOpen={isOtherItem}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeProduceItem}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <span className="row row-content d-flex section2 col-sm-12">
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>BOM Routing Other Produce Item Details </h2>
                    <svg className="m-0 ml-1 p-0" type="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={closeProduceItem} style={{ width: '20px', cursor: 'pointer' }}><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z" /></svg>
                </span>
                <hr />

                <div className="card col-12 p-3 pt-0" style={{ overflow: 'auto', maxHeight: '80vh' }}>

                    <div className="text-center col-12" style={{ textAlign: 'start', backgroundColor: "lightsteelblue" }}>
                        <span className="row-header p-0 m-0" >BOM Process Item Details</span>
                    </div>



                    <div className="collapse show m-1" id="genDetails">
                        <span className="d-flex section2 col-sm-12">
                            <>
                                <label htmlFor="psrno" style={{ fontSize: '1rem' }} className="form-label labl labl2">Process Sr. No.</label>
                                <input type="text" name="psrno" className="form-control inp" />
                            </>
                            <>
                                <label htmlFor="process" style={{ fontSize: '1rem' }} className="form-label labl labl2">Process</label>
                                <input type="text" name="process" className="form-control inp" />
                            </>
                            <>
                                <label htmlFor="prodSrNo" style={{ fontSize: '1rem' }} className="form-label labl labl2">Produce Sr.No.</label>
                                <input type="text" name="prodSrNo" className="form-control inp" />
                            </>
                        </span>

                        <span className="d-flex section2 col-sm-12">
                            <>
                                <label htmlFor="pItem" style={{ fontSize: '1rem' }} className="form-label labl labl2">Produce Item</label>
                                <input type="text" name="pItem" className="form-control inp" />
                            </>
                            <>
                                <label htmlFor="qty" style={{ fontSize: '1rem' }} className="form-label labl labl2">Quantity</label>
                                <input type="text" name="qty" className="form-control inp" />
                            </>

                            <span className="col-4"></span>

                        </span>


                    </div>
                    <hr />
                    <WriteGrid title="BOM Routing Other Produce Item Details" titleClr="blue" OpenSubLayer={() => { }} colDef={ColDef2} data={rawData2} />

                </div>
                <div className="d-flex flex-row justify-content-start">
                    <button type="button" style={{ border: '2px solid #42ba96', letterSpacing: 3 }} className="btn btn-success p-2 m-3 col-1">Save</button>
                    <button type="button" style={{ border: '2px solid red', letterSpacing: 3 }} className="btn btn-danger p-2 m-3 col-1" onClick={closeProduceItem}>Quit</button>

                </div>

            </Modal>


            <Modal
                isOpen={isOperation}
                onAfterOpen={afterOpenModal}
                onRequestClose={() => { handleOperation(false) }}
                style={customStyles}
                contentLabel="Operation Modal"
            >
                <span className="row row-content d-flex section2 col-sm-12">
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Process Operation Details </h2>
                    <svg className="m-0 ml-1 p-0" type="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={() => { handleOperation(false) }} style={{ width: '20px', cursor: 'pointer' }}><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z" /></svg>
                </span>
                <hr />

                <div className="card col-12 p-3 pt-0" style={{ overflow: 'auto', maxHeight: '80vh' }}>

                    {/*<div className="text-center col-12" style={{ textAlign: 'start', backgroundColor: "lightsteelblue" }}>*/}
                    {/*    <span className="row-header p-0 m-0" >BOM Process Operation Details</span>*/}
                    {/*</div>*/}

                    <WriteGrid title="BOM Routing Other Produce Item Details" titleClr="blue" OpenSubLayer={() => { }} colDef={ColDef3} data={rawData3} />

                </div>
                <div className="d-flex flex-row justify-content-start">
                    <button type="button" style={{ border: '2px solid #42ba96', letterSpacing: 3 }} className="btn btn-success p-2 m-3 col-1">Save</button>
                    <button type="button" style={{ border: '2px solid red', letterSpacing: 3 }} className="btn btn-danger p-2 m-3 col-1" onClick={closeProduceItem}>Quit</button>

                </div>

            </Modal>


        </>
    )


}
