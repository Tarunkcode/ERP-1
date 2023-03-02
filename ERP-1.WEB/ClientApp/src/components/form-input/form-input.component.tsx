
import * as React from 'react';
//import { InputHTMLAttributes } from 'react';
//interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
//    name: string;
//    label: string;
//    ref: string;
//}

//const Input: React.RefForwardingComponent<HTMLInputElement, InputProps> = ({ name, label, ...otherProps }, ref) => {
//    return (
//        <label className="form-label">
//            {label}
//            <input
//                className="form-input"
//                {...otherProps}
//                name={name}
//                ref={ref}
//            />
//        </label>
//    );
//};

//const FormInput = React.forwardRef(Input);


import "./form-input.styles.css";

const FormInput = ({ handleChange, label, ...otherProps }: any) => (
    <div className="group  m-0 p-0">
        <input className='form-input' onChange={handleChange} {...otherProps} autoComplete="off" />
        {label ? (
            <label
                className={`${otherProps.value.length ? 'shrink' : ''
                    } form-input-label`}
            >
                {label}
            </label>
        ) : null}
    </div>
);
export default FormInput;