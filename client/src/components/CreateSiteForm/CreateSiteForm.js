import React from 'react';
import { PropTypes } from 'prop-types';
import {
  Grid, Button, Typography, Divider, Box,
} from '@mui/material';
import TextInput from '../FieldForms/TextInput';

function CreateUserForm({
  handleCreateSite,
  changeField,
  site,
  handleClose,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateSite();
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
          Ajouter un Site
        </Typography>
        <Divider />
        <Grid container spacing={1} mt={1} sx={{ textAlign: 'center', marginBottom: '15px' }}>
          <Grid item xs={12} md={6}>
            <TextInput
              handleChange={changeField}
              type="text"
              nameValue="name"
              label="Nom du site"
              value={site.name}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              handleChange={changeField}
              type="text"
              nameValue="address"
              label="Adresse"
              value={site.address}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              handleChange={changeField}
              type="text"
              nameValue="zip_code"
              label="Code Postal"
              value={site.zip_code}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextInput
              handleChange={changeField}
              type="text"
              nameValue="manager_name"
              label="Nom du Responsable"
              value={site.manager_name}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              handleChange={changeField}
              type="text"
              nameValue="estimated_duration"
              label="Durée estimée"
              value={site.estimated_duration}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              handleChange={changeField}
              type="text"
              nameValue="company_id"
              label="Entreprise"
              value={site.company_id}
            />
          </Grid>
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
      </form>
    </Box>
  );
}

CreateUserForm.propTypes = {
  handleCreateSite: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  site: PropTypes.shape().isRequired,
};

export default React.memo(CreateUserForm);
