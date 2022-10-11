import * as React from 'react';

export default function CustomInput({ name, label, ipType, ipTitle, dataArray, change, classCategory, ...props }: any) {
  
    return (
        <>
            <label htmlFor={name} style={{ fontSize: '0.8em' }} className="form-label labl labl2">{label}</label>
            <input type={ipType} name={name} className={classCategory} title={ipTitle} autoComplete="off" list={name} onBlur={change}/>
            {

                dataArray != null && dataArray.length > 0 ?

                    (
                        <datalist id={name }>
                            {
                                dataArray.map((obj: any) => {
                                    return <option value={obj.code}>{obj.name}</option>
                                })
                            }


                        </datalist>

                    )

                    : null


            }
           
        </>
        )
}
export function MasterInput({ name, label,dataArray,ipTitle,ipType, ...props}: any) {

    return (

        <span className="row row-content d-flex section2 col-sm-12 m-0">
           {/*<label htmlFor={name} style={{ fontSize: '0.8em' }} className="form-label labl labl2">{label}</label>*/}
           {/* <input type={ipType} name={name} className="form-control" title={ipTitle} autoComplete="off" list={name} onBlur={change} />*/}
  
            <label htmlFor={name} style={{ fontSize: '0.8em' }} className="form-label mr-2 col-4">{label}</label>
            <input type={ipType} name={name} className="form-control col-7" title={ipTitle} autoComplete="off" list={name} />

   
            {

                dataArray != null && dataArray.length > 0 ?

                    (
                        <datalist id={name}>
                            {
                                dataArray.map((obj: any) => {
                                    return <option value={obj.code}>{obj.name}</option>
                                })
                            }


                        </datalist>

                    )

                    : null


            }

            </span>
 
    )
}