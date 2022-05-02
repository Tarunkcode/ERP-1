import * as React from 'react';
import './purchase.styles.css';
/*import CustomDataList from '../data-list/data-list.component';*/
import CustomDataList from '../custom-data-list/custom-data-list.component';
import CustomButton from '../custom-button/custom-button.component';
import  FormInput  from '../form-input/form-input.component';
import { useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


import { BarChart, Bar, CartesianGrid, XAxis, YAxis, PieChart, Pie, LineChart, Line, ResponsiveContainer, Legend, Tooltip, AreaChart, Area, Cell, LabelList } from 'recharts';

export default function Purchase() {

    var [item, setItem]: any = React.useState([])
    var [itemGroup, setItemGroup]: any = React.useState([])
    var [brand, setbrand]: any = React.useState([])
    var [category, setCategory]: any = React.useState([])
    var [type, setType]: any = React.useState([])
    var [subCategory, setSubCategory]: any = React.useState([])
   
    var urlStart1 = "http://103.197.121.188:85/ESERP/api/values/GetMasterData?MasterType=6&Comp=comp0015&FY=2021";
    var itemGroupUrl = "http://103.197.121.188:85/ESERP/api/values/GetMasterData?MasterType=79&Comp=comp0015&FY=2021";
    var brandUrl = "http://103.197.121.188:85/ESERP/api/values/GetMasterData?MasterType=1002&Comp=comp0015&FY=2021";
    var categoryUrl = "http://103.197.121.188:85/ESERP/api/values/GetMasterData?MasterType=1010&Comp=comp0015&FY=2021";
    var typeUrl = "http://103.197.121.188:85/ESERP/api/values/GetMasterData?MasterType=1009&Comp=comp0015&FY=2021";
    var subCategoryUrl = "http://103.197.121.188:85/ESERP/api/values/GetMasterData?MasterType=1035&Comp=comp0015&FY=2021";
    var [startDate, setStartDate]: any = useState(new Date());

    var urlStart = "http://103.197.121.188:85/ESERP/api/values/GetMisReport?Comp=comp0015&Fy=2021&Acccode=0";
    const [colors, setColors] = useState(["blue", "red", "#8884d8", "indigo", "green", "yellow", "orange", "pink", "#82ca9d", "purple", "grey", "brown"]);
    var [dataArray, setDataArray]: any = useState([]);
    var [dataArray2, setDataArray2]: any = useState([]);
    var [saleArr, setSaleArr]: any = useState([]);

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



   // Fetch Brand

    const fetchBrand = async () => {
        try {
            const response3 = await fetch(brandUrl);
            const json3 = await response3.json();
            /*                console.log(json.Data);*/

      
            setbrand(json3.Data);

        } catch (error) {
            console.log("error", error);
        }
    };

        fetchBrand();

        // Fetch Category
        const fetchCategory = async () => {
            try {
                const response4 = await fetch(categoryUrl);
                const json4 = await response4.json();
                /*                console.log(json.Data);*/

         
                setCategory(json4.Data);

            } catch (error) {
                console.log("error", error);
            }
        };

        fetchCategory();


        // Fetch Type
        const fetchType = async () => {
            try {
                const response5 = await fetch(typeUrl);
                const json5 = await response5.json();
                /*                console.log(json.Data);*/

            
                setType(json5.Data);

            } catch (error) {
                console.log("error", error);
            }
        };

        fetchType();


        // Fetch Sub Category
        const fetchSubCategory = async () => {
            try {
                const response6 = await fetch(subCategoryUrl);
                const json6 = await response6.json();
                /*                console.log(json.Data);*/

             
                setSubCategory(json6.Data);

            } catch (error) {
                console.log("error", error);
            }
        };

        fetchSubCategory();


}, [])

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
          
    //console.log(dataArray)

   
    return (
        <div className="container" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "top" }}>

            
            {/*Custom Data List*/}
            <div className="row col-12" style={{ display: "flex", flexDirection: "row" }}>
                <CustomDataList
                    For="item"
                    Name="item"
                    Id="item"
                    Type="text"
                    label="Item"
                
                    dataArray={item}
                />
                <CustomDataList
                    For="item-group"
                    Name="item-group"
                    Id="item-group"
                    Type="text"
                    label="Item Group"
                 
                    dataArray={itemGroup}
                />
                <CustomDataList
                    For="brand"
                    Name="brand"
                    Id="brand"
                    Type="text"
                    label="Brand"
                    dataArray={brand}
                />
                <CustomDataList
                    For="category"
                    Name="category"
                    Id="category"
                    Type="text"
                    label="Category"
                    dataArray={category }

                />
                <CustomDataList
                    For="type"
                    Name="type"
                    Id="type"
                    Type="text"
                    label="Type"
                    dataArray={type }

                />
                <CustomDataList
                    For="sub-category"
                    Name="sub-category"
                    Id="sub-category"
                    Type="text"
                    label="Sub Category"
                    dataArray={subCategory}

                />
               
            </div>

          
            {/*date picker*/}
            <div className="row col-12" style={{ display: "flex", flexDirection: "row" }}>

                <div className="wrapper col-sm-2 form-group" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginRight:"0px" }}>
                    <div className="card-body crd" style={{ backgroundColor: "#cbcad9" }}>
                        <label style={{ fontSize: "12px", padding: "0" }} htmlFor="sec" className="form-label col-sm-12">From Date</label>



                        <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} />
                       
                    </div>

                </div>
                <div className="wrapper col-sm-2 form-group" style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginRight:"0px" }}>

                    <div className="card-body crd" style={{ backgroundColor: "#cbcad9" }}>
                        <label style={{ fontSize: "12px", padding: "0" }} htmlFor="sec2" className="form-label col-sm-12">To Date</label>


                        <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)}  />
                       
                    </div>
                </div>


                <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems:"center", width:"50%" , margin:"0"}}>
            <div style={{ display: "flex", justifyContent: "flex-start", flexDirection:"row", width:"90%" }}>
                    <button className="btn btn-primary load-button" type="submit">Load</button>
            </div>
            </div>
            </div>


            <hr style={{ border:'1.5px solid grey', width:"100%", opacity:"0.2 "}} />
            {/*-------------------------------------------------------Charts Rendering---------------------------------------------------------------------*/}

             {/*Cards Div*/}

            <div className="row col-12" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", margin: "10px 0", padding: "0"}}>

                {/*Cards*/}
                <div className="card contain-recharts" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "48%", border:"none" }}>
                    <div className="card-title" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", background: "#ffff", margin: "2px" }}>
                        <span style={{ fontSize: "1rem", fontWeight: "bold", marginLeft:"10x" }}>Monthly Purchase</span>
                        <span style={{ borderRadius: "10px", margin: "5px", padding: "0 5px", backgroundColor:"#f0f0f5" }}>
                            <button onClick={() => { console.log("I am Clicked") }} className="btnt" style={{ border: "none", padding: "0 2px", margin: "0 2px" }} ><i className="fas fa-chart-pie"></i></button>
                            <button onClick={() => { console.log("I am Clicked") }}  className="btnt" style={{ border: "none",  padding: "0 2px", margin: "0 3px" }} ><i className="fas fa-chart-line"></i></button>
                            <button onClick={() => { console.log("I am Clicked") }}  className="btnt" style={{ border: "none",  padding: "0 2px", margin: "0 3px" }} ><i className="fas fa-chart-bar"></i></button>
                            <button onClick={() => { console.log("I am Clicked") }}  className="btnt" style={{ border: "none",  padding: "0 2px", margin: "0 3px" }} ><i className="fa fa-table" aria-hidden="true"></i></button>

                        </span>
                    </div>

                  
                    <div className="card-body" style={{ padding: "13px", borderTop: "4px solid #cbcad9", borderRadius: "2px", backgroundColor: "#cbcad9", borderBottom: "2px solid white"   }}>
                        <PieChart width={490} height={400} style={{ paddingTop: "0px", marginBottom: "30px"}}>
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

                </div>

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

            </div>
            {/*Cards Div*/}
            <div className="row col-12" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", margin:"10px 0", padding:"0"}}>


                {/*Cards*/}
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
            </div>


        </div>
     
    )
 

}