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
    <Box
      sx={{ maxWidth: '80vw', margin: '0 auto' }}
    >
      <form onSubmit={handleSubmit}>
        <Typography variant="h1" sx={{ textAlign: 'center' }}>
          Ajouter une Entreprise
        </Typography>
        <Grid container spacing={1} mt={1} sx={{ textAlign: 'center' }}>
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
              nameValue="address"
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

CreateCompanyForm.propTypes = {
  handleCreateCompany: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
};

export default React.memo(CreateCompanyForm);
