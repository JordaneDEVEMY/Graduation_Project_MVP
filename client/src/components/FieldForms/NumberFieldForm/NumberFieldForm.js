import React from 'react';
import {
  TextField,
} from '@mui/material';

function NumberFieldForm() {
  return (
    <TextField required type="number" label="Champ requis" variant="Outlined" />
  );
}

export default React.memo(NumberFieldForm);
