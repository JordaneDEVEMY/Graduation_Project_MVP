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
  const [draggedSheet, setDraggedSheet] = React.useState({});

  console.log(draggedSheet);

  const onDragStart = useCallback((result) => {
    setDraggedSheet(result);
    console.log('dragStart', result);
  });

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
      // TODO: update request
      // state.sheet = draggedSheet;
      // console.log('dragEnd', result);
      const assignement = { ...state.result, sheet: draggedSheet };
      console.log('update assignement', assignement);
      handleAssignment(assignement);
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
      <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
        {assignments.map((assignment) => (
          <Card
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
  isAdmin: PropTypes.bool.isRequired,
};

export default React.memo(CardsWrapper);
