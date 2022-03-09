/* eslint-disable react/jsx-no-undef */
/* eslint-disable default-case */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-props-no-spreading */
import produce from 'immer';
import React, { useCallback, useReducer } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-beautiful-dnd';
import './cards_draggable.scss';

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

function CardsDraggable({
  children,
  companies,
  handleAssignment,
}) {
  // structure initial state as an object containing
  // an array of sheets for each card
  const draggableSheets = {};
  companies.forEach(({ assignments }) => {
    const { id, colleagues } = assignments;
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
      handleAssignment(state);
    }
  }, []);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {children}
    </DragDropContext>
  );
}

CardsDraggable.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node).isRequired,
    PropTypes.node.isRequired,
  ]).isRequired,
  companies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      assignments: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  ).isRequired,
  handleAssignment: PropTypes.func.isRequired,
};

export default React.memo(CardsDraggable);
