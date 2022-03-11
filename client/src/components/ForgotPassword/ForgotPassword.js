import React from 'react';
import {
  Box, Typography, Grid, Button, Divider, useTheme, TextField,
} from '@mui/material';
import PropTypes from 'prop-types';
// import TextInput from '../FieldForms/TextInput';

function ForgotPassword({
  handleChange,
  email,
}) {
  const theme = useTheme();

  return (
    <Box sx={{ p: theme.spacing(2), textAlign: 'center' }}>
      <Box
        component="header"
      >
        <Typography variant="h1">
          Mot de passe oublié
        </Typography>
        <Divider />
      </Box>
      <Box
        component="div"
        sx={{ marginTop: theme.spacing(2) }}
      >
        <form>
          <Grid container rowSpacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                autoComplete="on"
                required
                type="email"
                label="email"
                value={email}
                onChange={(event) => handleChange(event)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                sx={{ marginBottom: theme.spacing(2) }}
                type="submit"
                variant="outlined"
              >
                Récupérer mon mot de passe
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
}

ForgotPassword.propTypes = {
  handleChange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};

export default React.memo(ForgotPassword);
