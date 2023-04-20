import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import { Dayjs } from 'dayjs';

export default function CustomDate() {
    const [value, setValue] = React.useState<Dayjs | null>(null);
    React.useEffect(() => {
        let date: any = new Date();
        setValue(date);
    }, [])
    return (
        <>
            <label htmlFor="majProd" style={{ fontSize: '1rem' }} className="form-label labl labl2">Valid From</label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    inputFormat="DD/MM/YYYY"
                    value={value}
                    
                    className="form-control col-4 inp str AccountMaster m-0"
                    name='paydate'
                    onChange={(newValue: any) => {
                        setValue(newValue);
                    }}
                    renderInput={(params: any) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </>
        )
}