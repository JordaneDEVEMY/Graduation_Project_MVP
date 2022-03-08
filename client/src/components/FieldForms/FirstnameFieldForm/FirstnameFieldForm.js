import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
} from '@mui/material';

function FirstnameFieldForm({
  handleChange,
}) {
  return (
    <TextField
      required
      type="text"
      name="firstname"
      label="Prénom"
      variant="outlined"
      onChange={(event) => handleChange('firstname', event.target.value)}
    />
  );
}

FirstnameFieldForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default React.memo(FirstnameFieldForm);
