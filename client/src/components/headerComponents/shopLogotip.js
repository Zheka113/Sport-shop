import React from "react";
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { SHOP_ROUTE } from "../../utils/consts";

export const ShopLogotip = () => {
    return (
        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
        >
            <Link to={SHOP_ROUTE} style={{ textDecoration: 'none', color: 'inherit' }}>
                SPORT SHOP
            </Link>
        </Typography>
    )
}