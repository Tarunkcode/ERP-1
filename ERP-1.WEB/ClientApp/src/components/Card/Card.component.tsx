import * as React from 'react';
import './Card.styles.css';
import "react-datepicker/dist/react-datepicker.css";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, PieChart, Pie, LineChart, Line, ResponsiveContainer, Legend, Tooltip, AreaChart, Area, Cell, LabelList } from 'recharts';
import Layout from '../Layout';
import ReactTable from 'react-table';
import { useTable } from 'react-table';
import { Table } from 'reactstrap';
export default function Card({ dataArray, dataArray2, purchase, nameKey, piInit, lineInit, barInit, tabInit,cardTitle, ...props }: any) {
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
                Header: 'Purchase Details',
                // First group columns
                columns: [
                    {
                        Header: "Month Name",
                        accessor: "D1"
                    },
                    {
                        Header: "Purchase Data",
                        accessor: "Purchase_Amount"
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
                    <span style={{ fontSize: "1rem", fontWeight: "bold", marginLeft: "10x" }}>{cardTitle }</span>
                        <span style={{ borderRadius: "10px", margin: "5px", padding: "0 5px", backgroundColor: "#f0f0f5" , height:"24px", border:"0.5px solid grey" }}>
                            <button onFocus={RenderPi}    className="btnt" style={{ border: "none", padding: "0 2px", margin: "0 2px" }} ><i className="fas fa-chart-pie"></i></button>
                            <button onFocus={RenderLine}  className="btnt" style={{ border: "none", padding: "0 2px", margin: "0 3px" }} ><i className="fas fa-chart-line"></i></button>
                            <button onFocus={RenderBar}   className="btnt" style={{ border: "none", padding: "0 2px", margin: "0 3px" }} ><i className="fas fa-chart-bar"></i></button>
                            <button onFocus={RenderTable} className="btnt" style={{ border: "none", padding: "0 2px", margin: "0 3px" }} ><i className="fa fa-table" aria-hidden="true"></i></button>

                    </span>
                </div>


                <div className="card-body" style={{ padding: "0 13px", borderTop: "4px solid #cbcad9", borderRadius: "2px", backgroundColor: "#FFFFFF", borderBottom: "2px solid white", margin:"0", width:'100%' }}>

                        {
                            viewPi ? (
                                <PieChart width={490} height={400} style={{ paddingTop: "0px", marginBottom: "30px" }}>
                                    <Pie
                                        data={dataArray}
                                    dataKey="Purchase_Amount"
                                        nameKey="D1"
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={125}
                                        isAnimationActive={true}
                                    />

                                    <Tooltip />

                                    <Legend layout="vertical" verticalAlign="top" align="right" />

                                </PieChart>

                            ) : null
                        }
                        {

                            viewLine ? (
                                <LineChart width={490} height={430} data={dataArray}>
                                <XAxis dataKey={nameKey} textAnchor="end" sclaeToFit="true" verticalAnchor="start" interval={0} angle={ -45} height={120 } />
                                    <YAxis />
                                    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                                    
                                    <Line type="monotone" dataKey={purchase} stroke="#82ca9d" />
                                <Legend layout="horizontal" verticalAlign="top" align="center" />
                                <Tooltip />
                                </LineChart>


                            ) : null

                        }{
                        viewBar ? (
                            <BarChart width={490} height={400} data={dataArray2}  style={{ marginTop: "20px" }}>
                                <Bar dataKey={purchase} fill="#82ca9d" />
                                <CartesianGrid stroke="#ccc" />
                               
                               
                                <XAxis dataKey={nameKey} textAnchor="end" sclaeToFit="true" verticalAnchor="start" interval={0} angle={-45} height={120 }/>
                                    <YAxis />
                                    <LabelList dataKey={purchase } position="top" />
                                    <Tooltip cursor={false} contentStyle={{ backgroundColor: "grey" }} />
                                    <Legend layout="horizontal" verticalAlign="top" align="center" />
                                </BarChart>


                        ): null

                        }
                    {
                        viewTable ? (

                            <div className="table-responsive">
                                {/*<label htmlFor="search">*/}
                                {/*    Search by Data:*/}
                                {/*    <input id="search" type="text" onChange={handleSearch} />*/}
                                {/*</label>*/}
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
