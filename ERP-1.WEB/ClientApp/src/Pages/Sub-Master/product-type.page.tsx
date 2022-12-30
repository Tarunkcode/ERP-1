import * as React from 'react';
import CustomInput from '../../components/custom-input/custom-input.component';

export default function ProductType_Page({ handleChange, getMasterType, masterType, handlePosting, configType, pageTitle,defaultData, ...otherProps }: any) {
    React.useEffect(() => {
        if (configType === '11') getMasterType(1009)
        else if (configType === '12') getMasterType(1010)
        else if (configType === '16') getMasterType(1002)
        else if (configType === '43') getMasterType(1035)
        else if (configType === '40') getMasterType(1032)
        else alert('something went wrong')

    }, [configType])
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
