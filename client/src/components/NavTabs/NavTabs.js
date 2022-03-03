/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { Box, Tabs, Tab } from '@mui/material';
import DateRangeRoundedIcon from '@mui/icons-material/DateRangeRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import './nav_tabs.scss';

function NavTabs() {
  const { pathname } = useLocation();
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: {
          md: 0,
        },
        overflow: 'hidden',
        [theme.breakpoints.down('md')]: {
          marginBottom: theme.spacing(3),
        },
      }}
    >
      <Tabs
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
        }}
        value={pathname}
      >
        <Tab icon={<DateRangeRoundedIcon />} label="Planning" value="/admins/planning" />
        <Tab icon={<BadgeRoundedIcon />} label="Personnel" value="/admins/personnel" />
        <Tab icon={<EngineeringIcon />} label="Sites" value="/admins/sites" />
        <Tab icon={<SupervisorAccountIcon />} label="Clients" value="/admins/clients" />
      </Tabs>
    </Box>
  );
}

NavTabs.propTypes = {
};
NavTabs.defaultProps = {
};

export default React.memo(NavTabs);
