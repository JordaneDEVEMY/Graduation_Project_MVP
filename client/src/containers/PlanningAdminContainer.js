/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { actionRequestAdminPlanning } from '../actions/admin';
import { actionRequestAllCompanies } from '../actions/allCompanies';
import { actionRequestAllSites } from '../actions/allSites';
import { actionRequestAllEmployees } from '../actions/allEmployees';
import PlanningAdmin from '../components/PlanningAdmin/PlanningAdmin';
import planningFunctions from '../utils/planningFunctions';

function PlanningAdminContainer() {
  const dispatch = useDispatch();
  const planning = useSelector((state) => state.admin.planning);
  const startDate = useSelector((state) => state.admin.weekStart);
  const [companies, setCompanies] = React.useState(planningFunctions.adminPlanningToCompanies(planning));
  let { weekSlug } = useParams();
  if (weekSlug === undefined) {
    weekSlug = planningFunctions.getCurrentWeekSlug();
  }

  console.log('companies', companies);
  console.log('startDate', startDate);
  console.log('weekSlug', weekSlug);

  useEffect(() => {
    dispatch(actionRequestAllEmployees());
    dispatch(actionRequestAllSites());
    dispatch(actionRequestAllCompanies());
    dispatch(actionRequestAdminPlanning(weekSlug));
  }, []);

  useEffect(() => {
    dispatch(actionRequestAdminPlanning(weekSlug));
  }, [weekSlug]);

  useEffect(() => {
    setCompanies(planningFunctions.adminPlanningToCompanies(planning));
  }, [startDate]);

  return (
    <PlanningAdmin
      companies={companies}
      planning={planning}
      startDate={startDate}
    />
  );
}

export default React.memo(PlanningAdminContainer);
