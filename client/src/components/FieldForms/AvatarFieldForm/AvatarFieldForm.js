import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
} from '@mui/material';

function AvatarFieldForm({
  handleInputChange,
  formValues,
}) {
  return (
    <TextField
      type="text"
      name="avatar"
      label="Avatar"
      variant="outlined"
      value={formValues.avatar}
      onChange={handleInputChange}
    />
  );
}

AvatarFieldForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  formValues: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};

export default React.memo(AvatarFieldForm);
