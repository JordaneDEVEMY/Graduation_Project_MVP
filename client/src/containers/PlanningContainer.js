import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { actionGetUserPlanning } from '../actions/user';
import { actionRequestAdminPlanning } from '../actions/admin';
import { actionRequestAllCompanies } from '../actions/allCompanies';
import { actionRequestAllSites } from '../actions/allSites';
import { actionRequestAllEmployees } from '../actions/allEmployees';
import Planning from '../components/Planning/Planning';
import PlanningAdmin from '../components/PlanningAdmin/PlanningAdmin';
import dateFunctions from '../utils/dateFunctions';

function PlanningContainer({
  date,
}) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { isAdmin } = user;

  const weekStart = isAdmin ? useSelector((state) => state.admin.weekStart) : date;
  const planning = isAdmin && useSelector((state) => state.admin.planning);

  const [startDate, setStartDate] = React.useState(weekStart);

  useEffect(() => {
    dispatch(actionGetUserPlanning());

    if (isAdmin) {
      dispatch(actionRequestAllEmployees());
      dispatch(actionRequestAllSites());
      dispatch(actionRequestAllCompanies());
      dispatch(actionRequestAdminPlanning());
    }
    setStartDate(weekStart);
  }, []);

  return (
    !isAdmin
      ? (
        <Planning
          user={user}
          startDate={startDate}
          handleStartDate={setStartDate}
        />
      )
      : (
        <PlanningAdmin
          planning={planning}
          startDate={startDate}
          handleStartDate={setStartDate}
        />
      )
  );
}

PlanningContainer.propTypes = {
  date: PropTypes.string,
};

PlanningContainer.defaultProps = {
  date: dateFunctions.getDate().format('YYYY-MM-DD'),
};

export default React.memo(PlanningContainer);
