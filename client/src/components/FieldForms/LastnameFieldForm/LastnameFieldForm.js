import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
} from '@mui/material';

function LastnameFieldForm({
  handleChange,
}) {
  return (
    <TextField
      required
      type="text"
      name="lastname"
      label="Nom"
      variant="outlined"
      onChange={(event) => handleChange('lastname', event.target.value)}
    />
  );
}

LastnameFieldForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default React.memo(LastnameFieldForm);
