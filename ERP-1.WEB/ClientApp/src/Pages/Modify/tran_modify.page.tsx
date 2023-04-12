import * as React from 'react';
import DatalistInput from 'react-datalist-input';
import { InputList, MasterInput2 } from '../../components/custom-input/custom-input.component';


interface ModifyProps {
    handleSubmit: any,
    handleSelect: any,
    handelShowHide: any,
    show: boolean
}

export default function Tran_Modify_Page({ handleSubmit, handleSelect, handelShowHide, show, ...props }: ModifyProps) {

    return (
        <>
            <div className="firstDiv card main">

                <div className="fisrtDiv col-12 container-fluid row card p-0" style={{ margin: '0 auto' }}>

                    <header className="card-title col-12 text-center bg-secondary">
                        <span style={{ fontSize: '20px', color: '#fff', fontWeight: 'bolder', padding: '1em 2em' }}>Modify List</span>

                    </header>
                    <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                        <div className="card-body row col-sm-12 m-0 p-0">

                            <form className="row-content form col-sm-12 pt-0">
                                <fieldset className="form-group border p-0" >
                                    <legend className="px-2" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Projection</legend>



                                    <span className="d-flex section2 col-sm-12">
                                        <MasterInput2 name="number" label="Number" ipTitle="Enter So No." ipType="text" classCategory="form-control col-4 inp" />
                                        <span className="col-1 m-0"></span>
                                        <span className='col-sm-5 d-flex justify-content-start'>
                                            <button className='btn btn-secondary' style={{ width: '120px' }}>Ok</button>
                                            <button className='btn btn-secondary ml-2' style={{ width: '200px' }} onClick={handelShowHide}>Advance Click</button>
                                        </span>
                                    </span>

                                </fieldset>
                            </form>

                        </div>
                        <>
                            {show === false ? (
                                <div className="card-body row col-sm-12 m-0 p-0">
                                    <form className="row-content form col-sm-12 pt-0">
                                        <fieldset className="form-group border p-0" >
                                            <legend className="px-2" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Advance Search</legend>

                                            <span className="d-flex section2 col-sm-12">
                                                <MasterInput2 name="series" label="Series" ipTitle="Enter So No." ipType="text" classCategory="form-control col-4 inp" />
                                                <span className="col-1 m-0"></span>
                                                <MasterInput2 name="fromno" label="From No" ipTitle="Enter From No" ipType="text" classCategory="form-control col-4 inp" />

                                            </span>
                                            <span className="d-flex section2 col-sm-12">
                                                <MasterInput2 name="endno" label="End No" ipTitle="Enter End No." ipType="text" classCategory="form-control col-4 inp" />
                                                <span className="col-1 m-0"></span>
                                                <MasterInput2 name="process" label="Process" ipTitle="Enter Process" ipType="text" classCategory="form-control col-4 inp" />

                                            </span>
                                            <span className="d-flex section2 col-sm-12">
                                                <MasterInput2 name="item" label="Item" ipTitle="Enter Item" ipType="text" classCategory="form-control col-4 inp" />
                                                <span className="col-1 m-0"></span>
                                                <MasterInput2 name="datefrom" label="Date From" ipTitle="Enter Date from" ipType="date" classCategory="form-control col-4 inp" />

                                            </span>


                                            <span className="d-flex section2 col-sm-12">
                                                <MasterInput2 name="dateto" label="Date To" ipTitle="Enter Date to" ipType="date" classCategory="form-control col-4 inp" />
                                                <span className="col-1 m-0"></span>

                                            </span>



                                        </fieldset>
                                    </form>
                                </div>
                            ) : null
                            }
                        </>



                    </div>
                    {/*<span className="row-content card-body col-12">*/}

                    {/*    <DatalistInput*/}

                    {/*        className="d-flex col-12 m-0 p-0"*/}
                    {/*        inputProps={{ className: 'col-12 col-sm-6 form-control', name: 'modify', id: "modify", style: { padding: '22px 0', fontSize: '20px' }, placeholder: 'select to modify' }}*/}
                    {/*        listboxProps={{ className: 'text-left mt-5' }}*/}
                    {/*        onSelect={(item: any) => handleSelect(item.id, item.value)}*/}
                    {/*        items={[]}*/}
                    {/*    />*/}

                    {/*</span>*/}
                    <div className="card-footer col-12">
                        <button className="btn btn-warning col-6 col-sm-1 float-right" type="button" onClick={handleSubmit}>Modify</button>

                    </div>
                </div>
            </div>
        </>
    )
}