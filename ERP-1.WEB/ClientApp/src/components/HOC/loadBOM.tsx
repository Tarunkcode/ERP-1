import * as React from 'react';
import { useMemo } from 'react';
import useFetch from '../Hooks/useFetch';

export default function BoM_Parent(Component: any) {
    return function Loaded_BoM(props: any) {
        let api = useFetch();
        let memo = useMemo;
        console.log(api,'api................')
        return <Component {...props} api={api} memoised={memo } />
    }

}

