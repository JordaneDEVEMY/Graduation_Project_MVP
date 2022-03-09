import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl, FormLabel, RadioGroup, FormControlLabel, Radio,
} from '@mui/material';

function RoleFieldForm({
  handleChange,
  value,
}) {
  return (
    <FormControl
      required
    >
      <FormLabel>Rôle</FormLabel>
      <RadioGroup
        row
        defaultValue={value}
      >
        <FormControlLabel
          key="admin"
          value="admin"
          control={<Radio size="small" />}
          label="Administrateur"
          name="roleApplication"
          onChange={(event) => handleChange('roleApplication', event.target.value)}
        />
        <FormControlLabel
          key="user"
          value="user"
          control={<Radio size="small" />}
          label="Employé"
          name="roleApplication"
          onChange={(event) => handleChange('roleApplication', event.target.value)}
        />
      </RadioGroup>
    </FormControl>
  );
}

RoleFieldForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default React.memo(RoleFieldForm);
