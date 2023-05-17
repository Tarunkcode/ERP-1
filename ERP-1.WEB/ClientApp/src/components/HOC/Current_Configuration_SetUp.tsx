import * as React from 'react';

import { ConfigContext } from '../../AppContext/ConfigContext';
import useFetch from '../Hooks/useFetch';


export default function Current_Configuration_SetUp(Component: any) {
    const api = useFetch();
    const SetUp = (props: any) => {

        return (

            <ConfigContext.Consumer>
                {(context: any) => <Component {...props} api={ api} context={ context} />}

            </ConfigContext.Consumer>
         )
    }
    SetUp.Component = SetUp;
    return SetUp;

}

export function ProvideHookToClass(Component: any) {
    const api = useFetch();
    const SetUp = (props: any) => {

        return (

            <Component api={api} {...props}/>
         )
    }
    SetUp.Component = SetUp;
    return SetUp;

}

