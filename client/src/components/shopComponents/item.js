import { React } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function Item({ name, description }) {
    return (
        <Card sx={{ minWidth: 275, mb: 3 }}>
            <CardContent>
                <Typography variant="h6" component="div">
                    {name}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
                <IconButton color="primary">
                    <AddShoppingCartIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}