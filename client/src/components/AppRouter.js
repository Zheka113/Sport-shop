import React from "react";
import { Routes, Route } from 'react-router-dom'
import { adminRoutes, authRoutes, guestRoutes } from "../routes";
import Shop from "../pages/shop";
import Header from "./header";
import NavBar from "./navBar";
import { Box, Grid } from "@mui/material";
import { useSelector } from "react-redux";

const AppRouter = () => {

    const isAdmin = useSelector(state=> state.isAdmin)
    const isAuth = useSelector(state=>state.isAuth)

    return (
        <Box sx={{ width: 900, mx: 'auto', mt: 1 }}>
            <Header />
            <Grid container spacing={1}>
                <Grid item xs={3} sm={2} md={2}>
                    <NavBar />
                </Grid>
                <Grid item xs={9} sx={{ flexGrow: 1, ml: 1, mt: 1 }}>
                    <Routes>
                        {isAdmin && adminRoutes.map(route => (
                            <Route key={route.path} path={`${route.path}/*`} element={route.Component} />
                        ))}
                        {isAuth && authRoutes.map(route => (
                            <Route key={route.path} path={`${route.path}/*`} element={route.Component} />
                        ))}
                        {guestRoutes.map(route => (
                            <Route key={route.path} path={`${route.path}/*`} element={route.Component} />
                        ))}
                        <Route path="*" element={<Shop />} />
                    </Routes>
                </Grid>
            </Grid>
        </Box>
    )
}

export default AppRouter;