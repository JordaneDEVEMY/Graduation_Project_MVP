/* eslint-disable react/forbid-prop-types */
import React from 'react';
import {
  Box,
} from '@mui/material';
import PropTypes from 'prop-types';
import './sheetlist.scss';

function SheetList({
  list,
}) {
  return (
    <Box
      sx={{ position: 'relative' }}
    >
      {list.map((data, index) => (
        <Box
          component="div"
          key={data.id}
          sx={{
            display: 'block',
            position: 'absolute',
            top: 50 * index,
            left: 0,
            overflow: 'hidden',
            width: 300,
            height: 426,
            background: data.color,
            clipPath: 'path(\'M0,0v74h13l0,0c0.2,0,0.3,0,0.5,0C22.1,74,29,80.9,29,89.5c0,0.2,0,0.3,0,0.5l0,0l-1,321.4c0,0,0,0,0,0.1c0,0,0,0,0,0.1 l0,0.9l0.1,0c0.5,7.2,6.6,13,13.9,13h216c7.4,0,13.4-5.7,13.9-13l0.1,0l0-0.9c0,0,0,0,0-0.1c0,0,0,0,0-0.1L271,90l0,0 c0-0.2,0-0.3,0-0.5c0-8.6,6.9-15.5,15.5-15.5c0.2,0,0.3,0,0.5,0l0,0h13V0H0z\')',
          }}
        >
          {`${data.name}`}
        </Box>
      ))}
    </Box>
  );
}

SheetList.propTypes = {
  list: PropTypes.array.isRequired,
};
SheetList.defaultProps = {
};
export default React.memo(SheetList);
