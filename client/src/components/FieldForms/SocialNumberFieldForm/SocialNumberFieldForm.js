import React from 'react';
import {
  TextField,
} from '@mui/material';

function NumberFieldForm() {
  return (
    <TextField required type="number" name="social_security_number" label="Numéro de sécurité sociale" variant="Outlined" />
  );
}

export default React.memo(NumberFieldForm);
