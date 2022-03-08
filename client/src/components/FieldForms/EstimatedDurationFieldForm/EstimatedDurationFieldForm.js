import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
} from '@mui/material';

function EstimatedDurationFieldForm({
  handleChange,
}) {
  return (
    <TextField
      required
      type="number"
      name="estimatedDuration"
      label="Durée estimée"
      variant="outlined"
      onChange={(event) => handleChange('estimatedDuration', event.target.value)}
    />
  );
}

EstimatedDurationFieldForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default React.memo(EstimatedDurationFieldForm);
