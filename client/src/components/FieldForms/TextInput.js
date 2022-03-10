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
  defaultValue,
  value,
  errorDisplay,
}) {
  return (
    <>
      <TextField
        sx={{ width: '400px' }}
        required
        type={type}
        name={nameValue}
        value={value}
        label={label}
        defaultValue={defaultValue}
        variant="outlined"
        onChange={(event) => handleChange(nameValue, event.target.value)}
      />

      { errorDisplay && (
      <TextField
        sx={{ width: '400px' }}
        required
        error
        type={type}
        name={nameValue}
        value={value}
        label={label}
        defaultValue={defaultValue}
        variant="outlined"
        onChange={(event) => handleChange(nameValue, event.target.value)}
      />
      ) }

    </>
  );
}

TextInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  nameValue: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  errorDisplay: PropTypes.string.isRequired,
};

export default React.memo(TextInput);
