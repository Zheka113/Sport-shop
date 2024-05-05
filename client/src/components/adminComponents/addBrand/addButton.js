import { Button } from '@mui/material'
import { React } from 'react'

export const AddButton = ({name})=> {

    const addFunction = ()=> {
        if(name){
            console.log(name)
        }else{
            console.log('write name')
        }
    }

    return(
        <Button onClick={addFunction}>
            Add Brand
        </Button>
    )
}