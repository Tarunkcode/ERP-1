import * as React from 'react';
import './Card.styles.css';
import "react-datepicker/dist/react-datepicker.css";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, PieChart, Pie, LineChart, Line, ResponsiveContainer, Legend, Tooltip, AreaChart, Area, Cell, LabelList } from 'recharts';
import Layout from '../Layout';
import ReactTable from 'react-table';
import { useTable } from 'react-table';
import { Table } from 'reactstrap';
export default function Card({ dataArray, dataArray2,nameKey, dataKey1, dataKey2, piInit, lineInit, barInit, tabInit, cardTitle, groupBySelect, processSelect, machineSelect ,reasonSelect,departmentSelect, expensesSelect,process,machine, reason,department,expenses, ...props }: any) {
    var [viewPi, setPiView] = React.useState(piInit);
    var [viewLine, setLineView] = React.useState(lineInit);
    var [viewBar, setBarView] = React.useState(barInit);
    var [viewTable, setTableView] = React.useState(tabInit);
    //var [search, setSearch] = React.useState('');

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
    const data = dataArray2;
    const columns = React.useMemo(
        () => [
            {
                // first group - TV Show
                Header: 'Planning Details',
                // First group columns
                columns: [
                    {
                        Header: "DESC",
                        accessor: "D1"
                    },
                    {
                        Header: "Purchase Data",
                        accessor: "Quantity"
                    }
                ]
            }
        ],
        []
    );

    const {
        getTableProps, // table props from react-table
        getTableBodyProps, // table body props from react-table
        headerGroups, // headerGroups, if your table has groupings
        rows, // rows for the table based on the data passed
        prepareRow // Prepare the row (this function needs to be called for each row before getting the row props)
    } = useTable({
        columns,
        data
    });



    return (
    <>

            {/*Cards*/}
            < div className="card contain-recharts" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "48%", border: "none" }}>
                <div className="card-title" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", background: "#ffff", margin: "2px" }}>
                    
                    <span style={{ fontSize: "1rem", fontWeight: "bold", marginLeft: "0" }}>{cardTitle}</span>

                        <span style={{ borderRadius: "10px", margin: "5px", padding: "0 5px", backgroundColor: "#f0f0f5" , height:"24px", border:"0.5px solid grey" }}>
                            <button onFocus={RenderPi}    className="btnt" style={{ border: "none", padding: "0 2px", margin: "0 2px" }} ><i className="fas fa-chart-pie"></i></button>
                            <button onFocus={RenderLine}  className="btnt" style={{ border: "none", padding: "0 2px", margin: "0 3px" }} ><i className="fas fa-chart-line"></i></button>
                            <button onFocus={RenderBar}   className="btnt" style={{ border: "none", padding: "0 2px", margin: "0 3px" }} ><i className="fas fa-chart-bar"></i></button>
                            <button onFocus={RenderTable} className="btnt" style={{ border: "none", padding: "0 2px", margin: "0 3px" }} ><i className="fa fa-table" aria-hidden="true"></i></button>

                        </span>
                   
                  
                   
                </div>
                <hr style={{ border: "0.5px solid grey", opacity:"0.5", margin:"0" }} />
                <div className="card-title col-12" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", width: "100%", background: "#ffff", margin: "2px" }}>

                    <div hidden={processSelect} className="col-4" style={{ display: "flex", flexDirection: "column", margin: "0" }}>
                        <label htmlFor="process" style={{ margin: "0", padding: "auto", fontSize:"0.7rem" }}>Process</label>
                        <select name="process" id="process" placeholder="Process" style={{borderRadius:"5px", padding:"0"}}>
                        {
                            process != null && process.length > 0 ?

                                            process.map((obj: any) => {
                                                return <option value={obj.StateCode}>{obj.StateName}</option>
                                            })

                                : console.log('fine')


                            }
                        </select>
                    </div>

                    <div hidden={machineSelect } className="col-4" style={{ display: "flex", flexDirection: "column", margin: "0" }}>
                        <label htmlFor="machine" style={{ margin: "0", padding: "auto", fontSize:"0.7rem" }}>Machine</label>
                        <select name="machine" id="machine" placeholder="Machine" style={{borderRadius:"5px", padding:"0"}}>
                            {
                                machine != null && machine.length > 0 ?

                                    machine.map((obj: any) => {
                                        return <option value={obj.StateCode}>{obj.StateName}</option>
                                    })

                                    : console.log('fine')


                            }
                    </select>

                    </div>

                    <div hidden={reasonSelect} className="col-4" style={{ display: "flex", flexDirection: "column", margin: "0" }}>
                        <label htmlFor="reason" style={{ margin: "0", padding: "auto", fontSize:"0.7rem" }}>Reason</label>
                        <select name="reason" id="reason" placeholder="Reason" style={{borderRadius:"5px", padding:"0"}}>
                            {
                                reason != null && reason.length > 0 ?

                                    reason.map((obj: any) => {
                                        return <option value={obj.StateCode}>{obj.StateName}</option>
                                    })

                                    : console.log('fine')


                            }
                    </select>

                    </div>

                    <div hidden={departmentSelect} className="col-4" style={{ display: "flex", flexDirection: "column", margin: "0" }}>
                        <label htmlFor="dept" style={{ margin: "0", padding: "auto", fontSize:"0.7rem" }}>Department</label>
                        <select name="dept" id="dept" placeholder="Department" style={{borderRadius:"5px", padding:"0"}}>
                            {
                                department != null && department.length > 0 ?

                                    department.map((obj: any) => {
                                        return <option value={obj.StateCode}>{obj.StateName}</option>
                                    })

                                    : console.log('fine')


                            }
                    </select>

                    </div>

                    <div hidden={expensesSelect} className="col-4" style={{ display: "flex", flexDirection: "column", margin: "0" }}>
                        <label htmlFor="expenses" style={{ margin: "0", padding: "auto", fontSize:"0.7rem" }}>Expenses</label>
                        <select name="expenses" id="expenses" placeholder="expenses" style={{borderRadius:"5px", padding:"0"}}>
                            {
                                expenses != null && expenses.length > 0 ?

                                    expenses.map((obj: any) => {
                                        return <option value={obj.StateCode}>{obj.StateName}</option>
                                    })

                                    : console.log('fine')


                            }
                    </select>

                    </div>
                   
                    <div hidden={groupBySelect} className="col-4" style={{ display: "flex", flexDirection: "column", margin: "0" }}>
                        <label htmlFor="groupBy" style={{ margin: "0", padding: "auto", fontSize:"0.7rem" }}>Group By</label>
                        <select name="groupBy" id="groupBy" placeholder="Group By" style={{borderRadius:"5px", padding:"0"}}>
                        <option value="1">Item Group</option>
                        <option value="2">Brand</option>
                        <option value="3">Category</option>
                        <option value="4">Sub Category</option>
                        <option value="5">Item Type</option>
                        <option value="6">Process</option>
                        <option value="7">Shift</option>
                        <option value="8">Monthly</option>
                    </select>
                    </div>
                </div>


                <div className="card-body" style={{ padding: "0 13px", borderTop: "4px solid #cbcad9", borderRadius: "2px", backgroundColor: "#FFFFFF", borderBottom: "2px solid white", margin:"0", width:'100%' }}>

                        {
                            viewPi ? (
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

                            ) : null
                        }
                        {

                            viewLine ? (
                            <LineChart width={490} height={430} data={dataArray}>
                                <XAxis dataKey={nameKey} textAnchor="end" sclaeToFit="true" verticalAnchor="start" interval={0} angle={-40} height={150} />
                                    <YAxis />
                                    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />

                                <Line type="monotone" dataKey={dataKey1} stroke="#82ca9d" />
                                <Legend layout="horizontal" verticalAlign="top" align="center" />
                                <Tooltip />
                                </LineChart>


                            ) : null

                        }{
                        viewBar ? (
                            <BarChart width={490} height={430} data={dataArray2}  style={{ marginTop: "20px" }}>
                                <Bar dataKey={dataKey1} fill="#82ca9d" />
                                <CartesianGrid stroke="#ccc" />
                               

                                <XAxis dataKey={nameKey} textAnchor="end" sclaeToFit="true" verticalAnchor="start" interval={0} angle={-40} height={150} />
                                <YAxis />
                                <LabelList dataKey={nameKey} position="top" />
                                    <Tooltip cursor={false} contentStyle={{ backgroundColor: "grey" }} />
                                    <Legend layout="horizontal" verticalAlign="top" align="center" />
                                </BarChart>


                        ): null

                        }
                    {
                        viewTable ? (

                            <div className="table-responsive">
                               
                            <table {...getTableProps()} className="table table-striped table-bordered table-hover table-sm ">
                                    <thead>
                                        {headerGroups.map(headerGroup => (
                                            <tr {...headerGroup.getHeaderGroupProps()}>
                                                {headerGroup.headers.map(column => (
                                                    <th scope="col" {...column.getHeaderProps()}>{column.render("Header")}</th>
                                                ))}
                                            </tr>
                                        ))}
                                    </thead>
                                    <tbody {...getTableBodyProps()}>
                                        {rows.map((row, i) => {
                                            prepareRow(row);
                                            return (
                                                <tr {...row.getRowProps()}>
                                                    {row.cells.map(cell => {
                                                        return <td scope="row" {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                                                    })}
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                          </div>

                        ): null
                    }

                </div>

               </div >

    </>
        )
}
