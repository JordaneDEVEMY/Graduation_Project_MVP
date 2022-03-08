import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
} from '@mui/material';

function BirthDateFieldForm({
  handleChange,
}) {
  return (
    <TextField
      required
      type="date"
      name="dateOfBirth"
      label="Date de naissance"
      variant="outlined"
      onChange={(event) => handleChange('dateOfBirth', event.target.value)}
    />
  );
}

BirthDateFieldForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default React.memo(BirthDateFieldForm);
