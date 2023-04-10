
import * as React from 'react';
import { AgGridReact } from 'ag-grid-react';

import UnderConstruction from '../components/under-construction';

const YetNotStarted = () => {
    console.log('called')

    return (
        <>
            <div className="text-center bg-light">

                <p className="animate__animated animate__flipInX animate__delay-3s  3s animate__infinite	infinite">
                    <span className="text-primary"> This is In  </span> <span className="text-danger">Under Construction...!</span>
                </p>
                </div>
        <div className="card firstDiv">
            <UnderConstruction />
        </div>
        </>
    )
}
export default YetNotStarted;