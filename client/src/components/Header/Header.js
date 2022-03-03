/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar, Avatar, Box, Button, Modal, Toolbar,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import LoginContainer from '../../containers/LoginContainer';
import logo from './logo.svg';
import './header.scss';

function Header({
  handleMode,
  isLogged,
  user,
}) {
  const theme = useTheme();
  const [modal, displayModal] = useState(false);

  const handleModal = () => {
    displayModal((stateModal) => !stateModal);
  };

  return (
    <AppBar position="static" color="header">
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingRight: {
            sm: theme.spacing(2),
          },
          paddingLeft: {
            sm: theme.spacing(2),
          },
        }}
      >
        <Link to="/">
          <Box
            component="img"
            src={logo}
            alt="O'lleks"
            sx={{
              height: 30,
              [theme.breakpoints.up('md')]: {
                height: 40,
              },
            }}
          />
        </Link>

        {!isLogged
          ? (
            <Button
              onClick={handleModal}
              variant="outlined"
              size="small"
              sx={{
                ml: 'auto',
                mr: theme.spacing(1),
                display: {
                  md: 'none',
                },
              }}
            >
              Connexion
            </Button>
          )
          : (
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              gap: theme.spacing(1),
              ml: 'auto',
              mr: theme.spacing(1),
            }}
            >
              <Avatar
                alt={`${user.firstname} ${user.lastname}`}
                src={user.avatar}
                sx={{ width: 36, height: 36 }}
              />
              {`${user.firstname} ${user.lastname}`}
            </Box>
          )}

        <ThemeSwitch
          onChange={handleMode}
        />
      </Toolbar>

      {!isLogged
        && (
        <Modal
          sx={{
            width: '90vw',
            mx: 'auto',
            mt: '25%',
          }}
          open={modal}
          onClose={handleModal}
        >
          <LoginContainer />
        </Modal>
        )}
    </AppBar>
  );
}

Header.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  handleMode: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};
Header.defaultProps = {
};
export default React.memo(Header);
