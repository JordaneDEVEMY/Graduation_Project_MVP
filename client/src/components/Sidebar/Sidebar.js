/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import {
  Box, Button, List, ListItem, ListItemButton, ListItemIcon, Link, ListItemText, Typography, Avatar,
} from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DateRangeRoundedIcon from '@mui/icons-material/DateRangeRounded';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import BusinessIcon from '@mui/icons-material/Business';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
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

  const onLogoutClick = (event) => {
    event.preventDefault();
    handleLogout();
  };

  return (
    <Aside
      className={`sidebar${open ? ' opened' : ''}`}
      sx={{
        borderRight: `1px solid ${theme.palette.divider}`,
        transition: theme.transitions.create(['margin-left', 'transform']),
        display: 'flex',
        flexDirection: 'column',
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
          margin: theme.spacing(2),
          paddingBottom: theme.spacing(2),
          color: theme.palette.text.primary,
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <Avatar
          alt={`Avatar de ${userFirstname} ${userLastname}`}
          src={userAvatar}
          sx={{ width: 56, height: 56 }}
        />
        <Typography variant="h6">
          {`${userFirstname} ${userLastname}`}
        </Typography>

        <Typography
          variant="p"
          sx={{
            color: theme.palette.text.disabled,
          }}
        >
          <small>
            <Link
              component={RouterLink}
              to={`/user/${userId}/profil`}
            >
              Mon profil
            </Link>
            {' | '}
            <Link
              sx={{ width: 56, height: 56 }}
              onClick={onLogoutClick}
            >
              Se déconnecter
            </Link>

          </small>
        </Typography>
      </Box>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem
            disablePadding
            button
            component={RouterLink}
            to="/admins/planning"
          >
            <ListItemButton>
              <ListItemIcon>
                <DateRangeRoundedIcon />
              </ListItemIcon>
              <ListItemText
                sx={{ color: theme.palette.text.primary }}
                primary="Planning"
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            button
            component={RouterLink}
            to="/admins/staff"
          >
            <ListItemButton
              disabled
            >
              <ListItemIcon>
                <AssignmentIndIcon />
              </ListItemIcon>
              <ListItemText
                sx={{ color: theme.palette.text.primary }}
                primary="Personnel"
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            button
            component={RouterLink}
            to="/admins/sites"
          >
            <ListItemButton
              disabled
            >
              <ListItemIcon>
                <BusinessIcon />
              </ListItemIcon>
              <ListItemText
                sx={{ color: theme.palette.text.primary }}
                primary="Sites"
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            button
            component={RouterLink}
            to="/admins/customers"
          >
            <ListItemButton
              disabled
            >
              <ListItemIcon>
                <SupervisorAccountIcon />
              </ListItemIcon>
              <ListItemText
                sx={{ color: theme.palette.text.primary }}
                primary="Clients"
              />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
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
