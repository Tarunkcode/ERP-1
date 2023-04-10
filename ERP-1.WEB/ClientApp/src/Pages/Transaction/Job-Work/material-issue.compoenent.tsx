import * as React from 'react';
import { MasterInput2 } from '../../../components/custom-input/custom-input.component';


const MaterialIssue = () => {
   
    const getState = window.localStorage.getItem('state');
   
    return (
        <>
            <div className="main card firstDiv">
           
                <div className="card-title mb-2 col-12 text-center" style={{ margin: '0 auto' }}>
                    <span className="card-title" style={{
                        fontSize: '15px', color: 'white', padding: '0',
                        margin: '0'
                    }}>Dilevery Challan Issue To Party</span>
                    </div>
                <div className="card-body" style={{ margin: '0', padding: '0'}}>

              

                   
                   
                    <form className="form">

                        <span className="d-flex section2 col-sm-12">

                            <MasterInput2 defaultt={[]} label="Series" name="series" ipType="text" ipTitle="Enter Code" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                            <span className="col-1 m-0"></span>
                            <MasterInput2 defaultt={[]} label="Date" name="date" ipType="date" ipTitle="Enter Date" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                        </span>

                        <span className="d-flex section2 col-sm-12">

                            <MasterInput2 defaultt={[]} label="Party" name="party" ipType="text" ipTitle="Enter Code" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                            <span className="col-1 m-0"></span>
                            <MasterInput2 defaultt={[]} label="Challan Type" name="challan" ipType="text" ipTitle="Enter Challan Type" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                        </span>

                        <span className="d-flex section2 col-sm-12">

                            <MasterInput2 defaultt={[]} label="Department" name="Department" ipType="text" ipTitle="Enter Department" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                            <span className="col-1 m-0"></span>
                            <MasterInput2 defaultt={[]} label="State" name="state" ipType="text" ipTitle="Enter state" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                        </span>

                        <span className="d-flex section2 col-sm-12">

                            <MasterInput2 defaultt={[]} label="Code" name="code" ipType="text" ipTitle="Enter Code" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                            <span className="col-1 m-0"></span>
                            <MasterInput2 defaultt={[]} label="Transporter" name="transporter" ipType="text" ipTitle="Enter Transporter" handleChange={[]} classCategory="form-control col-4 inp subMaster" />

                        </span>

                        <span className="d-flex section2 col-sm-12">

                            <MasterInput2 defaultt={[]} label="E-Way Bill" name="ewb" ipType="text" ipTitle="Enter E-Way Bill" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                            <span className="col-1 m-0"></span>
                            <MasterInput2 defaultt={[]} label="Driver" name="driver" ipType="text" ipTitle="Enter Driver" handleChange={[]} classCategory="form-control col-4 inp subMaster" />

                        </span>

                        <span className="d-flex section2 col-sm-12">

                            <MasterInput2 defaultt={[]} label="Bill No." name="bn" ipType="text" ipTitle="Enter Bill No." handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                            <span className="col-1 m-0"></span>
                            <MasterInput2 defaultt={[]} label="Vehicle No." name="vchno" ipType="text" ipTitle="Enter Vehicle No." handleChange={[]} classCategory="form-control col-4 inp subMaster" />

                        </span>

                        <span className="d-flex section2 col-sm-12">

                            <MasterInput2 defaultt={[]} label="Ref No." name="refno" ipType="text" ipTitle="Enter Ref No." handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                            <span className="col-1 m-0"></span>
                            <MasterInput2 defaultt={[]} label="Seal No." name="seal" ipType="text" ipTitle="Enter Seal No." handleChange={[]} classCategory="form-control col-4 inp subMaster" />

                        </span>

                        <span className="d-flex section2 col-sm-12">

                            <MasterInput2 defaultt={[]} label="Picking List" name="plist" ipType="text" ipTitle="Enter Picking List" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                            <span className="col-1 m-0"></span>
                            <MasterInput2 defaultt={[]} label="E-way Bill" name="ewaybill" ipType="text" ipTitle="Enter E-way Bill" handleChange={[]} classCategory="form-control col-4 inp subMaster" />

                        </span>

                        <span className="d-flex section2 col-sm-12">

                            <MasterInput2 defaultt={[]} label="Place o Supply" name="pos" ipType="text" ipTitle="Enter Place o Supply" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                            <span className="col-1 m-0"></span>
                            <MasterInput2 defaultt={[]} label="PinCode" name="pincode" ipType="text" ipTitle="Enter PinCode" handleChange={[]} classCategory="form-control col-4 inp subMaster" />

                        </span>

                        <span className="d-flex section2 col-sm-12">

                            <MasterInput2 defaultt={[]} label="Distance" name="distance" ipType="text" ipTitle="Enter Distance" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                            <span className="col-1 m-0"></span>
                           

                        </span>

                            </form>
                   
                </div>
               
            <hr style={{ border: '2px solid grey', opacity: '0.5' }} />


            <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                <div className="card">

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>
                        <span className="card-title" style={{ fontSize: '15px', color: 'white', fontWeight: 900, margin: '0', padding: '0' }}>Challan Item Details</span>
                    </div>

                    <div className="table-responsive" style={{ padding: '0' }}>

                        <table className="table table-striped table-bordered table-hover table-sm" style={{ margin: '0' }}>
                            <thead className="thead-light table-secondary text-center">
                                <tr>
                                    <th scope="col">S.No.</th>
                                    <th scope="col" style={{ padding: '0 12em' }}><span>ItemCode </span></th>
                                    <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >ItemName</span></th>
                                    <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Material Center</span></th>
                                    <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Mc Type</span></th>
                                    <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >From Process</span></th>
                                    <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Stock Qty</span></th>
                                    <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Qty</span></th>
                                    <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >UoM</span></th>
                                    <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Price</span></th>
                                    <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Value</span></th>
                                    <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Weight(KG)</span></th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                               
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
            <hr style={{ border: '2px solid grey', opacity: '0.5' }} />

            <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                <div className="card col-sm-7" style={{ padding: '0', margin: '0', minHeight: '20vh' }}>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>
                        <span className="card-title" style={{ fontSize: '15px', color: 'white', fontWeight: 900, margin: '0', padding: '0' }}>Bill Sundry Details</span>
                    </div>
                    <div className="card-body table-responsive" style={{ margin: '0', padding: '0' }}>
                        <table className="table table-striped table-bordered table-hover table-sm" style={{ margin: '0' }}>
                            <thead className="thead-light table-secondary text-center">
                                <tr>
                                    <th>S. No</th>
                                    <th>Bill Sundary</th>
                                    <th>Narration</th>
                                    <th>@</th>

                                    <th>Amount (₹)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>

                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
               
                </div>
                </div>
            <hr style={{ border: '2px solid grey', opacity: '0.5' }} />
            <div className="btn-group col-12 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0 ml-2">Save</button>
                <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} className="btn btn-success mr-2 ml-2 pl-0 pr-0 ">Save & Submit</button>
                <button type="button" style={{ border: '2px solid red', letterSpacing: 3 }} className="btn btn-danger pl-0 pr-0">Quit</button>
           

            </div>
        </>
    )
}

export default MaterialIssue;