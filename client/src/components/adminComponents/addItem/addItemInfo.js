import { Box, IconButton, Stack, TextField, Typography } from '@mui/material'
import AddBoxIcon from '@mui/icons-material/AddBox';
import { React, useState } from 'react'
import { ParametersList } from './parametersList';
import { useSelector, useDispatch } from "react-redux";
import { rename, revalue } from '../../../store/toolkitSlice';

export const AddItemInfo = () => {

    const parameter = useSelector(state=>state.name)
    const val = useSelector(state=>state.value)
    const dispatch = useDispatch()

    const parameterChange = (event)=>{
        dispatch(rename(event.target.value))
    };
    const valChange = (event)=>{
        dispatch(revalue(event.target.value))
    };

    const [parametersArr, setParametersArr] = useState([]);
    const parametersArrChange = (param) => {
        parametersArr.push(param);
        console.log('1')
    };

    const addParameter = ()=> {
        if(parameter && val){
            parametersArrChange({parameter: parameter, value: val});
            console.log(parametersArr);
            dispatch(rename(''));
            dispatch(revalue(''));
        }else{
            console.log('test')
        }
    }

    return (
        <Box mt={2}>
            <Stack direction="row" spacing={1} >
                <TextField
                    value={parameter}
                    onChange={parameterChange}
                    label="Parameter"
                    variant="outlined"
                    size="small"
                    sx={{ width: 150 }}
                />
                <Typography variant='h6'>:</Typography>
                <TextField
                    value={val}
                    onChange={valChange}
                    label="Value"
                    variant="outlined"
                    size="small"
                    sx={{ width: 150 }}
                />
                <IconButton color="primary" size="medium" onClick={addParameter}>
                    <AddBoxIcon />
                </IconButton>
            </Stack>
            <ParametersList parametersArr={parametersArr} />
        </Box>
    )
}