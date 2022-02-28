/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { styled, createTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './sidebar.scss';

const Aside = styled('aside')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function Sidebar({
  themeMode,
  width,
}) {
  const drawerWidth = width;
  const [open, setOpen] = React.useState(true);
  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Aside
      theme={theme}
      sx={{
        width: drawerWidth,
        backgroundColor: theme.palette.background.default,
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        {open ? (
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
        ) : (
          <IconButton onClick={handleDrawerOpen}>
            <ChevronLeftIcon />
          </IconButton>
        )}
      </DrawerHeader>
      SIDEBAR
    </Aside>
  );
}

Sidebar.propTypes = {
  themeMode: PropTypes.string.isRequired,
  width: PropTypes.number,
};
Sidebar.defaultProps = {
  width: 240,
};

export default React.memo(Sidebar);
