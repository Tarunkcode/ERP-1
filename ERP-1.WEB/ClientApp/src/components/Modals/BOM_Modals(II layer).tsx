import * as React from 'react';
import { useContext } from 'react';
import Modal from 'react-modal';
import { LoaderContext } from '../../AppContext/loaderContext';
import { BOM_STORE } from '../../Redux/BOM/bom.reducer';
import AutoComp from '../custom-input/droplist/droplist.component';
import useFetch from '../Hooks/useFetch';


const customStyles: object = {

    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxHeight: '100vh',
    minHeight: '100vh',
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
/*Modal.setAppElement('#button');*/

export default function BOMModals_layer2({ isItemCostDet, setItemCostDet, itemCostCurrentRowData, prevTableCurrentRowNo, blindWatch, consuom, produom, consqty, prodqty, rate, conscost, savingConsQuantity ,savingProdQuantity , savingConsUom , bomPerQty,params, ...props }: any) {
    let subtitle: any;
    let [uom, setUom]: any = React.useState([]);
    let [isFreshOpen, setIsFreshOpen]: any = React.useState(null);
    const api = useFetch();
    const { setLoader } = useContext(LoaderContext);
    const loadUom = async () => {

        setLoader(true)

        try {


            let urlStr: string = `/api/LoadMasterData?MasterType=${21}&Company=${60}&Customer=${68}`

            let { res, got } = await api(urlStr, "GET", '');
            if (res.status === 200) {
                setUom(got.data)



                setLoader(false)
            }
            else {
                setLoader(false);
                throw new Error('Bad Fetch 1')
            }


        } catch (err) {
            setLoader(false);
            alert(err);
        }
    }
    React.useEffect(() => {
        if (itemCostCurrentRowData.consqty && itemCostCurrentRowData.prodavgqty) {
            setIsFreshOpen(false);

        } else {
            setIsFreshOpen(true);

        }

    }, [])
    function afterOpenModal() {

        subtitle.style.color = '#f00';
    }

    
    function closeItemCostDet() {
        params.api.refreshCells({ force: true });
        setItemCostDet(false);
    }

    React.useEffect(() => {
        loadUom();
        
    }, [])

    return (
        <div className="col-8 m-0 p-0">








            <Modal
                isOpen={isItemCostDet}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeItemCostDet}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div id="routing-process">
                    <span className="row row-content d-flex section2 col-sm-12">
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>BOM Item Cost Details</h2>
                        <svg className="m-0 ml-1 p-0" type="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={closeItemCostDet} style={{ width: '20px', cursor: 'pointer' }}><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z" /></svg>
                    </span>
                    <hr />
                    <div className="col-12 p-3 pt-0" style={{ maxHeight: '80vh' }}>

                        <div className="text-center col-12" style={{ textAlign: 'start', backgroundColor: "lightsteelblue" }}>
                            <span className="row-header p-0 m-0" >BOM Item Cost Details</span>
                        </div>

                        <div className="collapse show m-1" id="genDetails">
                            <span className="d-flex section2 col-sm-12">
                                <>
                                    <label htmlFor="fgitemcode" style={{ fontSize: '1rem' }} className="form-label labl labl2">FG Item Code</label>
                                    <input type="text" name="fgitemcode" className="form-control inp col-4" value={blindWatch ? blindWatch.itemcode : ''} readOnly />
                                </>


                            </span>

                            <span className="d-flex section2 col-sm-12">
                                <>
                                    <label htmlFor="fgitemname" style={{ fontSize: '1rem' }} className="form-label labl labl2">FG Item Name</label>
                                    <input type="text" name="fgitemname" className="form-control inp col-4" value={blindWatch ? blindWatch.itemname : ''} readOnly />
                                </>



                            </span>


                            <span className="d-flex section2 col-sm-12">
                                <>
                                    <label htmlFor="qty" style={{ fontSize: '1rem' }} className="form-label labl labl2">Quantity</label>
                                    <input type="text" name="qty" className="form-control inp col-4"  readOnly />
                                </>

                                <>
                                    <label htmlFor="uom" style={{ fontSize: '1rem' }} className="form-label labl labl2">UOM</label>
                                    <input type="text" name="uom" className="form-control inp col-4" value={blindWatch ? blindWatch.uomname : ''} readOnly />
                                </>
                            </span>
                            <br />
                            <span className="d-flex section2 col-sm-12">
                                <>
                                    <label htmlFor="color" style={{ fontSize: '1rem' }} className="form-label labl labl2">Color</label>
                                    <input type="text" name="color" className="form-control inp col-4" />
                                </>

                            </span>
                            <br />

                            <span className="d-flex section2 col-sm-12">
                                <>
                                    <label htmlFor="consitemcode" style={{ fontSize: '1rem' }} className="form-label labl labl2">Cons.Item Code</label>
                                    <input type="text" name="consitemcode" className="form-control inp col-4" value={itemCostCurrentRowData.bomitem ? itemCostCurrentRowData.bomitem.label : ''} readOnly />
                                </>

                            </span>

                            <span className="d-flex section2 col-sm-12">
                                <>
                                    <label htmlFor="consitem" style={{ fontSize: '1rem' }} className="form-label labl labl2">Cons. Item</label>
                                    <input type="text" name="consitem" className="form-control inp col-4" value={itemCostCurrentRowData.itemname ? itemCostCurrentRowData.itemname : ''} readOnly />
                                </>


                            </span>


                            <span className="d-flex section2 col-sm-12">
                                <>
                                    <label htmlFor="consitemuom" style={{ fontSize: '1rem' }} className="form-label labl labl2">Cons. Item UOM</label>
                                    <input type="text" name="consitemuom" className="form-control inp col-4" value={itemCostCurrentRowData.consuom ? itemCostCurrentRowData.consuom.label : ''} readOnly />
                                </>

                            </span>

                            <br />
                            {/*------------------------------------------------------ Cost Details ------------------------------------------------------------------------------------------------------------------------------*/}
                            <br />
                            <span className="d-flex section2 col-sm-12">
                                <>
                                    <label htmlFor="consqty" style={{ fontSize: '1rem' }} className="form-label labl labl2">Cons. Qty</label>
                                    <input type="number" name="consqty" className="form-control inp col-4" defaultValue={itemCostCurrentRowData.consqty ? itemCostCurrentRowData.consqty : ''} min={0} onChange={savingConsQuantity} />
                                </>
                                <AutoComp name="consuom" label="UOM" ipTitle="Select Uom" list={uom} ipType="text" collectWithItem={savingConsUom} classCategory="form-control col-4 inp str" isMandate={true} value={itemCostCurrentRowData && itemCostCurrentRowData.consuom ? itemCostCurrentRowData.consuom : ''} defaultt={itemCostCurrentRowData.consuom && itemCostCurrentRowData.consuom.label ? itemCostCurrentRowData.consuom.label : '' } />
                            </span>
                            <span className="d-flex section2 col-sm-12">
                                <>
                                    <label htmlFor="prodqty" style={{ fontSize: '1rem' }} className="form-label labl labl2">Prod. Qty</label>
                                    <input type="number" name="prodqty" className="form-control inp col-4" defaultValue={itemCostCurrentRowData.prodavgqty ? itemCostCurrentRowData.prodavgqty : ''} min={0} onChange={savingProdQuantity} />
                                </>

                                {/*<AutoComp name="produom" label="UOM" ipTitle="Select Uom" list={uom} ipType="text" collectWithItem={() => { }} classCategory="form-control col-4 inp str" isMandate={true} defaultt={itemCostCurrentRowData.prodavguom ? itemCostCurrentRowData.prodavguom.label : ''} />*/}


                            </span>
                            <br />
                            <hr style={{ border: '1px solid black' }} />
                            <span className="d-flex section2 col-sm-12">
                                <>
                                    <label htmlFor="rate" style={{ fontSize: '1rem' }} className="form-label labl labl2">Rate</label>
                                    <input type="number" name="rate" className="form-control inp" value={itemCostCurrentRowData && itemCostCurrentRowData.rate ? itemCostCurrentRowData.rate : 0 } readOnly />
                                </>
                                <>
                                    <label htmlFor="consqty" style={{ fontSize: '1rem' }} className="form-label labl labl2">Cons.Qty</label>
                                    {
                                        isFreshOpen === true ? (<input type="number" name="consqty" className="form-control inp" value={ bomPerQty ? bomPerQty : 0} readOnly />) : ( <input type="number" name="consqty" className="form-control inp" value={itemCostCurrentRowData && itemCostCurrentRowData.prodavgqty || itemCostCurrentRowData.consqty && bomPerQty ? bomPerQty : 0} readOnly />)
                                    }
                                   
                                </>
                                <>
                                    <label htmlFor="consuom" style={{ fontSize: '1rem' }} className="form-label labl labl2">Cons. Uom</label>
                                    {
                                        isFreshOpen === true ? (<input type="text" name="consuom" className="form-control inp" value={consuom && consuom.label ? consuom.label : null} readOnly />) : ( <input type="text" name="consuom" className="form-control inp" value={itemCostCurrentRowData && itemCostCurrentRowData.consuom && itemCostCurrentRowData.consuom.label ? itemCostCurrentRowData.consuom.label : null } readOnly />)
                                    }
                                   
                                </>
                                <>
                                    <label htmlFor="cost" style={{ fontSize: '1rem' }} className="form-label labl labl2">Cost</label>
                                    {
                                        isFreshOpen === true ? (<input type="number" name="cost" className="form-control inp" value={conscost ? conscost : 0} readOnly />) : (<input type="number" name="cost" className="form-control inp" value={itemCostCurrentRowData && itemCostCurrentRowData.cost ? itemCostCurrentRowData.cost : 0} readOnly />)
                                    }
                                   
                                </>
                            </span>
                            {/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
                        </div>

                        <div className="col-12">
                            <span className="d-flex justify-content-end col-4 mr-0">
                                <button className="btn btn-info p-2 m-2">Calculate</button>
                                <button className="btn btn-success p-2 m-2">OK</button>
                                <button className="btn btn-warning p-2 m-2" onClick={closeItemCostDet}>Quit</button>
                            </span>
                        </div>


                    </div>
                </div>
            </Modal>
        </div>
    )


}
