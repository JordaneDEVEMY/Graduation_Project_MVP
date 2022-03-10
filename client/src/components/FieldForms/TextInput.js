import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
} from '@mui/material';

function TextInput({
  type,
  label,
  defaultValue,
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
      variant="outlined"
    />
  );
}

TextInput.propTypes = {
  type: PropTypes.string.isRequired,
  nameValue: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
};

export default React.memo(TextInput);
