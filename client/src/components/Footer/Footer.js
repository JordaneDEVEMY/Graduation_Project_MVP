/* eslint-disable react/no-unescaped-entities */
import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import DateRangeRoundedIcon from '@mui/icons-material/DateRangeRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import './footer.scss';

function Footer() {
  const user = {
    id: 1,
    is_admin: true,
  };

  return (
    <footer>
      <Box>
        <Typography>
          <Link to="/mentions-legales">Mentions légales</Link>
        </Typography>
      </Box>

      {user.id
      && (user.is_admin && (
        <BottomNavigation
          showLabels
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
          <Link to="/admins/planning">
            <BottomNavigationAction label="Plannings" icon={<DateRangeRoundedIcon />} />
          </Link>

          <Link to="/admins/personnel">
            <BottomNavigationAction disabled label="Personnel" icon={<BadgeRoundedIcon />} />
          </Link>

          <Link to="/admins/sites">
            <BottomNavigationAction disabled label="Sites" icon={<EngineeringIcon />} />
          </Link>

          <Link to="/admins/clients">
            <BottomNavigationAction disabled label="Clients" icon={<SupervisorAccountIcon />} />
          </Link>
        </BottomNavigation>
      ))}

    </footer>
  );
}

Footer.propTypes = {
};
Footer.defaultProps = {
};
export default React.memo(Footer);
