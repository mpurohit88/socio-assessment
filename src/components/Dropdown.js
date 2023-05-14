import React from 'react'
import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';

export default function Dropdown({label, values, setSelctedValue, selctedValue}) {
    const handleChange = (event) => {
        setSelctedValue(event.target.value);
    }

    return  <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
            <InputLabel variant="standard" id="demo-simple-select-label">{label}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selctedValue}
                label={label}
                onChange={handleChange}
            >
                {values.map(value => <MenuItem value={value.name}>{value.name}</MenuItem>)}
            </Select>
        </FormControl>
    </Box>
}