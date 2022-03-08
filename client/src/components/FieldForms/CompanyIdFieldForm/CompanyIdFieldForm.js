import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
} from '@mui/material';

function CompanyIdFieldForm({
  handleChange,
}) {
  return (
    <TextField
      required
      type="number"
      name="companyId"
      label="ID client"
      variant="outlined"
      onChange={(event) => handleChange('companyId', event.target.value)}
    />
  );
}

CompanyIdFieldForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default React.memo(CompanyIdFieldForm);
