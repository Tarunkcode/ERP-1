import * as React from 'react';
import DatalistInput from 'react-datalist-input';
import { MasterInput2 } from '../../components/custom-input/custom-input.component';
import CustomeSwitch from '../../components/CustomSwitch/custom-switch.component';

const State_Page = () => {
    return (
        <>
            <div className="main card firstDiv">
                <div className="text-center card-title col-12" style={{ textAlign: 'start', backgroundColor: '#8389d4' }}>
                    <span className="row-header p-0 m-0" >State</span>
                </div>

                <div className="card-body row col-sm-12 m-0 p-0" >
                  
                        <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">

                            <div className="card-body" style={{ margin: '0', padding: '0' }}>
                                <form className="form">
                                <span className="d-flex section2 col-sm-12">
                                    <>
                                        <label htmlFor="series" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 labl2">Country</label>
                                    </>
                                    <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                                        <DatalistInput
                                            placeholder={'Select Country'}
                                            className="d-flex col-12 m-0 p-0"
                                            inputProps={{ className: 'form-control inp col-12 datalist int', name: 'country' }}
                                            listboxProps={{ className: 'text-left mt-5' }}

                                            onSelect={(item: any) => { console.log('id', item.id); }}
                                            items={[{id:1,value:'India'}]}
                                        />
                                        </span>
                                  {/*  <MasterInput2 name="country" label="Country" ipTitle="Enter Country" ipType="text" classCategory="form-control col-4 inp" />*/}
                                    <span className="col-1 m-0"></span>
                                     <MasterInput2 name="zone" label="Zone" ipTitle="Enter Zone" ipType="text" classCategory="form-control col-4 inp" />
                                   

                                </span>

                                <span className="d-flex section2 col-sm-12">
                                    <>
                                        <label htmlFor="series" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 labl2">State</label>
                                    </>
                                    <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                                        <DatalistInput
                                            placeholder={'Select State'}
                                            className="d-flex col-12 m-0 p-0"
                                            inputProps={{ className: 'form-control inp col-12 datalist int', name: 'state' }}
                                            listboxProps={{ className: 'text-left mt-5' }}

                                            onSelect={(item: any) => { console.log('id', item.id); }}
                                            items={[{ id: 1, value: 'Uttar Pradesh' }]}
                                        />
                                    </span>

                                    {/*<MasterInput2 name="state" label="State" ipTitle="Enter State" ipType="text" classCategory="form-control col-4 inp" />*/}
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="name" label="Name" ipTitle="Enter Name" ipType="text" classCategory="form-control col-4 inp" />
                                </span>

                                <span className="form col-sm-12 row-content card-body pt-0 pb-0 px-2 mb-2">
                                    <span className="d-flex flex-column section2 col-sm-12" style={{ marginLeft: '23px' }}>
                                        <CustomeSwitch lablClass="custom-control-label col-9" label="Eway Bill Required" id="c1" name="c1" classCat="form-control custom-control-input col-3 subMaster switch"/>
                                     
                                    </span>

                                </span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
      
         <div className="btn-group col-6 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', float: 'right' }}>
                    <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0">Save</button>
                    <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} onClick={() => { }} className="btn btn-success mr-2 ml-2 pl-0 pr-0 ">Save & Submit</button>
                    <button type="button" style={{ border: '2px solid orange', letterSpacing: 3 }} className="btn btn-warning pl-0 pr-0">Quit</button>
                </div>
            </>

    )
}
export default State_Page;