/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unescaped-entities */
import React
// { useState, useEffect }
  from 'react';
import { PropTypes } from 'prop-types';
// import {
//   Grid, Button, Typography, Divider, Box, Autocomplete, TextField,
// } from '@mui/material';
// import RoleFieldForm from '../FieldForms/RoleFieldForm';
// import TextInput from '../FieldForms/TextInput';

function ProfilPage({
  // handleCreateUser,
  // handleUpdateUser,
  // updateUserPassword,
  // changeField,
  // datas,
  employee,
  user,
}) {
  // const [autocompleteValue, setAutocompleteValue] = useState(null);
  // const [inputValueChange, setInputValueChange] = useState(false);

  // useEffect(() => {
  //   if (autocompleteValue !== null) {
  //     setInputValueChange(true);
  //   }
  // }, [employee]);

  // const handleGetUser = (e) => {
  //   e.preventDefault();
  //   if (autocompleteValue !== null) {
  //     handleUpdateUser(autocompleteValue);
  //   }
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   handleCreateUser();
  // };

  return (
    <>

      <div>
        {employee.firstname}
        {' '}
        {employee.lastname}
      </div>
      <div>{`${user.firstname} ${user.lastname}`}</div>

      {/* <Grid item xs={6} sm={4} sx={{ margin: '20px auto' }}>
        <form onSubmit={handleGetUser}>
          <Autocomplete
            size="small"
            getOptionLabel={(data) => `${data.firstname} ${data.lastname}`}
            options={datas}
            sx={{ width: '100%' }}
            renderInput={(params) => (
              <TextField {...params} label="Rechercher..." />
            )}
            value={autocompleteValue}
            onChange={(_event, newValue) => {
              setAutocompleteValue(newValue);
            }}
          />
        </form>
      </Grid>
      {inputValueChange && (
      <Box
        sx={{ maxWidth: '80vw', margin: '0 auto' }}
      >
        <form onSubmit={handleSubmit}>
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
                type="text"
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
      )} */}
    </>
  );
}

ProfilPage.propTypes = {
  // handleCreateUser: PropTypes.func.isRequired,
  // handleUpdateUser: PropTypes.func.isRequired,
  // changeField: PropTypes.func.isRequired,
  // datas: PropTypes.arrayOf(
  //   PropTypes.shape().isRequired,
  // ).isRequired,
  employee: PropTypes.shape().isRequired,
  user: PropTypes.object.isRequired,
};

export default React.memo(ProfilPage);
