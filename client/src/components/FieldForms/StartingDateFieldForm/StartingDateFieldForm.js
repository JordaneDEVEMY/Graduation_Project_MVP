import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
} from '@mui/material';

function StartingDateFieldForm({
  handleChange,
}) {
  return (
    <TextField
      required
      type="date"
      name="startingDate"
      label="Date de début"
      variant="outlined"
      onChange={(event) => handleChange('startingDate', event.target.value)}
    />
  );
}

StartingDateFieldForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default React.memo(StartingDateFieldForm);
