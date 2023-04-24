﻿import * as React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../AppContext/ThemeContext';
import { Validator_Engine } from '../Validation-Scripts/validations.scripts';

export default function CustomInput({ name, label, ipType, ipTitle, dataArray, change, classCategory, ...props }: any) {
    var ref = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {

        if (ref.current != null && dataArray.length != 0)
            ref.current.addEventListener('input', function (e: Event) {
                var input = (e.target as HTMLInputElement),
                    list = input.getAttribute('list'),
                    options = document.querySelectorAll('#' + list + ' option'),
                    hiddenInput = (document.getElementById(input.getAttribute('id') + '-hidden')) as HTMLInputElement,
                    inputValue = input.value;
                hiddenInput.value = inputValue;

                for (var i = 0; i < options.length; i++) {
                    var option = options[i] as HTMLElement;

                    if (option.innerText === inputValue) {
                        hiddenInput.value = option.getAttribute('data-value')!;
                        window.sessionStorage.setItem('datalist', hiddenInput.value);

                        break;
                    }
                }
            })
        else window.sessionStorage.setItem('datalist', '');
    }, [ref, dataArray.length != 0])
    return (
        <>
            <label htmlFor={name} style={{ fontSize: '1rem' }} className="form-label labl labl2 mr-2 ml-2">{label}</label>
            <input type="hidden" name={name} className={classCategory} title={ipTitle} id="visible-hidden" />
            <input ref={ref} list={name} type={ipType} name={name} className={classCategory} defaultValue={props.default} title={ipTitle} autoComplete="off" id="visible" onBlur={change} />
            {

                dataArray != null && dataArray.length > 0 ?

                    (
                        <datalist id={name}>
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
export function MasterInput({ name, defaultt, label, ipTitle, ipType, handleChange, classCategory, ...props }: any) {

    return (

        /*<span className="row row-content d-flex section2 col-sm-12 m-0">*/

        <>
            <label htmlFor={name} style={{ fontSize: '1rem' }} className="form-label labl labl2 mt-2">{label}</label>
            {
                props.read === true ? (<input type={ipType} defaultValue={defaultt} name={name} className={classCategory} onBlur={handleChange} title={ipTitle} autoComplete="off" list={name} style={{ marginBottom: '20px' }} required readOnly />) : (<input type={ipType} defaultValue={defaultt} name={name} className={classCategory} onBlur={handleChange} title={ipTitle} autoComplete="off" list={name} required style={{ marginBottom: '20px' }} />)
            }

        </>
        /*  </span>*/

    )
}
export function MasterInput2({ name, defaultt, label, ipTitle, key4validate, ipType, handleChange, classCategory, length, getErrorList, isMandate, ...props }: any) {
    let [error, setError]: any = React.useState({});
    const ValidateField = (e: any) => {
        if (!key4validate) { }
        else {
            let val = e.target.value;
            if (val.length > 0) {
                let msg = Validator_Engine(val, key4validate);
                setError({ ...error, [name]: msg })
                getErrorList({ ...error, [name]: msg })


            } else { }
        }

    }

    return (

        /*<span className="row row-content d-flex section2 col-sm-12 m-0">*/

        <>
            <label htmlFor={name} style={{ fontSize: '1rem' }} className="form-label labl  mt-2 ml-2 mr-2 labl2">{isMandate && isMandate === true ? (<text>{label} <i style={{ color: 'red', fontSize: '20px' }}>*</i></text>) : label}</label>
            <span className="col-4 p-0 m-0">
                <input key={name} type={ipType} defaultValue={defaultt} style={{ borderColor: "#86a4c3", padding: '22px 0 22px 10px', marginBottom: '20px' }} name={name} id={name} onChange={ValidateField} className={classCategory} onBlur={handleChange} title={ipTitle} autoComplete="off" list={name} required maxLength={length ? length : 80} min={ipType === 'number' ? "0" : ""} />
                <div className="text-danger m-0 p-2" style={{ position: 'absolute', top: '53%', left: '0%', backgroundColor: 'transparent', opacity: 1.5, zIndex: .2, border: 'none', fontSize: '0.9rem' }}>{error[name]}</div>
            </span>

        </>
        /*  </span>*/

    )
}


export const PassWordField = ({ name, defaultt, label, ipTitle, key4validate, handleChange, classCategory, length, getErrorList, ...props }: any) => {


    const passwordInput = document.querySelector("#password") as HTMLInputElement
    const eye = document.querySelector("#eye") as HTMLElement;

    const showHidePass = () => {
        passwordInput.focus();
        eye.classList.toggle("fa-eye-slash")
        let type = passwordInput.getAttribute("type") === "password" ? "text" : "password"
        passwordInput.setAttribute("type", type)
    }
    return (
        <>
            <label htmlFor={name} style={{ fontSize: '1rem' }} className="form-label labl  mt-2 ml-2 mr-2 labl2">{label}</label>
            <div className="password-container ml-0">
                <input type="password" key={name} defaultValue={defaultt} style={{ borderColor: "#86a4c3", padding: '22px 0 22px 10px', marginBottom: '20px' }} name={name} id="password" className={classCategory} onBlur={handleChange} title={ipTitle} autoComplete="off" list={name} required maxLength={length ? length : 80} />
                <i className="fa-solid fa-eye" id="eye" onClick={showHidePass}></i>
            </div>
        </>
    )
}


export function MasterInput3({ name, defaultt, label, ipTitle, ipType, handleChange, classCategory, length, isMandate, ...props }: any) {

    return (

        /*<span className="row row-content d-flex section2 col-sm-12 m-0">*/

        <>
            <label htmlFor={name} style={{ fontSize: '1rem' }} className="form-label labl col-2 ml-2  mt-2 mr-2 labl2">{isMandate && isMandate === true ? (<text>{label} <i style={{ color: 'red', fontSize: '20px' }}>*</i></text>) : label}</label>
            <input type={ipType} defaultValue={defaultt} style={{ borderColor: "#86a4c3", marginBottom: '20px' }} name={name} className={classCategory} onBlur={handleChange} title={ipTitle} autoComplete="off" list={name} required maxLength={length ? length : 80} />
        </>
        /*  </span>*/

    )
}
export function CustomSelect({ label, name, handleChange, classCategory, def, ...otherProps }: any) {

    return (
        <>

            <label htmlFor={name} style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 labl2">{label}</label>

            <select name={name} className={classCategory} onChange={handleChange} style={{
                borderColor: "#86a4c3", width: "24%",
                padding: '0 3px',
                margin: '5px 0',
                fontSize: '18px',
                height: '45px',
                marginBottom: '20px'
            }}>


                <option value={1}>Y</option>
                <option selected value={0}>N</option>


            </select>
        </>
    )
}


export function InputList({ name, label, ipType, ipTitle, dataArray, change, lablCat, row, classCategory, placeholder, s, id, type, width, ...props }: any) {
    var [hide, setHide]: any = React.useState(true);
    var [listCurrentVal, setListCurrentVal]: any = React.useState('');
    var [defValue, setDefValue]: any = React.useState('');
    var [filteredData, setFilteredData]: any = React.useState(dataArray);
    var input = document.getElementById(id) as HTMLInputElement;
    var [defVal, setDefVal]: any = React.useState("");
    var { theme } = useContext(ThemeContext);
    var [isDataListLoad, setIsDataListLoad]: any = React.useState(false);

    React.useEffect(() => {

        if (props.default === -1 || props.default === undefined || dataArray.length === 0) { }
        else if (props.default >= dataArray.length) {
            alert('Array size exceed Error in Input List')
        } else if (props.default.length === 0) {

        }
        else {
            setDefVal(dataArray[props.default].name);
        }

    }, [props.default, dataArray])
    React.useEffect(() => {
        if (!dataArray || dataArray == undefined || dataArray === null || dataArray.length === 0) setIsDataListLoad(true)
        else setIsDataListLoad(false);
    }, [dataArray])

    const SetInputData = (e: any) => {
        var n = e.target.id;
        var code = e.target.value;

        setListCurrentVal(code);
        /*console.log('row input', row)*/
        input.value = n;
        //if (row === undefined || !row) change(code, name, row)
        //else change(code , name , row )
        change(code, name, row)

        //console.log([n] + ":" +code)
        setHide(true);
    }

    const filterList = () => {
        var element = document.getElementById(id) as HTMLInputElement;
        let text = element.value;
        if (!text) {
            setFilteredData(dataArray);
        } else {
            const newList = dataArray.filter((obj: any) => {
                let name: string = obj.name || ""
                name = name.toUpperCase();
                text = text.toUpperCase();
                return name.indexOf(text) > -1;
            })
            setFilteredData(newList);
        }
    }

    return (
        <span className="row row-content d-flex section2 col-sm-12 m-0">


            <label htmlFor={name} style={{ fontSize: '1rem' }} className={lablCat}>{label}</label>
            <div className="m-1 p-0 text-center" style={{ width: 'auto', minWidth: s }}>
                <span className="col-12 m-0 p-0 d-flex">

                    <input type={ipType} name={name} id={id} className="form-control" defaultValue={defVal} title={ipTitle} autoComplete="off" onFocus={() => { setHide(false); filterList(); }} onChange={filterList} placeholder={placeholder} style={{ position: 'relative', width: width, margin: '0 auto', padding: '18px 5px' }} />
                    {
                        type == 1 ? null : <img src={'./assets/load-datalist.gif'} style={isDataListLoad === true ? { width: "24px", borderRadius: "6%", margin: "0 10px 0", position: 'absolute', right: '0' } : { visibility: 'hidden', width: "24px", borderRadius: "6%", margin: "0 10px 0", position: 'absolute', right: '0' }} className="img-fluid erp-logo" alt="loading..." />
                    }


                </span>
                {
                    hide === false ? (
                        <ul id="dropdown" className={theme === 'dark' ? 'dropdown bg-dark' : 'dropdown bg-light'} style={hide === true ? { listStyle: 'none', marginTop: '2px', zIndex: 1000, position: 'absolute', width: 'auto', minWidth: s, maxHeight: '30vh', overflowY: 'auto', borderRadius: '2px', border: '1px solid grey', visibility: 'hidden' } : { listStyle: 'none', marginTop: '2px', zIndex: 1000, position: 'absolute', width: 'auto', minWidth: s, maxWidth: s, maxHeight: '60vh', overflowY: 'auto', color: 'black', borderRadius: '2px', border: '1px solid grey' }}>
                            {

                                filteredData != null && filteredData.length > 0 ?
                                    filteredData.map((obj: any) => {
                                        return (<> <li className={theme === 'dark' ? 'text-left ml-1 text-light liItem m-0 p-1' : 'text-left ml-1 text-dark liItem m-0 p-1'} onClick={SetInputData} id={obj.name} value={obj.code} >{obj.name}</li> </>)
                                    }) : null
                            }
                        </ul>
                    ) : null
                }


            </div>


        </span>
    )
}


//------------------------------------ table input ------------------------------------------
export function TableInputList({ name, label, ipType, ipTitle, dataArray, change, lablCat, row, classCategory, placeholder, s, id, type, width, onEnterModalList, ...props }: any) {
    var [hide, setHide]: any = React.useState(true);
    var [listCurrentVal, setListCurrentVal]: any = React.useState('');
    var [defValue, setDefValue]: any = React.useState('');
    var [filteredData, setFilteredData]: any = React.useState(dataArray);
    var input = document.getElementById(id) as HTMLInputElement;
    var [defVal, setDefVal]: any = React.useState("");
    var { theme } = useContext(ThemeContext);
    var [isDataListLoad, setIsDataListLoad]: any = React.useState(false);

    React.useEffect(() => {

        if (props.default === -1 || props.default === undefined || dataArray.length === 0) { }
        else if (props.default >= dataArray.length) {
            alert('Array size exceed Error in Input List')
        } else if (props.default.length === 0) {

        }
        else {
            setDefVal(dataArray[props.default].name);
        }

    }, [props.default, dataArray])
    React.useEffect(() => {
        if (!dataArray || dataArray == undefined || dataArray === null || dataArray.length === 0) setIsDataListLoad(true)
        else setIsDataListLoad(false);
    }, [dataArray])

    const SetInputData = (e: any) => {
        var n = e.target.id;
        var code = e.target.value;

        setListCurrentVal(code);
        /*console.log('row input', row)*/
        input.value = n;
        //if (row === undefined || !row) change(code, name, row)
        //else change(code , name , row )
        change(code, name, row)

        //console.log([n] + ":" +code)
        setHide(true);
    }

    const filterList = () => {
        var element = document.getElementById(id) as HTMLInputElement;
        let text = element.value;
        if (!text) {
            setFilteredData(dataArray);
        } else {
            const newList = dataArray.filter((obj: any) => {
                let name: string = obj.name || ""
                name = name.toUpperCase();
                text = text.toUpperCase();
                return name.indexOf(text) > -1;
            })
            setFilteredData(newList);
        }
    }

    return (

        <div className="m-0 p-2 text-center" style={{ width: 'auto', minWidth: s }}>

            <input type={ipType} name={name} id={id} className="form-control" defaultValue={defVal} title={ipTitle} autoComplete="off" onKeyUp={onEnterModalList} onFocus={() => { setHide(false); filterList(); }} onChange={filterList} placeholder={placeholder} style={{ position: 'relative', width: width, margin: '0 auto', padding: '18px 5px' }} />
            {
                type == 1 ? null : <img src={'./assets/load-datalist.gif'} style={isDataListLoad === true ? { width: "24px", borderRadius: "6%", margin: "0 10px 0", position: 'absolute', right: '0' } : { visibility: 'hidden', width: "24px", borderRadius: "6%", margin: "0 10px 0", position: 'absolute', right: '0' }} className="img-fluid erp-logo" alt="loading..." />
            }


            {
                hide === false && type != 1 ? (
                    <ul id="dropdown" className={theme === 'dark' ? 'dropdown bg-dark' : 'dropdown bg-light'} style={hide === true ? { listStyle: 'none', marginTop: '2px', zIndex: 1000, position: 'absolute', width: 'auto', minWidth: s, maxHeight: 'auto', overflowY: 'auto', borderRadius: '2px', border: '1px solid grey', visibility: 'hidden' } : { listStyle: 'none', marginTop: '2px', zIndex: 1000, position: 'absolute', width: 'auto', minWidth: s, maxWidth: s, maxHeight: 'auto', overflowY: 'auto', color: 'black', borderRadius: '2px', border: '1px solid grey' }}>
                        {

                            filteredData != null && filteredData.length > 0 ?
                                filteredData.map((obj: any) => {
                                    return (<> <li className={theme === 'dark' ? 'text-left ml-1 text-light liItem m-0 p-1' : 'text-left ml-1 text-dark liItem m-0 p-1'} onClick={SetInputData} id={obj.name} value={obj.code} >{obj.name}</li> </>)
                                }) : null
                        }
                    </ul>
                ) : null
            }


        </div>


    )
}

