import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl, FormLabel, RadioGroup, FormControlLabel, Radio,
} from '@mui/material';

function RoleFieldForm({
  handleInputChange,
  formValues,
}) {
  return (
    <FormControl>
      <FormLabel>Rôle</FormLabel>
      <RadioGroup
        name="role_application"
        value={formValues.role_application}
        onChange={handleInputChange}
        row
      >
        <FormControlLabel
          key="admin"
          value="admin"
          control={<Radio size="small" />}
          label="Administrateur"
        />
        <FormControlLabel
          key="user"
          value="user"
          control={<Radio size="small" />}
          label="Employé"
        />
      </RadioGroup>
    </FormControl>
  );
}

RoleFieldForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  formValues: PropTypes.shape({
    role_application: PropTypes.string.isRequired,
  }).isRequired,
};

export default React.memo(RoleFieldForm);
