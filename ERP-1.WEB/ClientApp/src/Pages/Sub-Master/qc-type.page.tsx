import * as React from 'react';
import CustomInput, { MasterInput2 } from '../../components/custom-input/custom-input.component';

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



                    <span className="d-flex section2 col-sm-12">
                        <MasterInput2
                            name="codeStr"
                            handleChange={handleChange}
                            defaultt={defaultData.codeStr}
                            classCategory="form-control col-12 subMaster"
                            ipType="text"
                            label="Code"
                            ipTitle="Enter Code"

                        />
                        <span className="col-1 m-0"></span>

                        <MasterInput2
                            name="name"
                            handleChange={handleChange}
                            defaultt={defaultData.name}
                            classCategory="form-control col-12 subMaster"
                            ipType="text"
                            label="Name"
                            ipTitle="Enter Name"

                        />
                    </span>

                    <span className="d-flex section2 col-sm-12">
                        <MasterInput2
                            name="s1"
                            handleChange={handleChange}
                            defaultt={defaultData.s1}
                            classCategory="form-control col-12 subMaster"
                            ipType="text"
                            label="Measuring Method"
                            ipTitle="Select Measuring Method"

                        />
                        <span className="col-1 m-0"></span>
                        <MasterInput2
                            name="s2"
                            handleChange={handleChange}
                            defaultt={defaultData.s2}
                            classCategory="form-control col-12 subMaster"
                            ipType="text"
                            label="Std. Narration"
                            ipTitle="Standard Narration"

                        />
                    </span>

                    <span className="d-flex section2 col-sm-12">
                        <MasterInput2
                            name="s3"
                            handleChange={handleChange}
                            defaultt={defaultData.s3}
                            classCategory="form-control col-12 subMaster"
                            ipType="number"
                            label="No. of Types"
                            ipTitle="Enter No. Of Types"

                        />

                    </span>

                </form>

                <div className="btn-group col-12 mt-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <button onClick={handlePosting} type="button" style={{ border: '2px solid green', letterSpacing: 3, width: "100px", marginTop: "10px" }} className="btn btn-success pl-0 pr-0 col-xs-6 col-md-1" >Save</button>

                </div>



            </div>
        </>
    )
}