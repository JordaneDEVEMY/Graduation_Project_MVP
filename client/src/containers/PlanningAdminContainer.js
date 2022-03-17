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
import { getLocalBearerToken } from '../requests/index';

function PlanningAdminContainer() {
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.admin);
  const { employees: employeesList } = useSelector((state) => state.allEmployees);
  const { weekStart } = admin;
  const [startDate, setStartDate] = React.useState(weekStart);
  const [companies, setCompanies] = React.useState(planningFunctions.adminPlanningToCompanies(admin));
  let { weekSlug } = useParams();
  if (weekSlug === undefined) {
    weekSlug = planningFunctions.getCurrentWeekSlug();
  }
  console.log('token', getLocalBearerToken());
  console.log('companies', companies);
  useEffect(() => {
    dispatch(actionRequestAllEmployees());
    dispatch(actionRequestAllAbsences());
    // dispatch(actionRequestAllSites());
    // dispatch(actionRequestAllCompanies());
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
      companies={companies}
      employeesList={employeesList}
      startDate={startDate}
    />
  );
}

export default React.memo(PlanningAdminContainer);
