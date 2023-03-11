import * as React from 'react';
import { useMemo } from 'react';
import useFetch from '../Hooks/useFetch';

export default function ProvideHookToClass(Component: any) {
    return function Loaded_Hooks(props: any) {
        let api = useFetch();
        let memo = useMemo;
        console.log(api,'api................')
        return <Component {...props} api={api} memoised={memo } />
    }

}

