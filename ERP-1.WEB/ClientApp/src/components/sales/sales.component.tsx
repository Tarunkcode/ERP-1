import React from "react";
import DatamapsIndia from "react-datamaps-india";
import { useState } from 'react';

const MapChart = () => {


    const urlStateSales = "http://103.197.121.188:85/api/values/GetReportData?&RType=0&MCode=0&partycode=0&rcode=1&Comp=comp0015&FY=2021"
    var [andhraVal, setAndhraVal]: any = useState(0);
    var [upVal, setUpVal]: any = useState(0);
    var [delVal, setDelVal]: any = useState(0);
    var [goaVal, setGoaVal]: any = useState(0);
    var [arunaVal, setArunaVal]: any = useState(0);
    var [assamVal, setAssamVal]: any = useState(0);
    var [bihVal, setBihVal]: any = useState(0);
    var [chattVal, setChattVal]: any = useState(0);
    var [gujaVal, setGujaVal]: any = useState(0);
    var [haryaVal, setHaryaVal]: any = useState(0);
    var [himachalVal, setHimachalVal]: any = useState(0);
    var [jharVal, setJharVal]: any = useState(0);
    var [karnatVal, setKarnatVal]: any = useState(0);
    var [kerelaVal, setKerelaVal]: any = useState(0);
    var [madhyaVal, setMadhyaVal]: any = useState(0);
    var [maharashVal, setMaharashVal]: any = useState(0);
    var [meghaVal, setMeghaVal]: any = useState(0);
    var [mizoVal, setMizoVal]: any = useState(0);
    var [odisaVal, setOdisaVal]: any = useState(0);
    var [puduVal, setPuduVal]: any = useState(0);
    var [punjVal, setPunjVal]: any = useState(0);
    var [rajaVal, setRajaVal]: any = useState(0);
    var [tamilVal, setTamilVal]: any = useState(0);
    var [telengaVal, setTelengaVal]: any = useState(0);
    var [UttraVal, setUttraVal]: any = useState(0);
    var [WestBenglaVal, setWestBenglaVal]: any = useState(0);
    var [jammuVal, setJammuVal]: any = useState(0);
    var [dadraVal, setDadraVal]: any = useState(0);
    var [tripuraVal, setTripuraVal]: any = useState(0);
    var [sikkimVal, setSikkimVal]: any = useState(0);
    var [nagalandVal, setNagalandVal]: any = useState(0);
    var [manipurVal, setManipurVal]: any = useState(0);
    var [lakhshadeepVal, setLakhshadeepVal]: any = useState(0);
    var [andmanVal, setAndManVal]: any = useState(0);

    const [isSending, setIsSending] = useState(false)
    const isMounted = React.useRef(true)
    /*  var andhraVal = 0, delVal = 0, goaVal = 0, arunaVal = 0, assamVal = 0, bihVal = 0, chattVal = 0, gujaVal=0, haryaVal=0, himachalVal=0, jharVal=0, karnatVal=0, kerelaVal = 0, madhyaVal=0, maharashVal=0, meghaVal=0, mizoVal=0, odisaVal=0, puduVal=0, punjVal=0, rajaVal=0, tamilVal=0, telengaVal=0, UttraVal=0, WestBenglaVal=0, jammuVal = 0;*/

    // 26

    /* const andhra = "Andhra Pradesh", del = "Delhi", goa = "Goa", aruna = "Arunanchal Pradesh", assam = "Assam", bih = "Bihar", chatt = "Chhattisgarh", guja = "Gujarat", harya = "Haryana", himachal = "Himachal Pradesh", jhar = 'Jharkhand', karnat = "Karnataka", kerela = "Kerala", madhya = 'Madhya Pradesh', maharash = 'Maharastra', megha = "Meghalaya", mizo = "Mizoram", odisa = "Odisha", pudu = "Puducherry", punj = "Punjab", raja = "Rajasthan", tamil = 'Tamil Nadu', telenga = "Telangana", Uttra = "Uttarakhand", WestBengla = "West Bengal", jammu = "Jammu & Kashmir";*/

    React.useEffect(() => {
        return () => {
            isMounted.current = false
        }
    }, [])

    async function FetchStatesVal () {
        
        try {
            await fetch(urlStateSales).then(res => res.json()).then(result => {
                console.log(result.Data)

                if (result.Status == '1') {
                    var D5, D2;

                    for (let item = 0; item < result.Data.length; item++) {

                        D5 = result.Data[item].D5;
                        D2 = result.Data[item].D2;
                        D5 = parseFloat(D5)

                        if (D2 == "Andhra Pradesh") {
                            setAndhraVal(D5)
                        }

                        else if (D2 == "Delhi") {
                            setDelVal(D5)
                        }

                        else if (D2 == "Uttar Pradesh") {
                            setUpVal(D5)
                        }

                        else if (D2 == "Goa") {
                            setGoaVal(D5)
                        }

                        else if (D2 == "ARUNACHAL PRADESH") {
                            setArunaVal(D5)
                        }

                        else if (D2 == "Assam") {
                            setAssamVal(D5)
                        }

                        else if (D2 == "Bihar") {
                            setBihVal(D5)
                        }

                        else if (D2 == "Chhattisgarh") {
                            setChattVal(D5)
                        }

                        else if (D2 == "Gujarat") {
                            setGujaVal(D5)
                        }

                        else if (D2 == "HARYANA") {
                            setHaryaVal(D5)
                        }

                        else if (D2 == "Himachal Pradesh") {
                            setHimachalVal(D5)
                        }

                        else if (D2 == "Jharkhand") {
                            setJharVal(D5)
                        }

                        else if (D2 == "Karnataka") {
                            setKarnatVal(D5)
                        }

                        else if (D2 == "Kerala") {
                            setKerelaVal(D5)
                        }

                        else if (D2 == "Madhya Pradesh") {
                            setMadhyaVal(D5)
                        }

                        else if (D2 == "MAHARASHTRA") {
                            setMaharashVal(D5)
                        }

                        else if (D2 == "Meghlaya") {
                            setMeghaVal(D5);
                        }

                        else if (D2 == "Mizoram") {
                            setMizoVal(D5)
                        }

                        else if (D2 == "Odisha") {
                            setOdisaVal(D5)
                        }

                        else if (D2 == "Puducherry") {
                            setPuduVal(D5)
                        }

                        else if (D2 == "PUNJAB") {
                            setPunjVal(D5)
                        }

                        else if (D2 == "Rajasthan") {
                            setRajaVal(D5)
                        }

                        else if (D2 == "Tamilnadu") {
                            setTamilVal(D5)
                        }

                        else if (D2 == "Telangana") {
                            setTelengaVal(D5)
                        }

                        else if (D2 == "Uttrakhand") {
                            setUttraVal(D5)
                        }

                        else if (D2 == "WEST BENGAL") {
                            setWestBenglaVal(D5)
                        }

                        else if (D2 == "Jammu And Kashmir") {
                            setJammuVal(D5)
                        }
                        else if (D2 == "Dadara & Nagar Haveli") {
                            setDadraVal(D5)
                        }
                        else if (D2 == "Tripura") {
                            setTripuraVal(D5)
                        }
                        else if (D2 == "Sikkim") {
                            setSikkimVal(D5)
                        }
                        else if (D2 == "Nagaland") {
                            setNagalandVal(D5)
                        }
                        else if (D2 == "Manipur") {
                            setNagalandVal(D5)
                        }
                        else if (D2 == "Lakshadweep") {
                            setLakhshadeepVal(D5)
                        }
                        else if (D2 = "Andaman & Nicobar Island") {
                            setAndManVal(D5)
                        }
                        else{
                            continue;
                        }

                    }
                }
                else if (result.Status == '-1') {
                    alert('data not found in Sales Array, fetch Status = -1')
                }
                else if (result.Status == '0') {
                    alert('SalesArr fetch request failed, fetch STatus = 0')
                }
            })

        } catch (err) {
            console.log(err);
        }

        
    }
    React.useEffect(() => {
    FetchStatesVal()

    },[isSending])

    return (

        <div className={"IndianStatesMap"}>
          
            <DatamapsIndia

                regionData={{

                    "Andhra Pradesh": {
                        value: andhraVal,
                    },
                    "Arunanchal Pradesh": {
                        value: arunaVal
                    },
                    Assam: {
                        value: assamVal
                    },
                    Bihar: {
                        value: bihVal
                    },
                    Chhattisgarh: {
                        value: chattVal
                    },
                    Delhi: {
                        value: delVal
                    },
                    Goa: {
                        value: goaVal
                    },
                    Gujarat: {
                        value: gujaVal,
                    },
                    Haryana: {
                        value: haryaVal,
                    },
                    "Himachal Pradesh": {
                        value: himachalVal,
                    },
                    Jharkhand: {
                        value: jharVal,
                    },

                    Karnataka: {
                        value: karnatVal,
                    },
                    Kerala: {
                        value: kerelaVal,
                    },
                    "Madhya Pradesh": {
                        value: madhyaVal,
                    },
                    Maharashtra: {
                        value: maharashVal,
                    },
                    Meghalaya: {
                        value: meghaVal,

                    },
                    "Uttar Pradesh": {
                        value: upVal,
                    },
                    Mizoram: {
                        value: mizoVal,
                    },
                    Odisha: {
                        value: odisaVal,
                    },
                    Puducherry: {
                        value: puduVal,
                    },
                    Punjab: {
                        value: punjVal,
                    },
                    Rajasthan: {
                        value: rajaVal,
                    },
                    "Tamil Nadu": {
                        value: tamilVal,
                    },
                    Telangana: {
                        value: telengaVal,
                    },
                    Uttarakhand: {
                        value: UttraVal,
                    },
                    "West Bengal": {
                        value: WestBenglaVal,
                    },
                    "Jammu & Kashmir": {
                        value: jammuVal
                    },
                    "Dadra & Nagar Haveli" : {
                        value : dadraVal,
                    },
                    Tripura: {
                        value: tripuraVal,
                    },
                    Sikkim: {
                        value: sikkimVal,

                    },
                    Nagaland: {
                        value: nagalandVal,

                    },
                    Manipur: {
                        value: manipurVal
                    },
                    Lakshadweep: {
                        value: lakhshadeepVal
                    },
                    "Andaman & Nicobar Island": {
                        value: andmanVal
                    }

                }}
                hoverComponent={({ value }: any) => {
                    return (
                        <div>
                            <p>{value.name}</p>
                            <p>{value.value}</p>
                        </div>
                    );
                }}
                mapLayout={{
                    title: "StateWise Sales",
                    legendTitle: "Statewise Sales",
                    startColor: "#FFDAB9",
                    endColor: "#FF6347",
                    hoverTitle: "Count",
                    noDataColor: "#f5f5f5",
                    borderColor: "#8D8D8D",
                    hoverBorderColor: "#8D8D8D",
                    hoverColor: "green"

                }}
                />
        </div>
   
    );

}



export default MapChart;
