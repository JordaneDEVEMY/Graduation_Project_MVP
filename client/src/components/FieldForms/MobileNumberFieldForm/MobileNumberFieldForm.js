import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
} from '@mui/material';

function MobileNumberFieldForm({
  handleChange,
}) {
  return (
    <TextField
      required
      type="number"
      name="mobileNumber"
      label="Numéro de téléphone mobile"
      variant="outlined"
      onChange={(event) => handleChange('mobileNumber', event.target.value)}
    />
  );
}

MobileNumberFieldForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default React.memo(MobileNumberFieldForm);
