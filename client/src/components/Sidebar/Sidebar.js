/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Box, Button, List, ListItem, ListItemButton, ListItemText, Typography,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './sidebar.scss';

function Sidebar() {
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();

  const handleDrawer = () => {
    setOpen((oldOpen) => !oldOpen);
  };

  return (
    <Box
      component="aside"
      className={`sidebar${open ? ' opened' : ''}`}
      sx={{
        borderRight: `1px solid ${theme.palette.divider}`,
        transition: theme.transitions.create(['margin-left', 'transform']),
      }}
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
    </Box>
  );
}

export default React.memo(Sidebar);
