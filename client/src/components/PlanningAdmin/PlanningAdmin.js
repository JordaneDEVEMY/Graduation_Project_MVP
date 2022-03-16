/* eslint-disable max-len */
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
  companiesList,
  employeesList,
  sitesList,
  startDate,
}) {
  console.log('companies', companies);
  console.log('companiesList', companiesList);
  console.log('sitesList', sitesList);
  const week = dateFunctions.getWeek(startDate);
  const { current: currentWeek } = week;
  const isMobile = useBreakpointDown();
  const canAddCompany = (companies.length - 1) < companiesList.length;
  // Instances used in forms
  // assignment instance
  const [assignment, setAssignment] = React.useState({});
  // const [company, setCompany] = React.useState({});
  // const [site, setSite] = React.useState({});
  // lists used in forms
  // const [companiesSelection, setCompaniesSelection] = React.useState(companiesList);
  const [employeesSelection, setEmployeesSelection] = React.useState(employeesList);
  // const [sitesSelection, setSitesSelection] = React.useState(sitesList);
  // dragend
  const [draggableCompanies, setDraggableCompanies] = React.useState(companies);
  const [dragEndResult, setDragEndResult] = React.useState({});
  // forms modal
  const [modalOpened, setModalOpened] = React.useState(false);

  const handleAssignment = (assignmentData, dragResult = {}) => {
    setAssignment(assignmentData);

    if (dragResult?.draggableId) {
      setDragEndResult(dragResult);
    }
  };

  // const handleCompany = (companyData) => {
  //   setCompaniesSelection(companyData);
  // };

  // const handleSite = (siteData) => {
  //   setSitesSelection(siteData);
  // };

  const handleCancel = () => {
    setAssignment({});

    if (dragEndResult?.draggableId) {
      const initialResult = {
        ...dragEndResult,
        source: dragEndResult.destination,
        destination: dragEndResult.source,
      };
      const refreshList = planningFunctions.setAssignmentPosition(initialResult, draggableCompanies);
      setDraggableCompanies(refreshList);
      setDragEndResult({});
    }
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

  /**
   *
   */
  React.useEffect(() => {
    console.log(assignment);
    // 1. build employeesList used in assignment modal
    // 2. open modal
    if (assignment.site !== undefined) {
      const { employee_id } = assignment;
      const method = employee_id !== null ? 'PATCH' : 'POST';
      // get all others sites employees
      const allSitesEmployees = planningFunctions.getAllSitesEmployees(companies);
      const allSitesEmployeesIds = allSitesEmployees.map((item) => item.id);
      // retrieve all assignments employees from employeesLIst
      const assignmentEmployees = employeesList.filter(
        ({ id }) => !allSitesEmployeesIds.includes(id),
      );

      // it's an update
      // add assignment employee to list
      if (method === 'PATCH') {
        const employee = employeesList.filter(({ id }) => id === employee_id)[0];
        assignmentEmployees.push(employee);
      }
      setEmployeesSelection(assignmentEmployees);
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

      {canAddCompany && ('TEST')}

      {companies.length
        && !isMobile
        ? (
          <DraggableAssignments
            companies={draggableCompanies}
            handleAssignment={handleAssignment}
            week={currentWeek}
          />
        )
        : (
          <Companies
            companies={companies}
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
        {assignment.id !== undefined
        && (
        <AssignmentFormContainer
          assignment={assignment}
          employeesList={employeesSelection}
          handleCancel={handleCancel}
          setModalOpened={setModalOpened}
        />
        )}
      </Modal>
      )}
    </>
  );
}

PlanningAdmin.propTypes = {
  companies: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
  companiesList: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
  employeesList: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
  sitesList: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
  startDate: PropTypes.string.isRequired,
};

export default React.memo(PlanningAdmin);
