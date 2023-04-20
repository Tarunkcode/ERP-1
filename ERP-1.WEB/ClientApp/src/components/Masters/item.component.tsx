import * as React from 'react';
import '../../Pages/Master/masterStyle.css';




import formDataCollection, { store1 } from "../../Redux/form-collection/formCollection.reducer";

import AddItemMaster from '../../Pages/Master/ItemMaster/add-item-master.component';
import useFetch from '../Hooks/useFetch';
import ItemMasterWithLoad from '../HOC/loadItemMaster.hoc';
import { toast } from 'react-toastify';
import { LoaderContext } from '../../AppContext/loaderContext';
import { clear_form } from '../../Pages/Helper Functions/table';

interface IState {
    rawData: any;
    opn: string,
    lApi : any
}
interface IProps {
    api2 : any,
    //fetchApi: any,
    //currentData: any,
    //setFormDataCollection: any,
   history: any,
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
    static contextType = LoaderContext;

    constructor(props: any) {
        super(props);

        this.state = {
            rawData: {},
            opn: 'Corporate',
            lApi : null

        };

    }
    compCode = window.localStorage.getItem('compCode') || ""
    customer = window.localStorage.getItem('customer') || ""
    username = window.sessionStorage.getItem('username') || ""
     collectListData = (value : any, name:string) => {
         name === 'itemuse' ? value = value.toString() : value = parseInt(value);
         store1.dispatch({ payload: value, key: name, type: "AddOnFormData", label: "ItemMaster" });
         this.setState({
             rawData: {
                 code: this.props.gettingVirtualCode,
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
                code: this.props.gettingVirtualCode,
                customer: parseInt(this.customer),
                company: parseInt(this.compCode),
                ...store1.getState().ItemMaster
         
            }
        })
    }
  
    handleSave$Submit = async (e: any) => {
        //------------------------------------------------check mandatory fields---------------------------------

        // Series, Code, Name, Group, UOM, Material Center, Nature
        if (!this.state.rawData.series) {
            toast.info('Please Fill Series !')
            return;
        } else if (!this.state.rawData.codestr || this.state.rawData.codestr === '') {
            toast.info('Please Fill Code !')
            return;
        }
         else if (!this.state.rawData.name || this.state.rawData.name === '') {
            toast.info('Please Fill Name !')
            return;
        }
        else if (!this.state.rawData.itemgrp) {
            toast.info('Please Fill Group !')
            return;
        }
        
        else if (!this.state.rawData.itemuom) {
            toast.info('Please Fill UOM !')
            return;
        }
        
        else if (!this.state.rawData.itemmatcenter) {
            toast.info('Please Fill Material Center !')
            return;
        }
        
        else if (!this.state.rawData.c1) {
            toast.info('Please Fill Nature !')
            return;
        }


        //--------------------------------------------------------------------------------------------------------
        const { setLoader } = this.context;
        setLoader(true)
        e.preventDefault();
        let i: any = { ...this.props.defItemMaster, ...this.state.rawData };
        console.log('i', i)
        try {
            let path = `/api/SaveItemMaster`
            let { res, got } = await this.props.api2(path, 'POST' ,i)
            console.log('res', res)
            if (res.status === 200) {
                var r: string = got.msg;
                toast.success(r);
                setLoader(false)
                let ref = document.getElementById("form");
                this.props.gettingVirtualCode == 0 ? clear_form(ref) : this.props.history.push('/successfully-modify')

            }
            else {
                setLoader(false);
                throw new Error('Bad Fetch 1')
            }
        } catch (err) {
            setLoader(false)
            alert(err)
        }
        
       
    }
    render() {
      

        return (
            <>
                <AddItemMaster
                
                   
                    series={this.props.series}
                    group={this.props.group}
                    type={this.props.type}
                    clearance={this.props.clearance}
                    category={this.props.category}
                    brand={this.props.brand}
                    defItemDetails={this.props.defItemMaster}
                    collectSelectedItem={this.collectListData.bind(this) }
                    gettingVirtualCode={this.props.gettingVirtualCode}
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
