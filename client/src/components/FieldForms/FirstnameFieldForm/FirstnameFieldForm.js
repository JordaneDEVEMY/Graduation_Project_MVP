import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
} from '@mui/material';

function FirstnameFieldForm({
  handleInputChange,
  firstname,
}) {
  return (
    <TextField
      required
      type="text"
      name="firstname"
      label="Prénom"
      value={firstname}
      variant="outlined"
      onChange={handleInputChange}
    />
  );
}

FirstnameFieldForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  firstname: PropTypes.string.isRequired,
};

export default React.memo(FirstnameFieldForm);
