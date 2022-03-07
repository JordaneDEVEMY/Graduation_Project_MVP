import React from 'react';
import {
  TextField,
} from '@mui/material';

function EmailFieldForm() {
  return (
    <TextField required type="email" label="email" variant="Outlined" />
  );
}

export default React.memo(EmailFieldForm);
