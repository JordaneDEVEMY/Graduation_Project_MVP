import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
} from '@mui/material';

function LabelFieldForm({
  handleChange,
}) {
  return (
    <TextField
      required
      type="text"
      name="label"
      label="Label du poste occupé"
      variant="outlined"
      onChange={(event) => handleChange('label', event.target.value)}
    />
  );
}

LabelFieldForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default React.memo(LabelFieldForm);
