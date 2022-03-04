import React from 'react';
import {
  Box,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import './sheet.scss';

function Sheet(props) {
  const theme = useTheme();
  const {
    color, index, firstname, lastname,
  } = props;

  return (
    <Box
      component="div"
      sx={{
        display: 'block',
        position: 'relative',
        zIndex: index,
        left: 0,
        overflow: 'hidden',
        width: 300,
        height: 50,
        background: color,
        boxShadow: theme.shadows[1],
        clipPath: 'path(\'M0,0v48.1h13l0,0c0.2,0,0.3,0,0.5,0C22.1,48.1,29,55,29,63.6c0,0.2,0,0.3,0,0.5l0,0l-1,347.8c0,0,0,0,0,0.1c0,0,0,0,0,0.1l0,0.9l0.1,0c0.5,7.2,6.6,13,13.9,13h216c7.4,0,13.4-5.7,13.9-13l0.1,0l0-0.9c0,0,0,0,0-0.1c0,0,0,0,0-0.1l-1-347.8l0,0c0-0.2,0-0.3,0-0.5c0-8.6,6.9-15.5,15.5-15.5c0.2,0,0.3,0,0.5,0l0,0h13V0H0z\')',
        '&:before': {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '1px',
          content: '""',
          display: 'block',
          background: 'rgb(0 0 0 / 20%)',
        },
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: 48,
          padding: theme.spacing(2),
          lineHeight: 1,
          fontFamily: 'Sriracha',
          color: 'rgba(0,0,0,.9)',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {`${firstname} ${lastname}`}
      </Box>
    </Box>

  );
}

Sheet.propTypes = {
  color: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
};
Sheet.defaultProps = {
};
export default React.memo(Sheet);
