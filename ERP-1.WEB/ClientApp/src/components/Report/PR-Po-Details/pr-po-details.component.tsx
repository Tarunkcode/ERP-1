import * as React from 'react';
import { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { ClipLoader } from 'react-spinners';
const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
`;
function PRPoDetails() {
    var [item, setItem]: any = React.useState([])
    var [itemGroup, setItemGroup]: any = React.useState([])
    var [series, setSeries]: any = React.useState([])
   
    var urlStart1 = "http://103.197.121.188:85/api/values/GetMasterData?MasterType=6&Comp=comp0015&FY=2021";
    var itemGroupUrl = "http://103.197.121.188:85/api/values/GetMasterData?MasterType=79&Comp=comp0015&FY=2021";
    var seriesUrl = "http://103.197.121.188:85/api/values/GetSeries?User=aa&TranType=44&Comp=comp0015&FY=2021";
   
    var [changeSeries, setChangeSeries]: any = useState('0');
    var [dataArray, setDataArray]: any = useState([]);
    var [changeItem, setChangeItem]: any = useState('0');
    var [changeItemGroup, setChangeItemGroup]: any = useState('0');
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
   
    var [showResults, setShowResults] = React.useState(false)
    const [isSending, setIsSending] = useState(false)
    const isMounted = React.useRef(true)
  
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
        // Fetch Series

        const fetchSeries = async () => {
            try {
                const response3 = await fetch(seriesUrl);
                const json3 = await response3.json();
                console.log('series', json3.Data);


                setSeries(json3.Data);

            } catch (error) {
                console.log("error", error);
            }
        };

        fetchSeries();

    },[])
    React.useEffect(() => {
        handleItemChange
        handleItemGroupChange

        handleSeriesChange
       

    }, [changeItem, changeSeries, changeItemGroup])



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


   
    const handleSeriesChange = (event: any) => {
        var SERIES = event.target.value
        console.log('series dynamic', SERIES)
        for (let i = 0; i < series.length; i++) {
            if (SERIES == series[i].Series) {
                setChangeSeries(series[i].Series)

                break;
            }
        }
        if (SERIES == '') {
            setChangeSeries('0')
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
            var GetPrDetails = "http://localhost:16067/api/GetPrPoDetails"

            var params: any = [];
            params.push(`series=${changeSeries}`)
            params.push(`item=${changeItem}`)
            params.push(`itemgrp=${changeItemGroup}`)

            params.push(`FDate=${changeStartDate}`)
            params.push(`TDate=${changeEndDate}`)
            params.push("RPTCode=2")

            console.log(GetPrDetails + '?' + params.join('&'));


            await fetch(GetPrDetails + '?' + params.join('&')).then(res => res.json()).then(result => {
                /*console.log(result.Data[0])*/

                if (result.length > 0 && result != null) {


                    setDataArray(result);
                    setShowResults(true)

                }
                else {
                    alert('data not found in planning array fetch Status = -1')
                    setDataArray([])


                }

            })



        }

        catch (Ex) {
            alert("calling api's failed ")
        }

        // once the request is sent, update state again
        if (isMounted.current) // only update if we are still mounted
            setIsSending(false)
    }, [isSending, changeItem, changeItemGroup, changeEndDate, changeStartDate]) // update the callback if the state changes

    return (
        <div style={{ margin: '10px -8em 0 -8em', }}>
        <div className="container col-sm-12" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "bottom", margin: "0 auto;" }}>

            <div className="card-title">
                <span style={{ fontSize: "20px" }}>PR Po Details</span>
            </div>
            {/*Custom Data List*/}


            <div className="row filterDiv col-sm-12" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "baseline", height: "100%", paddingTop: "10px" }}>



                <div className="col-sm-6 filterParent" style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", margin: '0', padding: '0' }}>

                  
                    <div className="wrapper col-sm-4 form-group" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: '5px' }}>
                        <div className="card-body crd" style={{ backgroundColor: "#F5F5F5" }}>
                            <label style={{ fontSize: "12px", padding: "0" }} htmlFor='series' className="form-label col-sm-12">Series</label>

                                <input id='series' name='series' type='text' className="form-control form-select col-sm-12 section" list='seriesList' onChange={handleSeriesChange} />

                            {

                                series != null && series.length > 0 ?

                                    (
                                        <datalist className='series' id="seriesList">
                                            {
                                                series.map((obj: any) => {
                                                    return <option data-value={obj.Series}>{obj.Series}</option>
                                                })
                                            }


                                        </datalist>

                                    )

                                    : null


                            }
                        </div>



                    </div>
                    {/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
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

                                <input id="item" name="item" type="text" className="form-control form-select col-sm-12 section" list="itemList" onChange={handleItemChange }/>

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

                </div>
                {/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

                <div className="col-sm-6 filterParent" style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", margin: '0', padding: '0' }}>
                    {/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
                  


                    <div className="wrapper col-sm-4 form-group" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: '5px' }}>

                        <div className="card-body crd" style={{ backgroundColor: "#F5F5F5" }}>
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

                    <div className="wrapper col-sm-4 form-group" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "5px" }}>

                        <div className="card-body crd" style={{ backgroundColor: "#F5F5F5" }}>


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

                    <div className="wrapper col-sm-4 form-group" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-end", padding: '0' }}>

                            <div className="card-body crd" style={{ backgroundColor: "#F5F5F5", margin: "16px" }}>


                                <button className="btn btn-primary load-button" type="submit" onClick={sendRequest}>Load</button>
                            </div>

                        </div>

                </div>



                {/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
            </div>


          

</div>
            <hr/>
            <ClipLoader color="green" loading={isSending} css={override} size={150} />
            {
                showResults ?
                    <>
                        <div className="col-12" style={{ textAlign: 'center', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>
                            <span className="card-title" style={{ fontSize: '15px', color: 'white', fontWeight: 900, margin: '0', padding: '0' }}>PR PO Details Report</span>
                        </div>
                        <div className="row row-content col-sm-12 balanceOnlyReport container container-fluid container-lg" style={{ height: '70vh', overflowX: 'scroll', overflowY: 'scroll' }}>
                            <div className="card col-sm-12" style={{ padding: '0' }}>


                                <div className="table-responsive col-12 resp-tab">

                                    <table className="table table-striped table-bordered table-hover table-sm">
                                        <thead className="thead-light table-secondary">
                                            <tr>
                                                <th style={{ padding: "10px 20px" }} scope="col">#</th>
                                                <th style={{ padding: "10px 20px" }} scope="col"><span>Pr No.</span></th>
                                                <th style={{ padding: "10px 27px" }} scope="col"><span>Pr.Date</span></th>
                                                <th style={{ padding: "10px 20px" }} scope="col"><span>Department</span></th>
                                                <th style={{ padding: "10px 27px" }} scope="col"><span>Req.Date</span></th>
                                                <th style={{ padding: "10px 20px" }} scope="col"><span>Item Code</span></th>
                                                <th style={{ padding: "10px 20px" }} scope="col"><span>Item Name</span></th>
                                                <th style={{ padding: "10px 20px" }} scope="col"><span>p1</span></th>
                                                <th style={{ padding: "10px 20px" }} scope="col"><span>p2</span></th>
                                                <th style={{ padding: "10px 20px" }} scope="col"><span>p3</span></th>
                                                <th style={{ padding: "10px 20px" }} scope="col"><span>Pr. Qty</span></th>
                                                <th style={{ padding: "10px 20px" }} scope="col"><span>UOM</span></th>
                                                <th style={{ padding: "10px 20px" }} scope="col"><span>Pr.Rate</span></th>
                                                <th style={{ padding: "10px 20px" }} scope="col"><span>Pr.Value</span></th>
                                                <th style={{ padding: "10px 20px" }} scope="col"><span>Pr.Close</span></th>
                                                <th style={{ padding: "10px 20px" }} scope="col"><span>PO NO</span></th>
                                                <th style={{ padding: "10px 27px" }} scope="col"><span>PO Date</span></th>
                                                <th style={{ padding: "10px 20px" }} scope="col"><span>Supplier</span></th>
                                                <th style={{ padding: "10px 20px" }} scope="col"><span>Pending Qty.</span></th>
                                                <th style={{ padding: "10px 20px" }} scope="col"><span>PO Qty.</span></th>
                                                <th style={{ padding: "10px 20px" }} scope="col"><span>Balance Qty.</span></th>

                                            </tr>
                                        </thead>
                                        <tbody>

                                            {dataArray.map((item: any, i: number) => (
                                                <tr key={i}>
                                                    <th>{i + 1}</th>
                                                    <td>{item.prNo}</td>
                                                    <td>{item.prDate}</td>
                                                    <td>{item.department}</td>
                                                    <td>{item.reqDate}</td>
                                                    <td>{item.itemCode}</td>
                                                    <td>{item.itemName}</td>
                                                    <td>{item.p1}</td>
                                                    <td>{item.p2}</td>
                                                    <td>{item.p3}</td>
                                                    <td>{item.prQty}</td>
                                                    <td>{item.uom}</td>
                                                    <td>{item.prRate}</td>
                                                    <td>{item.prValue}</td>
                                                    <td>{item.prClose}</td>
                                                    <td>{item.poNo}</td>
                                                    <td>{item.poDate}</td>
                                                    <td>{item.supplier}</td>
                                                    <td>{item.pendQty}</td>
                                                    <td>{item.poQty}</td>
                                                    <td>{item.balQty}</td>

                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>

                    </>
                    : null
            }

        </div>
    )
}
export default PRPoDetails;