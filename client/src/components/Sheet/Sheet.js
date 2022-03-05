import React from 'react';
import {
  Accordion, AccordionDetails, AccordionSummary, Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import './sheet.scss';

function Sheet(props) {
  const {
    color, expandedSheet, handleChange, index, firstname, lastname,
  } = props;

  return (

    <Accordion expanded={expandedSheet === `panel${index}`} onChange={handleChange(`panel${index}`)}>
      <AccordionSummary
        aria-controls={`panel${index}-content`}
        id={`panel${index}-header`}
        sx={{
          background: color,
        }}
      >
        <Typography
          sx={{
            lineHeight: 1,
            fontFamily: 'Sriracha',
            color: 'rgba(0,0,0,.9)',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {`${firstname} ${lastname}`}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
          varius pulvinar diam eros in elit. Pellentesque convallis laoreet
          laoreet.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

Sheet.propTypes = {
  color: PropTypes.string.isRequired,
  expandedSheet: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
};
Sheet.defaultProps = {
};
export default React.memo(Sheet);
