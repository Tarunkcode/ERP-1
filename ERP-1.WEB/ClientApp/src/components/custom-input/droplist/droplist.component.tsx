
import autocomplete from 'autocompleter';
import * as React from 'react';
import { useMemo } from 'react';




export default function AutoComp({ name, defaultt, label, ipTitle, ipType,list, collect, classCategory, ...props }: any) {

    const ifEmptyNotSelected = (e : any) => {
        if (!e.target.value || e.target.value === '') {
            collect(null, e.target.name);
        }
    }
    let ip = document.getElementById(name) as HTMLInputElement;
    React.useEffect(() => {
        if (ip !== undefined && ip !== null) {
            autocomplete({
                input: ip,
                minLength: 1,
                fetch: function (text: any, update: any) {
                    text = text.toLowerCase();
                  
                    // you can also use AJAX requests instead of preloaded data
                    var suggestions = list.filter((n: any) =>
                        n.label.toLowerCase().startsWith(text)
                    );
                    update(suggestions);
                }, customize: function ({ input, inputRect, container, maxHeight }: any) {
                    if (maxHeight < 100) {
                        container.style.top = '';
                        container.style.bottom = (window.innerHeight - inputRect.bottom + input.offsetHeight) + 'px';
                        container.style.maxHeight = '200px';

                    }
                },
                showOnFocus: true,
                onSelect: function (item: any) {
                    ip.value = item.label;
                    collect(item.value , name);
                }
            });

        }
    }, [ip, list]);

    return (
       
        <>
            {
                props.type === true ?
                    (
                        <>
                            <label htmlFor={name} style={{ fontSize: '1rem' }} className="form-label labl  mt-2 col-2  ml-2 mr-2 labl2">{label}</label>
                            <input id={name} type={ipType} defaultValue={defaultt} style={{ borderColor: "#86a4c3", marginBottom: '20px' }} name={name} className={classCategory} title={ipTitle} autoComplete="off" list={name} required onChange={ifEmptyNotSelected } />
                        </>
                    ) :
                    (
                        <>
                        <label htmlFor={name} style={{ fontSize: '1rem' }} className="form-label labl  mt-2 ml-2 mr-2 labl2">{label}</label>
                            <input id={name} type={ipType} defaultValue={defaultt} style={{ borderColor: "#86a4c3", padding: '22px 0 22px 10px', marginBottom: '20px' }} name={name} className={classCategory} title={ipTitle} autoComplete="off" list={name} required onChange={ifEmptyNotSelected}/>
                    </>
                    )
            }
           
        </>
        )
}


