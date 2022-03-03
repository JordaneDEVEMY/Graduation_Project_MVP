/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import {
  Button, Card, CardActions, CardContent, Grid, IconButton, InputAdornment, Link, TextField, Typography,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
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
      variant="outlined"
      onSubmit={handleSubmit}
      sx={{
        textAlign: 'center',
      }}
    >
      <Typography
        variant="p"
        className="login-title"
        sx={{
          display: 'block',
          lineHeight: 1,
          p: theme.spacing(2),
          backgroundColor: theme.palette.background.component,
          fontSize: '2rem',
        }}
      >
        Connexion
      </Typography>
      <CardContent>
        <Grid container rowSpacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              autoComplete="on"
              required
              type="email"
              label="email"
              value={emailValue}
              onChange={(event) => handleChange('email', event)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              autoComplete="on"
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
                      {passwordVisibility ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions sx={{ p: theme.spacing(2) }}>
        <Button
          type="submit"
          size="large"
          variant="contained"
          disabled={isButtonDisable}
        >
          Valider
        </Button>
        <Link
          sx={{ ml: 'auto', cursor: 'pointer' }}
        >
          Mot de passe oublié
        </Link>
      </CardActions>
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
