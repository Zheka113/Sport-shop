import { React } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function AdminButton() {
  return (
    <div>
      <Box>
        <Link to="/admin">
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