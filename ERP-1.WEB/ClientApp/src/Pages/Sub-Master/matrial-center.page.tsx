import * as React from 'react';
import { useLocation } from 'react-router';
import { CustomSelect, InputList, MasterInput } from '../../components/custom-input/custom-input.component';
import { store2 } from '../../Redux/config/config.reducer';

export default function MatCentre({ HandleIpSelect, defaultData, getMasterType, pageTitle, configType, handleChange, handlePosting }: any) {
    const Ulist = [{ code: 1, name: "Raw Material Store" }, { code: 2, name: 'Finish Good Store' }, { code: 3, name: 'Semi Finish Good Store' }, { code: 4, name: 'Production Floor' }, { code: 5, name: 'General Store' }, { code: 6, name: 'Scrap Store' }];
    React.useEffect(() => {
        configType == '4' ? getMasterType(22) : null;
        console.log('def',defaultData)
    }, [defaultData])
    return (
        <div className="main card firstDiv">
            <div className="card-title mb-2 col-12 text-center" style={{ margin: '0 auto' }}>
                <span style={{ fontSize: "20px" }}>{pageTitle}</span>
            </div>
            <div className="card-body" style={{ margin: '0', padding: '0', minHeight: '80vh' }}>
                <div className="form">

                    <span className="d-flex flex-column section2 col-sm-12">

                        <MasterInput defaultt={defaultData.name} label="Name" name="name" ipType="text" ipTitle="" handleChange={handleChange} classCategory="form-control col-4 subMaster" />
                        <MasterInput defaultt={defaultData.codeStr} label="Alias" name="codeStr" ipType="text" ipTitle="Enter Print Name" handleChange={handleChange} classCategory="form-control col-4 subMaster" />

                        <MasterInput defaultt={defaultData.printName } label="Print Name" name="printName" ipType="text" ipTitle="Enter Print Name" handleChange={handleChange} classCategory="form-control col-4 subMaster" />


                        <InputList
                            label="Type"
                            name="c1"
                            ipType="text"
                            ipTitle=""
                            dataArray={Ulist}
                            change={HandleIpSelect}
                            lablCat="form-label labl labl2"
                            classCategory="form-control inp col-12 mb-2 subMaster ipselect"
                            default={Ulist.findIndex((x: any) => x.code === defaultData.c1)}
                            placeholder="Select Type"
                            s=""
                            id="c1"
                        />

                        <MasterInput defaultt={defaultData.s1} label="Address" name="s1" ipType="text" ipTitle="Enter Address - 1" handleChange={handleChange} classCategory="form-control col-4 subMaster" />
                        <MasterInput defaultt={ defaultData.s2}label="" name="s2" ipType="text" ipTitle="Enter Address - 2" handleChange={handleChange} classCategory="form-control col-4 subMaster mt-1" />
                        <MasterInput defaultt={defaultData.s3 } label="" name="s3" ipType="text" ipTitle="Enter Address - 3" handleChange={handleChange} classCategory="form-control col-4 subMaster mt-1" />
                        <MasterInput defaultt={defaultData.s4 } label="" name="s4" ipType="text" ipTitle="Enter Address - 4" handleChange={handleChange} classCategory="form-control col-4 subMaster mt-1" />
                    </span>

                </div>


                <button className="btn btn-danger p-2 m-3" onClick={handlePosting}>Save</button>


            </div>
        </div>
        )
}