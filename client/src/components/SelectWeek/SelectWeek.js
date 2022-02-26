/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import PropTypes from 'prop-types';
import utils from '../../utils';
import './selectweek.scss';

function SelectWeek({
  range,
}) {
  const week = {
    prev: utils.dateFunctions.getPrevWeek(),
    current: utils.dateFunctions.getWeek(),
    next: utils.dateFunctions.getNextWeek(),
    dates: utils.dateFunctions.getWeekDates(),
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

  console.log(week);

  return (
    <p>
      {`current week : ${week.current}, range : ${range}`}
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
