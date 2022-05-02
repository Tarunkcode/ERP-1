
import * as React from 'react';
import { InputHTMLAttributes } from 'react';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    ref: string;
}

const Input: React.RefForwardingComponent<HTMLInputElement, InputProps> = ({ name, label, ...otherProps }, ref) => {
    return (
        <label className="form-label">
            {label}
            <input
                className="form-input"
                {...otherProps}
                name={name}
                ref={ref}
            />
        </label>
    );
};

const FormInput = React.forwardRef(Input);

export default FormInput;