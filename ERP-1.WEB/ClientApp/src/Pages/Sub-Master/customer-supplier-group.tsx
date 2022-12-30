import * as React from 'react';
import { useState} from 'react';
import CustomInput, { CustomSelect, InputList } from '../../components/custom-input/custom-input.component';
import CustomeSwitch from '../../components/CustomSwitch/custom-switch.component';


export default function Cust_Sup_Page({ getMasterType, pageTitle, configType, handleChange, handlePosting, defaultData, HandleIpSelect, ...otherProps}: any) {
    React.useEffect(() => {
        if (configType == '1') getMasterType(1005)
        else if (configType == '2') getMasterType(111)
        else alert('wrong path set in db')
    }, [])
    const dArr = [{ code: 1, name: 'Tarun' }, { code: 2, name: 'Akhilesh' }, { code: 3, name: 'Raghav' }, { code: 4, name: 'Santosh' }, { code: 5, name: 'Narayan' }];
    const [PrimaryGroup, setPrimaryGroup]: any = useState(false)
    return (
        <>
            <div className="main card firstDiv">
                <div
                    className="text-center card-title col-12"
                    style={{ textAlign: "start", backgroundColor: "#8389d4" }}
                >
                    <span className="row-header p-0 m-0">{pageTitle}</span>
                </div>
                <form className="row-content form col-sm-12 pt-0">
             

                    <span className="d-flex section2 mb-2 col-sm-12">
                        <CustomInput
                            change={handleChange}
                            default={defaultData.name}
                            name="name"
                            classCategory="form-control inp subMaster"
                            ipType="text"
                            label="Name"
                            ipTitle="Enter Name"
                            dataArray={[]}
                        />

                    </span>

                    <span className="d-flex section2 col-sm-12">
                        <CustomInput
                            change={handleChange}
                            name="codeStr"
                            default={defaultData.codeStr}
                            classCategory="form-control inp mb-2 subMaster"
                            ipType="text"
                            label="Alias"
                            ipTitle="Enter Alias"
                            dataArray={[]}
                        />

                    </span>

                    <span className="d-flex section2 mb-2 col-sm-4"  >
                        <CustomeSwitch lablClass="custom-control-label col-9" default={defaultData.c1} label="Primary Group" id="c1" name="c1" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChange} />
                        
                    </span>
                    <span className="d-flex section2 col-sm-12">
                        {
                                  /*CustomSelect({ */
                            PrimaryGroup === false ? (
                                <>
                                    <InputList label="Under Group" id="parentGrp" lablCat="form-label labl labl2" name="parentGrp" default={dArr.findIndex((x : any) => x.code === parseInt(defaultData.parentGrp))} dataArray={dArr} change={HandleIpSelect} placeholder="select under group" s="20%" classCategory="form-control inp mb-2 subMaster ipselect" />
                               
                                </>
                            ) : null
                        }


                    </span>
                    <span className="d-flex section2 mb-2 col-sm-4">
                        <CustomeSwitch lablClass="custom-control-label col-9" default={defaultData.c2} label="is Import/Export" id="c2" name="c2" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChange} />
                    </span>


                    <div className="btn-group col-12 mt-3" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3, width: "100px" }} className="btn btn-info pl-0 pr-0 col-md-1 col-xs-6" onClick={handlePosting} >Save</button>

            </div>
                </form>
            </div>
        </>
    )
}

