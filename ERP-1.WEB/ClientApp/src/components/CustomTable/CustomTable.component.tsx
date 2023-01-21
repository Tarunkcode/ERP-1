import * as React from 'react';
import { InputList } from '../custom-input/custom-input.component';


export default function LoadTable({columns, dataArr }: any) {
    return (
        <div className="" >
            <table>
                <thead>
                    <tr>
                        {
                            columns.map((head: any) => {
                                <th>{head.field }</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        dataArr.map((row : any) => {
                            <tr>
                                {
                                    columns.map((col: any) => {
                                        <td>{row[col.field] }</td>
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


export function WriteTable({ columns, dataArr, title, getCurrentRowNo, HandleIpSelect, addRowFunc, deleteRowFunc ,...props }: any) {

    return (
        <div
            className="card-body m-0 p-0 mb-1 table-responsive"
            style={{ margin: "0", padding: "0", overflow: 'auto' }}
        >
            <div
                className="text-center card-title col-12 m-0"
                style={{ textAlign: "start" }}
            >
                <span className="row-header p-0 m-0">{title }</span>
            </div>
            <table
                className="table table-striped table-bordered table-hover table-sm"
                style={{ margin: "0" , width:'100%'}}
            >
                <thead className="thead-light table-secondary text-center">
                    <tr>
                        <th>S.No.</th>
                        {
                            columns.map((head: any) => {
                               return( <th>{head.header}</th> )
                            })
                        }
                        <th><button type="button" className="btn btn-outline-success m-0 p-1 pr-2 pl-2" onClick={addRowFunc}>+</button></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataArr.map((row: any, ind: any) => {
                            return (

                                <tr key={ind} id={ind}>
                                    <th>{parseInt(ind) + 1}</th>
                                   {
                                        columns.map((col: any) => {
                                            return (
                                            <td>
                                               <InputList
                                                 row={ind}
                                                 name={row[col.field].name}
                                                 change={HandleIpSelect}
                                                 ipType="text"
                                                 ipTitle={row[col.field].ipTitle}
                                                 dataArray={row[col.field].dataArray}
                                                 classCategory={row[col.field].classCat}
                                                 placeholder={row[col.field].placeholder}
                                                 s="100%"
                                                        id={row[col.field].name}
                                                        default={row[col.field].dataArray.length !== 0 && row[col.field].defaultList.length !== 0 ? row[col.field].dataArray.findIndex((x: any) => x.code == row[col.field].defaultList[ind][row[col.field].name]) : undefined} // passing index
                                                />
                                            </td>)
                                  
                                        //return ( <td>{row[col.field]}</td>)
                                      })
                                    }
                                    {
                                        ind === dataArr.length - 1 ? (

                                            <td><button type="button" className="btn btn-outline-danger m-0 p-1 pr-2 pl-2" onClick={() => deleteRowFunc(ind)}>x</button></td>
                                        ) : <td></td>
                                    }
                               </tr>
                        
                                )
                        })
                    }
                </tbody>
            </table>
        </div>
        )
}