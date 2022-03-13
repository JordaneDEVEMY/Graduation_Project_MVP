/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import PersonPinIcon from '@mui/icons-material/PersonPin';

function SiteHeader({
  address,
  manager_name,
  name,
}) {
  const theme = useTheme();

  return (
    <Box>
      <Typography
        variant="h4"
        component="h3"
        sx={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          textAlign: 'center',
          textShadow: '1px 1px 0 rgb(0 0 0 / 10%)',
          marginBottom: theme.spacing(2),
        }}
      >
        {`${name}`}
      </Typography>

      {address && (
        <Typography
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            textAlign: 'center',
            my: theme.spacing(2),
            color: theme.palette.text.secondary,
          }}
        >
          {`${address}`}

          {manager_name && (
          <Typography
            variant="small"
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              textAlign: 'center',
              my: theme.spacing(2),
              color: theme.palette.text.secondary,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <PersonPinIcon
              sx={{
                mr: theme.spacing(0.5),
                color: theme.palette.text.secondary,
              }}
            />
            {`Responsable : ${manager_name}`}
          </Typography>
          )}
        </Typography>
      )}
    </Box>
  );
}

SiteHeader.propTypes = {
  address: PropTypes.string,
  manager_name: PropTypes.string,
  name: PropTypes.string.isRequired,
};

SiteHeader.defaultProps = {
  address: undefined,
  manager_name: undefined,
};

export default React.memo(SiteHeader);
