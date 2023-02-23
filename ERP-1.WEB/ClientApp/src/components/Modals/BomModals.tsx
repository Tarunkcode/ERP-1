import * as React from 'react';

import BOMModals_layer2 from '../Modals/BOM_Modals(II layer)';
import Modal from 'react-modal';
import WriteGrid from '../Grid Component/grid.component';

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

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
/*Modal.setAppElement('#button');*/

export default function BOMModals({ isCopy, isBomAltItem, isOtherItem, itemCostDet, setIsCopy,  setItemCostDet, setIsOtherItem, setIsBomAltItem,...props }: any) {
    let subtitle: any;
    
    let ColDef1: any[] = [{ field: "srno", headerName: 'Sr. No.', minWidth: 100 }, { field: "itc", headerName: 'Item Code', minWidth: 200 }, { field: "itn", headerName: 'Item Name', minWidth: 400 }, { field: "rate", headerName: 'Rate', minWidth: 200 }, { field: "consQty", headerName: 'Consume Qty', minWidth: 200 }, { field: "uom1", headerName: 'UOM', minWidth: 200 }, { field: "prdQty", headerName: 'Produce Qty', minWidth: 200 }, { field: "uom2", headerName: 'UOM', minWidth: 200 }, { field: "cst", headerName: 'Cost', minWidth: 200 }, { field: "altItm", headerName: 'Alt Item', minWidth: 200 }]



    const rawData1: any[] = [{ srno: null }, { itc: null }, { itn: null }, { rate: null }, { consQty: null }, { uom1: null }, { prdQty: null }, { uom2: null }, { cst: null }, { altItm: null}];



    let ColDef2: any[] = [{ field: "srno", headerName: 'Sr. No.', minWidth: 100 }, { field: "itc", headerName: 'Item Code', minWidth: 200 }, { field: "itn", headerName: 'Item Name', minWidth: 400 }, { field: "qty", headerName: 'Quantity', minWidth: 200 }, { field: "uom", headerName: 'UOM', minWidth: 200 }, { field: "rate", headerName: 'Rate', minWidth: 200 }]


    const rawData2: any[] = [{ srno: null }, { itc: null }, { itn: null }, { qty: null }, { uom: null }, { rate : null}]
  
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

    var [isItemCost, setIsItemCost] : any = React.useState(false)
    const OpenItemCost = (e: any) => {
        if(e.key === 'Enter') setIsItemCost(true)
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
                                <td className="p-0"><input readOnly className="m-0 form-control" style={{ padding: '22px 5px', border:'none' }} /></td>
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
                                <td className="p-0"><input disabled className="m-0" style={{padding:'22px 5px'}} /></td>
                            </tr>
                            <tr>
                               
                                <td>Param3</td>
                                <td></td>
                                <td className="p-0"><input disabled className="m-0" style={{ padding: '22px 5px' }}  /></td>
                            </tr>
                            <tr>
                          
                                <td colSpan={2 }></td>
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
                        <BOMModals_layer2 isItemCostDet={isItemCost} setItemCostDet={setIsItemCost} />

                    ): null
                }
                <div className="card col-12 p-3 pt-0" style={{ overflow: 'auto', maxHeight:'80vh' }}>

                    <div className="text-center col-12" style={{ textAlign: 'start', backgroundColor: "lightsteelblue" }}>
                        <span className="row-header p-0 m-0" >BOM Process Item Details</span>
                    </div>

                   
                                <div className="collapse show m-1" id="genDetails">
                                    <span className="d-flex section2 col-sm-12">
                                        <>
                                <label htmlFor="series" style={{ fontSize: '1rem' }} className="form-label labl labl2">Item Code</label>
                                <input type="text" name="series" className="form-control inp" onKeyUp={OpenItemCost} />
                                        </>
                                        <>
                                            <label htmlFor="majProd" style={{ fontSize: '1rem' }} className="form-label labl labl2">Item Name</label>
                                            <input type="text" name="payTerm" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="majProd" style={{ fontSize: '1rem' }} className="form-label labl labl2">Rate</label>
                                            <input type="date" name="payTerm" className="form-control inp" />
                                        </>
                                    </span>

                                    <span className="d-flex section2 col-sm-12">
                                        <>
                                            <label htmlFor="series" style={{ fontSize: '1rem' }} className="form-label labl labl2">Consumed Qty</label>
                                            <input type="text" name="custCode" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="series" style={{ fontSize: '1rem' }} className="form-label labl labl2">UOM</label>
                                            <input type="text" name="custName" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="majProd" style={{ fontSize: '1rem' }} className="form-label labl labl2">Produce Qty</label>
                                            <input type="date" name="payTerm" className="form-control inp" />
                                        </>

                                    </span>

                                    <span className="d-flex section2 col-sm-12">
                                        <>
                                            <label htmlFor="series" style={{ fontSize: '1rem' }} className="form-label labl labl2">UOM</label>
                                            <input type="text" name="custName" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="series" style={{ fontSize: '1rem' }} className="form-label labl labl2">Cost</label>
                                            <input type="text" name="custName" className="form-control inp" />
                                        </>
                                        <span className="col-4"></span>

                                    </span>




                                </div>
                            

                <hr />
                    <WriteGrid title="BOM Alt Item Details" titleClr="blue" OpenSubLayer={() => { }} colDef={ColDef1} data={rawData1} />


            
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

                <div className="card col-12 p-3 pt-0" style={{ overflowY: 'auto', overflowX: 'hidden', maxHeight: '85%' }}>

                    <div className="text-center col-12" style={{ textAlign: 'start', backgroundColor: "lightsteelblue" }}>
                        <span className="row-header p-0 m-0" >BOM Process Item Details</span>
                    </div>

                           

                                <div className="collapse show m-1" id="genDetails">
                                    <span className="d-flex section2 col-sm-12">
                                        <>
                                            <label htmlFor="series" style={{ fontSize: '1rem' }} className="form-label labl labl2">Process Sr. No.</label>
                                            <input type="text" name="series" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="majProd" style={{ fontSize: '1rem' }} className="form-label labl labl2">Process</label>
                                            <input type="text" name="payTerm" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="majProd" style={{ fontSize: '1rem' }} className="form-label labl labl2">Produce Sr.No.</label>
                                            <input type="date" name="payTerm" className="form-control inp" />
                                        </>
                                    </span>

                                    <span className="d-flex section2 col-sm-12">
                                        <>
                                            <label htmlFor="series" style={{ fontSize: '1rem' }} className="form-label labl labl2">Produce Qty</label>
                                            <input type="text" name="custCode" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="series" style={{ fontSize: '1rem' }} className="form-label labl labl2">Quantity</label>
                                            <input type="text" name="custName" className="form-control inp" />
                                        </>
                                       
                                        <span className="col-4"></span>

                                    </span>

                                   
                    </div>
                    <hr />
                    <WriteGrid title="BOM Routing Other Produce Item Details" titleClr="blue" OpenSubLayer={() => { }} colDef={ColDef2} data={rawData2} />

                </div>
                  
             
            </Modal>


           
 
      </>
    )


}
