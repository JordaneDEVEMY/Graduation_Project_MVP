import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
} from '@mui/material';

function AddressFieldForm({
  handleInputChange,
  formValues,
}) {
  return (
    <TextField
      required
      type="text"
      name="address"
      label="Adresse postale"
      variant="outlined"
      value={formValues.address}
      onChange={handleInputChange}
    />
  );
}

AddressFieldForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  formValues: PropTypes.shape({
    address: PropTypes.string.isRequired,
  }).isRequired,
};

export default React.memo(AddressFieldForm);
