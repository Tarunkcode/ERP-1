import * as React from 'react';
import './purchase.styles.css';

import CustomDataList from '../custom-data-list/custom-data-list.component';

import { useState } from 'react';
import DatePicker from "react-datepicker";

import PurchaseCard from '../Card/PurchaseCard.component';
import "react-datepicker/dist/react-datepicker.css";
import { event } from 'jquery';

import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import { useSelector } from 'react-redux';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
export default function Purchase() {


    const getState = window.localStorage.getItem('state');
    const state = JSON.parse(getState!)
    const getCompCode = window.sessionStorage.getItem('compCode');
  

    var [item, setItem]: any = React.useState([])
    var [itemGroup, setItemGroup]: any = React.useState([])
    var [brand, setbrand]: any = React.useState([])
    var [category, setCategory]: any = React.useState([])
    var [type, setType]: any = React.useState([])
    var [subCategory, setSubCategory]: any = React.useState([])



    var [changeItem, setChangeItem]: any = useState('0');
    var [changeItemGroup, setChangeItemGroup]: any = useState('0');
    var [changeBrand, setChangeBrand]: any = useState('0');
    var [changeCategory, setChangeCategory]: any = useState('0');
    var [changeType, setChangeType]: any = useState('0');
    var [changeSubCategory, setChangeSubCategory]: any = useState('0');
   

    //------------ default date block-----------------------------------------------------------------------------------------------------------------------
    const today = new Date();
    var format = today.toString().slice(4, 15)
    var yearOnly = format.slice(7, 11)
    var dateOnly = format.slice(4, 6)
    var MonthOnly = format.slice(0, 3)
    var monthNo = 0;
    if (MonthOnly.toLowerCase() == "jan") monthNo = 1;
    else if (MonthOnly.toLowerCase() == "feb") monthNo = 2;
    else if (MonthOnly.toLowerCase() == "mar") monthNo = 3;
    else if (MonthOnly.toLowerCase() == "apr") monthNo = 4;
    else if (MonthOnly.toLowerCase() == "may") monthNo = 5;
    else if (MonthOnly.toLowerCase() == "jun") monthNo = 6;
    else if (MonthOnly.toLowerCase() == "jul") monthNo = 7;
    else if (MonthOnly.toLowerCase() == "aug") monthNo = 8;
    else if (MonthOnly.toLowerCase() == "sep") monthNo = 9;
    else if (MonthOnly.toLowerCase() == "oct") monthNo = 10;
    else if (MonthOnly.toLowerCase() == "nov") monthNo = 11;
    else if (MonthOnly.toLowerCase() == "dec") monthNo = 12;

    var defaultDate = `${yearOnly}-${monthNo}-${dateOnly}`

    var [startDate, setStartDate]: any = useState(new Date("2022-04-01"));
    var [endDate, setEndDate]: any = useState(new Date);
    var [changeStartDate, setChangeStartDate]: any = useState("2022-04-01");
    var [changeEndDate, setChangeEndDate]: any = useState(defaultDate);
    //--------------------------------------------------------------------------------------------------------------------------------------------------------------


    var urlStart1 =`http://${state.domain}:${state.port}/api/values/GetMasterData?MasterType=6&Comp=${getCompCode}&FY=${state.Fy}`
    var itemGroupUrl =`http://${state.domain}:${state.port}/api/values/GetMasterData?MasterType=79&Comp=${getCompCode}&FY=${state.Fy}`
    var brandUrl =`http://${state.domain}:${state.port}/api/values/GetMasterData?MasterType=1002&Comp=${getCompCode}&FY=${state.Fy}`
    var categoryUrl=`http://${state.domain}:${state.port}/api/values/GetMasterData?MasterType=1010&Comp=${getCompCode}&FY=${state.Fy}`
    var typeUrl =`http://${state.domain}:${state.port}/api/values/GetMasterData?MasterType=1009&Comp=${getCompCode}&FY=${state.Fy}`
    var subCategoryUrl=`http://${state.domain}:${state.port}/api/values/GetMasterData?MasterType=1035&Comp=${getCompCode}&FY=${state.Fy}`
  
    const [isSending, setIsSending] = useState(false)
    const isMounted = React.useRef(true)
    console.log('CategoryUrl', categoryUrl);

    const [colors, setColors] = useState(["blue", "red", "#8884d8", "indigo", "green", "yellow", "orange", "pink", "#82ca9d", "purple", "grey", "brown"]);
    var [dataArray, setDataArray]: any = useState([]);
    var [dataArray2, setDataArray2]: any = useState([]);
    var [saleArr, setSaleArr]: any = useState([]);
    var [showResults, setShowResults] = React.useState(false)



    React.useEffect(() => {

        //Fetch Item   
        const fetchItem = async () => {
            try {
                const response = await fetch(urlStart1);
                const json = await response.json();
                /*                console.log(json.Data);*/


                setItem(json.Data);

            } catch (error) {
                console.log("error", error);
            }
        };

        fetchItem();

        // Fetch Item Group

        const fetchItemGroup = async () => {
            try {
                const response2 = await fetch(itemGroupUrl);
                const json2 = await response2.json();
                /*                console.log(json.Data);*/


                setItemGroup(json2.Data);

            } catch (error) {
                console.log("error", error);
            }
        };

        fetchItemGroup();



        // Fetch Brand

        const fetchBrand = async () => {
            try {
                const response3 = await fetch(brandUrl);
                const json3 = await response3.json();
                /*                console.log(json.Data);*/


                setbrand(json3.Data);

            } catch (error) {
                console.log("error", error);
            }
        };

        fetchBrand();

        // Fetch Category
        const fetchCategory = async () => {
            try {
                const response4 = await fetch(categoryUrl);
                const json4 = await response4.json();
                /*                console.log(json.Data);*/


                setCategory(json4.Data);

            } catch (error) {
                console.log("error", error);
            }
        };

        fetchCategory();


        // Fetch Type
        const fetchType = async () => {
            try {
                const response5 = await fetch(typeUrl);
                const json5 = await response5.json();
                /*                console.log(json.Data);*/


                setType(json5.Data);

            } catch (error) {
                console.log("error", error);
            }
        };

        fetchType();


        // Fetch Sub Category
        const fetchSubCategory = async () => {
            try {
                const response6 = await fetch(subCategoryUrl);
                const json6 = await response6.json();
                /*                console.log(json.Data);*/


                setSubCategory(json6.Data);

            } catch (error) {
                console.log("error", error);
            }
        };

        fetchSubCategory();


    }, [])


    React.useEffect(() => {
        handleItemChange
        handleItemGroupChange
        handleBrandChange
        handleCategoryChange
        handleTypeChange
        handleSubCategoryChange

      

    }, [isSending, changeItem, changeItemGroup, changeBrand, changeType, changeCategory, changeSubCategory])



    //console.log(dataArray)

    const handleItemChange = (event: any) => {
        var ITEM = event.target.value
        console.log('item dynamic', ITEM)
        for (let i = 0; i < item.length; i++) {
            if (ITEM == item[i].StateName) {
                setChangeItem(item[i].StateCode)

                break;
            }
        }
        if (ITEM == '') {
            setChangeItem('0')
        }
    }

    const handleItemGroupChange = (event: any) => {
        var ITEM_GRP = event.target.value
        for (let i = 0; i < itemGroup.length; i++) {
            if (ITEM_GRP == itemGroup[i].StateName) {
                setChangeItemGroup(itemGroup[i].StateCode)

                break;
            }
        }
        if (ITEM_GRP == '') {
            setChangeItemGroup('0')
        }
    }

    const handleBrandChange = (event: any) => {
        var BRAND = event.target.value
        for (let i = 0; i < brand.length; i++) {
            if (BRAND == brand[i].StateName) {
                setChangeBrand(brand[i].StateCode)

                break;
            }
        }
        if (BRAND == '') {
            setChangeBrand('0')
        }

    }

    const handleCategoryChange = (event: any) => {
        var CATEGORY = event.target.value
        for (let i = 0; i < category.length; i++) {
            if (CATEGORY == category[i].StateName) {
                setChangeCategory(category[i].StateCode)

                break;
            }
        }
        if (CATEGORY == '') {
            setChangeCategory("0")
        }

    }

    const handleTypeChange = (event: any) => {
        var TYPE = event.target.value
        for (let i = 0; i < type.length; i++) {
            if (TYPE == type[i].StateName) {
                setChangeType(type[i].StateCode)

                break;
            }
        }
        if (TYPE == '') {
            setChangeType('0');
        }

    }



    const handleSubCategoryChange = (event: any) => {

        var SUB_CAT = event.target.value
        for (let i = 0; i < subCategory.length; i++) {
            if (SUB_CAT == subCategory[i].StateName) {
                setChangeSubCategory(subCategory[i].StateCode)

                break;
            }
        }
        if (SUB_CAT == '') {
            setChangeSubCategory('0');
        }

    }
   

    React.useEffect(() => {
        return () => {
            isMounted.current = false
        }
    }, [])
    const sendRequest = React.useCallback(async () => {

        setShowResults(false)
        // don't send again while we are sending
        if (isSending) return
        // update state
        setIsSending(true)
        // send the actual request
        try {
            var urlStart = `http://${state.domain}:${state.port}/api/values/Annualpurchasedetails`
            var params = []
            params.push(`item=${changeItem}`);
            params.push(`itemgrp=${changeItemGroup}`);
            params.push(`brand=${changeBrand}`);
            params.push(`category=${changeCategory}`);
            params.push(`subcategory=${changeSubCategory}`);
            params.push(`itemtype=${changeType}`);
            params.push(`fromDate=${changeStartDate}`);
            params.push(`toDate=${changeEndDate}`);
            params.push(`Comp=${getCompCode}`);
            params.push(`FY=${state.Fy}`);
            console.log(urlStart + '?' + params.join('&'));


            await fetch(urlStart + '?' + params.join('&')).then(res => res.json()).then(result => {
                console.log(result.Data)

                if (result.Status == '1') {
                    var D1, D2, obj, fill;

                    for (let item = 0; item < result.Data.length; item++) {

                        D1 = result.Data[item].Month;
                        D2 = result.Data[item].Val;
                        /*   D3 = result.Data[item].D3;*/

                        D2 = parseFloat(D2);
                        /* D3 = parseFloat(D3);*/

                        D2 = D2 / 100000;
                        /* D3 = D3 / 100000;*/
                        fill = colors[item];
                        var Purchase_Amount = D2;
                        /*var Purchase_Amt = D3;*/

                        obj = { D1, Purchase_Amount, fill };
                        var obj2 = { D1, Purchase_Amount };
                        //[dataArray].
                        dataArray = [...dataArray]; // copying the old datas array
                        dataArray[item] = obj; // replace e.target.value with whatever you want to change it to

                        setDataArray(dataArray);

                        dataArray2 = [...dataArray2]
                        dataArray2[item] = obj2;
                        setDataArray2(dataArray2);
                    }
                    setShowResults(true)

                    console.log('onLoad dataArray', dataArray);

                } else {
                    alert(console.log("No data found "));
                }
            })
        }
        catch (Ex) {
            alert("calling api failed ")
        }
        // once the request is sent, update state again
        if (isMounted.current) // only update if we are still mounted
            setIsSending(false)
    }, [changeStartDate, changeEndDate,isSending, changeItem, changeItemGroup, changeBrand, changeType, changeCategory, changeSubCategory]) // update the callback if the state changes




    return (
        <div className="firstDiv">
            <div className="container col-sm-12 card" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "bottom", margin: "0 auto" }}>
                <div className="card-title col-12 text-center" style={{ margin: '0 auto' }}>
                    <span style={{ fontSize: "20px" }}>Purchase</span>
                </div>
            {/*Custom Data List*/}

            <div className="card-body panel panel-default" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', padding: '0', backgroundColor: "#F5F5F5", margin:'0' }}>
            <div className="row filterDiv panel-body col-sm-12" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "baseline", height: "100%", paddingTop: "10px" }}>



                <div className="col-sm-6 filterParent" style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", margin: '0', padding: '0' }}>

                    <div className="wrapper col-sm-4 form-group">
                        <div className="crd col-sm-12" style={{ backgroundColor: "#F5F5F5" }}>
                            <label style={{ fontSize: "12px", padding: "0", width:'121%'}} htmlFor="itemGroup" className="label-item-group form-label">Item Group</label>

                            <input id='itemGroup' name="itemGroup" type='text' className="form-control form-select col-sm-12 section" list="itemGroupList" onChange={handleItemGroupChange} />

                            {

                                itemGroup != null && itemGroup.length > 0 ?

                                    (
                                        <datalist className="itemGroup" id="itemGroupList">
                                            {
                                                itemGroup.map((obj: any) => {
                                                    return <option data-value={obj.StateCode}>{obj.StateName}</option>
                                                })
                                            }


                                        </datalist>

                                    )

                                            : console.log('fine')


                            }
                        </div>


                    </div>
                    {/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
                    <div className="wrapper col-sm-4 form-group">

                        <div className="crd" style={{ backgroundColor: "#F5F5F5" }}>
                            <label style={{ fontSize: "12px", padding: "0" }} htmlFor='item' className="form-label col-sm-12">Item</label>

                            <input id="item" name="item" type="text" className="form-control form-select col-sm-12 section" list="itemList" onChange={handleItemChange} />

                            {

                                item != null && item.length > 0 ?

                                    (
                                        <datalist className="item" id="itemList">

                                            {

                                                item.map((obj: any) => {
                                                    return <option data-value={obj.StateCode}>{obj.StateName}</option>
                                                })
                                            }


                                        </datalist>

                                    )

                                            : console.log('fine')


                            }
                        </div>

                    </div>
                    {/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
                    <div className="wrapper col-sm-4 form-group">

                        <div className="crd" style={{ backgroundColor: "#F5F5F5" }}>
                            <label style={{ fontSize: "12px", padding: "0" }} htmlFor='brand' className="form-label col-sm-12">Brand</label>

                            <input id="brand" name='brand' type='text' className="form-control form-select col-sm-12 section" list="brandList" onChange={handleBrandChange} />

                            {

                                brand != null && brand.length > 0 ?

                                    (
                                        <datalist className='brand' id="brandList">
                                            {
                                                brand.map((obj: any) => {
                                                    return <option data-value={obj.StateCode}>{obj.StateName}</option>
                                                })
                                            }


                                        </datalist>

                                    )

                                            : console.log('fine')


                            }
                        </div>

                    </div>

                </div>
                {/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

                <div className="col-sm-6 filterParent" style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", margin: '0', padding: '0' }}>
                    <div className="wrapper col-sm-4 form-group">

                        <div className="crd" style={{ backgroundColor: "#F5F5F5" }}>
                            <label style={{ fontSize: "12px", padding: "0" }} htmlFor='category' className="form-label col-sm-12">Category</label>

                            <input id='category' name='category' type='text' className="form-control form-select col-sm-12 section" list='categoryList' onChange={handleCategoryChange} />

                            {

                                category != null && category.length > 0 ?

                                    (
                                        <datalist className='category' id="categoryList">
                                            {
                                                category.map((obj: any) => {
                                                    return <option data-value={obj.StateCode}>{obj.StateName}</option>
                                                })
                                            }


                                        </datalist>

                                    )

                                            : console.log('fine')


                            }
                        </div>

                    </div>
                    {/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
                    <div className="wrapper col-sm-4 form-group">

                        <div className="crd" style={{ backgroundColor: "#F5F5F5" }}>
                            <label style={{ fontSize: "12px", padding: "0" }} htmlFor='type' className="form-label col-sm-12">Type</label>

                            <input id='type' name='type' type='text' className="form-control form-select col-sm-12 section" list='typeList' onChange={handleTypeChange} />

                            {

                                type != null && type.length > 0 ?

                                    (
                                        <datalist className='type' id="typeList">
                                            {
                                                type.map((obj: any) => {
                                                    return <option data-value={obj.StateCode}>{obj.StateName}</option>
                                                })
                                            }


                                        </datalist>

                                    )

                                            : console.log('fine')


                            }
                        </div>

                    </div>
                    {/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
                    <div className="wrapper col-sm-4 form-group">

                        <div className="crd" style={{ backgroundColor: "#F5F5F5" }}>
                            <label style={{ fontSize: "12px",width:'150%', padding: "0" }} htmlFor='subCategory' className="label-sub-category form-label">Sub Category</label>

                            <input id='subCategory' name='subCategory' type='text' className="form-control form-select col-sm-12 section" list='subCategoryList' onChange={handleSubCategoryChange} />

                                 {/*   {*/}

                                 {/*       subCategory != null && subCategory.length > 0 ?*/}

                                 {/*           (*/}
                                 {/*               <datalist className='subCategory' id='subCategoryList'>*/}
                                 {/*                   {*/}
                                 {/*                       subCategory.map((obj: any) => {*/}
                                 {/*                           return <option data-value={obj.StateCode}>{obj.StateName}</option>*/}
                                 {/*                       })*/}
                                 {/*                   }*/}


                                 {/*               </datalist>*/}

                                 {/*           )*/}

                                 {/*           : null*/}
                                 {/*}*/}
                        </div>

                    </div>

                </div>



                {/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
            </div>

            {/*date picker*/}
            <div className="col-12 col-sm-6 filterParent" style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", margin: '0', padding: '0' }}>
                <div className="wrapper col-sm-4 form-group">

                    <div className="crd" style={{ backgroundColor: "#F5F5F5" }}>
                        <label style={{ fontSize: "12px", padding: "0" }} htmlFor='startDate' className="label-from-date form-label col-sm-12">From Date</label>

                                <DatePicker

                                    name="startDate"
                                    className="startDate"
                                    selectsStart

                                    dateFormat="MMM dd, yyyy"
                                    closeOnScroll={true}
                                    selected={startDate}

                                    onChange={(k: Date) => {
                                        setStartDate(k)
                                        var format = k.toString().slice(4, 15)
                                        var yearOnly = format.slice(7, 11)
                                        var dateOnly = format.slice(4, 6)
                                        var MonthOnly = format.slice(0, 3)
                                        var monthNo = 0;
                                        if (MonthOnly.toLowerCase() == "jan") monthNo = 1;
                                        else if (MonthOnly.toLowerCase() == "feb") monthNo = 2;
                                        else if (MonthOnly.toLowerCase() == "mar") monthNo = 3;
                                        else if (MonthOnly.toLowerCase() == "apr") monthNo = 4;
                                        else if (MonthOnly.toLowerCase() == "may") monthNo = 5;
                                        else if (MonthOnly.toLowerCase() == "jun") monthNo = 6;
                                        else if (MonthOnly.toLowerCase() == "jul") monthNo = 7;
                                        else if (MonthOnly.toLowerCase() == "aug") monthNo = 8;
                                        else if (MonthOnly.toLowerCase() == "sep") monthNo = 9;
                                        else if (MonthOnly.toLowerCase() == "oct") monthNo = 10;
                                        else if (MonthOnly.toLowerCase() == "nov") monthNo = 11;
                                        else if (MonthOnly.toLowerCase() == "dec") monthNo = 12;

                                        var fDate = `${yearOnly}-${monthNo}-${dateOnly}`
                                        console.log(fDate)
                                        setChangeStartDate(fDate)
                                    }
                                    }

                                />
                    </div>

                </div>

                {/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

                <div className="wrapper col-sm-4 form-group">

                    <div className="crd" style={{ backgroundColor: "#F5F5F5" }}>


                        <label style={{ fontSize: "12px", padding: "0" }} htmlFor="toDate" className="form-label col-sm-12 label-to-date">To Date</label>


                                <DatePicker name="toDate" className="toDate" dateFormat="MMM dd, yyyy" closeOnScroll={true} selected={endDate} onChange={(date: Date) => {
                                    setEndDate(date)
                                    var format = date.toString().slice(4, 15)
                                    var yearOnly = format.slice(7, 11)
                                    var dateOnly = format.slice(4, 6)
                                    var MonthOnly = format.slice(0, 3)
                                    var monthNo = 0;
                                    if (MonthOnly.toLowerCase() == "jan") monthNo = 1;
                                    else if (MonthOnly.toLowerCase() == "feb") monthNo = 2;
                                    else if (MonthOnly.toLowerCase() == "mar") monthNo = 3;
                                    else if (MonthOnly.toLowerCase() == "apr") monthNo = 4;
                                    else if (MonthOnly.toLowerCase() == "may") monthNo = 5;
                                    else if (MonthOnly.toLowerCase() == "jun") monthNo = 6;
                                    else if (MonthOnly.toLowerCase() == "jul") monthNo = 7;
                                    else if (MonthOnly.toLowerCase() == "aug") monthNo = 8;
                                    else if (MonthOnly.toLowerCase() == "sep") monthNo = 9;
                                    else if (MonthOnly.toLowerCase() == "oct") monthNo = 10;
                                    else if (MonthOnly.toLowerCase() == "nov") monthNo = 11;
                                    else if (MonthOnly.toLowerCase() == "dec") monthNo = 12;

                                    var eDate = `${yearOnly}-${monthNo}-${dateOnly}`
                                    console.log(eDate)
                                    setChangeEndDate(eDate)
                                }} />
                    </div>

                </div>

                {/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}



                <div className="wrapper col-sm-4 form-group" >

                    <div className="crd" style={{ backgroundColor: "#F5F5F5", margin: "16px" }}>


                        <button className="btn btn-primary load-button" type="submit" disabled={isSending} onClick={sendRequest}>Load</button>
                    </div>

                </div>
            </div>
            </div>

          </div>  
           

            <ClipLoader color="green" loading={isSending} css={override} size={150} />
            {/*-------------------------------------------------------Charts Rendering---------------------------------------------------------------------*/}
            <div className="container col-sm-12 card" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "bottom", margin: "0 auto", padding: '0', backgroundColor: "#F5F5F5", border: 'none' }}>
            {/*Cards Div Row 1*/}
            < div className="row col-12 cards-row" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", margin: "10px 0", padding: "0" }}>

                    {showResults ? <PurchaseCard domain={state.domain} port={state.port} Fy={state.Fy} compCode={getCompCode} dataArray={dataArray} dataArray2={dataArray2} dataKey1={"Purchase_Amount"} piInit={true} lineInit={false} barInit={false} tabInit={false} cardTitle={"Monthly Purchase"} groupBySelect={true} processSelect={true} machineSelect={true} reasonSelect={true} departmentSelect={true} expensesSelect={true} tableVal={"Purchase_Amount"} tableKey={"D1"} /> : null}

                    {showResults ? <PurchaseCard domain={state.domain} port={state.port} Fy={state.Fy} compCode={getCompCode} dataArray={dataArray} dataArray2={dataArray2} nameKey={"D1"} dataKey1={"Purchase_Amount"} piInit={false} lineInit={true} barInit={false} tabInit={false} cardTitle={"anonymous"} groupBySelect={true} processSelect={true} machineSelect={true} reasonSelect={true} departmentSelect={true} expensesSelect={true} tableVal={"Purchase_Amount"} tableKey={"D1"} /> : null}



            </div>
            {/*Cards Div Row 2*/}


            < div className="row col-12 cards-row" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", margin: "10px 0", padding: "0" }}>

                    {showResults ? <PurchaseCard domain={state.domain} port={state.port} Fy={state.Fy} compCode={getCompCode} dataArray={dataArray} dataArray2={dataArray2} nameKey={"D1"} dataKey1={"Purchase_Amount"} piInit={false} lineInit={false} barInit={false} tabInit={true} cardTitle={"anonymous"} groupBySelect={true} processSelect={true} machineSelect={true} reasonSelect={true} departmentSelect={true} expensesSelect={true} tableVal={"Purchase_Amount"} tableKey={"D1"} /> : null}

                    {showResults ? <PurchaseCard domain={state.domain} port={state.port} Fy={state.Fy} compCode={getCompCode} dataArray={dataArray} dataArray2={dataArray2} nameKey={"D1"} dataKey1={"Purchase_Amount"} piInit={false} lineInit={false} barInit={true} tabInit={false} cardTitle={"anonymous"} groupBySelect={true} processSelect={true} machineSelect={true} reasonSelect={true} departmentSelect={true} expensesSelect={true} tableVal={"Purchase_Amount"} tableKey={"D1"} /> : null}

            </div>




        </div>
         </div>
    )


}


