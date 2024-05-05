import { React, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom';
import { ADMIN_ROUTE } from '../../utils/consts';

export default function ActionChoose({ selectArr }) {

    const [choose, setChoose] = useState('');

    const handleChange = (event) => {
        setChoose(event.target.value);
    };

    return (
        <div>
            <FormControl variant="standard" sx={{ minWidth: 120 }}>
                <Select
                    value={choose}
                    onChange={handleChange}
                >
                    {selectArr.map(elem => (
                        <MenuItem key={elem.to} value={elem.to}>
                            <Link to={`${ADMIN_ROUTE}/${elem.to}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                {elem.to}
                            </Link>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}