import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { actionGetUserPlanning } from '../actions/user';
import Planning from '../components/Planning/Planning';

function PlanningContainer({
  isAdmin,
}) {
  const dispatch = useDispatch();
  const userAssignements = useSelector((state) => state.user.assignements);

  useEffect(() => {
    console.log('je suis dans le useEffect');
    dispatch(actionGetUserPlanning());
  }, []);

  return (
    <Planning userAssignements={userAssignements} isAdmin={isAdmin} />
  );
}

PlanningContainer.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
};
PlanningContainer.defaultProps = {};
export default React.memo(PlanningContainer);
