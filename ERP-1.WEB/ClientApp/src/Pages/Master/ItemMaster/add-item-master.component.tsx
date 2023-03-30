import * as React from 'react';
import DatalistInput from 'react-datalist-input';
import { InputList, MasterInput2 } from '../../../components/custom-input/custom-input.component';
import CustomeSwitch from '../../../components/CustomSwitch/custom-switch.component';
import { StockMasterModal } from '../../../components/Modals/master.modals';

import '../masterStyle.css';


function AddItemMaster({ handleChangeField, handleList, handleSave$Submit, title, defItemDetails, accountType, default: any,
    series,
    group,
    type,
    category,
    brand,
    matCanter,
    uom,
    gstCat,
    clearance,
    subCat, ...props }: any) {
    const natureList = [{ id: 1, value: 'Item', name: 'c1' }, { id: 2, value: 'Service', name: 'c1' }, { id: 3, value: 'Asset',name:'c1'}]
    const valueTypeList = [{ id: 1, value: 'FIFO', name: 'valtype' }, { id: 2, value: 'LIFO', name: 'valtype' }, { id: 3, value: 'Average', name: 'valtype' }, { id: 4, value: 'Wt. Average', name: 'valtype' }]
    var [defSeries ,setDefSeries] : any = React.useState('')
    var [defGroup, setDefGroup] : any = React.useState('')
    var [defType, setDefType] : any = React.useState('')
    var [defCat, setDefCat] : any = React.useState('')
    var [defSubCat, setDefSubCat] : any = React.useState('')
    var [defBrand, setDefBrand] : any = React.useState('')
    var [defNature, setDefNature] : any = React.useState('')
    var [defUom, setDefUom] : any = React.useState('')
    var [defAltUom, setDefAltUom] : any = React.useState('')
    var [defMatCenter, setDefMatCenter] : any = React.useState('')
    var [defClearance, setDefClearance] : any = React.useState('')
    var [defValType, setDefValType] : any = React.useState('')
    var [defGstCat, setDefGSTCat] : any = React.useState('')
   
    let seriesList = series.map((option: any) => ({
        id: option.id,
        value : option.value,
        name: "series"
    }))
    let groupList = group.map((option: any) => ({
        id: option.id,
        value: option.value,
        name: "itemgrp"
    }))
    let typeList = type.map((option: any) => ({
        id: option.id,
        value: option.value,
        name: "itemtype"
    }))
    let categoryList = category.map((option: any) => ({
        id: option.id,
        value: option.value,
        name: "itemcategory"
    }))
    let brandList = brand.map((option: any) => ({
        id: option.id,
        value: option.value,
        name: "itembrand"
    }))
    let matCanterList = matCanter.map((option: any) => ({
        id: option.id,
        value: option.value,
        name: "itemmatcenter"
    }))
    let uomList = uom.map((option: any) => ({
        id: option.id,
        value: option.value,
        name: "itemuom"
    }))
    let uomAltList = uom.map((option: any) => ({
        id: option.id,
        value: option.value,
        name: "itemaltuom"
    }))
    let gstCatList = gstCat.map((option: any) => ({
        id: option.id,
        value: option.value,
        name: "gstcategory"
    }))
    let subCatList = subCat.map((option: any) => ({
        id: option.id,
        value: option.value,
        name: "subcategory"
    }))

    let clearanceList = clearance.map((option: any) => ({
        id: option.id,
        value: option.value,
        name: "clearance"
    }))

    React.useEffect(() => {
        seriesList.map((option: any) => {
            if (option.id == defItemDetails.series) setDefSeries(option.value);
        })
    }, [defItemDetails, seriesList])
    React.useEffect(() => {
        groupList.map((option: any) => {
            if (option.id == defItemDetails.itemgrp) setDefGroup(option.value);
        })
    }, [defItemDetails, groupList])

    React.useEffect(() => {
        typeList.map((option: any) => {
            if (option.id == defItemDetails.itemtype) setDefType(option.value);
        })
    }, [defItemDetails, typeList])

    React.useEffect(() => {
        categoryList.map((option: any) => {
            if (option.id == defItemDetails.itemcategory) setDefCat(option.value);
        })
    }, [defItemDetails, categoryList])

    React.useEffect(() => {
        subCatList.map((option: any) => {
            if (option.id == defItemDetails.subcategory) setDefSubCat(option.value);
        })
    }, [defItemDetails, subCatList])
     React.useEffect(() => {
         brandList.map((option: any) => {
             if (option.id == defItemDetails.itembrand) setDefBrand(option.value);
        })
     }, [defItemDetails, brandList])

    React.useEffect(() => {
        natureList.map((option: any) => {
             if (option.id == defItemDetails.c1) setDefNature(option.value);
        })
    }, [defItemDetails, natureList])

    React.useEffect(() => {
        uomList.map((option: any) => {
            if (option.id == defItemDetails.itemuom) setDefUom(option.value);
        })
    }, [defItemDetails, uomList])

    React.useEffect(() => {
        uomAltList.map((option: any) => {
            if (option.id == defItemDetails.itemaltuom) setDefAltUom(option.value);
        })
    }, [defItemDetails, uomAltList])

    React.useEffect(() => {
        matCanterList.map((option: any) => {
            if (option.id == defItemDetails.itemmatcenter) setDefMatCenter(option.value);
        })
    }, [defItemDetails, matCanterList])

    React.useEffect(() => {
        clearanceList.map((option: any) => {
            if (option.id == defItemDetails.clearance) setDefClearance(option.value);
        })
    }, [defItemDetails, clearanceList])


    React.useEffect(() => {
        valueTypeList.map((option: any) => {
            if (option.id == defItemDetails.valtype) setDefValType(option.value);
        })
    }, [defItemDetails, valueTypeList])

    React.useEffect(() => {
        gstCatList.map((option: any) => {
            if (option.id == defItemDetails.gstcategory) setDefGSTCat(option.value);
        })
    }, [defItemDetails, gstCatList])







    return (
        <>
            <div className="main card firstDiv">

                <div className="text-center card-title col-12" style={{ textAlign: 'start' }}>
                    <span className="row-header p-0 m-0" >{title}</span>
                </div>
                <div className="card-body row col-sm-12 m-0 p-0" >
                    <form className="row-content form col-sm-12 pt-0">
                        <fieldset className="form-group border p-0" >

                            <legend className="px-2" data-toggle="collapse" data-target="#genDetails" aria-expanded="true" aria-controls="genDetails" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Item Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>

                            <div className="collapse show" id="genDetails">
                               

                                <span className="d-flex justify-content-space-evenly flex-row section2 col-sm-12">


                                    <>
                                        <label htmlFor="series" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 labl2">Series</label>
                                    </>
                                    <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                                        <DatalistInput
                                            value={defSeries}
                                            className="d-flex col-12 m-0 p-0"
                                            inputProps={{ className: 'form-control col-12 inp', name: 'series', id: "series", style: {padding: '22px 0 22px 10px', fontSize: '20px' }, placeholder: 'Select series' }}
                                            listboxProps={{ className: 'text-left mt-5' }}
                                            onSelect={(item: any) => handleList(item)}
                                            items={seriesList}
                                        />

                                    </span>
                                  
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="codestr" label="Code" ipTitle="Enter Code" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp str" />
                                </span>


                                <span className="d-flex flex-row section2 col-sm-12">
                                    <MasterInput2 name="name" label="Name" ipTitle="Enter Name" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp " />
                                    <span className="col-1 m-0"></span>

                                    <MasterInput2 name="printname" label="Print Name" ipTitle="Enter Print Name" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp" />
                                   

                                </span>



                              

                                <span className="d-flex justify-content-space-evenly flex-row section2 col-sm-12">


                                    <>
                                        <label htmlFor="itemgrp" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 labl2">Group</label>
                                    </>
                                    <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                                        <DatalistInput
                                            value={defGroup }
                                            className="d-flex col-12 m-0 p-0"
                                            inputProps={{ className: 'form-control col-12 inp', name: 'itemgrp', id: "itemgrp", style: {padding: '22px 0 22px 10px', fontSize: '20px' }, placeholder: 'Select series' }}
                                            listboxProps={{ className: 'text-left mt-5' }}
                                            onSelect={(item: any) => handleList(item)}
                                            items={groupList}
                                        />

                                    </span>

                                    <span className="col-1 m-0"></span>
                                    <>
                                        <label htmlFor="itemtype" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 labl2">Type</label>
                                    </>
                                    <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                                        <DatalistInput
                                            value={defType}
                                            className="d-flex col-12 m-0 p-0"
                                            inputProps={{ className: 'form-control col-12 inp', name: 'type', id: "itemtype", style: {padding: '22px 0 22px 10px', fontSize: '20px' }, placeholder: 'Select series' }}
                                            listboxProps={{ className: 'text-left mt-5' }}
                                            onSelect={(item: any) => handleList(item)}
                                            items={typeList}
                                        />

                                    </span>
                                </span>

                              

                                <span className="d-flex justify-content-space-evenly flex-row section2 col-sm-12">


                                    <>
                                        <label htmlFor="itemcategory" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 labl2">Category</label>
                                    </>
                                    <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                                        <DatalistInput
                                            value={defCat}
                                            className="d-flex col-12 m-0 p-0"
                                            inputProps={{ className: 'form-control col-12 inp', name: 'itemcategory', id: "itemcategory", style: {padding: '22px 0 22px 10px', fontSize: '20px' }, placeholder: 'Select series' }}
                                            listboxProps={{ className: 'text-left mt-5' }}
                                            onSelect={(item: any) => handleList(item)}
                                            items={categoryList}
                                        />

                                    </span>

                                    <span className="col-1 m-0"></span>

                                    <>
                                        <label htmlFor="subcategory" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 labl2">Sub Category</label>
                                    </>
                                    <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                                        <DatalistInput
                                            value={defSubCat}
                                            className="d-flex col-12 m-0 p-0"
                                            inputProps={{ className: 'form-control col-12 inp', name: 'subcategory', id: "subcategory", style: {padding: '22px 0 22px 10px', fontSize: '20px' }, placeholder: 'Select series' }}
                                            listboxProps={{ className: 'text-left mt-5' }}
                                            onSelect={(item: any) => handleList(item)}
                                            items={subCatList}
                                        />

                                    </span>
                                </span>


                              


                                    {/*<MasterInput2 name="opening" label="Open Stock" ipTitle="Enter Open Stock" ipType="text" handleChange={handleChangeField} classCategory="form-control inp double" />*/}
                               
                                <span className="d-flex section2 col-sm-12">


                                    <>
                                        <label htmlFor="itembrand" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 labl2">Brand</label>
                                    </>
                                    <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                                        <DatalistInput
                                            value={defBrand}
                                            className="d-flex col-12 m-0 p-0"
                                            inputProps={{ className: 'form-control col-12 inp', name: 'itembrand', id: "itembrand", style: {padding: '22px 0 22px 10px', fontSize: '20px' }, placeholder: 'Select Brand' }}
                                            listboxProps={{ className: 'text-left mt-5' }}
                                            onSelect={(item: any) => handleList(item)}
                                            items={brandList}
                                        />

                                    </span>
                                    {/*<MasterInput2 name="Series" label="Series" ipTitle="Enter Series" ipType="text" classCategory="form-control col-4 inp" />*/}
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="otherDesc" label="Other Desc." ipTitle="Enter sub-category" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp" />
                                </span>



                                <span className="d-flex section2 col-sm-12">
                                    <>
                                        <label htmlFor="c1" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 labl2">Nature</label>
                                    </>
                                    <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                                        <DatalistInput
                                            value={defNature}
                                            className="d-flex col-12 m-0 p-0"
                                            inputProps={{ className: 'form-control col-12 inp', name: 'c1', id: "c1", style: {padding: '22px 0 22px 10px', fontSize: '20px' }, placeholder: 'Select Narure' }}
                                            listboxProps={{ className: 'text-left mt-5' }}
                                            onSelect={(item: any) => handleList(item)}
                                            items={natureList}
                                        />

                                    </span>
                                    <span className="col-1 m-0"></span>
                                  
                                    <>
                                        <label htmlFor="itemuom" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 labl2">UOM</label>
                                    </>
                                    <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                                        <DatalistInput
                                            value={defUom}
                                            className="d-flex col-12 m-0 p-0"
                                            inputProps={{ className: 'form-control col-12 inp', name: 'itemuom', id: "itemuom", style: {padding: '22px 0 22px 10px', fontSize: '20px' }, placeholder: 'Select Material Center' }}
                                            listboxProps={{ className: 'text-left mt-5' }}
                                            onSelect={(item: any) => handleList(item)}
                                            items={uomList}
                                        />

                                    </span>
                                  

                                </span>
                              
                                <span className="d-flex justify-content-space-evenly flex-row section2 col-sm-12">


                                    <>
                                        <label htmlFor="itemaltuom" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 labl2">Alt UOM</label>
                                    </>
                                    <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                                        <DatalistInput
                                            value={defAltUom}
                                            className="d-flex col-12 m-0 p-0"
                                            inputProps={{ className: 'form-control col-12 inp', name: 'itemaltuom', id: "itemaltuom", style: {padding: '22px 0 22px 10px', fontSize: '20px' }, placeholder: 'Select itemaltuom' }}
                                            listboxProps={{ className: 'text-left mt-5' }}
                                            onSelect={(item: any) => handleList(item)}
                                            items={uomAltList}
                                        />

                                    </span>

                                    <span className="col-1 m-0"></span>
                                    <>
                                        <label htmlFor="itemmatcenter" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 labl2">Material Center</label>
                                    </>
                                    <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                                        <DatalistInput
                                            value={defMatCenter}
                                            className="d-flex col-12 m-0 p-0"
                                            inputProps={{ className: 'form-control col-12 inp', name: 'itemmatcenter', id: "itemmatcenter", style: {padding: '22px 0 22px 10px', fontSize: '20px' }, placeholder: 'Select Material Center' }}
                                            listboxProps={{ className: 'text-left mt-5' }}
                                            onSelect={(item: any) => handleList(item)}
                                            items={matCanterList}
                                        />

                                    </span>
                                </span>



                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="itemconvfact" label="Conv. Fact" ipTitle="Enter Conv Fact" ipType="number" handleChange={handleChangeField} classCategory="form-control col-4 inp decimal" />
                                    <span className="col-1 m-0"></span>
                                  
                                    <>
                                        <label htmlFor="sizedependent" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 labl2">Size Dependent</label>
                                    </>
                                    <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                                        <DatalistInput
                                            value={defItemDetails ? defItemDetails.sizedependent == 1 ? 'Y' : 'N' : '' }
                                            className="d-flex col-12 m-0 p-0"
                                            inputProps={{ className: 'form-control col-12 inp', name: 'sizedependent', id: "sizedependent", style: {padding: '22px 0 22px 10px', fontSize: '20px' }, placeholder: 'Select Size Dependent Center' }}

                                            listboxProps={{ className: 'text-left mt-5' }}
                                            onSelect={(item: any) => handleList(item)}
                                            items={[{ id: 0, value: "N", name: 'sizedependent' }, { id: 1, value: "Y", name: 'sizedependent' }]}
                                        />
                                        <span className="col-1 m-0"></span>
                                        <span className="col-4 m-0"></span>

                                    </span>
                                   
                                </span>
                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 name="ldays" label="Lead Days" ipTitle="Enter Lead Days" ipType="number" handleChange={handleChangeField} classCategory="form-control col-4 inp int" />

                                    <span className="col-1 m-0"></span>

                                 

                                    <>
                                        <label htmlFor="convtype" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 labl2">Conv. Type</label>
                                    </>
                                    <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                                        <DatalistInput
                                            value={defItemDetails ? defItemDetails.convtype : ''}
                                            className="d-flex col-12 m-0 p-0"
                                            inputProps={{ className: 'form-control col-12 inp', name: 'convtype', id: "convtype", style: {padding: '22px 0 22px 10px', fontSize: '20px' }, placeholder: 'Select Conv Type' }}
                                            listboxProps={{ className: 'text-left mt-5' }}
                                            onSelect={(item: any) => handleList(item)}
                                            items={[{ id: "Division", value: "Division", name: 'convtype' }, { id: "Multiplication", value: "Multiplication", name: 'convtype' }]}
                                        />
                                  

                                    </span>

                                </span>
                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="evaltype" label="Eval. Type" ipTitle="Enter Eval. Type" ipType="number" handleChange={handleChangeField} classCategory="form-control col-4 inp int" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="itemwt" label="Net Wt." ipTitle="Enter Net Weight" ipType="number" handleChange={handleChangeField} classCategory="form-control col-4 inp double" />
                                </span>

                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="grosswt" label="Gross Weight" ipTitle="Enter Gross Weight" ipType="number" handleChange={handleChangeField} classCategory="form-control col-4 inp double" />
                                    <span className="col-1 m-0"></span>
                                 
                                    <MasterInput2 name="opening" label="Opn. Stock" ipTitle="Enter Opn. Stock" ipType="number" handleChange={handleChangeField} classCategory="form-control col-4 inp double" />
                                </span>
                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="hsnno" label="HSN/ SA No." ipTitle="Enter HSN" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                  
                                    <>
                                        <label htmlFor="valtype" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 labl2">Val. Type</label>
                                    </>
                                    <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                                        <DatalistInput
                                            value={defValType}
                                            className="d-flex col-12 m-0 p-0"
                                            inputProps={{ className: 'form-control col-12 inp', name: 'valtype', id: "valtype", style: {padding: '22px 0 22px 10px', fontSize: '20px' }, placeholder: 'Select Material Center' }}

                                            listboxProps={{ className: 'text-left mt-5' }}
                                            onSelect={(item: any) => handleList(item)}
                                            items={valueTypeList}
                                        />
                                        <span className="col-1 m-0"></span>
                                        <span className="col-4 m-0"></span>

                                    </span>




                                </span>
                                <span className="d-flex section2 col-sm-12">
                                    <>
                                        <label htmlFor="gstcategory" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 labl2">GST Category</label>
                                    </>
                                    <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                                        <DatalistInput
                                            value={defGstCat}
                                            className="d-flex col-12 m-0 p-0"
                                            inputProps={{ className: 'form-control col-12 inp', name: 'gstcategory', id: "gstcategory", style: {padding: '22px 0 22px 10px', fontSize: '20px' }, placeholder: 'Select Material Center' }}
                                   
                                            listboxProps={{ className: 'text-left mt-5' }}
                                            onSelect={(item: any) => handleList(item)}
                                            items={gstCatList}
                                        />
                                    <span className="col-1 m-0"></span>
                                    <span className="col-4 m-0"></span>

                                    </span>
                                </span>
                            </div>
                        </fieldset>
                    </form>

                    <form className="form col-sm-12 row-content card-body pt-0 pb-0">
                        <fieldset className="form-group border p-0">
                            <legend className="px-2" data-toggle="collapse" data-target="#otherDetails" aria-expanded="false" aria-controls="otherDetails" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Other Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0    96v320c0  35.34 28.65 64 64  64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2    230.7 352 224   352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120   192h208c9.531  0 18.19 5.656   21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>
                            <div id="otherDetails" className="collapse row row-content col-sm-12 addSaleForm container container-fluid container-lg">

                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="saleprice" label="Sale Price" ipTitle="Enter Sale.Price" ipType="number" handleChange={handleChangeField} classCategory="form-control col-4 inp double" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="purprice" label="Purchase Price" ipTitle="Enter Purchase Price" ipType="number" handleChange={handleChangeField} classCategory="form-control col-4 decimal inp" />
                                </span>
                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="sacc" label="Sale Account" ipTitle="Enter Sale.Price" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="pacc" label="Purc. Account" ipTitle="Enter Purchase Price" ipType="text" handleChange={handleChangeField} classCategory="form-control col-4 inp" />

                                </span>

                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="mrp" label="MRP" ipTitle="Enter MRP" ipType="number" handleChange={handleChangeField} classCategory="form-control col-4 inp double" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="mfgcost" label="MFG. Cost" ipTitle="Enter MFG. Cost" ipType="number" handleChange={handleChangeField} classCategory="form-control col-4 double inp" />

                                </span>

                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 name="minstock" label="Min. Stock Level" ipTitle="Enter Min. Stock Level" ipType="number" handleChange={handleChangeField} classCategory="form-control col-4 double inp" />
                                    <span className="col-1 m-0"></span>

                                    <MasterInput2 name="maxstock" label="Max. Stock Level" ipTitle="Enter Max. Stock Level" ipType="number" handleChange={handleChangeField} classCategory="form-control col-4 inp double" />
                                </span>

                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="minqty" label="Min. Supply Qty." ipTitle="Enter Min. Supply Qty." ipType="number" handleChange={handleChangeField} classCategory="form-control col-4 decimal inp" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="reorderpoint" label="Reorder Point" ipTitle="Enter Reorder Point" ipType="number" handleChange={handleChangeField} classCategory="form-control col-4 inp" />

                                </span>
                                <span className="d-flex section2 col-sm-12">
                                    <>
                                        <label htmlFor="clearance" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 labl2">Clearance</label>
                                    </>
                                    <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                                        <DatalistInput

                                            className="d-flex col-12 m-0 p-0"
                                            inputProps={{ className: 'form-control col-12 inp', name: 'clearance', id: "clearance", style: {padding: '22px 0 22px 10px', fontSize: '20px' }, placeholder: 'Select Material Center' }}

                                            listboxProps={{ className: 'text-left mt-5' }}
                                            onSelect={(item: any) => handleList(item)}
                                            items={clearanceList}
                                        />
                                      
                                    </span>

                              
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="itemused" label="Item Used" ipTitle="Enter Item Used" ipType="number" handleChange={handleChangeField} classCategory="form-control col-4 inp double" />

                                </span>
                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="itemlife" label="Item Life(month)" ipTitle="Enter Item Life" ipType="number" handleChange={handleChangeField} classCategory="form-control col-4 int inp" />
                                    <span className="col-1 m-0"></span>
                                    <>
                                        <label htmlFor="costsheetgrp" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 labl2">Cost Sheet Group</label>
                                    </>
                                    <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                                        <DatalistInput

                                            className="d-flex col-12 m-0 p-0"
                                            inputProps={{ className: 'form-control col-12 inp', name: 'costsheetgrp', id: "costsheetgrp", style: {padding: '22px 0 22px 10px', fontSize: '20px' }, placeholder: 'Select Material Center' }}

                                            listboxProps={{ className: 'text-left mt-5' }}
                                            onSelect={(item: any) => console.log(item)}
                                            items={[{}]}
                                        />
                                    </span>

                                </span>

                                
                                <div className="card addSalecard col-sm-12 p-4 mt-4">
                                    <div className="card-body" style={{ margin: '0', padding: '0', minHeight: '36vh' }}>
                                        <form className="form col-sm-12 row-content card-body pt-0 pb-0 px-2">
                                            <span className="d-flex flex-column section2 col-sm-12" style={{ marginLeft: '36px' }}>
                                                <CustomeSwitch lablClass="custom-control-label col-9" label="Is Parameterized" id="c8" name="c8" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChangeField} />
                                                <CustomeSwitch lablClass="custom-control-label col-9" label="Bil Sun" id="c2" name="c2" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChangeField} />
                                                <CustomeSwitch lablClass="custom-control-label col-9" label="QC Applicable" id="c3" name="c3" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChangeField} />
                                                <CustomeSwitch lablClass="custom-control-label col-9" label="Quotation" id="c4" name="c4" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChangeField} />
                                                <CustomeSwitch lablClass="custom-control-label col-9" label="Is Blocked" id="c5" name="c5" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChangeField} />
                                                <CustomeSwitch lablClass="custom-control-label col-9" label="Batch Managed" id="c6" name="c6" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChangeField} />
                                                <CustomeSwitch lablClass="custom-control-label col-9" label="Coupon" id="c7" name="c7" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChangeField} />

                                                <CustomeSwitch lablClass="custom-control-label col-9" label="SV Effected" id="stockeffect" name="stockeffect" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChangeField} />
                                                <CustomeSwitch lablClass="custom-control-label col-9" label="Con. Stock Level" id="consumestock" name="consumestock" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChangeField} />
                                                <CustomeSwitch lablClass="custom-control-label col-9" label="Enter Alternate Item" id="altitem" name="altitem" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChangeField} />
                                                <CustomeSwitch lablClass="custom-control-label col-9" label="Sr. No. On Sale Invoice" id="srnosale" name="srnosale" classCat="form-control custom-control-input col-3 subMaster switch" handleChange={handleChangeField} />
                                                
                                            
                                            </span>

                                        </form>
                                    </div>
                                </div>

                            </div>
                        </fieldset>

                    </form>



                    <hr style={{ margin: '0', padding: '0' }} />


                    <div className="detailsComponent m-0 p-0  col-12">

                    </div>
                </div>
                <hr style={{ margin: '0', padding: '0' }} />
            </div>
            <div className="btn-group col-12 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0" onClick={handleSave$Submit}>Save</button>
                <StockMasterModal />
                <button type="button" style={{ border: '2px solid red', letterSpacing: 3 }} className="btn btn-danger pl-0 pr-0">Quit</button>
            </div>
        </>

    );
}


export default AddItemMaster;