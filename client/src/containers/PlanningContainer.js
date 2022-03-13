/* eslint-disable max-len */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { actionGetUserPlanning } from '../actions/user';
import Planning from '../components/Planning/Planning';
import dateFunctions from '../utils/dateFunctions';
import planningFunctions from '../utils/planningFunctions';

function PlanningContainer({
  date,
}) {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  const user = planningFunctions.userFromData(userData);
  const [startDate, setStartDate] = React.useState(date);
  // const { absences, sites } = planningFunctions.userPlanningToSites(assignments, startDate);
  // console.log('start date', startDate);
  console.log('userData', userData);
  // console.log('sites', sites);
  // console.log('absences', absences);
  console.log('user', userData);

  useEffect(() => {
    dispatch(actionGetUserPlanning());
  }, []);

  useEffect(() => {
    console.log('date data change');
    setStartDate(date);
  }, [date]);

  useEffect(() => {
    console.log('user data change');
  }, [userData]);

  // useEffect(() => {
  //   if (startDate !== '') {
  //     console.log(`REQUEST GET ${startDate}`);
  //   }
  // }, [startDate]);

  return (
    <Planning
      user={user}
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
