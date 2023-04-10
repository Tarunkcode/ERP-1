import * as React from 'react';
import { toast } from 'react-toastify';
import { useParams, useHistory, useLocation } from 'react-router';
import Tran_Modify_Page from '../../Pages/Modify/tran_modify.page';
import { ClipLoader } from 'react-spinners';

const Tran_Modify = () => {

    const [loader, setLoader]:any[] = React.useState(false)
    const [getpath, setGetPath]: any[] = React.useState()

    const history = useHistory();

    React.useEffect(() => {
        handleLoader()
    }, [])

    const handleLoader = () => {
        setLoader(!loader)
    }

    console.log('loader', loader)


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
            {loader == true ? (<ClipLoader color="#52bfd9" size={100} loading={loader} />) :(
                <Tran_Modify_Page handleSubmit = { handleSubmit } handleSelect = { handleSelect } />
            )
            }

        </>

    )
};

export default Tran_Modify;