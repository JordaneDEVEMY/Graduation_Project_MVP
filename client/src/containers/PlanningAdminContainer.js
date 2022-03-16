/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  actionRequestAdminPlanning,
  actionRequestAllEmployees,
  actionRequestAllAbsences, actionSetWeekslug,
} from '../actions';
import PlanningAdmin from '../components/PlanningAdmin/PlanningAdmin';
import planningFunctions from '../utils/planningFunctions';

function PlanningAdminContainer() {
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.admin);
  const { employees: employeesList } = useSelector((state) => state.allEmployees);
  const { allAbsences: absencesList } = admin;
  const { weekStart } = admin;
  const [startDate, setStartDate] = React.useState(weekStart);
  const [companies, setCompanies] = React.useState(planningFunctions.adminPlanningToCompanies(admin));
  let { weekSlug } = useParams();
  if (weekSlug === undefined) {
    weekSlug = planningFunctions.getCurrentWeekSlug();
  }
  console.log('companies', companies);
  useEffect(() => {
    dispatch(actionSetWeekslug(weekSlug));
    dispatch(actionRequestAdminPlanning());
    // dispatch(actionGetUserPlanning());
    dispatch(actionRequestAllEmployees());
    dispatch(actionRequestAllAbsences());
    // dispatch(actionRequestAllSites());
    // dispatch(actionRequestAllCompanies());
    // dispatch(actionRequestAllQualifications());
    setCompanies(planningFunctions.adminPlanningToCompanies(admin));
  }, []);

  useEffect(() => {
    dispatch(actionSetWeekslug(weekSlug));
    dispatch(actionRequestAdminPlanning());
  }, [weekSlug]);

  useEffect(() => {
    setStartDate(admin.weekStart);
    setCompanies(planningFunctions.adminPlanningToCompanies(admin));
  }, [admin]);

  return (
    <PlanningAdmin
      absencesList={absencesList}
      companies={companies}
      employeesList={employeesList}
      startDate={startDate}
    />
  );
}

export default React.memo(PlanningAdminContainer);
