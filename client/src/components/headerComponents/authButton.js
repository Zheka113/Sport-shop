import { React } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from "react-redux";
import { authorization } from '../../store/toolkitSlice';
import { Link } from 'react-router-dom';

export default function AuthButton() {

  const isAuth = useSelector(state => state.isAuth)
  const dispatch = useDispatch()

  return (
    <div>
      <Box>
        {isAuth ?
        <Link to="/">
          <Button
            sx={{ m: 1 }}
            variant="outlined"
            color='error'
            onClick={()=>dispatch(authorization(false))}>
            LOGOUT
          </Button>
        </Link>
          :
          <Link to="/auth">
            <Button
              sx={{ m: 1 }}
              variant="outlined"
              color='error'>
              LOGIN
            </Button>
          </Link>
        }
      </Box>
    </div>
  );
}