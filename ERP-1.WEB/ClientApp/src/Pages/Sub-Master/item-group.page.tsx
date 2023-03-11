import * as React from 'react';
import { useEffect } from 'react';
import DatalistInput from 'react-datalist-input';
import 'react-datalist-input/dist/styles.css';
import CustomInput, { MasterInput2 } from '../../components/custom-input/custom-input.component';
import CustomeSwitch from '../../components/CustomSwitch/custom-switch.component';


export default function ItemGroup_Page({ getMasterType, handleChange, handlePosting, HandleIpSelect, defaultData, pageTitle, ...otherProps }: any) {
    useEffect(() => {
        getMasterType(79)

    }, [])


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
                            defaultt={defaultData.codeStr}
                            handleChange={handleChange}
                            name="codeStr"
                            classCategory="form-control col-4 inp subMaster"
                            ipType="text"
                            label="Code"
                            ipTitle="Enter Alias"

                        />
                        <span className='col-1 m-0'></span>
                        <MasterInput2
                            defaultt={defaultData.name}
                            name="name"
                            handleChange={handleChange}
                            classCategory="form-control col-4 inp subMaster"
                            ipType="text"
                            label="Name"
                            ipTitle="Enter Name"

                        />

                    </span>

                    <span className="d-flex section2 col-sm-12"  >

                        {/*<CustomeSwitch lablClass="custom-control-label col-9" default={defaultData.c1} label="Primary Group" id="c1" name="c1" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChange} />*/}

                        <>
                            <label htmlFor="series" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 labl2">Under Group</label>
                        </>
                        <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                            <DatalistInput

                                className="d-flex col-12 m-0 p-0"
                                inputProps={{ className: 'form-control inp col-12 datalist int', name: 'c2' }}
                                listboxProps={{ className: 'text-left mt-5' }}

                                onSelect={(item: any) => { console.log('id', item.id); }}
                                items={[{ id: 0, value: '' }, { id: 1, value: 'group1' }, { id: 2, value: 'group12' }]}
                            />

                        </span>
                        <span className='col-1 m-0'></span>
                        <label htmlFor="series" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 labl2">Group Type</label>

                        <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                            <DatalistInput

                                className="d-flex col-12 m-0 p-0"
                                inputProps={{ className: 'form-control inp col-12 datalist int', name: 'c3' }}
                                listboxProps={{ className: 'text-left mt-5' }}

                                onSelect={(item: any) => { console.log('id', item.id); }}
                                items={[{ id: 0, value: '' }, { id: 1, value: 'Finish Good (FG) Group' }, { id: 2, value: 'Semi Finish Good (SFG) Group' }, { id: 3, value: 'Raw Material (RM) Group' }, { id: 4, value: 'Scrap Material Group' }, { id: 5, value: 'Other Group' }]}
                            />

                        </span>
                    </span>
                    <span className="d-flex section2 col-sm-12">



                        {/*<InputList label="Under Group" name="c2" id="c2" default={defaultData.c2} dataArray={[{ code: 0, name: '' }, { code: 1, name: 'group1' }, { code: 2, name: 'group12' }]} placeholder="Select Under Group" s="20%" change={HandleIpSelect} classCategory="form-control inp mb-2 subMaster select" />*/}



                        <MasterInput2
                            defaultt={defaultData.c5}
                            handleChange={handleChange}
                            name="c5"
                            classCategory="form-control inp col-4 subMaster"
                            ipType="number"
                            label="Item"
                            ipTitle="Enter Item"

                        />


                    </span>
                    <span className="d-flex section2 col-sm-12">
                        <CustomeSwitch lablClass="custom-control-label col-9" default={defaultData.c1} label="Primary Group" id="c1" name="c1" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChange} />
                        {/*<InputList label="Group Type" name="c3" id="c3" default={defaultData.c3} dataArray={[{ code: 0, name: '' }, { code: 1, name: 'Finish Good (FG) Group' }, { code: 2, name: 'Semi Finish Good (SFG) Group' }, { code: 3, name: 'Raw Material (RM) Group' }, { code: 4, name: 'Scrap Material Group' }, { code: 5, name: 'Other Group' }]}  placeholder="Select Under Group" s="20%" change={HandleIpSelect} classCategory="form-control inp mb-2 subMaster select" />*/}
                    </span>
                    <span className="d-flex section2 mb-2 col-sm-12">

                        <CustomeSwitch lablClass="custom-control-label col-9" default={defaultData.c4} label="Enable Stock Item" id="c4" name="c4" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChange} />

                    </span>
                    <span className="d-flex section2 col-sm-12">
                    </span>

                    <div className="btn-group col-12 mt-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <button onClick={handlePosting} type="button" style={{ border: '2px solid green', letterSpacing: 3, width: "100px", marginLeft: "" }} className="btn btn-success pl-0 pr-0 col-xs-6 col-md-1" >Save</button>

                    </div>

                </form>

            </div>
        </>
    )
}
