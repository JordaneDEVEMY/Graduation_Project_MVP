/* eslint-disable react/no-unescaped-entities */
import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import DateRangeRoundedIcon from '@mui/icons-material/DateRangeRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import './footer.scss';

function Footer() {
  return (
    <footer>
      <Box>
        <Typography>
          Mentions légales
        </Typography>
      </Box>

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
        {/* <Link to="/"> */}
        <BottomNavigationAction label="Plannings" icon={<DateRangeRoundedIcon />} />
        {/* </Link> */}

        {/* <Link to="/"> */}
        <BottomNavigationAction disabled label="Personnel" icon={<BadgeRoundedIcon />} />
        {/* </Link> */}

        {/* <Link to="/"> */}
        <BottomNavigationAction disabled label="Sites" icon={<EngineeringIcon />} />
        {/* </Link> */}

        {/* <Link to="/"> */}
        <BottomNavigationAction disabled label="Clients" icon={<SupervisorAccountIcon />} />
        {/* </Link> */}
      </BottomNavigation>
    </footer>
  );
}

Footer.propTypes = {
};
Footer.defaultProps = {
};
export default React.memo(Footer);
