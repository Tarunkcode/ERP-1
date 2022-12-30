import * as React from 'react';
import CustomInput from '../../components/custom-input/custom-input.component';
import { useEffect } from 'react';



export default function Currency_Page({ getMasterType, handleChange, handlePosting,defaultData, ...otherProps }: any) {

    useEffect(() => {
        getMasterType(102)

    }, [])

    return (
        <>
            <div className="main card firstDiv">
                <div
                    className="text-center card-title col-12"
                    style={{ textAlign: "start", backgroundColor: "#8389d4" }}
                >
                    <span className="row-header p-0 m-0">Currency</span>
                </div>
                <form className="row-content form col-sm-12 pt-0">
                

                    <span className="d-flex section2 mb-2 col-sm-12">
                        <CustomInput
                            name="Name"
                            default={defaultData.name}
                            classCategory="form-control inp subMaster"
                            ipType="text"
                            change={handleChange}
                            label="name"
                            ipTitle="Enter Name"
                            dataArray={[]}
                        />

                    </span>
                    <span className="d-flex section2 col-sm-12">
                        <CustomInput
                            change={handleChange}
                            default={defaultData.codeStr}
                            name="codeStr"
                            classCategory="form-control inp mb-2 subMaster"
                            ipType="text"
                            label="Alias"
                            ipTitle="Enter Alias"
                            dataArray={[]}
                        />

                    </span>

                    <span className="d-flex section2 col-sm-12">
                        <CustomInput
                            change={handleChange}
                            default={defaultData.s1}
                            name="s1"
                            classCategory="form-control inp mb-2 subMaster"
                            ipType="text"
                            label="Print Name"
                            ipTitle="Enter Print Name "
                            dataArray={[]}
                        />
                    </span>
                    <span className="d-flex section2 col-sm-12">

                        <CustomInput
                            change={handleChange}
                            default={defaultData.s1}
                            name="s2"
                            classCategory="form-control inp mb-2 subMaster"
                            ipType="text"
                            label="Symbol"
                            ipTitle="Enter Symbol"
                            dataArray={[]}
                        />

                    </span>
                    <span className="d-flex section2 col-sm-12">
                        <CustomInput
                            change={handleChange}
                            default={defaultData.c1}
                            name="c1"
                            classCategory="form-control inp mb-2 subMaster"
                            ipType="number"
                            label="Default Currency"
                            ipTitle="Enter Default Currency "
                            dataArray={[]}
                        />
                    </span>
                    <span className="d-flex section2 col-sm-12">
                        <CustomInput
                            default={defaultData.c2}
                            change={handleChange}
                            name="c2"
                            classCategory="form-control inp mb-2 subMaster"
                            ipType="number"
                            label="Decimal Place"
                            ipTitle="Enter Decimal Place"
                            dataArray={[]}
                        />
                    </span>
                
                    <div className="btn-group col-12 mt-3" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', }}>
                        <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3, marginLeft: "400px", width: "100px" }} className="btn btn-info pl-0 pr-0 col-xs-6 col-md-1" onClick={handlePosting}>Save</button>
            </div>
                </form>

              
            </div>
        </>
    )
}
