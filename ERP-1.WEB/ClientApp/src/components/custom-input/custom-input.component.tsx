import * as React from 'react';

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
                              window.localStorage.setItem('key', hiddenInput.value);
                           
                              break;
                          }
                      }
                  })
              else window.localStorage.setItem('key', '');
          }, [ref, dataArray.length != 0])
          return (
              <>
            <label htmlFor={name} style={{ fontSize: '0.8em' }} className="form-label labl labl2">{label}</label>
            <input type="hidden" name={name} className={classCategory} title={ipTitle} id="visible-hidden" />
            <input ref={ref } list={name} type={ipType} name={name} className={classCategory} title={ipTitle} autoComplete="off" id="visible" onBlur={change} />
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
export function CustomSelect({ label, name, dataArray, handleChange, classCategory ,...otherProps }: any) {
    return (
        <span className="row row-content d-flex section2 col-sm-12 m-0">
            {/*<label htmlFor={name} style={{ fontSize: '0.8em' }} className="form-label labl labl2">{label}</label>*/}
            {/* <input type={ipType} name={name} className="form-control" title={ipTitle} autoComplete="off" list={name} onBlur={change} />*/}

            <label htmlFor={name} style={{ fontSize: '0.8em' }} className="form-label mr-2 col-4">{label}</label>
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