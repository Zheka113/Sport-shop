import React from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import { Link } from "react-router-dom";
import { BASKET_ROUTE } from "../../utils/consts";

export const BasketButton = () => {
    return (
        <IconButton size="medium" color="inherit">
            <Badge badgeContent={4} color="secondary">
                <Link to={BASKET_ROUTE} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <LocalGroceryStoreOutlinedIcon />
                </Link>
            </Badge>
        </IconButton>
    )
}