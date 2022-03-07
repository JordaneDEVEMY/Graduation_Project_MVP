import React from 'react';
import {
  TextField,
} from '@mui/material';

function PasswordlFieldForm() {
  return (
    <TextField required type="password" label="Champ requis" variant="Outlined" />
  );
}

export default React.memo(PasswordlFieldForm);
