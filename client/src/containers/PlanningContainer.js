import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { actionGetUserPlanning } from '../actions/user';
import Planning from '../components/Planning/Planning';

function PlanningContainer({
  isAdmin,
}) {
  const dispatch = useDispatch();
  const userAssignments = useSelector((state) => state.user.assignments);
  useEffect(() => {
    console.log('je suis dans le useEffect');
    dispatch(actionGetUserPlanning());
  }, []);

  return (
    <Planning userAssignments={userAssignments} isAdmin={isAdmin} />
  );
}

PlanningContainer.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
};
PlanningContainer.defaultProps = {};
export default React.memo(PlanningContainer);
