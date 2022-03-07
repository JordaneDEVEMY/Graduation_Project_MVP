import React from 'react';
import {
  TextField,
} from '@mui/material';

function EmailFieldForm() {
  return (
    <TextField required type="email" label="Champ requis" variant="Outlined" />
  );
}

export default React.memo(EmailFieldForm);
