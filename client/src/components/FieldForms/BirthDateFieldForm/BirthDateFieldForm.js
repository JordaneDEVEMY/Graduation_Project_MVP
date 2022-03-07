import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
} from '@mui/material';

function BirthDateFieldForm({
  handleInputChange,
  formValues,
}) {
  return (
    <TextField
      required
      type="date"
      name="date_of_birth"
      label="Date de naissance"
      variant="outlined"
      value={formValues.date_of_birth}
      onChange={handleInputChange}
    />
  );
}

BirthDateFieldForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  formValues: PropTypes.shape({
    date_of_birth: PropTypes.string.isRequired,
  }).isRequired,
};

export default React.memo(BirthDateFieldForm);
