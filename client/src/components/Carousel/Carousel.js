/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box, Button, MobileStepper,
} from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useTheme } from '@mui/material/styles';
import Card from '../Card/Card';

import './carousel.scss';

function Carousel({
  assignments,
}) {
  const isMobile = true;
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = assignments.length;

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
        {assignments.map((assignment, index) => (
          <div key={assignment.id}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                key={assignment.id}
                component="div"
                sx={{
                  display: 'block',
                  overflow: 'hidden',
                  width: '100%',
                }}
              >
                <Card key={assignment.id} isMobile={isMobile} {...assignment} />
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
  assignments: PropTypes.array.isRequired,
};
Carousel.defaultProps = {
};
export default React.memo(Carousel);
