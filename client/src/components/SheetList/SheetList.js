/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useTheme } from '@mui/material/styles';
import Sheet from '../Sheet/Sheet';
import sheetListBg from '../../Assets/images/sheet-bg.png';
import './sheetlist.scss';

function SheetList({
  cardIid,
  employees,
  isMobile,
}) {
  console.log('employees', employees);
  const theme = useTheme();
  // accordion state
  const [expandedSheet, setExpandedSheet] = React.useState(false);
  /**
   * set expanded state
   * @param {string} accordionId accordion id
   * @returns {string|boolean} accordion id or false
   */
  const handleChange = (accordionId) => (event, isExpanded) => {
    setExpandedSheet(isExpanded ? accordionId : false);
  };

  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <Droppable droppableId={`card-${cardIid}`} type="SITES">
        {(provided) => (
          <Box
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {employees.map((employee, index) => (
              <Draggable key={`card-${cardIid}-sheet-${index}`} draggableId={`card-${cardIid}-sheet-${index}`} index={index}>
                {(provided, snapshot) => (
                  <Box
                    sx={{
                      opacity: snapshot.isDragging ? '0.5' : 1,
                    }}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Sheet
                      key={index}
                      index={index}
                      handleChange={handleChange}
                      expandedSheet={expandedSheet}
                      isMobile={isMobile}
                      {...employee}
                    />
                  </Box>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
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
  cardIid: PropTypes.number.isRequired,
  isMobile: PropTypes.bool.isRequired,
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      id: PropTypes.number.isRequired,
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
SheetList.defaultProps = {
};
export default React.memo(SheetList);
