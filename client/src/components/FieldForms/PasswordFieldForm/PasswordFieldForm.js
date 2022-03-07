import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  TextField, InputAdornment, IconButton,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function PasswordlFieldForm({
  handleInputChange,
  formValues,
}) {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  return (
    <TextField
      required
      type={passwordVisibility ? 'text' : 'password'}
      label="password"
      variant="outlined"
      value={formValues.password}
      onChange={handleInputChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setPasswordVisibility((x) => !x)}
            >
              {passwordVisibility ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

PasswordlFieldForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  formValues: PropTypes.shape({
    password: PropTypes.string.isRequired,
  }).isRequired,
};

export default React.memo(PasswordlFieldForm);
