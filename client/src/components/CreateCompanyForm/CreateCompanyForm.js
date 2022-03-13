import React from 'react';
import { PropTypes } from 'prop-types';
import {
  Grid, Button, Typography, Divider, Box,
} from '@mui/material';
import TextInput from '../FieldForms/TextInput';

function CreateCompanyForm({
  handleCreateCompany,
  changeField,
  company,
  handleClose,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateCompany();
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
          Ajouter une Entreprise
        </Typography>
        <Divider />
        <Grid container spacing={1} mt={1} sx={{ textAlign: 'center', marginBottom: '15px' }}>
          <Grid item xs={12} md={6}>
            <TextInput
              handleChange={changeField}
              type="text"
              nameValue="name"
              label="Nom du site"
              value={company.name}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              handleChange={changeField}
              type="text"
              nameValue="address"
              label="Adresse"
              value={company.address}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              handleChange={changeField}
              type="text"
              nameValue="zip_code"
              label="Code Postal"
              value={company.zip_code}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextInput
              handleChange={changeField}
              type="text"
              nameValue="type"
              label="Type"
              value={company.type}
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

CreateCompanyForm.propTypes = {
  handleCreateCompany: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  company: PropTypes.shape().isRequired,
};

export default React.memo(CreateCompanyForm);
