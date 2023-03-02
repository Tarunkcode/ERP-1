import * as React from 'react';
import CustomInput from '../../components/custom-input/custom-input.component';

export default function QcType({ defaultData, getMasterType, pageTitle, configType, handleChange, handlePosting }: any) {
    React.useEffect(() => {
        configType == '24' ? getMasterType(18) : null;
    }, [defaultData])
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
                            name="codeStr"
                            change={handleChange}
                            default={defaultData.codeStr}
                            classCategory="form-control inp subMaster"
                            ipType="text"
                            label="Code"
                            ipTitle="Enter Code"
                            dataArray={[]}
                        />

                    </span>
                    <span className="d-flex section2 mb-2 col-sm-12">
                        <CustomInput
                            name="name"
                            change={handleChange}
                            default={defaultData.name}
                            classCategory="form-control inp subMaster"
                            ipType="text"
                            label="Name"
                            ipTitle="Enter Name"
                            dataArray={[]}
                        />

                    </span>
                    <span className="d-flex section2 mb-2 col-sm-12">
                        <CustomInput
                            name="s1"
                            change={handleChange}
                            default={defaultData.s1}
                            classCategory="form-control inp subMaster"
                            ipType="text"
                            label="Measuring Method"
                            ipTitle="Select Measuring Method"
                            dataArray={[]}
                        />

                    </span>
                    <span className="d-flex section2 mb-2 col-sm-12">
                        <CustomInput
                            name="s2"
                            change={handleChange}
                            default={defaultData.s2}
                            classCategory="form-control inp subMaster"
                            ipType="text"
                            label="Std. Narration"
                            ipTitle="Standard Narration"
                            dataArray={[]}
                        />

                    </span>
                    <span className="d-flex section2 mb-2 col-sm-12">
                        <CustomInput
                            name="s3"
                            change={handleChange}
                            default={defaultData.s3}
                            classCategory="form-control inp subMaster"
                            ipType="number"
                            label="No. of Types"
                            ipTitle="Enter No. Of Types"
                            dataArray={[]}
                        />

                    </span>

                </form>
            
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3, width: "100px", marginLeft: "400px" }} className="btn btn-info pl-0 pr-0 col-xs-6 p-1 col-md-1" onClick={handlePosting} >Save</button>

           
            </div>
        </>
    )
}