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

function DraggableAssignments({
  absences,
  companies,
  handleAbsence,
  handleAssignment,
  week,
}) {
  // save initial companies object
  const [companiesList, setCompaniesList] = React.useState(companies);
  const [absencesList, setAbsencesList] = React.useState(absences);
  const [assignmentsPositions, setAssignmentsPositions] = React.useState([
    {
      id: 0,
      name: 'Absences',
      sites: [{
        id: 0,
        name: 'Gestion des absences',
        assignments: absencesList,
      }],
    },
    ...companiesList,
  ]);

  React.useEffect(() => {
    setCompaniesList(companies);
    setAssignmentsPositions([
      {
        id: 0,
        name: 'Absences',
        sites: [{
          id: 0,
          name: 'Gestion des absences',
          assignments: absencesList,
        }],
      },
      ...companies,
    ]);
  }, [companies]);

  React.useEffect(() => {
    setAbsencesList(absences);
    setAssignmentsPositions([
      {
        id: 0,
        name: 'Absences',
        sites: [{
          id: 0,
          name: 'Absences',
          assignments: absences,
        }],
      },
      ...companiesList,
    ]);
  }, [absences]);

  /**
   * Open assignment insert / update modal
   */
  const onDragEnd = useCallback((result) => {
    console.log(result);

    if (result.reason === 'DROP') {
      if (!result.destination) {
        return;
      }
      const refreshList = planningFunctions.setAssignmentPosition(result, assignmentsPositions);
      const assignment = planningFunctions.getDraggedAssignment(result, assignmentsPositions);

      setAssignmentsPositions(refreshList);
      handleAssignment(assignment, result);
    }
  }, [absencesList, companiesList]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Companies
        absences={absences}
        companies={assignmentsPositions}
        handleAbsence={handleAbsence}
        handleAssignment={handleAssignment}
        isDropable
        isMobile={false}
        week={week}
      />
    </DragDropContext>
  );
}

DraggableAssignments.propTypes = {
  absences: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
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
  handleAbsence: PropTypes.func.isRequired,
  handleAssignment: PropTypes.func.isRequired,
  week: PropTypes.shape({
    num: PropTypes.number.isRequired,
    dates: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired,
  }).isRequired,
};

export default React.memo(DraggableAssignments);
