import React from 'react';

import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';

export default function Dropdown({label, values, setSelctedValue, selctedValue}) {
    
    const handleChange = (event) => {
        setSelctedValue(event.target.value);
    }

    return  <Box
            component="form"
            sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
        <FormControl fullWidth>
            <InputLabel variant="standard" id="demo-simple-select-label">{label}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selctedValue}
                label={label}
                onChange={handleChange}
            >
                {values.map(value => <MenuItem value={value}>{value.name}</MenuItem>)}
            </Select>
        </FormControl>
    </Box>
}