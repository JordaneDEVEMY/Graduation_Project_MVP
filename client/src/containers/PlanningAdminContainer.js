/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { actionGetUserPlanning } from '../actions/user';
import { actionRequestAdminPlanning, actionRequestAllQualifications, actionRequestAllAbsences } from '../actions/admin';
import { actionRequestAllCompanies } from '../actions/allCompanies';
import { actionRequestAllSites } from '../actions/allSites';
import { actionRequestAllEmployees } from '../actions/allEmployees';
import PlanningAdmin from '../components/PlanningAdmin/PlanningAdmin';
import planningFunctions from '../utils/planningFunctions';

function PlanningAdminContainer() {
  const dispatch = useDispatch();
  const { admin, user } = useSelector((state) => state);
  const { employees: employeesList } = useSelector((state) => state.allEmployees);
  const { absences: planningAbsences, planning, weekStart } = admin;
  const [startDate, setStartDate] = React.useState(weekStart);
  const [absences, setAbsences] = React.useState(planningFunctions.adminPlanningToAbsences(planningAbsences));
  const [companies, setCompanies] = React.useState(planningFunctions.adminPlanningToCompanies(planning));

  let { weekSlug } = useParams();
  if (weekSlug === undefined) {
    weekSlug = planningFunctions.getCurrentWeekSlug();
  }

  useEffect(() => {
    dispatch(actionGetUserPlanning());
    dispatch(actionRequestAllEmployees());
    dispatch(actionRequestAllSites());
    dispatch(actionRequestAllCompanies());
    dispatch(actionRequestAdminPlanning(weekSlug));
    dispatch(actionRequestAllQualifications());
    dispatch(actionRequestAllAbsences());
    setAbsences(planningFunctions.adminPlanningToAbsences(planningAbsences));
    setCompanies(planningFunctions.adminPlanningToCompanies(planning));
  }, []);

  useEffect(() => {
    dispatch(actionRequestAdminPlanning(weekSlug));
  }, [weekSlug]);

  useEffect(() => {
    setAbsences(planningFunctions.adminPlanningToAbsences(planningAbsences));
    setCompanies(planningFunctions.adminPlanningToCompanies(planning));
  }, [admin]);

  return (
    <PlanningAdmin
      absences={absences}
      companies={companies}
      employeesList={employeesList}
      setStartDate={setStartDate}
      startDate={startDate}
      user={user}
    />
  );
}

export default React.memo(PlanningAdminContainer);
