import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
} from '@mui/material';

function SocialNumberFieldForm({
  handleChange,
}) {
  return (
    <TextField
      required
      type="number"
      name="socialSecurityNumber"
      label="Numéro de sécurité sociale"
      variant="outlined"
      onChange={(event) => handleChange('socialSecurityNumber', event.target.value)}
    />
  );
}

SocialNumberFieldForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default React.memo(SocialNumberFieldForm);
