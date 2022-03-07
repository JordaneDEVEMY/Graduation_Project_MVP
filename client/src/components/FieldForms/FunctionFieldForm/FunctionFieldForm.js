import React from 'react';
import {
  TextField,
} from '@mui/material';

function FunctionFieldForm() {
  return (
    <TextField type="text" name="function" label="Poste occupé" variant="Outlined" />
  );
}

export default React.memo(FunctionFieldForm);
