import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
} from '@mui/material';

function PhoneNumberFieldForm({
  handleChange,
}) {
  return (
    <TextField
      required
      type="number"
      name="phoneNumber"
      label="Numéro de téléphone fixe"
      variant="outlined"
      onChange={(event) => handleChange('phoneNumber', event.target.value)}
    />
  );
}

PhoneNumberFieldForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default React.memo(PhoneNumberFieldForm);
