import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar, Box, Button, Modal, Toolbar,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import LoginContainer from '../../containers/LoginContainer';
import logo from './logo.svg';
import './header.scss';

function MobileHeader({
  handleMode,
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

        <ThemeSwitch
          onChange={handleMode}
        />
      </Toolbar>

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
    </AppBar>
  );
}

MobileHeader.propTypes = {
  handleMode: PropTypes.func.isRequired,
};
MobileHeader.defaultProps = {
};
export default React.memo(MobileHeader);
