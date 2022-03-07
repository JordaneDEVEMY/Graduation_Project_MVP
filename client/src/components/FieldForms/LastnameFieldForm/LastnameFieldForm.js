import React from 'react';
import {
  TextField,
} from '@mui/material';

function LastnameFieldForm() {
  return (
    <TextField required type="text" name="lastname" label="Nom de famille" variant="Outlined" />
  );
}

export default React.memo(LastnameFieldForm);
