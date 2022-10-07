import * as React from 'react';

export default function CustomInput({ name,label, ipType,ipTitle,dataArray,change,...props }: any) {
    return (
        <>
            <label htmlFor={name} style={{ fontSize: '0.8em' }} className="form-label labl labl2">{label}</label>
            <input type={ipType} name={name} className="form-control inp" title={ipTitle} autoComplete="off" list={name} onBlur={change} />
            {

                dataArray != null && dataArray.length > 0 ?

                    (
                        <datalist id={name }>
                            {
                                dataArray.map((obj: any) => {
                                    return <option data-value={obj.code}>{obj.name}</option>
                                })
                            }


                        </datalist>

                    )

                    : null


            }
           
        </>
        )
}