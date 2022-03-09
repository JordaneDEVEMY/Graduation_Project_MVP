/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unescaped-entities */
import React
  from 'react';
import { PropTypes } from 'prop-types';
import {
  Avatar, Box, Typography, Divider,
} from '@mui/material';

function ProfilPage({
  user,
}) {
  console.log(user);

  return (
    <Box sx={{ border: '1px solid green' }}>
      <Avatar
        alt={`${user.firstname} ${user.lastname}`}
        src={user.avatar}
        sx={{
          width: 80, height: 80, mx: 'auto',
        }}
      />
      <Box component="span" sx={{ textAlign: 'center' }}>
        <Typography variant="h1">{`${user.firstname} ${user.lastname}`}</Typography>
      </Box>
      <Divider />
      <Box>
        <Typography>
          Poste occupé : {user.label}
        </Typography>
        <Typography>
          Numéro de téléphone fixe : {user.phoneNumber}
        </Typography>
        <Typography>
          Numéro de téléphone portable : {user.mobileNumber}
        </Typography>
      </Box>
    </Box>
  );
}

ProfilPage.propTypes = {
  user: PropTypes.object.isRequired,
};

export default React.memo(ProfilPage);
