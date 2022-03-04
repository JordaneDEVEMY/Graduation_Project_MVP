import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Planning from '../components/Planning/Planning';

function PlanningContainer() {
  useEffect(() => {
    dispatch(actionGetUserPlanning());
  });

  return (
    <Planning />
  );
}

PlanningContainer.propTypes = {};
PlanningContainer.defaultProps = {};
export default React.memo(PlanningContainer);
