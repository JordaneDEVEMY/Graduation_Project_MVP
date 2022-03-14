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
  const { admin } = useSelector((state) => state);
  const { employees: employeesList } = useSelector((state) => state.allEmployees);
  const { absences: planningAbsences, planning, weekStart: startDate } = admin;
  const [absences, setAbsences] = React.useState(planningFunctions.adminPlanningToAbsences(planningAbsences));
  const [companies, setCompanies] = React.useState(planningFunctions.adminPlanningToCompanies(planning));
  let { weekSlug } = useParams();
  if (weekSlug === undefined) {
    weekSlug = planningFunctions.getCurrentWeekSlug();
  }

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
    setAbsences(planningFunctions.adminPlanningToAbsences(planningAbsences));
    setCompanies(planningFunctions.adminPlanningToCompanies(planning));
  }, [startDate]);

  return (
    <PlanningAdmin
      absences={absences}
      companies={companies}
      employeesList={employeesList}
      planning={planning}
      startDate={startDate}
    />
  );
}

export default React.memo(PlanningAdminContainer);
