
import * as React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, PieChart, Pie, LineChart, Line, ResponsiveContainer, Legend, Tooltip, AreaChart, Area, Cell, LabelList } from 'recharts';
import { useState } from 'react';
import './home.css';
import Purchase from '../Pages/DashBoards/purchase/purchase.component';
import { Label } from 'reactstrap';
const AxisLabel = ({ axisType, x, y, width, height, stroke, children }: any) => {
    const isVert = axisType === 'yAxis';
    const cx = isVert ? x : x + (width / 2);
    const cy = isVert ? (height / 2) + y : y + height + 10;
    const rot = isVert ? `270 ${cx} ${cy}` : 0;
    return (
        <text x={cx} y={cy} transform={`rotate(${rot})`} textAnchor="middle" stroke={stroke}>
            {children}
        </text>
    );
};
const Home = () => {
    
let [posData, setposData] = useState({});
    const getState = window.localStorage.getItem('state');
    const state = JSON.parse(getState!)
    const getCompCode = window.sessionStorage.getItem('compCode');

    //console.log('domain',state.domain)
    //console.log('port',state.port)
    //console.log('fy',state.Fy)
    var finY = parseInt(state.Fy);

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
    var [saleArr, setSaleArr]: any = useState([]);
    var [pendingSO, setPendingSO]: any = useState([]);
    var [soSetails, setSODetails]: any = useState([]);


    

    var urlStart = `http://${state.domain}:${state.port}/api/values/GetMisReport?Comp=${getCompCode}&Fy=${state.Fy}&Acccode=0`
    var urlSaleComparision = `http://${state.domain}:${state.port}/api/values/spsalecompprvyear?acccode=0&comp=${getCompCode}&fy=${state.Fy}`
    var urlPendingMonthlySO = `http://${state.domain}:${state.port}/api/values/GetPendingMonthlySO?acccode=0&comp=${getCompCode}&fy=${state.Fy}`
    var urlSODetails = `http://${state.domain}:${state.port}/api/values/getmonthlysodetails?acccode=0&comp=${getCompCode}&fy=${state.Fy}`


    React.useEffect(() => {
        console.log(urlStart)
        fetch(urlStart).then(res => res.json()).then(result => {
           

            if (result.Status == '1') {
                var D1, D2, D3, obj, fill;

                for (let item = 0; item < result.Data.length; item++) {

                    D1 = result.Data[item].D1;
                    D2 = result.Data[item].D2;
                    D3 = result.Data[item].D3;

                    D2 = parseFloat(D2);
                    D3 = parseFloat(D3);

                    D2 = D2 / 10000000;
                    D3 = D3 / 10000000;
                    fill = colors[item];
                    var Sale_Amount = D3.toFixed(2);

                    var Purchase_Amt = D2.toFixed(2);

                    obj = { D1, Sale_Amount, Purchase_Amt, fill, D2 };
                   var obj2 = { D1, Sale_Amount, Purchase_Amt, D2 };
                    //[dataArray].
                    dataArray = [...dataArray]; // copying the old datas array
                    dataArray[item] = obj; // replace e.target.value with whatever you want to change it to

                    setDataArray(dataArray);

                    dataArray2 = [...dataArray2]
                    dataArray2[item] = obj2;
                    setDataArray2(dataArray2);
                }

                console.log(dataArray);

            } else {
                console.log("Calling APi failed");
            }
        })
    }, [])

    React.useEffect(() => {
        fetch(urlSaleComparision).then(res => res.json()).then(result => {
            if (result.Status == '1') {

                var Monthname, PSaleAmt, SaleAmt, obj;
             
                for (let item = 0; item < result.Data.length; item++) {
                    Monthname = result.Data[item].Monthname;
                    PSaleAmt = result.Data[item].PSaleAmt;
                    SaleAmt = result.Data[item].SaleAmt;


                    PSaleAmt = parseFloat(PSaleAmt);
                    SaleAmt = parseFloat(SaleAmt);

                    PSaleAmt = PSaleAmt / 10000000;
                    SaleAmt = SaleAmt / 10000000;
                    var Prev_Year_Sale_Amount = PSaleAmt.toFixed(2);
                    var This_Year_Sale_Amount = SaleAmt.toFixed(2);
                    obj = { Monthname, Prev_Year_Sale_Amount, This_Year_Sale_Amount };
                    //[dataArray].
                    saleArr = [...saleArr]; // copying the old datas array
                    saleArr[item] = obj; // replace e.target.value with whatever you want to change it to

                    setSaleArr(saleArr);
                }
                console.log(saleArr);
            } else {
                console.log("Calling APi failed");
            }
        })
    }, [])

    React.useEffect(() => {
    console.log('pending monthly so', urlPendingMonthlySO);
        fetch(urlPendingMonthlySO).then(res => res.json()).then(result => {
         
            if (result.Status == '1') {

                var Monthname, Amt,  obj;

                for (let item = 0; item < result.Data.length; item++) {
                    Monthname = result.Data[item].MonthName;
                    Amt = result.Data[item].Amt;
                    Amt = parseFloat(Amt);

                    
                    Amt = Amt / 10000000;
                    var Amount = Amt;
                   var fill = colors[item]
                    obj = { Monthname, Amount, fill};
                    //[dataArray].
                    pendingSO = [...pendingSO];
                    pendingSO[item] = obj;

                    setPendingSO(pendingSO);
                }
                console.log(pendingSO);
            } else {
                console.log("Calling APi failed");
            }
        })
    }, [])

    React.useEffect(() => {
        fetch(urlSODetails).then(res => res.json()).then(result => {
           
            if (result.Status == '1') {

                var Monthname, Amt, obj;

                for (let item = 0; item < result.Data.length; item++) {
                    Monthname = result.Data[item].MonthName;
                    Amt = result.Data[item].SoAmt;
                    Amt = parseFloat(Amt);


                     Amt =Amt / 10000000;
                    var Amount = Amt;
                    var fill = colors[item]
                    obj = { Monthname, Amount, fill };
                    //[dataArray].
                    soSetails = [...soSetails];
                    soSetails[item] = obj;

                    setSODetails(soSetails);
                }
                console.log(soSetails);
            } else {
                console.log("Calling APi failed");
            }
        })
    }, [])
   
    return (
        <div>
            <div className='first'>
                <div className="row card home-cards">
                    <div style={{ width: '100%', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: '0' }}>

                        <span className="card-title" style={{ fontSize: "20px", margin: "0", width: '100%' }}>Monthly Sale</span>
                        <ResponsiveContainer width="100%" aspect={1}>
                            <BarChart className='card-body' width={560} height={260} data={dataArray2} style={{ marginTop: "20px", padding: '0' }}>
                                {/* <Bar label={true} dataKey="Sale_Amount" fill="#8884d8" />*/}
                                <Bar dataKey="Sale_Amount" stackId="a" fill="#8884d8">
                                    <LabelList dataKey="Sale_Amount" position="center" angle={-90 } />
                                </Bar>
                               
                                <XAxis style={{ fontSize: '0.6rem' }} dataKey="D1" textAnchor="end" sclaeToFit="true" verticalAnchor="start" interval={0} angle={-40} height={70} />
                                <YAxis dataKey="Sale_Amount" type="number" domain={[0, 30]} label={{
                                    value: "Sale Amount in Cr.",
                                    angle: -90,
                                    position: "insideLeft",
                                    dx: 20
                                   
                                }}/>
                                <LabelList dataKey="Sale_Amount" position="top" />
                              
                                <Legend layout="vertical" verticalAlign="top" align="center" />
                            </BarChart>
                        </ResponsiveContainer>


                    </div>
                </div>
             
                <div className="row card home-cards">
                    <div style={{ width: '100%', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: '0' }}>

                        <span className="card-title" style={{ fontSize: "20px", margin: "0px", width: '100%' }}>Monthly Purchase</span>
                        <text style={{marginTop:'30px'}}>Monthly Purchase (in Cr.)</text>
                        <ResponsiveContainer width="100%" aspect={1}>
                            <PieChart className="card-body" width={560} height={260} style={{ padding: "0px" }}>
                                <Pie
                                    data={dataArray}
                                    dataKey="D2"
                                    nameKey="D1"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={125}

                                />
                                <Tooltip />

                                <Legend layout="horizontal" verticalAlign="bottom" align="center" />

                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            <hr />
            <div style={{ width: '100%', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: '0' }}>

                <span className="card-title" style={{ fontSize: "20px", margin: "0", width: '100%' }}>Sale V/S Purchase</span>

                <ResponsiveContainer width='100%' aspect={1.5 / 0.8}>
                    <BarChart className="card-body" data={dataArray2} style={{ padding: '0' }} >
                        <Bar dataKey="Sale_Amount" fill="#8884d8" ><LabelList dataKey="Sale_Amount" position="center" angle={-90} /></Bar>
                        <Bar dataKey="Purchase_Amt" fill="#82ca9d" ><LabelList dataKey="Purchase_Amt" position="center" angle={-90} /></Bar>
                        <CartesianGrid stroke="#ccc" />
                        <XAxis style={{ fontSize: '0.6rem' }} dataKey="D1" textAnchor="end" sclaeToFit="true" verticalAnchor="start" interval={0} angle={-40} height={50} label={{
                            value: `Sale v/s Purchase Amount (in Cr.)`,
                            angle: -90,
                            position: "insideLeft",
                            dx: -60,
                            dy: -200

                        }}/>
                        <YAxis type="number" domain={[0, 30]}/>
                        
                        <Legend layout="horizontal" verticalAlign="top" align="center" />
                    </BarChart>
                </ResponsiveContainer>


            </div>
            <hr />
            <div style={{ width: '100%', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: '0' }}>

                <span className="card-title" style={{ fontSize: "20px", margin: "0", width: '100%' }}>{finY - 1} Year Sale V/S {state.Fy } Year Sale</span>
                <ResponsiveContainer width='100%' aspect={1.5 / 0.8}>
                    <BarChart className="card-body" data={saleArr} style={{ padding: '0' }}>
                        <Bar dataKey="Prev_Year_Sale_Amount" fill="#8884d8"><LabelList dataKey="Prev_Year_Sale_Amount" position="center" angle={-90} /></Bar>
                        <Bar dataKey="This_Year_Sale_Amount" fill="#82ca9d"><LabelList dataKey="This_Year_Sale_Amount" position="center" angle={-90} /></Bar>
                <CartesianGrid stroke="#ccc" />
                        <XAxis style={{fontSize:'0.6rem'}} dataKey="Monthname" textAnchor="end" sclaeToFit="true" verticalAnchor="start" interval={0} angle={-40} height={50}/>
                        <YAxis type="number" domain={[0, 30]} label={{
                            value: `${finY - 1} Year Sale V/S ${state.Fy } Year Sale (in Cr.)`,
                            angle: -90,
                            position: "insideLeft",
                            dx: 5,
                            dy: 100

                        }}/>
                       
                        <Legend layout="horizontal" verticalAlign="top" align="center" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <hr />
            <div className="last">
                <div className="row card home-cards">
                    <div style={{ width: '100%', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: '0' }}>

                        <span className="card-title" style={{ fontSize: "20px", margin: "0px", width: '100%' }}>Monthly Sale Order</span>
                        <text style={{ marginTop: '30px' }}>Monthly Sale Order (in Cr.)</text>
                        <ResponsiveContainer width="100%" aspect={1}>
                            <PieChart className="card-body" width={560} height={260} style={{ padding: "0px"}}>
                                <Pie
                                data={soSetails}
                                dataKey="Amount"
                                nameKey="Monthname"
                                cx="50%"
                                cy="50%"
                                outerRadius={125}
                               
                            />
                            <Tooltip />

                            <Legend layout="horizontal" verticalAlign="bottom" align="center" />

                        </PieChart>
                        </ResponsiveContainer>
                   </div>
                </div>
                <div className="row card home-cards">
                    <div style={{ width: '100%', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: '0' }}>

                        <span className="card-title" style={{ fontSize: "20px", margin: "0px", width: '100%' }}>Monthly Pending Sale Order</span>
                        <text style={{marginTop:'30px' }}>Monthly Pendng Sale Order (in Cr.)</text>
                        <ResponsiveContainer width="100%" aspect={1}>
                            <PieChart width={560} height={260} style={{ padding: "0px"}}>
                            <Pie
                                data={pendingSO}
                                dataKey="Amount"
                                nameKey="Monthname"
                                cx="50%"
                                cy="50%"
                                outerRadius={125}
                                
                                />
                                <Tooltip />


                            <Legend layout="horizontal" verticalAlign="bottom" align="center" />

                            </PieChart>
                        </ResponsiveContainer>
                       
                 </div>
                </div>
            </div>
            <hr />
            
        </div>
    );
}

export default Home;