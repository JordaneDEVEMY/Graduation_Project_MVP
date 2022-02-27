import React, { useState } from 'react';
import Button from '@mui/material/Button';
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
      <Grid item xs>
        <Button variant="outlined" onClick={handlePrevButton}>
          <ArrowBackIosIcon />
        </Button>
      </Grid>
      <Grid item xs={6}>
        <strong>{`Semaine ${week.current.num}`}</strong>
        {` ${week.current.dates[0]} => ${week.current.dates[6]}`}
      </Grid>
      <Grid item xs>
        <Button variant="outlined" onClick={handleNextButton}>
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
