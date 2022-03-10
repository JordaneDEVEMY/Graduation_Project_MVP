import React from 'react';
import {
  Box, Typography, Grid, Button, Divider, useTheme,
} from '@mui/material';
import TextInput from '../FieldForms/TextInput';

function ForgotPassword() {
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
              <TextInput
                type="email"
                nameValue="email"
                label="Entrez votre adresse e-mail"
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

export default React.memo(ForgotPassword);
