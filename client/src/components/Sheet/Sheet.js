/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
  Accordion as MuiAccordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Grid,
  Typography,
} from '@mui/material';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import PropTypes from 'prop-types';
import './sheet.scss';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  background: 'none',
  color: theme.palette.sheet.main,
}));

function Sheet({
  color,
  expandedSheet,
  handleChange,
  index,
  isMobile,
  firstname,
  lastname,
}) {
  console.log(color);
  const isAdmin = true;
  const theme = useTheme();

  return (

    <Accordion
      expanded={expandedSheet === `panel${index}`}
      onChange={handleChange(`panel${index}`)}
      sx={{
        borderTop: '1px solid rgb(0 0 0 / 10%)',
        background: color,
        clipPath: 'path(\'M0,0v48.1h13l0,0c0.2,0,0.3,0,0.5,0C22.1,48.1,29,55,29,63.6c0,0.2,0,0.3,0,0.5l0,0l-1,347.8c0,0,0,0,0,0.1c0,0,0,0,0,0.1l0,0.9l0.1,0c0.5,7.2,6.6,13,13.9,13h216c7.4,0,13.4-5.7,13.9-13l0.1,0l0-0.9c0,0,0,0,0-0.1c0,0,0,0,0-0.1l-1-347.8l0,0c0-0.2,0-0.3,0-0.5c0-8.6,6.9-15.5,15.5-15.5c0.2,0,0.3,0,0.5,0l0,0h13V0H0z\')',
      }}
    >
      <AccordionSummary
        disableGutters
        aria-controls={`panel${index}-content`}
        id={`panel${index}-header`}
        sx={{
          height: 50,
        }}
      >
        <Typography
          component="span"
          sx={{
            alignSelf: 'center',
            lineHeight: 1,
            fontFamily: 'Sriracha',
            fontSize: '1.1rem',
            color: theme.palette.sheet.main,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {`${firstname} ${lastname}`}
        </Typography>

        {!isMobile && isAdmin
          && (
            <DragIndicatorIcon
              fontSize="small"
              color="sheet"
              sx={{
                ml: 'auto',
                opacity: '.3',
                '&:hover, &:focus': {
                  opacity: '1',
                },
              }}
            />
          )}
      </AccordionSummary>
      <AccordionDetails
        sx={{
          padding: '0 40px 10px',
        }}
      >
        <Grid container spacing={1} mt={0}>
          <Grid item xs="auto">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Grid>
          <Grid item xs>
            <Typography
              component="p"
            >
              <strong>Plombier</strong>
            </Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}

Sheet.propTypes = {
  color: PropTypes.string,
  expandedSheet: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  isMobile: PropTypes.bool.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
};
Sheet.defaultProps = {
  color: '#ed6c02',
};
export default React.memo(Sheet);
