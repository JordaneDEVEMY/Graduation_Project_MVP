import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
} from '@mui/material';

function TextInput({
  type,
  label,
  nameValue,
  value,
  handleChange,
  placeholder,
}) {
  return (
    <TextField
      sx={{ maxWidth: '400px', minWidth: '300px' }}
      required
      type={type}
      value={value}
      label={label}
      nameValue={nameValue}
      placeholder={placeholder}
      variant="outlined"
      onChange={(event) => handleChange(nameValue, event.target.value)}
    />
  );
}

TextInput.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  nameValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
};

TextInput.defaultProps = {
  handleChange: null,
  placeholder: '',
};

export default React.memo(TextInput);
