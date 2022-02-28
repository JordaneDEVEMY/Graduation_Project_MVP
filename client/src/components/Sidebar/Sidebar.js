/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { styled } from '@mui/material/styles';
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

function Sidebar() {
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Aside
      className={`sidebar${open ? ' opened' : ''}`}
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

export default React.memo(Sidebar);
