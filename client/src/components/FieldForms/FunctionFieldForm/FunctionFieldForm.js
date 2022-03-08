import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
} from '@mui/material';

function FunctionFieldForm({
  handleChange,
}) {
  return (
    <TextField
      required
      type="text"
      name="fonction"
      label="Fonction"
      variant="outlined"
      onChange={(event) => handleChange('fonction', event.target.value)}
    />
  );
}

FunctionFieldForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default React.memo(FunctionFieldForm);
