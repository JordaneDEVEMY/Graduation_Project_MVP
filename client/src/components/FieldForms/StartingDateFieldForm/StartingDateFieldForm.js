import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
} from '@mui/material';

function StartingDateFieldForm({
  handleInputChange,
  formValues,
}) {
  return (
    <TextField
      required
      type="date"
      name="starting_date"
      label="Date de début"
      variant="outlined"
      value={formValues.starting_date}
      onChange={handleInputChange}
    />
  );
}

StartingDateFieldForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  formValues: PropTypes.shape({
    starting_date: PropTypes.string.isRequired,
  }).isRequired,
};

export default React.memo(StartingDateFieldForm);
