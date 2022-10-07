//import * as React from "react";

//export interface DomainContext {
//    domain_name: string;
//    port_no: string;
//    fyear: string;
//}
//const contextdomain = React.createContext<DomainContext | null>(null);
//export const DomainContextProvider = contextdomain.Provider;
//export const DomainContextConsumer = contextdomain.Consumer;


import * as React from 'react';
import {createContext} from 'react';

export var DomainContext = createContext({ defaultState: 0, domainState: {}});
export default function DomainProvider({ children }: any) {
    var [defaultState, setDefaultState]: any = React.useState(0)
    var [domainState, setDomainState]: any = React.useState("")
    var domainUrl = `http://${window.location.host}/api/getall`;
   
    const currentDomain = window.location.hostname;

        React.useEffect(() => {
            try {
                fetch(domainUrl).then(res => res.json()).then(result => {
                    console.log(result)

                    if (result != null && result.length > 0) {
                        for (let i = 0; i < result.length; i++) {
                            if (result[i].currentDomain == currentDomain) {
                                setDomainState({ port: result[i].sPort, domain: result[i].sUrl, Fy: result[i].fy });
                                setDefaultState(1);
                                break;
                            }

                        }
                    }
                    else {
                        console.log('data not found in domain array fetch Status = -1');
                        setDefaultState(2);
                    }

                })
            } catch (err) {
            alert(err)
           }

        }, [])
    var value = { defaultState, domainState }
    
    return <DomainContext.Provider value={value}>{children}</DomainContext.Provider>
}