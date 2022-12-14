import * as React from 'react';
import { useState} from 'react';
import CustomInput from '../../components/custom-input/custom-input.component';
import CustomeSwitch from '../../components/CustomSwitch/custom-switch.component';


export default function Cust_Sup_Page({ handleChange }: any) {
    const [PrimaryGroup, setPrimaryGroup]: any = useState(false)

    return (
        <>
            <div className="main card firstDiv">
                <div
                    className="text-center card-title col-12"
                    style={{ textAlign: "start", backgroundColor: "#8389d4" }}
                >
                    <span className="row-header p-0 m-0">Customer Group</span>
                </div>
                <form className="row-content form col-sm-12 pt-0">
                    {/* <fieldset className="form-group border p-0"> */}
                    {/* <legend
              className="px-2"
              style={{ fontSize: "1.1rem", cursor: "pointer" }}
            >
              <svg
                className="ml-1"
                style={{ width: "15px" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" />
              </svg>
            </legend> */}

                    <span className="d-flex section2 mb-2 col-sm-12">
                        <CustomInput
                            name="Name"
                            classCategory="form-control inp Name"
                            ipType="text"
                            label="Name"
                            ipTitle="Enter Name"
                            dataArray={[]}
                        />

                    </span>

                    <span className="d-flex section2 col-sm-12">
                        <CustomInput
                            name="Alias"
                            classCategory="form-control inp mb-2 Alias"
                            ipType="text"
                            label="Alias"
                            ipTitle="Enter Alias"
                            dataArray={[]}
                        />

                    </span>

                    <span className="d-flex section2 mb-2 col-sm-12"  >
                        <label
                            htmlFor="Primary Group"
                            style={{ fontSize: "0.8em" }}
                            className="form-label labl labl2"
                        >
                            Primary Group
                        </label>
                        <input type="checkbox" onBlur={handleChange} className="form-control custom-control-input col-3 InventoryDet" name="" id="" style={{ cursor: 'pointer' }} />
                        
                    </span>
                    <span className="d-flex section2 col-sm-12">
                        {
                            PrimaryGroup === false ? (
                                <>
                                    <label
                                        htmlFor="GSTCategory"
                                        style={{ fontSize: "0.8em" }}
                                        className="form-label labl labl2"
                                    >
                                        Under Group
                                    </label>

                                    <select
                                        name="TransporterDetails"
                                        className="form-control inp mb-2 GSTCategory"
                                        style={{ height: "25px" }}
                                        title="Entert Default GST Category"
                                    >
                                        <option value={1}>group1</option>
                                        <option value={0}>group</option>
                                    </select>
                                </>
                            ) : null
                        }


                    </span>
                    <span className="d-flex section2 mb-2 col-sm-12">
                        <label
                            htmlFor="Is Import/Export"
                            style={{ fontSize: "0.8em" }}
                            className="form-label labl labl2"
                        >
                            Is Import/Export
                        </label>
                        <input type="checkbox" onBlur={handleChange} className="form-control custom-control-input col-3 InventoryDet" name="" id="" style={{ cursor: 'pointer' }} />
                    </span>

                    {/* </fieldset> */}
            <div className="btn-group col-12 mt-3" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3, width: "100px" }} className="btn btn-info pl-0 pr-0 col-md-1 col-xs-6" >Save</button>

            </div>
                </form>
            </div>
        </>
    )
}

