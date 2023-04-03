import * as React from 'react';
import { useState } from 'react';
import DatalistInput from 'react-datalist-input';
import CustomInput, { CustomSelect, InputList, MasterInput2 } from '../../components/custom-input/custom-input.component';
import CustomeSwitch from '../../components/CustomSwitch/custom-switch.component';


export default function Cust_Sup_Page({ getMasterType, pageTitle, configType, handleChange, UgList, handlePosting, defaultData, HandleIpSelect, ...otherProps }: any) {
    React.useEffect(() => {
        if (configType == '1') getMasterType(1005)
        else if (configType == '2') getMasterType(111)
        else alert('wrong path set in db')
        console.log('def1111111', defaultData);
    }, [])


    const [PrimaryGroup, setPrimaryGroup]: any = useState(false)
    return (
        <>
            <div className="main card firstDiv">
                <div
                    id="cardTitle"
                    className="text-center card-title col-12"
                    style={{ textAlign: "start" }}
                >
                    <span className="row-header p-0 m-0">{pageTitle}</span>
                </div>
                <form className="row-content form col-sm-12 pt-0">

                    <span className="d-flex section2 col-sm-12">

                        <MasterInput2 name="codestr" label="Code" ipTitle="Enter Item Code" ipType="text" handleChange={handleChange} classCategory="form-control col-4 inp subMaster" />
                        <span className="col-1 m-0"></span>
                        <MasterInput2 name="name" label="Name" ipTitle="Enter Name" ipType="text" handleChange={handleChange} classCategory="form-control col-4 inp subMaster" />
                    </span>


                    <span className="d-flex section2 col-sm-12">
                        {
                            
                            PrimaryGroup === false ? (
                                <>


                                            <>
                                        <label htmlFor="series" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 labl2">Under Group</label>
                                            </>
                                            <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                                                <DatalistInput

                                                    className="d-flex col-12 m-0 p-0"
                                            inputProps={{ className: 'form-control inp col-12 datalist int subMaster', name: 'parentGrp' }}
                                                    listboxProps={{ className: 'text-left mt-5' }}

                                                    onSelect={(item: any) => { console.log('id', item.id); }}
                                                    items={[]}
                                                />

                                            </span>
                                </>
                            ) : null
                        }
                        {/*<InputList label="Under Group" id="parentGrp" lablCat="form-label labl labl2" name="parentGrp" default={UgList.findIndex((x: any) => x.code === defaultData.parentGrp)} dataArray={UgList} change={HandleIpSelect} placeholder="select under group" s="20%" classCategory="form-control inp mb-2 subMaster ipselect" />*/}

                    </span>
                    <span className="d-flex section2 mb-2 col-sm-4 mt-2"  >
                        <CustomeSwitch lablClass="custom-control-label col-9" default={defaultData.c1} label="Primary Group" id="c1" name="c1" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChange} />

                    </span>
                    <span className="d-flex section2 mb-2 col-sm-4">
                        <CustomeSwitch lablClass="custom-control-label col-9" default={defaultData.c2} label="is Import/Export" id="c2" name="c2" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChange} />
                    </span>


                    <div className="btn-group col-12 mt-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <button type="button" style={{ border: '2px solid green', letterSpacing: 3, width: "100px" }} className="btn btn-success pl-0 pr-0 col-md-1 col-xs-6" onClick={handlePosting} >Save</button>

                    </div>
                </form>
            </div>
        </>
    )
}

