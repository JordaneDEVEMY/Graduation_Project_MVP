/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button, Card, CardContent, CardMedia, Box, Typography, Modal, Divider,
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

function HomePage({
  isLogged,
  isAdmin,
  userId,
}) {
  const theme = useTheme();
  const [modal, displayModal] = useState(false);

  /** *
   * function to handle modals
   */
  const handleModal = () => {
    displayModal((stateModal) => !stateModal);
  };

  if (isLogged) {
    if (isAdmin) {
      return <Navigate to="/admins/planning" replace />;
    }

    return <Navigate to={`/users/${userId}/planning`} replace />;
  }

  return (
    <>
      <header>
        {/*
        Header global block
        */}
        <Box sx={{
          position: 'relative',
          textAlign: {
            xs: 'center',
          },
          backgroundImage: `url(${calendarImg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: {
            xs: 'center',
            md: 'right',
          },
          backgroundSize: {
            xs: 'cover',
            md: 'contain',
          },
          height: {
            xs: '50vh',
            md: '100vh',
          },
          backgroundColor: theme.palette.common,
        }}
        >
          {/*
          Connect button (on display only on small screens),
          Application logo will be there.
          */}
          <Box sx={{
            textAlign: 'right',
          }}
          >
            <Button
              onClick={handleModal}
              variant="contained"
              size="medium"
              sx={{
                margin: '1rem',
                display: {
                  md: 'none',
                },
              }}
            >
              Se connecter
            </Button>
          </Box>

          {/*
          Title and subtitle, with the connect zone, on display only on large screen.
          */}
          <Box sx={{
            width: {
              md: '30em',
            },
            position: 'relative',
            top: theme.spacing(30),
            left: {
              md: theme.spacing(30),
            },
            color: theme.palette.primary.main,
          }}
          >
            <Typography
              variant="h1"
              sx={{
                textTransform: 'uppercase',
                fontStyle: 'italic',
                fontWeight: theme.typography.fontWeightBold,
                fontSize: {
                  xs: '4em',
                  md: theme.typography.h1.fontSize,
                },
              }}
            >
              O'lleks
            </Typography>
            <Divider
              variant="middle"
              sx={{
                color: theme.palette.divider,
                mx: 'auto',
                width: '80%',
              }}
            />
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: {
                  xs: '1.5em',
                },
              }}
            >
              Your new planning-handling tool
            </Typography>

            {/*
            Blocks the view of the component on small screens
            */}

            <Box
              sx={{
                width: '30em',
                display: {
                  xs: 'none',
                  sm: 'none',
                  md: 'block',
                },
              }}
            >
              <LoginContainer />

              {/*
              Connection modal : only appears when click the connect button
              */}
              <Modal
                sx={{
                  width: '90vw',
                  mx: 'auto',
                  mt: '25%',
                }}
                open={modal}
                onClose={handleModal}
              >
                <LoginContainer />
              </Modal>
            </Box>
          </Box>
        </Box>
      </header>

      <Box
        component="main"
        sx={{
          backgroundColor: theme.palette.common,
        }}
      >
        {/*
        Functionnalities global block
        */}
        <Box
          component="section"
          sx={{
            textAlign: 'center',
            mx: 'auto',
            mt: '2em',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
          }}
        >
          <Card sx={{
            minWidth: '20em',
            maxWidth: '10%',
            mb: '1em',
          }}
          >
            <CardMedia
              component="img"
              height="250"
              image={funct1}
              alt="alt text"
            />
            <CardContent>
              <Typography>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{
            minWidth: '20em',
            maxWidth: '10%',
            mb: '1em',
          }}
          >
            <CardMedia
              component="img"
              height="250"
              image={funct2}
              alt="alt text"
            />
            <CardContent>
              <Typography>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{
            minWidth: '20em',
            maxWidth: '10%',
            mb: '1em',
          }}
          >
            <CardMedia
              component="img"
              height="250"
              image={funct3}
              alt="alt text"
            />
            <CardContent>
              <Typography>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </Typography>
            </CardContent>
          </Card>
        </Box>

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
      </Box>
    </>
  );
}

HomePage.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  userId: PropTypes.number.isRequired,
};

export default React.memo(HomePage);
