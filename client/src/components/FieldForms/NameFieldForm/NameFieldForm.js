import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
} from '@mui/material';

function NameFieldForm({
  handleChange,
}) {
  return (
    <TextField
      required
      type="text"
      name="name"
      label="Nom"
      onChange={(event) => handleChange('name', event.target.value)}
      variant="outlined"
    />
  );
}

NameFieldForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default React.memo(NameFieldForm);
