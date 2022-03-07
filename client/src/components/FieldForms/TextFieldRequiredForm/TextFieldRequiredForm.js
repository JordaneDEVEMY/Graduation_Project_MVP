import React from 'react';
import {
  TextField,
} from '@mui/material';

function TextFieldRequiredForm() {
  return (
    <TextField required type="text" label="Champ requis" variant="Outlined" />
  );
}

export default React.memo(TextFieldRequiredForm);
