import * as React from 'react';
import { useParams, useHistory, useLocation } from 'react-router';
import Tran_List_Page from '../../Pages/List/tran_list.page';
import useFetch from '../Hooks/useFetch';




const Tran_List = () => {

    var api = useFetch();
    const compCode = window.localStorage.getItem('compCode') || ""
    const customer = window.localStorage.getItem('customer') || ""


    const [data, setData]: any[] = React.useState([]);
    const [colDef, setColDef]: any[] = React.useState([]);
    const [show, setShow]: any[] = React.useState(false);
    const [rowCode, setRowCode]: any[] = React.useState([]);




    const history = useHistory();



    const param: any = useParams();

    var id = param.master;
    console.log('master type id:---', id)


    React.useEffect(() => {

        setShow(false);
        FetchUomList();
    }, [id])



    const onCellClicked: any = (params: any) => {
        var celldata: any = params.data
        console.log('cell-clicked-data :---->', celldata)
        var code: any = params.data.code;
        setRowCode(code)


        //switch (id) {
        //    case '21':
        //        history.push({ pathname: '/add-unit/17', state: { rowdata: celldata } })
        //        break;
        //    case '22':
        //        history.push({ pathname: '/add-material-center/4', state: { rowdata: celldata } })
        //        break;
        //    case '1011':
        //        history.push({ pathname: '/add-qc-parameter/7', state: { setD: celldata } })
        //        break;
        //    case '1008':
        //        history.push({ pathname: '/add-sampling-type/8', state: { setD: celldata } })
        //        break;
        //    case '102':
        //        history.push({ pathname: '/add-currency/18', state: { rowdata: celldata } })
        //        break;
        //    case '30':
        //        history.push({ pathname: '/add-delivery-term/9', state: { rowdata: celldata } })
        //        break;
        //    case '31':
        //        history.push({ pathname: '/add-payment-term/10', state: { rowdata: celldata } })
        //        break;
        //    case '1009':
        //        history.push({ pathname: '/add-product-type/11', state: { rowdata: celldata } })
        //        break;
        //    case '1010':
        //        history.push({ pathname: '/add-product-category/12', state: { rowdata: celldata } })
        //        break;
        //    case '1002':
        //        history.push({ pathname: '/add-brand/16', state: { rowdata: celldata } })
        //    default:
        //        console.log('baba ji ka thullu found')
        //}


    };


    const onClick = () => {
        setShow(!show);
    }


    console.log('pathid', rowCode)

    const FetchUomList = async () => {

        //let colD: any[] = [];

        //const urlList = `/api/LoadSubMasterList?MasterType=${id}&Company=${compCode}&Customer=${customer}`

        //try {

        //    let { res, got } = await api(urlList, "GET", '')
        //    if (res.status == 200) {
        //        const keys = Object.keys(got.data[0])

        //        keys.forEach((key: any) => { colD.push({ field: key }) })

        //        setData(got.data);
        //        setColDef(colD)

        //    }

        //} catch (err) {
        //    alert(err)
        //}


    }




    return (
        <>
            <Tran_List_Page
                data={data}
                colDef={colDef}
                onClick={onClick}
                show={show}
                id={id}
                onCellClicked={onCellClicked}

            />

        </>


    )
}

export default Tran_List;