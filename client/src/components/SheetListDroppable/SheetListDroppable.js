/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-param-reassign */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import Sheet from '../Sheet/Sheet';
import sheetListBg from '../../Assets/images/sheet-bg.png';

import './sheetlist_droppable.scss';

function SheetListDroppable({
  cardId,
  employees,
  expandedSheet,
  handleChange,
}) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <Droppable droppableId={`card-${cardId}`} type="SITES">
        {(provided) => (
          <Box
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {employees.map((employee, index) => (
              <Draggable
                draggableId={`card-${cardId}-sheet-${index}`}
                index={index}
              >
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
                      isDroppable
                      isMobile
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

SheetListDroppable.propTypes = {
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
export default React.memo(SheetListDroppable);
