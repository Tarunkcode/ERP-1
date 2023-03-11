import * as React from 'react';

export default function CustomeSwitch({ label, id, lablClass, handleChange, name, classCat,...otherProps }: any) {
    //var defaultInputState : any = React.useRef(false);
    //if (otherProps.default == 1) {
    //    defaultInputState.current = true ;
    //} else {
    //    defaultInputState.current = false ;
     
    //}
    /*  console.log('default', otherProps.default);*/
  
    return (
        <div className="custom-control custom-switch m-0 p-0  col-md-12" >
           
            {
                otherProps.default  == '1' ? (<input type="checkbox" defaultChecked={true} onBlur={handleChange} className={classCat} name={name} id={id} style={{ cursor: 'pointer' }} />) :
                    (<input type="checkbox" onBlur={handleChange} className={classCat} name={name} id={id} style={{ cursor: 'pointer' }} />)
            }
           
            <label className={lablClass} htmlFor={id} style={{ cursor: 'pointer' }}>{label}</label>
 
        </div>
        )
}
export function CustomeSwitch2({ label, id, lablClass, handleChange, name, classCat, ...otherProps }: any) {

    return (
        <div className="custom-control custom-switch m-0 p-0  col-md-12" >
            {
                otherProps.default == '1' ? (<input type="checkbox" defaultChecked={ true} onBlur={handleChange} className={classCat} name={name} id={id} style={{ cursor: 'pointer' }} />) : (<input type="checkbox" onBlur={handleChange} className={classCat} name={name} id={id} style={{ cursor: 'pointer' }} />)
            }
            {/*<input type="checkbox" onBlur={handleChange} className={classCat} name={name} id={id} style={{ cursor: 'pointer' }} />*/}
            <label className={lablClass} htmlFor={id} style={{ cursor: 'pointer' }}>{label}</label>
 
        </div>
        )
}