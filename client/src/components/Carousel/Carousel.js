/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import MobileStepper from '@mui/material/MobileStepper';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import Card from '../Card/Card';

import './carousel.scss';

function Carousel() {
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
    <div className="carousel">
      {!leftDisabled && (
      <ArrowCircleLeftIcon sx={{ fontSize: '3rem' }} className="arrow-left" onClick={prevCard} />
      )}
      {!rightDisabled && (
      <ArrowCircleRightIcon sx={{ fontSize: '3rem' }} className="arrow-right" onClick={nextCard} />
      )}
      {cards.map((card, index) => (
        <div className={index === current ? 'card active' : 'card'} key={index}>
          {index === current && (
          <Card currentCard={current} />
          )}
        </div>
      ))}
      <MobileStepper
        variant="dots"
        steps={length}
        position="static"
        activeStep={current}
        sx={{ maxWidth: 400 }}
      />
    </div>
  );
}

Carousel.propTypes = {
};
Carousel.defaultProps = {
};
export default React.memo(Carousel);
