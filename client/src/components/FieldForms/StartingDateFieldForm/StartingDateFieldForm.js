import React from 'react';
import {
  TextField,
} from '@mui/material';

function StartingDateFieldForm() {
  return (
    <TextField required type="date" name="starting_date" label="Date de début" variant="Outlined" />
  );
}

export default React.memo(StartingDateFieldForm);
