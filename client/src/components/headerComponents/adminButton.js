import { React } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { ADMIN_ROUTE } from '../../utils/consts';

export default function AdminButton() {
  return (
    <div>
      <Box>
        <Link to={ADMIN_ROUTE}>
          <Button
            sx={{ m: 1 }}
            variant="outlined"
            color='error'>
            Admin Panel
          </Button>
        </Link>
      </Box>
    </div>
  );
}