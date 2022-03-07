import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
} from '@mui/material';

function QualificationFieldForm({
  handleInputChange,
  formValues,
}) {
  return (
    <TextField
      required
      type="number"
      name="employee_qualification_id"
      label="Qualification ?"
      variant="outlined"
      value={formValues.employee_qualification_id}
      onChange={handleInputChange}
    />
  );
}

QualificationFieldForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  formValues: PropTypes.shape({
    employee_qualification_id: PropTypes.string.isRequired,
  }).isRequired,
};

export default React.memo(QualificationFieldForm);
