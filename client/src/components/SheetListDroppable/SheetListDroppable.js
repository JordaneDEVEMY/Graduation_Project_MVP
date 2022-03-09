/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-param-reassign */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';
import { Box } from '@mui/material';

import './sheetlist_droppable.scss';

function SheetListDroppable({
  cardId,
  children,
}) {
  return (
    <Droppable droppableId={`card-${cardId}`} type="SITES">
      {(provided) => (
        <Box
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {children}

          {provided.placeholder}
        </Box>
      )}
    </Droppable>
  );
}

SheetListDroppable.propTypes = {
  cardId: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node).isRequired,
    PropTypes.node.isRequired,
  ]).isRequired,
};
export default React.memo(SheetListDroppable);
