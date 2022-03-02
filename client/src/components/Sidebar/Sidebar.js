/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
  Box, Button, List, ListItem, ListItemButton, ListItemText, Typography,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './sidebar.scss';

const Aside = styled('aside')(({ theme }) => ({
  boxSizing: 'border-box',
  width: '240px',
  borderRight: `1px solid ${theme.palette.divider}`,
  transition: theme.transitions.create(['margin-left']),
  [theme.breakpoints.down('md')]: {
    position: 'fixed',
    backgroundColor: theme.palette.background.default,
    height: '100%',
    zIndex: theme.zIndex.drawer,
  },
  [theme.breakpoints.up('md')]: {
    position: 'relative',
    alignSelf: 'stretch',
  },
}));

const Overlay = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: 0,
    background: 'red',
    opacity: 0,
    transition: theme.transitions.create(['opacity']),
    zIndex: theme.zIndex.drawer - 1,
    '.opened ~ &': {
      height: '100vh',
      opacity: 1,
    },
  },
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

function Sidebar() {
  const theme = useTheme();
  // const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const [open, setOpen] = React.useState(true);

  const handleDrawer = () => {
    setOpen((oldOpen) => !oldOpen);
  };

  return (
    <>
      <Aside
        className={`sidebar${open ? ' opened' : ''}`}
      >
        <Button
          size="small"
          variant="text"
          sx={{
            position: 'absolute',
            left: '100%',
            top: theme.spacing(3),
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

        <Box
          component="div"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: theme.spacing(1),
            justifyContent: 'center',
            color: theme.palette.text.primary,
          }}
        >
          <Typography variant="h6">SIDEBAR HEADER</Typography>
        </Box>
        <Box
          component="div"
        >
          <nav aria-label="main mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    sx={{ color: theme.palette.text.primary }}
                    primary="Inbox"
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    sx={{ color: theme.palette.text.primary }}
                    primary="Drafts"
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Box>
      </Aside>
      <Overlay />

    </>
  );
}

export default React.memo(Sidebar);
