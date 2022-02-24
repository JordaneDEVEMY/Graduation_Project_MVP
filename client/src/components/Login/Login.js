import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Email from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './login.scss';

function Login() {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const onValueChange = (inputLabel, value) => {
    switch (inputLabel) {
      case 'email':
        setEmailValue(value);
        break;
      case 'password':
        setPasswordValue(value);
        break;
      default:
    }
  };

  return (
    <Card
      component="form"
      className="loginForm"
    >
      <h2 className="login-title">Connexion</h2>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              type="email"
              label="email"
              value={emailValue}
              onChange={(event) => onValueChange('email', event.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              type={passwordVisibility ? 'text' : 'password'}
              label="password"
              value={passwordValue}
              onChange={(event) => onValueChange('password', event.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <KeyIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setPasswordVisibility((x) => !x)}
                    >
                      {passwordVisibility ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button
          type="submit"
          size="small"
          variant="contained"
        >
          Valider
        </Button>
        <Button
          type="submit"
          size="small"
          variant="text"
        >
          Mot de passe oublié
        </Button>
      </CardActions>
    </Card>
  );
}

Login.propTypes = {
};
Login.defaultProps = {
};
export default React.memo(Login);
