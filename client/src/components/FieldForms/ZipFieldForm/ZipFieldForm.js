import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
} from '@mui/material';

function ZipFieldForm({
  handleInputChange,
  formValues,
}) {
  return (
    <TextField
      required
      type="number"
      name="zip_code"
      label="Code postal"
      variant="outlined"
      value={formValues.zip_code}
      onChange={handleInputChange}
    />
  );
}

ZipFieldForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  formValues: PropTypes.shape({
    zip_code: PropTypes.number.isRequired,
  }).isRequired,
};

export default React.memo(ZipFieldForm);
