import React from "react";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export const ShopLogotip = () => {
    return (
        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
        >
            <Link href="/" underline="none" color="inherit">
                SPORT SHOP
            </Link>
        </Typography>
    )
}