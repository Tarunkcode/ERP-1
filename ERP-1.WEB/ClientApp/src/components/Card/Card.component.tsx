import * as React from 'react';
import './Card.styles.css';





import "react-datepicker/dist/react-datepicker.css";


import { BarChart, Bar, CartesianGrid, XAxis, YAxis, PieChart, Pie, LineChart, Line, ResponsiveContainer, Legend, Tooltip, AreaChart, Area, Cell, LabelList } from 'recharts';
export default function Card({ dataArray, ...props } : any) {
    return (
        
    <>
        {/*Cards Div*/}

        < div className="row col-12" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", margin: "10px 0", padding: "0" }}>

            {/*Cards*/}
            < div className="card contain-recharts" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "48%", border: "none" }}>
                <div className="card-title" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", background: "#ffff", margin: "2px" }}>
                    <span style={{ fontSize: "1rem", fontWeight: "bold", marginLeft: "10x" }}>Monthly Purchase</span>
                    <span style={{ borderRadius: "10px", margin: "5px", padding: "0 5px", backgroundColor: "#f0f0f5" }}>
                        <button onClick={() => { console.log("I am Clicked") }} className="btnt" style={{ border: "none", padding: "0 2px", margin: "0 2px" }} ><i className="fas fa-chart-pie"></i></button>
                        <button onClick={() => { console.log("I am Clicked") }} className="btnt" style={{ border: "none", padding: "0 2px", margin: "0 3px" }} ><i className="fas fa-chart-line"></i></button>
                        <button onClick={() => { console.log("I am Clicked") }} className="btnt" style={{ border: "none", padding: "0 2px", margin: "0 3px" }} ><i className="fas fa-chart-bar"></i></button>
                        <button onClick={() => { console.log("I am Clicked") }} className="btnt" style={{ border: "none", padding: "0 2px", margin: "0 3px" }} ><i className="fa fa-table" aria-hidden="true"></i></button>

                    </span>
                </div>


                <div className="card-body" style={{ padding: "13px", borderTop: "4px solid #cbcad9", borderRadius: "2px", backgroundColor: "#cbcad9", borderBottom: "2px solid white" }}>
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
