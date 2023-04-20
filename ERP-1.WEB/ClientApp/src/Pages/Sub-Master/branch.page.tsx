import * as React from 'react';

import {  MasterInput2 } from '../../components/custom-input/custom-input.component';
import AutoComp from '../../components/custom-input/droplist/droplist.component';



export default function Branch_Page({ defaultData, UgList, handlePosting, handleChange, getMasterType, pageTitle, collectSelectedItem,...otherProps }: any) {
    React.useEffect(() => {

        getMasterType(1019)
    }, [])
    return (
        <div className="main card firstDiv">
            <div className="card-title mb-2 col-12 text-center" style={{ margin: '0 auto' }}>
                <span style={{ fontSize: "20px" }}>{pageTitle}</span>
            </div>
            <div className="card-body" style={{ margin: '0', padding: '0', minHeight: '80vh' }}>
                <form className="form" id="form">

                    <span className="d-flex section2 col-sm-12">

                        <AutoComp name="c1" label="Bank" defaultt={defaultData ? defaultData.c1 : ''} ipTitle="Select Role" list={UgList} classCategory="form-control col-4 inp str" collect={collectSelectedItem}/>

                    </span>
                    <span className="d-flex section2 col-sm-12">
                        <MasterInput2 label="Branch" name="name" defaultt={defaultData.name} ipType="text" ipTitle="" handleChange={handleChange} classCategory="form-control inp col-4 subMaster" />
                    </span>
                    <span className="d-flex section2 col-sm-12">
                        <MasterInput2 label="Address" name="s2" defaultt={defaultData.s2} ipType="text" ipTitle="" handleChange={handleChange} classCategory="form-control inp col-4 subMaster" />
                    </span>
                    <span className="d-flex section2 col-sm-12">
                        <MasterInput2 label="Phone No." name="s3" defaultt={defaultData.s3} ipType="number" ipTitle="" handleChange={handleChange} classCategory="form-control inp col-4 subMaster" />
                    </span>

                </form>

                <div className="d-flex justify-content-center">
                    <button className="btn btn-success col-md-1 p-1 m-3" onClick={handlePosting}>Save</button>
                </div>

            </div>
        </div>
    )
}