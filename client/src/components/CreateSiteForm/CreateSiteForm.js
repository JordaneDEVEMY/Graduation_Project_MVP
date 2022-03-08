/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { PropTypes } from 'prop-types';
import {
  Grid, Button, Typography, Box,
} from '@mui/material';

import NameFieldForm from '../FieldForms/NameFieldForm/NameFieldForm';
import AddressFieldForm from '../FieldForms/AddressFieldForm/AddressFieldForm';
import ZipFieldForm from '../FieldForms/ZipFieldForm/ZipFieldForm';

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
          <Grid item xs={12}>
            <NameFieldForm handleChange={changeField} />
          </Grid>

          <Grid item xs={12} md={6}>
            <AddressFieldForm
              handleChange={changeField}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ZipFieldForm
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
  handleCreateSite: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
};

export default React.memo(CreateUserForm);
