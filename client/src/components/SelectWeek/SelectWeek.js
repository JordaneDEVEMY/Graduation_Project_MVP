/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import PropTypes from 'prop-types';
import utils from '../../utils';
import './selectweek.scss';

function SelectWeek({
  range,
}) {
  const now = new Date();
  const currentWeek = utils.dateFunctions.getWeekNumberFromDate(now);
  const weeks = {
    prev: utils.dateFunctions.getPrevWeek(now),
    current: currentWeek,
    next: [],
    dates: utils.dateFunctions.getDatesFromWeekNumber(now.getFullYear(), currentWeek),
  };

  // for (const type of ['prevs', 'nexts']) {
  //   for (let i = 0; i < range; i += 1) {
  //     let week;

  //     if (type === 'prevs') {
  //       week = weeks.current - (i + 1);
  //     } else {
  //       week = weeks.current + (i + 1);
  //     }
  //     weeks[type].push(week);
  //   }
  // }

  console.log(weeks);

  return (
    <p>
      {`current week : ${weeks.current}, range : ${range}`}
    </p>
  );
}

SelectWeek.propTypes = {
  range: PropTypes.number,
};
SelectWeek.defaultProps = {
  range: 2,
};
export default React.memo(SelectWeek);
