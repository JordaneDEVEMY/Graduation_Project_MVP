import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
} from '@mui/material';

function EmailFieldForm({
  handleChange,
}) {
  return (
    <TextField
      required
      type="text"
      name="email"
      label="E-mail"
      variant="outlined"
      onChange={(event) => handleChange('email', event.target.value)}
    />
  );
}

EmailFieldForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default React.memo(EmailFieldForm);
