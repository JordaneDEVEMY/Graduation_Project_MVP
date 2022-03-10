/* eslint-disable default-case */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-props-no-spreading */
import produce from 'immer';
import React, { useCallback, useReducer } from 'react';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { DragDropContext } from 'react-beautiful-dnd';
import Card from '../Card/Card';
import './cards_wrapper.scss';

/**
 * receive state and return the new state
 */
const dragReducer = produce((draft, action) => {
  switch (action.type) {
    case 'MOVE': {
      draft[action.from] = draft[action.from] || [];
      draft[action.to] = draft[action.to] || [];
      const [removed] = draft[action.from].splice(action.fromIndex, 1);
      draft[action.to].splice(action.toIndex, 0, removed);
    }
  }
});

function CardsWrapper({
  assignments,
  handleAssignment,
  isAdmin,
}) {
  const theme = useTheme();

  // structure initial state as an object containing
  // an array of sheets for each card
  const draggableSheets = {};
  assignments.forEach(({ id, colleagues }) => {
    draggableSheets[`card-${id}`] = colleagues;
  });

  // set sheets in state
  const [state, dispatch] = useReducer(dragReducer, draggableSheets);

  /**
   * dispatch actions on drag end
   */
  const onDragEnd = useCallback((result) => {
    if (result.reason === 'DROP') {
      if (!result.destination) {
        return;
      }
      dispatch({
        type: 'MOVE',
        from: result.source.droppableId,
        to: result.destination.droppableId,
        fromIndex: result.source.index,
        toIndex: result.destination.index,
      });
      console.log('on drag end');
      handleAssignment(result);
    }
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        gap: theme.spacing(2),
        flexWrap: 'nowrap',
        justifyContent: 'center',
      }}
    >
      <DragDropContext onDragEnd={onDragEnd}>
        {assignments.map((assignment) => (
          <Card
            id={assignment.id}
            key={assignment.id}
            isMobile={false}
            isAdmin={isAdmin}
            {...assignment}
            employees={state[`card-${assignment.id}`]}
          />
        ))}
      </DragDropContext>
    </Box>
  );
}

CardsWrapper.propTypes = {
  assignments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  handleAssignment: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool.isRequired,
};

export default React.memo(CardsWrapper);
