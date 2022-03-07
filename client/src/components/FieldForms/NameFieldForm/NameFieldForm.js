import React from 'react';
import {
  TextField,
} from '@mui/material';

function NameFieldForm() {
  return (
    <TextField required type="text" name="name" label="Nom" variant="outlined" />
  );
}

export default React.memo(NameFieldForm);
