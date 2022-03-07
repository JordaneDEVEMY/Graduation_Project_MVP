import React from 'react';
import {
  TextField,
} from '@mui/material';

function BirthDateFieldForm() {
  return (
    <TextField required type="date" name="date_of_birth" label="Date de naissancd" variant="Outlined" />
  );
}

export default React.memo(BirthDateFieldForm);
