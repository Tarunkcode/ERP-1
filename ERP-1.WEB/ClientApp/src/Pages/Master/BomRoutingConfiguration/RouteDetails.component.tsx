import * as React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { WriteTable } from '../../../components/CustomTable/CustomTable.component';
import BOMModals from '../../../components/Modals/BomModals';
import { AddRow, DeleteRow, getCurrentRowNo } from '../../Helper Functions/table';
import Modal from 'react-modal';

const customStyles : any = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        maxHeight: '100vh',
        minHeight: '100vh',
        overflowX: 'hidden',
        overflowY : 'auto'
    },
};

export default function RouteDetails({ isItemBox, setIsItemBox }: any) {
    let subtitle: any;
  
    let [isBomAltItem, setIsBomAltItem]: any = React.useState(false);
    let [isOtherItem, setIsOtherItem]: any = React.useState(false);


    const OpenAltItemPopUp = (e: any) => {
      
        if (e.keyCode === 13) {
            setIsBomAltItem(true);
        }
    }


    const OpenOtherProduce = (e: any) => {
       
        if (e.keyCode === 13) {
            setIsOtherItem(true);
        }
    }

  
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeItemBox() {
        setIsItemBox(false);
    }
    
    var cons_itemDetils: any[] = [

        {

            'itC': {
                name: 1000, id: "itc", typeBox: 1, dataArray: [], classCat: "form-control inp ", defaultList: [], width: '140px', ipType: 'text', onEnterOpen$RedirectModal: () => { }
            },
            'itN': {
                name: 1100, id: "itN", typeBox: 1, dataArray: [], classCat: "form-control inp ", defaultList: [], width: '400px', ipType: 'text', onEnterOpen$RedirectModal: () => { console.log('hmm') }
            },
            'rt': { name: 1200, id: "rt", typeBox: 1, dataArray: [], classCat: "form-control inp ", defaultList: [], width: '140px', ipType: 'number', onEnterOpen$RedirectModal: () => { console.log('hmm') } },
            'consQty': { name: 1300, id: "consQty", typeBox: 1, dataArray: [], classCat: "form-control inp ", defaultList: [], width: '140px', ipType: 'number', onEnterOpen$RedirectModal: () => { console.log('hmm') } },
            'uom4cons': { name: 1400, id: "uom4cons", typeBox: 1, dataArray: [], classCat: "form-control inp ", defaultList: [], width: '140px', ipType: 'text', onEnterOpen$RedirectModal: () => { console.log('hmm') } },
            'prdcQty': { name: 1500, id: "prdcQty", typeBox: 1, dataArray: [], classCat: "form-control inp ", defaultList: [], width: '140px', ipType: 'number', onEnterOpen$RedirectModal: () => { console.log('hmm') } },
            'uom4prdc': { name: 1600, id: "uom4prdc", typeBox: 1, dataArray: [], classCat: "form-control inp ", defaultList: [], width: '140px', ipType: 'text', onEnterOpen$RedirectModal: () => { console.log('hmm') } },
            'cst': { name: 1700, id: "cst", typeBox: 1, dataArray: [], classCat: "form-control inp ", defaultList: [], width: '140px', ipType: 'number', onEnterOpen$RedirectModal: () => { console.log('hmm') } },
            'altItm': {
                name: 1800, id: "altUm", typeBox: 1, dataArray: [], classCat: "form-control inp ", defaultList: [], width: '140px', ipType: 'text', onEnterOpen$RedirectModal: OpenAltItemPopUp
            }
        
        }
    ]



    var prdc_itmDetails: any[] = [

        //[{ field: 'itC', header: "Item Code" }, { field: 'itmName', header: "Item Name" }, { field: 'qty', header: "Quantity" }, { field: 'uom', header: "UOM" }, , { field: 'rat', header: "Rate" }, { field: 'cst', header: "Cost" }, { field: 'OPI', header: "Other Produce Item" }]
        {

            'itC': { name: 1900, id: "itC", typeBox: 1, dataArray: [], classCat: "form-control inp ", defaultList: [], width: '140px', ipType: 'text', onEnterOpen$RedirectModal: () => { } },
            'itmName': {  name: 2000, id: "itmName", typeBox: 1, dataArray: [], classCat: "form-control inp ", defaultList: [], width: '400px', ipType: 'text', onEnterOpen$RedirectModal: () => { console.log('hmm') } },
            'qty': { name: 2100, id: "qty", typeBox: 1, dataArray: [], classCat: "form-control inp ", defaultList: [], width: '140px', ipType: 'number', onEnterOpen$RedirectModal: () => { console.log('hmm') } },
            'uom': { name: 2200, id: "uom", typeBox: 1, dataArray: [], classCat: "form-control inp ", defaultList: [], width: '140px', ipType: 'text', onEnterOpen$RedirectModal: () => { console.log('hmm') } },
            'rat': { name: 2300, id: "rat", typeBox: 1, dataArray: [], classCat: "form-control inp ", defaultList: [], width: '140px', ipType: 'number', onEnterOpen$RedirectModal: () => { console.log('hmm') } },
            'cst': { name: 2400, id: "cst", typeBox: 1, dataArray: [], classCat: "form-control inp ", defaultList: [], width: '140px', ipType: 'number', onEnterOpen$RedirectModal: () => { console.log('hmm') } },
            'OPI': { name: 2500, id: "OpI", typeBox: 1, dataArray: [], classCat: "form-control inp ", defaultList: [], width: '140px', ipType: 'text', onEnterOpen$RedirectModal: OpenOtherProduce  }

        }
    ]

    var [consumeItem, setConsumeItem]: any[] = useState(cons_itemDetils)
    var [produceItem, setProduceItem]: any[] = useState(prdc_itmDetails)
    return (
        <>
            {
                isBomAltItem ? (<BOMModals isCopy={false} isBomAltItem={isBomAltItem} isOtherItem={isOtherItem} setIsOtherItem={setIsOtherItem} setIsBomAltItem={setIsBomAltItem} />) : null
            }
            {
                isOtherItem ? (<BOMModals isCopy={false} isBomAltItem={isBomAltItem} isOtherItem={isOtherItem} setIsOtherItem={setIsOtherItem} setIsBomAltItem={setIsBomAltItem} />) : null
            }
                <Modal
            isOpen={isItemBox}
            onAfterOpen={afterOpenModal}
                onRequestClose={closeItemBox}
                style={customStyles}
            contentLabel="Example Modal"
        >
     <>
                <div className="row row-content section2 d-flex justify-content-end col-sm-12">
                    <svg className="m-0 ml-1 p-0" type="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={closeItemBox} style={{ width: '30px', cursor: 'pointer' }}><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z" /></svg>
                </div>
                <hr />
            <div className="card col-12 p-3 pt-0" style={{ overflow:'auto' }}>

                    <div className="text-center col-12" style={{ textAlign: 'start', backgroundColor: "lightsteelblue" }}>
                    <span className="row-header p-0 m-0" >BOM Process Item Details</span>
                </div>
               
                <div className="card-body row col-sm-12 m-0 p-0" >
                    <form className="row-content form col-sm-12 pt-0">
                        <fieldset className="form-group border p-0" >
                            <legend className="px-2" data-toggle="collapse" data-target="#genDetails" aria-expanded="false" aria-controls="genDetails" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Item Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>

                            <div className="collapse show" id="genDetails">
                                <span className="d-flex section2 col-sm-12">
                                    <>
                                        <label htmlFor="series" style={{ fontSize: '1rem' }} className="form-label labl labl2">Item Name</label>
                                        <input type="text" name="series" className="form-control inp" />
                                    </>
                                    <>
                                        <label htmlFor="majProd" style={{ fontSize: '1rem' }} className="form-label labl labl2">UOM</label>
                                        <input type="text" name="payTerm" className="form-control inp" />
                                    </>
                                    <>
                                        <label htmlFor="majProd" style={{ fontSize: '1rem' }} className="form-label labl labl2">Process</label>
                                        <input type="date" name="payTerm" className="form-control inp" />
                                    </>
                                </span>

                                <span className="d-flex section2 col-sm-12">
                                    <>
                                        <label htmlFor="series" style={{ fontSize: '1rem' }} className="form-label labl labl2">Satge No.</label>
                                        <input type="text" name="custCode" className="form-control inp" />
                                    </>
                                    <>
                                        <label htmlFor="series" style={{ fontSize: '1rem' }} className="form-label labl labl2">Quantity</label>
                                        <input type="text" name="custName" className="form-control inp" />
                                    </>
                                    <>
                                        <label htmlFor="majProd" style={{ fontSize: '1rem' }} className="form-label labl labl2">Overhead Amt.</label>
                                        <input type="date" name="payTerm" className="form-control inp" />
                                    </>
                                   
                                </span>

                                <span className="d-flex section2 col-sm-12">
                                    <>
                                        <label htmlFor="series" style={{ fontSize: '1rem' }} className="form-label labl labl2">Rate</label>
                                        <input type="text" name="custName" className="form-control inp" />
                                    </>
                                  <span className="col-8"></span>

                                </span>

                                
                          

                            </div>
                        </fieldset>
                    </form>


                    <hr style={{ margin: '0', padding: '0' }} />
                 

                        <WriteTable
                            HandleIpSelect={() => { }}
                            firstCol="Sr.No."
                            getCurrentRowNo={getCurrentRowNo}
                            addRowFunc={AddRow}
                            deleteRowFunc={DeleteRow}
                            titleClr="lightsteelblue"

                            tableProps={cons_itemDetils}
                            setRowFunc={setConsumeItem}
                            columns={[{ field: 'itC', header: "Item Code" }, { field: 'itN', header: "Item Name" }, { field: 'rt', header: "Rate" }, { field: 'consQty', header: "Consume Quantity" }, , { field: 'uom4cons', header: "UOM" }, { field: 'prdcQty', header: "Produce Quantity" }, { field: 'uom4prdc', header: "UOM" }, { field: 'cst', header: "Cost" }, { field: 'altItm', header: "Alt Item" }]}
                            dataArr={consumeItem}
                            title="Consumed Item Details"
                        />

                        <hr style={{ margin: '0', padding: '0' }} />


                        <WriteTable
                            HandleIpSelect={() => { }}
                            firstCol="Sr.No."
                            getCurrentRowNo={getCurrentRowNo}
                            addRowFunc={AddRow}
                            deleteRowFunc={DeleteRow}
                            titleClr="lightsteelblue"
                            tableProps={prdc_itmDetails}
                            setRowFunc={setProduceItem}
                            columns={[{ field: 'itC', header: "Item Code" }, { field: 'itmName', header: "Item Name" }, { field: 'qty', header: "Quantity" }, { field: 'uom', header: "UOM" }, , { field: 'rat', header: "Rate" }, { field: 'cst', header: "Cost" }, { field: 'OPI', header: "Other Prod." }]}
                            dataArr={produceItem}
                            title="Produce Item Details"
                        />
             
                </div>
             </div>
              
                    <hr style={{ margin: '0', padding: '0' }} />
              
                    <button type="button" style={{ border: '2px solid #42ba96', letterSpacing: 3 }} className="btn btn-success p-2 m-3 col-1">Save</button>
                <><NavLink to="/add-bom-routing-configuration-master" ><button type="button" style={{ border: '2px solid red', letterSpacing: 3 }} className="btn btn-danger p-2 m-3 col-1">Quit</button></NavLink></>
                  
               
            </>
            </Modal>
           </>
        )
    
}