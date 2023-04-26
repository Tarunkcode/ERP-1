import * as React from 'react';
import DatalistInput from 'react-datalist-input';
import 'react-datalist-input/dist/styles.css';
import { useLocation } from 'react-router';
import { CustomSelect, InputList, MasterInput, MasterInput2 } from '../../components/custom-input/custom-input.component';
import { store2 } from '../../Redux/config/config.reducer';

export default function MatCentre({ HandleIpSelect, defaultData, getMasterType, pageTitle, configType, handleChange, handlePosting }: any) {
    const Ulist = [{ code: 1, name: "Raw Material Store" }, { code: 2, name: 'Finish Good Store' }, { code: 3, name: 'Semi Finish Good Store' }, { code: 4, name: 'Production Floor' }, { code: 5, name: 'General Store' }, { code: 6, name: 'Scrap Store' }];
    React.useEffect(() => {
        configType == '4' ? getMasterType(22) : null;
        console.log('def', defaultData)
    }, [defaultData])
    return (
        <div className="main card firstDiv">
            <div className="card-title mb-2 col-12 text-center" style={{ margin: '0 auto' }}>
                <span style={{ fontSize: "" }}>{pageTitle}</span>
            </div>
            <div className="card-body" style={{ margin: '0', padding: '0', minHeight: '80vh' }}>
                <div className="form">



                    <span className="d-flex section2 col-sm-12">

                        <MasterInput2 defaultt={defaultData.codeStr} label="Code" name="codeStr" ipType="text" ipTitle="Enter Code" handleChange={handleChange} classCategory="form-control col-12  subMaster" />
                        <span className="col-1 m-0"></span>
                        <MasterInput2 defaultt={defaultData.name} label="Name" name="name" ipType="text" ipTitle="Enter Name" handleChange={handleChange} classCategory="form-control col-12  subMaster" />
                    </span>
                    <span className="d-flex section2 col-sm-12">
                        <MasterInput2 defaultt={defaultData.printName} label="Print Name" name="printName" ipType="text" ipTitle="Enter Print Name" handleChange={handleChange} classCategory="form-control col-12 subMaster" />

                        <span className="col-1 m-0"></span>



                        <>
                            <label htmlFor="series" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 labl2">Type</label>
                        </>
                        <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                            <DatalistInput

                                className="d-flex col-12 m-0 p-0"
                                inputProps={{ className: 'form-control inp col-12 datalist int', name: 'c1' }}
                                listboxProps={{ className: 'text-left mt-5' }}

                                onSelect={(item: any) => { console.log('id', item.id); }}
                                items={[]}
                            />

                        </span>
                    </span>
                    {/*<InputList*/}
                    {/*    label="Type"*/}
                    {/*    name="c1"*/}
                    {/*    ipType="text"*/}
                    {/*    ipTitle=""*/}
                    {/*    dataArray={Ulist}*/}
                    {/*    change={HandleIpSelect}*/}
                    {/*    lablCat="form-label labl labl2"*/}
                    {/*    classCategory="form-control inp col-12 mb-2 subMaster ipselect"*/}
                    {/*    default={Ulist.findIndex((x: any) => x.code === defaultData.c1)}*/}
                    {/*    placeholder="Select Type"*/}
                    {/*    s=""*/}
                    {/*    id="c1"*/}
                    {/*/>*/}

                    <span className="d-flex section2 col-sm-12">
                        <MasterInput2 defaultt={defaultData.s1} label="Address" name="s1" ipType="text" ipTitle="Enter Address" handleChange={handleChange} classCategory="form-control col-12 subMaster" />
                        <span className="col-1 m-0"></span>
                        <MasterInput2 defaultt={defaultData.s2} label="" name="s2" ipType="text" ipTitle="Enter Address" handleChange={handleChange} classCategory="form-control col-12 subMaster " />
                    </span>
                    <span className="d-flex section2 col-sm-12">
                        <MasterInput2 defaultt={defaultData.s3} label="" name="s3" ipType="text" ipTitle="Enter Address" handleChange={handleChange} classCategory="form-control col-12 subMaster " />
                        <span className="col-1 m-0"></span>
                        <MasterInput2 defaultt={defaultData.s4} label="" name="s4" ipType="text" ipTitle="Enter Address" handleChange={handleChange} classCategory="form-control col-12 subMaster " />
                    </span>
                </div>

                <div className="btn-group col-1 mt-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {/*<button className="btn btn-danger p-2 m-3" onClick={handlePosting}>Save</button>*/}
                    <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} onClick={handlePosting} className="btn btn-success pl-0 pr-0">Save</button>
                </div>

            </div>
        </div>
    )
}