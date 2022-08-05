import * as React from 'react';


export default function AddListForm() {
    return (
        <>
            < div className="modal fade" id="form" role="dialog" aria-labelledby="qcPlanModalLabel" aria-hidden="true" >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="qcPlanLabel">QC Plan Copy Details</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">

                        <>
                            <label style={{ margin: '0 0 0 10px', padding: '0', fontSize: '14px' }} className="form-label col-12" htmlFor="material">Material</label>
                            <input className="form-control col-12 p-0" type="text" name="material" />
                        </>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">Copy</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div >

        </>
    )
}