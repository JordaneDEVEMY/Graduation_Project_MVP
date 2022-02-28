/* eslint-disable max-len */
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Replay from '@mui/icons-material/Replay';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import utils from '../../utils';
import './selectweek.scss';
import dateFunctions from '../../utils/dateFunctions';

function SelectWeek({
  date,
}) {
  const [week, setWeek] = useState(utils.dateFunctions.getWeek(date));
  const currentYear = utils.dateFunctions.getDate(week.current.dates[0]).year();
  const maxOldYear = new Date().getFullYear() - 10;

  console.log(week);

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
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      gutter={2}
    >
      <Box>
        <Button
          disabled={(currentYear === maxOldYear) && (week.current.num === 1)}
          onClick={handlePrevButton}
          title={`Semaine ${week.prev.num}`}
        >
          <ArrowBackIosIcon />
        </Button>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="nowrap"
        spacing={2}
      >
        <Box>
          <Button
            onClick={handleRefreshButton}
            title="Semaine en cours"
            disabled={week.current.num === dateFunctions.getDate().isoWeek()}
          >
            <Replay />
          </Button>
        </Box>
        <Box>
          <Select
            size="small"
            value={currentYear}
            onChange={handleYearSelect}
          >
            {getYears()}
          </Select>
        </Box>
        <Box>
          <Select
            size="small"
            value={week.current.num}
            onChange={handleWeekSelect}
          >
            {getWeeks()}
          </Select>
        </Box>
        <Box>
          <span>{`${week.current.label}`}</span>
        </Box>
      </Box>
      <Box>
        <Button variant="outlined" onClick={handleNextButton} title={`Semaine ${week.next.num}`}>
          <ArrowForwardIosIcon />
        </Button>
      </Box>
    </Box>
  );
}

SelectWeek.propTypes = {
  date: PropTypes.string,
};
SelectWeek.defaultProps = {
  date: utils.dateFunctions.getDate().format('YYYY-MM-DD'),
};
export default React.memo(SelectWeek);
