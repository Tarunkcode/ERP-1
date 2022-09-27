import * as React from 'react';

export default function Modify (props: any) {
    return (
        <div className="fisrtDiv col-12 container-fluid row card p-0" style={{ margin: '0 auto' }}>
            <header className="card-title col-12 text-center bg-secondary">
            <span style={{ fontSize: '20px', color: '#fff', fontWeight: 'bolder', padding: '1em 2em'}}>Modify List</span>

            </header>
            <span className="row-content card-body col-12">
                <input type="text" className="col-12 col-sm-6 form-control" placeholder="Search Term" />
            </span>
            <div className="card-footer col-12">
            <button className="btn btn-warning col-6 col-sm-1 float-right" type="button">Modify</button>

            </div>
        </div>
        )
}