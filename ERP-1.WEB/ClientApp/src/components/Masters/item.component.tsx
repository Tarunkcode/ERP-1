import * as React from 'react';
import '../../Pages/Master/masterStyle.css';


import { fetchMasters } from '../HOC/fetchApi.hoc';

import formDataCollection, { store1 } from "../../Redux/form-collection/formCollection.reducer";

import AddItemMaster from '../../Pages/Master/ItemMaster/add-item-master.component';
import useFetch from '../Hooks/useFetch';
import ItemMasterWithLoad from '../HOC/loadItemMaster.hoc';
import { toast } from 'react-toastify';

interface IState {
    rawData: object;
    opn: string,
    series: any[],
    delT: any[],
    payT: any[],
    custGp: any[],
    country: any[],
    zone: any[],
    state: any[],
    city: any[],
    bank: any[],
    branch: any[],
    currency: any[],
    tryNotToReRender: any
}
interface IProps {
    api2 : any,
    //fetchApi: any,
    //currentData: any,
    //setFormDataCollection: any,
    default : any,
    series: any[],
    group: any[],
    type: any[],
    clearance : any[],
    category: any[] ,
    brand: any[],
    matCanter : any[] ,
    uom: any[],
    gstCat : any[],
    subCat: any[],
    defItemMaster: object,
    gettingVirtualCode : number
}

class ItemMasterChild extends React.PureComponent<IProps, IState> {
    /*static ApiContext = MasterApiContext;*/

    constructor(props: any) {
        super(props);

        this.state = {
            rawData: {},
            opn: 'Corporate',
            series: [],
            delT: [],
            payT: [],
            custGp: [],
            country: [],
            zone: [],
            state: [],
            city: [],
            bank: [],
            branch: [],
            currency: [],
            tryNotToReRender: true

        };

    }
    compCode = window.localStorage.getItem('compCode') || ""
    customer = window.localStorage.getItem('customer') || ""
    username = window.sessionStorage.getItem('username') || ""
    handleList = (item: any) => {
        let value = parseInt(item.id)
       
        let label = "ItemMaster";
        store1.dispatch({ payload: value, key: item.name, type: "AddOnFormData", label: label });


        this.setState({
            rawData: {
                code: 0,
                customer: parseInt(this.customer),
                company: parseInt(this.compCode),
                ...store1.getState().ItemMaster
            }
        })
    }

    handleChangeField = (e: any) => {
        e.preventDefault(); 
        var label: string = 'ItemMaster';
        var value: any = e.target.value;
        if (e.currentTarget.classList.contains('double')) { value = parseFloat(value) }
        else if (e.currentTarget.classList.contains('decimal')) { value = parseFloat(value) }
        else if (e.currentTarget.classList.contains('int')) { value= parseInt(value) }
        else if (e.currentTarget.classList.contains('switch')) { e.target.checked === true ? value = 1 : value = 0 }
        else value = e.target.value;

        store1.dispatch({ payload: value, key: e.target.name, type: "AddOnFormData", label: label });
        this.setState({
            rawData: {
                code: 0,
                customer: parseInt(this.customer),
                company: parseInt(this.compCode),
                ...store1.getState().ItemMaster
         
            }
        })
    }
  
    handleSave$Submit= async (e: any)=> {
     
        e.preventDefault();
        let i: any = this.state.rawData;
        console.log('i', i)
        try {

            let path = `/api/SaveItemMaster`
            let { res, got } = await this.props.api2(path, 'POST' ,i)
            console.log('res', res)
            if (res.status === 200) {
                var r: string = got.msg;
                toast.success(r);
            }
            else throw new Error('Bad Fetch 1')
        } catch (err) { alert(err) }
        
       
    }
    render() {
      

        return (
            <>
                <AddItemMaster
                    default={this.props.default}
                    handleList={this.handleList.bind(this)}
                    series={this.props.series}
                    group={this.props.group}
                    type={this.props.type}
                    clearance={this.props.clearance}
                    category={this.props.category}
                    brand={this.props.brand}
                    defItemDetails={this.props.defItemMaster}
                    matCanter={this.props.matCanter}
                    uom={this.props.uom}
                    gstCat={this.props.gstCat}
                    subCat={this.props.subCat}
                    handleChangeField={this.handleChangeField}
                    title="Add Item Master"
                    handleSave$Submit={this.handleSave$Submit}
                />
            </>
        )
    }
}


const IMaster = ItemMasterWithLoad(ItemMasterChild);
export default IMaster;
