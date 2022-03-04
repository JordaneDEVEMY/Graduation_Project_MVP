/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import {
  Box,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Sheet from '../Sheet/Sheet';
import './sheetlist.scss';
import sheetListBg from '../../Assets/images/sheet-bg.png';

function SheetList({
  employees,
}) {
  const theme = useTheme();

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
        <Box
          sx={{
            width: '100%',
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: `calc(100% - ${Math.ceil(employees.length % 10) * 48}px)`,
            background: `${theme.palette.background.component} url('${sheetListBg}') repeat-y center top`,
            zIndex: employees.length,
          }}
        />
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
