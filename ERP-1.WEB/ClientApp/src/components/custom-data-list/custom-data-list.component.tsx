import { data } from 'jquery';
import * as React from 'react';
import './custom-data-list.styles.css';

export default function CustomDataList({ For, Name, Id, Type, label,savedItem, ...props }: any) {
   

   
  
    return (

        <div className="wrapper col-sm-2 form-group" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            
            <div className="card-body crd" style={{ backgroundColor: "#cbcad9" }}>
                <label style={{ fontSize: "12px", padding: "0" }} htmlFor={For} className="form-label col-sm-12">{label}</label>

                <input id={Name} name={Name} type={Type} className="form-control form-select col-sm-12 section" list={Id}  />

                {

                    props.dataArray != null && props.dataArray.length > 0 ?

                        (
                            <datalist className={Name} id={Id}>
                                {
                                    props.dataArray.map((obj: any) => {
                                        return <option data-value={obj.StateCode }>{obj.StateName}</option>
                                    })
                                }

              
                            </datalist>

                        )

                       : console.log('fine')

                
                }
            </div>

        </div>
    )
}