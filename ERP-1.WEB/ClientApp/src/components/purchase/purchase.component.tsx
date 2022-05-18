import * as React from 'react';
import './purchase.styles.css';

import CustomDataList from '../custom-data-list/custom-data-list.component';

import { useState } from 'react';
import DatePicker from "react-datepicker";

import Card from '../Card/Card.component';
import "react-datepicker/dist/react-datepicker.css";
import { event } from 'jquery';

import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
export default function Purchase() {

    /* var it = 0, ig = 0, br = 0, ct = 0, sc = 0, tp=0;*/


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



    var urlStart1 = "http://103.197.121.188:85/api/values/GetMasterData?MasterType=6&Comp=comp0015&FY=2021";
    var itemGroupUrl = "http://103.197.121.188:85/api/values/GetMasterData?MasterType=79&Comp=comp0015&FY=2021";
    var brandUrl = "http://103.197.121.188:85/api/values/GetMasterData?MasterType=1002&Comp=comp0015&FY=2021";
    var categoryUrl = "http://103.197.121.188:85/api/values/GetMasterData?MasterType=1010&Comp=comp0015&FY=2021";
    var typeUrl = "http://103.197.121.188:85/api/values/GetMasterData?MasterType=1009&Comp=comp0015&FY=2021";
    var subCategoryUrl = "http://103.197.121.188:85/api/values/GetMasterData?MasterType=1035&Comp=comp0015&FY=2021";
    var [startDate, setStartDate]: any = useState(new Date("2022/04/01"));
    var [endDate, setEndDate]: any = useState(new Date());


    const [isSending, setIsSending] = useState(false)
    const isMounted = React.useRef(true)


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

    }

    const handleItemGroupChange = (event: any) => {
        var ITEM_GRP = event.target.value
        for (let i = 0; i < itemGroup.length; i++) {
            if (ITEM_GRP == itemGroup[i].StateName) {
                setChangeItemGroup(itemGroup[i].StateCode)

                break;
            }
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


    }

    const handleCategoryChange = (event: any) => {
        var CATEGORY = event.target.value
        for (let i = 0; i < category.length; i++) {
            if (CATEGORY == category[i].StateName) {
                setChangeCategory(category[i].StateCode)

                break;
            }
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


    }



    const handleSubCategoryChange = (event: any) => {

        var SUB_CAT = event.target.value
        for (let i = 0; i < subCategory.length; i++) {
            if (SUB_CAT == subCategory[i].StateName) {
                setChangeSubCategory(subCategory[i].StateCode)

                break;
            }
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
            var urlStart = "http://103.197.121.188:85/api/values/Annualpurchasedetails"
            var params = []
            params.push(`item=${changeItem}`);
            params.push(`itemgrp=${changeItemGroup}`);
            params.push(`brand=${changeBrand}`);
            params.push(`category=${changeCategory}`);
            params.push(`subcategory=${changeSubCategory}`);
            params.push(`itemtype=${changeType}`);
            params.push('Comp=comp0015');
            params.push('FY=2021');
            console.log(urlStart + '?' + params.join('&'));


            await fetch(urlStart + '?' + params.join('&')).then(res => res.json()).then(result => {
                console.log(result.Data[0])

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
    }, [isSending, changeItem, changeItemGroup, changeBrand, changeType, changeCategory, changeSubCategory]) // update the callback if the state changes




    return (
        <div className="container col-sm-12" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "bottom", margin: "0 auto;" }}>


            {/*Custom Data List*/}


            <div className="row filterDiv col-sm-12" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "baseline", height: "100%", paddingTop: "10px" }}>



                <div className="col-sm-6 filterParent" style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", margin: '0', padding: '0' }}>

                    <div className="wrapper col-sm-4 form-group" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: '5px' }}>
                        <div className="card-body crd col-sm-12" style={{ backgroundColor: "#F5F5F5" }}>
                            <label style={{ fontSize: "12px", padding: "0" }} htmlFor="itemGroup" className="label-item-group form-label">Item Group</label>

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
                    <div className="wrapper col-sm-4 form-group" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: '5px' }}>

                        <div className="card-body crd" style={{ backgroundColor: "#F5F5F5" }}>
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
                    <div className="wrapper col-sm-4 form-group" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: '5px' }}>

                        <div className="card-body crd" style={{ backgroundColor: "#F5F5F5" }}>
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
                    <div className="wrapper col-sm-4 form-group" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: '5px' }}>

                        <div className="card-body crd" style={{ backgroundColor: "#F5F5F5" }}>
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
                    <div className="wrapper col-sm-4 form-group" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: '5px' }}>

                        <div className="card-body crd" style={{ backgroundColor: "#F5F5F5" }}>
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
                    <div className="wrapper col-sm-4 form-group" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: '5px' }}>

                        <div className="card-body crd" style={{ backgroundColor: "#F5F5F5" }}>
                            <label style={{ fontSize: "12px", padding: "0" }} htmlFor='subCategory' className="label-sub-category form-label">Sub Category</label>

                            <input id='subCategory' name='subCategory' type='text' className="form-control form-select col-sm-12 section" list='subCategoryList' onChange={handleSubCategoryChange} />

                            {

                                subCategory != null && subCategory.length > 0 ?

                                    (
                                        <datalist className='subCategory' id='subCategoryList'>
                                            {
                                                subCategory.map((obj: any) => {
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
            </div>

            {/*date picker*/}
            <div className="col-12 col-sm-6 filterParent" style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", margin: '0', padding: '0' }}>
                <div className="wrapper col-sm-4 form-group" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: '5px' }}>

                    <div className="card-body crd" style={{ backgroundColor: "#F5F5F5" }}>
                        <label style={{ fontSize: "12px", padding: "0" }} htmlFor='startDate' className="label-from-date form-label col-sm-12">From Date</label>

                        <DatePicker

                            selectsStart
                            startDate={startDate}
                            dateFormat="MMM, dd yyyy"
                            closeOnScroll={true} selected={startDate} onChange={(date: Date) => {

                                setStartDate(date)
                                console.log(startDate);
                            }} />
                    </div>

                </div>

                {/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

                <div className="wrapper col-sm-4 form-group" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "5px" }}>

                    <div className="card-body crd" style={{ backgroundColor: "#F5F5F5" }}>


                        <label style={{ fontSize: "12px", padding: "0" }} htmlFor="toDate" className="form-label col-sm-12 label-to-date">To Date</label>


                        <DatePicker dateFormat="MMM, dd yyyy" closeOnScroll={true} selected={endDate} onChange={(date: Date) => {
                            setEndDate(date)
                            console.log(endDate);
                        }} />
                    </div>

                </div>

                {/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}



                <div className="wrapper col-sm-4 form-group" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: '0' }}>

                    <div className="card-body crd" style={{ backgroundColor: "#F5F5F5", margin: "16px" }}>


                        <button className="btn btn-primary load-button" type="submit" disabled={isSending} onClick={sendRequest}>Load</button>
                    </div>

                </div>
            </div>
            

            
           

            <ClipLoader color="green" loading={isSending} css={override} size={150} />
            {/*-------------------------------------------------------Charts Rendering---------------------------------------------------------------------*/}

            {/*Cards Div Row 1*/}
            < div className="row col-12 cards-row" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", margin: "10px 0", padding: "0" }}>

                {showResults ? <Card dataArray={dataArray} dataArray2={dataArray2} nameKey={"D1"} dataKey1={"Purchase_Amount"} piInit={true} lineInit={false} barInit={false} tabInit={false} cardTitle={"Monthly Purchase"} groupBySelect={true} processSelect={true} machineSelect={true} reasonSelect={true} departmentSelect={true} expensesSelect={true} tableVal={"Purchase_Amount"} tableKey={"D1"} /> : null}

                {showResults ? <Card dataArray={dataArray} dataArray2={dataArray2} nameKey={"D1"} dataKey1={"Purchase_Amount"} piInit={false} lineInit={true} barInit={false} tabInit={false} cardTitle={"anonymous"} groupBySelect={true} processSelect={true} machineSelect={true} reasonSelect={true} departmentSelect={true} expensesSelect={true} tableVal={"Purchase_Amount"} tableKey={"D1"} /> : null}



            </div>
            {/*Cards Div Row 2*/}


            < div className="row col-12 cards-row" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", margin: "10px 0", padding: "0" }}>

                {showResults ? <Card dataArray={dataArray} dataArray2={dataArray2} nameKey={"D1"} dataKey1={"Purchase_Amount"} piInit={false} lineInit={false} barInit={false} tabInit={true} cardTitle={"anonymous"} groupBySelect={true} processSelect={true} machineSelect={true} reasonSelect={true} departmentSelect={true} expensesSelect={true} tableVal={"Purchase_Amount"} tableKey={"D1"} /> : null}

                {showResults ? <Card dataArray={dataArray} dataArray2={dataArray2} nameKey={"D1"} dataKey1={"Purchase_Amount"} piInit={false} lineInit={false} barInit={true} tabInit={false} cardTitle={"anonymous"} groupBySelect={true} processSelect={true} machineSelect={true} reasonSelect={true} departmentSelect={true} expensesSelect={true} tableVal={"Purchase_Amount"} tableKey={"D1"} /> : null}

            </div>




        </div>

    )


}


