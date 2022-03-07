import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
} from '@mui/material';

function SocialNumberFieldForm({
  handleInputChange,
  formValues,
}) {
  return (
    <TextField
      required
      type="number"
      name="social_security_number"
      label="Numéro de sécurité sociale"
      variant="outlined"
      value={formValues.social_security_number}
      onChange={handleInputChange}
    />
  );
}

SocialNumberFieldForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  formValues: PropTypes.shape({
    social_security_number: PropTypes.number.isRequired,
  }).isRequired,
};

export default React.memo(SocialNumberFieldForm);
