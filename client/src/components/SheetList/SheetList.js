/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import {
  Box,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Sheet from '../Sheet/Sheet';
import sheetListBg from '../../Assets/images/sheet-bg.png';
import './sheetlist.scss';

function SheetList({
  employees,
}) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        height: 480,
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          height: (employees.length * 48) + 2,
          width: 300,
          overflow: 'hidden',
        }}
      >
        {employees.map((employee, index) => (
          <Sheet key={index} index={index} {...employee} />
        ))}
      </Box>

      {employees.length % 10 !== 0 && (
      <Box
        sx={{
          width: '100%',
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: `calc(100% - ${(Math.ceil(employees.length % 10) * 48) + 2}px)`,
          background: `${theme.palette.background.component} url('${sheetListBg}') repeat-y center top`,
          zIndex: employees.length,
        }}
      />
      )}
    </Box>
  );
}

SheetList.propTypes = {
  employees: PropTypes.array.isRequired,
};
SheetList.defaultProps = {
};
export default React.memo(SheetList);
