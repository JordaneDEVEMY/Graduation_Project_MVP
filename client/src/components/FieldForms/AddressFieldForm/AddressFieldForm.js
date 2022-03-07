import React from 'react';
import {
  TextField,
} from '@mui/material';

function AddressFieldForm() {
  return (
    <TextField required type="text" name="address" label="Adresse postale" variant="Outlined" />
  );
}

export default React.memo(AddressFieldForm);
