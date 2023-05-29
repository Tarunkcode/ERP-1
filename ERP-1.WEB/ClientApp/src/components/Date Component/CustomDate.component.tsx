import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import { Dayjs } from 'dayjs';

export default function CustomDate({ value, setValue, label, name, classCategory, ...otherProps }: any) {
   
    return (
        <>

            <label htmlFor={name} style={{ fontSize: '1rem' }} className="form-label labl  mt-2 ml-2 mr-2 labl2">{label }</label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    inputFormat="DD/MM/YYYY"
                    value={value}
                    className={classCategory }

                    onChange={(newValue: any) => {
                        setValue(newValue);
                    }}
                    renderInput={(params: any) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </>
        )
}