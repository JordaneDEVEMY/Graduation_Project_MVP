import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
} from '@mui/material';

function AddressFieldForm({
  handleChange,
}) {
  return (
    <TextField
      required
      type="text"
      name="adress"
      label="Adresse postale"
      variant="outlined"
      onChange={(event) => handleChange('adress', event.target.value)}
    />
  );
}

AddressFieldForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default React.memo(AddressFieldForm);
