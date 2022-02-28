/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  Box, Typography,
} from '@mui/material';
import './legals.scss';

/* image import */
import legals from '../../Assets/images/legals.png';

function Legals() {
  return (
    <>
      <Box sx={{
        position: 'relative',
        backgroundImage: `url(${legals})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
        backgroundSize: 'contain',
        height: '50vh',
      }}
      >
        <Box sx={{
          position: 'relative',
          top: '40%',
          color: '#ff4f00',
          mx: 'auto',
        }}
        >
          <Typography
            variant="h1"
            sx={{
              textTransform: 'uppercase',
              fontStyle: 'italic',
              fontWeight: '600',
              fontSize: '4em',
            }}
          >
            Mentions légales
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          p: '2em',
          textAlign: 'left',
        }}
      >
        <Typography
          variant="h2"
          className="section--title"
        >
          1 - Édition du site
        </Typography>

        <Typography
          variant="body1"
          className="section--text"
        >
          En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site internet
          {' '}
          <strong>https://olleks.com</strong>
          {' '}
          l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi:
        </Typography>
        <Typography
          variant="body1"
          className="section--text"
        >
          <strong>Propriétaires du site :</strong>
          {' '}
          DEVEMY Jordane, CHRITA Hicham, TASSEL Pascal, GUILLEMOT Ben, LEBRETON Mathieu

          <ul>
            <li>olleks@oclock.io</li>
            <li>+33 6 01 02 03 04</li>
            <li>1, Blvd de mon salon 77852 Du coin France.</li>
          </ul>
        </Typography>

        <Typography
          variant="h2"
          className="section--title"
        >
          2 - Propriété intellectuelle et contrefaçons.
        </Typography>

        <Typography
          variant="body1"
          className="section--text"
        >
          DEVEMY Jordane, CHRITA Hicham, TASSEL Pascal, GUILLEMOT Ben, LEBRETON Mathieu sont propriétaires des droits de propriété intellectuelle et détient les droits d’usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, architecture, icônes et sons.
        </Typography>
        <Typography
          variant="body1"
          className="section--text"
        >
          Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de DEVEMY Jordane, CHRITA Hicham, TASSEL Pascal, GUILLEMOT Ben, LEBRETON Mathieu.
        </Typography>
        <Typography
          variant="body1"
          className="section--text"
        >
          Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
        </Typography>

      </Box>
    </>
  );
}

export default React.memo(Legals);
