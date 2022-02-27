/* eslint-disable max-len */
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import utils from '../../utils';
import './selectweek.scss';

function SelectWeek({
  date,
}) {
  const [week, setWeek] = useState(utils.dateFunctions.getWeek(date));
  const currentYear = utils.dateFunctions.getDate(week.current.dates[0]).year();
  const maxOldYear = new Date().getFullYear() - 10;

  console.log(utils.dateFunctions.getDate(week.prev.dates[6]).year(), maxOldYear);
  /**
   * Get last ten years
   * @returns {array} List of MenuItem components
   */
  const getYears = () => {
    let now = new Date().getFullYear();
    const years = [];
    while (now >= maxOldYear) {
      years.push(<MenuItem key={now} value={now}>{now}</MenuItem>);
      now -= 1;
    }

    return years;
  };

  /**
   * Get weeks of current year
   * @param {number} year - Current year
   * @returns {array} List of MenuItem components
   */
  const getWeeks = (year) => {
    const nbWeeks = utils.dateFunctions.getDate(`${year}-01-01`).isoWeeksInYear();
    const weeks = [];
    let i = 1;
    while (i <= nbWeeks) {
      weeks.push(<MenuItem key={i} value={i}>{`Semaine ${i}`}</MenuItem>);
      i += 1;
    }

    return weeks;
  };

  const handleWeekSelect = (event) => {
    const selectedWeek = event.target.value;
    let weekMonday;

    if (selectedWeek >= week.current.num) {
      weekMonday = utils.dateFunctions.getDate(week.current.dates[0]).add(selectedWeek - week.current.num, 'week').format('YYYY-MM-DD');
    } else {
      weekMonday = utils.dateFunctions.getDate(week.current.dates[0]).subtract(week.current.num - selectedWeek, 'week').format('YYYY-MM-DD');
    }

    setWeek(utils.dateFunctions.getWeek(weekMonday));
  };

  const handleYearSelect = (event) => {
    const selectedYear = event.target.value;
    const firstMonday = utils.dateFunctions.getDate(week.current.dates[0]).subtract(currentYear - selectedYear, 'year').format('YYYY-MM-DD');

    setWeek(utils.dateFunctions.getWeek(firstMonday));
  };

  const handlePrevButton = () => {
    const lastMonday = week.prev.dates[0];
    setWeek(utils.dateFunctions.getWeek(lastMonday));
  };

  const handleNextButton = () => {
    const nextMonday = week.next.dates[0];
    setWeek(utils.dateFunctions.getWeek(nextMonday));
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs="auto">
        <Button
          disabled={(currentYear === maxOldYear) && (week.current.num === 1)}
          onClick={handlePrevButton}
          title={`Semaine ${week.prev.num}`}
        >
          <ArrowBackIosIcon />
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Select
          value={currentYear}
          onChange={handleYearSelect}
        >
          {getYears()}
        </Select>
        <Select
          value={week.current.num}
          onChange={handleWeekSelect}
        >
          {getWeeks()}
        </Select>
        <strong>{`Semaine ${week.current.num}`}</strong>
        <small>{` ${week.current.label}`}</small>
      </Grid>
      <Grid item xs="auto">
        <Button variant="outlined" onClick={handleNextButton} title={`Semaine ${week.next.num}`}>
          <ArrowForwardIosIcon />
        </Button>
      </Grid>
    </Grid>
  );
}

SelectWeek.propTypes = {
  date: PropTypes.string,
};
SelectWeek.defaultProps = {
  date: utils.dateFunctions.getDate().format('YYYY-MM-DD'),
};
export default React.memo(SelectWeek);
