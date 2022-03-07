import React, { useState } from 'react';
import {
  TextField, InputAdornment, VisibilityOffIcon, VisibilityIcon, IconButton,
} from '@mui/material';

function PasswordlFieldForm() {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  return (
    <TextField
      required
      type={passwordVisibility ? 'text' : 'password'}
      label="password"
      variant="outlined"
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

export default React.memo(PasswordlFieldForm);
