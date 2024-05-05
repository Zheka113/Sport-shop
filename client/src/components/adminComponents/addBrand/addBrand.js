import { Box, Stack, TextField } from '@mui/material'
import { React, useState } from 'react'
import { AddButton } from './addButton';

export const AddBrand = () => {

    const [name, setName] = useState('');
    const nameChange = (event) => {
        setName(event.target.value);
    };

    return (
        <Box p={2}>
            <Stack direction="row" spacing={2} >
                <TextField
                    value={name}
                    onChange={nameChange}
                    label="Name"
                    variant="outlined"
                    size="small"
                    sx={{ width: 150 }}
                />
                <AddButton name={name} />
            </Stack>
        </Box>
    )
}