import * as React from 'react';
import CustomInput, { MasterInput2 } from '../../components/custom-input/custom-input.component';
import { useEffect } from 'react';



export default function Currency_Page({ getMasterType, handleChange, handlePosting, defaultData, ...otherProps }: any) {

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


                    <span className="d-flex section2 col-sm-12">
                        <MasterInput2
                            handleChange={handleChange}
                            defaultt={defaultData.codeStr}
                            name="codeStr"
                            classCategory="form-control inp col-4 subMaster"
                            ipType="text"
                            label="Code"
                            ipTitle="Enter Alias"
                        />
                        <span className='col-1 m-0'></span>
                        <MasterInput2
                            name="Name"
                            defaultt={defaultData.name}
                            classCategory="form-control col-4 inp subMaster"
                            ipType="text"
                            handleChange={handleChange}
                            label="Name"
                            ipTitle="Enter Name"

                        />
                    </span>

                    <span className="d-flex section2 col-sm-12">
                        <MasterInput2
                            handleChange={handleChange}
                            defaultt={defaultData.s1}
                            name="s1"
                            classCategory="form-control inp col-4 subMaster"
                            ipType="text"
                            label="Print Name"
                            ipTitle="Enter Print Name "

                        />
                        <span className='col-1 m-0'></span>
                        <MasterInput2
                            handleChange={handleChange}
                            defaultt={defaultData.s1}
                            name="s2"
                            classCategory="form-control inp col-4 subMaster"
                            ipType="text"
                            label="Symbol"
                            ipTitle="Enter Symbol"

                        />
                    </span>

                    <span className="d-flex section2 col-sm-12">
                        <MasterInput2
                            handleChange={handleChange}
                            defaultt={defaultData.c1}
                            name="c1"
                            classCategory="form-control inp col-4 subMaster"
                            ipType="number"
                            label="Default Currency"
                            ipTitle="Enter Default Currency "

                        />
                        <span className='col-1 m-0'></span>
                        <MasterInput2
                            defaultt={defaultData.c2}
                            handleChange={handleChange}
                            name="c2"
                            classCategory="form-control inp col-4 subMaster"
                            ipType="number"
                            label="Decimal Place"
                            ipTitle="Enter Decimal Place"
                        />
                    </span>

                    <div className="btn-group col-12 mt-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                        <button type="button" style={{ border: '2px solid green', letterSpacing: 3, marginTop: "10px", width: "100px" }} className="btn btn-success pl-0 pr-0 col-xs-6 col-md-1" onClick={handlePosting}>Save</button>
                    </div>
                </form>


            </div>
        </>
    )
}
