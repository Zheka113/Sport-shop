import { React, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BrendSelect() {
  const [brend, setBrend] = useState('');

  const handleChange = (event) => {
    setBrend(event.target.value);
  };

  const Brends = ['first', 'second', 'third', 'fourth']

  return (
    <Box>
      <FormControl size="small" sx={{ width: 120 }}>
        <InputLabel sx={{ color: 'inherit' }}>Brend</InputLabel>
        <Select
          sx={{ color: 'inherit' }}
          value={brend}
          label="Brend"
          
          onChange={handleChange}
        >
            {Brends.map((elem)=>(<MenuItem value={elem}>{elem}</MenuItem>))}
        </Select>
      </FormControl>
    </Box>
  );
}