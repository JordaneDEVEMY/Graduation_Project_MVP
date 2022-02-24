/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Button } from '@mui/material';
import './homePage.scss';

/* images imports */
// import headerImg from './public/header-img.svg';
import functCoworking from './public/funct-coworking.svg';
import functDrag from './public/funct-drag.svg';
import functOther from './public/funct-other.svg';
import teamIcon from './public/team-icon.svg';

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
        <section className="main--func">
          <div className="func--content">
            <img src={functCoworking} alt="" className="func--img" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Asperiores minus fuga accusamus omnis nostrum iusto rerum sequi.
            </p>
          </div>

          <div className="func--content">
            <img src={functDrag} alt="" className="func--img" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Asperiores minus fuga accusamus omnis nostrum iusto rerum sequi.
            </p>
          </div>

          <div className="func--content">
            <img src={functOther} alt="" className="func--img" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Asperiores minus fuga accusamus omnis nostrum iusto rerum sequi.
            </p>
          </div>
        </section>

        <section className="main--encart">
          <h2 classeName="encart--title">Phrase d'accroche bis</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Odio placeat excepturi non quaerat fuga libero a incidunt corporis,
            rerum obcaecati nemo, qui molestiae cupiditate velit aliquid inventore
            sapiente harum repudiandae?
          </p>
          <img src="" alt="" className="encart--img" />
        </section>

        <section className="main--team">
          <h2 className="team--title">Notre équipe</h2>
          <div className="team--card">
            <img src={teamIcon} alt="" className="team--img" />
            <p>
              Lorem Ipsum
            </p>
          </div>

          <div className="team--card">
            <img src={teamIcon} alt="" className="team--img" />
            <p>
              Lorem Ipsum
            </p>
          </div>

          <div className="team--card">
            <img src={teamIcon} alt="" className="team--img" />
            <p>
              Lorem Ipsum
            </p>
          </div>

          <div className="team--card">
            <img src={teamIcon} alt="" className="team--img" />
            <p>
              Lorem Ipsum
            </p>
          </div>

          <div className="team--card">
            <img src={teamIcon} alt="" className="team--img" />
            <p>
              Lorem Ipsum
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default React.memo(HomePage);
