import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { ShopLogotip } from './headerComponents/shopLogotip';
import { SearchField } from './headerComponents/searchField';
import { BasketButton } from './headerComponents/basketButton';
import AuthButton from './headerComponents/authButton';
import { useSelector, useDispatch } from "react-redux";
import { adminAuth, authorization } from '../store/toolkitSlice';
import AdminButton from './headerComponents/adminButton';
import BrendSelect from './headerComponents/brendSelect';

export default function Header() {

    const isAdmin = useSelector(state=> state.isAdmin)
    const isAuth = useSelector(state=>state.isAuth)
    const dispatch = useDispatch()
    return (
        
        <Box>
        <button onClick={()=>dispatch(adminAuth(!isAdmin))}>Admin {isAdmin && "true"}</button>
        <button onClick={()=>dispatch(authorization(!isAuth))}>Authorization {isAuth && "true"}</button>
            <AppBar position="static" sx={{ borderRadius: '10px' }}>
                <Toolbar>
                    <ShopLogotip />
                    <SearchField />
                    <BrendSelect />
                    <Box sx={{ flexGrow: 1 }} />
                    <Box display='flex'>
                        {isAdmin && <AdminButton />}
                        {isAuth && <BasketButton />}
                        <AuthButton />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}