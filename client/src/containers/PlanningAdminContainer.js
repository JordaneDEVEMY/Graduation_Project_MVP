/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { actionRequestAdminPlanning } from '../actions/admin';
import { actionRequestAllCompanies } from '../actions/allCompanies';
import { actionRequestAllSites } from '../actions/allSites';
import { actionRequestAllEmployees } from '../actions/allEmployees';
import PlanningAdmin from '../components/PlanningAdmin/PlanningAdmin';
import dateFunctions from '../utils/dateFunctions';
import planningFunctions from '../utils/planningFunctions';

function PlanningAdminContainer() {
  const dispatch = useDispatch();
  const planning = useSelector((state) => state.admin.planning);
  let { weekSlug } = useParams();

  if (weekSlug === undefined) {
    const today = dateFunctions.getDate().format('YYYY-MM-DD');
    weekSlug = planningFunctions.getSlugFromDate(today);
  }
  const startDate = weekSlug;
  // sort planning by companies
  const companies = planningFunctions.adminPlanningToCompanies(planning);

  console.log('companies', companies);
  console.log('startDate', startDate);

  useEffect(() => {
    dispatch(actionRequestAllEmployees());
    dispatch(actionRequestAllSites());
    dispatch(actionRequestAllCompanies());
    dispatch(actionRequestAdminPlanning(weekSlug));
  }, []);

  return (
    <PlanningAdmin
      companies={companies}
      planning={planning}
      startDate={startDate}
    />
  );
}

PlanningAdminContainer.propTypes = {
};

PlanningAdminContainer.defaultProps = {
};

export default React.memo(PlanningAdminContainer);
