/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { PropTypes } from 'prop-types';
import {
  Grid, Button, Typography, Divider, Box,
} from '@mui/material';
import RoleFieldForm from '../FieldForms/RoleFieldForm';
import TextInput from '../FieldForms/TextInput';

function CreateUserForm({
  handleCreateEmployee,
  changeField,
  employee,
  handleClose,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateEmployee();
    handleClose();
  };

  return (
    <Box
      sx={{ margin: '0 auto', position: 'relative' }}
    >
      <form onSubmit={handleSubmit}>
        <Typography
          variant="h1"
          sx={{ textAlign: 'center' }}
        >
          Ajouter un employé
        </Typography>
        <Typography variant="h2">
          Informations personnelles
        </Typography>
        <Divider />
        <Grid container spacing={1} mt={1} sx={{ textAlign: 'center', marginBottom: '15px' }}>
          <Grid item xs={12} md={6}>
            <TextInput
              handleChange={changeField}
              type="text"
              nameValue="firstname"
              label="Prénom"
              value={employee.firstname}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              handleChange={changeField}
              type="text"
              nameValue="lastname"
              label="Nom"
              value={employee.lastname}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              handleChange={changeField}
              type="email"
              nameValue="email"
              label="E-mail"
              value={employee.email}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              handleChange={changeField}
              type="password"
              nameValue="password"
              label="Mot de passe"
              value={employee.password}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              handleChange={changeField}
              type="text"
              nameValue="dateOfBirth"
              placeHolder="yyyy-mm-dd"
              label="Date de naissance"
              value={employee.dateOfBirth}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              handleChange={changeField}
              type="text"
              nameValue="phoneNumber"
              label="Téléphone Fixe"
              value={employee.phoneNumber}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              handleChange={changeField}
              type="text"
              nameValue="mobileNumber"
              label="Téléphone Portable"
              value={employee.mobileNumber}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              handleChange={changeField}
              type="text"
              nameValue="address"
              label="Adresse"
              value={employee.address}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              handleChange={changeField}
              type="number"
              nameValue="zipCode"
              label="Code Postal"
              value={employee.zipCode}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              handleChange={changeField}
              type="text"
              nameValue="socialSecurityNumber"
              label="Numéro Sécurité Sociale"
              value={employee.socialSecurityNumber}
            />
          </Grid>
        </Grid>

        <Typography variant="h2">
          Informations relatives à l'entreprise
        </Typography>

        <Divider />

        <Grid container spacing={1} mt={1} sx={{ textAlign: 'center' }}>
          <Grid item xs={12} md={6}>
            <RoleFieldForm
              handleChange={changeField}
              value={employee.roleApplication}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} mt={1} sx={{ textAlign: 'center' }}>
          <Grid item xs={12} md={6}>
            <TextInput
              handleChange={changeField}
              type="text"
              nameValue="startingDate"
              label="Date d'entrée"
              value={employee.startingDate}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              handleChange={changeField}
              type="text"
              nameValue="fonction"
              label="Fonction"
              value={employee.fonction}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              handleChange={changeField}
              type="text"
              nameValue="avatar"
              label="Avatar"
              value={employee.avatar}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              handleChange={changeField}
              type="text"
              nameValue="label"
              label="Label"
              value={employee.label}
            />
          </Grid>

          <Grid container spacing={1} mt={1} sx={{ textAlign: 'center' }}>
            <Grid item xs={12}>
              <Button
                type="submit"
                size="large"
                variant="contained"
              >
                Valider
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

CreateUserForm.propTypes = {
  handleCreateEmployee: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  employee: PropTypes.shape().isRequired,
};

export default React.memo(CreateUserForm);
