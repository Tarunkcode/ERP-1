import * as React from 'react';

import BOMModals_layer2 from '../Modals/BOM_Modals(II layer)';
import Modal from 'react-modal';
import WriteGrid from '../Grid Component/grid.component';
import { MasterInput2 } from '../custom-input/custom-input.component';

const customStyles = {
    content: {
        top: '54%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '95%',
        height:'90%'
    },
};
//const customStyles2 = {
//    content: {
//        top: '50%',
//        left: '50%',
//        right: 'auto',
//        bottom: 'auto',
//        marginRight: '-50%',
//        transform: 'translate(-50%, -50%)',
//        width: '60%'
//    },
//};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
/*Modal.setAppElement('#button');*/

export default function QcIncomingModals({ isItemBox, setIsItemBox, ...props }: any) {
    let subtitle: any;

    let ColDef: any[] = [{ field: "srno", headerName: 'Sr. No.', minWidth: 200 },
        { field: "ti", headerName: 'Test Items', minWidth: 200 },
        { field: "parameter", headerName: 'Parameter', minWidth: 400 },
        { field: "sp", headerName: 'Sampling Type', minWidth: 250 },
        { field: "target", headerName: 'Target', minWidth: 250 },
        { field: "lv", headerName: 'Lower Value', minWidth: 250 },
        { field: "uv", headerName: 'Upper Value', minWidth: 250 },
        { field: "remark", headerName: 'Remart', minWidth: 250 },
        { field: "av", headerName: 'Actual Value', minWidth: 250 },
        { field: "result", headerName: 'Result', minWidth: 250 },
        { field: "ur", headerName: 'User Remark', minWidth: 250 },
    ]



    const rawData: any[] = [{ srno: null }, { ti: null }, { itn: null }, { rate: null }, { consQty: null }, { uom1: null }, { prdQty: null }, { uom2: null }, { cst: null }, { altItm: null }];



    let ColDef2: any[] = [{ field: "srno", headerName: 'Sr. No.', minWidth: 100 }, { field: "itc", headerName: 'Item Code', minWidth: 200 }, { field: "itn", headerName: 'Item Name', minWidth: 400 }, { field: "qty", headerName: 'Quantity', minWidth: 200 }, { field: "uom", headerName: 'UOM', minWidth: 200 }, { field: "rate", headerName: 'Rate', minWidth: 200 }]


    const rawData2: any[] = [{ srno: null }, { itc: null }, { itn: null }, { qty: null }, { uom: null }, { rate: null }]

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }


    function closeBOMCopy() {
        setIsItemBox(false);
    }

   

    //var [isItemCost, setIsItemCost]: any = React.useState(false)
    //const OpenItemCost = (e: any) => {
    //    if (e.key === 'Enter') setIsItemCost(true)
    //}
    return (
        <>

            <Modal
                isOpen={isItemBox}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeBOMCopy}
                style={customStyles}
                contentLabel="Qc Incoming Material Approval"
            >
                <span className="row row-content d-flex section2 col-sm-12">
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}> Qc Incoming Material Approval</h2>
                    <svg className="m-0 ml-1 p-0" type="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={closeBOMCopy} style={{ width: '20px', cursor: 'pointer' }}><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z" /></svg>
                </span>
                <hr />


                <div className="card-body row col-sm-12 m-0 p-0" >

                    <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">

                        <div className="card-body" style={{ margin: '0', padding: '0' }}>
                            <form className="form">
                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="qcsrno" label="QC Sr No." ipTitle="Enter QC Sr No." ipType="text" classCategory="form-control col-4 inp" />

                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="date" label="Date" ipTitle="Enter date" ipType="date" classCategory="form-control col-4 inp" />


                                </span>


                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 name="pon" label="Purchase Order No" ipTitle="Enter Purchase Order No" ipType="text" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="billno" label="Bill No" ipTitle="Enter Bill No" ipType="text" classCategory="form-control col-4 inp" />
                                </span>



                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 name="bd" label="Bill Date" ipTitle="Enter Bill Date" ipType="date" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="uom" label="UOM" ipTitle="Enter Uom" ipType="text" classCategory="form-control col-4 inp" />
                                </span>

                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 name="supp-name" label="Supplier Name" ipTitle="Enter Supplier Name" ipType="text" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="grn" label="GRN Number" ipTitle="Enter GRN Number" ipType="text" classCategory="form-control col-4 inp" />

                                </span>

                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 name="md" label="Model No" ipTitle="Enter Item Code" ipType="text" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="desc" label="Description" ipTitle="Enter Description" ipType="text" classCategory="form-control col-4 inp" />

                                </span>
                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 name="md" label="Model No" ipTitle="Enter Model No" ipType="text" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="grn-qty" label="GRN Qty" ipTitle="Enter GRN Qty" ipType="text" classCategory="form-control col-4 inp" />
                                </span>

                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 name="process-qty" label="Processed Qty" ipTitle="Enter Processed Qty" ipType="text" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="mc" label="Material Center" ipTitle="Enter Material Center" ipType="text" classCategory="form-control col-4 inp" />

                                </span>

                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 name="balance" label="Balance" ipTitle="Enter Balance" ipType="text" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="series" label="Series" ipTitle="Enter Series" ipType="text" classCategory="form-control col-4 inp" />

                                </span>

                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 name="batch" label="Batch No" ipTitle="Enter Batch No" ipType="text" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="prqty" label="Passed/Rejected Qty" ipTitle="Enter Passed/Rejected Qty" ipType="text" classCategory="form-control col-4 inp" />

                                </span>

                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 name="fr" label="Final Result" ipTitle="Enter Final Result" ipType="text" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="sq" label="Sample Qty" ipTitle="Enter Sample Qty" ipType="text" classCategory="form-control col-4 inp" />

                                </span>

                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 name="color" label="Color" ipTitle="Enter Color" ipType="text" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="size" label="Size" ipTitle="Enter Size" ipType="text" classCategory="form-control col-4 inp" />

                                </span>


                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 name="qcdate" label="QC Date" ipTitle="Enter QC Date" ipType="date" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="rots" label="Reliability of the Sample" ipTitle="Enter Reliability of the Sample" ipType="text" classCategory="form-control col-4 inp" />

                                </span>

                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 name="ubill" label="Upload Bill" ipTitle="Enter Upload Bill" ipType="file" classCategory="col-4 uploaddoc" />

                                </span>


                            </form>

                        </div>

                    </div>

                    <div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">
                        <WriteGrid title="" titleClr="blue" OpenSubLayer={() => { }} colDef={ColDef} data={rawData} />
                    </div>
                

                <span className="d-flex section2 col-sm-12 mb-2">
                    <label htmlFor="s1" style={{ fontSize: '1em' }} className="form-label mr-2 ml-2 labl labl2">Remark</label>
                    <textarea name="s1" style={{ borderColor: '#86a4c3' }} placeholder="Enter Remark" rows={2} cols={7} className="form-control col-10 subMaster" />
                    </span>
                    <span className="d-flex section2 col-sm-12">

                        <MasterInput2 name="ureport" label="Upload Report" ipTitle="Enter Upload Report" ipType="file" classCategory="col-4 uploaddoc" />

                    </span>

                </div>

                <div className="btn-group col-4 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', float: 'right' }}>
                    <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info mr-2 pl-0 pr-0">Save</button>
                    <button type="button" style={{ border: '2px solid orange', letterSpacing: 3 }} className="btn btn-warning pl-0 pr-0">Quit</button>
                </div>

            </Modal>





        </>
    )


}
