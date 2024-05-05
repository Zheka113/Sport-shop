import { Box, Stack, TextField } from '@mui/material'
import { React, useState } from 'react'
import { AddItemInfo } from './addItemInfo'
import UnstyledTextareaIntroduction from './addDescription'
import { AddButton } from './addButton'

export const AddItem = () => {

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
                <TextField
                    label="Type"
                    variant="outlined"
                    size="small"
                    sx={{ width: 150 }}
                />
                <TextField
                    label="Brand"
                    variant="outlined"
                    size="small"
                    sx={{ width: 150 }}
                />
            </Stack>
            <AddItemInfo />
            <UnstyledTextareaIntroduction />
            <AddButton name={name} />
        </Box>
    )
}