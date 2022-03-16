import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Modal } from '@mui/material';
import AssignmentFormContainer from '../../containers/AssignmentFormContainer';
import SearchContainer from '../SearchContainer/SearchContainer';
import DraggableAssignments from '../DraggableAssignments/DraggableAssignments';
import Companies from '../Companies/Companies';
import dateFunctions from '../../utils/dateFunctions';
import planningFunctions from '../../utils/planningFunctions';
import useBreakpointDown from '../../hooks/useBreakpointDown';
import './planning_admin.scss';

function PlanningAdmin({
  absences,
  absencesList,
  companies,
  employeesList,
  startDate,
}) {
  const week = dateFunctions.getWeek(startDate);
  const { current: currentWeek } = week;
  const isMobile = useBreakpointDown();
  const [assignment, setAssignment] = React.useState({});
  const [modalOpened, setModalOpened] = React.useState(false);
  const [employees, setEmployees] = React.useState(employeesList);
  const [draggableCompanies, setDraggableCompanies] = React.useState(companies);
  const [dragEndResult, setDragEndResult] = React.useState({});

  const handleAssignment = (assignmentData, dragResult = undefined) => {
    setAssignment(assignmentData);

    if (dragResult) {
      setDragEndResult(dragResult);
    }
  };

  const handleCancel = () => {
    setAssignment({});
    const initialResult = {
      ...dragEndResult,
      source: dragEndResult.destination,
      destination: dragEndResult.source,
    };
    const refreshList = planningFunctions.setAssignmentPosition(initialResult, draggableCompanies);
    setDraggableCompanies(refreshList);
  };

  const handleAbsence = (result) => {
    console.log('updateAbsence', result);
  };

  const handleModal = () => {
    // force opened state
    setModalOpened((stateModal) => {
      if (stateModal) {
        return true;
      }
      return !stateModal;
    });
  };

  React.useEffect(() => {
    // build employeesList used in assignment modal
    // open modal
    if (assignment.site !== undefined) {
      const { site } = assignment;
      let assignmentEmployees;

      // it's an assignment
      if (site.id !== 0) {
        assignmentEmployees = planningFunctions.getSiteEmployees(companies, site.id);
      // it's an absence
      } else {
        assignmentEmployees = absences;
      }

      if (assignment.employee_id !== undefined) {
        const colleagues = assignmentEmployees.filter(
          (item) => item.id !== assignment.employee_id,
        );
        const colleaguesIds = colleagues.map((item) => item.id);
        assignmentEmployees = employeesList.filter(
          ({ id }) => !colleaguesIds.includes(id),
        );
      }
      setEmployees(assignmentEmployees);
      setModalOpened(true);
    }
  }, [assignment]);

  React.useEffect(() => {
    setDraggableCompanies(companies);
  }, [companies]);

  return (
    <>
      <Typography variant="h1" sx={{ textAlign: 'center' }}>
        {'Planning d\'intervention'}
      </Typography>

      <SearchContainer isAdmin date={startDate} />

      {companies.length
        && !isMobile
        ? (
          <DraggableAssignments
            absences={absences}
            companies={draggableCompanies}
            handleAbsence={handleAbsence}
            handleAssignment={handleAssignment}
            week={currentWeek}
          />
        )
        : (
          <Companies
            absences={absences}
            companies={companies}
            handleAbsence={handleAbsence}
            handleAssignment={handleAssignment}
            isDropable={false}
            isMobile
            week={currentWeek}
          />
        )}

      {modalOpened
      && (
      <Modal
        sx={{
          width: '90vw',
          maxWidth: '30rem',
          mx: 'auto',
          mt: '25vh',
        }}
        open
        onClose={handleModal}
      >
        <AssignmentFormContainer
          absencesList={absencesList}
          assignment={assignment}
          employeesList={employees}
          handleCancel={handleCancel}
          setModalOpened={setModalOpened}
        />
      </Modal>
      )}
    </>
  );
}

PlanningAdmin.propTypes = {
  absences: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  absencesList: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
  companies: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
  employeesList: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
  startDate: PropTypes.string.isRequired,
};

export default React.memo(PlanningAdmin);
