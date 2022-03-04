import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
// import Sidebar from '../Sidebar/Sidebar';
import './main.scss';

function Main(props) {
  const { children } = props;
  const theme = useTheme();

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        boxSizing: 'border-box',
        overflow: 'auto',
        [theme.breakpoints.up('md')]: {
          padding: theme.spacing(3, 6),
        },
        [theme.breakpoints.down('md')]: {
          width: '100%',
          padding: theme.spacing(3, 2),
        },
      }}
    >
      {children}
    </Box>
  );
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default React.memo(Main);
