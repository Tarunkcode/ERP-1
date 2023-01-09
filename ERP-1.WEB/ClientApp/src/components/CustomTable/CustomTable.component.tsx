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


export function WriteTable({ columns, dataArr, title, getCurrentRowNo, HandleIpSelect, ...props }: any) {
   
    console.log(`table default`, props.default)
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
                style={{ margin: "0" }}
            >
                <thead className="thead-light table-secondary text-center">
                    <tr>
                        <th>S.No.</th>
                        {
                            columns.map((head: any) => {
                               return( <th>{head.header}</th> )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        dataArr.map((row: any, ind: any) => {
                            return (

                                <tr key={ind} id={ind}>
                                    <th>{parseInt(ind) + 1}</th>
                                   {
                                        columns.map((col: any, index: any) => {
                                            return (
                                            <td>
                                               < InputList
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
                                                 default={props.default ? props.default.findIndex((x: any) => x.code === props.default[ind].name): null}
                                                />
                                            </td>)
                                  
                                        //return ( <td>{row[col.field]}</td>)
                                      })
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