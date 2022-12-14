import * as React from "react";
import './toggle-switch.styles.css'
//import PropTypes, { InferProps } from "prop-types";

// ToggleSwitch.propTypes = {
//   id: PropTypes.string.isRequired,
//   checked: PropTypes.bool.isRequired,
//   onChange: PropTypes.func.isRequired,
//   name: PropTypes.string,
//   optionLabels: PropTypes.array,
//   small: PropTypes.bool,
//   disabled: PropTypes.bool
// };


const ToggleSwitch = ({
    id,
    name,
    //checked,
    //onChange,
    //optionLabels,
    //small,
    //disabled
}: any) => {

    function handleKeyPress(e: any) {
        if (e.keyCode !== 32) return;

        e.preventDefault();
      
    }

    return (
        //<div className={"toggle-switch" + (" small-switch")}>
        //    <input
        //        type="checkbox"
        //        name={name}
        //        className="custom-control-input"
        //        id={id}
               
              
        //    />
        //    {id ? (
        //        <label
        //            className="toggle-switch-label"
                   
        //            onKeyDown={(e) => handleKeyPress(e)}
        //            htmlFor={id}
        //        >
        //            <span
        //                className= "toggle-switch-inner"
                       
                       
        //                tabIndex={-1}
        //            />
        //            <span
        //                className="toggle-switch-inner"
        //                tabIndex={-1}
        //            />
        //        </label>
        //    ) : null}
        //</div>
        <div className="custom-control custom-switch m-0 p-0  col-12">
            <input type="checkbox"  className="form-control custom-control-input col-3" name={name} id={id} style={{ cursor: 'pointer' }} />
            <label className="custom-control-label col-8" htmlFor={id} style={{ cursor: 'pointer' }}>{name}</label>
        </div>
    );
};

// Set optionLabels for rendering.
ToggleSwitch.defaultProps = {
    optionLabels: ["Y", "N"]
};



export default ToggleSwitch;
