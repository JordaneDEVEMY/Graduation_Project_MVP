import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
} from '@mui/material';

function FirstnameFieldForm({
  handleInputChange,
  formValues,
}) {
  return (
    <TextField
      required
      type="text"
      name="firstname"
      label="Prénom"
      variant="outlined"
      value={formValues.firstname}
      onChange={handleInputChange}
    />
  );
}

FirstnameFieldForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  formValues: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
  }).isRequired,
};

export default React.memo(FirstnameFieldForm);
