/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  Box, Typography, Divider, useTheme,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import './legals.scss';

/* import imgs */
import legals from '../../Assets/images/lawSvg.svg';

function Legals() {
  const theme = useTheme();

  return (
    <Box sx={{
      maxWidth: '70vw',
      mx: 'auto',
      my: theme.spacing(4),
      padding: theme.spacing(4),
      backgroundColor: theme.palette.background.component,
      borderRadius: '10px',
      display: 'flex',
      flexDirection: 'column',
      color: theme.palette.text.primary,
    }}
    >
      <Typography
        variant="h1"
        sx={{
          textTransform: 'uppercase',
          fontStyle: 'italic',
          fontWeight: theme.typography.fontWeightBold,
          fontSize: '3em',
          textAlign: 'center',
        }}
      >
        Mentions légales
      </Typography>
      <Divider
        sx={{
          color: theme.palette.divider,
        }}
      />
      <img
        src={legals}
        alt=""
        className="legals--img"
      />
      <Typography
        sx={{
          mt: theme.spacing(2),
          fontSize: '1.5em',
        }}
      >
        Édition du site
      </Typography>

      <Typography>
        En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site internet https://olleks.com l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
      </Typography>

      <Typography
        sx={{
          mt: theme.spacing(2),
          fontWeight: '600',
        }}
      >
        Propriétaires du site :
      </Typography>

      <Typography>
        Devémy Jordane, Chrita Hicham, Guillemot Ben, Tassel Pascal, Lebreton Mathieu
      </Typography>

      <Typography
        sx={{
          mt: theme.spacing(2),
          fontWeight: '600',
        }}
      >
        Contact :
      </Typography>

      <Typography>
        olleks@oclock.com
      </Typography>

      <Typography
        sx={{
          mt: theme.spacing(2),
          fontSize: '1.5em',
        }}
      >
        Limitations de responsabilité.
      </Typography>

      <Typography>
        L'équipe O'lleks ne pourra être tenue pour responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site https://olleks.com.
      </Typography>

      <Typography>
        L'équipe O'lleks décline toute responsabilité quant à l’utilisation qui pourrait être faite des informations et contenus présents sur https://olleks.com.
      </Typography>

      <Typography>
        L'équipe O'lleks s’engage à sécuriser au mieux le site https://olleks.com, cependant sa responsabilité ne pourra être mise en cause si des données indésirables sont importées et installées sur son site à son insu.
      </Typography>

      <Typography>
        Des espaces interactifs (espace contact ou commentaires) sont à la disposition des utilisateurs. L'équipe O'lleks se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données.
      </Typography>

      <Typography
        sx={{
          mt: theme.spacing(2),
          fontSize: '1.5em',
        }}
      >
        CNIL et gestion des données personnelles.
      </Typography>

      <Typography>
        Conformément aux dispositions de la loi 78-17 du 6 janvier 1978 modifiée, l’utilisateur du site https://olleks.com dispose d’un droit d’accès, de modification et de suppression des informations collectées.
      </Typography>

      <Typography
        sx={{
          mt: theme.spacing(2),
          fontSize: '1.5em',
        }}
      >
        Liens hypertextes et cookies
      </Typography>

      <Typography>
        La navigation sur le site https://olleks.com est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur.
      </Typography>

      <Typography>
        Un "cookie" est un fichier de petite taille qui enregistre des informations relatives à la navigation d’un utilisateur sur un site. Les données ainsi obtenues permettent d'obtenir des mesures de fréquentation, par exemple.
      </Typography>

      <Typography>
        Vous avez la possibilité d’accepter ou de refuser les cookies en modifiant les paramètres de votre navigateur. Aucun cookie ne sera déposé sans votre consentement.
      </Typography>

      <Typography>
        Les cookies sont enregistrés pour une durée maximale de 1 mois.
      </Typography>

      <Typography
        sx={{
          mt: theme.spacing(2),
          fontSize: '1.5em',
        }}
      >
        Droit applicable et attribution de juridiction.
      </Typography>

      <Typography>
        Tout litige en relation avec l’utilisation du site https://olleks.com est soumis au droit français.
      </Typography>

    </Box>
  );
}

export default React.memo(Legals);
