import React from 'react';
import {
  TextField,
} from '@mui/material';

function AvatarFieldForm() {
  return (
    <TextField type="text" name="avatar" label="Avatar" variant="Outlined" />
  );
}

export default React.memo(AvatarFieldForm);
