import * as React from 'react';
import { useEffect } from 'react';
import DatalistInput from 'react-datalist-input';
import 'react-datalist-input/dist/styles.css';
import CustomInput, { MasterInput2, MasterInput3 } from '../../components/custom-input/custom-input.component';
import AutoComp from '../../components/custom-input/droplist/droplist.component';
import CustomeSwitch, { CustomeSwitch2 } from '../../components/CustomSwitch/custom-switch.component';


export default function ItemGroup_Page({ getMasterType, UgList, handleChange, handlePosting, HandleIpSelect, defaultData, pageTitle, isPrimary, collectSelectedItem, Item_Code$Name123, ...otherProps }: any) {
    let [isUnderGroup, setIsUnderGroup]: any = React.useState(true);
    var underGpList = React.useMemo(() => { return UgList }, [UgList])
    var itemCodeList = React.useMemo(() => { return Item_Code$Name123 }, [Item_Code$Name123])
    useEffect(() => {
        getMasterType(79)

    }, [])
    useEffect(() => {
        if (isPrimary || defaultData.c1 == 1) {
            setIsUnderGroup(false);
        } else {
            setIsUnderGroup(true);
        }
    }, [isPrimary])

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


                        <MasterInput3
                            defaultt={defaultData.codeStr}
                            handleChange={handleChange}
                            name="codeStr"
                            classCategory="form-control col-4 inp subMaster"
                            ipType="text"
                            label="Code"
                            ipTitle="Enter Alias"
                            length={60}
                            isMandate={true}

                        />
                        <span className='col-1 m-0'></span>
                        <CustomeSwitch2 lablClass="custom-control-label col-8" default={defaultData.c1} label="Primary Group" id="c1" name="c1" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChange} />
                    </span>

                    <span className="d-flex section2 col-sm-12"  >
                        <MasterInput3
                            defaultt={defaultData.name}
                            name="name"
                            handleChange={handleChange}
                            classCategory="form-control col-4 inp subMaster"
                            ipType="text"
                            label="Name"
                            ipTitle="Enter Name"
                            length={60}
                            isMandate={true}


                        />

                        <span className='col-1 m-0'></span>
                    
                        <CustomeSwitch2 lablClass="custom-control-label col-8" default={defaultData.c4} label="Enable Stock Item" id="c4" name="c4" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChange} />

                   
                    </span>
                    <span className="d-flex section2 col-sm-12">

                        <AutoComp key={defaultData.c2} name="c5" label="Item" ipTitle="Enter Item" list={itemCodeList} defaultt={defaultData.c5} ipType="text" collect={collectSelectedItem} classCategory="form-control col-4 inp str" type={true} isMandate={true} />
                        
                    


                     
                    </span>
                     <span className="d-flex section2 col-sm-12">
                        {
                            isPrimary || defaultData.c1 === 1 ? (<AutoComp key={defaultData.c3} name="c3" label="Primary Group" ipTitle="Select Primary Group" list={[{ value: 1, label: 'Finish Good (FG) Group' }, { value: 2, label: 'Semi Finish Good (SFG) Group' }, { value: 3, label: 'Raw Material (RM) Group' }, { value: 4, label: 'Scrap Material Group' }, { value: 5, label: 'Other Group' }]} defaultt={defaultData.c3} ipType="text" collect={collectSelectedItem} classCategory="form-control col-4 inp str" type={true} isMandate={true} />) :null
                        }
                       
                        {
                            isUnderGroup ? (<AutoComp key={defaultData.c2} name="c2" label="Under Group" ipTitle="Select Under Group" list={underGpList} defaultt={defaultData.c2} ipType="text" collect={collectSelectedItem} classCategory="form-control col-4 inp str" type={true} isMandate={true} />) :null
                        }
                    
                    </span>
                    
                    
                    <div className="btn-group col-12 mt-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <button onClick={handlePosting} type="button" style={{ border: '2px solid green', letterSpacing: 3, width: "100px", marginLeft: "" }} className="btn btn-success pl-0 pr-0 col-xs-6 col-md-1" >Save</button>

                    </div>

                </form>

            </div>
        </>
    )
}
