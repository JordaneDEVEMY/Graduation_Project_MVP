/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import {
  Box, Button, MobileStepper,
} from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useTheme } from '@mui/material/styles';
import Card from '../Card/Card';

import './carousel.scss';

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    employees: [
      {
        id: 1,
        name: 'Jean Bon',
        color: 'red',
      },
      {
        id: 2,
        name: 'Aline Héa',
        color: 'blue',
      },
      {
        id: 3,
        name: 'Alex Térieur',
        color: 'red',
      },
      {
        id: 4,
        name: 'Alain Térieur',
        color: 'yellow',
      },
    ],
  },
  {
    label: 'Bird',
    employees: [
      {
        id: 1,
        name: 'Jean Bon',
        color: 'red',
      },
      {
        id: 2,
        name: 'Aline Héa',
        color: 'green',
      },
      {
        id: 3,
        name: 'Alex Térieur',
        color: 'yellow',
      },
      {
        id: 4,
        name: 'Alain Térieur',
        color: 'blue',
      },
    ],
  },
  {
    label: 'Bali, Indonesia',
    employees: [
      {
        id: 1,
        name: 'Jean Bon',
        color: 'yellow',
      },
      {
        id: 2,
        name: 'Aline Héa',
        color: 'red',
      },
      {
        id: 3,
        name: 'Alex Térieur',
        color: 'orange',
      },
      {
        id: 4,
        name: 'Alain Térieur',
        color: 'blue',
      },
    ],
  },
  {
    label: 'Goč, Serbia',
    employees: [
      {
        id: 1,
        name: 'Jean Bon',
        color: 'blue',
      },
      {
        id: 2,
        name: 'Aline Héa',
        color: 'gray',
      },
      {
        id: 3,
        name: 'Alex Térieur',
        color: 'yellow',
      },
      {
        id: 4,
        name: 'Alain Térieur',
        color: 'blue',
      },
    ],
  },
];

function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        margin: '0 auto',
        maxWidth: 332,
      }}
    >
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((data, index) => (
          <div key={data.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="div"
                sx={{
                  display: 'block',
                  overflow: 'hidden',
                  width: '100%',
                }}
              >
                <Card data={data} />
              </Box>
            ) : null}
          </div>
        ))}
      </SwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={(
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Suiv.
            <KeyboardArrowRight />
          </Button>
        )}
        backButton={(
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Préc.
          </Button>
        )}
      />
    </Box>
  );
}

Carousel.propTypes = {
};
Carousel.defaultProps = {
};
export default React.memo(Carousel);
