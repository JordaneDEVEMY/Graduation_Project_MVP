/* eslint-disable max-len */
import React, { useState } from 'react';
import {
  Grid, Button, IconButton, MenuItem, Select,
} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import PropTypes from 'prop-types';
// import { useTheme } from '@mui/material/styles';
import utils from '../../utils';
import './selectweek.scss';
import dateFunctions from '../../utils/dateFunctions';

function SelectWeek({
  isAdmin,
  date,
}) {
  // const theme = useTheme();
  const [week, setWeek] = useState(utils.dateFunctions.getWeek(date));
  const currentYear = utils.dateFunctions.getDate(week.current.dates[0]).year();
  const maxOldYear = new Date().getFullYear() - 10;
  const disabledPrev = isAdmin
    ? (currentYear === maxOldYear) && (week.current.num === 1)
    : (week.current.num !== dateFunctions.getDate().isoWeek() + 1);
  const disabledNext = isAdmin
    ? false
    : (week.current.num === dateFunctions.getDate().isoWeek() + 1);

  console.log('selectWeek', week);

  /**
   * Get last ten years
   * @returns {array} List of MenuItem components
   */
  const getYears = () => {
    let y = new Date().getFullYear();
    const years = [];
    while (y >= maxOldYear) {
      years.push(<MenuItem key={y} value={y}>{y}</MenuItem>);
      y -= 1;
    }

    return years;
  };

  /**
   * Get weeks of select year
   * @returns {array} List of MenuItem components
   */
  const getWeeks = () => {
    const nbWeeks = utils.dateFunctions.getDate(`${currentYear}-01-01`).isoWeeksInYear();
    const weeks = [];
    let i = 1;
    while (i <= nbWeeks) {
      const period = utils.dateFunctions.getWeekPeriod(currentYear, i);
      weeks.push(<MenuItem key={i} value={i}>{`S${i < 10 ? '0' : ''}${i} - ${period}`}</MenuItem>);
      i += 1;
    }

    return isAdmin ? weeks : weeks.slice(week.current.num - 1, week.current.num + 1);
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

  const handleNextButton = () => {
    const nextMonday = week.next.dates[0];
    setWeek(utils.dateFunctions.getWeek(nextMonday));
  };

  const handlePrevButton = () => {
    const lastMonday = week.prev.dates[0];
    setWeek(utils.dateFunctions.getWeek(lastMonday));
  };

  const handleRefreshButton = () => {
    setWeek(utils.dateFunctions.getWeek(date));
  };

  return (
    <Grid
      container
      spacing={1}
    >
      {isAdmin && (
        <Grid item xs="auto">
          <Button
            variant="outlined"
            size="small"
            onClick={handleRefreshButton}
            title="Semaine en cours"
            disabled={week.current.num === dateFunctions.getDate().isoWeek()}
          >
            Auj.
          </Button>
        </Grid>
      )}
      <Grid item xs="auto" sx={{ display: { xs: 'none', sm: 'block' } }}>
        <IconButton
          disabled={disabledPrev}
          onClick={handlePrevButton}
          title={`Semaine ${week.prev.num}`}
        >
          <KeyboardArrowLeftIcon />
        </IconButton>
      </Grid>
      {isAdmin && (
        <Grid item xs="auto">
          <Select
            size="small"
            value={currentYear}
            onChange={handleYearSelect}
          >
            {getYears()}
          </Select>
        </Grid>
      )}
      <Grid item xs>
        <Select
          size="small"
          sx={{ width: '15rem' }}
          value={week.current.num}
          onChange={handleWeekSelect}
        >
          {getWeeks()}
        </Select>
      </Grid>
      <Grid item xs="auto" sx={{ display: { xs: 'none', sm: 'block' } }}>
        <IconButton
          onClick={handleNextButton}
          title={`Semaine ${week.next.num}`}
          disabled={disabledNext}
        >
          <KeyboardArrowRightIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}

SelectWeek.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
  date: PropTypes.string,
};
SelectWeek.defaultProps = {
  date: utils.dateFunctions.getDate().format('YYYY-MM-DD'),
};
export default React.memo(SelectWeek);
