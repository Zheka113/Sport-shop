import React from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Link from '@mui/material/Link';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';

export const BasketButton = () => {
    return (
        <IconButton size="medium" color="inherit">
            <Badge badgeContent={4} color="secondary">
                <Link href="/basket" underline="none" color='inherit'>
                    <LocalGroceryStoreOutlinedIcon />
                </Link>
            </Badge>
        </IconButton>
    )
}