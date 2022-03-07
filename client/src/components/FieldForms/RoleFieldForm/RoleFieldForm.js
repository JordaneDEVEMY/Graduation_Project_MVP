import React, { useState } from 'react';
import {
  FormControl, FormLabel, RadioGroup, FormControlLabel, Radio,
} from '@mui/material';

function RoleFieldForm() {
  const [formValues, setFormValues] = useState('user');
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

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

export default React.memo(RoleFieldForm);
