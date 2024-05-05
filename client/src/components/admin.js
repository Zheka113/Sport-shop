import { React } from 'react';
import Typography from '@mui/material/Typography';
import ActionChoose from './adminComponents/actionChoose';
import { Box, Stack } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { AddItem } from './adminComponents/addItem/addItem';
import { AddType } from './adminComponents/addType/addType';
import { AddBrand } from './adminComponents/addBrand/addBrand';

export default function AdminField() {

  const selectArr = [
    {to: "Item", component: <AddItem />}, 
    {to: "Type", component: <AddType />}, 
    {to: "Brand", component: <AddBrand />}
  ]

  return (
    <Box>
      <Stack direction="row" spacing={2} sx={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }}>
        <Typography variant="h6">
          I want to add:
        </Typography>
        <ActionChoose selectArr={selectArr} />
      </Stack>
      <Routes>
        {selectArr.map(elem => (
          <Route key={elem.to} path={elem.to} element={elem.component} />
        ))}
      </Routes>
    </Box>
  );
}