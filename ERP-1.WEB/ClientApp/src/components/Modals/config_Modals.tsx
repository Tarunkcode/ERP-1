import * as React from 'react';

import Modal from 'react-modal';
import { CustomSelect, MasterInput } from '../custom-input/custom-input.component';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: 'auto'
    },
};


function ConfigModal({ isNumConf, isApprovalConf, isVoucherConf, isAddNew, getName, addNewSeries, handlePosting, handleChange, gettingCtype ,...otherProps }:any) {
    let subtitle: any;
    const [numConfIsOpen, setNumConfIsOpen] = React.useState(false);
    const [voucherConf, setVoucherConf] = React.useState(false);
    const [approvalConf, setApprovalConf] = React.useState(false);
    const [addNew, setAddNew] = React.useState(false);
    const handleAddNewSeriesChange =(e: any) => {
        var value = e.target.value;
        getName(value)
    }
    function openNumberConfig(e: any) {
        setNumConfIsOpen(true)
        gettingCtype(1);
      
    }
    function openApprovalConfig() {
        setApprovalConf(true)
    }
    function openVoucherConfig(e: any) {
        setVoucherConf(true)
        gettingCtype(2);
    }
    function openAddNew() {
        setAddNew(true)
    }
   function closeNumberConfig() {
       setNumConfIsOpen(false)
    }
    function closeApprovalConfig() {
        setApprovalConf(false)
    }
    function closeVoucherConfig() {
        setVoucherConf(false)
    }
    function closeAddNew() {
        setAddNew(false)
    }
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }
    return (
        <>
            {isNumConf ? (<button className="m-1 p-1 btn btn-primary col-12" type="button" onClick={openNumberConfig}>Number Config</button>) : null}
            {isApprovalConf ? (<button className="m-1 p-1 btn btn-secondary col-12" type="button" onClick={openApprovalConfig}>Approval Config</button>) : null}
            {isVoucherConf ? (<button className="m-1 p-1 btn btn-info col-12" type="button" onClick={openVoucherConfig}>Voucher Config</button>) : null}
            {isAddNew ? (<button className="m-1 p-1 btn btn-danger col-12" type="button" onClick={openAddNew}>Add New</button>) : null}
            <Modal
                isOpen={numConfIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeNumberConfig}
                style={customStyles}
                contentLabel="Number Configuration"
            >
                <span className="row row-content d-flex section2 col-sm-12">
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Series Number Configuration </h2>
                    <svg className="m-0 ml-1 p-0" type="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={closeNumberConfig} style={{ width: '20px', cursor: 'pointer' }}><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z" /></svg>
                </span>
                <hr />
                <div className="col-12">
                       <span className="d-flex section2 col-sm-6">
                        <>
                            <CustomSelect label="Numbering Type" name="NumberType" dataArray={[{ "code": 1, "name": "Automatic" }, { "code": 2, "name": "Manual" }]} handleChange={handleChange} classCategory="form-control col-7 seriesConf" />

                    </>
           
                    </span>
                       <span className="d-flex section2 col-sm-6">
                    <>
                            <CustomSelect label="Renumbering Frequency" name="ReNoReq" dataArray={[{ "code": 1, "name": "Daily" }, { "code": 2, "name": "Monthly" }, { "code": 3, "name": "Yealy" }]} handleChange={handleChange} classCategory="form-control col-7 seriesConf" />

                    </>
                    <>
                            <CustomSelect label="Embed Date in Vch.No." name="EmbDateVchNoReq" dataArray={[{ "code": 1, "name": "Not Required" }, { "code": 2, "name": "As Prefix" }, { "code": 3, "name": "As Suffix" }]} handleChange={handleChange} classCategory="form-control col-7 seriesConf"  />

                    </>
                     </span>
                       <span className="d-flex section2 col-sm-6">
                      <>
                            <MasterInput name="DateVchNoSep" label="Date & Vch.No.Separator" ipType="text" ipTitle="" handleChange={handleChange} classCategory="form-control col-7 seriesConf"  />
                    </>
                      <>
                            <MasterInput name="Prefix" label="Prefix" ipType="text" ipTitle="" handleChange={handleChange} classCategory="form-control col-7 seriesConf"  />
                    </>
                     </span>
                       <span className="d-flex section2 col-sm-6">
                      <>
                            <MasterInput name="Suffix" label="Suffix" ipType="text" ipTitle="" handleChange={handleChange} classCategory="form-control col-7 seriesConf"  />
                    </>
                      <>
                            <MasterInput name="StrtNo" label="Starting No" ipType="number" ipTitle="" handleChange={handleChange} classCategory="form-control col-7 seriesConf"  />
                    </>
                     </span>
                       <span className="d-flex section2 col-sm-6">
                      <>
                            <MasterInput name="SepcifyEndNo" label="Specify Ending No." ipType="number" ipTitle="" handleChange={handleChange} classCategory="form-control col-7 seriesConf"  />
                    </>
                    
                     </span>
                       <span className="d-flex section2 col-sm-6">
                      <>
                            <MasterInput name="EndingNo" label="Ending No." ipType="number" ipTitle="" handleChange={handleChange} classCategory="form-control col-7 seriesConf" />
                    </>
                      <>
                            <MasterInput name="WarnBeNoLeft" label="Warning before No.of Voucher Left" ipType="number" ipTitle="" handleChange={handleChange} classCategory="form-control col-7 seriesConf"  />
                    </>
                     </span>
                       <span className="d-flex section2 col-sm-6">
                      <>
                            <MasterInput name="MaintainBook" label="Maintain Book No." ipType="number" ipTitle="" handleChange={handleChange} classCategory="form-control col-7 seriesConf"  />
                    </>
                      <>
                            <MasterInput name="FixLenNo" label="Fix Length of Numeric Part" ipType="number" ipTitle="" handleChange={handleChange} classCategory="form-control col-7 seriesConf" />
                    </>
                     </span>
                       <span className="d-flex section2 col-sm-6">
                      
                      <>
                            <MasterInput name="LenOfNo" label="Total Length of Numeric Part" ipType="number" ipTitle="" handleChange={handleChange} classCategory="form-control col-7 seriesConf"  />
                        </>
                        <>
                            <MasterInput name="PadChar" label="Padding Character" ipType="text" ipTitle="" handleChange={handleChange} classCategory="form-control col-7 seriesConf"  />
                        </>
                     </span>
                <span className="d-flex section2 col-sm-6">
                   
                    <span/>
                    </span>
                    <button className="btn btn-primary col-2 float-right m-2 p-1" onClick={handlePosting}>Save</button>
                </div>
            </Modal>
            <Modal
                isOpen={voucherConf}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeVoucherConfig}
                style={customStyles}
                contentLabel="Voucher Series Configuration"
            >
                <span className="row row-content d-flex section2 col-sm-12">
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Series Voucher Configuration </h2>
                    <svg className="m-0 ml-1 p-0" type="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={closeVoucherConfig} style={{ width: '20px', cursor: 'pointer' }}><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z" /></svg>
                </span>
                <hr />
                <div className="col-12">
                  
                    <span className="d-flex section2 col-sm-6">
                        <>
                            <MasterInput name="NoOfOpt" label="No. Of Optional Fields" ipType="number" ipTitle="" handleChange={handleChange} classCategory="form-control col-7 seriesConf" />
                       
                        </>
                    </span>
                    <span className="d-flex section2 col-sm-6">
                        <>
                            <MasterInput name="ItemWDes" label="Item-wise Description" ipType="number" ipTitle="" handleChange={handleChange} classCategory="form-control col-7 seriesConf"  />
                        </>
                        <>
                            <MasterInput name="ItemWDis" label="Item-wise Discount" ipType="number" ipTitle="" handleChange={handleChange} classCategory="form-control col-7 seriesConf"  />
                        </>
                    </span>
                    <span className="d-flex section2 col-sm-6">
                        <>
                            <MasterInput name="TransportDet" label="Input Transporter Details" ipType="number" ipTitle="" handleChange={handleChange} classCategory="form-control col-7 seriesConf" />
                        </>
                        <>
                            <MasterInput name="AutoRnd" label="Auto Round Off Final Amt." ipType="number" ipTitle="" handleChange={handleChange} classCategory="form-control col-7 seriesConf"  />
                        </>
                    </span>
                    <span className="d-flex section2 col-sm-6">
                        <>
                            <MasterInput name="SendEmail" label="Send Email After Saving" ipType="number" ipTitle="" handleChange={handleChange} classCategory="form-control col-7 seriesConf"  />
                        </>
                       
                    </span>
                    <span className="d-flex section2 col-sm-6">
                        <>
                            <MasterInput name="ConsST" label="Consumable Stock Transfer" ipType="number" ipTitle="" handleChange={handleChange} classCategory="form-control col-7 seriesConf" />
                        </>
                        <>
                            <MasterInput name="TranToBranch" label="Transfer to Branch" ipType="number" ipTitle="" handleChange={handleChange} classCategory="form-control col-7 seriesConf" />
                        </>
                    </span>
                    <span className="d-flex section2 col-sm-6">
                        <>
                            <MasterInput name="EnblMC" label="Enable Material Center" ipType="number" ipTitle="" handleChange={handleChange} classCategory="form-control col-7 seriesConf"  />
                        </>
                        <>
                            <MasterInput name="FMC" label="From Material Center" ipType="number" ipTitle="" handleChange={handleChange} classCategory="form-control col-7 seriesConf"  />
                        </>
                    </span>
                    <span className="d-flex section2 col-sm-6">
                        <>
                            <MasterInput name="TMC" label="To Material Center" ipType="number" ipTitle="" handleChange={handleChange} classCategory="form-control col-7 seriesConf" />
                        </>
                        <span />
                    </span>
                    <button className="btn btn-primary col-2 float-right m-2 p-1" onClick={handlePosting}>Save</button>
                </div>
            </Modal>
            <Modal
                isOpen={approvalConf}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeApprovalConfig}
                style={customStyles}
                contentLabel="Approval Configuration"
            >
                <span className="row row-content d-flex section2 col-sm-12">
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Series Approval Configuration </h2>
                    <svg className="m-0 ml-1 p-0" type="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={closeApprovalConfig} style={{ width: '20px', cursor: 'pointer' }}><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z" /></svg>
                </span>
                <hr />
            </Modal>

            <Modal
                isOpen={addNew}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeAddNew}
                style={customStyles}
                contentLabel="Add New"
            >
                <span className="row row-content d-flex section2 col-sm-12">
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Add New Series</h2>
                    <svg className="m-0 ml-1 p-0" type="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={closeAddNew} style={{ width: '20px', cursor: 'pointer' }}><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z" /></svg>
                </span>
                <hr />
                <div>
                    <MasterInput label="Add Series" name="add" ipType="text" handleChange={handleAddNewSeriesChange} ipTitle="Add New Children to Series" classCategory="form-control col-7 seriesConf" />
                    <button className="btn btn-success col-6 m-2 p-1" onClick={addNewSeries}>Add It</button>
                </div>
            </Modal>
        </>
    )
}
export default ConfigModal;