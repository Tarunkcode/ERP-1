import * as React from 'react';
import DatalistInput from 'react-datalist-input';
import 'react-datalist-input/dist/styles.css';
import { useLocation } from 'react-router';
import { CustomSelect, InputList, MasterInput, MasterInput2 } from '../../components/custom-input/custom-input.component';
import AutoComp from '../../components/custom-input/droplist/droplist.component';
import { store2 } from '../../Redux/config/config.reducer';

export default function MatCentre({ HandleIpSelect, defaultData, getMasterType, pageTitle, configType, handleChange, handlePosting, collectSelectedItem, isBranch, ...otherProps }: any) {
 
    React.useEffect(() => {
        configType == '4' ? getMasterType(22) : null;
        console.log('def', defaultData)
    }, [defaultData]);

 
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
                        <MasterInput2 defaultt={defaultData.printname} label="Print Name" name="printname" ipType="text" ipTitle="Enter Print Name" handleChange={handleChange} classCategory="form-control col-12 subMaster" />

                        <span className="col-1 m-0"></span>



                      
                          
                        <AutoComp name="c1" label="Type" ipTitle="Select Material Center Type" list={[{ label: 'Raw Material Store', value: 1 }, { label: 'Finish Good Store', value: 2 }, { label: 'Semi Finish Good Store', value: 3 }, { label: 'Production Floor', value: 4 }, { label: 'General Store', value: 5 }, { label: 'Scrap Store', value: 6 }]} ipType="text" collect={collectSelectedItem} classCategory="form-control col-4 inp str" isMandate={true} defaultt={defaultData ? defaultData.c1 : ''} />
                       
                    </span>
             
                    
                    <span className="d-flex section2 col-sm-12">
                        <MasterInput2 defaultt={defaultData.s1} placeholder="Address 1" label="Address" name="s1" ipType="text" ipTitle="Enter Address" handleChange={handleChange} classCategory="form-control col-12 subMaster" />
                        <span className="col-1 m-0"></span>
                        <MasterInput2 defaultt={defaultData.s2} placeholder="Address 2" label="" name="s2" ipType="text" ipTitle="Enter Address" handleChange={handleChange} classCategory="form-control col-12 subMaster " />
                    </span>
                    <span className="d-flex section2 col-sm-12">
                        <MasterInput2 defaultt={defaultData.s3} label="" name="s3" placeholder="Address 3" ipType="text" ipTitle="Enter Address" handleChange={handleChange} classCategory="form-control col-12 subMaster " />
                        <span className="col-1 m-0"></span>
                        <MasterInput2 defaultt={defaultData.s4} label="" name="s4" placeholder="Address 4" ipType="text" ipTitle="Enter Address" handleChange={handleChange} classCategory="form-control col-12 subMaster " />
                    </span>
                    <span className="d-flex section2 col-sm-12">

                        <AutoComp name="c22" label="Used For" ipTitle="Select Used For" list={[{ label: 'Company', value: 1 }, { label: 'Branch', value: 2 }]} ipType="text" collect={collectSelectedItem} classCategory="form-control col-4 inp str" isMandate={true} defaultt={defaultData ? defaultData.c22 : ''} />
                        <span className="col-1 m-0"></span>
                        {
                            isBranch === true ? (<MasterInput2 defaultt={defaultData.c23} label="Branch Code" name="c23" ipType="text" ipTitle="Enter Branch Code" handleChange={handleChange} classCategory="form-control col-12 subMaster" />
                            ) : (<span className="col-4 m-0"></span>)
                        }
                        




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