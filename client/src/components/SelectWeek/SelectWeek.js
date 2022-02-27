/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import PropTypes from 'prop-types';
import utils from '../../utils';
import './selectweek.scss';

function SelectWeek({
  range,
  date,
}) {
  const dateString = date || utils.dateFunctions.getDate().format('YYYY-MM-DD');
  console.log(dateString);

  const week = utils.dateFunctions.getWeek(dateString);

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
      {`current week : ${week.current.num}, range : ${range}`}
    </p>
  );
}

SelectWeek.propTypes = {
  date: PropTypes.number,
  range: PropTypes.number,
};
SelectWeek.defaultProps = {
  date: undefined,
  range: 2,
};
export default React.memo(SelectWeek);
