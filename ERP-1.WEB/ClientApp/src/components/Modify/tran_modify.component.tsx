import * as React from 'react';
import { toast } from 'react-toastify';
import { useParams, useHistory, useLocation } from 'react-router';

import { ClipLoader } from 'react-spinners';
import Tran_Modify_Page from '../../Pages/Modify/tran_modify.page';

const Tran_Modify = () => {

    const [loader, setLoader]: any[] = React.useState(false);
    const [getpath, setGetPath]: any[] = React.useState();
    const [show, setShow]: any[] = React.useState(false)

    const history = useHistory();
    const param: any = useParams();

    var id = param.master;
    console.log('master type id:---', id)

    React.useEffect(() => {
        setShow(true)
        handleLoader();

    }, [id])


    const handleLoader = () => {
        setLoader(!loader)
    }


    const handelShowHide = () => {
        setShow(!show)
    }


    const handleSelect = (code: string, name: string) => {

        console.log(name + ':' + code)
        setGetPath({ code })
    }



    const handleSubmit = () => {

        if (!getpath) { toast.info('Please Select one Term to Modify') }
        else history.push({ pathname: getpath.address, state: { code: getpath } })


    }

    return (
        <>

            <Tran_Modify_Page handleSubmit={handleSubmit} handleSelect={handleSelect} handelShowHide={handelShowHide} show={show} />


        </>

    )
};

export default Tran_Modify;