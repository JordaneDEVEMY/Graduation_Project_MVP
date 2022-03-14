/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unescaped-entities */
import React, { useState }
  from 'react';
import { PropTypes } from 'prop-types';
import {
  Avatar, Box, Typography, Divider, Button, useTheme, Grid, TextField,
} from '@mui/material';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';

function ProfilPage({
  changeField,
  user,
  userPassword,
  userConfirmPassword,
  updateUserInformations,
  userEmail,
}) {
  console.log(user);
  const theme = useTheme();

  const [modalOpened, setModalOpened] = useState(false);
  const [errorDisplay, setErrorDisplay] = useState(true);
  const [currentPhoneValues, setNewPhoneValues] = useState(true);
  const [currentMobileValues, setNewMobileValues] = useState(true);

  const togglePhoneForm = () => {
    setNewPhoneValues(false);
  };

  const toggleMobileForm = () => {
    setNewMobileValues(false);
  };

  const cancelChange = () => {
    setNewPhoneValues(true);
    setNewMobileValues(true);
  };

  const confirmPhoneChange = (e) => {
    e.preventDefault();
    setModalOpened(false);
    updateUserInformations();
  };

  const confirmPasswordChange = (e) => {
    e.preventDefault();
    if (userPassword !== userConfirmPassword) {
      setErrorDisplay(false);
    } else {
      updateUserInformations();
      setModalOpened(false);
    }
  };

  const handleModal = () => {
    setModalOpened((stateModal) => !stateModal);
    if (errorDisplay === false) {
      setErrorDisplay(true);
    }
  };

  return (
    <>
      <Box>
        <Box>
          <Avatar
            alt={`${user.firstname} ${user.lastname}`}
            src={user.avatar}
            sx={{
              width: 80, height: 80, mx: 'auto',
            }}
          />
          <Box component="span" sx={{ textAlign: 'center' }}>
            <Typography variant="h1" sx={{ mb: '.5em', mt: '.5em' }}>{`${user.firstname} ${user.lastname}`}</Typography>
          </Box>
        </Box>
        <Divider sx={{ mb: '1em', mt: '1em' }} />
        <Box component="div">
          <>
            <Typography variant="h4">
              E-mail
            </Typography>
            <Typography>
              {userEmail}
            </Typography>
            <Divider sx={{ mb: '1em', mt: '1em' }} />
          </>

          { currentPhoneValues ? (
            <>
              <Typography variant="h4">
                Numéro de téléphone fixe
                <EditIcon
                  sx={{ marginLeft: theme.spacing(1) }}
                  onClick={togglePhoneForm}
                  color="primary"
                  fontSize="small"
                />
              </Typography>
              <Typography>
                {user.phone_number}
              </Typography>
            </>
          )
            : (
              <form onSubmit={confirmPhoneChange}>
                <Grid container rowSpacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      type="text"
                      name="phone_number"
                      label="Nouveau numéro de téléphone fixe"
                      defaultValue={user.phone_number}
                      onChange={(event) => changeField('phone_number', event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      type="password"
                      nameValue="password"
                      label="Mot de passe"
                      defaultValue=""
                      onChange={(event) => changeField('password', event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="outlined"
                    >
                      Confirmer
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      color="error"
                      onClick={cancelChange}
                      variant="outlined"
                    >
                      Annuler
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )}

          <Divider sx={{ mb: '1em', mt: '1em' }} />
          { currentMobileValues ? (
            <>
              <Typography variant="h4">
                Numéro de téléphone portable
                <EditIcon
                  sx={{ marginLeft: theme.spacing(1) }}
                  color="primary"
                  onClick={toggleMobileForm}
                  fontSize="small"
                />
              </Typography>
              <Typography>
                {user.mobile_number}
              </Typography>
            </>
          )
            : (
              <form onSubmit={confirmPhoneChange}>
                <Grid container rowSpacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      type="text"
                      name="mobile_number"
                      label="Nouveau numéro de mobile"
                      defaultValue={user.mobile_number}
                      onChange={(event) => changeField('mobile_number', event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      type="password"
                      nameValue="password"
                      label="Mot de passe"
                      defaultValue=""
                      onChange={(event) => changeField('password', event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="outlined"
                    >
                      Confirmer
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      color="error"
                      onClick={cancelChange}
                      variant="outlined"
                    >
                      Annuler
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )}

          <Divider sx={{ mb: '1em', mt: '1em' }} />
          <Typography variant="h4">
            Mot de passe
          </Typography>
          <Button
            variant="outlined"
            onClick={handleModal}
          >
            Modifier le mot de passe
          </Button>
        </Box>
      </Box>

      <Modal
        open={modalOpened}
        onClose={handleModal}
      >
        <Box
          component="div"
          sx={{
            backgroundColor: theme.palette.background.default,
            width: '80vw',
            p: theme.spacing(2),
            m: theme.spacing(2),
            mx: 'auto',
            textAlign: 'center',
          }}
        >
          <Typography variant="h2">
            Modifier votre mot de passe
          </Typography>
          <Divider sx={{ mb: theme.spacing(2) }} />
          <form onSubmit={confirmPasswordChange}>
            <Grid container rowSpacing={2}>
              <Grid item xs={12}>
                <TextField
                  type="password"
                  nameValue="password"
                  label="Nouveau mot de passe"
                  defaultValue=""
                  onChange={(event) => changeField('password', event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                { errorDisplay ? (
                  <TextField
                    type="password"
                    nameValue="confirmPassword"
                    label="Confirmez votre nouveau mot de passe"
                    defaultValue=""
                    onChange={(event) => changeField('confirmPassword', event.target.value)}
                  />
                ) : (
                  <TextField
                    error
                    type="password"
                    nameValue="confirmPassword"
                    label="Confirmez votre nouveau mot de passe"
                    helperText="Erreur! Le mot de passe doit être identique"
                    defaultValue=""
                    onChange={(event) => changeField('confirmPassword', event.target.value)}
                  />
                )}
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="outlined"
                >
                  Confirmer
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </>
  );
}

ProfilPage.propTypes = {
  changeField: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  userEmail: PropTypes.string.isRequired,
  userPassword: PropTypes.string.isRequired,
  userConfirmPassword: PropTypes.string.isRequired,
  updateUserInformations: PropTypes.func.isRequired,
};

export default React.memo(ProfilPage);
