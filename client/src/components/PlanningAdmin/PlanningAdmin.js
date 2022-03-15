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
  companies,
  employeesList,
  setStartDate,
  startDate,
  user,
}) {
  const week = dateFunctions.getWeek(startDate);
  const { current: currentWeek } = week;
  const isMobile = useBreakpointDown();
  const [assignment, setAssignment] = React.useState({});
  const [modalOpened, setModalOpened] = React.useState(false);
  const [employees, setEmployees] = React.useState(employeesList);
  console.log('employees', employees);

  const handleAssignment = (result) => {
    setAssignment(result);
    console.log('set assignment', result);
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
    if (assignment.site !== undefined) {
      const { site } = assignment;
      let assignmentEmployees = planningFunctions.getSiteEmployees(companies, site.id);
      console.log('user', user);
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
            companies={companies}
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
          assignment={assignment}
          employeesList={employees}
          setStartDate={setStartDate}
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
  companies: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
  employeesList: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
  setStartDate: PropTypes.func.isRequired,
  startDate: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default React.memo(PlanningAdmin);
