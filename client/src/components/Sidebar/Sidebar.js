/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Box, Button } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './sidebar.scss';

const Aside = styled('aside')(({ theme }) => ({
  backgroundColor: theme.palette.grey[800],
  transition: theme.transitions.create(['margin-left', 'transform']),
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
  const theme = useTheme();

  const handleDrawer = () => {
    setOpen((oldOpen) => !oldOpen);
  };

  return (
    <Aside
      className={`sidebar${open ? ' opened' : ''}`}
    >
      <Button
        size="small"
        sx={{
          position: 'absolute',
          left: '100%',
          top: theme.spacing(2),
          flexDirection: 'column',
          minWidth: 0,
          padding: '.5rem',
        }}
        onClick={handleDrawer}
        className="sidebar__button"
      >
        {
          open ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )
        }
        <Box
          component="span"
          sx={{
            writingMode: 'vertical-lr',
            textOrientation: 'upright',
          }}
        >
          Menu
        </Box>
      </Button>

      <DrawerHeader>
        SIDEBAR HEADER
      </DrawerHeader>

      SIDEBAR

    </Aside>
  );
}

export default React.memo(Sidebar);
