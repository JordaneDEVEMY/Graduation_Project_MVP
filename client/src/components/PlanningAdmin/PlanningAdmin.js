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
  console.log('employeesList', employeesList);

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
    console.log(assignment);
    // 1. build employeesList used in assignment modal
    // 2. open modal
    if (assignment.site !== undefined) {
      const { employee_id } = assignment;
      const method = employee_id !== null ? 'PATCH' : 'POST';
      // get all others sites employees
      const allSitesEmployees = planningFunctions.getAllSitesEmployees(companies);
      console.log('allSitesEmployees', allSitesEmployees);
      const allSitesEmployeesIds = allSitesEmployees.map((item) => item.id);
      console.log('allSitesEmployeesIds', allSitesEmployeesIds);
      // retrieve all assignments employees from employeesLIst
      const assignmentEmployees = employeesList.filter(
        ({ id }) => !allSitesEmployeesIds.includes(id),
      );

      // // it's an assignment
      // if (absence_id === null) {
      //   assignmentEmployees = planningFunctions.getSiteEmployees(companies, site.id);
      // // it's an absence
      // } else {
      //   const absences = planningFunctions.getAbsenceEmployees(companies, absence_id);
      //   assignmentEmployees = absences;
      // }

      // it's an update
      // add assignment employee to list
      if (method === 'PATCH') {
        const employee = employeesList.filter(({ id }) => id === employee_id)[0];
        assignmentEmployees.push(employee);
      }
      setEmployees(assignmentEmployees);
      console.log('assignmentEmployees', assignmentEmployees);
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
            companies={draggableCompanies}
            handleAbsence={handleAbsence}
            handleAssignment={handleAssignment}
            week={currentWeek}
          />
        )
        : (
          <Companies
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
  companies: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
  employeesList: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
  startDate: PropTypes.string.isRequired,
};

export default React.memo(PlanningAdmin);
