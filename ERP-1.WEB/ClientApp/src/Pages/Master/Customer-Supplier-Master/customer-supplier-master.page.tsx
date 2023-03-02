import * as React from 'react';
import { Input } from 'reactstrap';
//import '../masterStyle.css';
import CustomInput, { MasterInput2 } from '../../../components/custom-input/custom-input.component';
import CustomeSwitch from '../../../components/CustomSwitch/custom-switch.component';
import { WriteTable } from '../../../components/CustomTable/CustomTable.component';

import { HiddenModal } from '../../../components/Modals/master.modals';
import { SeriesMasterModal } from '../../../components/Modals/master.modals';
import { CustomerGroupModal } from '../../../components/Modals/master.modals';
import { DelTermsModal } from '../../../components/Modals/master.modals';
import { PayTermsModal } from '../../../components/Modals/master.modals';
import { AddRow, DeleteRow, getCurrentRowNo } from '../../Helper Functions/table';

export function CusSupMaster({ handleChangeField, bank, branch, currency, masters, handleAddressOptions, opn, title, handleSave$Submit, handleAddressTypeChange, formDataCollection, accountType, HandleShippingTable, HandlePlantTable, HandleBankDetails, ...otherProps }: any) {
    React.useEffect(() => {
    console.log('series', masters);

    }, [masters])

    const shippingTableProps: any[] = [{
        //'pname': { name: 1, id: 'pname', typeBox: 1, dataArray: [], classCat: "form-control inp CommercialDetail", defaultList: [], width: '450px' },
        'pan': { name: 1, id: "pan", typeBox:1, dataArray: [], classCat: "form-control inp CommercialDetail", defaultList: [], width:'450px' },
        'add1': { name: 100, id: "address1", typeBox: 1, dataArray: [], classCat: "form-control inp AddressDetail", defaultList: [], width: '450px' },
        'add2': { name: 200, id: "address2", typeBox: 1, dataArray: [], classCat: "form-control inp AddressDetail", defaultList: [], width:'450px' },
        'add3': { name: 300, id: "address3", typeBox: 1, dataArray: [], classCat: "form-control inp AddressDetail", defaultList: [], width: '450px'},
        'add4': { name: 400, id: "address4", typeBox: 1, dataArray: [], classCat: "form-control inp AddressDetail", defaultList: [], width: '450px'},
        'contry': { name: 500, id: "country", typeBox: 1, dataArray: [], classCat: "form-control inp AddressDetail", defaultList: [], width: '450px'},
        'zone': { name: 600, id: "zone", typeBox: 1, dataArray: [], classCat: "form-control inp AddressDetail", defaultList: [], width: '450px'},
        'state': { name: 700, id: "state", typeBox: 1, dataArray: [], classCat: "form-control inp AddressDetail", defaultList: [], width: '450px'},
        'city': { name: 800, id: "city", typeBox: 1, dataArray: [], classCat: "form-control inp AddressDetail", defaultList: [], width: '450px'},
        'post': { name: 900, id: "postcode", typeBox: 1, dataArray: [], classCat: "form-control inp AddressDetail", defaultList: [], width: '450px'},
        'tel': { name: 1000, id: "tel", typeBox: 1, dataArray: [], classCat: "form-control inp AddressDetail", defaultList: [], width: '450px'},
        'gst': { name: 1100, id: "gstno", typeBox: 1, dataArray: [], classCat: "form-control inp CommercialDetail", defaultList: [], width: '450px'},
        'dist': { name: 1200, id: "distance", typeBox: 1, dataArray: [], classCat: "form-control inp CommercialDetail", defaultList: [], width: '450px'}
    }]
     const plantTableProps: any[] = [{
        'pan': { name: 1300, id: "pan", typeBox:1, dataArray: [], classCat: "form-control inp CommercialDetail", defaultList: [], width:'450px' },
        'add1': { name: 1400, id: "address1", typeBox: 1, dataArray: [], classCat: "form-control inp AddressDetail", defaultList: [], width: '450px' },
        'add2': { name: 1500, id: "address2", typeBox: 1, dataArray: [], classCat: "form-control inp AddressDetail", defaultList: [], width:'450px' },
        'add3': { name: 1600, id: "address3", typeBox: 1, dataArray: [], classCat: "form-control inp AddressDetail", defaultList: [], width: '450px'},
        'add4': { name: 1700, id: "address4", typeBox: 1, dataArray: [], classCat: "form-control inp AddressDetail", defaultList: [], width: '450px'},
        'contry': { name: 1800, id: "country", typeBox: 1, dataArray: [], classCat: "form-control inp AddressDetail", defaultList: [], width: '450px'},
        'zone': { name: 1900, id: "zone", typeBox: 1, dataArray: [], classCat: "form-control inp AddressDetail", defaultList: [], width: '450px'},
        'state': { name: 2000, id: "state", typeBox: 1, dataArray: [], classCat: "form-control inp AddressDetail", defaultList: [], width: '450px'},
        'city': { name: 2100, id: "city", typeBox: 1, dataArray: [], classCat: "form-control inp AddressDetail", defaultList: [], width: '450px'},
        'post': { name: 2200, id: "postcode", typeBox: 1, dataArray: [], classCat: "form-control inp AddressDetail", defaultList: [], width: '450px'},
        'tel': { name: 2300, id: "tel", typeBox: 1, dataArray: [], classCat: "form-control inp AddressDetail", defaultList: [], width: '450px'},
        'gst': { name: 2400, id: "gstno", typeBox: 1, dataArray: [], classCat: "form-control inp CommercialDetail", defaultList: [], width: '450px'},
        'dist': { name: 2500, id: "distance", typeBox: 1, dataArray: [], classCat: "form-control inp CommercialDetail", defaultList: [], width: '450px'}
    }]
    const bankTableProps: any[] = [{
     
        'bank': { name: 2700, id: "name", typeBox: 1, dataArray: [], classCat: "form-control inp AddressDetail", defaultList: [], width: '450px' },
        'branch': { name: 2800, id: "address", typeBox: 1, dataArray: [], classCat: "form-control inp AddressDetail", defaultList: [], width:'450px' },
        'accNo': { name: 2900, id: "acno", typeBox: 1, dataArray: [], classCat: "form-control inp AddressDetail", defaultList: [], width: '450px'},
        'accType': { name: 3000, id: "acctype", typeBox: 1, dataArray: [], classCat: "form-control inp AddressDetail", defaultList: [], width: '450px'},
        'swiftCode': { name: 3100, id: "swiftcode", typeBox: 1, dataArray: [], classCat: "form-control inp AddressDetail", defaultList: [], width: '450px'},
        'ifsc': { name: 3200, id: "ifsccode", typeBox: 1, dataArray: [], classCat: "form-control inp AddressDetail", defaultList: [], width: '450px'},
        'currency': { name: 3300, id: "currency", typeBox: 1, dataArray: [], classCat: "form-control inp AddressDetail", defaultList: [], width: '450px'},
        'country': { name: 3400, id: "country", typeBox: 1, dataArray: [], classCat: "form-control inp AddressDetail", defaultList: [], width: '450px'}
       
    }]

    var [shipping, setShipping]: any = React.useState(shippingTableProps);
    var [plant, setPlant]: any = React.useState(plantTableProps);
    var [bankArr, setBankArr]: any = React.useState(bankTableProps);

    return (
        <>
            <div className="main card firstDiv" >

                <div className="text-center card-title col-12" style={{ textAlign: 'start'}}> 
                    <span className="row-header p-0 m-0" >{title}</span>
                </div>
                <div className="card-body row col-sm-12 m-0 p-0">
                    <form className="row-content form col-sm-12 pt-0">
                        <fieldset className="form-group border p-0" >
                            <legend className="px-2" data-toggle="collapse" data-target="#genDetails" aria-expanded="true" aria-controls="genDetails" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>General Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>

                            <div className="show" id="genDetails">
                                <span className="d-flex section2 col-sm-12">
                                        <MasterInput2 name="series" label="Series" ipTitle="Enter Series" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp int" />

                                    <span className="col-1 m-0"></span>


                                    <MasterInput2 name="codestr" label="Customer Code" ipTitle="Enter Customer Code" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp str" />
                                   
                                </span>

                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="name" label="Customer Name" ipTitle="Enter Customer Name" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp str" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="group" label="Customer Group" ipTitle="Enter Customer Group" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp str" />

                                </span>

                                    <span className="d-flex section2 col-sm-12">
                                    {/*  <MasterInput2 name="ladger" label="Ledger Type" ipTitle="Enter Ledger Type" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp str" />*/}
                                    <>
                                        <label htmlFor="ledgertype " style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 labl2">Ledger Type</label>
                                        <select name="ledgertype " className="form-control col-4 inp str " style={{ height: '25px', borderColor: "#86a4c3" }} title="Is Ledger Type" onBlur={handleChangeField}>
                                            <option value={1} >Ledger</option>
                                            <option value={0} selected>sub-Ledger</option>
                                        </select>
                   
                                    </>
                                        <span className="col-1 m-0"></span>
                                    <MasterInput2 name="majorproduct" label="Major Products" ipTitle="Enter Major Products" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp str" />


                                </span>
                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="delterm" label="Delivery Terms" ipTitle="Enter Delivery Terms" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp str" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="payterm" label="Payment terms" ipTitle="Enter Payment terms" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp str" />
                                </span>

                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 name="opbal" label="Opening Balance" ipTitle="Enter Opening Balance" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp str" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="paydate" label="First payment Date" ipTitle="Enter Payment terms" ipType="date" handleChange={handleChangeField} classCategory="form-control col-4 inp str" />
                                   

                                </span>

                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 name="dayfreq" label="Days Frequency" ipTitle="Enter Days Frequency" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp str" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="tax" label="Tax" ipTitle="Enter Tax" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp str" />


                                </span>

                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 name="type" label="Type" ipTitle="Enter Type" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp str" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="scheme" label="Scheme" ipTitle="Enter Scheme" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp str" />


                                </span>

                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 name="payto" label="Pay To" ipTitle="Enter Pay To" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp str" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="nature" label="Nature" ipTitle="Enter Nature" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp str" />


                                </span>


                                <span className="d-flex section2 col-sm-12">
                                    <>
                                        <label htmlFor="multiCurr" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 labl2">Multi Currency</label>
                                        <select name="multiCurr" className="form-control col-4 inp str " style={{ height: '25px', borderColor: "#86a4c3" }} title="is Multi Currency"> {/* notFound*/}
                                            <option value={1} >Y</option>
                                            <option value={0} selected>N</option>
                                        </select>
                                        <HiddenModal />
                                    </>


                                </span>
                                <div className="card col-sm-12">
                                <span className="form col-sm-12 row-content card-body pt-0 pb-0 px-2">
                                    <span className="d-flex flex-column section2 col-sm-12" style={{ marginLeft: '23px' }}>
                                        <CustomeSwitch lablClass="custom-control-label col-9" label="Is Block" id="c1" name="c1" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChangeField} />
                                        <CustomeSwitch lablClass="custom-control-label col-9" label="Enable TCS" id="c2" name="c2" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChangeField} />
                                    </span>

                                    </span>
                                    </div>
                            </div>
                        </fieldset>
                    </form>

                    {/*<div className="card addSalecard col-sm-12">*/}
                    {/*    <div className="card-body" style={{ margin: '0', padding: '0', minHeight: '36vh' }}>*/}
                           
                    {/*    </div>*/}
                    {/*</div>*/}
                   
                    <form className="form col-sm-12 row-con`tent card-body pt-0 pb-0">
                        <fieldset className="form-group border p-0">
                            <legend className="px-2" data-toggle="collapse" data-target="#personalDet" aria-expanded="false" aria-controls="personalDet" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Personal Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0    96v320c0  35.34 28.65 64 64  64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2    230.7 352 224   352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120   192h208c9.531  0 18.19 5.656   21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>
                            <div className="collapse" id="personalDet">

                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="pdperson" label="Contact Person" ipTitle="Enter Pay To" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp str" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="pdmob" label="Mobile No." ipTitle="Enter Mobile No." ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp str" />
                                   
                                </span>

                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="pdemail" label="Email" ipTitle="Enter Email" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp str" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="pddesignation" label="Designation" ipTitle="Enter Designation" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp str" />

                                </span>

                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="pdexe" label="Chief Executive" ipTitle="Enter Chief Executive" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp str" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="pdexetel" label="Chief Exe. Mobile No." ipTitle="Enter Chief Exe. Mobile No." ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp str" />
                                   
                                </span>

                                <span className="d-flex section2 col-sm-12">


                                   
                                </span>

                            </div>
                        </fieldset>
                    </form>
                    <div className="row card-footer col-12 " style={{ margin: '1em 0%' }}>
                        <span className="d-flex align-items-center m-0 p-0">
                            <>
                                <label htmlFor="addresstype" style={{ fontSize: '0.8em', width: '100%', marginLeft: '2em' }} className="form-label">Address. Options</label>
                                <select name="addresstype" className="form-control str AddressDetail" onBlur={handleAddressOptions} >

                                    <option style={{ fontFamily: "trebuc" }} value={1} selected >Corporate</option>
                                    <option style={{ fontFamily: "trebuc" }} value={2} >Plant</option>
                                    {
                                        accountType == "3" ? (<option style={{ fontFamily: "trebuc" }} value={3 }>Shipping</option>) : null
                                    }
                                    
                                </select>
                                <svg className="m-0 ml-1 p-0" style={{ width: '20px', cursor: 'pointer', visibility: 'hidden' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" /></svg>

                            </>
                        </span>

                    </div>

                    <div style={{ margin: '0', width: '100%', padding: '0' }} id="addres">
                        <form className="form col-sm-12 row-content card-body pt-0">

                            <fieldset className="form-group border p-0">
                                <legend className="px-2" data-toggle="collapse" data-target="#contAdd" aria-expanded="false" aria-controls="personalDet" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>{opn}<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0    96v320c0  35.34 28.65 64 64  64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2    230.7 352 224   352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120   192h208c9.531  0 18.19 5.656   21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>

                                {
                                   
                                    opn == 1 ? (
                                        <div className="collapse" id="contAdd">
                                            <span className="d-flex section2 col-sm-12">
                                                <MasterInput2 name="email" classCategory="form-control col-4 inp str" ipType="text" label="Email ID" ipTitle="Enter Email" handleChange={handleChangeField} />
                                                <span className="col-1 m-0"></span>
                                                <MasterInput2 name="tel" classCategory="form-control col-4 inp str" ipType="tel" label="Mobile No." ipTitle="Enter Mobile Number" handleChange={handleChangeField} />
                                           
                                                

                                            </span>

                                            <span className="d-flex section2 col-sm-12">
                                                <MasterInput2 name="address1" classCategory="form-control col-4 inp str" ipType="text" label="Address" ipTitle="Enter Address" handleChange={handleChangeField} />
                                                <span className="col-1 m-0"></span>
                                                <MasterInput2 name="address2" classCategory="form-control col-4 inp str" ipType="text" label="" ipTitle="Enter Address" handleChange={handleChangeField} />
                                               
                                                
                                                {/*    <MasterInput2 name="zone" classCategory="form-control inp AddressDetail" ipType="text" label="Zone" ipTitle="Enter Zone" dataArray={masters.zone} change={handleChangeField} />*/}
                                                {/*    <HiddenModal />*/}
                                                {/*</>*/}

                                            </span>

                                            <span className="d-flex section2 col-sm-12">
                                                <MasterInput2 name="address3" classCategory="form-control col-4 inp str" ipType="text" label="" ipTitle="Enter Address" handleChange={handleChangeField} />
                                                <span className="col-1 m-0"></span>
                                                <MasterInput2 name="address4" classCategory="form-control col-4 inp str" ipType="text" label="" ipTitle="Enter Address" handleChange={handleChangeField} />
                                                {/*<>*/}
                                                {/*    <MasterInput2 name="state" classCategory="form-control inp AddressDetail" ipType="text" label="State" ipTitle="Enter State" dataArray={masters.state} change={handleChangeField} />*/}
                                                {/*    <HiddenModal />*/}
                                                {/*</>*/}
                                                {/*<>*/}
                                                {/*    <MasterInput2 name="city" classCategory="form-control inp AddressDetail" ipType="text" label="City" ipTitle="Enter City" dataArray={masters.city} change={handleChangeField} />*/}
                                                {/*    <HiddenModal />*/}
                                                

                                            </span>

                                            <span className="d-flex section2 col-sm-12">
                                                <MasterInput2 name="country" classCategory="form-control col-4 inp str" ipType="text" label="Country" ipTitle="Enter Country" handleChange={handleChangeField} />
                                                <span className="col-1 m-0"></span>
                                                <MasterInput2 name="zone" classCategory="form-control col-4 inp str" ipType="text" label="Zone" ipTitle="Enter Zone" handleChange={handleChangeField} />
                              
                                               

                                            </span>

                                            <span className="d-flex section2 col-sm-12">
                                                <MasterInput2 name="state" classCategory="form-control col-4 inp str" ipType="text" label="State" ipTitle="Enter State" handleChange={handleChangeField} />
                                                <span className="col-1 m-0"></span>
                                                <MasterInput2 name="city" classCategory="form-control col-4 inp str" ipType="text" label="City" ipTitle="Enter City" handleChange={handleChangeField} />
                                          
                                            </span>
                                            <span className="d-flex section2 col-sm-12">
                                                <MasterInput2 name="station" classCategory="form-control col-4 inp str" ipType="text" label="Station" ipTitle="Enter Station" handleChange={handleChangeField} />
                                                <span className="col-1 m-0"></span>
                                                <MasterInput2 name="postcode" classCategory="form-control col-4 inp str" ipType="text" label="Pin Code" ipTitle="Enter Pin Code" handleChange={handleChangeField} />
                                            </span>

                                        </div>
                                    ) : null
                                }
                                {
                                    opn == 2 ? (
                                        <div className="collapse" id="contAdd">
                                            <WriteTable
                                                HandleIpSelect={HandlePlantTable}
                                                getCurrentRowNo={getCurrentRowNo}
                                                addRowFunc={AddRow}
                                                setRowFunc={setPlant}
                                                deleteRowFunc={DeleteRow}
                                                tableProps={plantTableProps}
                                                columns={[
                                                    //{ field:'pname', header:"Plant Name", ipType:'text'},
                                                    { field: 'pan', header: "PAN", ipType:'text' },
                                                    { field: 'add1', header: "Address-1", ipType: 'text'  },
                                                    { field: 'add2', header: "Address-2", ipType: 'text' },
                                                    { field: 'add3', header: "Address-3", ipType: 'text' },
                                                    { field: 'add4', header: "Address-4", ipType: 'text'  },
                                                    { field: 'contry', header: "Country", ipType: 'number' },
                                                    { field: 'zone', header: "Zone", ipType: 'number'  },
                                                    { field: 'state', header: "State", ipType: 'number'  },
                                                    { field: 'city', header: "City", ipType: 'number'  },
                                                    { field: 'post', header: "Post Code", ipType: 'text'  },
                                                    { field: 'tel', header: "Tel No.", ipType: 'text'  },
                                                    { field: 'gst', header: "GST", ipType: 'text' },
                                                    { field: 'dist', header: "Distance", ipType:'number'  }
                                                ]}
                                                dataArr={plant}
                                                title="Plant"
                                            />
                                        </div>
                                    ) : null
                                }
                                {
                                    opn == 3 ? (
                                        <div className="collapse" id="contAdd">
                                        <WriteTable
                                                HandleIpSelect={HandleShippingTable}
                                          getCurrentRowNo={getCurrentRowNo}
                                                addRowFunc={AddRow}
                                                setRowFunc={setShipping}
                                          deleteRowFunc={DeleteRow}
                                                tableProps={shippingTableProps}
                                          columns={[
                                              { field: 'pan', header: "PAN", ipType: 'text' },
                                              { field: 'add1', header: "Address-1", ipType: 'text' },
                                              { field: 'add2', header: "Address-2", ipType: 'text' },
                                              { field: 'add3', header: "Address-3", ipType: 'text' },
                                              { field: 'add4', header: "Address-4", ipType: 'text' },
                                              { field: 'contry', header: "Country", ipType: 'number' },
                                              { field: 'zone', header: "Zone", ipType: 'number' },
                                              { field: 'state', header: "State", ipType: 'number' },
                                              { field: 'city', header: "City", ipType: 'number' },
                                              { field: 'post', header: "Post Code", ipType: 'text' },
                                              { field: 'tel', header: "Tel No.", ipType: 'text' },
                                              { field: 'gst', header: "GST", ipType: 'text' },
                                              { field: 'dist', header: "Distance", ipType: 'number' }
                                                ]}
                                                dataArr={shipping}
                                          title="Shipping"
                                        />
                                        </div>
                                    ) : null
                                }
                            </fieldset>

                        </form>
                    </div>
                    <hr style={{ margin: '0', padding: '0' }} />
                    <div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">
                        <WriteTable
                            HandleIpSelect={HandleBankDetails}
                            getCurrentRowNo={getCurrentRowNo}
                            addRowFunc={AddRow}
                            setRowFunc={setBankArr}
                            deleteRowFunc={DeleteRow}
                            tableProps={bankTableProps}
                            columns={[
            
                                { field: 'bank', header: "Name Of Bank", ipType: 'text'},
                                { field: 'branch', header: "Branch", ipType: 'text'},
                                { field: 'accNo', header: "A/C No.", ipType: 'text'},
                                { field: 'accType', header: "A/C Type", ipType: 'text'},
                                { field: 'swiftCode', header: "Swift Code", ipType: 'text' },
                                { field: 'ifsc', header: "IFSC Code", ipType: 'text'},
                                { field: 'currency', header: "Currency", ipType: 'number'},
                                { field: 'country', header: "Country", ipType: 'number'},
                                
                           
                            ]}
                            dataArr={bankArr}
                            title="Bank Details"
                        />
                    </div>

                    <hr style={{ margin: '0', padding: '0' }} />

                    <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                        {
                            accountType == "3" ? (
                             <div className="card col-sm-5" style={{ padding: '0', margin: '0' }}>
                         
                                    <div className="text-center card-title col-12" style={{ textAlign: 'start' }}>
                                        <span className="row-header p-0 m-0" >Last 3 Years TurnOver</span>
                                    </div>
                                <div className="card-body table-responsive" style={{ margin: '0', padding: '0' }}>
                                    <table className="table table-striped table-bordered table-hover table-sm" style={{ margin: '0' }}>
                                        <thead className="thead-light table-secondary text-center">
                                            <tr>
                                                <th>S. No</th>
                                                <th>Year</th>
                                                <th>TurnOver(Lacks)</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td> <input name="Year1" className="form-control inp str AccountMaster" type="text" title="Enter Year No." onBlur={handleChangeField} style={{ width: '70px', margin: 'auto' }} /></td>
                                                <td> <input name="TurnOver1" className="form-control inp float AccountMaster" type="text" title="Enter Turnover 1" onBlur={handleChangeField} style={{ width: '120px', margin: 'auto' }} /></td>

                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td><input name="Year2" className="form-control inp str AccountMaster" type="text" title="Enter Year No." onBlur={handleChangeField} style={{ width: '70px', margin: 'auto' }} /></td>
                                                    <td><input name="TurnOver2" className="form-control inp float AccountMaster" type="text" title="Enter Year No." onBlur={handleChangeField} style={{ width: '120px', margin: 'auto' }} /></td>


                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td><input name="Year3" className="form-control inp str AccountMaster" type="text" title="Enter Year No." onBlur={handleChangeField} style={{ width: '70px', margin: 'auto' }} /></td>
                                                    <td><input name="TurnOver3" className="form-control inp float AccountMaster" type="text" title="Enter Year No." onBlur={handleChangeField} style={{ width: '120px', margin: 'auto' }} /></td>


                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                   
                             </div>
                            ) : null
                        }
                       
                        <div className="card col-sm-6" style={{ padding: '0', margin: '0' }}>
                            <div className="text-center card-title col-12" style={{ textAlign: 'start' }}>
                                <span className="row-header p-0 m-0" >Additional Docs</span>
                            </div>

                            <div className="card-body col-12" style={{ margin: '0', padding: '0' }}>

                                <span className="d-flex col-sm-12 m-0 pl-0 pr-0">
                                    <>
                                        <label htmlFor="empName" style={{ fontSize: '0.8em' }} className="form-label col-3 labl2 labl">Data Collected By</label>
                                        <input type="text" name="empName" className="form-control str AccountMaster inp" />
                                    </>
                                    <>
                                        <label htmlFor="date" style={{ fontSize: '0.8em' }} className="form-label labl2 labl">Date</label>
                                        <input type="date" style={{ fontSize: '0.8em' }} name="date" className="form-control inp" />
                                    </>

                                </span>
                          
                                <span className="d-flex col-sm-10 m-0 pl-0 pr-0">
                                    <>
                                        <label htmlFor="docs" style={{ fontSize: '0.8em' }} className="form-label ml-2">Upload Docs</label>
                                        <input type="file" name="docs" />
                                    </>
                                    <span>
                                        <button type="button">Remove</button>
                                    </span>


                                </span>
                            </div>

                        </div>
                    </div>


                </div>
                <hr style={{ margin: '0', padding: '0' }} />
            </div>
            <div className="btn-group col-12 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0">Save</button>
                <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} className="btn btn-success mr-2 ml-2 pl-0 pr-0 " onClick={handleSave$Submit}>Save & Submit</button>
                <button type="button" style={{ border: '2px solid red', letterSpacing: 3 }} className="btn btn-danger pl-0 pr-0">Quit</button>
            </div>
        </>
    );


}