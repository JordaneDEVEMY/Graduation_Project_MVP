/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { PropTypes } from 'prop-types';
import {
  Grid, Button, Typography, Box,
} from '@mui/material';

import TextInput from '../FieldForms/TextInput';

function CreateCompanyForm({
  handleCreateCompany,
  changeField,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateCompany();
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Typography variant="h1">
          Ajouter un client / une compagnie
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
              type="text"
              nameValue="type"
              label="Type"
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
              nameValue="zip_code"
              label="Code postal"
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

CreateCompanyForm.propTypes = {
  handleCreateCompany: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
};

export default React.memo(CreateCompanyForm);
