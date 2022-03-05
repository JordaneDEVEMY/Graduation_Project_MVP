/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Sheet from '../Sheet/Sheet';
import sheetListBg from '../../Assets/images/sheet-bg.png';
import './sheetlist.scss';

function SheetList({
  employees,
  isMobile,
}) {
  const theme = useTheme();
  const [expandedSheet, setExpandedSheet] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpandedSheet(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        height: 500,
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
      <Box
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
            isMobile={isMobile}
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
    </Box>
  );
}

SheetList.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  employees: PropTypes.array.isRequired,
};
SheetList.defaultProps = {
};
export default React.memo(SheetList);
