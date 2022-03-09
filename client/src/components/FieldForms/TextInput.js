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
  value,
}) {
  return (
    <TextField
      sx={{ width: '400px' }}
      required
      type={type}
      name={nameValue}
      value={value}
      label={label}
      defaultValue=""
      variant="outlined"
      onChange={(event) => handleChange(nameValue, event.target.value)}
    />
  );
}

TextInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  nameValue: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default React.memo(TextInput);
