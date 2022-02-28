import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import DateRangeRoundedIcon from '@mui/icons-material/DateRangeRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import './footer.scss';

function Footer() {
  return (
    <BottomNavigation
      showLabels
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      {/* <Link to="/"> */}
      <BottomNavigationAction label="Gestion de plannings" icon={<DateRangeRoundedIcon />} />
      {/* </Link> */}
      {/* <Link to="/"> */}
      <BottomNavigationAction label="Mon compte" icon={<SettingsIcon />} />
      {/* </Link> */}
      {/* <Link to="/"> */}
      <BottomNavigationAction label="Se déconnecter" icon={<LogoutRoundedIcon />} />
      {/* </Link> */}
    </BottomNavigation>
  );
}

Footer.propTypes = {
};
Footer.defaultProps = {
};
export default React.memo(Footer);
