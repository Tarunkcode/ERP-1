import * as React from 'react';
import DatePicker from "react-datepicker";
import './BalanceOnly.styles.css';
import { useState } from 'react';
import { ClipLoader } from 'react-spinners';

const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
`;
export default function BalanceOnlyReport() {
    
    var [changeItem, setChangeItem]: any = useState('0');
    var [changeItemGroup, setChangeItemGroup]: any = useState('0');
    var [changeMatcenter, setChangeMatcenter]: any = useState('0');
    var [changeMatcenterType, setChangeMatcenterType]: any = useState('');

    var matCenType = [{ data: "All" }, {data:'unrestricted'}, {data:'qc'}, {data:'block'}, {data:'rejected'}, {data:'reserve'}, {data:'return'}, {data:'scrap'}]
    var [item, setItem]: any = React.useState([])
    var [itemGroup, setItemGroup]: any = React.useState([])
    var [matcenter, setMatcenter]: any = React.useState([])
    var [dataArray, setDataArray]: any = React.useState([])

    var urlStart1 = "http://103.197.121.188:85/api/values/GetMasterData?MasterType=6&Comp=comp0015&FY=2021";
    var urlMaterialCenter = "http://103.197.121.188:85/api/values/GetMasterData?MasterType=22&Comp=comp0015&FY=2021";
    var itemGroupUrl = "http://103.197.121.188:85/api/values/GetMasterData?MasterType=79&Comp=comp0015&FY=2021";
    const [isSending, setIsSending] = useState(false)
    const isMounted = React.useRef(true)
    var [showResults, setShowResults] = React.useState(false)

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

   
    var [startDate, setStartDate]: any = useState(new Date);
  
    var [changeStartDate, setChangeStartDate]: any = useState(defaultDate);
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
               console.log('Matcenter',json3.Data);


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
            var GetBalanceDetails = "http://localhost:16067/api/GetBalanceReport"

            var params: any = [];
           
            params.push(`item=${changeItem}`)
            params.push(`itemgrp=${changeItemGroup}`)
            params.push(`matCenter=${changeMatcenter}`)
            params.push(`matCenType=${changeMatcenterType}`)
           
            params.push(`asOnDate=${changeStartDate}`)
          

            console.log(GetBalanceDetails + '?' + params.join('&'));


            await fetch(GetBalanceDetails + '?' + params.join('&')).then(res => res.json()).then(result => {
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
    }, [isSending, changeItem, changeItemGroup, changeMatcenter, changeMatcenterType, changeStartDate]) // update the callback if the state changes


    return (
        <div style={{ margin: '10px -8em 0 -8em', }}>
            <div className="row filterDiv panel-body col-sm-12" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "baseline", height: "100%", paddingTop: "10px" }}>



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

                    <div className="wrapper col-sm-4 form-group" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: '0' }}>

                        <div className="card-body crd" style={{ backgroundColor: "#F5F5F5" }}>
                            <label style={{ fontSize: "12px", padding: "0" }} htmlFor='startDate' className="label-from-date form-label col-sm-12">As On Date</label>

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

                    <div className="wrapper col-sm-4 form-group" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: '0' }}>

                        <div className="card-body crd" style={{ backgroundColor: "#F5F5F5", margin: "16px" }}>


                            <button className="btn btn-primary load-button" type="submit" disabled={isSending} onClick={sendRequest}>Load</button>
                        </div>

                    </div>

                </div>



                {/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
            </div>
                   

            <hr />
            <ClipLoader color="green" loading={isSending} css={override} size={150} />
            {
                showResults ?
                    <>

                        <div className="col-12" style={{ textAlign: 'center', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>
                            <span className="card-title" style={{ fontSize: '15px', color: 'white', fontWeight: 900, margin: '0', padding: '0' }}>Balance Only Stock Report</span>
                        </div>
                        <div className="row row-content col-sm-12 balanceOnlyReport container container-fluid container-lg" style={{ height: '70vh', overflowX: 'scroll', overflowY: 'scroll' }}>
                            <div className="card col-sm-12" style={{ padding: '0' }}>


                                <div className="table-responsive col-12 resp-tab">

                                    <table className="table table-striped table-bordered table-hover table-sm">
                                        <thead className="thead-light table-secondary">
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col"><span>Item Code</span></th>
                                                <th scope="col"><span>Item Name</span></th>
                                                <th scope="col"><span>P1</span></th>
                                                <th scope="col"><span>P2</span></th>
                                                <th scope="col"><span>P3</span></th>
                                                <th scope="col"><span>Uom</span></th>
                                                <th scope="col"><span>Created On</span></th>
                                                <th scope="col"><span>Quantity</span></th>
                                              

                                            </tr>
                                        </thead>
                                        <tbody>

                                            {dataArray.map((item: any, i: number) => (
                                                <tr key={i}>
                                                    <th>{i + 1}</th>
                                                    <td>{item.itemCode}</td>
                                                    <td>{item.itemName}</td>
                                                    <td>{item.p1}</td>
                                                    <td>{item.p2}</td>
                                                    <td>{item.p3}</td>
                                                    <td>{item.uom}</td>
                                                    <td>{item.createdOn}</td>
                                                    <td>{item.sQty}</td>
                                                    
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>

                    </> : null
            }
        </div>
        )
}