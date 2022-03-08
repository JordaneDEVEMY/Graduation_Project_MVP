import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { actionGetUserPlanning } from '../actions/user';
import PlanningAdmin from '../components/PlanningAdmin/PlanningAdmin';
import Planning from '../components/Planning/Planning';
import dateFunctions from '../utils/dateFunctions';

function PlanningContainer({
  date,
}) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { isAdmin } = user;
  const [startDate, setStartDate] = React.useState(date);

  useEffect(() => {
    dispatch(actionGetUserPlanning());
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
