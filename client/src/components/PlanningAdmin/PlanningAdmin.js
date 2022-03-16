/* eslint-disable max-len */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { Button, Typography, Modal } from '@mui/material';
import AssignmentFormContainer from '../../containers/AssignmentFormContainer';
import CompanyForm from '../CompanyForm/CompanyForm';
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
  const theme = useTheme();
  const week = dateFunctions.getWeek(startDate);
  const { current: currentWeek } = week;
  const isPast = dateFunctions.isBefore(currentWeek.dates[6]);
  const isMobile = useBreakpointDown();
  const canAddCompany = (companies.length - 1) < companiesList.length;
  // Instances used for forms
  const [assignment, setAssignment] = React.useState({});
  const [addCompany, setAddCompany] = React.useState(false);
  // const [site, setSite] = React.useState({});
  // lists used in forms
  const [companiesSelection, setCompaniesSelection] = React.useState(companiesList);
  const [employeesSelection, setEmployeesSelection] = React.useState(employeesList);
  // const [sitesSelection, setSitesSelection] = React.useState(sitesList);
  // dragend
  const [draggableCompanies, setDraggableCompanies] = React.useState(companies);
  const [dragEndResult, setDragEndResult] = React.useState({});
  // forms modal
  const [modalOpened, setModalOpened] = React.useState(false);
  console.log('modalOpened', modalOpened);

  const handleAssignment = (assignmentData, dragResult = {}) => {
    setAssignment(assignmentData);

    if (dragResult.draggableId !== undefined) {
      setDragEndResult(dragResult);
    }
  };

  const handleOnAssignmentSubmitted = () => {
    setAssignment({});
    setModalOpened(false);
  };

  const handleAddCompany = () => {
    setAddCompany(true);
  };

  const handleOnCompanySubmitted = (data) => {
    const { company } = data;
    console.log('company submitted', company);
    console.log('draggableCompanies', draggableCompanies);
    const planningCompanies = [...draggableCompanies];
    planningCompanies.push(company);
    console.log(planningFunctions.sortCompaniesByName(planningCompanies));
    setDraggableCompanies(planningFunctions.sortCompaniesByName(planningCompanies));
    // Add company to planning
    // companiesSelection
    setAddCompany(false);
    setModalOpened(false);
  };

  // const handleSubmitCompany = () => {
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
    setModalOpened((stateModal) => !stateModal);
  };

  /**
   * listen assignment change and adjust employees list in assignment Form
   */
  React.useEffect(() => {
    console.log('assignment', assignment);
    // 1. build employeesList used in assignment modal
    // 2. open modal
    if (assignment.site !== undefined) {
      const { employee_id } = assignment;
      const method = employee_id !== null ? 'PATCH' : 'POST';
      // get all employees
      const allPlanningEmployees = planningFunctions.getPlanningEmployees(companies);
      const allPlanningEmployeesIds = allPlanningEmployees.map((item) => item.id);
      // retrieve all assignments employees from employeesLIst
      const employeesWhoCanBeAdded = employeesList.filter(
        ({ id }) => !allPlanningEmployeesIds.includes(id),
      );

      // it's an update
      // add assignment employee to list
      if (method === 'PATCH') {
        const employee = employeesList.filter(({ id }) => id === employee_id)[0];
        employeesWhoCanBeAdded.push(employee);
      }
      setEmployeesSelection(employeesWhoCanBeAdded);
      setModalOpened(true);
    }
  }, [assignment]);

  /**
   * adjust companies list in new company Form
   */
  React.useEffect(() => {
    if (addCompany) {
      // get all others sites employees
      const allPlanningCompaniesIds = companies.map((item) => item.id);
      console.log('allPlanningCompaniesIds', allPlanningCompaniesIds);
      // retrieve all assignments employees from employeesLIst
      const compagniesWhoCanBeAdded = companiesList.filter(
        ({ id }) => !allPlanningCompaniesIds.includes(id),
      );
      console.log('compagniesWhoCanBeAdded', compagniesWhoCanBeAdded);
      setCompaniesSelection(compagniesWhoCanBeAdded);
      setModalOpened(true);
    }
  }, [addCompany]);

  React.useEffect(() => {
    setDraggableCompanies(companies);
  }, [companies]);

  return (
    <>
      <Typography variant="h1" sx={{ textAlign: 'center' }}>
        {'Planning d\'intervention'}
      </Typography>

      <SearchContainer isAdmin date={startDate} />

      {canAddCompany && (
        <Button
          variant="outlined"
          disabled={isPast}
          onClick={handleAddCompany}
          sx={{
            mb: theme.spacing(1),
          }}
        >
          {`Ajouter une compagnie en S${currentWeek.num.toString().padStart(2, '0')}`}
        </Button>
      )}

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
        <>
          {assignment.id !== undefined
          && (
          <AssignmentFormContainer
            assignment={assignment}
            employeesList={employeesSelection}
            handleCancel={handleCancel}
            handleSubmit={handleOnAssignmentSubmitted}
            setModalOpened={setModalOpened}
          />
          )}
          {(canAddCompany && addCompany)
          && (
          <CompanyForm
            companiesList={companiesSelection}
            sitesList={sitesList}
            handleCancel={handleModal}
            handleSubmit={handleOnCompanySubmitted}
          />
          )}
        </>
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
