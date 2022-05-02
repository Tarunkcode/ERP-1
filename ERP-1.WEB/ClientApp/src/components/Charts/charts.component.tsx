import * as React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, PieChart, Pie, LineChart, Line, ResponsiveContainer, Legend, Tooltip, AreaChart, Area, Cell, LabelList } from 'recharts';



// Bar graph
export function Bars({ width, height, data, dataKey1, fill, xdataKey, ...props }:any) {
    return (
        <BarChart width={width} height={height} data={data} style={{ marginTop: "20px" }}>
            <Bar dataKey={dataKey1} fill={fill} />
            
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey={xdataKey} />
            <YAxis />
            <Tooltip cursor={false} contentStyle={{ backgroundColor: "grey" }} />
            <Legend layout="vertical" verticalAlign="top" align="center" />
        </BarChart>
    )
}

export function DoubleBars({ width, height, data, dataKey1, dataKey2, fill, fill2, xdataKey, ...props }:any) {
    return (
        <BarChart width={width} height={height} data={data} style={{ marginTop: "20px" }}>
            <Bar dataKey={dataKey1} fill={fill } />
            <Bar dataKey={dataKey2} fill={fill2 } />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey={ xdataKey} />
            <YAxis />
            <Tooltip cursor={false} contentStyle={{ backgroundColor: "grey" }} />
            <Legend layout="vertical" verticalAlign="top" align="center" />
        </BarChart>
        )
}

// pi charts
export function Pies({ data, width, height, dataKey, nameKey, oRadius, ...props }:any) {
    return (
        <PieChart width={width} height={height} style={{ paddingTop: "0px", marginBottom: "30px" }}>
            <Pie
                data={data}
                dataKey={dataKey}
                nameKey={nameKey}
                cx="50%"
                cy="50%"
                outerRadius={oRadius}
                label

            />
            <Tooltip />

            <Legend layout="horizontal" verticalAlign="bottom" align="center" />

        </PieChart>
        )
}

//line graph
export function Lines({ width, height, data, xdataKey, dataKey1, dataKey2, lineColor1, lineColor2, ...props }:any) {
    return (
        <LineChart width={width} height={height} data={data}>
            <XAxis dataKey={xdataKey} />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey={dataKey1} stroke={lineColor1} />
            <Line type="monotone" dataKey={dataKey2} stroke={lineColor2} />
        </LineChart>

        )
}
