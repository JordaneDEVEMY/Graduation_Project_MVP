/* eslint-disable react/no-unescaped-entities */
import React from 'react';
// import PropTypes from 'prop-types';
import { useNavigate, Link } from 'react-router-dom';
import { Typography, Box, Button } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import DateRangeRoundedIcon from '@mui/icons-material/DateRangeRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { useTheme } from '@mui/material/styles';
import './footer.scss';

function Footer() {
  const user = {
    id: 1,
    is_admin: true,
  };

  const theme = useTheme();

  /*
    Changes the URL to navigate in the app
  */
  const [value, setValue] = React.useState('');
  const navigate = useNavigate();

  /**
   * Function which 'extract' the value of our Navigation to change the URL.
   * @param {*} event
   * @param {string} newValue / the new URL
   */
  const handleChange = (event, newValue) => {
    navigate(`${newValue}`);
    setValue(newValue);
    console.log(`Switch from ${value} to ${newValue}`);
  };

  return (
    <>
      <Box
        component="footer"
        sx={{
          mt: theme.spacing(2),
          p: theme.spacing(2),
          backgroundColor: theme.palette.background.component,
          textAlign: 'center',
        }}
      >
        <Typography>
          <Link to="/mentions-legales">Mentions légales</Link>
          {' '}
          - Tous droits réservés © O'lleks 2022
        </Typography>
        <Button size="small" href="https://storyset.com/">Website illustrations by Storyset</Button>
      </Box>

      {user.id
      && (user.is_admin && (
        <BottomNavigation
          showLabels
          value={value}
          onChange={handleChange}
          sx={{
            display: {
              xs: 'block',
              md: 'none',
            },
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <BottomNavigationAction label="Plannings" value="admins/planning" icon={<DateRangeRoundedIcon />} />

          <BottomNavigationAction disabled label="Personnel" value="admins/personnel" icon={<BadgeRoundedIcon />} />

          <BottomNavigationAction disabled label="Sites" value="admins/sites" icon={<EngineeringIcon />} />

          <BottomNavigationAction disabled label="Clients" value="admins/clients" icon={<SupervisorAccountIcon />} />

        </BottomNavigation>
      ))}
    </>
  );
}

Footer.propTypes = {
};
Footer.defaultProps = {
};

export default React.memo(Footer);
