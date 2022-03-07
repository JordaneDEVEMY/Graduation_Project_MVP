import React from 'react';
import {
  TextField,
} from '@mui/material';

function QualificationFieldForm() {
  return (
    <TextField required type="number" name="employee_qualification_id" label="Qualification ?" variant="Outlined" />
  );
}

export default React.memo(QualificationFieldForm);
