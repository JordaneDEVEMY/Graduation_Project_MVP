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
  const theme = useTheme();
  const week = dateFunctions.getWeek(startDate);
  const { current: currentWeek } = week;
  const isPast = dateFunctions.isBefore(currentWeek.dates[6]);
  const isMobile = useBreakpointDown();
  const canAddCompany = (companies.length - 1) < companiesList.length;
  // forms modal
  const [modalOpened, setModalOpened] = React.useState(false);
  // Instances used for forms
  const [assignment, setAssignment] = React.useState({});
  const [addCompany, setAddCompany] = React.useState(false);
  const [addSite, setAddSite] = React.useState(false);
  // lists used in forms
  const [companiesSelection, setCompaniesSelection] = React.useState(companiesList);
  const [sitesSelection, setSitesSelection] = React.useState([]);
  const [employeesSelection, setEmployeesSelection] = React.useState(employeesList);
  // const [sitesSelection, setSitesSelection] = React.useState(sitesList);
  // dragend
  const [draggableCompanies, setDraggableCompanies] = React.useState(companies);
  const [dragEndResult, setDragEndResult] = React.useState({});
  console.log('draggableCompanies into planning', draggableCompanies);

  const handleAddAssignment = (assignmentData, dragResult = undefined) => {
    if (dragResult) {
      setDragEndResult(dragResult);
    }
    setAssignment(assignmentData);
  };

  const handleAddCompany = () => {
    setAddCompany(true);
  };

  const handleAddSite = (company, availablesSitesList) => {
    console.log('add site', company, availablesSitesList);
    setSitesSelection(availablesSitesList);
    setAddSite(true);
  };

  const handleOnAssignmentSubmitted = () => {
    console.log('on assignment submitted');
    setAssignment({});
    setModalOpened(false);
  };

  const handleOnCompanySubmitted = (company) => {
    console.log('on company submitted', company);
    const addType = addCompany ? 'company' : 'site';
    console.log(addType);
    const planningCompanies = [...draggableCompanies];
    let sortedCompanies = planningCompanies;

    if (addType === 'company') {
      planningCompanies.push(company);
      sortedCompanies = planningFunctions.sortCompaniesByName(planningCompanies);
    } else {
      const { id: companyId, sites } = company;
      const site = sites[0];
      sortedCompanies.map((item) => {
        const { id, sites: companySite } = item;
        if (id === companyId) {
          companySite.push(site);
        }
        return {
          ...item,
          sites: companySite,
        };
      });
      sortedCompanies = planningFunctions.sortCompaniesByName(planningCompanies);
    }
    setDraggableCompanies(sortedCompanies);

    setAddCompany(false);
    setAddSite(false);
    setModalOpened(false);
  };

  const handleCancelAssignment = () => {
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
    setAssignment({});
    setModalOpened(false);
  };

  const handleCancelCompany = () => {
    setAddCompany(false);
    setAddSite(false);
    setModalOpened(false);
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
      // retrieve all assignments employees from employeesLIst
      const compagniesWhoCanBeAdded = companiesList.filter(
        ({ id }) => !allPlanningCompaniesIds.includes(id),
      );
      setCompaniesSelection(compagniesWhoCanBeAdded);
      setModalOpened(true);
    }
  }, [addCompany]);

  /**
   * open modal if add site
   */
  React.useEffect(() => {
    if (addSite) {
      setModalOpened(true);
    }
  }, [addSite]);

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

      {!isMobile
        ? (
          <DraggableAssignments
            companies={draggableCompanies}
            handleAssignment={handleAddAssignment}
            handleSite={handleAddSite}
            isPast={isPast}
            sitesList={sitesList}
            week={currentWeek}
          />
        )
        : (
          <Companies
            companies={companies}
            handleAssignment={handleAddAssignment}
            handleSite={handleAddSite}
            isDropable={false}
            isMobile
            isPast={isPast}
            sitesList={sitesList}
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
            handleCancel={handleCancelAssignment}
            handleSubmit={handleOnAssignmentSubmitted}
          />
          )}
          {(addCompany || addSite)
          && (
          <CompanyForm
            companiesList={companiesSelection}
            sitesList={sitesList}
            sitesSelection={sitesSelection}
            handleCancel={handleCancelCompany}
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
