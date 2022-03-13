/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Draggable } from 'react-beautiful-dnd';
import Sheet from '../Sheet/Sheet';
import sheetListBg from '../../Assets/images/sheet-bg.png';
import './sheetlist.scss';

function SheetList({
  employees,
  expandedSheet,
  handleAssignment,
  handleCollapse,
  isAdmin,
  isDraggable,
  isMobile,
  week,
}) {
  const theme = useTheme();
  return (
    <>
      {employees.map((employee, index) => (
        isDraggable
          ? (
            <Draggable
              key={`employee-${index}`}
              draggableId={`employee-${employee.id}`}
              index={index}
            >
              {(provided, snapshot) => (
                <Box
                  sx={{
                    opacity: snapshot.isDragging ? '0.5' : 1,
                  }}
                  ref={provided.innerRef}
                  key={`employee-${employee.id}-wrapper`}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <Sheet
                    assignmentId={employee.assignmentId}
                    key={`employee-${employee.id}`}
                    index={index}
                    handleAssignment={handleAssignment}
                    handleCollapse={handleCollapse}
                    expandedSheet={expandedSheet}
                    isAdmin={isAdmin}
                    isDraggable
                    isMobile={isMobile}
                    week={week}
                    {...employee}
                  />
                </Box>
              )}
            </Draggable>
          )
          : (
            <Sheet
              assignmentId={employee.assignmentId}
              key={`employee-${employee.id}`}
              index={index}
              handleAssignment={handleAssignment}
              handleCollapse={handleCollapse}
              expandedSheet={expandedSheet}
              isAdmin={isAdmin}
              isDraggable={false}
              isMobile={isMobile}
              week={week}
              {...employee}
            />
          )
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
          opacity: '.5',
        }}
      />
      )}
    </>
  );
}

SheetList.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      assignmentId: PropTypes.number.isRequired,
      color: PropTypes.string,
      id: PropTypes.number.isRequired,
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  expandedSheet: PropTypes.string.isRequired,
  handleAssignment: PropTypes.func,
  handleCollapse: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  isDraggable: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
  week: PropTypes.shape({
    num: PropTypes.number.isRequired,
    dates: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired,
  }).isRequired,
};
SheetList.defaultProps = {
  handleAssignment: undefined,
};
export default React.memo(SheetList);
