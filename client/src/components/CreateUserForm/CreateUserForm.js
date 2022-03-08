/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { PropTypes } from 'prop-types';
import {
  Grid, Button, Typography, Divider, Box,
  useTheme,
} from '@mui/material';

import FirstnameFieldForm from '../FieldForms/FirstnameFieldForm/FirstnameFieldForm';
import LastnameFieldForm from '../FieldForms/LastnameFieldForm/LastnameFieldForm';
import EmailFieldForm from '../FieldForms/EmailFieldForm/EmailFieldForm';
import PhoneNumberFieldForm from '../FieldForms/PhoneNumberFieldForm/PhoneNumberFieldForm';
import MobileNumberFieldForm from '../FieldForms/MobileNumberFieldForm/MobileNumberFieldForm';
import PasswordFieldForm from '../FieldForms/PasswordFieldForm/PasswordFieldForm';
import SocialNumberFieldForm from '../FieldForms/SocialNumberFieldForm/SocialNumberFieldForm';
import BirthDateFieldForm from '../FieldForms/BirthDateFieldForm/BirthDateFieldForm';
import AddressFieldForm from '../FieldForms/AddressFieldForm/AddressFieldForm';
import ZipFieldForm from '../FieldForms/ZipFieldForm/ZipFieldForm';
import StartingDateFieldForm from '../FieldForms/StartingDateFieldForm/StartingDateFieldForm';
import AvatarFieldForm from '../FieldForms/AvatarFieldForm/AvatarFieldForm';
import FunctionFieldForm from '../FieldForms/FunctionFieldForm/FunctionFieldForm';
import RoleFieldForm from '../FieldForms/RoleFieldForm/RoleFieldForm';
import LabelFieldForm from '../FieldForms/LabelFieldForm/LabelFieldForm';

function CreateUserForm({
  handleCreateUser,
  changeField,
}) {
  const theme = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateUser();
  };

  return (
    <Box sx={{ margin: theme.spacing(4) }}>
      <form onSubmit={handleSubmit}>
        <Typography variant="h1">
          Ajouter un employé
        </Typography>
        <Divider />
        <Grid container spacing={1} mt={1}>
          <Grid item xs={12}>
            <FirstnameFieldForm
              handleChange={changeField}
            />
          </Grid>
          <Grid item xs={12}>
            <LastnameFieldForm
              handleChange={changeField}
            />
          </Grid>
          <Grid item xs={12}>
            <EmailFieldForm
              handleChange={changeField}
            />
          </Grid>

          <PhoneNumberFieldForm
            handleChange={changeField}
          />

          <MobileNumberFieldForm
            handleChange={changeField}
          />

          <Grid item xs={12}>
            <PasswordFieldForm
              handleChange={changeField}
            />
          </Grid>
          <Grid item xs={12}>
            <SocialNumberFieldForm
              handleChange={changeField}
            />
          </Grid>
          <Grid item xs={12}>
            <BirthDateFieldForm
              handleChange={changeField}
            />
          </Grid>
          <Grid item xs={12}>
            <AddressFieldForm
              handleChange={changeField}
            />
          </Grid>
          <Grid item xs={12}>
            <ZipFieldForm
              handleChange={changeField}
            />
          </Grid>
          <Grid item xs={12}>
            <StartingDateFieldForm
              handleChange={changeField}
            />
          </Grid>
          <Grid item xs={12}>
            <AvatarFieldForm
              handleChange={changeField}
            />
          </Grid>
          <Grid item xs={12}>
            <FunctionFieldForm
              handleChange={changeField}
            />
          </Grid>
          <Grid item xs={12}>
            <RoleFieldForm
              handleChange={changeField}
            />
          </Grid>
          <Grid item xs={12}>
            <LabelFieldForm
              handleChange={changeField}
            />
          </Grid>

          <Grid item xs={12}>
            <Button variant="outlined" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

CreateUserForm.propTypes = {
  handleCreateUser: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
};

export default React.memo(CreateUserForm);
