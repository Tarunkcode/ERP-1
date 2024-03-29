﻿import { param } from 'jquery';
import * as React from 'react';
import './add-sale-order.styles.css';

const AddSaleOrder = () => {

    var getSoSeries = window.sessionStorage.getItem('so-series');
    var getAccName = window.sessionStorage.getItem('acc-name');
    
    var [itemCodeArr, setItemCodeArr]: any = React.useState([]);
    var [masterDetails, setMasterDetails]: any = React.useState([]);
    var [changeItemCode, setChangeItemCode]: any = React.useState('');
    var [itemDetails, setItemDetails]: any = React.useState([]);
  
    const itemCodeUrl = "http://103.197.121.188:85/api/values/GetItemMaster?itemgroup=265&Itembrand=0&Itemcategory=0&Itemsubcategory=0&itemtype=0&itemgrptype=0&Comp=comp0015&FY=2021";

    const itemDetailsUrl = "http://103.197.121.188:85/api/values/getitemDetails"
    var params2: any = [];
    params2.push(`item=${changeItemCode}`);
    params2.push('comp=comp0015')
    params2.push('fy=2021')

        const partyCodeUrl = "http://103.197.121.188:85/api/values/GetAccountMasterDetails"
        var params: any = [];

        params.push(`partyName=${getAccName}`)
        params.push('comp=comp0015')
        params.push('fy=2021')

    //Fetch Item COde 
    const fetchItemCodeArr = async () => {
            try {
                const response = await fetch(itemCodeUrl);
                const json = await response.json();
                if (json.Status == 1) {
                    
                    setItemCodeArr(json.Data);
                    console.log('ItemCodeArr', itemCodeArr);
                  

                } else {
                    console.log("ItemCodeArr has no data");
                }


            } catch (error) {
                console.log("error", error);
            }
    };

    //Fetch MasterDetails
    const fetchMasterDetails = async () => {
        try {
            const response2 = await fetch(partyCodeUrl + '?' + params.join('&'));
            const json2 = await response2.json();
            if (json2.Status == 1) {

                setMasterDetails(json2.Data[0]);
                console.log('master-details', masterDetails);


            } else {
                console.log("Master Details has no data");
            }


        } catch (error) {
            console.log("error", error);
        }
    };
    React.useEffect(() => {
        fetchItemCodeArr()
        fetchMasterDetails()

    }, [itemCodeArr.length, masterDetails.length]);

    React.useEffect(() => {
        handleSetItemCode
        console.log('SelecteditemCode', changeItemCode)
        fetchItemDetails()
    }, [changeItemCode, itemDetails.length])

    //fetch item Details
    const fetchItemDetails = async () => {
        if (changeItemCode != '') {

            try {
                const response3 = await fetch(itemDetailsUrl + '?' + params2.join('&'));
                const json3 = await response3.json();
                if (json3.Status == 1) {

                    setItemDetails(json3.Data);
                    console.log('item-details', itemDetails)

                } else {
                    console.log("Item Details has no data");
                }
            }
            catch (error) {
                console.log("error", error);
            }
        }
    }

    const handleSetItemCode = (e: any) => {
        var CHANGEITEMCODE = e.target.value
        console.log('itemCode', CHANGEITEMCODE)
        for (let i = 0; i < itemCodeArr.length; i++) {
            if (CHANGEITEMCODE == itemCodeArr[i].ITEMNAME) {
                setChangeItemCode(itemCodeArr[i].ITEMCODE)
                break;
            }
        }
       
    }

    return (
        <div style={{margin:'0 -9em'}}>
           

            <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                <div className="row row-content col-sm-12" style={{ display: 'flex', justifyContent: 'center', alignItems:'center',  backgroundColor: '#8389d4', margin: '10px 0 0 0', padding: '0' }}>
                
                    <span className="card-title" style={{
                        fontSize: '15px', color: 'white', fontWeight: 900, padding:'0',
                        margin: '0' }}>Add Sale Order</span>
                   
                </div>
                <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                <div className="card addSalecard">
                    <div className="card-body" style={{margin:'0', padding:'0'}}>
                        <form className="form">


                            <span className="form-group col-sm-12" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin:'0', padding:'10px 2px' }}>
                                <label style={{ margin: '0 30px 0 5px', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="series">Series</label>
                                <span style={{ color: 'red', fontWeight: 'bold', fontSize: '15px', margin: '0', padding: '0'}}>{getSoSeries}</span>
                            </span>

                            <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' }}>
                                <> <label style={{ margin: '0', padding: '0', fontSize: '14px'}} className="form-label col-sm-2" htmlFor="so-date">SO Date</label>
                                <input className="form-control col-sm-3" type="text" name="so-date" /></>

                                <> <label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="so-no">So No.</label>
                                <input className="form-control col-sm-3" type="text" name="so-no" /></>
                            </span>

                            <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' }}>
                                <><label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="del-date">Del. Date</label>
                                <input className="form-control col-sm-3" type="date" name="del-date" /></>

                                <> <label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="del-date">Del. Exp. Date</label>
                                <input className="form-control col-sm-3" type="date" name="del-date" /></>
                            </span>

                            <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '10px 0'  }}>
                                <> <label style={{ margin: '0 30px 0 5px', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="sold-to">Sold To</label>
                                    <input className="form-control col-sm-3" type="text" name="sold-to" value={getAccName!} readOnly /> </>
                                    <> <label style={{ margin: '0 30px 0 18px', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="address">Address</label>
                                        <input className="form-control col-sm-3" type="text" name="address" value={masterDetails.ADDRESSNAME} readOnly /></>
                            </span>
                         
                         </form>
                    </div>
            
                </div>

                <div className="card addSalecard">
                   
                    <div className="card-body" style={{ margin: '0', padding:'0' }}>
                        <form className="form">


                            <span className="form-group col-sm-12" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0'  }}>

                                    <> <label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="delievery-terms">Del. Terms</label>
                                        <input className="form-control col-sm-3" type="text" name="delievery-terms" value={masterDetails.DELTERM} readOnly /></>

                                <> <label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="open-po">Open P.O</label>
                                    <input className="form-control col-sm-3" type="text" name="open-po" /></>
                            </span>


                            <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0'  }}>
                                    <><label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="payment-terms">Pay. Terms</label>
                                        <input className="form-control col-sm-3" type="text" name="payment-terms" value={masterDetails.PAYTERM } readOnly /></>

                                <> <label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="upload-po">Upload P.O</label>
                                    <input className="form-control col-sm-3" type="text" name="upload-po" /></>
                            </span>


                            <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0'  }}>
                                <> <label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="currency">Currency</label>
                                    <input className="form-control col-sm-3" type="text" name="currency" /></>
                                    <><label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="sale-type">Sale Type</label>
                                        <input className="form-control col-sm-3" type="text" name="sale-type" readOnly value={masterDetails.TAXNAME} /></>
                               

                             
                            </span>


                            <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '10px 0'  }}>
                                <> <label style={{ margin: '0 30px 0 5px', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="po-no">Po. No.</label>
                                <input className="form-control col-sm-3" type="text" name="po-no" /></>
                            </span>


                        </form>
                    </div>

                </div>
                </div>
            
            </div>
            <div className="card-footer row row-content col-sm-12 form-group" style={{ margin: '0', padding: '0' }}>
                <label style={{ margin: '0' }} className='col-sm-1 label-control'>Type</label><input style={{ margin: '0' }} type="text" className='form-control col-sm-1' value={masterDetails.CUSTTYPE} readOnly />


                <label style={{ margin: '0' }} className='col-sm-1 label-control'>State</label><input style={{ margin: '0'}} type="text" className='form-control col-sm-1' value={masterDetails.STATENAME} readOnly />

                <label style={{ margin: '0' }} className='col-sm-2 label-control'>Scheme Enable</label><input style={{ margin: '0'}} type="text" className='form-control col-sm-1' value={masterDetails.SCHEME} readOnly/>

                <label style={{ margin: '0' }} className='col-sm-2 label-control'>Pay Status</label><input style={{ margin: '0' }} type="text" className='form-control col-sm-1' value={masterDetails.PAYTO} readOnly />


                <label style={{ margin: '0' }} className='col-sm-1 label-control'>Dis %</label><input style={{ margin: '0' }} type="text" className='form-control col-sm-1' />
               
            </div>

            <hr style={{ border: '2px solid grey', opacity: '0.5' }} />


            <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                <div className="card">

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding:'0' }}>
                        <span className="card-title" style={{ fontSize: '15px', color: 'white', fontWeight: 900, margin:'0', padding:'0' }}>Line Item Details</span>
                    </div>
                      
                    <div className="table-responsive" style={{ padding: '0' }}>
                      
                        <table className="table table-striped table-bordered table-hover table-sm" style={{margin:'0'}}>
                        <thead className="thead-light table-secondary">
                                <tr>
                                    <th scope="col">S.No.</th>
                                    <th scope="col col-sm-3"><span>Item Code</span></th>


                                    <th scope="col"><span>Item Name</span></th>


                                    <th scope="col"><span>Quantity</span></th>
                                    <th scope="col"><span>Uom</span></th>
                                    <th scope="col"><span>MRP</span></th>
                                    <th scope="col"><span>Basic Rate</span></th>
                                    <th scope="col"><span>Sale Rate</span></th>
                                    <th scope="col"><span>Amount Rate</span></th>
                                    <th scope="col"><span>Dis %</span></th>
                                    <th scope="col"><span>Dis. Sale Rate</span></th>
                                    <th scope="col"><span>Dis (Rs)</span></th>
                                    <th scope="col"><span>Amount</span></th>
                                    <th scope="col"><span>S.Dis(%)</span></th>
                                    <th scope="col"><span>S.Dis Amt</span></th>
                                    <th scope="col"><span>Amount</span></th>
                                    <th scope="col"><span>GST (%)</span></th>
                            </tr>
                            </thead>
                        <tbody>

                            <tr>
                                <th scope="row">1</th>
                                    <td className="item-code">
                                        <input style={{ margin: '0', padding: '0', width: '100%' }} className="form-control" list="itemCodeList" type="text" id="cell-ItemCode" onChange={handleSetItemCode} />
                                        {
                                            itemCodeArr != null && itemCodeArr.length > 0 ?

                                                (
                                                    <datalist className='item-code-list' id='itemCodeList'>
                                                        {
                                                            itemCodeArr.map((obj: any) => {
                                                                return <option data-value={obj.ITEMCODE}>{obj.ITEMNAME}</option>
                                                            })
                                                        }


                                                    </datalist>

                                                )

                                                : null


                                        }
                          
                                    </td>
                                   
                                  
                                    {
                                        itemDetails.map((item: any) => {
                                        return (
                                       
                                            <>
                                         <td></td>
                                         <td><input type="text" className="form-control"/></td>
                                         <td>{ item.UOMNAME}</td>
                                         <td>{ item.MRP}</td>
                                         <td></td>
                                         <td></td>
                                         <td></td>
                                         <td></td>
                                         <td></td>
                                         <td></td>
                                         <td>{item.CGST }</td>
                                         <td>{item.SGST}</td>
                                         <td>{ item.SALEPRICE}</td>
                                         <td>{item.IGST }</td>
                                         <td>{item.GSTCAT }</td>
                                         </>
                                            );
                                        }
                                        )}

                                       
                                          
                            
                                
                                </tr>
                              
                        </tbody>
                    </table>
                  </div>
                </div>
                
            </div>

            <hr style={{ border: '2px solid grey', opacity: '0.5' }} />

            <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                <div className="card">
                   
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding:'0' }}>
                        <span className="card-title" style={{ fontSize: '15px', color: 'white', fontWeight: 900, margin: '0', padding:'0' }}>Bill Sundry Details</span>
                    </div>
                    <div className="card-body table-responsive" style={{margin:'0', padding:'0'}}>
                        <table className="table table-striped table-bordered table-hover table-sm" style={{margin:'0'}}>
                        <thead className="thead-light table-secondary">
                            <tr>
                                <th>S. No</th>
                                <th>Bill Sundary</th>
                                <th>Narration</th>
                                <th>@</th>
                               
                                <th>Amount (₹)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td></td>
                                <td></td>
                                <td></td>
                               
                                <td></td>
                            </tr>
                        </tbody>
                </table>
                </div>
                </div>
                <div className="card">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding:'0' }}>
                        <span className="card-title" style={{ fontSize: '15px', color: 'white', fontWeight: 900, margin:'0', padding:'0' }}>HSN Details</span>
                    </div>
                    
                    <div className="table-responsive card-body" style={{margin:'0', padding:'0'}}>
                        <table className="table table-striped table-bordered table-hover table-sm" style={{margin:'0'}}>
                            <thead className="thead-light table-secondary">
                                <tr>
                                    <th>S. No</th>
                                    <th>HSN No.</th>
                                    <th>Quantity</th>
                                    <th>UOM</th>
                                    <th>Tot. Amt</th>
                                    <th>Taxable Amt.</th>
                                    <th>GST %</th>
                                    <th>IGST Amt</th>
                                    <th>GST</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr> 
                            </tbody>
                        </table>
                           
                          
                </div>
                       <div style={{display: 'flex', flexDirection: 'row', justifyContent:'center', alignItems:'center', width:'50%' }}>
                            <button className="hsn-btn btn btn-sm btn-primary">Scheme Apply</button>
                            <button style={{margin:'0 10px'}} className="hsn-btn btn btn-sm btn-secondary">Save</button>
                            <button style={{margin:'0 10px'}} className="hsn-btn btn btn-sm btn-success">Save & Submit</button>
                            <button className="hsn-btn btn btn-sm btn-danger">Quit</button>
                       </div>
            </div>
                </div>
           
        </div>
    )
}
export default AddSaleOrder;