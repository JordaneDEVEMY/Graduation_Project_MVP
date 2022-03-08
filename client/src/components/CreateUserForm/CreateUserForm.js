/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import {
  Grid, Button, Typography, Divider, Box,
  useTheme,
} from '@mui/material';

import FirstnameFieldForm from '../FieldForms/FirstnameFieldForm/FirstnameFieldForm';
// import LastnameFieldForm from '../FieldForms/LastnameFieldForm/LastnameFieldForm';
// import EmailFieldForm from '../FieldForms/EmailFieldForm/EmailFieldForm';
// import PasswordFieldForm from '../FieldForms/PasswordFieldForm/PasswordFieldForm';
// import SocialNumberFieldForm from '../FieldForms/SocialNumberFieldForm/SocialNumberFieldForm';
// import BirthDateFieldForm from '../FieldForms/BirthDateFieldForm/BirthDateFieldForm';
// import AddressFieldForm from '../FieldForms/AddressFieldForm/AddressFieldForm';
// import ZipFieldForm from '../FieldForms/ZipFieldForm/ZipFieldForm';
// import StartingDateFieldForm from '../FieldForms/StartingDateFieldForm/StartingDateFieldForm';
// import AvatarFieldForm from '../FieldForms/AvatarFieldForm/AvatarFieldForm';
// import FunctionFieldForm from '../FieldForms/FunctionFieldForm/FunctionFieldForm';
// import QualificationFieldForm from '../FieldForms/QualificationFieldForm/QualificationFieldForm';

function CreateUserForm({
  handleCreateUser,
  firstnameValue,
}) {
  const theme = useTheme();

  const [employee, setEmployee] = useState({
    firstname: firstnameValue,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setEmployee((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateUser();
    console.log(employee);
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
              handleInputChange={handleInputChange}
            />
          </Grid>

          {/* <Grid item xs={12}>
            <LastnameFieldForm formValues={formValues} handleInputChange={handleInputChange} />
          </Grid>
          <Grid item xs={12}>
            <EmailFieldForm formValues={formValues} handleInputChange={handleInputChange} />
          </Grid>
          <Grid item xs={12}>
            <PasswordFieldForm formValues={formValues} handleInputChange={handleInputChange} />
          </Grid>
          <Grid item xs={12}>
            <SocialNumberFieldForm formValues={formValues} handleInputChange={handleInputChange} />
          </Grid>
          <Grid item xs={12}>
            <BirthDateFieldForm formValues={formValues} handleInputChange={handleInputChange} />
          </Grid>
          <Grid item xs={12}>
            <AddressFieldForm formValues={formValues} handleInputChange={handleInputChange} />
          </Grid>
          <Grid item xs={12}>
            <ZipFieldForm formValues={formValues} handleInputChange={handleInputChange} />
          </Grid>
          <Grid item xs={12}>
            <StartingDateFieldForm formValues={formValues} handleInputChange={handleInputChange} />
          </Grid>
          <Grid item xs={12}>
            <AvatarFieldForm formValues={formValues} handleInputChange={handleInputChange} />
          </Grid>
          <Grid item xs={12}>
            <FunctionFieldForm formValues={formValues} handleInputChange={handleInputChange} />
          </Grid>
          <Grid item xs={12}>
            <QualificationFieldForm formValues={formValues} handleInputChange={handleInputChange} />
          </Grid> */}

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
  firstnameValue: PropTypes.string.isRequired,
};

export default React.memo(CreateUserForm);
