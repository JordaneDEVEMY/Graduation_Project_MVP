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

const sites = [
  {
    id: 3,
    name: 'Dapibus Gravida LLP',
    address: 'P.O. Box 921, 5917 Feugiat St.',
    zip_code: 31080,
    manager_name: 'Griffin Bakhuizen',
    starting_date: '2021-03-05',
    ending_date: '2021-03-07',
    company: {
      id: 42,
      name: 'Tincidunt Orci Quis Foundation',
    },
    employees: [
      {
        id: 1,
        firstname: 'John',
        lastname: 'Doe',
        email: 'string@alo.fr',
        avatar: 'string',
        role_application: 'string',
        color: '#f44336',
      },
      {
        id: 2,
        firstname: 'Bernard',
        lastname: 'De La Villardière',
        email: 'bernard@free.fr',
        avatar: 'string',
        role_application: 'string',
        color: '#2196f3',
      },
      {
        id: 3,
        firstname: 'Bernard',
        lastname: 'De La Villardière',
        email: 'bernard@free.fr',
        avatar: 'string',
        role_application: 'string',
        color: '#4caf50',
      },
      {
        id: 4,
        firstname: 'Bernard',
        lastname: 'De La Villardière',
        email: 'bernard@free.fr',
        avatar: 'string',
        role_application: 'string',
        color: '#ffeb3b',
      },
      {
        id: 5,
        firstname: 'Bernard',
        lastname: 'De La Villardière',
        email: 'bernard@free.fr',
        avatar: 'string',
        role_application: 'string',
        color: '#ff9800',
      },
      {
        id: 5,
        firstname: 'Bernard',
        lastname: 'De La Villardière',
        email: 'bernard@free.fr',
        avatar: 'string',
        role_application: 'string',
        color: '#ff9800',
      },
    ],
  },
];

function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = sites.length;

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
        {sites.map((site, index) => (
          <div key={site.id}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                key={site.id}
                component="div"
                sx={{
                  display: 'block',
                  overflow: 'hidden',
                  width: '100%',
                }}
              >
                <Card key={site.id} site={site} />
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
