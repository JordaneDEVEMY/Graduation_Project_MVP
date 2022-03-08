/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { PropTypes } from 'prop-types';
import {
  Grid, Button, Typography, Box,
} from '@mui/material';

import TextInput from '../FieldForms/TextInput';

function CreateUserForm({
  handleCreateSite,
  changeField,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateSite();
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Typography variant="h1">
          Ajouter un site de production
        </Typography>
        <Grid container spacing={1} mt={1}>
          <Grid item xs={12} md={6}>
            <TextInput
              handleChange={changeField}
              type="text"
              nameValue="name"
              label="Nom"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              handleChange={changeField}
              type="number"
              nameValue="companyId"
              label="ID Compagnie"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextInput
              handleChange={changeField}
              type="text"
              nameValue="adress"
              label="Adresse postale"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              handleChange={changeField}
              type="number"
              nameValue="zipCode"
              label="Code postal"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextInput
              handleChange={changeField}
              type="number"
              nameValue="estimatedDuration"
              label="Durée estimée"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              handleChange={changeField}
              type="text"
              nameValue="managerName"
              label="Nom du manager"
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
  handleCreateSite: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
};

export default React.memo(CreateUserForm);
