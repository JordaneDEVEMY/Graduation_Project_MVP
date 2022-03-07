import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
} from '@mui/material';

function FunctionFieldForm({
  handleInputChange,
  formValues,
}) {
  return (
    <TextField
      type="text"
      name="function"
      label="Poste occupé"
      variant="outlined"
      value={formValues.function}
      onChange={handleInputChange}
    />
  );
}

FunctionFieldForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  formValues: PropTypes.shape({
    function: PropTypes.string.isRequired,
  }).isRequired,
};

export default React.memo(FunctionFieldForm);
