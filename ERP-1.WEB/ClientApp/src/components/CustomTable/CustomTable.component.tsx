import * as React from 'react';
import {  TableInputList } from '../custom-input/custom-input.component';


import {
    ColDef,
    ColGroupDef,
    Grid,
    GridOptions,
    GridReadyEvent,
} from 'ag-grid-community';


import { useCallback, useMemo, useRef, useState } from 'react';
interface IOlympicData {
    athlete: string;
    age: number;
    country: string;
    year: number;
    date: string;
    sport: string;
    gold: number;
    silver: number;
    bronze: number;
    total: number;
}

export default function LoadTable({ columns, dataArr }: any) {
    return (
        <div className="" >
            <table>
                <thead>
                    <tr>
                        {
                            columns.map((head: any) => {
                                <th>{head.field}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        dataArr.map((row: any) => {
                            <tr>
                                {
                                    columns.map((col: any) => {
                                        <td>{row[col.field]}</td>
                                    })
                                }
                            </tr>
                        })
                    }
                </tbody>
                <tfoot></tfoot>
            </table>
        </div>
    )
}


export function WriteTable({ columns, dataArr, title, getCurrentRowNo, HandleIpSelect, addRowFunc, deleteRowFunc, tableProps, setRowFunc, firstCol, onEnterOpen$RedirectModal,titleClr, ...props }: any) {
    function RowAddDumy() {
        addRowFunc(dataArr, tableProps, setRowFunc)
    }
    return (
        <div
            className="card-body m-0 p-0 mb-1 table-responsive"
            style={{ margin: "0", padding: "0", overflow: 'auto' }}
        >
            <div
                className="text-center card-title col-12 m-0"
                style={titleClr ? { textAlign: "start", backgroundColor: titleClr } : { textAlign: "start"}}
            >
                <span className="row-header p-0 m-0" style={{ fontSize: '1.1rem' }}>{title}</span>
            </div>
            <table
                className="table table-responsive table-striped table-bordered table-sm"
                style={{
                    width: '100%', minHeight: '30vh', borderCollapse: "separate",
                    boxSizing: "border-box",
                    textIndent: "initial",
                    borderSpacing: "2px" }}
            >
                <thead>
                    <tr>
                        <th className="text-center" style={{ backgroundColor: 'lightslategray' }} ><span style={{ fontWeight: 400, fontSize: '1.1rem', color: 'white', margin:'20px' }}>{firstCol || "Sr No."}</span></th>
                        {
                            columns.map((head: any) => {
                                return (<th className="text-center" style={{ backgroundColor: 'lightslategray' }} ><span style={{ fontWeight: 400, fontSize: '1.1rem', color: 'white' }}>{head.header}</span></th>)
                            })
                        }
                        <th><button type="button" className="btn btn-outline-success m-0 p-1 pr-2 pl-2" onClick={RowAddDumy}>+</button></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataArr.map((row: any, ind: any) => {
                            return (

                                <tr key={ind} id={ind}>
                                    <th className="text-center" style={{fontSize:'1rem'}}>{parseInt(ind) + 1}</th>
                                    {
                                        columns.map((col: any) => {
                                            return (
                                                <td>
                                                    <TableInputList
                                                        row={ind}
                                                        name={row[col.field].id}
                                                        change={HandleIpSelect}
                                                        width={row[col.field].width}
                                                        ipType={row[col.field].ipType || "text"}
                                                        type={row[col.field].typeBox}
                                                        ipTitle={row[col.field].ipTitle}
                                                        dataArray={row[col.field].dataArray}
                                                        classCategory={row[col.field].classCat}
                                                        placeholder={row[col.field].placeholder}
                                                        onEnterModalList={row[col.field].onEnterOpen$RedirectModal}
                                                        s="100%"
                                                        id={row[col.field].name}
                                                        default={row[col.field].dataArray.length !== 0 && row[col.field].defaultList.length !== 0 ? row[col.field].dataArray.findIndex((x: any) => x.code == row[col.field].defaultList[ind][row[col.field].name]) : undefined} // passing index
                                                    />
                                                </td>)

                                            //return ( <td>{row[col.field]}</td>)
                                        })
                                    }
                                    {/*{*/}
                                    {/*    ind === dataArr.length - 1 ? (*/}

                                    {/*        <td><button type="button" className="btn btn-outline-danger m-0 p-1 pr-2 pl-2" onClick={() => deleteRowFunc(ind, dataArr, setRowFunc)}>x</button></td>*/}
                                    {/*    ) : <td></td>*/}
                                    {/*}*/}
                                </tr>

                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}




