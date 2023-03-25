import * as React from 'react';
import DatalistInput from 'react-datalist-input';
import { InputList} from '../../components/custom-input/custom-input.component';

//import ClipLoader from 'react-spinners/ClipLoader';

export default function Modify_Page({ selectModList, handleSelect, handleSubmit, ...props }: any) {
 
    return (
        <div className="fisrtDiv col-12 container-fluid row card p-0" style={{ margin: '0 auto' }}>
            
            <header className="card-title col-12 text-center bg-secondary">
            <span style={{ fontSize: '20px', color: '#fff', fontWeight: 'bolder', padding: '1em 2em'}}>Modify List</span>

            </header>
            <span className="row-content card-body col-12">
              {/*  <input type="text" className="col-12 col-sm-6 form-control" placeholder="Search Term" />*/}
                {/*<InputList*/}
                {/*    name="modify" label="" id="modify" ipType="text" ipTitle="Select to Modify" dataArray={selectModList} change={handleSelect} classCategory="col-12 col-sm-6 form-control" placeholder="Select to Modify" lablCat="" s="50vw"*/}
                {/*/>*/}


               
                <DatalistInput

                    className="d-flex col-12 m-0 p-0"
                    inputProps={{ className: 'col-sm-10 form-control', name: 'modify', id: "modify", style: { padding: '22px 10px', fontSize: '20px', margin:'0 8%' } }}
                    placeholder={"Select to Modify"}
                    listboxProps={{ className: 'text-left mt-5 col-sm-10', style: { padding: '22px 10px', fontSize: '20px', margin: '0 8%' } }}
                        onSelect={(item : any) => handleSelect(item.id,item.value)}
                        items={selectModList}
                    />
              
            </span>
            <div className="card-footer col-12">
                <button className="btn btn-warning col-sm-1" style={{margin:'0 46%'}} type="button" onClick={handleSubmit }>Modify</button>

            </div>
        </div>
        )
}
