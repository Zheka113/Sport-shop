import { Button } from '@mui/material'
import { React } from 'react'

export const AddButton = ({name})=> {

    const addFunction = ()=> {
        console.log(name)
    }

    return(
        <Button onClick={addFunction}>
            Add Item
        </Button>
    )
}