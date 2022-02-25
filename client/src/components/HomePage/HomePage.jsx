/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  Button, Grid, Card, CardContent, CardMedia, Box, Typography, Divider,
} from '@mui/material';
import './homePage.scss';
import Login from '../Login/Login';

/* images imports */
import functCoworking from './public/funct-coworking.svg';
import functDrag from './public/funct-drag.svg';
import functOther from './public/funct-other.svg';
import teamIcon from './public/team-icon.svg';
import encartImg from './public/encart-img.svg';

function HomePage() {
  return (
    <>
      <header className="header">
        <a href="/" className="header--link">
          <Button
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
        </a>

        <Box
          className="header--connect"
          sx={{
            width: '30em',
            padding: '1em',
            display: {
              xs: 'none',
              sm: 'none',
              md: 'block',
            },
          }}
        >
          <Typography
            className="header--title"
            variant="h1"
            sx={{
              textTransform: 'uppercase',
              fontStyle: 'italic',
            }}
          >
            O'lleks
          </Typography>
          <Divider />
          <Typography
            className="header--title"
            variant="subtitle1"
            sx={{
              fontSize: '2em',
              fontStyle: 'italic',
            }}
          >
            Your new planning-handling tool
          </Typography>
          <Login />
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
