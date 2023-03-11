import * as React from 'react';
import { useState } from 'react';
import DatalistInput from 'react-datalist-input';
import 'react-datalist-input/dist/styles.css';
import CustomInput, { CustomSelect, MasterInput, MasterInput2 } from '../../../components/custom-input/custom-input.component';
import CustomeSwitch from '../../../components/CustomSwitch/custom-switch.component';
import RadioButton from '../../../components/RadioButton/radio-button.component';

export default function BillSundry_Page({ handleChange, handlePosting, ...otherProps }: any) {
    const [showhide, setshowhide] = useState("Sale");
    const [value, setValue] = useState(false);
    const handelshowhide = (event: any) => {
        const getuser = event.target.value;
        // console.log(getuser)
        setshowhide(getuser);
    };
    return (
        <>
            <div className="main card firstDiv">
                <div
                    className="text-center card-title col-12"
                    style={{ textAlign: "start", backgroundColor: "#8389d4" }}
                >
                    <span className="row-header p-0 m-0">Bill Sundry</span>
                </div>
                {/* <div className="card-body row col-sm-12 m-0 p-0"> */}
                <form className="row-content form col-sm-12 pt-0">
                    <fieldset className="form-group border p-0">
                        <legend className="px-2" data-toggle="collapse" data-target="#genDetails" aria-expanded="true" aria-controls="genDetails" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>General Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>


                        <div className="show" id="genDetails">

                            <span className="d-flex section2 col-sm-12">

                                <MasterInput2
                                    handleChange={handleChange}
                                    name="Code"
                                    classCategory="form-control inp col-4 seriesConf"
                                    ipType="text"
                                    label="Code"
                                    ipTitle="Enter Alias"

                                />
                                <span className='col-1 m-0'></span>
                                <MasterInput2

                                    name="Name"
                                    handleChange={handleChange}
                                    classCategory="form-control inp col-4 seriesConf"
                                    ipType="text"
                                    label="Name"
                                    ipTitle="Enter Name"

                                />

                            </span>


                            <span className="d-flex section2 col-sm-12">

                                <MasterInput2
                                    handleChange={handleChange}
                                    name="PName"
                                    classCategory="form-control inp col-4 seriesConf"
                                    ipType="text"
                                    label="Print Name"
                                    ipTitle="Enter Print Name"

                                />
                                <span className='col-1 m-0'></span>

                                <>
                                    <label htmlFor="series" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 labl2">Bill Sundry Type</label>
                                </>
                                <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                                    <DatalistInput

                                        className="d-flex col-12 m-0 p-0"
                                        inputProps={{ className: 'form-control inp col-12 datalist int', name: 'BSType' }}
                                        listboxProps={{ className: 'text-left mt-5' }}

                                        onSelect={handleChange}
                                        items={[{ id: 1, value: 'Additive' }, { id: 2, value: 'Subtractive' }]}
                                    />

                                </span>
                            </span>
                            <span className="d-flex section2 col-sm-12">
                                <>
                                    <label htmlFor="series" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 labl2"> Bill Sundry Nature</label>
                                </>
                                <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                                    <DatalistInput

                                        className="d-flex col-12 m-0 p-0"
                                        inputProps={{ className: 'form-control inp col-12 datalist int', name: 'BSNature' }}
                                        listboxProps={{ className: 'text-left mt-5' }}

                                        onSelect={handleChange}
                                        items={[{ id: 1, value: 'Other' }, { id: 2, value: 'CGST' }, { id: 3, value: 'SGST' }, { id: 4, value: 'IGST' }, { id: 5, value: 'Cess On GST' },
                                        { id: 6, value: 'Add. Cess on GST' }, { id: 7, value: 'TCS' }, { id: 8, value: 'TDS' }, , { id: 9, value: 'Round Off' }]}
                                    />

                                </span>
                                <span className='col-1 m-0'></span>


                                <>
                                    <MasterInput2

                                        name="Value"
                                        classCategory="form-control inp mb-2 col-4 seriesConf"
                                        handleChange={handleChange}
                                        ipType="number"
                                        label="Default Value"
                                        ipTitle="Enter Default Value"

                                    />
                                </>
                            </span>


                            <div className="col-4"></div>
                        </div>
                    </fieldset>
                </form>
                {/* ---------------------------------------------  Affects the Cost of Goods in Start-------------------------------------------- */}
                <>
                    <form className="form col-sm-12 row-content card-body pt-0 pb-0">
                        <fieldset className="form-group border p-0">
                            <legend
                                className="px-2"
                                data-toggle="collapse"

                                aria-expanded="false"
                                aria-controls="personalDet"
                                style={{ fontSize: "1.1rem", cursor: "pointer" }}
                            >
                                Affects The Cost Of Goods In

                            </legend>
                            <div className="collapse d-flex flex-row" >
                                <span className="col-3">
                                    <CustomeSwitch lablClass="custom-control-label col-10 m-0 ml-4" label="Purchase" id="EffCostPur" name="EffCostPur" classCat="form-control custom-control-input col-3 seriesConf" handleChange={handleChange} />
                                </span>
                                <span className="col-3">
                                    <CustomeSwitch lablClass="custom-control-label col-10 m-0 ml-4" label="Sale" id="EffCostSale" name="EffCostSale" classCat="form-control custom-control-input col-3 seriesConf" handleChange={handleChange} />
                                </span>
                                <span className="col-3">
                                    <CustomeSwitch lablClass="custom-control-label col-10 m-0 ml-4" label="Material Issue" id="EffCostMatIssue" name="EffCostMatIssue" classCat="form-control custom-control-input col-2 seriesConf" handleChange={handleChange} />
                                </span>
                                <span className="col-3">
                                    {/* <CustomeSwitch label="Material Reciept" id="EPO" name="EPO" classCat="form-control custom-control-input col-3 seriesConf" handleChange={handleChange} />*/}
                                    <CustomeSwitch lablClass="custom-control-label col-10 m-0 ml-4" label="Stock Transfer" id="EffCostST" name="EffCostST" classCat="form-control custom-control-input col-3 seriesConf" handleChange={handleChange} />
                                </span>

                            </div>
                        </fieldset>
                    </form>
                </>
                {/* -----------------------------------------------------------End---------------------------------------------------------------- */}

                <>
                    <div
                        className="row row-content col-12 "
                        style={{ margin: "1em 0%", backgroundColor: "whitesmoke" }}
                    >
                        <span className="d-flex align-items-center m-0 p-0">
                            <>
                                <label
                                    htmlFor="zone"
                                    style={{
                                        fontSize: "0.8em",
                                        width: "100%",
                                        marginLeft: "2em",
                                    }}
                                    className="form-label"
                                >
                                    Accounting In
                                </label>
                                <select
                                    name="zone"
                                    className="form-control"
                                    onClick={handelshowhide}
                                >
                                    <option
                                        style={{ fontFamily: "trebuc" }}
                                        value="Sale"
                                        selected
                                    >
                                        Sales
                                    </option>
                                    <option style={{ fontFamily: "trebuc" }} value="Purchase">
                                        Purchase
                                    </option>
                                </select>
                                <svg
                                    className="m-0 ml-1 p-0"
                                    style={{
                                        width: "20px",
                                        cursor: "pointer",
                                        visibility: "hidden",
                                    }}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" />
                                </svg>
                            </>
                        </span>
                    </div>
                    <div
                        style={{ margin: "0", width: "100%", padding: "0" }}
                        id="accounting"
                    >
                        {/* ---------------------------------------------------------------ToggelSwitch start-------------------------------------------------- */}
                        <form className="form col-sm-12 row-content card-body pt-0">
                            <fieldset className="form-group border p-0">
                                <legend
                                    className="px-2"
                                    data-toggle="collapse"
                                    data-target="#contAdd"
                                    aria-expanded="false"
                                    aria-controls="personalDet"
                                    style={{ fontSize: "1.1rem", cursor: "pointer" }}
                                >
                                    <svg
                                        className="ml-1"
                                        style={{ width: "15px" }}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                    >
                                        <path d="M384 32H64C28.65 32 0 60.65 0    96v320c0  35.34 28.65 64 64  64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2    230.7 352 224   352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120   192h208c9.531  0 18.19 5.656   21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" />
                                    </svg>
                                </legend>

                                <div className="collapse  d-flex flex-row" id="contAdd">
                                    {/* ---------------------ToggelSwitch Sales Start-------------------- */}
                                    {showhide === "Sale" ? (
                                        <>

                                            <span className="col-3">
                                                <CustomeSwitch lablClass="custom-control-label col-10 m-0 ml-4" label="Affects Accounting" id="EffAccSale" name="EffAccSale" classCat="form-control custom-control-input col-3 seriesConf" handleChange={handleChange} />
                                            </span>
                                            <span className="col-3">
                                                <CustomeSwitch lablClass="custom-control-label col-10 m-0 ml-4" label="Adjust in Sale Amount" id="AdjSaleAmt" name="AdjSaleAmt" classCat="form-control custom-control-input col-3 seriesConf" handleChange={handleChange} />
                                            </span>
                                            <span className="col-3">
                                                <CustomeSwitch lablClass="custom-control-label col-10 m-0 ml-4" label="Adjust in Party Amount" id="AdjPartyAmtSale" name="AdjPartyAmtSale" classCat="form-control custom-control-input col-2 seriesConf" handleChange={handleChange} />
                                            </span>
                                            <span className="col-3">

                                                <CustomeSwitch lablClass="custom-control-label col-10 m-0 ml-4" label="Post Over and Above" id="PostOverAboveSale" name="PostOverAboveSale" classCat="form-control custom-control-input col-3 seriesConf" handleChange={handleChange} />
                                            </span>


                                        </>
                                    ) : null}
                                    {/* -------------------------------End------------------------------------ */}
                                    {/* --------------------------------ToggelSwitch Purchase Start----------------------------------- */}
                                    {showhide === "Purchase" ? (
                                        <>
                                            <span className="col-3">
                                                <CustomeSwitch lablClass="custom-control-label col-10 m-0 ml-4" label="Affects Accounting" id="AffAccPurch" name="AffAccPurch" classCat="form-control custom-control-input col-3 seriesConf" handleChange={handleChange} />
                                            </span>
                                            <span className="col-3">
                                                <CustomeSwitch lablClass="custom-control-label col-10 m-0 ml-4" label="Adjust in Purchase Amount" id="AdjInPurchAmt" name="AdjInPurchAmt" classCat="form-control custom-control-input col-3 seriesConf" handleChange={handleChange} />
                                            </span>
                                            <span className="col-3">
                                                <CustomeSwitch lablClass="custom-control-label col-10 m-0 ml-4" label="Adjust in Party Amount" id="AdjPartyAmtPurch" name="AdjPartyAmtPurch" classCat="form-control custom-control-input col-2 seriesConf" handleChange={handleChange} />
                                            </span>
                                            <span className="col-3">

                                                <CustomeSwitch lablClass="custom-control-label col-10 m-0 ml-4" label="Post Over and Above" id="PostOverAbocePurch" name="PostOverAbocePurch" classCat="form-control custom-control-input col-3 seriesConf" handleChange={handleChange} />
                                            </span>
                                        </>
                                    ) : null}
                                    {/* --------------------------------End--------------------------------------------------- */}
                                </div>
                            </fieldset>
                        </form>
                        {/* -------------------------------------------------------------------------End----------------------------------------------------------- */}
                    </div>
                </>
                {/*---------------------------------------------------Amount of Bill Sundry to be fed as-----------------------------------------------------------  */}
                <form className="form col-sm-12 row-content card-body pt-0 pb-0">
                    <fieldset className="form-group border p-0">
                        <legend
                            className="px-2"
                            data-toggle="collapse"
                            data-target="#Amount"
                            aria-expanded="false"
                            aria-controls="Amount"
                            style={{ fontSize: "1.1rem", cursor: "pointer" }}
                        >
                            Amount of Bill Sundry to be fed as
                        </legend>

                        <div className="form-check d-flex flex-row">


                            <span className="col-2">
                                <RadioButton
                                    id="1"
                                    name="AmtBSFed"
                                    lablClass=""
                                    handleChange={handleChange}

                                    label="Absolute Amount"
                                    calssCat="seriesConf"

                                />
                            </span>
                            <span className="col-2">
                                <RadioButton
                                    id="2"
                                    name="AmtBSFed"
                                    lablClass=""
                                    handleChange={handleChange}

                                    label="Per Main Qty."
                                    classCat="seriesConf"

                                />
                            </span>
                            <span className="col-2">
                                <RadioButton
                                    id="3"
                                    name="AmtBSFed"
                                    lablClass=""
                                    handleChange={handleChange}

                                    label="Per Alt. Qty."
                                    classCat="seriesConf"

                                />
                            </span>
                            <span className="col-2">
                                <RadioButton
                                    id="4"
                                    name="AmtBSFed"
                                    lablClass=""
                                    handleChange={handleChange}

                                    label="Per Packaging Qty."
                                    classCat="seriesConf"

                                />
                            </span>
                            <span className="col-2">
                                <RadioButton
                                    id="5"
                                    name="AmtBSFed"
                                    lablClass=""
                                    handleChange={handleChange}

                                    label="Percentage"
                                    classCat="seriesConf"

                                />
                            </span>
                        </div>
                    </fieldset>
                </form>
                {/* ----------------------------------------------------------------End----------------------------------------------------------------------- */}

                {/*----------------------------------------------------------of---------------------------------------------------------------------  */}
                <>

                    <form className="form col-sm-12 row-content card-body pt-0 pb-0">
                        <fieldset className="form-group border p-0">
                            <legend
                                className="px-2"
                                style={{ fontSize: "1.1rem", cursor: "pointer" }}
                            >
                                of
                            </legend>
                            <div className="form-check">
                                <span className="d-flex section col-1 col-sm-12">
                                    <>
                                        <input
                                            className="form-control percentOf_input col-1 seriesConf" name="PerOf" onBlur={handleChange} style={{ height: "25px", width: "50%" }}
                                            placeholder="100" />
                                        <label
                                            htmlFor="Affects Accounting"
                                            style={{ fontSize: "0.8em", marginLeft: "4px" }}
                                            className="form-label labl labl2"
                                        >
                                            % of
                                        </label>
                                    </>

                                </span>
                                <hr />
                                <span
                                    className="d-flex justify-content-between section2 col-sm-12"

                                >
                                    {/* justify-content-between */}

                                    <>
                                        <>
                                            <RadioButton
                                                id="1"
                                                name="PerOfOn"
                                                lablClass=""
                                                handleChange={handleChange}
                                                label="Net Bill Amount"
                                                classCat="seriesConf"
                                            />
                                        </>
                                        <>
                                            <RadioButton
                                                id="2"
                                                name="PerOfOn"
                                                lablClass=""
                                                handleChange={handleChange}
                                                label="Item Basic Amount"
                                                classCat="seriesConf"
                                            />
                                        </>
                                        <>
                                            <RadioButton
                                                id="3"
                                                name="PerOfOn"
                                                lablClass=""
                                                handleChange={handleChange}
                                                label="Previous Bill Sundry(s) Amount"
                                                classCat="seriesConf"
                                            />
                                        </>
                                        <>
                                            <RadioButton
                                                id="4"
                                                name="PerOfOn"
                                                lablClass=""
                                                handleChange={handleChange}
                                                label="Sum Of From To Bill Sundry(s) Amount"
                                                classCat="seriesConf"
                                            />
                                        </>
                                    </>
                                </span>
                            </div>
                            <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">

                                <div
                                    className="card col-sm-12"
                                    style={{ padding: "0", margin: "0" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            borderBottom: "1px solid grey",
                                            backgroundColor: "#8389d4",
                                            margin: "0",
                                            padding: "0",
                                        }}
                                    >
                                        <span
                                            className="card-title"
                                            style={{
                                                fontSize: "15px",
                                                margin: "0",
                                                padding: "0",
                                            }}
                                        >
                                            Previous Bill Sundry(s) Details
                                        </span>
                                    </div>
                                    <div
                                        className="card-body col-12"
                                        style={{ margin: "0", padding: "0" }}
                                    >
                                        <span className="d-flex col-sm-12 m-0 pl-0 pr-0 mt-2">

                                            <MasterInput2

                                                name="NoOfPrvBS "
                                                classCategory="form-control inp seriesConf col-4"
                                                ipType="number"
                                                label="No. of Bill Sundry(s)"
                                                ipTitle="Enter No. of Bill Sundry(s)"
                                                handleChange={handleChange}
                                            />
                                            <span className='col-1 m-0'></span>


                                            <MasterInput2
                                                name="ConsolBSAmt"
                                                classCategory="form-control inp seriesConf col-4"
                                                ipType="number"
                                                label="Consolidate Bill Sun. Amt."
                                                ipTitle="Consolidate Bill Sundries Amount"
                                                handleChange={handleChange}
                                            />

                                        </span>
                                    </div>
                                </div>

                                <div
                                    className="card col-sm-12 "
                                    style={{ padding: "0", margin: "0" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            borderBottom: "1px solid grey",
                                            backgroundColor: "#8389d4",
                                            margin: "0",
                                            padding: "0",
                                        }}
                                    >
                                        <span
                                            className="card-title"
                                            style={{
                                                fontSize: "15px",
                                                margin: "0",
                                                padding: "0",
                                            }}
                                        >
                                            Sum Of Bill Sundry Amount
                                        </span>
                                    </div>

                                    <div
                                        className="card-body col-12"
                                        style={{ margin: "0", padding: "0" }}
                                    >
                                        <span className="d-flex col-sm-12 m-0 pl-0 pr-0 mt-2">
                                            <MasterInput2

                                                name="FromBS"
                                                classCategory="form-control inp seriesConf col-4"
                                                ipType="number"
                                                label="From"
                                                ipTitle="Enter From"
                                                handleChange={handleChange}
                                            />
                                            <span className='col-1 m-0'></span>

                                            <MasterInput2
                                                name="ToBS"
                                                classCategory="form-control inp seriesConf col-4"
                                                ipType="number"
                                                label="To"
                                                ipTitle="Enter To"
                                                handleChange={handleChange}
                                            />

                                        </span>
                                    </div>
                                </div>

                            </div>

                        </fieldset>
                    </form>

                    {/* ------------------------------------------------------- Bill Sundry Amount Round Off-------------------------------------------------------------- */}

                    <form className="form col-sm-12 row-content d-md-flex flex-md-row card-body pt-0 pb-0">
                        <fieldset className="form-group border col-6 p-0">
                            <legend
                                className="px-2"
                                style={{ fontSize: "1.1rem", cursor: "pointer" }}
                            >
                                Bill Sundry Amount Round Off
                            </legend>

                            <span className="d-flex section2 col-sm-12">
                                <CustomeSwitch lablClass="custom-control-label col-10 m-0 ml-4" label="Round off Bill Sundry Amount" id="BSRnd" name="BSRnd" classCat="form-control custom-control-input col-3 seriesConf" handleChange={handleChange} />
                            </span>
                        </fieldset>
                        <fieldset className="form-group border col-6 p-0">
                            <legend
                                className="px-2"
                                data-toggle="collapse"
                                data-target="#Amount"
                                aria-expanded="false"
                                aria-controls="Amount"
                                style={{ fontSize: "1.1rem", cursor: "pointer" }}
                            >
                                Amount Round Off Configuration
                            </legend>
                            <span
                                className="d-flex justify-content-between section2 col-sm-12 ml-1"

                            >
                                {/* justify-content-between */}

                                <RadioButton
                                    id="1"
                                    name="BSRndType"
                                    lablClass=""
                                    handleChange={handleChange}
                                    label="Always Upper"
                                    classCat="seriesConf"
                                />
                                <RadioButton
                                    id="2"
                                    name="BSRndType"
                                    lablClass=""
                                    handleChange={handleChange}
                                    label="Always Lower"
                                    classCat="seriesConf"
                                />
                                <RadioButton
                                    id="3"
                                    name="BSRndType"
                                    lablClass=""
                                    handleChange={handleChange}
                                    label="Automatic"
                                    classCat="seriesConf"
                                />
                            </span>
                        </fieldset>
                    </form>

                </>
            </div>

            {/* </div> */}
            <div className="btn-group col-6 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', float: 'right' }}>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0">Save</button>
                <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} onClick={handlePosting} className="btn btn-success mr-2 ml-2 pl-0 pr-0 ">Save & Submit</button>
                <button type="button" style={{ border: '2px solid orange', letterSpacing: 3 }} className="btn btn-warning pl-0 pr-0">Quit</button>
            </div>

        </>
    )
}