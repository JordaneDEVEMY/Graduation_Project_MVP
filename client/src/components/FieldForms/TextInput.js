import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
} from '@mui/material';

function TextInput({
  handleChange,
  type,
  nameValue,
  label,
}) {
  return (
    <TextField
      sx={{ width: '400px' }}
      required
      type={type}
      name={nameValue}
      label={label}
      variant="outlined"
      onChange={(event) => handleChange(nameValue, event.target.value)}
    />
  );
}

TextInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  nameValue: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default React.memo(TextInput);