import * as React from 'react';
import './Card.styles.css';
import "react-datepicker/dist/react-datepicker.css";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, PieChart, Pie, LineChart, Line, ResponsiveContainer, Legend, Tooltip, AreaChart, Area, Cell, LabelList } from 'recharts';
export default function Card({ dataArray,dataArray2,sale,purchase,nameKey, ...props } : any) {
    var [viewPi, setPiView] = React.useState(true);
    var [viewLine, setLineView] = React.useState(false);
    var [viewBar, setBarView] = React.useState(false);
    var [viewTable, setTableView] = React.useState(false);


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

    return (
    <>
        {/*Cards Div*/}

        < div className="row col-12" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", margin: "10px 0", padding: "0" }}>

            {/*Cards*/}
            < div className="card contain-recharts" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "48%", border: "none" }}>
                <div className="card-title" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", background: "#ffff", margin: "2px" }}>
                    <span style={{ fontSize: "1rem", fontWeight: "bold", marginLeft: "10x" }}>Monthly Purchase</span>
                        <span style={{ borderRadius: "10px", margin: "5px", padding: "0 5px", backgroundColor: "#f0f0f5" }}>
                            <button onFocus={RenderPi}    className="btnt" style={{ border: "none", padding: "0 2px", margin: "0 2px" }} ><i className="fas fa-chart-pie"></i></button>
                            <button onFocus={RenderLine}  className="btnt" style={{ border: "none", padding: "0 2px", margin: "0 3px" }} ><i className="fas fa-chart-line"></i></button>
                            <button onFocus={RenderBar}   className="btnt" style={{ border: "none", padding: "0 2px", margin: "0 3px" }} ><i className="fas fa-chart-bar"></i></button>
                            <button onFocus={RenderTable} className="btnt" style={{ border: "none", padding: "0 2px", margin: "0 3px" }} ><i className="fa fa-table" aria-hidden="true"></i></button>

                    </span>
                </div>


                    <div className="card-body" style={{ padding: "0 13px", borderTop: "4px solid #cbcad9", borderRadius: "2px", backgroundColor: "#cbcad9", borderBottom: "2px solid white" }}>

                        {
                            viewPi ? (
                                <PieChart width={490} height={400} style={{ paddingTop: "0px", marginBottom: "30px" }}>
                                    <Pie
                                        data={dataArray}
                                        dataKey="Purchase_Amt"
                                        nameKey="D1"
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={125}
                                    />

                                    <Tooltip />

                                    <Legend layout="vertical" verticalAlign="top" align="right" />

                                </PieChart>

                            ) : null
                        }
                        {

                            viewLine ? (
                                <LineChart width={490} height={400} data={dataArray}>
                                    <XAxis dataKey={nameKey} textAnchor="end" sclaeToFit="true" verticalAnchor="start" interval={0} angle="-40" />
                                    <YAxis />
                                    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                                    <Line type="monotone" dataKey={sale} stroke="#8884d8" />
                                    <Line type="monotone" dataKey={purchase} stroke="#82ca9d" />
                                    <Legend layout="horizontal" verticalAlign="bottom" align="center" />

                                </LineChart>


                            ) : null

                        }{
                            viewBar ? (
                                <BarChart width={490} height={500} data={dataArray} style={{ marginTop: "20px" }}>
                                    <Bar dataKey={purchase} fill="#8884d8" />
                                    <CartesianGrid stroke="#ccc" />
                                    <XAxis dataKey={nameKey} textAnchor="end" sclaeToFit="true" verticalAnchor="start" interval={0} angle="-40" />
                                    <YAxis />
                                    <LabelList dataKey={purchase } position="top" />
                                    <Tooltip cursor={false} contentStyle={{ backgroundColor: "grey" }} />
                                    <Legend layout="horizontal" verticalAlign="bottom" align="center" />
                                </BarChart>


                        ): null

                        }
                        {
                        viewTable ? (
                                <table className="table table-sm">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                       
                                    </tbody>
                                </table>


                            ): null
                        }

                </div>

            </div >

            <div className="card contain-recharts" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "48%" }}>
                <div className="card-title" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", width: "100%" }}>
                    <span style={{ borderRadius: "10px", margin: "5px", padding: "0 5px", backgroundColor: "#f0f0f5" }}>

                        <button className="btnt" style={{ border: "none", padding: "0 2px", margin: "0 2px" }} ><i className="fas fa-chart-pie"></i></button>
                        <button className="btnt" style={{ border: "none", padding: "0 2px", margin: "0 3px" }} ><i className="fas fa-chart-line"></i></button>
                        <button className="btnt" style={{ border: "none", padding: "0 2px", margin: "0 3px" }} ><i className="fas fa-chart-bar"></i></button>
                        <button className="btnt" style={{ border: "none", padding: "0 2px", margin: "0 3px" }} ><i className="fa fa-table" aria-hidden="true"></i></button>

                    </span>
                </div>
                <div className="card-body">
                    <span>This is body</span>

                </div>

            </div>

        </div >
        {/*Cards Div*/}
        < div className="row col-12" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", margin: "10px 0", padding: "0" }}>


            {/*Cards*/}
            < div className="card contain-recharts" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "48%", border: "1px solid grey" }}>
                <div className="card-title" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", width: "100%" }}>
                    <span style={{ borderRadius: "10px", margin: "5px", padding: "0 5px", border: "1px solid black", backgroundColor: "#f0f0f5" }}>

                        <button style={{ border: "none", padding: "0 2px", margin: "0 2px" }} ><i className="fas fa-chart-pie"></i></button>
                        <button style={{ border: "none", padding: "0 2px", margin: "0 3px" }} ><i className="fas fa-chart-line"></i></button>
                        <button style={{ border: "none", padding: "0 2px", margin: "0 3px" }} ><i className="fas fa-chart-bar"></i></button>
                        <button style={{ border: "none", padding: "0 2px", margin: "0 3px" }} ><i className="fa fa-table" aria-hidden="true"></i></button>

                    </span>
                </div>
                <div className="card-body">
                    <span>This is body</span>

                </div>

            </div >

            <div className="card contain-recharts" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "48%", border: "1px solid grey" }}>
                <div className="card-title" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", width: "100%" }}>
                    <span style={{ borderRadius: "10px", margin: "5px", padding: "0 5px", border: "1px solid black", backgroundColor: "#f0f0f5" }}>

                        <button style={{ border: "none", padding: "0 2px", margin: "0 2px" }} ><i className="fas fa-chart-pie"></i></button>
                        <button style={{ border: "none", padding: "0 2px", margin: "0 3px" }} ><i className="fas fa-chart-line"></i></button>
                        <button style={{ border: "none", padding: "0 2px", margin: "0 3px" }} ><i className="fas fa-chart-bar"></i></button>
                        <button style={{ border: "none", padding: "0 2px", margin: "0 3px" }} ><i className="fa fa-table" aria-hidden="true"></i></button>

                    </span>
                </div>
                <div className="card-body">
                    <span>This is body</span>

                </div>

            </div>
        </div >


    </>
        )
}
