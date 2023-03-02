import * as React from 'react';
import CustomInput from '../../components/custom-input/custom-input.component';

export default function QcParam_SampleType({ defaultData, getMasterType, pageTitle, configType, handleChange, handlePosting }: any) {
    React.useEffect(() => {
        configType == '7' ? getMasterType(1011) : null;
        configType == '8' ? getMasterType(1008) : null;
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
                            name="name"
                            change={handleChange}
                            default={defaultData.name}
                            classCategory="form-control inp subMaster"
                            ipType="text"
                            label={configType == '7' ? "Quality Parameter" : "Sampling Type"}
                            ipTitle={configType == '7' ? "Enter Quality Parameter" : "Enter Sampling Type"}
                            dataArray={[]}
                        />
                          
                    </span>
                    <span className="d-flex section2 mb-2 col-sm-12">
                        <label htmlFor="s1" style={{ fontSize: '1em' }} className="form-label mr-2 ml-2 labl labl2"></label>
                        <textarea name="s1" onChange={handleChange} defaultValue={defaultData.s1} placeholder="Enter Description" rows={4} cols={6} className="form-control col-6 subMaster" />
                    </span>

                </form>
            </div>
            <div className="btn-group col-12 mt-3" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', }}>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3, width: "100px", marginLeft: "400px" }} className="btn btn-info pl-0 pr-0 col-xs-6 col-md-1" onClick={handlePosting} >Save</button>

            </div>
        </>
        )
}