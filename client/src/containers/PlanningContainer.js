import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { actionGetUserPlanning } from '../actions/user';
import { actionRequestAdminPlanning } from '../actions/admin';
import Planning from '../components/Planning/Planning';
import dateFunctions from '../utils/dateFunctions';

function PlanningContainer({
  date,
}) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { assignments } = user;
  const [startDate, setStartDate] = React.useState(date);

  useEffect(() => {
    if (user.isAdmin) {
      dispatch(actionRequestAdminPlanning());
    }
    dispatch(actionGetUserPlanning());
  }, []);

  return (
    <Planning
      user={user}
      assignments={assignments}
      startDate={startDate}
      handleStartDate={setStartDate}
    />
  );
}

PlanningContainer.propTypes = {
  date: PropTypes.string,
};

PlanningContainer.defaultProps = {
  date: dateFunctions.getDate().format('YYYY-MM-DD'),
};

export default React.memo(PlanningContainer);
