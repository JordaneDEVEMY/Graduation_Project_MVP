/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Draggable } from 'react-beautiful-dnd';
import Assignment from '../Assignment/Assignment';
import assignmentBg from '../../Assets/images/sheet-bg.png';
import './sheetlist.scss';

function AssignmentsList({
  assignments,
  expandedSheet,
  handleAssignment,
  handleCollapse,
  isDraggable,
  isMobile,
  week,
}) {
  const theme = useTheme();

  return (
    <>
      {assignments.map((assignment, index) => (
        isDraggable
          ? (
            <Draggable
              key={`assignment-${assignment.id}-draggable`}
              draggableId={`assignment-${assignment.id}`}
              index={index}
            >
              {(provided, snapshot) => (
                <Box
                  sx={{
                    opacity: snapshot.isDragging ? '0.5' : 1,
                  }}
                  ref={provided.innerRef}
                  key={`assignment-${assignment.id}-wrapper`}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <Assignment
                    {...assignment}
                    expandedSheet={expandedSheet}
                    handleAssignment={handleAssignment}
                    handleCollapse={handleCollapse}
                    index={index}
                    key={`assignment-${assignment.id}`}
                    isDraggable
                    isMobile={false}
                    week={week}
                  />
                </Box>
              )}
            </Draggable>
          )
          : (
            <Assignment
              {...assignment}
              expandedSheet={expandedSheet}
              handleAssignment={handleAssignment}
              handleCollapse={handleCollapse}
              index={index}
              key={`assignment-${assignment.id}`}
              isDraggable={false}
              isMobile={isMobile}
              week={week}
            />
          )
      ))}
      {assignments.length % 10 !== 0 && (
      <Box
        sx={{
          position: 'sticky',
          top: Math.ceil(assignments.length % 10) * 50,
          left: 0,
          width: '100%',
          height: 500 - (Math.ceil(assignments.length % 10) * 50),
          background: `${theme.palette.background.component} url('${assignmentBg}') repeat-y center top`,
          zIndex: assignments.length,
          opacity: '.5',
        }}
      />
      )}
    </>
  );
}

AssignmentsList.propTypes = {
  assignments: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      employee: PropTypes.shape({
        firstname: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        lastname: PropTypes.string.isRequired,
      }).isRequired,
      ending_date: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      position: PropTypes.number.isRequired,
      starting_date: PropTypes.string.isRequired,
      visibility: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
  expandedSheet: PropTypes.string.isRequired,
  handleAssignment: PropTypes.func,
  handleCollapse: PropTypes.func.isRequired,
  isDraggable: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
  week: PropTypes.shape({
    num: PropTypes.number.isRequired,
    dates: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired,
  }).isRequired,
};

AssignmentsList.defaultProps = {
  handleAssignment: undefined,
};

export default React.memo(AssignmentsList);
