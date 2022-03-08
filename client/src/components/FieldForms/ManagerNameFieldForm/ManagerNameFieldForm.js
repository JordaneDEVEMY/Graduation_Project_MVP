import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
} from '@mui/material';

function ManagerNameFieldForm({
  handleChange,
}) {
  return (
    <TextField
      required
      type="text"
      name="managerName"
      label="Nom du manager"
      variant="outlined"
      onChange={(event) => handleChange('managerName', event.target.value)}
    />
  );
}

ManagerNameFieldForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default React.memo(ManagerNameFieldForm);
