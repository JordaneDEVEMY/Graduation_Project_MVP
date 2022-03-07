import React from 'react';
import {
  TextField,
} from '@mui/material';

function ZipFieldForm() {
  return (
    <TextField required type="number" name="zip_code" label="Code postal" variant="Outlined" />
  );
}

export default React.memo(ZipFieldForm);
