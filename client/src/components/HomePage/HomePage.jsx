/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  Button, Grid, Card, CardContent, CardMedia, Box, Typography,
} from '@mui/material';
import './homePage.scss';

/* images imports */
// import headerImg from './public/header-img.svg';
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
          <Button variant="contained" size="medium">
            Se connecter
          </Button>
        </a>

        <h1 className="header--title">O'lleks</h1>
      </header>

      <main className="main">
        <Box className="main--func">
          <Grid
            container
            spacing={{
              xs: 4, sm: 4, md: 8, lg: 12,
            }}
            justifyContent="center"
            className="func-grid"
          >
            <Grid item xs={9} sm={4}>
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

            <Grid item xs={9} sm={4}>
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

            <Grid item xs={9} sm={4}>
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

        <Box className="main--encart">
          <Typography classeName="encart--title">Phrase d'accroche bis</Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Odio placeat excepturi non quaerat fuga libero a incidunt corporis,
            rerum obcaecati nemo, qui molestiae cupiditate velit aliquid inventore
            sapiente harum repudiandae?
          </Typography>
          <img src={encartImg} alt="" className="encart--img" />
        </Box>

        <Box className="main--team">
          <Typography className="team--title">Notre équipe</Typography>
          <div className="team--cards">
            <div className="team--card">
              <img src={teamIcon} alt="" className="team--img" />
              <Typography>
                Lorem Ipsum
              </Typography>
            </div>
            <div className="team--card">
              <img src={teamIcon} alt="" className="team--img" />
              <Typography>
                Lorem Ipsum
              </Typography>
            </div>
            <div className="team--card">
              <img src={teamIcon} alt="" className="team--img" />
              <Typography>
                Lorem Ipsum
              </Typography>
            </div>
            <div className="team--card">
              <img src={teamIcon} alt="" className="team--img" />
              <Typography>
                Lorem Ipsum
              </Typography>
            </div>
            <div className="team--card">
              <img src={teamIcon} alt="" className="team--img" />
              <Typography>
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
