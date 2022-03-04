/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import {
  Box,
} from '@mui/material';
import PropTypes from 'prop-types';
import Sheet from '../Sheet/Sheet';
import './sheetlist.scss';

function SheetList({
  employees,
}) {
  return (
    <Box
      sx={{
        position: 'relative',
        height: 480,
        overflow: 'auto',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          height: `calc(426px + (48px * ${employees.length - 1}))`,
        }}
      >
        {employees.map((employee, index) => (
          <Sheet key={index} index={index} {...employee} />
        ))}
      </Box>
    </Box>
  );
}

SheetList.propTypes = {
  employees: PropTypes.array.isRequired,
};
SheetList.defaultProps = {
};
export default React.memo(SheetList);
