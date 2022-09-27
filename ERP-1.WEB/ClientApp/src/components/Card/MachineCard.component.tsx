import * as React from 'react';
import './Card.styles.css';
import "react-datepicker/dist/react-datepicker.css";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, PieChart, Pie, LineChart, Line, ResponsiveContainer, Legend, Tooltip, AreaChart, Area, Cell, LabelList } from 'recharts';
import { useState, useMemo } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import Radium from 'radium';
import Pagination from '../custom-pagination/main-pagination.component';


const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
let PageSize = 9;
export default function MachineCard({ domain, port, Fy, compCode, dataArray, dataArray2, nameKey, dataKey1, dataKey2, piInit, lineInit, barInit, tabInit, cardTitle, groupBySelect, processSelect, machineSelect, reasonSelect, departmentSelect, expensesSelect, process, machine, reason, department, expenses, changeMachine, changeProcess, changeShift, changeEndDate, changeStartDate, setDataArray, setDataArray2, tableKey, tableVal, ...props }: any) {


  


    var [viewPi, setPiView] = React.useState(piInit);
    var [viewLine, setLineView] = React.useState(lineInit);
    var [viewBar, setBarView] = React.useState(barInit);
    var [viewTable, setTableView] = React.useState(tabInit);
    const GroupByArr: any[] = [{ name: "Shift Wise", val: "1" }, { name: "Machine Wise", val: "2" }, { name: "Reason Wise", val: "3" }, { name: "Month Wise", val: "4" }]


    //var [search, setSearch] = React.useState('');
    const isMounted = React.useRef(true)
    var [showResults, setShowResults] = React.useState(false)

    var [machineChange, setMachineChange]: any = React.useState('0')
    var [reasonChange, setReasonChange]: any = React.useState('0')
    var [groupByChange, setGroupByChange]: any = React.useState('8')

    const [isSending, setIsSending] = useState(false)
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
    //const handleSearch = (event: any) => {
    //    setSearch(event.target.value);
    //};


    function RenderPi() {

        setPiView(true);
        setLineView(false);
        setBarView(false);
        setTableView(false);
    }



    function RenderLine() {
        setPiView(false);
        setLineView(true);
        setBarView(false);
        setTableView(false);
    }

    function RenderBar() {
        setPiView(false);
        setLineView(false);
        setBarView(true);
        setTableView(false);
    }
    function RenderTable() {
        setPiView(false);
        setLineView(false);
        setBarView(false);
        setTableView(true);
    }


    const handleReasonChange = (event: any) => {

        var REASON = event.target.value
        for (let i = 0; i < reason.length; i++) {
            if (REASON == reason[i].StateName) {
                setReasonChange(reason[i].StateCode)

                break;
            }
        }


    }


    const handleMachineChange = (event: any) => {

        var MACHINE = event.target.value

        for (let i = 0; i < machine.length; i++) {
            if (MACHINE == machine[i].StateName) {
                setMachineChange(machine[i].StateCode)

                break;
            }
        }

    }

    const handleGroupByChange = (event: any) => {

        var GP_BY = event.target.value

        for (let i = 0; i < GroupByArr.length; i++) {
            if (GP_BY == GroupByArr[i].name) {
                setGroupByChange(GroupByArr[i].val)
                console.log('gp', groupByChange)
                break;
            }
        }


    }

    React.useEffect(() => {
        return () => {
            isMounted.current = false
        }
    }, [])



    const sendReq = React.useCallback(async () => {
       
        console.log('changeMachine', machineChange)
        console.log('changeReason', reasonChange)
        console.log('changegroupByChange', groupByChange)

        setShowResults(false)
        // don't send again while we are sending
        if (isSending) return
        // update state
        setIsSending(true)
        // send the actual request
        try {
            var urlMachine = `http://${domain}:${port}/api/values/GROUPMACHINEDOWNTIME`

            var params = []
            params.push(`fromDate=${changeStartDate}`)
            params.push(`toDate=${changeEndDate}`)
           
            params.push(`shift=${changeShift}`)
          
            params.push(`machine=${machineChange}`);
            params.push(`reason=${reasonChange}`)
            params.push(`grpby=${groupByChange}`);
            params.push(`Comp=${compCode}`);
            params.push(`FY=${Fy}`);
            console.log(urlMachine + '?' + params.join('&'));


            await fetch(urlMachine + '?' + params.join('&')).then(res => res.json()).then(result => {
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
                    setShowResults(true)
                    console.log('onLoad Machine dataArray', dataArray);


                }
                else if (result.Status == '-1') {
                    console.log('data not found in Machine array, fetch Status = -1')
                }
                else if (result.Status == '0') {
                    alert('Machine fetch request failed, fetch STatus = 0')
                }
            })

        }
        catch (Ex) {
            alert("bad url address")
        }

        // once the request is sent, update state again
        if (isMounted.current) // only update if we are still mounted
            setIsSending(false)
    }, [isSending, reasonChange, machineChange, groupByChange]) // update the callback if the state changes

    function RefreshDataArray() {
        dataArray = []
        dataArray2 = []
    }
    const onRefresh = async () => {
        await RefreshDataArray()
        sendReq()
    }

    const card: Radium.StyleRules = {
        "@media (max-width: 950px)": {
            width: '100%'
        },
    }


    //pagination logic 

    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return dataArray.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);



    return (
        <>

            {/*Cards*/}
            < div className="card contain-recharts" style={card}>



                <div className="card-body body" style={{ padding: "0 13px", borderRadius: "2px", backgroundColor: "#FFFFFF", borderBottom: "2px solid white", margin: "0", width: '90%' }}>
                    <div className="card-title title" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", background: "#ffff", borderBottom: '1px solid black', color: 'black', margin: "2px" }}>

                        <span style={{ fontSize: "1rem", fontWeight: "bold", marginLeft: "0" }}>{cardTitle}</span>

                        <span style={{ borderRadius: "10px", margin: "5px", padding: "0 5px", backgroundColor: "#f0f0f5", height: "24px", border: "0.5px solid grey" }}>
                            <button onFocus={RenderPi} className="btnt" style={{ border: "none", padding: "0 2px", margin: "0 2px" }} ><i className="fas fa-chart-pie"></i></button>
                            <button onFocus={RenderLine} className="btnt" style={{ border: "none", padding: "0 2px", margin: "0 3px" }} ><i className="fas fa-chart-line"></i></button>
                            <button onFocus={RenderBar} className="btnt" style={{ border: "none", padding: "0 2px", margin: "0 3px" }} ><i className="fas fa-chart-bar"></i></button>
                            <button onFocus={RenderTable} className="btnt" style={{ border: "none", padding: "0 2px", margin: "0 3px" }} ><i className="fa fa-table" aria-hidden="true"></i></button>

                        </span>



                    </div>

                    <div className="card-title title" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", width: "100%", background: "#ffff", margin: "2px" }}>

                        <div hidden={processSelect} className="col-4" style={{ display: "flex", flexDirection: "column", margin: "0" }}>
                            <label htmlFor="process" style={{ margin: "0", padding: "auto", fontSize: "0.7rem" }}>Process</label>
                            <select name="process" id="process" placeholder="Process" style={{ borderRadius: "5px", padding: "0" }}>

                                {
                                    process != null && process.length > 0 ?

                                        process.map((obj: any) => {
                                            <option selected value={0}>{"All"}</option>
                                            return (
                                                <option value={obj.StateName}>{obj.StateName}</option>
                                            )
                                        })

                                        : null


                                }
                            </select>
                        </div>

                        <div hidden={machineSelect} className="col-4" style={{ display: "flex", flexDirection: "column", margin: "0" }}>
                            <label htmlFor="machine" style={{ margin: "0", padding: "auto", fontSize: "0.7rem" }}>Machine</label>
                            <select name="machine" id="machine" placeholder="Machine" style={{ borderRadius: "5px", padding: "0" }} onChange={handleMachineChange}>
                                <option selected value={0}>All</option>

                                {
                                    machine != null && machine.length > 0 ?

                                        machine.map((obj: any) => {
                                            return <option value={obj.StateName}>{obj.StateName}</option>
                                        })

                                        : null


                                }
                            </select>

                        </div>

                        <div hidden={reasonSelect} className="col-4" style={{ display: "flex", flexDirection: "column", margin: "0" }}>
                            <label htmlFor="reason" style={{ margin: "0", padding: "auto", fontSize: "0.7rem" }}>Reason</label>
                            <select name="reason" id="reason" placeholder="Reason" style={{ borderRadius: "5px", padding: "0" }} onChange={handleReasonChange }>
                                {
                                    reason != null && reason.length > 0 ?

                                        reason.map((obj: any) => {
                                            return <option value={obj.StateName}>{obj.StateName}</option>
                                        })

                                        : null


                                }
                            </select>

                        </div>

                        <div hidden={departmentSelect} className="col-4" style={{ display: "flex", flexDirection: "column", margin: "0" }}>
                            <label htmlFor="dept" style={{ margin: "0", padding: "auto", fontSize: "0.7rem" }}>Department</label>
                            <select name="dept" id="dept" placeholder="Department" style={{ borderRadius: "5px", padding: "0" }}>
                                {
                                    department != null && department.length > 0 ?

                                        department.map((obj: any) => {
                                            return <option value={obj.StateCode}>{obj.StateName}</option>
                                        })

                                        : null


                                }
                            </select>

                        </div>

                        <div hidden={expensesSelect} className="col-4" style={{ display: "flex", flexDirection: "column", margin: "0" }}>
                            <label htmlFor="expenses" style={{ margin: "0", padding: "auto", fontSize: "0.7rem" }}>Expenses</label>
                            <select name="expenses" id="expenses" placeholder="expenses" style={{ borderRadius: "5px", padding: "0" }}>
                                {
                                    expenses != null && expenses.length > 0 ?

                                        expenses.map((obj: any) => {
                                            return <option value={obj.StateCode}>{obj.StateName}</option>
                                        })

                                        : null


                                }
                            </select>

                        </div>

                        <div hidden={groupBySelect} className="col-4" style={{ display: "flex", flexDirection: "column", margin: "0" }}>
                            <label htmlFor="groupBy" style={{ margin: "0", padding: "auto", fontSize: "0.7rem" }}>Group By</label>
                            <select name="groupBy" id="groupBy" placeholder="Group By" style={{ borderRadius: "5px", padding: "0" }} onChange={handleGroupByChange}>

                                {
                                    GroupByArr != null && GroupByArr.length > 0 ?

                                        GroupByArr.map((obj: any) => {
                                            return <option value={obj.name}>{obj.name}</option>
                                        })

                                        : null


                                }
                            </select>
                        </div>

                        <span style={{ margin: "0" }}> <button onClick={onRefresh} style={{ border: "none", background: "none", margin: "0", padding: '0' }} ><i style={{ fontSize: '24px' }} className="fa">&#xf021;</i></button></span>

                    </div>
                    <ClipLoader color="green" loading={isSending} css={override} size={150} />
                    {
                        viewPi && !isSending ? (
                            <ResponsiveContainer width="100%" aspect={1}>
                                <PieChart width={490} height={400} style={{ paddingTop: "0px", marginBottom: "30px" }}>
                                    <Pie
                                        data={dataArray}
                                        dataKey={dataKey1}
                                        nameKey={nameKey}
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={125}
                                        isAnimationActive={true}
                                    />

                                    <Tooltip />

                                    <Legend layout="horizontal" verticalAlign="bottom" align="center" />

                                </PieChart>
                            </ResponsiveContainer>
                        ) : null
                    }
                    {

                        viewLine && !isSending ? (
                            <ResponsiveContainer width="100%" aspect={1}>
                                <LineChart width={490} height={430} data={dataArray}>
                                    <XAxis height={150}  />
                                    <YAxis />
                                    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />

                                    <Line type="monotone" dataKey={dataKey1} stroke="#82ca9d" />
                                    <Legend layout="horizontal" verticalAlign="top" align="center" />
                                    <Tooltip />
                                </LineChart>
                            </ResponsiveContainer>

                        ) : null

                    }{
                        viewBar && !isSending ? (
                            <ResponsiveContainer width="100%" aspect={1}>
                                <BarChart width={490} height={430} data={dataArray2} style={{ marginTop: "20px" }}>

                                    <Bar dataKey={dataKey1} fill="#82ca9d"><LabelList dataKey={dataKey1} position="center" angle={-90} /></Bar>
                                    
                                    <XAxis height={150}  />


                                    <YAxis />
                                    <LabelList dataKey={nameKey} position="top" />
                                    <Tooltip cursor={false} contentStyle={{ backgroundColor: "grey" }} />
                                    <Legend layout="horizontal" verticalAlign="top" align="center" />

                                </BarChart>
                            </ResponsiveContainer>
                        ) : null

                    }
                    {
                        viewTable && !isSending ? (

                            <div className="table-responsive">

                                <table className="table table-striped table-bordered table-hover table-sm ">
                                    <thead>
                                        <tr>
                                            <th>Desc</th>
                                            <th>Quantity</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentTableData.map((item: any) => {
                                            return (
                                                <tr>

                                                    <td>{item.D1}</td>
                                                    <td>{item.Quantity}</td>

                                                </tr>
                                            );
                                        })}
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

                        ) : null
                    }

                </div>

            </div >

        </>
    )
}
