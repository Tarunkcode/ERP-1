import * as React from 'react';
import { toast } from 'react-toastify';
import { LoaderContext } from '../../AppContext/loaderContext';
import BranchMaster from '../../Pages/Master/BranchMaster/branch-master.page';
import { store1 } from '../../Redux/form-collection/formCollection.reducer';
import useFetch from '../Hooks/useFetch';

export default function BranchMasterComponent() {
    var [itemcodes, setItemCodes]: any = React.useState([])
    var [matcanter, setMatCanter]: any = React.useState([])
  
    var [stateList, setStateList]: any = React.useState([])
    var [bankList, setBankList]: any = React.useState([])
    var [branchList, setBranchList]: any = React.useState([])
    var [stateCode, setStateCode]: any = React.useState('')
 
    const { setLoader } = React.useContext(LoaderContext);
    const api = useFetch();
    const compCode = window.localStorage.getItem('compCode') || ""
    const customer = window.localStorage.getItem('customer') || ""
    const username = window.sessionStorage.getItem('username') || ""

    // handle change fields
    const handleChange = (e: any) => {
        e.preventDefault();
        store1.dispatch({ payload: e.target.value, key: e.target.name, type: "AddBranch", label: '' });
    }
    const handleDrops = (value: any, name: string) => {
        if (name === 'state') setStateCode(value);
        store1.dispatch({ payload: parseInt(value), key: name, type: "AddBranch", label: '' });
    }
    React.useEffect(() => {
        store1.dispatch({ payload: parseInt(compCode), key: 'company', type: "AddBranch", label: '' });
        store1.dispatch({ payload: parseInt(customer), key: 'customer', type: "AddBranch", label: '' });
        store1.dispatch({ payload: username, key: 'username', type: "AddBranch", label: '' });
        store1.dispatch({ payload: 0, key: 'code', type: "AddBranch", label: '' });
    }, [compCode, customer, username])
    //1. item codes load (GRP Type = 1,2,3)
    const GetItemCodes = async () => {

        setLoader(true);
        let url = '/api/LoadIMList';
        let body = {
            "Customer": parseInt(customer),
            "Company": parseInt(compCode),
            "Series": "",
            "ItemBrand": "",
            "ItemGroup": "",
            "ItemType": "",
            "ItemCat": "",
            "ItemSubCat": "",
            "Clearance": "",
            "UOM": "",
            "MC": "",
            "QC": "",
            "GRPType": "1,2,3"

        }
        try {
            let { res, got } = await api(url, 'POST', body);
            if (res.status == 200) {

                let cd$Nm: any = got.data.map((option: any) => ({
                    value: option.value,
                    label: option.codestrname,
                    uomname: option.uomname,
                    uom: option.uom,
                    rate: option.rate

                }))

                setItemCodes(cd$Nm)
                setLoader(false);
            }
            else {
                setLoader(false);
                toast.error('Item Code loading failed');
            }
        } catch (err) {
            setLoader(false);
            alert(err)
        }
    }
    React.useEffect(() => {
     
        GetItemCodes();
        loadMatCanter();
        getMasterData();
    }, [])
    //2.  material center (item master)
    const loadMatCanter = async () => {
   
        setLoader(true)

        try {


            let urlStr: string = `/api/LoadMasterData?MasterType=${22}&Company=${compCode}&Customer=${customer}`

            let { res, got } = await api(urlStr, "GET", '');
            if (res.status === 200) {
                setMatCanter(got.data)



                setLoader(false)
            }
            else {
                setLoader(false);
                throw new Error('Bad Fetch 1')
            }


        } catch (err) {
            setLoader(false);
            alert(err);
        }
    }
    const getMasterData = async () => {
      
       setLoader(true);
        const masterCode = [ { name: 'stat', code: 26 }, { name: 'bnk', code: 1018 }, { name: 'bnch', code: 1019 }]
        try {
            for (let i = 0; i < masterCode.length; i++) {
                const urlMaster = `/api/GetMasterData?MasterType=${masterCode[i].code}&SrType=1&customer=${customer}&company=${compCode}`;
                let { res, got }: any = await api(urlMaster, "GET", '');
                if (res.status == 200) {
                    let data = got.data;
                    if (masterCode[i].name == 'stat') setStateList(data);
                    else if (masterCode[i].name == 'bnk') setBankList(data);
                    else if (masterCode[i].name == 'bnch') setBranchList(data);
                    else {alert("submaster loading failed")}
                     

                } else {
                    setLoader(false);
                    toast.error('ERROR: Masters loading failed')
                }
            }
            setLoader(false);
        } catch (err) {
         setLoader(false);
            alert(err)
        }

    }

    // saving branch master
    const SaveBranchMaster = async (e: any) => {
        e.preventDefault();

        setLoader(true);
        const URL = '/api/BranchMasterSave'
        try {

            let data = await store1.getState().BranchMasterClass;
            console.log('i', JSON.stringify(data));

            let { res, got } = await api(URL, "POST", data);
            if (res.status == 200) {
                setLoader(false);
                toast.success(got.msg);
            }
            else {
                setLoader(false);
                toast.error(got.msg);
            }
        } catch (err) {
            setLoader(false);
            alert(err);
        }
        //loader.setLoader(false);
    }
    return (
        <BranchMaster itemCodes={itemcodes} renderItemCodes={GetItemCodes} matcanter={matcanter} SaveBranchMaster={SaveBranchMaster} handleDrops={handleDrops} handleChange={handleChange} stateList={stateList} bankList={bankList} branchList={branchList} stateCode={stateCode }/>
        )
}