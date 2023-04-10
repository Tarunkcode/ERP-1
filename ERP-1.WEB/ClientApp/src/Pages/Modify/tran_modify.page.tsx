﻿import * as React from 'react';
import DatalistInput from 'react-datalist-input';
import { InputList } from '../../components/custom-input/custom-input.component';


interface ModifyProps {
    handleSubmit: any,
    handleSelect: any
}

export default function Tran_Modify_Page({ handleSubmit, handleSelect, ...props }: ModifyProps) {

    return (
        <div className="fisrtDiv col-12 container-fluid row card p-0" style={{ margin: '0 auto' }}>

            <header className="card-title col-12 text-center bg-secondary">
                <span style={{ fontSize: '20px', color: '#fff', fontWeight: 'bolder', padding: '1em 2em' }}>Modify List</span>

            </header>
            <span className="row-content card-body col-12">

                <DatalistInput

                    className="d-flex col-12 m-0 p-0"
                    inputProps={{ className: 'col-12 col-sm-6 form-control', name: 'modify', id: "modify", style: { padding: '22px 0', fontSize: '20px' }, placeholder: 'select to modify' }}
                    listboxProps={{ className: 'text-left mt-5' }}
                    onSelect={(item: any) => handleSelect(item.id, item.value)}
                    items={[]}
                />

            </span>
            <div className="card-footer col-12">
                <button className="btn btn-warning col-6 col-sm-1 float-right" type="button" onClick={handleSubmit}>Modify</button>

            </div>
        </div>
    )
}