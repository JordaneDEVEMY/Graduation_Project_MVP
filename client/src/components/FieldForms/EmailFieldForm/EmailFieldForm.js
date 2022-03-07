import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
} from '@mui/material';

function EmailFieldForm({
  handleInputChange,
  formValues,
}) {
  return (
    <TextField
      required
      type="text"
      name="email"
      label="E-mail"
      variant="outlined"
      value={formValues.email}
      onChange={handleInputChange}
    />
  );
}

EmailFieldForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  formValues: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default React.memo(EmailFieldForm);
