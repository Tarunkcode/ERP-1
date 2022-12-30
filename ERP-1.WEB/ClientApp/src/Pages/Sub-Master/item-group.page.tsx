import * as React from 'react';
import { useEffect } from 'react';
import CustomInput, { InputList } from '../../components/custom-input/custom-input.component';
import CustomeSwitch from '../../components/CustomSwitch/custom-switch.component';

export default function ItemGroup_Page({ getMasterType, handleChange, handlePosting, HandleIpSelect, defaultData, pageTitle, ...otherProps }: any) {
    useEffect(() => {
        getMasterType(79)

    }, [])
 

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
                            default={defaultData.name}
                            name="name"
                            change={handleChange}
                            classCategory="form-control inp subMaster"
                            ipType="text"
                            label="Name"
                            ipTitle="Enter Name"
                            dataArray={[]}
                        />

                    </span>

                    <span className="d-flex section2 col-sm-12">
                        <CustomInput
                            default={defaultData.codeStr}
                            change={handleChange}
                            name="codeStr"
                            classCategory="form-control inp mb-2 subMaster"
                            ipType="text"
                            label="Alias"
                            ipTitle="Enter Alias"
                            dataArray={[]}
                        />

                    </span>

                    <span className="d-flex section2 mb-2 col-sm-12"  >
                   
                        <CustomeSwitch lablClass="custom-control-label col-9" default={defaultData.c1} label="Primary Group" id="c1" name="c1" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChange} />

                    </span>
                    <span className="d-flex section2 col-sm-12">

                        <>
                            <InputList label="Under Group" name="c2" default={defaultData.c2} dataArray={[{ code: 0, name: '' }, { code: 1, name: 'group1' }, { code: 2, name: 'group12' }]} placeholder="Select Under Group" s="20%" handleChange={HandleIpSelect} classCategory="form-control inp mb-2 subMaster select" />
                         
                        </>



                    </span>
                    <span className="d-flex section2 col-sm-12">
                        <InputList label="Group Type" name="c3" default={defaultData.c3} dataArray={[{ code: 0, name: '' }, { code: 1, name: 'Finish Good (FG) Group' }, { code: 2, name: 'Semi Finish Good (SFG) Group' }, { code: 3, name: 'Raw Material (RM) Group' }, { code: 4, name: 'Scrap Material Group' }, { code: 5, name: 'Other Group' }]} placeholder="Select Under Group" s="20%" handleChange={HandleIpSelect} classCategory="form-control inp mb-2 subMaster select" />
                    </span>
                    <span className="d-flex section2 mb-2 col-sm-12">
                       
                        <CustomeSwitch lablClass="custom-control-label col-9" default={defaultData.c4} label="Enable Stock Item" id="c4" name="c4" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChange} />
              
                    </span>
                    <span className="d-flex section2 col-sm-12">
                        <CustomInput
                            default={defaultData.c5}
                            change={handleChange}
                            name="c5"
                            classCategory="form-control inp mb-2 subMaster"
                            ipType="number"
                            label="Item"
                            ipTitle="Enter Item"
                            dataArray={[]}
                        />
                    </span>

            <div className="btn-group col-12 mt-3" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <button onClick={ handlePosting} type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3, width: "100px", marginLeft: "400px" }} className="btn btn-info pl-0 pr-0 col-xs-6 col-md-1" >Save</button>

            </div>
   
                </form>

            </div>
        </>
    )
}
