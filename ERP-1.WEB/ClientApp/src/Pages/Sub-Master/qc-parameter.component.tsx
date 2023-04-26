import * as React from 'react';
import CustomInput, { MasterInput2 } from '../../components/custom-input/custom-input.component';

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
                        <MasterInput2
                            name="name"
                            handleChange={handleChange}
                            defaultt={defaultData.name}
                            classCategory="form-control col-12 subMaster"
                            ipType="text"
                            label={configType == '7' ? "Quality Parameter" : "Sampling Type"}
                            ipTitle={configType == '7' ? "Enter Quality Parameter" : "Enter Sampling Type"}

                        />

                    </span>
                    <span className="d-flex section2 mb-2 col-sm-12">
                        <label htmlFor="s1" style={{ fontSize: '1em' }} className="form-label mr-2 ml-2 labl labl2"></label>
                        <textarea name="s1" style={{ borderColor: '#86a4c3' }} onChange={handleChange} defaultValue={defaultData.s1} placeholder="Enter Description" rows={2} cols={6} className="form-control col-10 subMaster" />
                    </span>

                </form>
                <div className="btn-group col-12 mt-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                    <button type="button" style={{ border: '2px solid green', letterSpacing: 3, width: "100px", marginLeft: "" }} className="btn btn-success pl-0 pr-0 col-xs-6 col-md-1" onClick={handlePosting} >Save</button>

                </div>
            </div>
        </>
    )
}