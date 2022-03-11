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
  let { weekStart } = useParams();

  if (weekStart === undefined) {
    const today = dateFunctions.getDate().format('YYYY-MM-DD');
    weekStart = planningFunctions.getSlugFromDate(today);
  }
  const [startDate, setStartDate] = React.useState(dateFunctions.getDateFromPlanningSlug(weekStart));

  console.log('startDate', startDate);

  const dispatch = useDispatch();
  const planning = useSelector((state) => state.admin.planning);

  useEffect(() => {
    dispatch(actionRequestAllEmployees());
    dispatch(actionRequestAllSites());
    dispatch(actionRequestAllCompanies());
    dispatch(actionRequestAdminPlanning(weekStart));
  }, []);

  useEffect(() => {
    const slug = planningFunctions.getSlugFromDate(startDate);
    dispatch(actionRequestAdminPlanning(slug));
  }, [startDate]);

  return (
    <PlanningAdmin
      planning={planning}
      startDate={startDate}
      handleStartDate={setStartDate}
    />
  );
}

PlanningAdminContainer.propTypes = {
};

PlanningAdminContainer.defaultProps = {
};

export default React.memo(PlanningAdminContainer);
