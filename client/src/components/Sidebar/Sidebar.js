/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import {
  Box, Button, List, ListItem, ListItemButton, ListItemText, Typography, Avatar,
} from '@mui/material';
import { Link } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './sidebar.scss';

const Aside = styled('aside')(({ theme }) => ({
  boxSizing: 'border-box',
  borderRight: `1px solid ${theme.palette.divider}`,
  transition: theme.transitions.create(['margin-left']),
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    position: 'relative',
    alignSelf: 'stretch',
    flex: '0 0 240px',
  },
}));

function Sidebar({
  userId,
  handleLogout,
  userFirstname,
  userLastname,
  userAvatar,

}) {
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();

  const handleDrawer = () => {
    setOpen((oldOpen) => !oldOpen);
  };

  return (
    <Aside
      className={`sidebar${open ? ' opened' : ''}`}
      sx={{
        borderRight: `1px solid ${theme.palette.divider}`,
        transition: theme.transitions.create(['margin-left', 'transform']),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Button
        size="small"
        variant="text"
        sx={{
          position: 'absolute',
          left: '100%',
          top: theme.spacing(3),
          flexDirection: 'column',
          minWidth: 0,
          padding: '.5rem',
        }}
        onClick={handleDrawer}
      >
        {
          open ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )
        }
        <Box
          component="span"
          sx={{
            writingMode: 'vertical-lr',
            textOrientation: 'upright',
          }}
        >
          Menu
        </Box>
      </Button>

      <Box
        component="div"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: theme.spacing(1),
          justifyContent: 'center',
          color: theme.palette.text.primary,
        }}
      >
        <Avatar
          alt={`Avatar de ${userFirstname} ${userLastname}`}
          src={userAvatar}
          sx={{ width: 56, height: 56 }}
        />
        <Typography variant="h6">
          {userFirstname}
          {' '}
          {userLastname}
        </Typography>
        <Box
          component="div"
          sx={{
            width: '100%',
            textAlign: 'center',
          }}
        >
          <Button>
            <Link
              to={`/user/${userId}/profil`} /* <-- route ? */
              style={{
                textDecoration: 'none',
              }}
            >
              Mon profil
            </Link>
          </Button>
          <Button
            onClick={handleLogout}
          >
            Se déconnecter
          </Button>
        </Box>
      </Box>
      <Box
        component="div"
      >
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText
                  sx={{ color: theme.palette.text.primary }}
                  primary="Gestion des plannings"
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                disabled
              >
                <ListItemText
                  sx={{ color: theme.palette.text.primary }}
                  primary="Gestion du personnel"
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                disabled
              >
                <ListItemText
                  sx={{ color: theme.palette.text.primary }}
                  primary="Gestion des sites"
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                disabled
              >
                <ListItemText
                  sx={{ color: theme.palette.text.primary }}
                  primary="Gestion des clients"
                />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>
    </Aside>
  );
}

Sidebar.propTypes = {
  userId: PropTypes.number.isRequired,
  handleLogout: PropTypes.func.isRequired,
  userFirstname: PropTypes.string.isRequired,
  userLastname: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
};

export default React.memo(Sidebar);
