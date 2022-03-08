import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
} from '@mui/material';

function AvatarFieldForm({
  handleChange,
}) {
  return (
    <TextField
      required
      type="text"
      name="avatar"
      label="Avatar"
      variant="outlined"
      onChange={(event) => handleChange('avatar', event.target.value)}
    />
  );
}

AvatarFieldForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default React.memo(AvatarFieldForm);
