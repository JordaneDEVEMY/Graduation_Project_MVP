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
            xs: 'center',
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
          <Typography variant="h1">
            O'lleks
          </Typography>
          <Typography variant="h2">
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
        }}
      >
        {/*
        Functionnalities global block
        */}
        <Grid
          container
          columnSpacing={{
            xs: 2,
            md: 4,
            lg: 16,
          }}
          sx={{
            textAlign: 'center',
            mt: '2em',
            px: {
              lg: theme.spacing(16),
            },
          }}
        >
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                height: 250,
                width: 250,
                backgroundColor: theme.palette.background.default,
                backgroundImage: `url(${funct1})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: '60%',
                borderRadius: '50%',
                border: 1,
                borderColor: theme.palette.divider,
                mx: 'auto',
                marginBottom: theme.spacing(2),
              }}
            />
            <Typography
              variant="h3"
              component="span"
              sx={{
                marginTop: theme.spacing(2),
              }}
            >
              Ipsum dolor sit, adipisicing amet consectetur
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                height: 250,
                width: 250,
                backgroundColor: theme.palette.background.default,
                backgroundImage: `url(${funct2})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: '60%',
                borderRadius: '50%',
                border: 1,
                borderColor: theme.palette.divider,
                mx: 'auto',
                marginBottom: theme.spacing(2),
              }}
            />
            <Typography
              variant="h3"
              component="span"
              sx={{
                marginTop: theme.spacing(2),
              }}
            >
              Lorem ipsum dolor sit amet consectetur
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                height: 250,
                width: 250,
                backgroundColor: theme.palette.background.default,
                backgroundImage: `url(${funct3})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: '60%',
                borderRadius: '50%',
                border: 1,
                borderColor: theme.palette.divider,
                mx: 'auto',
                marginBottom: theme.spacing(2),
              }}
            />
            <Typography
              variant="h3"
              component="span"
              sx={{
                marginTop: theme.spacing(2),
              }}
            >
              Lorem ipsum met consectetur adipisicing elit
            </Typography>
          </Grid>
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
              color: theme.palette.background.default,
              marginTop: theme.spacing(2),
            }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </Typography>
          <Box
            sx={{ mx: 'auto', maxWidth: '50rem' }}
          >
            <Typography
              component="p"
              variant="h3"
              sx={{
                color: theme.palette.text.secondary,
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit, ipsum dolor sit.
              Odio placeat excepturi non quaerat fuga libero.
            </Typography>
            <img src={encartImg} alt="" className="encart--img" />
          </Box>
        </Box>
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
          <Typography component="p" variant="h2">
            L'équipe
          </Typography>


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
