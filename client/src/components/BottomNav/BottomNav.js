/* eslint-disable react/no-unescaped-entities */
import React from 'react';
// import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import DateRangeRoundedIcon from '@mui/icons-material/DateRangeRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import './bottom_nav.scss';

function BottomNav() {
  const user = {
    id: 1,
    is_admin: true,
  };

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
    <BottomNavigation
      showLabels
      value={value}
      onChange={handleChange}
      sx={{
        display: {
          md: 'none',
        },
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <BottomNavigationAction label="Accueil" value="/" icon={<DateRangeRoundedIcon />} />
      {user.is_admin
        ? (
          <>
            <BottomNavigationAction label="Plannings" value="admins/planning" icon={<DateRangeRoundedIcon />} />
            <BottomNavigationAction disabled label="Personnel" value="admins/personnel" icon={<BadgeRoundedIcon />} />
            <BottomNavigationAction disabled label="Sites" value="admins/sites" icon={<EngineeringIcon />} />
            <BottomNavigationAction disabled label="Clients" value="admins/clients" icon={<SupervisorAccountIcon />} />
          </>
        )
        : (
          <BottomNavigationAction label="Plannings" value={`users/${user.id}/planning`} icon={<DateRangeRoundedIcon />} />
        )}
    </BottomNavigation>
  );
}

BottomNav.propTypes = {
};
BottomNav.defaultProps = {
};

export default React.memo(BottomNav);
