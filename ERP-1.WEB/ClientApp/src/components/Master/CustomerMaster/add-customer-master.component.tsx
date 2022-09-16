import * as React from 'react';
import CustomButton from '../../custom-button/custom-button.component';
import '../masterStyle.css';
import Test from '../../test';

interface IState {
    opn : string;
}
class AddCustomerMaster extends React.Component<{}, IState> {
    
    constructor(props: any) {
        super(props);

        this.state = {
            opn: 'Corporate'
        };
    }
    
    
    handleAddressOptions = (event: any) => {
        event.preventDefault();

        this.setState({
            opn : event.target.value
            
        }) 
    
       
    }
    render() {
        return (
            <>
                
            <div className="main card firstDiv" >

                <div className="text-center card-title col-12" style={{ textAlign: 'start', backgroundColor: '#8389d4' }}>
                        <span className="row-header p-0 m-0" >Add Customer Master</span>
                </div>
                <div className="card-body row col-sm-12 m-0 p-0" >
                        <form className="row-content form col-sm-12 pt-0">
                        <fieldset className="form-group border p-0" >
                            <legend className="px-2" data-toggle="collapse" data-target="#genDetails" aria-expanded="true" aria-controls="genDetails" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>General Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>

                            <div className="show" id="genDetails">
                            <span className="d-flex section2 col-sm-12">
                                <>
                                            <label htmlFor="series" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Series</label>
                                            <input type="text" name="series" className="form-control inp" title="filled series" />
                                            <Test isSeriesMaster={true} isOpeningStock={false }/>
                                </>
                                <>
                                    <label htmlFor="majProd" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Major Products</label>
                                            <input type="text" name="majProd" className="form-control inp" title="Enter Series" />
                                            <svg className="m-0 ml-1 p-0" style={{ width: '20px', cursor: 'pointer', visibility: 'hidden' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" /></svg>
                                        </>
                                        <>
                                            <label htmlFor="zone" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Ledger Type</label>
                                            <input type="text" name="zone" className="form-control inp" title="Enter Ledger Type" />
                                            <svg className="m-0 ml-1 p-0" style={{ width: '20px', cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M120 256c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm160 0c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm104 56c-30.9 0-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56s-25.1 56-56 56z" /></svg>
                                        </>
                            </span>

                            <span className="d-flex section2 col-sm-12">
                                <>
                                            <label htmlFor="series" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Customer Code</label>
                                            <input type="text" name="custCode" className="form-control inp" title="Customer Cde" />
                                            <svg className="m-0 ml-1 p-0" style={{ width: '20px', cursor: 'pointer', visibility: 'hidden' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" /></svg>
                                </>
                                <>
                                            <label htmlFor="majProd" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Delivery Term</label>
                                            <input type="text" name="delTerm" className="form-control inp" title="Delivery Terms" />
                                            <svg className="m-0 ml-1 p-0" style={{ width: '20px', cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M120 256c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm160 0c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm104 56c-30.9 0-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56s-25.1 56-56 56z" /></svg>
                                 </>
                                <>
                                            <label htmlFor="mulCurr" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Multi Currency</label>
                                            <select name="mulCurr" className="form-control inp" style={{ height: '25px'}} title="Mul. Currency" >
                                                <option value="1">Y</option>
                                                <option value="0">N</option>
                                            </select>
                                            <svg className="m-0 ml-1 p-0" style={{ width: '20px', cursor: 'pointer', visibility: 'hidden' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" /></svg>
                                     
                                 </>
                            </span>

                            <span className="d-flex section2 col-sm-12">
                                <>
                                            <label htmlFor="series" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Customer Name</label>
                                            <input type="text" name="custName" className="form-control inp" title="Customer Name" />
                                            <svg className="m-0 ml-1 p-0" style={{ width: '20px', cursor: 'pointer', visibility: 'hidden' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" /></svg>
                                </>
                                <>
                                            <label htmlFor="majProd" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Payment Term</label>
                                            <input type="text" name="payTerm" className="form-control inp" title="Payment Terms" />
                                            <svg className="m-0 ml-1 p-0" style={{ width: '20px', cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M120 256c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm160 0c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm104 56c-30.9 0-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56s-25.1 56-56 56z" /></svg>
                                        </>

                                            <div className="col-4"></div>

                            </span>

                            <span className="d-flex section2 col-sm-12">
                                <>
                                            <label htmlFor="series" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Print Name</label>
                                            <input type="text" name="printName" className="form-control inp" title="Print Name" />
                                            <svg className="m-0 ml-1 p-0" style={{ width: '20px', cursor: 'pointer', visibility: 'hidden' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" /></svg>
                                </>
                                <>
                                            <label htmlFor="majProd" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Opening Balance</label>
                                            <input type="text" name="opnBal" className="form-control" style={{width:'18%'}} title="Opening Balance" />
                                            <select className="form-control ml-1" style={{
                                                width: '4%',
                                                height: '25px',
                                                padding: '0px'}}>
                                                <option>D(-)</option>
                                                <option>C(+)</option>
                                            </select>
                                        </>
                                        <div className="col-4"></div>

                            </span>

                            <span className="d-flex section2 col-sm-12">
                                <>
                                            <label htmlFor="series" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Customer Group</label>
                                            <input type="text" name="custGrp" className="form-control inp" title="Customer Group" />
                                            <svg className="m-0 ml-1 p-0" style={{ width: '20px', cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M120 256c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm160 0c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm104 56c-30.9 0-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56s-25.1 56-56 56z" /></svg>
                                </>
                               <>
                                            <label htmlFor="series" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Credit Limit</label>
                                            <input type="text" name="custGrp" className="form-control inp" title="Customer Group" />
                                            <svg className="m-0 ml-1 p-0" style={{ width: '20px', cursor: 'pointer', visibility: 'hidden' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" /></svg>
                                </>
                               <>
                                            <label htmlFor="series" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Days Amount</label>
                                            <input type="text" name="custGrp" className="form-control inp" title="Customer Group" />
                                            <svg className="m-0 ml-1 p-0" style={{ width: '20px', cursor: 'pointer', visibility: 'hidden' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" /></svg>
                                </>
                               
                                       
                            </span>
                            </div>
                          </fieldset>
                    </form>
                        <div className="row row-content col-12 " style={{ margin: '1em 0%', backgroundColor: 'whitesmoke' }}>
                            <span className="d-flex align-items-center m-0 p-0">
                                <>
                                    <label htmlFor="1payDate" style={{ fontSize: '0.8em', width: '100%', marginLeft: '2em' }} className="form-label">First Payment Date</label>
                                    <input className="form-control" name="1payDate" type="date"  />
                                    <svg className="m-0 ml-1 p-0" style={{ width: '20px', cursor: 'pointer', visibility: 'hidden' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" /></svg>

                                </>

                                <>
                                    <label htmlFor="daysFreq" style={{ fontSize: '0.8em', width: '100%', marginLeft: '2em' }} className="form-label ">Days Frequency</label>
                                    <input type="text" name="daysFreq" className="form-control" title="Days Frequency" />
                                    <svg className="m-0 ml-1 p-0" style={{ width: '20px', cursor: 'pointer', visibility: 'hidden' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" /></svg>
                                </>



                            </span>
                        </div>
                        <form className="form col-sm-12 row-content card-body pt-0 pb-0">
                             <fieldset className="form-group border p-0">
                                 <legend className="px-2" data-toggle="collapse" data-target="#personalDet" aria-expanded="false" aria-controls="personalDet"  style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Personal Details<svg className="ml-1" style=    {{ width: '15px' }}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0    96v320c0  35.34 28.65 64 64  64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2    230.7 352 224   352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120   192h208c9.531  0 18.19 5.656   21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>
                                     <div className="collapse" id="personalDet">
                                    
                                <span className="d-flex section2 col-sm-12">
                                <>
                                            <label htmlFor="contPerson" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Cont. Person</label>
                                            <input type="text" name="contPerson" className="form-control inp" title="Enter Contractor Person" />
                                            <svg className="m-0 ml-1 p-0" style={{ width: '20px', cursor: 'pointer', visibility: 'hidden'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" /></svg>
                                </>

                                <>
                                            <label htmlFor="TelNo" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Tel No.</label>
                                            <input type="text" name="TelNo" className="form-control inp" title="Tel No." />
                                            <svg className="m-0 ml-1 p-0" style={{ width: '20px', cursor: 'pointer', visibility: 'hidden' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" /></svg>
                                </>

                              
                            </span>
                                    
                                <span className="d-flex section2 col-sm-12">
                                <>
                                            <label htmlFor="desg" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Designation</label>
                                            <input type="text" name="desg" className="form-control inp" title="Enter Designation" />
                                            <svg className="m-0 ml-1 p-0" style={{ width: '20px', cursor: 'pointer', visibility: 'hidden'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" /></svg>
                                </>

                                <>
                                            <label htmlFor="mob" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Mobile</label>
                                            <input type="text" name="mob" className="form-control inp" title="Enter Mobile No." />
                                            <svg className="m-0 ml-1 p-0" style={{ width: '20px', cursor: 'pointer', visibility: 'hidden' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" /></svg>
                                </>
                            </span>
                                    
                                <span className="d-flex section2 col-sm-12">
                                <>
                                            <label htmlFor="cheifExe" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Cheif Executive</label>
                                            <input type="text" name="cheifExe" className="form-control inp" title="Chief Exec." />
                                            <svg className="m-0 ml-1 p-0" style={{ width: '20px', cursor: 'pointer', visibility: 'hidden' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" /></svg>
                                </>

                                {/*<>*/}
                                {/*            <label htmlFor="fax" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Fax</label>*/}
                                {/*            <input type="text" name="fax" className="form-control inp" title="First Payment Date"/>*/}
                                {/*</>*/}
                            </span>
                                    
                                <span className="d-flex section2 col-sm-12">
                                <>
                                            <label htmlFor="cheifExeTelNo" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Cheif Exe Tel No.</label>
                                            <input type="text" name="cheifExeTelNo" className="form-control inp" title="Chief Exe. Tel. No." />
                                            <svg className="m-0 ml-1 p-0" style={{ width: '20px', cursor: 'pointer', visibility: 'hidden' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" /></svg>
                                </>

                                <>
                                            <label htmlFor="email" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Email</label>
                                            <input type="text" name="email" className="form-control inp" title="Enter Email" />
                                            <svg className="m-0 ml-1 p-0" style={{ width: '20px', cursor: 'pointer', visibility: 'hidden' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" /></svg>
                                </>
                                </span>
                                 
                                     </div>
                             </fieldset>
                    </form>
                        <div className="row row-content col-12 " style={{ margin: '1em 0%', backgroundColor: 'whitesmoke' }}>
                            <span className="d-flex align-items-center m-0 p-0">
                                <>
                                    <label htmlFor="zone" style={{ fontSize: '0.8em', width: '100%', marginLeft: '2em' }} className="form-label">Address. Options</label>
                                    <select name="zone" className="form-control" onChange={this.handleAddressOptions} >

                                        <option style={{   fontFamily: "trebuc"}} value="Corporate" selected >Corporate</option>
                                        <option style={{ fontFamily: "trebuc" }} value="Plant">Plant</option>
                                        <option style={{ fontFamily: "trebuc" }} value="Shipping">Shipping</option>
                                    </select>
                                    <svg className="m-0 ml-1 p-0" style={{ width: '20px', cursor: 'pointer', visibility: 'hidden'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" /></svg>

                                </>
                              
                               
                             
                            </span>
                        </div>
                        <div style={{ margin: '0', width: '100%', padding: '0' }} id="addres">

                        <form className="form col-sm-12 row-content card-body pt-0">
                          
                            <fieldset className="form-group border p-0">
                                    <legend className="px-2" data-toggle="collapse" data-target="#contAdd" aria-expanded="false" aria-controls="personalDet" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>{this.state.opn}<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0    96v320c0  35.34 28.65 64 64  64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2    230.7 352 224   352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120   192h208c9.531  0 18.19 5.656   21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>
                                  
                                    {
                                        this.state.opn == "Corporate"?(
                            <div className="collapse" id="contAdd">

                                <span className="d-flex section2 col-sm-10">
                                    <>
                                            <label htmlFor="add" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Address</label>
                                                        <input type="text" name="add" className="form-control inp" title="Enter Address" />
                                                        <svg className="m-0 ml-1 p-0" style={{ width: '20px', cursor: 'pointer', visibility: 'hidden' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" /></svg>
                                    </>
                                    <>
                                            <label htmlFor="zone" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Zone</label>
                                                        <input type="text" name="zone" className="form-control inp" title="Enter Zone" />
                                                        <svg className="m-0 ml-1 p-0" style={{ width: '20px', cursor: 'pointer', visibility: 'hidden' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" /></svg>
                                    </>
                                    <>
                                            <label htmlFor="city" style={{ fontSize: '0.8em' }} className="form-label labl labl2">City</label>
                                                        <input type="text" name="city" className="form-control inp" title="Enter City Name" />
                                                        <svg className="m-0 ml-1 p-0" style={{ width: '20px', cursor: 'pointer', visibility: 'hidden' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" /></svg>
                                    </>


                                  
                                </span>

                                <span className="d-flex section2 col-sm-10">
                                    <>
                                            <label htmlFor="state" style={{ fontSize: '0.8em' }} className="form-label labl labl2">State</label>
                                                        <input type="text" name="state" className="form-control inp" title="Enter Your State" />
                                                        <svg className="m-0 ml-1 p-0" style={{ width: '20px', cursor: 'pointer', visibility: 'hidden'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" /></svg>
                                    </>
                                    <>
                                            <label htmlFor="country" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Country</label>
                                                        <input type="text" name="country" className="form-control inp" title="Enter Country You Belongs" />
                                                        <svg className="m-0 ml-1 p-0" style={{ width: '20px', cursor: 'pointer', visibility: 'hidden'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" /></svg>
                                    </>

                                    <>
                                            <label htmlFor="pin" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Pin</label>
                                                        <input type="text" name="pin" className="form-control inp" title="Enter PIN COde" />
                                                        <svg className="m-0 ml-1 p-0" style={{ width: '20px', cursor: 'pointer', visibility: 'hidden'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" /></svg>
                                    </>
                                </span>

                                <span className="d-flex section2 col-sm-10">
                                    <>
                                            <label htmlFor="telNo" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Tel No.</label>
                                                        <input type="text" name="telNo" className="form-control inp" title="Enter Tel No." />
                                                        <svg className="m-0 ml-1 p-0" style={{ width: '20px', cursor: 'pointer', visibility: 'hidden' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" /></svg>
                                    </>
                                    <>
                                            <label htmlFor="email" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Email</label>
                                                        <input type="text" name="email" className="form-control inp" title="Enter Email" />
                                                        <svg className="m-0 ml-1 p-0" style={{ width: '20px', cursor: 'pointer', visibility: 'hidden'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" /></svg>
                                    </>
                                    <>
                                            <label htmlFor="pan" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Pan</label>
                                                        <input type="text" name="pan" className="form-control inp" title="Enter PAN" />
                                                        <svg className="m-0 ml-1 p-0" style={{ width: '20px', cursor: 'pointer', visibility: 'hidden' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" /></svg>
                                    </>

                                </span>

                                <span className="d-flex section2 col-sm-10">
                                                    <>
                                                        <label htmlFor="gst" style={{ fontSize: '0.8em' }} className="form-label labl labl2">GST.</label>
                                                        <input type="text" name="gst" className="form-control inp" title="Enter GST No." />
                                                        <svg className="m-0 ml-1 p-0" style={{ width: '20px', cursor: 'pointer', visibility: 'hidden'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" /></svg>
                                                    </>
                                                    <>
                                                        <label htmlFor="distance" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Distance</label>
                                                        <input type="text" name="distance" className="form-control inp" title="Enter Distance" />
                                                        <svg className="m-0 ml-1 p-0" style={{ width: '20px', cursor: 'pointer', visibility: 'hidden' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" /></svg>
                                                    </>
                                                    <>
                                                        <label htmlFor="station" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Station</label>
                                                        <input type="text" name="station" className="form-control inp" title="Station" />
                                                        <svg className="m-0 ml-1 p-0" style={{ width: '20px', cursor: 'pointer', visibility: 'hidden' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" /></svg>
                                                    </>
                                </span>

                                            </div>
                                            ): null
                                    }
                                    {
                                        this.state.opn == "Plant" ? (
                                            <div className="collapse" id="contAdd">
                                            <table id="plantAddress" className="table table-striped table-bordered table-sm" style={{
                                                width: "100%"
                                            }}>
                                                <thead>
                                                    <tr>
                                                        <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>S.No</th>
                                                        <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>P/L</th>
                                                        <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Plant Name</th>
                                                        <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Address 1</th>
                                                        <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Address 2</th>
                                                        <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Country</th>
                                                        <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Zone</th>
                                                      
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th>1</th>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        
                                                    </tr>
                                                    <tr>
                                                        <th>2</th>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        
                                                    </tr>
                                                    <tr>
                                                        <th>3</th>
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
                                            ): null
                                    }
                                    {
                                        this.state.opn == "Shipping" ? (
                                              <div className="collapse" id="contAdd">
                                                <table id="shippingAddress" className="table table-striped table-bordered table-sm" style={{
                                                    width: "100%"
                                                }}>
                                                    <thead>
                                                        <tr>
                                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>S.No</th>
                                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>PAN</th>
                                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Address Line 1</th>
                                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Address Line 2</th>
                                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Address Line 3</th>
                                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Address Line 4</th>
                                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Country</th>
                                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Zone</th>
                                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>State</th>
                                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>City</th>
                                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Post Code</th>
                                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Tel No.</th>
                                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>GST</th>
                                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Distance</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th>1</th>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>

                                                        </tr>
                                                        <tr>
                                                            <th>2</th>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>

                                                        </tr>
                                                        <tr>
                                                            <th>3</th>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
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
                                        ): null
                                    }
                        </fieldset>
                       
                    </form>
                       </div>
                    <hr style={{ margin:'0', padding:'0' }} />
                    <div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">
                        <div className="card-body col-sm-12 addCustomer container container-fluid container-lg" style={{ overflowX: 'auto', overflowY: 'auto' }}>

                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0', width:'100%' }}>
                            <span className="card-title" style={{ fontSize: '15px', margin: '0', padding: '0' }}>Bank Details</span>
                        </div>
                        <table id="dtHorizontalExample" className="table table-striped table-bordered table-sm" style={{
                            width:"100%"
                        }}>
                            <thead>
                                <tr>
                                    <th className="text-center" style={{fontWeight:400, backgroundColor:'grey', color:'white'}}>S.No</th>
                                    <th className="text-center" style={{fontWeight:400, backgroundColor:'grey', color:'white'}}>PAN</th>
                                    <th className="text-center" style={{fontWeight:400, backgroundColor:'grey', color:'white'}}>Name of the Bank</th>
                                    <th className="text-center" style={{fontWeight:400, backgroundColor:'grey', color:'white'}}>Branch</th>
                                    <th className="text-center" style={{fontWeight:400, backgroundColor:'grey', color:'white'}}>A/C No.</th>
                                    <th className="text-center" style={{fontWeight:400, backgroundColor:'grey', color:'white'}}>A/C Type</th>
                                    <th className="text-center" style={{fontWeight:400, backgroundColor:'grey', color:'white'}}>Swift Code</th>
                                    <th className="text-center" style={{fontWeight:400, backgroundColor:'grey', color:'white'}}>IFSC Code</th>
                                    <th className="text-center" style={{fontWeight:400, backgroundColor:'grey', color:'white'}}>Currency</th>
                                    <th className="text-center" style={{fontWeight:400, backgroundColor:'grey', color:'white'}}>Country</th>
                                    <th className="text-center" style={{fontWeight:400, backgroundColor:'grey', color:'white'}}>GST</th>
                                    <th className="text-center" style={{fontWeight:400, backgroundColor:'grey', color:'white'}}>Distance</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                 <tr>
                                    <th>2</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>3</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
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
                    </div>

                    <hr style={{ margin: '0', padding: '0' }} />

                    <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                        <div className="card col-sm-5" style={{ padding: '0', margin: '0' }}>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>
                                <span className="card-title" style={{ fontSize: '15px', margin: '0', padding: '0' }}>Last 3 Yrs. TurnOver</span>
                            </div>
                            <div className="card-body table-responsive" style={{ margin: '0', padding: '0' }}>
                                <table className="table table-striped table-bordered table-hover table-sm" style={{ margin: '0' }}>
                                    <thead className="thead-light table-secondary text-center">
                                        <tr>
                                            <th>S. No</th>
                                            <th>Year</th>
                                            <th>TurnOver(Lacks)</th>
                                          
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td></td>
                                            <td></td>
                                           
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td></td>
                                                <td></td>

                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td></td>
                                                <td></td>

                                            </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="card col-sm-6" style={{ padding: '0', margin: '0' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>
                                <span className="card-title" style={{ fontSize: '15px', margin: '0', padding: '0' }}>Additional Docs</span>
                            </div>

                            <div className="card-body col-12" style={{ margin: '0', padding: '0' }}>
                               
                                <span className="d-flex col-sm-12 m-0 pl-0 pr-0">
                                    <>
                                        <label htmlFor="empName" style={{ fontSize: '0.8em' }} className="form-label col-3 labl2 labl">Data Collected By</label>
                                        <input type="text" name="empName" className="form-control inp" />
                                    </>
                                    <>
                                        <label htmlFor="date" style={{ fontSize: '0.8em' }} className="form-label labl2 labl">Date</label>
                                            <input type="date" style={{ fontSize: '0.8em' }} name="date" className="form-control inp" />
                                    </>
                                  
                                </span>
                                {/*<span className="d-flex col-sm-10 m-0 pl-0 pr-0">*/}
                                {/*    <>*/}
                                {/*        <label htmlFor="position" style={{ fontSize: '0.8em' }} className="form-label col-3 labl2 labl">Position</label>*/}
                                {/*        <input type="text" name="position" className="form-control inp" />*/}
                                {/*    </>*/}
                                {/*    <>*/}
                                {/*        <label htmlFor="place" style={{ fontSize: '0.8em' }} className="form-label labl2 labl">Place</label>*/}
                                {/*            <input type="date" style={{ fontSize: '0.8em' }} name="place" className="form-control inp" />*/}
                                {/*    </>*/}
                                  
                                {/*</span>*/}

                                <span className="d-flex col-sm-10 m-0 pl-0 pr-0">
                                    <>
                                        <label htmlFor="docs" style={{ fontSize: '0.8em' }} className="form-label ml-2">Upload Docs</label>
                                        <input type="file" name="docs" />
                                    </>
                                    <span>
                                       <button type="button">Remove</button>
                                </span>

                               
                                </span>
                            </div>
                           
                        </div>
                    </div>


                </div>
                <hr style={{margin:'0', padding:'0'}}/>
                </div>
                <div className="btn-group col-12 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing:3 }} className="btn btn-info pl-0 pr-0">Save</button>
                    <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} className="btn btn-success mr-2 ml-2 pl-0 pr-0 ">Save & Submit</button>
                    <button type="button" style={{ border: '2px solid red', letterSpacing: 3 }} className="btn btn-danger pl-0 pr-0">Quit</button>
                </div>
            </>
            );
    }
}

export default AddCustomerMaster;