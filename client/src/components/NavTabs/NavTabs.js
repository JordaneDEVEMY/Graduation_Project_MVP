/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { useLocation, Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { Box, Tabs, Tab } from '@mui/material';
import DateRangeRoundedIcon from '@mui/icons-material/DateRangeRounded';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import BusinessIcon from '@mui/icons-material/Business';
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
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab key="Planning" icon={<DateRangeRoundedIcon />} label="Planning" component={Link} to="/admins/planning" value="/admins/planning" />
        <Tab key="Personnel" icon={<AssignmentIndIcon />} label="Personnel" component={Link} to="/admins/staff" value="/admins/personnel" />
        <Tab key="Sites" icon={<BusinessIcon />} label="Sites" component={Link} to="/admins/sites" value="/admins/sites" />
        <Tab key="Clients" icon={<SupervisorAccountIcon />} label="Clients" component={Link} to="/admins/customers" value="/admins/sites" />
      </Tabs>
    </Box>
  );
}

NavTabs.propTypes = {
};
NavTabs.defaultProps = {
};

export default React.memo(NavTabs);
