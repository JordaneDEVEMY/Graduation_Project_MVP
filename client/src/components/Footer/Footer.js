/* eslint-disable react/no-unescaped-entities */
import React from 'react';
// import PropTypes from 'prop-types';
import { useNavigate, Link } from 'react-router-dom';
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

  const [value, setValue] = React.useState('');
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    navigate(`${newValue}`);
    setValue(newValue);
  };

  return (
    <footer>
      <Box
        className="footer--content"
        sx={{
          mt: '1em',
          p: '0.5em',
        }}
      >
        <Typography>
          <Link to="/mentions-legales">Mentions légales</Link>
          {' '}
          - Tous droits réservés © O'lleks 2022
        </Typography>
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

    </footer>
  );
}

Footer.propTypes = {
};
Footer.defaultProps = {
};

export default React.memo(Footer);
