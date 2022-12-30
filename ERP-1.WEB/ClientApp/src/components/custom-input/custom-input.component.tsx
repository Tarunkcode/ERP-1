import * as React from 'react';
import $ from 'jquery';
import { listenerCount } from 'cluster';

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
            <label htmlFor={name} style={{ fontSize: '0.8em' }} className="form-label labl labl2">{label}</label>
                  <input type="hidden" name={name} className={classCategory} title={ipTitle} id="visible-hidden" />
                  <input ref={ref} list={name} type={ipType} name={name} className={classCategory} defaultValue={props.default} title={ipTitle} autoComplete="off" id="visible" onBlur={change} />
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
export function MasterInput({ name, label, ipTitle, ipType, handleChange, classCategory,...props}: any) {

    return (

        <span className="row row-content d-flex section2 col-sm-12 m-0">
           
  
            <label htmlFor={name} style={{ fontSize: '0.8em' }} className="form-label mr-2 col-4">{label}</label>
            <input type={ipType} name={name} className={classCategory} onBlur={handleChange} title={ipTitle} autoComplete="off" list={name} required />

            </span>
 
    )
}
export function CustomSelect({ label, name, dataArray, handleChange, classCategory, ...otherProps }: any) {
   
    return (
        <span className="row row-content d-flex section2 col-sm-12 m-0">
    

            <label htmlFor={name} style={{ fontSize: '0.8em' }} className="form-label labl labl2">{label}</label>
            {/*<label htmlFor={name} style={{ fontSize: '0.8em' }} className="form-label mr-2 col-4">{label}</label>*/}
            <select name={name} className={classCategory} onBlur={handleChange} style={{height:'26px', padding:'0'}}>
              

                {

                    dataArray != null && dataArray.length > 0 ?
                        dataArray.map((obj: any) => {
                            return (<>
                                <option value={obj.code}>{obj.name}</option></>)
                        }) : null
                }
              
            </select>


        </span>
        )
}


export function InputList({ name, label, ipType, ipTitle, dataArray, change, lablCat, classCategory,placeholder,s,id,...props }: any) {
    var [hide, setHide]: any = React.useState(true);
    var [listCurrentVal, setListCurrentVal]: any = React.useState('');
    var [defValue, setDefValue]: any = React.useState('');
    var [filteredData, setFilteredData]: any = React.useState(dataArray);
    var input = document.getElementById(id) as HTMLInputElement;

    var [defVal, setDefVal]: any = React.useState("");
    React.useEffect(() => {

    if (!props.default) { }
    else {

    if (!props.default) { }
    else { setDefVal(dataArray[props.default -1].name); }

    }
    }, [props.default])


    console.log('zzzzzzzz', defVal);

    const SetInputData = (e: any) => {
        var n = e.target.id;
        var code = e.target.value;
        setListCurrentVal(code);
       
        input.value = n;
        change(code, name)

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


            <label htmlFor={name} style={{ fontSize: '0.8em' }} className={lablCat}>{label}</label>
            <div className="m-0 p-0 " style={{ width: 'auto', minWidth: s }}>
                <input type={ipType} name={name} id={id} className="form-control" defaultValue={defVal} title={ipTitle} autoComplete="off" onFocus={() => { setHide(false); filterList(); }} onChange={filterList} placeholder={placeholder} />
             
                <ul id="dropdown" className="dropdown" style={hide === true ? { listStyle: 'none', marginTop: '2px', zIndex: 1000, position: 'absolute', width: 'auto', minWidth: s, maxHeight: '30vh', overflowY: 'auto', backgroundColor: '#fff', borderRadius: '2px', border: '1px solid grey', visibility:'hidden' } : { listStyle: 'none', marginTop: '2px', zIndex: 1000, position: 'absolute', width: 'auto', minWidth: s, maxHeight: '60vh', overflowY: 'auto', backgroundColor: '#fff', borderRadius: '2px', border: '1px solid grey' }}>
                            {

                                filteredData != null && filteredData.length > 0 ?
                                    filteredData.map((obj: any) => {
                                        return (<> <li className="text-left ml-1 text-secondary liItem m-0 p-1" onClick={SetInputData} id={obj.name} value={obj.code} >{obj.name}</li> </>)
                                    }) : null
                            }
                </ul>
                       
            </div>


        </span>
    )
}