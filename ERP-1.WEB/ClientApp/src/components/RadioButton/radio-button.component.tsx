import * as React from 'react'

const RadioButton = ({label, id, lablClass, handleChange, name, classCat, ...otherProps }: any) => {
    return (
        <>
            <label htmlFor={id} style={{ fontSize: '0.8em' }} className={lablClass}>
                <input id={id} className={classCat} onChange={handleChange} name={name} type="radio" />
                {label}
            </label>
        </>
    )
}

export default RadioButton