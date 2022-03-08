import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { actionRequestAdminPlanning } from '../actions/admin';
import { actionGetUserPlanning } from '../actions/user';
import PlanningAdmin from '../components/PlanningAdmin/PlanningAdmin';
import Planning from '../components/Planning/Planning';
import dateFunctions from '../utils/dateFunctions';

function PlanningContainer({
  date,
}) {
  let weekStart;
  let planning;

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { isAdmin } = user;

  if (isAdmin) {
    weekStart = useSelector((state) => state.admin.weekStart);
    planning = useSelector((state) => state.admin.planning);
  } else {
    weekStart = date;
  }

  const [startDate, setStartDate] = React.useState(weekStart);

  useEffect(() => {
    dispatch(actionGetUserPlanning());

    if (isAdmin) {
      dispatch(actionRequestAdminPlanning());
    }
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
