/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import {
  Button, Grid, Card, CardContent, CardMedia, Box, Typography, Modal, Divider,
} from '@mui/material';
import './homePage.scss';
import Login from '../Login/Login';

/* images imports */
import functCoworking from './public/funct-coworking.svg';
import functDrag from './public/funct-drag.svg';
import functOther from './public/funct-other.svg';
import teamIcon from './public/team-icon.svg';
import encartImg from './public/encart-img.svg';
import calendarImg from './public/calendar-img.png';

function HomePage() {
  const [modal, displayModal] = useState(false);

  /** *
   * function to handle modals
   */
  const handleModal = () => {
    displayModal((stateModal) => !stateModal);
  };

  return (
    <>
      <header>
        <Box sx={{
          position: 'relative',
          textAlign: {
            xs: 'center',
          },
          backgroundImage: `url(${calendarImg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right',
          backgroundSize: {
            xs: 'cover',
            md: 'contain',
          },
          height: {
            xs: '50vh',
            md: '100vh',
          },
        }}
        >
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

          <Box sx={{
            width: {
              md: '30em',
            },
            position: 'relative',
            top: '30%',
            left: {
              md: '15%',
            },
            color: '#ff4f00',
          }}
          >
            <Typography
              variant="h1"
              sx={{
                textTransform: 'uppercase',
                fontStyle: 'italic',
                fontWeight: '600',
                fontSize: {
                  xs: '4em',
                },
              }}
            >
              O'lleks
            </Typography>
            <Divider
              variant="middle"
              sx={{
                mx: 'auto',
                width: '70%',
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
              <Login />
              <Modal
                sx={{
                  width: '90vw',
                  mx: 'auto',
                  mt: '25%',
                }}
                open={modal}
                onClose={handleModal}
              >
                <Login />
              </Modal>
            </Box>
          </Box>
        </Box>
      </header>

      <main className="main">
        <Box sx={{
          textAlign: 'center',
          px: '1em',
          mx: 'auto',
          mt: '2em',
        }}
        >
          <Grid
            container
            spacing={{
              xs: 4, sm: 2, md: 8,
            }}
            justifyContent="center"
          >
            <Grid item xs={11} sm={4} md={3}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={functCoworking}
                  alt="alt text"
                />
                <CardContent>
                  <Typography>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={11} sm={4} md={3}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={functDrag}
                  alt="alt text"
                />
                <CardContent>
                  <Typography>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={11} sm={4} md={3}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={functOther}
                  alt="alt text"
                />
                <CardContent>
                  <Typography>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{
          textAlign: 'center',
          padding: 2,
          mt: '2em',
          backgroundColor: '#bce5ff',
        }}
        >
          <Typography variant="h2">Phrase d'accroche bis</Typography>
          <Typography
            variant="subtitle1"
            mt={1}
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

        <Box sx={{
          textAlign: 'center',
          mt: '2em',
        }}
        >
          <Typography variant="h2">Notre équipe</Typography>
          <div className="team--cards">
            <div className="team--card">
              <img src={teamIcon} alt="" className="team--img" />
              <Typography mt={1}>
                Lorem Ipsum
              </Typography>
            </div>
            <div className="team--card">
              <img src={teamIcon} alt="" className="team--img" />
              <Typography mt={1}>
                Lorem Ipsum
              </Typography>
            </div>
            <div className="team--card">
              <img src={teamIcon} alt="" className="team--img" />
              <Typography mt={1}>
                Lorem Ipsum
              </Typography>
            </div>
            <div className="team--card">
              <img src={teamIcon} alt="" className="team--img" />
              <Typography mt={1}>
                Lorem Ipsum
              </Typography>
            </div>
            <div className="team--card">
              <img src={teamIcon} alt="" className="team--img" />
              <Typography mt={1}>
                Lorem Ipsum
              </Typography>
            </div>
          </div>
        </Box>
      </main>
    </>
  );
}

export default React.memo(HomePage);
