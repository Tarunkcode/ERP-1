import * as React from 'react';


export default (props: any) => {

    return (
              < React.Fragment >

            <div style={{ overflow: 'scroll' }}>
                          {props.children}
                   </div>
                 
              </React.Fragment >
      )
}