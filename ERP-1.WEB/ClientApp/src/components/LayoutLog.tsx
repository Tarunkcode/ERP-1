import * as React from 'react';
import { Container } from 'reactstrap';


export default (props: { children?: React.ReactNode }) => (
    <div className="oo">
        
    <React.Fragment>
   
            <Container style={{ margin:"0 auto"}}>
            {props.children}
        </Container>
    </React.Fragment>
        </div>
);
