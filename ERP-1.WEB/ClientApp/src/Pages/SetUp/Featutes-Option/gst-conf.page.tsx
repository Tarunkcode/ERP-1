import * as React from 'react';
import CustomInput from '../../../components/custom-input/custom-input.component';

export default function GSTConf_Page({ handleChange}: any) {
    return (
        <>
            <div className="main card firstDiv">
                <div
                    className="text-center card-title col-12"
                    style={{ textAlign: "start", backgroundColor: "#8389d4" }}
                >
                    <span className="row-header p-0 m-0">GST Configuration</span>
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
                        <label
                            htmlFor="Enable GST"
                            style={{ fontSize: "0.8em" }}
                            className="form-label labl labl2"
                        >
                            Enable GST
                        </label>
                        <input type="checkbox" onBlur={handleChange} className="form-control custom-control-input col-3 InventoryDet" name="" id="" style={{ cursor: 'pointer' }} />
                    </span>

                    <span className="d-flex section2 col-sm-12">
                        <label
                            htmlFor="MajorProduct"
                            style={{ fontSize: "0.8em" }}
                            className="form-label labl labl2"
                        >
                            Type
                        </label>

                        <select
                            name="Type"
                            className="form-control inp mb-2 Type"
                            style={{ height: "25px" }}
                            title="Type"
                        >
                            <option value={1}>VAT</option>
                            <option value={0}>GST</option>
                        </select>
                    </span>
                    <span className="d-flex section2 col-sm-12">
                        <CustomInput
                            name="GSTIN"
                            classCategory="form-control inp mb-2 GSTIN"
                            ipType="text"
                            label="GSTIN"
                            ipTitle="Enter GSTIN"
                            dataArray={[]}
                        />
                    </span>
                    <span className="d-flex section2 mb-2 col-sm-12">
                        <label
                            htmlFor="E-Way Bill Required"
                            style={{ fontSize: "0.8em" }}
                            className="form-label labl labl2"
                        >
                            E-Way Bill Required
                        </label>
                        <input type="checkbox" onBlur={handleChange} className="form-control custom-control-input col-3 InventoryDet" name="" id="" style={{ cursor: 'pointer' }} />
                    </span>
                    <span className="d-flex section2 mb-2 col-sm-12">
                        <label
                            htmlFor="E-Invoice Required"
                            style={{ fontSize: "0.8em" }}
                            className="form-label labl labl2"
                        >
                            E-Invoice Required
                        </label>
                        <input type="checkbox" onBlur={handleChange} className="form-control custom-control-input col-3 InventoryDet" name="" id="" style={{ cursor: 'pointer' }} />
                    </span>
                    <span className="d-flex section2 col-sm-12">

                        <label
                            htmlFor="GSTCategory"
                            style={{ fontSize: "0.8em" }}
                            className="form-label labl labl2"
                        >
                            Default GST Category
                        </label>

                        <select
                            name="TransporterDetails"
                            className="form-control inp mb-2 GSTCategory"
                            style={{ height: "25px" }}
                            title="Entert Default GST Category"
                        >
                            <option value={1}>Category1</option>
                            <option value={0}>Category</option>
                        </select>

                    </span>
                    <span className="d-flex section2 col-sm-12">
                        <label
                            htmlFor="TransporterDetails"
                            style={{ fontSize: "0.8em" }}
                            className="form-label labl labl2"
                        >
                            Transporter Details in Local
                        </label>

                        <select
                            name="TransporterDetails"
                            className="form-control inp mb-2 TransporterDetails"
                            style={{ height: "25px" }}
                            title="Transporter Details"
                        >
                            <option value={1}>Sales</option>
                            <option value={0}>Purchase</option>
                        </select>
                    </span>
                    <span className="d-flex section2 col-sm-12">
                        <CustomInput
                            name=" HSNCode"
                            classCategory="form-control inp mb-2 HSNCode"
                            ipType="number"
                            label="Minimum Digits for HSN"
                            ipTitle="Enter Minimum Digits for HSN Code"
                            dataArray={[]}
                        />

                    </span>
            <div className="btn-group col-12 mt-3" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3, width: "100px" }} className="btn btn-info pl-0 pr-0 col-md-1 col-xs-6" >Save</button>

            </div>
                    {/* </fieldset> */}
                </form>
            </div>
        </>
    );
}

