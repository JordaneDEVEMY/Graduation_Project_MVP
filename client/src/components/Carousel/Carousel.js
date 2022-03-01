/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { MobileStepper, Box } from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { useTheme } from '@mui/material/styles';
import Card from '../Card/Card';

import './carousel.scss';

function Carousel() {
  const theme = useTheme();

  const [current, setCurrent] = useState(0);
  const [rightDisabled, setRightDisabled] = useState(false);
  const [leftDisabled, setLeftDisabled] = useState(true);

  const cards = [1, 2, 3, 4, 5];
  const { length } = cards;

  useEffect(() => {
    if (current === 0) {
      setLeftDisabled(true);
    }
    if (current === length - 1) {
      setRightDisabled(true);
    }
  }, [current]);

  const nextCard = () => {
    if (!rightDisabled) {
      setCurrent(current + 1);
      setLeftDisabled(false);
    }
  };

  const prevCard = () => {
    if (!leftDisabled) {
      setCurrent(current - 1);
      setRightDisabled(false);
    }
  };

  if (!Array.isArray(cards) || cards.length <= 0) {
    return null;
  }

  return (
    <Box
      component="div"
      className="carousel"
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {!leftDisabled && (
      <ArrowCircleLeftIcon
        sx={{
          color: theme.palette.grey[500],
          fontSize: '5rem',
          position: 'absolute',
          top: '50%',
          left: '2px',
          cursor: 'pointer',
        }}
        onClick={prevCard}
      />
      )}
      {!rightDisabled && (
      <ArrowCircleRightIcon
        sx={{
          color: theme.palette.grey[500],
          fontSize: '5rem',
          position: 'absolute',
          top: '50%',
          right: '2px',
          cursor: 'pointer',
        }}
        onClick={nextCard}
      />
      )}
      {cards.map((card, index) => (
        <Box
          component="div"
          className={index === current ? 'card active' : 'card'}
          key={index}
        >
          {index === current && (
          <Card currentCard={current} />
          )}
        </Box>
      ))}
      <MobileStepper
        variant="dots"
        steps={length}
        position="static"
        activeStep={current}
        sx={{ maxWidth: 400 }}
      />
    </Box>
  );
}

Carousel.propTypes = {
};
Carousel.defaultProps = {
};
export default React.memo(Carousel);
