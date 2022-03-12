/* eslint-disable camelcase */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable default-case */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-beautiful-dnd';
import Companies from '../Companies/Companies';
import planningFunctions from '../../utils/planningFunctions';

/**
 * receive state and return the new state
 */
// const dragReducer = produce((draft, action) => {
//   switch (action.type) {
//     case 'MOVE': {
//       draft[action.from] = draft[action.from] || [];
//       draft[action.to] = draft[action.to] || [];
//       const [removed] = draft[action.from].splice(action.fromIndex, 1);
//       draft[action.to].splice(action.toIndex, 0, removed);
//     }
//   }
// });

function DraggableAssignments({
  companies,
  handleAssignment,
  week,
}) {
  // save initial companies object
  const [assignmentsPositions, setAssignmentsPositions] = React.useState(companies);
  console.log('companies', assignmentsPositions);

  React.useEffect(() => {
    setAssignmentsPositions(companies);
  }, [companies]);

  /**
   * Refresh assignments on drag end
   * Open assignment update modal
   */
  const onDragEnd = useCallback((result) => {
    if (result.reason === 'DROP') {
      if (!result.destination) {
        return;
      }
      console.log('result', result);
      const refreshList = planningFunctions.setAssignmentPosition(result, assignmentsPositions);
      const assignment = planningFunctions.getDraggedAssignment(result, assignmentsPositions);

      setAssignmentsPositions(refreshList);
      handleAssignment(assignment);
    }
  }, []);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Companies
        companies={assignmentsPositions}
        handleAssignment={handleAssignment}
        isDropable
        week={week}
      />
    </DragDropContext>
  );
}

DraggableAssignments.propTypes = {
  companies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      sites: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  ).isRequired,
  handleAssignment: PropTypes.func.isRequired,
  week: PropTypes.shape({
    num: PropTypes.number.isRequired,
    dates: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired,
  }).isRequired,
};

export default React.memo(DraggableAssignments);
