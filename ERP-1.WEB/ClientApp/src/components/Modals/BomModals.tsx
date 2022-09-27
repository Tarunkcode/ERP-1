import * as React from 'react';


import Modal from 'react-modal';

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

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
/*Modal.setAppElement('#button');*/

export default function BOMModals({ isBOMAlt, isBOMProcess, isBOMRouting, ...props }: any) {
    let subtitle: any;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [bomRouting, setBomRouting] = React.useState(false);
    const [bomProcess, setBomProcess] = React.useState(false);
   

    function openBOMAlt() {
        setIsOpen(true);
    }
      function openBOMProcess() {
          setBomRouting(true);
    }
    function openBOMRouting() {
        setBomProcess(true);
    }
    
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeBOMAlt() {
        setIsOpen(false);
    }
    function closeBOMProcess() {
        setBomProcess(false);

    }
    function closeBOMRouting() {
        setBomRouting(false);
    }



    return (
        <>
            {isBOMAlt ?( <button type="button" onClick={openBOMAlt}>...</button>): null}
            {isBOMProcess? (<button type="button" onClick={openBOMProcess}>...</button>) : null}
            {isBOMRouting ? (<button type="button" onClick={openBOMRouting}>...</button>) : null}
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeBOMAlt}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <span className="row row-content d-flex section2 col-sm-12">
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>BOM Alternate Item </h2>
                    <svg className="m-0 ml-1 p-0" type="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={closeBOMAlt} style={{ width: '20px', cursor: 'pointer' }}><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z" /></svg>
                </span>
                <hr />
                <div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">
                    <div className="card-body col-sm-12 addCustomer container container-fluid container-lg" style={{ overflowX: 'auto', overflowY: 'auto' }}>

                       
                            <span className="card-title" style={{ fontSize: '15px', margin: '0', padding: '0' }}>Route Details</span>

                        <table id="dtHorizontalExample" className="table table-striped table-bordered table-sm" style={{
                            width: "100%"
                        }}>
                            <thead>
                                <tr>
                                    <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Item COde</th>
                                    <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Description</th>
                                    <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Parameter 1</th>
                                    <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Parameter 2</th>
                                    <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Parameter 3</th>
                                    <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Source</th>
                                    <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Rate</th>
                                    <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Cons. Qty</th>
                                    <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>UoM</th>
                                    <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Produce Qty (Avg.)</th>
                                    <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Cost</th>
                                    <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Alt UoM</th>
                                    <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>ConsQty</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>2</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>3</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </Modal>


          

            <Modal
                isOpen={bomProcess}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeBOMProcess}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <span className="row row-content d-flex section2 col-sm-12">
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}> BOM Process Item Details</h2>
                    <svg className="m-0 ml-1 p-0" type="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={closeBOMProcess} style={{ width: '20px', cursor: 'pointer' }}><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z" /></svg>
                </span>
                <hr />
               
            </Modal>



            <Modal
                isOpen={bomRouting}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeBOMRouting}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <span className="row row-content d-flex section2 col-sm-12">
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>BOM Routing Other Produce Item Details </h2>
                    <svg className="m-0 ml-1 p-0" type="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={closeBOMRouting} style={{ width: '20px', cursor: 'pointer' }}><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z" /></svg>
                </span>
                <hr />
                <div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">
                    <div className="card-body col-sm-12 addCustomer container container-fluid container-lg" style={{ overflowX: 'auto', overflowY: 'auto' }}>

                            <span className="card-title" style={{ fontSize: '15px', margin: '0', padding: '0' }}>Produce Other Iten Details</span>
                    
                        <table id="dtHorizontalExample" className="table table-striped table-bordered table-sm" style={{
                            width: "100%"
                        }}>
                            <thead>
                                <tr>
                                    <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>S.No</th>
                                    <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Item Code</th>
                                    <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}> Item Name</th>
                                    <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Quantity</th>
                                    <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>UOM</th>
                                    <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Process Dep.</th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    
                                </tr>
                                <tr>
                                    <th>2</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    
                                </tr>
                                <tr>
                                    <th>3</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </Modal>
        </>
    )


}
