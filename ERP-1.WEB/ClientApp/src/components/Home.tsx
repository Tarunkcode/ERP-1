
import * as React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, PieChart, Pie, LineChart, Line, ResponsiveContainer, Legend, Tooltip, AreaChart, Area, Cell, LabelList } from 'recharts';
import { useState } from 'react';


//interface Idata {
//    data: { d1: string, d2: string, d3:string }
//}
//interface IdataArray {
//    dataArray: any[] = [];
//}
//interface IdataArray {
//}

function Home() {
   
    const [colors, setColors] = useState(["blue", "red", "#8884d8", "indigo", "green", "yellow", "orange", "pink", "#82ca9d", "purple", "grey", "brown"]);
    var [dataArray, setDataArray]: any = useState([]);
    var [dataArray2, setDataArray2]: any = useState([]);
    var [saleArr, setSaleArr]: any = useState([]);
    var [pendingSO, setPendingSO]: any = useState([]);
    var [soSetails, setSODetails]: any = useState([]);
    var urlStart = "http://103.197.121.188:85/api/values/GetMisReport?Comp=comp0015&Fy=2021&Acccode=0";
    var urlSaleComparision = "http://103.197.121.188:85/api/values/spsalecompprvyear?acccode=0&comp=comp0015&fy=2021";
    var urlPendingMonthlySO = "http://103.197.121.188:85/api/values/GetPendingMonthlySO?acccode=0&comp=comp0015&fy=2021";
    var urlSODetails = "http://103.197.121.188:85/api/values/getmonthlysodetails?acccode=0&comp=comp0015&fy=2021";

    React.useEffect(() => {
        fetch(urlStart).then(res => res.json()).then(result => {
            console.log(result.Data[0])

            if (result.Status == '1') {
                var D1, D2, D3, obj, fill;

                for (let item = 0; item < result.Data.length; item++) {

                    D1 = result.Data[item].D1;
                    D2 = result.Data[item].D2;
                    D3 = result.Data[item].D3;

                    D2 = parseFloat(D2);
                    D3 = parseFloat(D3);

                    D2 = D2 / 100000;
                    D3 = D3 / 100000;
                    fill = colors[item];
                    var Sale_Amount = D2;
                    var Purchase_Amt = D3;

                    obj = { D1, Sale_Amount, Purchase_Amt, fill };
                   var obj2 = { D1, Sale_Amount, Purchase_Amt };
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
                alert(console.log("Calling APi failed"));
            }
        })
    }, [])

    React.useEffect(() => {
        fetch(urlSaleComparision).then(res => res.json()).then(result => {
            console.log(result.Data[0])
            if (result.Status == '1') {

                var Monthname, PSaleAmt, SaleAmt, obj;
             
                for (let item = 0; item < result.Data.length; item++) {
                    Monthname = result.Data[item].Monthname;
                    PSaleAmt = result.Data[item].PSaleAmt;
                    SaleAmt = result.Data[item].SaleAmt;


                    PSaleAmt = parseFloat(PSaleAmt);
                    SaleAmt = parseFloat(SaleAmt);

                    PSaleAmt = PSaleAmt / 100000;
                    SaleAmt = SaleAmt / 100000;
                    var Prev_Year_Sale_Amount = PSaleAmt;
                    var This_Year_Sale_Amount = SaleAmt;
                    obj = { Monthname, Prev_Year_Sale_Amount, This_Year_Sale_Amount };
                    //[dataArray].
                    saleArr = [...saleArr]; // copying the old datas array
                    saleArr[item] = obj; // replace e.target.value with whatever you want to change it to

                    setSaleArr(saleArr);
                }
                console.log(saleArr);
            } else {
                alert(console.log("Calling APi failed"));
            }
        })
    }, [])

    React.useEffect(() => {
        fetch(urlPendingMonthlySO).then(res => res.json()).then(result => {
            console.log(result.Data[0])
            if (result.Status == '1') {

                var Monthname, Amt,  obj;

                for (let item = 0; item < result.Data.length; item++) {
                    Monthname = result.Data[item].MonthName;
                    Amt = result.Data[item].Amt;
                    Amt = parseFloat(Amt);

                    
                   Amt =Amt / 100000;
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
                alert(console.log("Calling APi failed"));
            }
        })
    }, [])

    React.useEffect(() => {
        fetch(urlSODetails).then(res => res.json()).then(result => {
            console.log(result.Data[0])
            if (result.Status == '1') {

                var Monthname, Amt, obj;

                for (let item = 0; item < result.Data.length; item++) {
                    Monthname = result.Data[item].MonthName;
                    Amt = result.Data[item].SoAmt;
                    Amt = parseFloat(Amt);


                     Amt =Amt / 100000;
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
                alert(console.log("Calling APi failed"));
            }
        })
    }, [])

    return (
        <>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <div style={{ height: "60vh" }} className="row ">
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                       
                        <span style={{ fontSize: "20px", borderBottom: "2px solid red", marginBottom: "20px" }}>Monthly Sale</span>
                    
                    <BarChart width={560} height={300} data={dataArray2} style={{marginTop:"20px"}}>
                            <Bar dataKey="Sale_Amount" fill="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="D1" />
                            <YAxis />
                            <LabelList dataKey="Sale_Amount" position="top" />
                            <Tooltip cursor={ false} contentStyle={{ backgroundColor: "grey" }} />
                            <Legend />
                                </BarChart>

                        
                        
                    </div>
                </div>


                <div style={{ width: "60vw", minHeight: "100vh" }} className="row">
                    <div style={{width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                       
                        <span style={{ fontSize: "20px", borderBottom: "2px solid red" }}>Monthly Purchase</span>

                        <PieChart width={730} height={500} style={{paddingTop:"0px", marginBottom:"30px"}}>
                         <Pie
                        data={dataArray}
                        dataKey="Purchase_Amt"
                        nameKey="D1"   
                        cx="50%"
                        cy="50%"
                        outerRadius={125}
                                label
                        
                            />
                            <Tooltip />

                        <Legend layout="horizontal" verticalAlign="bottom" align="center" />
                            
                       </PieChart>
                       
                    </div>
            </div>
                </div>
            <hr/>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <span style={{ fontSize: "20px", borderBottom: "2px solid red" }}>Sale v/s Purchase Chart</span>
                <ResponsiveContainer aspect={3.0 / 1.0}>
            <BarChart data={dataArray2} >
                    <Bar dataKey="Sale_Amount" fill="#8884d8" />
                    <Bar dataKey="Purchase_Amt" fill="#82ca9d" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="D1" />
                    <YAxis />
                    <Tooltip cursor={false} contentStyle={{ backgroundColor: "grey" }} />
                    <Legend layout="vertical" verticalAlign="top" align="center" />
                </BarChart>
              </ResponsiveContainer>
            </div>
<hr/>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <span style={{ fontSize: "20px", borderBottom: "2px solid red" }}>Prev Year Sale v/s This Year Sale</span>
                <ResponsiveContainer aspect={3.0 / 1.0}>
            <BarChart data={saleArr}>
                    <Bar dataKey="Prev_Year_Sale_Amount" fill="#8884d8"/>
                    <Bar dataKey="This_Year_Sale_Amount" fill="#82ca9d" />
                <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="Monthname" />
                    <YAxis />
                    <Tooltip cursor={false} contentStyle={{ backgroundColor: "grey" }} />
                    <Legend layout="vertical" verticalAlign="top" align="center"/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <hr/>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <div style={{ width: "40vw", minHeight: "100vh" }} className="row">
                    <div style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

                        <span style={{ fontSize: "20px", borderBottom: "2px solid red" }}>Monthly Sale Order</span>
                        <PieChart width={650} height={450} style={{ paddingTop: "0px", marginBottom: "30px" }}>
                            <Pie
                                data={soSetails}
                                dataKey="Amount"
                                nameKey="Monthname"
                                cx="50%"
                                cy="50%"
                                outerRadius={125}
                                label

                            />
                            <Tooltip />

                            <Legend layout="horizontal" verticalAlign="bottom" align="center" />

                        </PieChart>

                    </div>
                </div>
                <div style={{ width: "40vw", minHeight: "100vh" }} className="row">
                    <div style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

                        <span style={{ fontSize: "20px", borderBottom: "2px solid red" }}>Monthly Pending Sale Order</span>
                        <PieChart width={650} height={450} style={{ paddingTop: "0px", marginBottom: "30px" }}>
                            <Pie
                                data={pendingSO}
                                dataKey="Amount"
                                nameKey="Monthname"
                                cx="50%"
                                cy="50%"
                                outerRadius={125}
                                label

                            />
                            <Tooltip />

                            <Legend layout="horizontal" verticalAlign="bottom" align="center" />

                        </PieChart>

                    </div>
                </div>
            </div>
            <hr />
            
        </>
    );
}
export default Home;
  