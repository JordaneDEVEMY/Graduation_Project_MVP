/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { PropTypes } from 'prop-types';
import {
  Grid, Button, Typography, Divider, Box,
} from '@mui/material';
import RoleFieldForm from '../FieldForms/RoleFieldForm';
import TextInput from '../FieldForms/TextInput';

function CreateUserForm({
  handleCreateUser,
  changeField,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateUser();
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Typography variant="h1">
          Ajouter un employé
        </Typography>
        <Grid item xs={12}>
          <RoleFieldForm
            handleChange={changeField}
          />
        </Grid>
        <Typography variant="h2">
          Informations personnelles
        </Typography>
        <Divider />
        <Grid container spacing={1} mt={1}>
          <Grid item xs={12} md={6}>
            <TextInput
              handleChange={changeField}
              type="text"
              nameValue="firstname"
              label="Prénom"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              handleChange={changeField}
              type="text"
              nameValue="lastname"
              label="Nom"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              handleChange={changeField}
              type="email"
              nameValue="email"
              label="E-mail"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              handleChange={changeField}
              type="text"
              nameValue="dateOfBirth"
              placeHolder="yyyy-mm-dd"
              label="Date de naissance"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              handleChange={changeField}
              type="text"
              nameValue="phoneNumber"
              label="Téléphone Fixe"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              handleChange={changeField}
              type="text"
              nameValue="mobileNumber"
              label="Téléphone Portable"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              handleChange={changeField}
              type="text"
              nameValue="address"
              label="Adresse"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              handleChange={changeField}
              type="number"
              nameValue="zipCode"
              label="Code Postal"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              handleChange={changeField}
              type="number"
              nameValue="socialSecurityNumber"
              label="Numéro Sécurité Sociale"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              handleChange={changeField}
              type="password"
              nameValue="password"
              label="Mot de passe"
            />
          </Grid>
        </Grid>

        <Typography variant="h2">
          Informations relatives à l'entreprise
        </Typography>
        <Divider />
        <Grid container spacing={1} mt={1}>

          <Grid item xs={12} md={6}>
            <TextInput
              handleChange={changeField}
              type="text"
              nameValue="startingDate"
              label="Date d'entrée"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              handleChange={changeField}
              type="text"
              nameValue="fonction"
              label="Fonction"
            />
            <Grid item xs={12} md={6}>
              <TextInput
                handleChange={changeField}
                type="text"
                nameValue="avatar"
                label="Avatar"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInput
                handleChange={changeField}
                type="text"
                nameValue="label"
                label="Label"
              />
            </Grid>
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
