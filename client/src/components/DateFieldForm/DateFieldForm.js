import React from 'react';
import {
  TextField,
} from '@mui/material';

function DateFieldForm() {
  return (
    <TextField required type="date" label="Champ requis" variant="Outlined" />
  );
}

export default React.memo(DateFieldForm);
