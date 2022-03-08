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
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const admin = useSelector((state) => state.admin);
  // const weekPeriod = useSelector((state) => state.admin.weekStart);
  // const planning = useSelector((state) => state.admin.planning);
  const planning = [];
  const weekPeriod = 'hh';

  const { isAdmin } = user;
  const [startDate, setStartDate] = React.useState(date);
  console.log('isAdmin', admin);
  // console.log('weekPeriod', weekPeriod);
  // console.log('planning', planning);

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
          user={user}
          startDate={weekPeriod}
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
