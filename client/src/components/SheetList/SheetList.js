/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Sheet from '../Sheet/Sheet';
import sheetListBg from '../../Assets/images/sheet-bg.png';
import './sheetlist.scss';

function SheetList({
  cardId,
  employees,
  expandedSheet,
  handleChange,
}) {
  const theme = useTheme();

  return (
    <Box
      id={`card-${cardId}`}
      sx={{
        position: 'relative',
      }}
    >
      {employees.map((employee, index) => (
        <Sheet
          key={index}
          index={index}
          handleChange={handleChange}
          expandedSheet={expandedSheet}
          isDroppable={false}
          {...employee}
        />
      ))}
      {employees.length % 10 !== 0 && (
      <Box
        sx={{
          position: 'sticky',
          top: Math.ceil(employees.length % 10) * 50,
          left: 0,
          width: '100%',
          height: 500 - (Math.ceil(employees.length % 10) * 50),
          background: `${theme.palette.background.component} url('${sheetListBg}') repeat-y center top`,
          zIndex: employees.length,
        }}
      />
      )}
    </Box>
  );
}

SheetList.propTypes = {
  cardId: PropTypes.number.isRequired,
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      id: PropTypes.number.isRequired,
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  expandedSheet: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
SheetList.defaultProps = {
};
export default React.memo(SheetList);
