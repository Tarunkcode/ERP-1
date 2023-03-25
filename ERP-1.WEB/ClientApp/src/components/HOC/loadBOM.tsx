import * as React from 'react';
import { useMemo } from 'react';
import { useHistory } from 'react-router';
import useFetch from '../Hooks/useFetch';

export default function ProvideHookToClass(Component: any) {
    return function Loaded_Hooks(props: any) {
        let api = useFetch();
        let memo = useMemo;
        let history = useHistory();
        console.log(api,'api................')
        return <Component {...props} api={api} memoised={memo} history={history } />
    }

}

