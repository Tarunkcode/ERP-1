import * as React from 'react';


class AssortmentMaster extends React.Component {
    render() {
        return (
            <div className="firstDiv">
                <div className="row row-content card containet-fluid col-12 p-0" >
                        <div className="row row-header card-title col-sm-12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',   backgroundColor:       '#8389d4', margin: '0', padding: '0' }}>
                        
                            <span style={{
                                fontSize: '15px', color: 'white', padding: '0',
                                margin: '0'
                            }}>Add Material Dispatch</span>
                        
                        </div>
                        <div className="col-12 card-body d-flex row-body">
                            <>
                                <label htmlFor="sizeSet" className="form-label labl" style={{ fontSize: '0.8rem'}}>Size Set</label>
                                <input type="text" className="form-control inp" name="sizeSet"/>
                            </>
                        
                            <>
                                <label htmlFor="noOfSizes" className="form-label labl ml-3" style={{ fontSize: '0.8rem'}}>No. Of Sizes</label>
                                <input type="text" className="form-control inp" name="noOfSizes"/>
                            </>
                         </div>

                </div>
                <div className="btn-group col-12 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0">Save</button>
                    <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} className="btn btn-success mr-2 ml-2 pl-0 pr-0 ">Save & Submit</button>
                    <button type="button" style={{ border: '2px solid red', letterSpacing: 3 }} className="btn btn-danger pl-0 pr-0">Quit</button>
                </div>
            </div>
            
            );
    }
}

export default AssortmentMaster;