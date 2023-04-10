﻿import * as React from 'react';
import { MasterInput2 } from '../../../components/custom-input/custom-input.component';
import WriteGrid from '../../../components/Grid Component/grid.component';
import QcIncomingModals from '../../../components/Modals/Qc_Incoming_Modal';

const OQC = () => {

    let [isItemBox, setIsItemBox]: any = React.useState(false);
    const [config, setConfig]: any = React.useState('');

    const OpenQcIncomingMat = (e: any) => {
        console.log('process value', e)

        if (e.data.process) {
            if (e.event.keyCode === 13 || e.event.key === 'Enter') {
                setIsItemBox(true);
            }
        } else { }

    }


    React.useEffect(() => {

        let id: string = window.location.pathname;
        console.log('id', id)
        let splits: any = id.split('/');
        console.log('s', splits)
        setConfig({
            configType: splits[splits.length - 1]
        })


    }, [])
    console.log('iddddddddd', config.configType)

    let data: any[] = [{
        pd: null, cn: null, in: null, ic: null, mn: null, pqty: null, pq: null, bq: null, uom: null, mc: null,
        balqty: null, mat: null, process: null
    }]

    var ColDef: any[] = [{ field: 'srno', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },

    { field: 'pd', headerName: 'Prod. Date', minWidth: 200 },
    { field: 'cn', headerName: 'Customer Name', minWidth: 200 },

    { field: 'ic', headerName: 'Item Code', minWidth: 200 },
    { field: 'in', headerName: 'Item Name', minWidth: 200 },
    { field: 'mn', headerName: 'Model No.', minWidth: 200 },
    { field: 'pqty', headerName: 'Prod. Qty', minWidth: 200 },
    { field: 'pq ', headerName: 'Processed Qty', minWidth: 200 },
    { field: 'bq ', headerName: 'Balance Qty.', minWidth: 200 },
    { field: 'uom ', headerName: 'UOM', minWidth: 200 },
    { field: 'mc ', headerName: 'Mat. Center', minWidth: 200 },
    { field: 'process', headerName: 'Process', minWidth: 200, editable: true },
    { field: 'planno', headerName: 'PlanNo', minWidth: 200, editable: true },

    ]

    return (

        <>
            <QcIncomingModals isItemBox={isItemBox} setIsItemBox={setIsItemBox} />


            <div className="main card firstDiv">
                <div className="row row-content col-sm-12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>

                    <span className="card-title" style={{
                        fontSize: '15px', color: 'white', fontWeight: 900, padding: '0',
                        margin: '0'
                    }} >{`${config.configType === 'add-Qc-Out' ? 'QC Incoming Material From Production Confirmation' : config.configType === 'add-SmpProd' ? 'Qc Sample Production' : config.configType === 'add-ReWork' ? 'QC ReWork' : '' }`}</span>
                </div>

                <div className="card-body row col-sm-12 m-0 p-0" >
                    <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                        <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">

                            <div className="card-body" style={{ margin: '0', padding: '0' }}>
                                <form className="form">
                                    <span className="d-flex section2 col-sm-12">
                                        <MasterInput2 name="proseries" label="Production Series" ipTitle="Enter Production Series" ipType="text" classCategory="form-control col-4 inp" />

                                        <span className="col-1 m-0"></span>
                                        <MasterInput2 name="pnf" label="Prod. No From" ipTitle="Enter Production No From" ipType="text" classCategory="form-control col-4 inp" />


                                    </span>
                                    
                                    <span className="d-flex section2 col-sm-12">

                                        <MasterInput2 name="pnt" label="Prod. No To" ipTitle="Enter Production No To" ipType="text" classCategory="form-control col-4 inp" />
                                        <span className="col-1 m-0"></span>
                                        <MasterInput2 name="to" label="Prod. Date From" ipTitle="Enter Production Date From" ipType="date" classCategory="form-control col-4 inp" />
                                    </span>

                                  
                                    <span className="d-flex section2 col-sm-12">

                                        <MasterInput2 name="pdto" label="Prod. Date To" ipTitle="Enter Production Date To" ipType="date" classCategory="form-control col-4 inp" />
                                        <span className="col-1 m-0"></span>
                                        <MasterInput2 name="icode" label="Item Code" ipTitle="Enter Item Code" ipType="text" classCategory="form-control col-4 inp" />
                                      
                                    </span>

                                  

                                    <span className="d-flex section2 col-sm-12 mt-2">

                                        <button type="button" className="btn btn-secondary pl-0 pr-0 mb-2 ml-2" style={{ borderRadius: '21px', letterSpacing: 3, width: '200PX' }}>
                                            Load Data
                                        </button>


                                    </span>
                                </form>

                            </div>

                        </div>

                    </div>


                    <hr />
                    <div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">

                        <WriteGrid title="" titleClr="blue" OpenSubLayer={OpenQcIncomingMat} colDef={ColDef} data={data} />

                    </div>
                </div>
            </div>
            <div className="btn-group col-2 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', float: 'right' }}>

                <button type="button" style={{ border: '2px solid orange', letterSpacing: 3 }} className="btn btn-warning pl-0 pr-0">Quit</button>
            </div>
        </>
    )
}

export default OQC;