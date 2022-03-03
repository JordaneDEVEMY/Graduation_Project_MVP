/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  Grid, Box, Typography, useMediaQuery,
} from '@mui/material';
import './homePage.scss';
import { useTheme } from '@mui/material/styles';

/* images imports */
import funct1 from '../../Assets/images/DropImgSvg.svg';
import funct2 from '../../Assets/images/EventImgSvg.svg';
import funct3 from '../../Assets/images/Calendar-bro.svg';
import teamIcon from '../../Assets/images/team-icon.svg';
import encartImg from '../../Assets/images/Design team-amico.svg';
import calendarImg from '../../Assets/images/CalendarImgSvg.svg';
import LoginContainer from '../../containers/LoginContainer';

function HomePage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          backgroundImage: `url(${calendarImg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: {
            xs: 'center top',
            md: '42vw center',
          },
          backgroundSize: {
            xs: '60vw auto',
            md: 'contain',
          },
          height: {
            md: 600,
          },
          backgroundColor: theme.palette.common,
        }}
      >
        <Box sx={{
          position: 'relative',
          textAlign: 'center',
          width: {
            xs: '100%',
            md: '50vw',
          },
          [theme.breakpoints.down('md')]: {
            marginTop: '55vw',
            padding: theme.spacing(3),
          },
        }}
        >
          {/*
          Title and subtitle, with the connect zone, on display only on large screen.
          */}
          <Typography
            variant="p"
            sx={{
              fontSize: theme.typography.h1.fontSize,
              color: theme.palette.primary.main,
            }}
          >
            O'lleks
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: theme.palette.text.primary,
            }}
          >
            Your new planning-handling tool
          </Typography>

          {/*
          Blocks the view of the component on small screens
          */}
          {!isMobile
          && (
          <Box
            sx={{
              margin: theme.spacing(3, 'auto'),
              width: '50vw',
              maxWidth: 400,
              display: {
                xs: 'none',
                sm: 'block',
              },
            }}
          >
            <LoginContainer />
          </Box>
          )}
        </Box>
      </Box>

      {/*
      Functionnalities global block
      */}
      <Grid
        container
        spacing={{ sm: 4, lg: 12 }}
        p={4}
        sx={{
          textAlign: 'center',
          mt: '2em',
          backgroundColor: theme.palette.background.component,
          color: theme.palette.text.primary,
        }}
      >
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              height: {
                xs: '50vw',
                sm: '25vw',
              },
              width: {
                xs: '50vw',
                sm: '25vw',
              },
              maxWidth: 350,
              maxHeight: 350,
              backgroundColor: theme.palette.background.default,
              backgroundImage: `url(${funct1})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: '60%',
              borderRadius: '50%',
              margin: 'auto',
            }}
          />
          <Typography
            variant="h3"
            sx={{
              marginTop: theme.spacing(2),
              fontSize: {
                xs: theme.typography.h4.fontSize,
              },
            }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              height: {
                xs: '50vw',
                sm: '25vw',
              },
              width: {
                xs: '50vw',
                sm: '25vw',
              },
              maxWidth: 350,
              maxHeight: 350,
              backgroundColor: theme.palette.background.default,
              backgroundImage: `url(${funct2})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: '60%',
              borderRadius: '50%',
              margin: 'auto',
            }}
          />
          <Typography
            variant="h3"
            sx={{
              marginTop: theme.spacing(2),
              fontSize: {
                xs: theme.typography.h4.fontSize,
              },
            }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              height: {
                xs: '50vw',
                sm: '25vw',
              },
              width: {
                xs: '50vw',
                sm: '25vw',
              },
              maxWidth: 350,
              maxHeight: 350,
              backgroundColor: theme.palette.background.default,
              backgroundImage: `url(${funct3})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: '60%',
              borderRadius: '50%',
              margin: 'auto',
            }}
          />
          <Typography
            variant="h3"
            sx={{
              marginTop: theme.spacing(2),
              fontSize: {
                xs: theme.typography.h4.fontSize,
              },
            }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </Typography>
        </Grid>
      </Grid>

      {/*
      2nd functionnality global block
      */}
      <Box
        component="section"
        sx={{
          textAlign: 'center',
          padding: theme.spacing(4),
          mt: theme.spacing(4),
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: {
              xs: '2.5em',
              md: theme.typography.h2.fontSize,
            },
          }}
        >
          Phrase d'accroche bis

        </Typography>
        <Typography
          variant="subtitle1"
          mt={theme.spacing(1)}
          maxWidth={900}
          sx={{ mx: 'auto' }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Odio placeat excepturi non quaerat fuga libero a incidunt corporis,
          rerum obcaecati nemo, qui molestiae cupiditate velit aliquid inventore
          sapiente harum repudiandae?
        </Typography>
        <img src={encartImg} alt="" className="encart--img" />
      </Box>

      {/*
      Team global block
      */}
      <Box
        component="section"
        sx={{
          textAlign: 'center',
          mt: theme.spacing(4),
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: theme.palette.primary.main,
          }}
        >
          Notre équipe

        </Typography>

        {/*
        Individual team items
        */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            maxWidth: '900px',
            mx: 'auto',
            textAlign: 'center',
            color: theme.palette.text.primary,
          }}
        >
          <Box
            sx={{
              margin: '1em',
              width: '7em',
            }}
          >
            <img src={teamIcon} alt="" className="team--img" />
            <Typography mt={1}>
              Lorem Ipsum
            </Typography>
          </Box>

          <Box
            sx={{
              margin: '1em',
              width: '7em',
            }}
          >
            <img src={teamIcon} alt="" className="team--img" />
            <Typography mt={1}>
              Lorem Ipsum
            </Typography>
          </Box>

          <Box
            sx={{
              margin: '1em',
              width: '7em',
            }}
          >
            <img src={teamIcon} alt="" className="team--img" />
            <Typography mt={1}>
              Lorem Ipsum
            </Typography>
          </Box>

          <Box
            sx={{
              margin: '1em',
              width: '7em',
            }}
          >
            <img src={teamIcon} alt="" className="team--img" />
            <Typography mt={1}>
              Lorem Ipsum
            </Typography>
          </Box>

          <Box
            sx={{
              margin: '1em',
              width: '7em',
            }}
          >
            <img src={teamIcon} alt="" className="team--img" />
            <Typography mt={1}>
              Lorem Ipsum
            </Typography>
          </Box>

        </Box>
      </Box>
    </>
  );
}

HomePage.propTypes = {
};

export default React.memo(HomePage);
