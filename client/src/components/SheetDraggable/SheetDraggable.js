/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import { Box } from '@mui/material';

import './sheet_draggable.scss';

function SheetDraggable({
  cardId,
  children,
  index,
}) {
  return (
    <Draggable
      key={`card-${cardId}-sheet-${index}`}
      draggableId={`card-${cardId}-sheet-${index}`}
      index={index}
    >
      {(provided, snapshot) => (
        <Box
          sx={{
            opacity: snapshot.isDragging ? '0.5' : 1,
          }}
          ref={provided.innerRef}
          key={`card-${cardId}-sheet-${index}-wrapper`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {children}
        </Box>
      )}
    </Draggable>
  );
}

SheetDraggable.propTypes = {
  cardId: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node).isRequired,
    PropTypes.node.isRequired,
  ]).isRequired,
  index: PropTypes.number.isRequired,
};
export default React.memo(SheetDraggable);
