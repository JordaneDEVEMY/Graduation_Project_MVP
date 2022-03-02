import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Email from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './login.scss';

function Login({
  emailValue,
  passwordValue,
  changeField,
  handleLogin,
}) {
  const [isButtonDisable, setIsButtonDisable] = useState(true);
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const theme = useTheme();

  useEffect(() => {
    if (emailValue.trim() === '' || passwordValue.trim() === '') {
      if (isButtonDisable === false) {
        setIsButtonDisable(true);
      }
    } else if (isButtonDisable === true) {
      setIsButtonDisable(false);
    }
  }, [emailValue, passwordValue]);

  /**
   * function used to submit login form
   * @param {event} e used to stop refreshing of page
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  /**
   * function used to change input value in store
   * @param {string} label input's label
   * @param {event} event input's value
   */
  const handleChange = (label, event) => {
    changeField(label, event.target.value);
  };

  return (
    <Card
      component="form"
      className="loginForm"
      onSubmit={handleSubmit}
      sx={{
        textAlign: 'center',
      }}
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
              onChange={(event) => handleChange('email', event)}
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
              onChange={(event) => handleChange('password', event)}
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
      <Box
        sx={{
          display: 'flex',
          mb: theme.spacing(1),
          justifyContent: 'center',
        }}
      >
        <CardActions>
          <Button
            type="submit"
            size="small"
            variant="contained"
            disabled={isButtonDisable}
          >
            Valider
          </Button>
          <Button
            size="small"
            variant="text"
          >
            Mot de passe oublié
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
}

Login.propTypes = {
  emailValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};
Login.defaultProps = {
};

export default React.memo(Login);
