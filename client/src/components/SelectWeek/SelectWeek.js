import React from 'react';
import PropTypes from 'prop-types';
import utils from '../../utils';
import './selectweek.scss';

function SelectWeek({
  currentWeek,
  range,
}) {
  const current = currentWeek || utils.dateFunctions.getCurrentWeekNumber();
  return (
    <p>
      {`current week : ${current}, range : ${range}`}
    </p>
  );
}

SelectWeek.propTypes = {
  currentWeek: PropTypes.number,
  range: PropTypes.number,
};
SelectWeek.defaultProps = {
  currentWeek: null,
  range: 2,
};
export default React.memo(SelectWeek);
