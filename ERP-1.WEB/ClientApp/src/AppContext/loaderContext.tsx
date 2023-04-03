import * as React from 'react';
interface IState {
    isLoader: boolean,
    setLoader: any
}
var initState: IState = {
    isLoader: false,
    setLoader: () => { }
}
export var LoaderContext = React.createContext(initState);

export default function LoaderProvider({ children }: any) {
    let [isLoader, setLoader] : any = React.useState(false);
 
    let value = { isLoader, setLoader };

    return <LoaderContext.Provider value={value}>{children}</LoaderContext.Provider>
}