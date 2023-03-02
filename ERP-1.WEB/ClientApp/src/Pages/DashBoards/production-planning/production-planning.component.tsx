import * as React from 'react';
import { PropsWithChildren, ReactElement, useMemo } from 'react';
import './production-planning.styles.css';
import { Column, IdType, useSortBy, useTable } from 'react-table';


import { useState } from 'react';
import DatePicker from "react-datepicker";

import PlanningCard from '../../../components/Card/PlanningCard.component';
import ProductionCard from '../../../components/Card/ProductionCard.component';
import MachineCard from '../../../components/Card/MachineCard.component';
import RejectionCard from '../../../components/Card/RejectionCard.component';
import "react-datepicker/dist/react-datepicker.css";

import Radium  from 'radium';
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";


const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
export default function Production$Planning() {

    const getState = window.sessionStorage.getItem('state');
    const state = JSON.parse(getState!)
    const getCompCode = window.sessionStorage.getItem('compCode');



    var [item, setItem]: any = React.useState([])
    var [itemGroup, setItemGroup]: any = React.useState([])
    var [brand, setbrand]: any = React.useState([])
    var [category, setCategory]: any = React.useState([])
    var [type, setType]: any = React.useState([])
    var [subCategory, setSubCategory]: any = React.useState([])
    var [shift, setShift]: any = React.useState([])
    var [process, setProcess]: any = React.useState([])
    var [machine, setMachine]: any = React.useState([])
    var [department, setDepartment]: any = React.useState([])
    var [expenses, setExpenses]: any = React.useState([])
    var [reason, setReason]: any = React.useState([])



    var [changeItem, setChangeItem]: any = useState('0');
    var [changeItemGroup, setChangeItemGroup]: any = useState('0');
    var [changeBrand, setChangeBrand]: any = useState('0');
    var [changeCategory, setChangeCategory]: any = useState('0');
    var [changeType, setChangeType]: any = useState('0');
    var [changeSubCategory, setChangeSubCategory]: any = useState('0');
    var [changeProcess, setChangeProcess]: any = useState('0');
    var [changeShift, setChangeShift]: any = useState('0');
    var [changeMachine, setChangeMachine]: any = useState('0');
   


    var urlStart1 =    `http://${state.domain}:${state.port}/api/values/GetMasterData?MasterType=6&Comp=${getCompCode}&FY=${state.Fy}`
    var itemGroupUrl = `http://${state.domain}:${state.port}/api/values/GetMasterData?MasterType=79&Comp=${getCompCode}&FY=${state.Fy}`
    var brandUrl =     `http://${state.domain}:${state.port}/api/values/GetMasterData?MasterType=1002&Comp=${getCompCode}&FY=${state.Fy}`
    var categoryUrl =  `http://${state.domain}:${state.port}/api/values/GetMasterData?MasterType=1010&Comp=${getCompCode}&FY=${state.Fy}`
    var typeUrl =      `http://${state.domain}:${state.port}/api/values/GetMasterData?MasterType=1009&Comp=${getCompCode}&FY=${state.Fy}`
    var subCategoryUrl=`http://${state.domain}:${state.port}/api/values/GetMasterData?MasterType=1035&Comp=${getCompCode}&FY=${state.Fy}`
    var shiftUrl =     `http://${state.domain}:${state.port}/api/values/GetMasterData?MasterType=7&Comp=${getCompCode}&FY=${state.Fy}`
    var processUrl =   `http://${state.domain}:${state.port}/api/values/GetMasterData?MasterType=11&Comp=${getCompCode}&FY=${state.Fy}`
    var machineUrl =   `http://${state.domain}:${state.port}/api/values/GetMasterData?MasterType=23&Comp=${getCompCode}&FY=${state.Fy}`
    var reasonUrl =    `http://${state.domain}:${state.port}/api/values/GetMasterData?MasterType=1028&Comp=${getCompCode}&FY=${state.Fy}`
    var departmentUrl =`http://${state.domain}:${state.port}/api/values/GetMasterData?MasterType=2001&Comp=${getCompCode}&FY=${state.Fy}`
    var expensesUrl =  `http://${state.domain}:${state.port}/api/values/GetMasterData?MasterType=1030&Comp=${getCompCode}&FY=${state.Fy}`


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

    const [isSending, setIsSending] = useState(false)
    const isMounted = React.useRef(true)


    const colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
        '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
        '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
        '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
        '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
        '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
        '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
        '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
        '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
        '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
    var [dataArray, setDataArray]: any = useState([]);
    var [dataArray2, setDataArray2]: any = useState([]);
    var [productionArray, setProductionArray]: any = useState([]);
    var [productionArray2, setProductionArray2]: any = useState([]);

    var [machineDowntime, setMachineDowntime]: any = useState([]);
    var [machineDowntime2, setMachineDowntime2]: any = useState([]);

    var [rejectionArr, setRejectionArr]: any = useState([]);
    var [rejectionArr2, setRejectionArr2]: any = useState([]);
    var [showResults, setShowResults] = React.useState(false)



    React.useEffect(() => {

        //Fetch Item   
        const fetchItem = async () => {
            try {

                const response = await fetch(urlStart1);

                /*                console.log(json.Data);*/
                const json = await response.json();
                if (json.Status == 1) {
                    setItem(json.Data);

                } else {
                    console.log("Item has no data");
                }


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

                if (json2.Status == 1) {
                    setItemGroup(json2.Data);

                } else {
                    console.log("Item Group has no data")
                }

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

                if (json3.Status == 1) {
                    setbrand(json3.Data);

                } else {
                    console.log("brand has no data")
                }

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

                if (json4.Status == 1) {
                    setCategory(json4.Data);
                } else {
                    console.log("category has no data")
                }
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

                if (json5.Status == 1) {
                    setType(json5.Data);
                } else {
                    console.log("type has no data")
                }
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

                if (json6.Status == 1) {
                    setSubCategory(json6.Data);
                } else {
                    console.log("sub category has no data")
                }
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchSubCategory();

        // Fetch Sub Category
        const fetchProcess = async () => {
            try {
                const response7 = await fetch(processUrl);
                const json7 = await response7.json();
                /*                console.log(json.Data);*/

                if (json7.Status == 1) {
                    setProcess(json7.Data);
                } else {
                    console.log("process has no data")
                }
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchProcess();

        // Fetch Sub Category
        const fetchShift = async () => {
            try {
                const response8 = await fetch(shiftUrl);
                const json8 = await response8.json();
                /*                console.log(json.Data);*/

                if (json8.Status == 1) {
                    setShift(json8.Data);
                } else {
                    console.log("shift has no data")
                }
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchShift();


        const fetchMachine = async () => {
            try {
                const response9 = await fetch(machineUrl);
                const json9 = await response9.json();
                /*                console.log(json.Data);*/

                if (json9.Status == 1) {
                    setMachine(json9.Data);
                } else {
                    console.log("machine has no data")
                }
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchMachine();
        const fetchReason = async () => {
            try {
                const response10 = await fetch(reasonUrl);
                const json10 = await response10.json();
                /*                console.log(json.Data);*/

                if (json10.Status == 1) {
                    setReason(json10.Data);
                } else {
                    console.log("reason has no data")
                }
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchReason();

        const fetchDepartment = async () => {
            try {
                const response11 = await fetch(departmentUrl);
                const json11 = await response11.json();
                /*                console.log(json.Data);*/

                if (json11.Status == 1) {
                    setDepartment(json11.Data);
                } else {
                    console.log("department has no data")
                }
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchDepartment();

        const fetchExpenses = async () => {
            try {
                const response12 = await fetch(expensesUrl);
                const json12 = await response12.json();
                /*                console.log(json.Data);*/
                if (json12.Status == 1) {
                    setExpenses(json12.Data);

                } else {
                    console.log('Expense has no data');
                }


            } catch (error) {
                console.log("error", error);
            }
        };

        fetchExpenses();


    }, [])


    React.useEffect(() => {
        handleItemChange
        handleItemGroupChange
        handleBrandChange
        handleCategoryChange
        handleTypeChange
        handleSubCategoryChange
        handleShiftChange
        handleProcessChange
        handleMachineChange
       

    }, [isSending, changeItem, changeItemGroup, changeBrand, changeType, changeCategory, changeSubCategory, changeProcess, changeShift, changeMachine])

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
            setChangeItem('0');
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
            setChangeItemGroup('0');
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
            setChangeCategory('0')
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
            setChangeType('0')
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
            setChangeSubCategory('0')
        }

    }

    const handleShiftChange = (event: any) => {

        var SHIFT = event.target.value
        for (let i = 0; i < shift.length; i++) {
            if (SHIFT == shift[i].StateName) {
                setChangeShift(shift[i].StateCode)

                break;
            }
        }
        if (SHIFT == '') {
            setChangeShift('0')
        }

    }
    const handleProcessChange = (event: any) => {

        var PROCESS = event.target.value
        for (let i = 0; i < process.length; i++) {
            if (PROCESS == process[i].StateName) {
                setChangeProcess(process[i].StateCode)

                break;
            }
        }
        if (PROCESS == '') {
            setChangeProcess('0');
        }

    }
    const handleMachineChange = (event: any) => {

        var MACHINE = event.target.value
        for (let i = 0; i < machine.length; i++) {
            if (MACHINE == machine[i].StateName) {
                setChangeMachine(machine[i].StateCode)

                break;
            }
        }
        if (MACHINE == '') {
            setChangeMachine('0')
        }

    }



  

    React.useEffect(() => {
        return () => {
            isMounted.current = false
        }
    }, [])



    const sendRequest = React.useCallback(async () => {

        console.log('edate', changeEndDate)
        console.log('sdate', changeStartDate)
        setShowResults(false)
        // don't send again while we are sending
        if (isSending) return
        // update state
        setIsSending(true)
        // send the actual request
        try {
            var urlPlanning =        `http://${state.domain}:${state.port}/api/values/getgroupwiseprodplan`
            var urlProduction =      `http://${state.domain}:${state.port}/api/values/GROUPWISEPRODUCTION`
            var urlRejection =       `http://${state.domain}:${state.port}/api/values/Groupwiserejectprod`
            var urlMachineDowntime = `http://${state.domain}:${state.port}/api/values/GROUPMACHINEDOWNTIME`
            var params = []
            var params2 = []

            params.push(`fromDate=${changeStartDate}`)
            params2.push(`fromDate=${changeStartDate}`)
            params.push(`toDate=${changeEndDate}`)
            params2.push(`toDate=${changeEndDate}`)
            params.push(`process=${changeProcess}`)
            params.push(`shift=${changeShift}`)
            params2.push(`shift=${changeShift}`)
            params.push(`item=${changeItem}`);
            params.push(`itemgrp=${changeItemGroup}`);
            params.push(`brand=${changeBrand}`);
            params.push(`category=${changeCategory}`);
            params.push(`machine=${changeMachine}`);
            params2.push(`machine=${changeMachine}`);
            params.push(`subcategory=${changeSubCategory}`);
            params.push(`itemtype=${changeType}`);
            params.push(`grpby=${"8"}`);
            params2.push(`grpby=${"2"}`);
            params2.push(`reason=${"0"}`);

            params.push(`Comp=${getCompCode}`);
            params2.push(`Comp=${getCompCode}`);
            params.push(`FY=${state.Fy}`);
            params2.push(`FY=${state.Fy}`);
            console.log(urlRejection + '?' + params.join('&'));


            await fetch(urlPlanning + '?' + params.join('&')).then(res => res.json()).then(result => {
                console.log(result.Data[0])

                if (result.Status == '1') {
                    var D1, D2, D3, obj, fill;

                    for (let item = 0; item < result.Data.length; item++) {

                        D1 = result.Data[item].DESC;
                        D2 = result.Data[item].QTY;
                        D3 = result.Data[item].VALUE;
                        /*   D3 = result.Data[item].D3;*/

                        D2 = parseFloat(D2);
                        D3 = parseFloat(D3);


                        fill = colors[item];
                        var Quantity = D2;
                        var Value = D3;

                        obj = { D1, Quantity, Value, fill };
                        var obj2 = { D1, Quantity, Value };
                        //[dataArray].
                        dataArray = [...dataArray]; // copying the old datas array
                        dataArray[item] = obj; // replace e.target.value with whatever you want to change it to

                        setDataArray(dataArray);

                        dataArray2 = [...dataArray2]
                        dataArray2[item] = obj2;
                        setDataArray2(dataArray2);
                    }

                    console.log('onLoad dataArray', dataArray);

                }
                else if (result.Status == '-1') {
                    console.log('data not found in planning')
                    setDataArray([])
                    setDataArray2([])

                }
                else if (result.Status == '0') {
                    alert('Planning fetch request failed fetch Status = 0')
                }
            })


            await fetch(urlProduction + '?' + params.join('&')).then(res => res.json()).then(result => {
                console.log(result.Data[0])

                if (result.Status == '1') {
                    var D1, D2, D3, obj, fill;

                    for (let item = 0; item < result.Data.length; item++) {

                        D1 = result.Data[item].DESC;
                        D2 = result.Data[item].QTY;
                        D3 = result.Data[item].VALUE;



                        D2 = D2 / 100000;
                        D3 = D3 / 100000;
                        fill = colors[item];
                        var Quantity = D2;
                        var Value = D3;

                        obj = { D1, Quantity, Value, fill };
                        var obj2 = { D1, Quantity, Value };
                        //[dataArray].
                        productionArray = [...productionArray]; // copying the old datas array
                        productionArray[item] = obj; // replace e.target.value with whatever you want to change it to

                        setProductionArray(productionArray);

                        productionArray2 = [...productionArray2]
                        productionArray2[item] = obj2;
                        setProductionArray2(productionArray2);
                    }


                    console.log('onLoad productionArray', productionArray);

                }
                else if (result.Status == '-1') {
                    console.log('data not found in production')
                    setProductionArray([])
                    setProductionArray2([])
                }
                else if (result.Status == '0') {
                    alert('Production fetch request failed fetch Status 0')
                }
            })

            await fetch(urlRejection + '?' + params.join('&')).then(res => res.json()).then(result => {
                console.log(result.Data[0])

                if (result.Status == '1') {
                    var D1, D2, D3, D4, D5, obj, fill;

                    for (let item = 0; item < result.Data.length; item++) {

                        D1 = result.Data[item].DESC;
                        D2 = result.Data[item].QTY;
                        D3 = result.Data[item].VALUE;


                        D2 = parseInt(D2)
                        D3 = parseInt(D3)

                        D2 = D2 / 100000;
                        D3 = D3 / 100000;


                        fill = colors[item];
                        var Quantity = D2;
                        var Value = D3;
                        var RejQty = D4;
                        var RejPer = D5;

                        obj = { D1, Quantity, Value, fill, RejQty, RejPer };
                        var obj2 = { D1, Quantity, Value, RejQty, RejPer };

                        //[dataArray].
                        rejectionArr = [...rejectionArr]; // copying the old datas array
                        rejectionArr[item] = obj; // replace e.target.value with whatever you want to change it to

                        setRejectionArr(rejectionArr);

                        rejectionArr2 = [...rejectionArr2]
                        rejectionArr2[item] = obj2;
                        setRejectionArr2(rejectionArr2);
                    }


                    console.log('onLoad productionArray', rejectionArr);

                }
                else if (result.Status == '-1') {
                    console.log('data not found in Rejection')
                    
                    setRejectionArr([])
                    setRejectionArr2([])
                }
                else if (result.Status == '0') {
                    alert('Planning fetch request failed, fetch STatus = 0')
                }
            })


            await fetch(urlMachineDowntime + '?' + params2.join('&')).then(res => res.json()).then(result => {
                console.log(result.Data[0])

                if (result.Status == '1') {
                    var D1, D2, D3, obj, fill;

                    for (let item = 0; item < result.Data.length; item++) {

                        D1 = result.Data[item].DESC;
                        D2 = result.Data[item].QTY;
                        D3 = result.Data[item].VALUE;

                        D2 = parseInt(D2);
                        D3 = parseInt(D3)

                        D2 = D2 / 100000;
                        D3 = D3 / 100000;

                        fill = colors[item];
                        var Quantity = D2;
                        var Value = D3;

                        obj = { D1, Quantity, Value, fill };
                        var obj2 = { D1, Quantity, Value };
                        //[dataArray].
                        machineDowntime = [...machineDowntime]; // copying the old datas array
                        machineDowntime[item] = obj; // replace e.target.value with whatever you want to change it to

                        setMachineDowntime(machineDowntime);

                        machineDowntime2 = [...machineDowntime2]
                        machineDowntime2[item] = obj2;
                        setMachineDowntime2(machineDowntime2);
                    }
                    setShowResults(true)

                    console.log('onLoad machineDowntime', machineDowntime);

                }
                else if (result.Status == '-1') {
                    console.log('data not found in Machine')
                    setMachineDowntime([])
                    setMachineDowntime2([])
                }
                else if (result.Status == '0') {
                    alert('Machine Downtime fetch request failed, fetch STatus = 0')
                }
            })

        }

        catch (Ex) {
            alert("calling api's failed ")
        }

        // once the request is sent, update state again
        if (isMounted.current) // only update if we are still mounted
            setIsSending(false)
    }, [isSending, changeItem, changeItemGroup, changeBrand, changeType, changeCategory, changeSubCategory, changeProcess, changeShift, changeMachine, changeEndDate, changeStartDate]) // update the callback if the state changes




    return (
        <div className="firstDiv">
            <div className="container col-sm-12 card" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "bottom", margin: "0 auto" }}>
                <div className="card-title col-12 text-center" style={{ margin: '0 auto' }}>
                    <span style={{ fontSize: "20px" }}>Production & Planning</span>
                </div>
                <div className="card-body panel panel-default" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center', padding: '0', backgroundColor: "#F5F5F5", margin:'0' }}>
            {/*Custom Data List*/}


            <div className="row filterDiv panel-body col-sm-12" style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "baseline", height: "100%", paddingTop: "10px" }}>



                <div className="col-sm-6 filterParent" style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", margin: '0', padding: '0' }}>

                    <div className="wrapper col-sm-4 form-group" >
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

                                    : null


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

                                    : null


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

                                    : null


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

                                    : null


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

                                    : null


                            }
                        </div>

                    </div>
                    {/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
                    <div className="wrapper col-sm-4 form-group">

                        <div className="crd" style={{ backgroundColor: "#F5F5F5" }}>
                            <label style={{ fontSize: "12px", padding: "0", width:'150%'}} htmlFor='subCategory' className="label-sub-category form-label">Sub Category</label>

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

                                    : null


                            }
                        </div>

                    </div>

                </div>



                {/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
            </div>
            <div className="row filterDiv panel-body col-sm-12" style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "baseline", height: "100%", paddingTop: "10px" , marginBottom:'20px'}}>

                <div className="col-sm-6 filterParent" style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", margin: '0', padding: '0' }}>
                    <div className="wrapper col-sm-4 form-group">
                        <div className="crd" style={{ backgroundColor: "#F5F5F5" }}>
                            <label style={{ fontSize: "12px", padding: "0" }} htmlFor="process" className="form-label col-sm-12">Process</label>

                            <input id='process' name='process' type='text' className="form-control form-select col-sm-12 section" list='processList' onChange={handleProcessChange} />

                            {
                                process != null && process.length > 0 ?

                                    (
                                        <datalist className='process' id='processList'>
                                            {
                                                process.map((obj: any) => {
                                                    return <option data-value={obj.StateCode}>{obj.StateName}</option>
                                                })
                                            }


                                        </datalist>

                                    )

                                    : null


                            }
                        </div>

                    </div>

                    {/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

                    <div className="wrapper col-sm-4 form-group">
                        <div className="crd" style={{ backgroundColor: "#F5F5F5" }}>
                            <label style={{ fontSize: "12px", padding: "0" }} htmlFor="machine" className="form-label col-sm-12">Machine</label>

                            <input id='machine' name='machine' type='text' className="form-control form-select col-sm-12 section" list='machineList' onChange={handleMachineChange} />

                            {

                                machine != null && machine.length > 0 ?

                                    (
                                        <datalist className='machine' id='machineList'>
                                            {
                                                machine.map((obj: any) => {
                                                    return <option data-value={obj.StateCode}>{obj.StateName}</option>
                                                })
                                            }


                                        </datalist>

                                    )

                                    : null


                            }
                        </div>

                    </div>


                    {/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

                    <div className="wrapper col-sm-4 form-group">

                        <div className="crd" style={{ backgroundColor: "#F5F5F5" }}>
                            <label style={{ fontSize: "12px", padding: "0" }} htmlFor='shift' className="form-label col-sm-12">Shift</label>

                            <input id='shift' name='shift' type='text' className="form-control form-select col-sm-12 section" list='shiftList' onChange={handleShiftChange} />

                            {

                                shift != null && shift.length > 0 ?

                                    (
                                        <datalist className='shift' id='shiftList'>
                                            {
                                                shift.map((obj: any) => {
                                                    return <option data-value={obj.StateCode}>{obj.StateName}</option>
                                                })
                                            }


                                        </datalist>

                                    )

                                    : null


                            }
                        </div>

                    </div>

                </div>

                {/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

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



                    <div className="wrapper col-sm-4 form-group">

                        <div className="crd" style={{ backgroundColor: "#F5F5F5", margin: "16px" }}>


                            <button className="btn btn-primary load-button" type="submit" disabled={isSending} onClick={sendRequest}>Load</button>
                        </div>

                    </div>
                </div>

            </div>
                </div>


        </div>

          {/*  <hr style={{ border: '1.5px solid grey', width: "100%", opacity: "0.2 ", marginTop: "3em" }} />*/}

            <ClipLoader color="green" loading={isSending} css={override} size={150} />
            {/*-------------------------------------------------------Charts Rendering---------------------------------------------------------------------*/}
            <div className="container col-sm-12 card" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "bottom", margin: "0 auto", padding: '0', backgroundColor: "#F5F5F5", border:'none' }}>
            {/*Cards Div Row 1*/}
                < div className="row col-12 cards-row chart-cards card-body panel panel-default">
                
                    {showResults ? <PlanningCard domain={state.domain} port={state.port} Fy={state.Fy} compCode={getCompCode} dataArray={dataArray} dataArray2={dataArray2} nameKey={"D1"} dataKey1={"Quantity"} dataKey2={"Value"} piInit={true} lineInit={false} barInit={false} tabInit={false} cardTitle={"Planning"} groupBySelect={false} processSelect={false} machineSelect={false} reasonSelect={true} departmentSelect={true} expensesSelect={true} process={process} machine={machine} reason={reason} department={department} expenses={expenses} changeProcess={changeProcess} changeMachine={changeMachine} changeItem={changeItem} changeItemGroup={changeItemGroup} changeBrand={changeBrand} changeType={changeType} changeCategory={changeCategory} changeSubCategory={changeSubCategory} changeShift={changeShift} changeEndDate={changeEndDate} changeStartDate={changeStartDate} setDataArray={setDataArray} setDataArray2={setDataArray2} tableVal={"Quantity"} tableKey={"D1"} /> : null}
                 

                    {showResults ? <ProductionCard domain={state.domain} port={state.port} Fy={state.Fy} compCode={getCompCode} dataArray={productionArray} dataArray2={productionArray2} nameKey={"D1"} dataKey1={"Quantity"} dataKey2={"Value"} piInit={false} lineInit={true} barInit={false} tabInit={false} cardTitle={"Production"} groupBySelect={false} processSelect={false} machineSelect={false} reasonSelect={true} departmentSelect={true} expensesSelect={true} process={process} machine={machine} reason={reason} department={department} expenses={expenses} changeItem={changeItem} changeItemGroup={changeItemGroup} changeBrand={changeBrand} changeType={changeType} changeCategory={changeCategory} changeSubCategory={changeSubCategory} changeProcess={changeProcess} changeMachine={changeMachine} changeShift={changeShift} changeEndDate={changeEndDate} changeStartDate={changeStartDate} setDataArray={setProductionArray} setDataArray2={setProductionArray2} tableVal={"Quantity"} tableKey={"D1"} /> : null}



            </div>
            {/*Cards Div Row 2*/}


                < div className="row col-12 cards-row chart-cards card-body panel panel-default">

                    {showResults ? <RejectionCard domain={state.domain} port={state.port} Fy={state.Fy} compCode={getCompCode} dataArray={rejectionArr} dataArray2={rejectionArr2} nameKey={"D1"} dataKey1={"Quantity"} dataKey2={"Value"} piInit={false} lineInit={false} barInit={false} tabInit={true} cardTitle={"Rejection"} groupBySelect={false} processSelect={false} machineSelect={true} reasonSelect={false} departmentSelect={true} expensesSelect={true} process={process} machine={machine} reason={reason} department={department} expenses={expenses} changeItem={changeItem} changeItemGroup={changeItemGroup} changeBrand={changeBrand} changeType={changeType} changeCategory={changeCategory} changeSubCategory={changeSubCategory} changeProcess={changeProcess} changeShift={changeShift} changeMachine={changeMachine} changeEndDate={changeEndDate} changeStartDate={changeStartDate} setDataArray={setRejectionArr} setDataArray2={setRejectionArr2} tableVal={"Quantity"} tableKey={"D1"} /> : null}

                    {showResults ? <MachineCard domain={state.domain} port={state.port} Fy={state.Fy} compCode={getCompCode} dataArray={machineDowntime} dataArray2={machineDowntime2} nameKey={"D1"} dataKey1={"Quantity"} dataKey2={"Value"} piInit={false} lineInit={false} barInit={true} tabInit={false} cardTitle={"Machine"} groupBySelect={false} processSelect={true} machineSelect={false} reasonSelect={false} departmentSelect={true} expensesSelect={true} process={process} machine={machine} reason={reason} department={department} expenses={expenses} changeProcess={changeProcess} changeShift={changeShift} changeMachine={changeMachine} changeEndDate={changeEndDate} changeStartDate={changeStartDate} setDataArray={setMachineDowntime} setDataArray2={setMachineDowntime2} tableVal={"Quantity"} tableKey={"D1"} /> : null}


            </div>

            {/*Cards Div Row 3*/}


            {/*< div className="row col-12 cards-row" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", margin: "10px 0", padding: "0" }}>*/}

            {/*    {showResults ? <Card dataArray={dataArray} dataArray2={dataArray2} nameKey={"D1"} dataKey1={"Quantity"} dataKey2={"Value"}  piInit={false} lineInit={false} barInit={false} tabInit={true} cardTitle={"Consumpsion"} groupBySelect={false} processSelect={true} machineSelect={true} reasonSelect={true} departmentSelect={true} expensesSelect={true} process={process} machine={machine} reason={reason} department={department} expenses={expenses} /> : null}*/}

            {/*    {showResults ? <Card dataArray={dataArray} dataArray2={dataArray2} nameKey={"D1"} dataKey1={"Quantity"} dataKey2={"Value"}  piInit={false} lineInit={false} barInit={true} tabInit={false} cardTitle={"Planning V/s Production"} groupBySelect={false} processSelect={false} machineSelect={true} reasonSelect={true} departmentSelect={true} expensesSelect={true} process={process} machine={machine} reason={reason} department={department} expenses={expenses} /> : null}*/}
            {/*</div>*/}

            {/*Cards Div Row 4*/}


            {/*< div className="row col-12 cards-row" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", margin: "10px 0", padding: "0" }}>*/}

            {/*    {showResults ? <Card dataArray={dataArray} dataArray2={dataArray2} nameKey={"D1"} dataKey1={"Quantity"} dataKey2={"Value"}  piInit={false} lineInit={false} barInit={false} tabInit={true} cardTitle={"Expenses"} groupBySelect={true} processSelect={true} machineSelect={true} reasonSelect={true} departmentSelect={true} expensesSelect={true} process={process} machine={machine} reason={reason} department={department} expenses={expenses}/> : null}*/}

            {/*    {showResults ? <Card dataArray={dataArray} dataArray2={dataArray2} nameKey={"D1"} dataKey1={"Quantity"} dataKey2={"Value"}  piInit={false} lineInit={false} barInit={true} tabInit={false} cardTitle={"Department Expenses"} groupBySelect={false} processSelect={true} machineSelect={true} reasonSelect={true} departmentSelect={false} expensesSelect={false} process={process} machine={machine} reason={reason} department={department} expenses={expenses }  /> : null}*/}

            {/*</div>*/}


        </div>
        </div>
    )


}


