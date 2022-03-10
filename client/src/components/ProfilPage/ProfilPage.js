/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unescaped-entities */
import React, { useState }
  from 'react';
import { PropTypes } from 'prop-types';
import {
  Avatar, Box, Typography, Divider, Button, useTheme, Grid,
} from '@mui/material';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';
import TextInput from '../FieldForms/TextInput';

function ProfilPage({
  changeField,
  user,
  userPassword,
  userConfirmPassword,
}) {
  console.log(user);
  const theme = useTheme();

  const [modalOpened, setModalOpened] = useState(false);
  const [errorDisplay, setErrorDisplay] = useState(false);
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

  const confirmChange = (e) => {
    e.preventDefault();
    if (userPassword !== userConfirmPassword) {
      // alert('Attention, votre mot de passe doit être identique !');
      setErrorDisplay(true);
    }
  };

  const handleModal = () => {
    setModalOpened((stateModal) => !stateModal);
  };

  return (
    <>
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
        <Divider sx={{ mb: '1em', mt: '1em' }} />
        <Box component="div">
          <Typography variant="h4">
            Poste occupé
          </Typography>
          <Typography>
            {user.label}
          </Typography>
          <Divider sx={{ mb: '1em', mt: '1em' }} />

          { currentPhoneValues ? (
            <>
              <Typography variant="h4">
                Numéro de téléphone fixe
                <EditIcon
                  onClick={togglePhoneForm}
                  fontSize="small"
                />
              </Typography>
              <Typography>
                {user.phoneNumber}
              </Typography>
            </>
          )
            : (
              <Grid container rowSpacing={2}>
                <Grid item xs={12}>
                  <TextInput
                    handleChange={changeField}
                    type="text"
                    nameValue="phoneNumber"
                    label="Nouveau numéro de fixe"
                    defaultValue={user.phoneNumber}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                // onClick={confirmChange}
                    variant="outlined"
                  >
                    Confirmer
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    color="error"
                    onClick={cancelChange}
                    variant="outlined"
                  >
                    Annuler
                  </Button>
                </Grid>
              </Grid>
            )}

          <Divider sx={{ mb: '1em', mt: '1em' }} />
          { currentMobileValues ? (
            <>
              <Typography variant="h4">
                Numéro de téléphone portable
                <EditIcon
                  onClick={toggleMobileForm}
                  fontSize="small"
                />
              </Typography>
              <Typography>
                {user.mobileNumber}
              </Typography>
            </>
          )
            : (
              <Grid container rowSpacing={2}>
                <Grid item xs={12}>
                  <TextInput
                    handleChange={changeField}
                    type="text"
                    nameValue="mobileNumber"
                    label="Nouveau numéro de mobile"
                    defaultValue={user.mobileNumber}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                // onClick={confirmChange}
                    variant="outlined"
                  >
                    Confirmer
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    color="error"
                    onClick={cancelChange}
                    variant="outlined"
                  >
                    Annuler
                  </Button>
                </Grid>
              </Grid>
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
          <Grid container rowSpacing={2}>
            <Grid item xs={12}>
              <TextInput
                handleChange={changeField}
                type="password"
                nameValue="password"
                label="Nouveau mot de passe"
                defaultValue=""
              />
            </Grid>
            <Grid item xs={12}>
              <TextInput
                errorDisplay={errorDisplay}
                handleChange={changeField}
                type="password"
                nameValue="confirmPassword"
                label="Confirmez votre nouveau mot de passe"
                defaultValue=""
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                onClick={confirmChange}
                variant="outlined"
              >
                Confirmer
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
}

ProfilPage.propTypes = {
  changeField: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  userPassword: PropTypes.string.isRequired,
  userConfirmPassword: PropTypes.string.isRequired,
};

export default React.memo(ProfilPage);
