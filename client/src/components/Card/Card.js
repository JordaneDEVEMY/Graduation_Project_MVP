/* eslint-disable no-param-reassign */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CardHeader from '../CardHeader/CardHeader';
import SheetList from '../SheetList/SheetList';

import './card.scss';

function Card({
  site,
}) {
  const theme = useTheme();
  console.log('assignement', site);

  const employees = [
    {
      id: 1,
      firstname: 'John',
      lastname: 'Doe',
      email: 'string@alo.fr',
      avatar: 'string',
      role_application: 'string',
      color: '#f44336',
    },
    {
      id: 2,
      firstname: 'Bernard',
      lastname: 'De La Villardière',
      email: 'bernard@free.fr',
      avatar: 'string',
      role_application: 'string',
      color: '#2196f3',
    },
    {
      id: 3,
      firstname: 'Bernard',
      lastname: 'De La Villardière',
      email: 'bernard@free.fr',
      avatar: 'string',
      role_application: 'string',
      color: '#4caf50',
    },
    {
      id: 4,
      firstname: 'Bernard',
      lastname: 'De La Villardière',
      email: 'bernard@free.fr',
      avatar: 'string',
      role_application: 'string',
      color: '#ffeb3b',
    },
    {
      id: 5,
      firstname: 'Bernard',
      lastname: 'De La Villardière',
      email: 'bernard@free.fr',
      avatar: 'string',
      role_application: 'string',
      color: '#ff9800',
    },
    {
      id: 5,
      firstname: 'Bernard',
      lastname: 'De La Villardière',
      email: 'bernard@free.fr',
      avatar: 'string',
      role_application: 'string',
      color: '#ff9800',
    },
  ];

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: theme.palette.background.component,
        color: theme.palette.text.primary,
        p: theme.spacing(2),
        width: `calc(300px + ${theme.spacing(4)})`,
      }}
    >
      <CardHeader site={site} />
      <SheetList employees={employees} />
    </Box>
  );
}

Card.propTypes = {
  site: PropTypes.object.isRequired,
};
Card.defaultProps = {

};
export default React.memo(Card);
