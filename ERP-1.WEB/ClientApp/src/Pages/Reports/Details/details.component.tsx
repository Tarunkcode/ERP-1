﻿import * as React from 'react';
import { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { ClipLoader } from 'react-spinners';
import { Grid, GridColumn, GridToolbar } from "@progress/kendo-react-grid";
import { ExcelExport } from '@progress/kendo-react-excel-export';
import Pagination from '../../../components/custom-pagination/main-pagination.component';

const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
`;
let PageSize = 9;

function Details() {
    const getState = window.localStorage.getItem('state');
    const state = JSON.parse(getState!)
    const getCompCode = window.sessionStorage.getItem('compCode');

    var [item, setItem]: any = React.useState([])
    var [itemGroup, setItemGroup]: any = React.useState([])
    var urlStart1 = `http://${state.domain}:${state.port}/api/values/GetMasterData?MasterType=6&Comp=${getCompCode}&FY=${state.Fy}`;
    var itemGroupUrl = `http://${state.domain}:${state.port}/api/values/GetMasterData?MasterType=79&Comp=${getCompCode}&FY=${state.Fy}`;
    var urlMaterialCenter = `http://${state.domain}:${state.port}/api/values/GetMasterData?MasterType=22&Comp=${getCompCode}&FY=${state.Fy}`;
   


    var [changeItem, setChangeItem]: any = useState('0');
    var [changeItemGroup, setChangeItemGroup]: any = useState('0');
    var [changeMatcenter, setChangeMatcenter]: any = useState('0');
    var [changeMatcenterType, setChangeMatcenterType]: any = useState('0');

    var matCenType = [{ data: "All" }, { data: 'unrestricted' }, { data: 'qc' }, { data: 'block' }, { data: 'rejected' }, { data: 'reserve' }, { data: 'return' }, { data: 'scrap' }]
    var [item, setItem]: any = React.useState([])
    var [itemGroup, setItemGroup]: any = React.useState([])
    var [matcenter, setMatcenter]: any = React.useState([])
    var [dataArray, setDataArray]: any = React.useState([])
   

    const [isSending, setIsSending] = useState(false)
    const isMounted = React.useRef(true)
    var [showResults, setShowResults] = React.useState(false)



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
        const fetchMatCenter = async () => {
            try {
                const response3 = await fetch(urlMaterialCenter);
                const json3 = await response3.json();
                console.log('Matcenter', json3.Data);


                setMatcenter(json3.Data);

            } catch (error) {
                console.log("error", error);
            }
        };

        fetchMatCenter();
    }, [])


    React.useEffect(() => {
        handleItemChange
        handleItemGroupChange
        handleMatcenterChange
        handleMatcenterTypeChange




    }, [changeItem, changeItemGroup, changeMatcenterType, changeMatcenter])



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
    const handleMatcenterChange = (event: any) => {
        var MATCEN = event.target.value
        for (let i = 0; i < matcenter.length; i++) {
            if (MATCEN == matcenter[i].StateName) {
                setChangeMatcenter(matcenter[i].StateCode)

                break;
            }
        }
        if (MATCEN == '') {
            setChangeMatcenter('0')
        }
    }

    const handleMatcenterTypeChange = (event: any) => {
        var MATCENTYPE = event.target.value
        for (let i = 0; i < matCenType.length; i++) {
            if (MATCENTYPE == matCenType[i].data) {
                setChangeMatcenterType(matCenType[i].data)
                console.log(changeMatcenterType)

                break;
            }
        }
        if (MATCENTYPE == '') {
            setChangeMatcenterType('')
        }
    }



    React.useEffect(() => {
        return () => {
            isMounted.current = false
        }
    }, [])

    const sendRequest = React.useCallback(async () => {

        console.log('sdate', changeStartDate)
        setShowResults(false)
        // don't send again while we are sending
        if (isSending) return
        // update state
        setIsSending(true)

        // send the actual request
        try {
            var GetStockDetails = `http://${window.location.host}/api/GetStockDetailsReport`

            var params: any = [];

            params.push(`item=${changeItem}`)
            params.push(`itemgrp=${changeItemGroup}`)
            params.push(`matCenter=${changeMatcenter}`)
            params.push(`mcType=${changeMatcenterType}`)

            params.push(`fdate=${changeStartDate}`)
            params.push(`tdate=${changeEndDate}`)


            console.log(GetStockDetails + '?' + params.join('&'));


            await fetch(GetStockDetails + '?' + params.join('&')).then(async res => await res.json()).then(result => {
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
    }, [isSending, changeItem, changeItemGroup, changeMatcenter, changeMatcenterType, changeEndDate, changeStartDate]) // update the callback if the state changes

    const _export = React.useRef<ExcelExport | null>(null);
    const excelExport = () => {
        if (_export.current !== null) {
            _export.current.save();
        }
    };
    //pagination logic 

    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = React.useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return dataArray.slice(firstPageIndex, lastPageIndex);
    }, [dataArray,currentPage]);

    return (
        <div className="firstDiv">

            <div className="container col-sm-12 card" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "bottom", margin: "0 auto" }}>
                <div className="card-title col-12 text-center" style={{ margin: '0 auto' }}>
                    <span style={{ fontSize: "20px" }}>Stock Details Report</span>
                </div>
                <div className="card-body panel panel-default" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0', backgroundColor: "#F5F5F5", margin: '0' }}>
                    {/*Custom Data List*/}


                    <div className="row filterDiv panel-body col-sm-12" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "baseline", height: "100%", paddingTop: "0" }}>



                        <div className="col-sm-6 filterParent" style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", margin: '0', padding: '0' }}>


                        <div className="wrapper col-sm-4 form-group" >
                            <div className="card-body crd col-sm-12" style={{ backgroundColor: "#F5F5F5" }}>
                                <label style={{ fontSize: "12px", padding: "0", width: '121%' }} htmlFor="itemGroup" className="label-item-group form-label">Item Group</label>

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

                                        : null


                                }
                            </div>

                        </div>
                        {/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
                        <div className="wrapper col-sm-4 form-group">

                            <div className="card-body crd" style={{ backgroundColor: "#F5F5F5" }}>
                                <label style={{ fontSize: "12px", padding: "0" }} htmlFor='matcenter' className="form-label col-sm-12">Material Center</label>

                                <input id="matcenter" name='matcenter' type='text' className="form-control form-select col-sm-12 section" list="matCenterList" onChange={handleMatcenterChange} />

                                {

                                    matcenter != null && matcenter.length > 0 ?

                                        (
                                            <datalist className='matcenter' id="matCenterList">
                                                {
                                                    matcenter.map((obj: any) => {
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

                            <div className="card-body crd" style={{ backgroundColor: "#F5F5F5" }}>
                                <label style={{ fontSize: "12px", padding: "0" }} htmlFor='matcenterType' className="form-label col-sm-12">Material Center Type</label>

                                <input id='matcenterType' name='matcenterType' type='text' className="form-control form-select col-sm-12 section" list='matCenterTypeList' onChange={handleMatcenterTypeChange} />
                                {

                                    matCenType != null && matCenType.length > 0 ?

                                        (
                                            <datalist className='matcentertype' id="matCenterTypeList">
                                                {
                                                    matCenType.map((obj: any) => {
                                                        return <option data-value={obj.data}>{obj.data}</option>
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
                        {/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

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
                    </div>



                    {/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
                </div>


                <div className="row filterDiv col-sm-12" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "baseline", height: "100%", paddingTop: "0" }}>



                    <div className="col-sm-6 filterParent" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", margin: '0', padding: '0' }}>




                        {/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}



                        <div className="wrapper col-sm-4 form-group" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", padding: '0' }}>

                            <div className="card-body crd" style={{ backgroundColor: "#F5F5F5", margin: "16px" }}>


                                <button className="btn btn-primary load-button" type="submit" onClick={sendRequest} >Load</button>
                            </div>

                        </div>

                    </div>

</div>
                </div>
            </div>
            <ClipLoader color="green" loading={isSending} css={override} size={150} />
            {
                showResults ?
                    <>

                        <hr />
                        <ExcelExport data={dataArray} ref={_export}>
                            <GridToolbar>

                                <button
                                    style={{ padding: '0', margin: '0' }}
                                    className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary btn btn-success"
                                    onClick={excelExport}
                                >
                                    <svg style={{ width: '21px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M224 128L224 0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V160h-127.1C238.3 160 224 145.7 224 128zM272.1 264.4L224 344l48.99 79.61C279.6 434.3 271.9 448 259.4 448h-26.43c-5.557 0-10.71-2.883-13.63-7.617L192 396l-27.31 44.38C161.8 445.1 156.6 448 151.1 448H124.6c-12.52 0-20.19-13.73-13.63-24.39L160 344L111 264.4C104.4 253.7 112.1 240 124.6 240h26.43c5.557 0 10.71 2.883 13.63 7.613L192 292l27.31-44.39C222.2 242.9 227.4 240 232.9 240h26.43C271.9 240 279.6 253.7 272.1 264.4zM256 0v128h128L256 0z" /></svg>
                                    Export to Excel
                                </button>


                            </GridToolbar>
                            <div style={{ display: 'none', border: '3px solid green' }}>
                                <Grid data={dataArray} style={{ height: "420px" }}>
                                    <GridColumn field="#" title="S.No" />
                                   
                                    <GridColumn field="itemCode" title="Item Code" />
                                    <GridColumn field="itemName" title="Item Name" />
                                    <GridColumn field="p1" title="p1" />
                                    <GridColumn field="p2" title="p2" />
                                    <GridColumn field="p3" title="p3" />
                                    <GridColumn field="matCenter" title="Mat. Center" />
                                    <GridColumn field="opnQty" title="Opn Qty" />
                                    <GridColumn field="inQty" title="In Qty" />
                                    <GridColumn field="outQty" title="Out Qty" />
                                    <GridColumn field="clsQty" title="Cls. Qty" />
                                    <GridColumn field="uom" title="UOM" />
                                   
                                </Grid>
                            </div>
                        </ExcelExport>
                        <hr />
                        <div className="col-12" style={{ textAlign: 'center', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>
                            <span className="card-title" style={{ fontSize: '15px', color: 'white', fontWeight: 900, margin: '0', padding: '0' }}>Stock Details Report</span>
                        </div>
                        <div className="row row-content col-sm-12 balanceOnlyReport container container-fluid container-lg" style={{ height: '84vh', overflowX: 'auto', overflowY: 'scroll' }}>
                            <div className="card col-sm-12" style={{ padding: '0' }}>


                                <div className="table-responsive col-12 resp-tab">

                                    <table className="table table-striped table-bordered table-hover table-sm">
                                        <thead className="thead-light table-secondary">
                                            <tr>
                                                <th scope="col">#</th>
                                                <th style={{ padding: "0", margin:'0' , backgroundColor:'grey', position: 'sticky'}} scope="col"><span style={{ margin: '33px', fontWeight: 400, fontSize: '15px', color:'white' }} >ItemCode</span></th>
                                                <th style={{ padding: "0", margin:'0' , backgroundColor:'grey', position: 'sticky'}} scope="col"><span style={{ margin: '33px', fontWeight: 400, fontSize: '15px', color:'white' }} >ItemName</span></th>
                                                <th style={{ padding: "0", margin:'0' , backgroundColor:'grey', position: 'sticky'}} scope="col"><span style={{ margin: '33px', fontWeight: 400, fontSize: '15px', color:'white' }} >P1</span></th>
                                                <th style={{ padding: "0", margin:'0' , backgroundColor:'grey', position: 'sticky'}} scope="col"><span style={{ margin: '33px', fontWeight: 400, fontSize: '15px', color:'white' }} >P2</span></th>
                                                <th style={{ padding: "0", margin:'0' , backgroundColor:'grey', position: 'sticky'}} scope="col"><span style={{ margin: '33px', fontWeight: 400, fontSize: '15px', color:'white' }} >P3</span></th>
                                                <th style={{ padding: "0", margin:'0' , backgroundColor:'grey', position: 'sticky'}} scope="col"><span style={{ margin: '33px', fontWeight: 400, fontSize: '15px', color:'white' }} >Mat.Center</span></th>
                                                <th style={{ padding: "0", margin:'0' , backgroundColor:'grey', position: 'sticky'}} scope="col"><span style={{ margin: '33px', fontWeight: 400, fontSize: '15px', color:'white' }} >OpnQty</span></th>
                                                <th style={{ padding: "0", margin:'0' , backgroundColor:'grey', position: 'sticky'}} scope="col"><span style={{ margin: '33px', fontWeight: 400, fontSize: '15px', color:'white' }} >InQty</span></th>
                                                <th style={{ padding: "0", margin:'0' , backgroundColor:'grey', position: 'sticky'}} scope="col"><span style={{ margin: '33px', fontWeight: 400, fontSize: '15px', color:'white' }} >OutQty</span></th>
                                                <th style={{ padding: "0", margin: '0', backgroundColor: 'grey', position: 'sticky'}} scope="col"><span style={{ margin: '33px', fontWeight: 400, fontSize: '15px', color:'white' }} >Cls.Qty</span></th>
                                                <th style={{ padding: "0", margin: '0', backgroundColor: 'grey', position: 'sticky' }} scope="col"><span style={{ margin: '33px', fontWeight: 400, fontSize: '15px', color: 'white' }} >UOM</span></th>

                                            </tr>
                                        </thead>
                                        <tbody>

                                            {currentTableData.map((item: any, i: number) => (
                                                <tr key={i}>
                                                    <th>{i + 1}</th>
                                                    <td>{item.itemCode}</td>
                                                    <td>{item.itemName}</td>
                                                    <td>{item.p1}</td>
                                                    <td>{item.p2}</td>
                                                    <td>{item.p3}</td>
                                                    <td>{item.matCenter}</td>
                                                    <td>{item.opnQty}</td>
                                                    <td>{item.inQty}</td>
                                                    <td>{item.outQty}</td>
                                                    <td>{item.clsQty}</td>
                                                    <td>{item.uom}</td>

                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <Pagination
                                        className="pagination-bar"
                                        currentPage={currentPage}
                                        totalCount={dataArray.length}
                                        pageSize={PageSize}
                                        onPageChange={(page: any) => setCurrentPage(page)}
                                    />
                                </div>
                            </div>

                        </div>

                    </> : null
            }

        </div>
    )
}
export default Details;