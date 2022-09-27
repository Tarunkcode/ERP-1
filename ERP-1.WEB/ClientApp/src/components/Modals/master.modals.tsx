import * as React from 'react';
import CustomInput from '../custom-input/custom-input.component';
import Modal from 'react-modal';

const customStyles = {
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

  $(Modal).on('keydown', 'input, select', function (e) {
        if (e.key === "Enter") {
            var self = $(this), form = self.parents('form:eq(0)'), focusable, next;
            focusable = form.find('input,a,select,button,textarea').filter(':visible');
            next = focusable.eq(focusable.index(this) + 1);
            if (next.length) {
                next.focus();
            } else {
                form.submit();
            }
            return false;
        }
    });
 var subtitle: any;
function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
}

export function HiddenModal() {
    return (
        <>
            <svg className="m-0 ml-1 p-0" type="button" style={{ width: '20px', cursor: 'pointer', visibility: 'hidden' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M120 256c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm160 0c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm104 56c-30.9 0-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56s-25.1 56-56 56z" /></svg>
        </>
        )
}

export function SeriesMasterModal() {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <>
            <svg className="m-0 ml-1 p-0" type="button" onClick={openModal} style={{ width: '20px', cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M120 256c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm160 0c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm104 56c-30.9 0-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56s-25.1 56-56 56z" /></svg>
        
           <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <span className="row row-content d-flex section2 col-sm-12">
                            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Series Master</h2>

                            <svg className="m-0 ml-1 p-0" type="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={closeModal} style={{ width: '20px', cursor: 'pointer'}}><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z" /></svg>
                        </span>
                        <hr />
                        <form>
                            <span className="row row-content d-flex section2 col-sm-12">
                                <>
                                    <label htmlFor="seriesT" style={{ fontSize: '0.8em' }} className="form-label mr-2 col-2">Series Type</label>
                                    <input type="text" name="seriesT" className="form-control col-3 mr-5" title="filled series type" />

                                </>
                                <>
                                    <label htmlFor="tranMas" style={{ fontSize: '0.8em' }} className="form-label mr-2 col-2">Tran./Master</label>
                                    <input type="text" name="tranMas" className="form-control col-3" title="Enter Transaction/ Master" />

                                </>
                            </span>

                            <span className="row row-content d-flex section2 col-sm-12">
                                <>
                                    <label htmlFor="locSeries" style={{ fontSize: '0.8em' }} className="form-label mr-2 col-2">Local Series</label>
                                    <input type="text" name="locSeries" className="form-control col-3 mr-5" title="filled Local series" />

                                </>
                                <>
                                    <label htmlFor="noTypes" style={{ fontSize: '0.8em' }} className="form-label mr-2 col-2">No. Type</label>
                                    <input type="text" name="noTypes" className="form-control col-3" title="Enter Number Type" />

                                </>
                            </span>

                            <span className="row row-content d-flex section2 col-sm-12">
                                <>
                                    <label htmlFor="noLength" style={{ fontSize: '0.8em' }} className="form-label mr-2 col-2">No.Length</label>
                                    <input type="text" name="noLength" className="form-control col-3 mr-5" title="Enter Number Length" />

                                </>
                                <>
                                    <label htmlFor="allowBackDate" style={{ fontSize: '0.8em' }} className="form-label mr-2 col-2">Allowed Back Date</label>
                                    <input type="text" name="allowBackDate" className="form-control col-3" title="Allowed Back Date" />

                                </>
                            </span>

                            <span className="row row-content d-flex section2 col-sm-12">
                                <>
                                    <label htmlFor="rearrangeNo" style={{ fontSize: '0.8em' }} className="form-label mr-2 col-2">Rearrange No.</label>
                                    <input type="text" name="rearrangeNo" className="form-control col-3 mr-5" title="Rearrange Number" />

                                </>

                            </span>

                            <span className="row row-content d-flex section2 col-sm-12">
                                <>
                                    <label htmlFor="prefix" style={{ fontSize: '0.8em' }} className="form-label mr-2 col-2">Prefix<span style={{ color: 'red', fontSize: '10px', fontWeight: 'bolder' }}>(4 Char)</span></label>
                                    <input type="text" name="prefix" className="form-control col-3 mr-5" title="Enter Prefix" />

                                </>
                                <>
                                    <label htmlFor="suffix" style={{ fontSize: '0.8em' }} className="form-label mr-2 col-2">Suffix</label>
                                    <input type="text" name="suffix" className="form-control col-3" title="Enter Suffix" />

                                </>
                            </span>

                            <span className="row row-content d-flex section2 col-sm-12">
                                <>
                                    <label htmlFor="startingNo" style={{ fontSize: '0.8em' }} className="form-label mr-2 col-2">Starting No.</label>
                                    <input type="text" name="startingNo" className="form-control col-3 mr-5" title="Enter Starting Number" />

                                </>
                                <>
                                    <label htmlFor="unitPrice" style={{ fontSize: '0.8em' }} className="form-label mr-2 col-2">Unit Print</label>
                                    <input type="text" name="unitPrice" className="form-control col-3" title="Enter Unit Price" />

                                </>
                            </span>

                            <span className="row row-content d-flex section2 col-sm-12 mt-3 mb-3">
                                <>
                                    <label htmlFor="usedFor" style={{ fontSize: '0.8em' }} className="form-label mr-2 col-2">Used For</label>

                                    <input type="text" name="usedFor" className="col-7 row-4" title="Used for" />
                                </>

                            </span>


                            <span className="row row-content d-flex section2 col-sm-12">
                                <>
                                    <label htmlFor="stk" style={{ fontSize: '0.8em' }} className="form-label mr-2 col-4">Configure STK Material Center</label>
                                    <input type="text" name="stk" className="form-control col-3 mr-6" title="filled Configure STK Material Center" />
                                </>
                            </span>
                            <span className="row row-content d-flex section2 col-sm-12">
                                <>
                                    <label htmlFor="zeroVal" style={{ fontSize: '0.8em' }} className="form-label mr-2 col-4">Allowed Zero Value</label>
                                    <input type="text" name="zeroVal" className="form-control col-3 mr-6" title="filled Allowed Zero Value" />
                                </>
                            </span>
                            <span className="row row-content d-flex section2 col-sm-12">
                                <>
                                    <label htmlFor="isBlock" style={{ fontSize: '0.8em' }} className="form-label mr-2 col-4">is Block</label>
                                    <input type="text" name="isBlock" className="form-control col-3 mr-6" title="filled is Block" />
                                </>
                            </span>
                            <span className="row row-content d-flex section2 col-sm-12">
                                <>
                                    <label htmlFor="process" style={{ fontSize: '0.8em' }} className="form-label mr-2 col-4">Process</label>
                                    <input type="text" name="process" className="form-control col-3 mr-6" title="filled Process" />
                                </>
                            </span>
                            <span className="row row-content d-flex section2 col-sm-12 mt-3 justify-content-end">
                                <button className="col-3 btn btn-sm btn-success mr-3">Save</button>
                                <button className="col-3 btn btn-sm btn-danger">Quit</button>
                            </span>
                        </form>
            </Modal>
        </>
        )
}

export function StockMasterModal() {
    const [open, setOpen] = React.useState(false);
    function openStockDetailsModal() {
        setOpen(true);
    }
    function closeStockDetailsModal() {
        setOpen(false);
    }
    return (
        <>
            <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} onClick={openStockDetailsModal} className="btn btn-success mr-2 ml-2 pl-0 pr-0">Save & Submit</button>
            <Modal
                isOpen={open}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeStockDetailsModal}
                style={customStyles}
                contentLabel="Material Center Wise Opening Stock Details"
            >
                <span className="row row-content d-flex section2">
                    <h4 className="col-8 text-center" ref={(_subtitle) => (subtitle = _subtitle)}>Material Center Wise Opening Stock Details</h4>

                    <svg className="m-0 ml-5 p-0" type="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={closeStockDetailsModal} style={{ width: '20px', cursor: 'pointer' }}><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z" /></svg>
                </span>

                <hr />
                <div className="text-center">
                    <div style={{ color: 'green', fontSize: '20px', fontWeight: 'bolder' }} className="col-12">{`Item :${"test"}`}</div>
                    <div style={{ color: 'green', fontSize: '20px', fontWeight: 'bolder' }} className="col-12">{`Op. Stock :${"----- Dozen (Rs. ----)"}`}</div>

                </div>
                <table id="dtHorizontalExample" className="table table-striped table-bordered table-sm">
                    <thead>
                        <tr>
                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>S.No</th>
                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Material Center</th>
                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Quantity (Dozen)</th>
                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Amount</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td></td>
                            <td></td>
                            <td></td>

                        </tr>
                        <tr>
                            <th>2</th>
                            <td></td>
                            <td></td>
                            <td></td>

                        </tr>
                        <tr>
                            <th>3</th>
                            <td></td>
                            <td></td>
                            <td></td>

                        </tr>

                    </tbody>
                </table>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-secondary" type="submit">Ok</button>

                </div>
            </Modal>

        </>
        )
}

export function CustomerGroupModal() {
    const [cgopen, setcgOpen] = React.useState(false);
    function openCustomerGroupModal() {
        setcgOpen(true);
    }

    function closeCustomerGroupModal() {
        setcgOpen(false);
    }
    return (
        <>
            <svg className="m-0 ml-1 p-0" type="button" onClick={openCustomerGroupModal} style={{ width: '20px', cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M120 256c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm160 0c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm104 56c-30.9 0-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56s-25.1 56-56 56z" /></svg>
            <Modal
                isOpen={cgopen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeCustomerGroupModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <span className="row row-content d-flex section2 col-sm-12">
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Customer Group Details</h2>

                    <svg className="m-0 ml-1 p-0" type="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={closeCustomerGroupModal} style={{ width: '20px', cursor: 'pointer' }}><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z" /></svg>
                </span>
                <hr />
                <form>

                    <span className="row row-content d-flex section2 col-sm-12">
                        <CustomInput name="grpName" ipType="text" label="Group Name" ipTitle="Enter Group Name" dataArray={[]} />
                    </span>
                    <span className="row row-content d-flex section2 col-sm-12">
                        <CustomInput name="alias" ipType="text" label="Alias" ipTitle="Enter Alias" dataArray={[]} />
                    </span>
                    <span className="row row-content d-flex section2 col-sm-12">
                        <CustomInput name="pntGrp" ipType="text" label="Print Group" ipTitle="Enter Print Group" dataArray={[]} />
                        <CustomInput name="isExport" ipType="text" label="Is Export" ipTitle="is Export" dataArray={[]} />
                    </span>
                    <span className="row row-content d-flex section2 col-sm-12">
                        <CustomInput name="undGrp" ipType="text" label="Under Group" ipTitle="Enter Under Group" dataArray={[]} />
                    </span>
                    <span className="row row-content d-flex section2 col-sm-12">
                        <CustomInput name="freeze" ipType="checkbox" label="Freeze" ipTitle="is Freeze" dataArray={[]} />
                    </span>
                </form>
            </Modal>
        </>
        )
}

export function DelTermsModal() {
    const [delOpen, setdelOpen] = React.useState(false);
    function openDelTermsModal() {
        setdelOpen(true);
    }

    function closedelTermsModal() {
        setdelOpen(false);
    }
    return (
        <>
            <svg className="m-0 ml-1 p-0" type="button" onClick={openDelTermsModal} style={{ width: '20px', cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M120 256c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm160 0c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm104 56c-30.9 0-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56s-25.1 56-56 56z" /></svg>
            <Modal
                isOpen={delOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closedelTermsModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <span className="row row-content d-flex section2 col-sm-12">
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Add Delivery Term</h2>

                    <svg className="m-0 ml-1 p-0" type="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={closedelTermsModal} style={{ width: '20px', cursor: 'pointer' }}><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z" /></svg>
                </span>
                <hr />
                <form>

                    <span className="row row-content d-flex section2 col-sm-12">
                        <CustomInput name="grpName" ipType="text" label="Delivery Term" ipTitle="Enter Delivery Terms" dataArray={[]} />
                    </span>
                    <span className="row row-content d-flex section2 col-sm-12">
                        <CustomInput name="alias" ipType="text" label="Description" ipTitle="Enter Alias" dataArray={[]} />
                    </span>
                    <span className="row row-content d-flex section2 col-sm-12">
                        <CustomInput name="pntGrp" ipType="text" label="Due Days" ipTitle="Enter Print Group" dataArray={[]} />
                        <CustomInput name="isExport" ipType="text" label="CIF" ipTitle="is Export" dataArray={[]} />
                    </span>
                    <span className="row row-content d-flex section2 col-sm-12 mt-3 justify-content-end">
                        <button className="col-3 btn btn-sm btn-success mr-3">Save</button>
                        <button className="col-3 btn btn-sm btn-danger">Quit</button>
                    </span>
                </form>
            </Modal>

        </>
        )
}

export function PayTermsModal() {
    const [payOpen, setpayOpen] = React.useState(false);
    function openPayTermsModal() {
        setpayOpen(true);
    }
    function closepayTermsModal() {
        setpayOpen(false);
    }

    return (
        <>
            <svg className="m-0 ml-1 p-0" type="button" onClick={openPayTermsModal} style={{ width: '20px', cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M120 256c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm160 0c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm104 56c-30.9 0-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56s-25.1 56-56 56z" /></svg>
            <Modal
                isOpen={payOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closepayTermsModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <span className="row row-content d-flex section2 col-sm-12">
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>PayTerms Details</h2>

                    <svg className="m-0 ml-1 p-0" type="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={closepayTermsModal} style={{ width: '20px', cursor: 'pointer' }}><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z" /></svg>
                </span>
                <hr />
                <form>

                    <span className="row row-content d-flex section2 col-sm-12">
                        <CustomInput name="payTerms" ipType="text" label="Payment Term" ipTitle="Enter Payment Term" dataArray={[]} />
                    </span>
                    <span className="row row-content d-flex section2 col-sm-12">
                        <CustomInput name="desc" ipType="text" label="Description" ipTitle="Enter Description" dataArray={[]} />
                    </span>
                    <span className="row row-content d-flex section2 col-sm-12">
                        <CustomInput name="disStructure" ipType="text" label="Discount Structure" ipTitle="Enter Discount Structure" dataArray={[]} />
                        <CustomInput name="freeze" ipType="checkbox" label="Freeze" ipTitle="Freeze if Yes then Check" dataArray={[]} />
                    </span>
                    <span className="row row-content d-flex section2 col-sm-12">
                        <CustomInput name="dueDays" ipType="number" label="Due Days" ipTitle="Enter Due Days" dataArray={[]} />
                    </span>
                    <span className="row row-content d-flex section2 col-sm-12">
                        <CustomInput name="advPatment" ipType="textbox" label="Advance Payment" ipTitle="is Advance Payment" dataArray={[]} />
                    </span>
                    <span className="row row-content d-flex section2 col-sm-12 mt-3 justify-content-end">
                        <button className="col-3 btn btn-sm btn-success mr-3">Save</button>
                        <button className="col-3 btn btn-sm btn-danger">Quit</button>
                    </span>
                </form>
            </Modal>
        </>
        )
}

