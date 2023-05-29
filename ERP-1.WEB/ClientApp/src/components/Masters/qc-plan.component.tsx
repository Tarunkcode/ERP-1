import * as React from 'react';
import { toast } from 'react-toastify';
import { LoaderContext } from '../../AppContext/loaderContext';
import AddQcPlan from '../../Pages/Master/AddQcPlan/add-qc-plan.page';
import { store1 } from '../../Redux/form-collection/formCollection.reducer';
import useFetch from '../Hooks/useFetch';


export default function AddQcPlanComponent() {
    var [seriesList, setSeriesList]: any = React.useState('')
    var [itemcodes, setItemCodes]: any = React.useState('');
    let [uomList, setUomList]: any = React.useState([])
    let [qcPara, setQcPara]: any = React.useState([])
    let [qcType, setQcType]: any = React.useState([])
    let [samplingPlan, setSamplingPlan]: any = React.useState([])
    let [measuring, setMeasuring]: any = React.useState([])




    var [tableApi, setTableApi]: any = React.useState('')
    const { setLoader } = React.useContext(LoaderContext);
    const api = useFetch();
    const compCode = window.localStorage.getItem('compCode') || ""
    const customer = window.localStorage.getItem('customer') || ""
    const username = window.sessionStorage.getItem('username') || ""

   
    //----------------------------------------------------------------------------------------------------------------------------
     // load series, item code , 
   const getSeriesList = async () => {
  
        setLoader(true);
        let seriesUrl = `/api/GetSeries?TranType=48&SrType=0&customer=${customer}&company=${compCode}`;
        try {
            let { res, got } = await api(seriesUrl, 'GET', '');
            if (res.status == 200) {
                setSeriesList(got.data);
                setLoader(false);
            } else {

                setLoader(false);
                toast.error('Something Went Wrong in Series loading')
            }
        } catch (err) {
            setLoader(false);
            alert(err);
        }
    }

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

    const getMasterData = async () => {

        setLoader(true);
        const masterCode = [{ name: 'uom', code: 21 }, { name: 'qcParameter', code: 1011 }, { name: 'qcType', code: 18 }, { name: 'samplingPlan', code: 1008 }, { name: 'measuringMethod', code: 1020 }]
        try {
            for (let i = 0; i < masterCode.length; i++) {
                const urlMaster = `/api/GetMasterData?MasterType=${masterCode[i].code}&SrType=1&customer=${customer}&company=${compCode}`;
                let { res, got }: any = await api(urlMaster, "GET", '');
                if (res.status == 200) {
                    let data = got.data;
                    switch (masterCode[i].name) {


                        case 'uom': setUomList(data);
                        case 'qcParameter': setQcPara(data);
                        case 'qcType': setQcType(data);
                        case 'samplingPlan': setSamplingPlan(data);
                        case 'measuringMethod': setMeasuring(data);



                    }

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
    React.useEffect(() => {
        getSeriesList();
        GetItemCodes();
        getMasterData();
    }, [])

    React.useEffect(() => {
        store1.dispatch({ payload: compCode, key: 'company', type: "AddQcPlan", label: 'QCPlanHeader' });
        store1.dispatch({ payload: customer, key: 'customer', type: "AddQcPlan", label: 'QCPlanHeader' });
        store1.dispatch({ payload: username, key: 'username', type: "AddQcPlan", label: 'QCPlanHeader' });
        store1.dispatch({ payload: 0, key: 'code', type: "AddQcPlan", label: 'QCPlanHeader' });
    },[compCode, customer, username])
    //----------------------------------------------------------------------------------------------------------------------------

    // handle change fields
    const handleChange = (e: any) => {
        e.preventDefault();
        store1.dispatch({ payload: e.target.value , key: e.target.name, type: "AddQcPlan", label: 'QCPlanHeader' });
    }
    const handleDrops = (value : any, name: string) => {
        store1.dispatch({ payload: value, key: name, type: "AddQcPlan", label: 'QCPlanHeader' });
    }
    //-------------------------------------Table------------------------------------------------------
    const getApi = (api: any) => {
        setTableApi(api)
    }
    const getQcPlantDetailsRow = () => {
        let items: any[] = [];
        if (tableApi !== null) {
            tableApi.forEachNode(function (node: any) {
                if (node.data.item !== null)
                    items.push(node.data);
            });
        }
        return items;
    }
    const collectQcDetails = async () => {

        let dataSet: any[] = await getQcPlantDetailsRow();
        store1.dispatch({ payload: dataSet, key: '', type: "AddQcPlan", label: 'QCPlanDetails' });
        
    }
    // saving data
    const SaveQcMaster = async (e: any) => {
        e.preventDefault();
        
         setLoader(true);
        const URL = '/api/QcPlanSave'
        try {
            await collectQcDetails();
            let data = await store1.getState().QCPlanClass;
            console.log('i', JSON.stringify(data));

            let { res, got } =await api(URL, "POST", data);
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
    //        let [uomList, setUomList]: any = React.useState([])
    //let [qcPara, setQcPara]: any = React.useState([])
    //let [qcType, setQcType]: any = React.useState([])
    //let [samplingPlan, setSamplingPlan]: any = React.useState([])
    //let [measuring, setMeasuring]: any = React.useState([])


    return (
        <AddQcPlan seriesList={seriesList} itemCodes={itemcodes} handleHeaderChange={handleChange} handleDrops={handleDrops} getApi={getApi} SaveQcMaster={SaveQcMaster}
            uomList={uomList }
            qcParaList={qcPara }
            qcTypeList={qcType }
            samplingPlanList={samplingPlan }
            measuringList={measuring }
        />
        )
}
