import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
} from '@mui/material';

function LastnameFieldForm({
  handleInputChange,
  formValues,
}) {
  return (
    <TextField
      required
      type="text"
      name="lastname"
      label="Nom"
      variant="outlined"
      value={formValues.lastname}
      onChange={handleInputChange}
    />
  );
}

LastnameFieldForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  formValues: PropTypes.shape({
    lastname: PropTypes.string.isRequired,
  }).isRequired,
};

export default React.memo(LastnameFieldForm);
