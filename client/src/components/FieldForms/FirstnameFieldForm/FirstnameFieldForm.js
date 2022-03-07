import React from 'react';
import {
  TextField,
} from '@mui/material';

function FirstnameFieldForm() {
  return (
    <TextField required type="text" name="firstname" label="Prénom" variant="Outlined" />
  );
}

export default React.memo(FirstnameFieldForm);
