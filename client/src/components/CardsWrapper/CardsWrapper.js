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
  assignements,
  handleModal,
}) {
  const theme = useTheme();

  // structure initial state as an object containing
  // an array of sheets for each card
  const draggableSheets = {};
  assignements.forEach(({ id, employees }) => {
    draggableSheets[`card-${id}`] = employees;
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
      // TODO: update request
      console.log('source', result.source);
      console.log('destination', result.destination);

      handleModal(result);
    }
  }, []);

  return (
    <Box
      sx={{
        // overflowX: 'auto',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: theme.spacing(2),
          flexWrap: 'nowrap',
          justifyContent: 'center',
        }}
      >
        <DragDropContext onDragEnd={onDragEnd}>
          {assignements.map((assignement) => (
            <Card key={assignement.id} isMobile={false} {...assignement} employees={state[`card-${assignement.id}`]} />
          ))}
        </DragDropContext>
      </Box>
    </Box>
  );
}

CardsWrapper.propTypes = {
  assignements: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  handleModal: PropTypes.func.isRequired,
};

export default React.memo(CardsWrapper);
