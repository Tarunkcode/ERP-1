import * as React from 'react';
import CustomInput from '../../components/custom-input/custom-input.component';

export default function SubUnit_Page({ getMasterType, handleChange, handlePosting,defaultData, ...otherProps }: any) {
    React.useEffect(() => {
    getMasterType(21)
    
    }, [])
    return (
        <>
            <div className="main card firstDiv">
                <div
                    className="text-center card-title col-12"
                    style={{ textAlign: "start", backgroundColor: "#8389d4" }}
                >
                    <span className="row-header p-0 m-0">Unit</span>
                </div>
                <form className="row-content form col-sm-12 pt-0">
            
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
                            name="codeStr"
                            change={handleChange}
                            default={defaultData.codeStr}
                            classCategory="form-control inp subMaster"
                            ipType="text"
                            label="Alias"
                            ipTitle="Enter Alias"
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
                            label="Print Name"
                            ipTitle="Enter Print Name"
                            dataArray={[]}
                        />

                    </span>

               
                </form>
            </div>
            <div className="btn-group col-12 mt-3" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3, width: "100px", marginLeft: "400px" }} className="btn btn-info pl-0 pr-0 col-xs-6 col-md-1" onClick={handlePosting} >Save</button>

            </div>

        </>
    )
}
