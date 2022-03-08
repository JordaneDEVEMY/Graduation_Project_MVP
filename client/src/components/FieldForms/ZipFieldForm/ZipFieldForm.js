import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
} from '@mui/material';

function ZipFieldForm({
  handleChange,
}) {
  return (
    <TextField
      required
      type="number"
      name="zipCode"
      label="Code postal"
      variant="outlined"
      onChange={(event) => handleChange('zipCode', event.target.value)}
    />
  );
}

ZipFieldForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default React.memo(ZipFieldForm);
