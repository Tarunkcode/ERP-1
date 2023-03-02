import * as React from 'react';
import { useEffect } from 'react';
import CustomInput from '../../components/custom-input/custom-input.component';

export default function ProductionOverHead_Page({ handleChange, pageTitle, handlePosting,configType, getMasterType,defaultData, ...props }: any) {
    useEffect(() => {
        console.log('def',defaultData)
        configType == '42' ? getMasterType(1034) : null;
        configType == '38' ? getMasterType(1030) : null;
    }, [defaultData])
    return (
        <>
            <div className="main card firstDiv">
                <div
                    className="text-center card-title col-12"
                    style={{ textAlign: "start", backgroundColor: "#8389d4" }}
                >
                    <span className="row-header p-0 m-0">{pageTitle }</span>
                </div>
                <form className="row-content form col-sm-12 pt-0">


                    <span className="d-flex section2 mb-2 col-sm-12">
                        <CustomInput
                            name="name"
                            default={defaultData.name}
                            change={handleChange}
                            classCategory="form-control inp subMaster"
                            ipType="text"
                            label="Name"
                            ipTitle="Enter Name"
                            dataArray={[]}
                        />

                    </span>


                </form>
            </div>
            <div className="btn-group col-12 mt-3" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', }}>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3, width: "100px", marginLeft: "400px" }} className="btn btn-info pl-0 pr-0 col-xs-6 col-md-1" onClick={handlePosting} >Save</button>

            </div>
        </>
    )
}