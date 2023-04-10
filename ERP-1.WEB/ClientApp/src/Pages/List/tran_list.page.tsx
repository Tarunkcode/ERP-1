import * as React from 'react';
import DatalistInput from 'react-datalist-input';
import 'react-datalist-input/dist/styles.css';
import 'ag-grid-autocomplete-editor/dist/main.css';
import AutocompleteSelectCellEditor from 'ag-grid-autocomplete-editor';
import { MasterInput2 } from '../../components/custom-input/custom-input.component';
import ListGrid from '../../components/Grid Component/list-table.component';




interface ListProps {
    data: any[],
    colDef: any[],
    show: boolean,
    id: any,
    onCellClicked: any,
    //getId: any,
    onClick: () => void

}

const Tran_List_Page = ({ colDef, data, id, onClick, show, onCellClicked, ...rest }: ListProps) => {




    return (
        <>
            <div className="main card firstDiv" >

                <div className="text-center card-title col-12">
                    <span className="row-header p-0 m-0" style={{ color: 'white', fontWeight: 'bolder', fontSize: '1.2rem' }}>List</span>
                </div>
                {show === false ? (
                    <>
                        <div className="card-body row col-sm-12 m-0 p-0">

                            <form className="row-content form col-sm-12 pt-0">
                                <fieldset className="form-group border p-0" >
                                    <legend className="px-2" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>{[]}</legend>

                                    <div className="show" id="genDetails">
                                        <span className="d-flex section2 col-sm-12">

                                            <>
                                                <label htmlFor="series" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 labl2">Series</label>
                                            </>
                                            <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                                                <DatalistInput

                                                    className="d-flex col-12 m-0 p-0"
                                                    inputProps={{ className: 'form-control inp col-12 datalist int', name: 'series' }}
                                                    listboxProps={{ className: 'text-left mt-5' }}

                                                    onSelect={(item: any) => { console.log('id', item.id); }}
                                                    items={[{ id: 1, value: 'Himanshu' }, { id: 2, value: 'Tarun' }]}
                                                />

                                            </span>

                                            <span className='col-1'></span>

                                            <MasterInput2 name="codestr" classCategory="form-control inp col-4" ipType="date" label="From Date" ipTitle="" dataArray={[]} />
                                        </span>
                                        <span className="d-flex section2 col-sm-12">
                                            <MasterInput2 name="name" classCategory="form-control inp col-4" ipType="date" label='To Date' ipTitle='' dataArray={[]} />
                                            <span className='col-1'></span>

                                        </span>


                                        <div className='d-flex justify-content-end'>
                                            <button type="button" style={{ border: '2px solid ', letterSpacing: 3, width: '200px' }} onClick={onClick} className="btn mr-2 ml-2 btn-secondary mt-2 mb-2 pl-0 pr-0 ">Get Details</button>
                                        </div>
                                    </div>
                                </fieldset>

                            </form>


                            <hr />

                        </div>
                    </>
                ) : null}
                {show === true ? (

                    <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">

                        <ListGrid title='Details' titleClr="blue" colDef={colDef} rowData={data}
                            cellClicked={onCellClicked}
                        />

                    </div>
                ) : null}

            </div>
            {show === true ? (

                <div className="btn-group col-2 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', float: 'right' }}>

                    <button type="button" style={{ border: '2px solid orange', letterSpacing: 3 }} onClick={onClick} className="btn btn-warning pl-0 pr-0 ml-2 mr-2">Quit</button>
                </div>
            ) : null}

        </>
    )
}
export default Tran_List_Page;

 //<span>This is Under Construction...</span>
 //           <UnderConstruction />