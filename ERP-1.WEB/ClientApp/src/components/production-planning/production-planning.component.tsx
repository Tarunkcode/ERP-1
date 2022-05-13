import * as React from 'react';
import './production-planning.styles.css';

import CustomDataList from '../custom-data-list/custom-data-list.component';

import { useState } from 'react';
import DatePicker from "react-datepicker";

import Card from '../Card/Card.component';
import "react-datepicker/dist/react-datepicker.css";


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
    var [changeStartDate, setChangeStartDate]: any = useState('2022-04-01');
    var [changeEndDate, setChangeEndDate]: any = useState('2022-12-31');



    var urlStart1 = "http://103.197.121.188:85/ESERP/api/values/GetMasterData?MasterType=6&Comp=comp0015&FY=2021";
    var itemGroupUrl = "http://103.197.121.188:85/ESERP/api/values/GetMasterData?MasterType=79&Comp=comp0015&FY=2021";
    var brandUrl = "http://103.197.121.188:85/ESERP/api/values/GetMasterData?MasterType=1002&Comp=comp0015&FY=2021";
    var categoryUrl = "http://103.197.121.188:85/ESERP/api/values/GetMasterData?MasterType=1010&Comp=comp0015&FY=2021";
    var typeUrl = "http://103.197.121.188:85/ESERP/api/values/GetMasterData?MasterType=1009&Comp=comp0015&FY=2021";
    var subCategoryUrl = "http://103.197.121.188:85/ESERP/api/values/GetMasterData?MasterType=1035&Comp=comp0015&FY=2021";
    var shiftUrl = "http://103.197.121.188:85/ESERP/api/values/GetMasterData?MasterType=7&Comp=comp0015&FY=2021";
    var processUrl = "http://103.197.121.188:85/ESERP/api/values/GetMasterData?MasterType=11&Comp=comp0015&FY=2021";
    var machineUrl = "http://103.197.121.188:85/ESERP/api/values/GetMasterData?MasterType=23&Comp=comp0015&FY=2021";
    var reasonUrl = "http://103.197.121.188:85/ESERP/api/values/GetMasterData?MasterType=1028&Comp=comp0015&FY=2021";
    var departmentUrl = "http://103.197.121.188:85/ESERP/api/values/GetMasterData?MasterType=2001&Comp=comp0015&FY=2021";
    var expensesUrl = "http://103.197.121.188:85/ESERP/api/values/GetMasterData?MasterType=1030&Comp=comp0015&FY=2021";
    var [startDate, setStartDate]: any = useState(new Date("2022-04-01"));
    var [endDate, setEndDate]: any = useState(new Date());


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
        handleChangeStartDate(startDate)
        handleChangeendDate(endDate)

    }, [isSending, changeItem, changeItemGroup, changeBrand, changeType, changeCategory, changeSubCategory, changeProcess, changeShift, changeMachine, changeEndDate, changeStartDate])

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

    const handleShiftChange = (event: any) => {

        var SHIFT = event.target.value
        for (let i = 0; i < shift.length; i++) {
            if (SHIFT == shift[i].StateName) {
                setChangeShift(shift[i].StateCode)

                break;
            }
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

    }
    const handleMachineChange = (event: any) => {

        var MACHINE = event.target.value
        for (let i = 0; i < machine.length; i++) {
            if (MACHINE == machine[i].StateName) {
                setChangeMachine(machine[i].StateCode)

                break;
            }
        }


    }
    const handleChangeStartDate = (startDate: DatePicker) => {
        const selectedstartDate = new Date(`${startDate}`); // pass in date param here
        const formattedStartDate = `${selectedstartDate.getFullYear()}-${selectedstartDate.getMonth() + 1}-${selectedstartDate.getDate()}`;
        console.log('onChange-Start-Date', formattedStartDate)
        setChangeStartDate(formattedStartDate)

    }

    const handleChangeendDate = (endDate: DatePicker) => {
        const selectedendDate = new Date(`${endDate}`); // pass in date param here
        const formattedEndDate = `${selectedendDate.getFullYear()}-${selectedendDate.getMonth() + 1}-${selectedendDate.getDate()}`;
        console.log('onChange-End-Date', formattedEndDate)
        setChangeEndDate(formattedEndDate)

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
            var urlPlanning = "http://103.197.121.188:85/ESERP/api/values/getgroupwiseprodplan"
            var urlProduction = "http://103.197.121.188:85/ESERP/api/values/GROUPWISEPRODUCTION"
            var urlRejection = "http://103.197.121.188:85/ESERP/api/values/Groupwiserejectprod"
            var urlMachineDowntime = "http://103.197.121.188:85/ESERP/api/values/GROUPMACHINEDOWNTIME"
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
            
            params.push('Comp=comp0015');
            params2.push('Comp=comp0015');
            params.push('FY=2021');
            params2.push('FY=2021');
            console.log(urlPlanning + '?' + params.join('&'));


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
                    console.log('data not found in planning array fetch Status = -1')
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
                    console.log('data not found in production array fetch STatus = -1')
                }
                else if (result.Status == '0') {
                    alert('Production fetch request failed fetch Status 0')
                }
            })

            await fetch(urlRejection + '?' + params.join('&')).then(res => res.json()).then(result => {
                console.log(result.Data[0])

                if (result.Status == '1') {
                    var D1, D2, D3, obj, fill;

                    for (let item = 0; item < result.Data.length; item++) {

                        D1 = result.Data[item].DESC;
                        D2 = result.Data[item].QTY;
                        D3 = result.Data[item].VALUE;



                       
                        fill = colors[item];
                        var Quantity = D2;
                        var Value = D3;

                        obj = { D1, Quantity, Value, fill };
                        var obj2 = { D1, Quantity, Value };
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
                    alert('data not found in Rejection array, fetch Status = -1')
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
                    alert('data not found in Machine array, fetch Status = -1')
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
        <div className="container" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "top" }}>


            {/*Custom Data List*/}


            <div className="row col-12" style={{ display: "flex", flexDirection: "row" }}>


                <div className="wrapper col-sm-2 form-group" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <div className="card-body crd" style={{ backgroundColor: "#F5F5F5" }}>
                        <label style={{ fontSize: "12px", padding: "0" }} htmlFor="itemGroup" className="form-label col-sm-12">Item Group</label>

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
                <div className="wrapper col-sm-2 form-group" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

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
                <div className="wrapper col-sm-2 form-group" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

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
                {/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
                <div className="wrapper col-sm-2 form-group" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

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
                <div className="wrapper col-sm-2 form-group" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

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
                <div className="wrapper col-sm-2 form-group" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

                    <div className="card-body crd" style={{ backgroundColor: "#F5F5F5" }}>
                        <label style={{ fontSize: "12px", padding: "0" }} htmlFor='subCategory' className="form-label col-sm-12">Sub Category</label>

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



                

                {/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
                <div className="wrapper col-sm-2 form-group" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <div className="card-body crd" style={{ backgroundColor: "#F5F5F5" }}>
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

                                : console.log('fine')


                        }
                    </div>

                </div>

                {/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

                <div className="wrapper col-sm-2 form-group" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <div className="card-body crd" style={{ backgroundColor: "#F5F5F5" }}>
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

                                : console.log('fine')


                        }
                    </div>

                </div>

                {/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

                <div className="wrapper col-sm-2 form-group" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

                    <div className="card-body crd" style={{ backgroundColor: "#F5F5F5" }}>
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

                                : console.log('fine')


                        }
                    </div>

                </div>

                {/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
                <div className="wrapper col-sm-2 form-group" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

                    <div className="card-body crd" style={{ backgroundColor: "#F5F5F5" }}>
                        <label style={{ fontSize: "12px", padding: "0" }} htmlFor='startDate' className="form-label col-sm-12">From Date</label>

                        <DatePicker
                            
                            name="startDate"
                            className="startDate"
                            selectsStart
                            startDate={startDate}
                            dateFormat="MMM, dd yyyy"
                            closeOnScroll={true}
                            selected={startDate}
                            onChange={(date: Date) => {

                                setStartDate(date)
                                handleChangeStartDate(startDate)
                             
                            }
                            }

                        />
                    </div>

                </div>

                {/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

                <div className="wrapper col-sm-2 form-group" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

                    <div className="card-body crd" style={{ backgroundColor: "#F5F5F5" }}>
                       

                        <label style={{ fontSize: "12px", padding: "0" }} htmlFor="toDate" className="form-label col-sm-12">To Date</label>


                        <DatePicker name="toDate" className="toDate" dateFormat="MMM, dd yyyy" closeOnScroll={true} selected={endDate} onChange={(date: Date) => {
                            setEndDate(date)
                            handleChangeendDate(endDate)
                        }} />
                    </div>

                </div>

                {/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
                <div className="wrapper col-sm-2 form-group" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

                    <div className="card-body crd" style={{ backgroundColor: "#F5F5F5", margin:"16px" }}>
                       

                        <button className="btn btn-primary load-button" type="submit" disabled={isSending} onClick={sendRequest}>Load</button>
                    </div>

                </div>

            </div>


          

           {/* <hr style={{ border: '1.5px solid grey', width: "100%", opacity: "0.2 ", marginTop:"3em" }} />*/}

            <ClipLoader color="green" loading={isSending} css={override} size={150} />
            {/*-------------------------------------------------------Charts Rendering---------------------------------------------------------------------*/}

            {/*Cards Div Row 1*/}
            < div className="row col-12 cards-row" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", margin: "10px 0", padding: "0" }}>

                {showResults ? <Card dataArray={dataArray} dataArray2={dataArray2} nameKey={"D1"} dataKey1={"Quantity"} dataKey2={"Value"} piInit={true} lineInit={false} barInit={false} tabInit={false} cardTitle={"Planning"} groupBySelect={false} processSelect={false} machineSelect={false} reasonSelect={true} departmentSelect={true} expensesSelect={true} process={process} machine={machine} reason={reason} department={department} expenses={expenses} changeItem={changeItem} changeItemGroup={changeItemGroup} changeBrand={changeBrand} changeType={changeType} changeCategory={changeCategory} changeSubCategory={changeSubCategory} changeShift={changeShift} changeEndDate={changeEndDate} changeStartDate={changeStartDate} setDataArray={setDataArray} setDataArray2={setDataArray2} /> : null}

                {showResults ? <Card dataArray={productionArray} dataArray2={productionArray2} nameKey={"D1"} dataKey1={"Quantity"} dataKey2={"Value"} piInit={false} lineInit={true} barInit={false} tabInit={false} cardTitle={"Production"} groupBySelect={false} processSelect={false} machineSelect={false} reasonSelect={true} departmentSelect={true} expensesSelect={true} process={process} machine={machine} reason={reason} department={department} expenses={expenses} changeProcess={changeProcess} setChangeProcess={setChangeProcess}/> : null}



            </div>
            {/*Cards Div Row 2*/}


            < div className="row col-12 cards-row" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", margin: "10px 0", padding: "0" }}>

                {showResults ? <Card dataArray={rejectionArr} dataArray2={rejectionArr2} nameKey={"D1"} dataKey1={"Quantity"} dataKey2={"Value"} piInit={false} lineInit={false} barInit={false} tabInit={true} cardTitle={"Rejection"} groupBySelect={false} processSelect={false} machineSelect={true} reasonSelect={false} departmentSelect={true} expensesSelect={true} process={process} machine={machine} reason={reason} department={department} expenses={expenses} /> : null}

                {showResults ? <Card dataArray={machineDowntime} dataArray2={machineDowntime2} nameKey={"D1"} dataKey1={"Quantity"} dataKey2={"Value"} piInit={false} lineInit={false} barInit={true} tabInit={false} cardTitle={"Machine"} groupBySelect={false} processSelect={false} machineSelect={true} reasonSelect={true} departmentSelect={true} expensesSelect={true} process={process} machine={machine} reason={reason} department={department} expenses={expenses}/> : null}


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

    )


}


