import * as React from "react";
import "./spinner.styles.css";

import ClipLoader from 'react-spinners/ClipLoader';

function Spinner({isShow,...otherProps }: any) {
    return (
    <>
        {
            isShow === true ? (
        <div style={{ width: '100px', margin: 'auto', display: 'block' }}>
            <ClipLoader color="#52bfd9" size={100} />
        </div>

            ): null
            }
      </>
    );
};

export default Spinner;