/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Grid } from '@mui/material';

import FirstnameFieldForm from '../FieldForms/FirstnameFieldForm/FirstnameFieldForm';
import LastnameFieldForm from '../FieldForms/LastnameFieldForm/LastnameFieldForm';
import EmailFieldForm from '../FieldForms/EmailFieldForm/EmailFieldForm';
import PasswordFieldForm from '../FieldForms/PasswordFieldForm/PasswordFieldForm';
import SocialNumberFieldForm from '../FieldForms/SocialNumberFieldForm/SocialNumberFieldForm';
import BirthDateFieldForm from '../FieldForms/BirthDateFieldForm/BirthDateFieldForm';
import AddressFieldForm from '../FieldForms/AddressFieldForm/AddressFieldForm';
import ZipFieldForm from '../FieldForms/ZipFieldForm/ZipFieldForm';
import StartingDateFieldForm from '../FieldForms/StartingDateFieldForm/StartingDateFieldForm';
import AvatarFieldForm from '../FieldForms/AvatarFieldForm/AvatarFieldForm';
import FunctionFieldForm from '../FieldForms/FunctionFieldForm/FunctionFieldForm';
import RoleFieldForm from '../FieldForms/RoleFieldForm/RoleFieldForm';
import QualificationFieldForm from '../FieldForms/QualificationFieldForm/QualificationFieldForm';

function CreateUserForm() {
  // const [formValues, setFormValues] = useState(defaultValues);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={1} mt={1}>
        <Grid item xs={12} sm={6}>
          <FirstnameFieldForm />
        </Grid>

        <Grid item xs={12} sm={6}>
          <LastnameFieldForm />
        </Grid>

        <Grid item xs={12} sm={6}>
          <EmailFieldForm />
        </Grid>

        <Grid item xs={12} sm={6}>
          <PasswordFieldForm />
        </Grid>

        <Grid item xs={12} sm={6}>
          <SocialNumberFieldForm />
        </Grid>

        <Grid item xs={12} sm={6}>
          <BirthDateFieldForm />
        </Grid>

        <Grid item xs={12} sm={6}>
          <AddressFieldForm />
        </Grid>

        <Grid item xs={12} sm={6}>
          <ZipFieldForm />
        </Grid>

        <Grid item xs={12} sm={6}>
          <StartingDateFieldForm />
        </Grid>

        <Grid item xs={12} sm={6}>
          <AvatarFieldForm />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FunctionFieldForm />
        </Grid>

        <Grid item xs={12} sm={6}>
          <RoleFieldForm />
        </Grid>

        <Grid item xs={12} sm={6}>
          <QualificationFieldForm />
        </Grid>
      </Grid>
    </form>
  );
}

export default React.memo(CreateUserForm);
