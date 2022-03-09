/* eslint-disable react/jsx-no-undef */
/* eslint-disable default-case */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-props-no-spreading */
import produce from 'immer';
import React, { useCallback, useReducer } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-beautiful-dnd';
import Companies from '../Companies/Companies';
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
  companies,
  handleAssignment,
  week,
}) {
  console.log('companies', companies);
  // structure initial state as an object containing
  // an array of sheets for each card
  const draggableSheets = {};
  companies.forEach(({ assignments }) => {
    assignments.forEach((assignment) => {
      const { id, colleagues } = assignment;
      draggableSheets[`card-${id}`] = colleagues;
    });
  });

  // set sheets in state
  const [state, dispatch] = useReducer(dragReducer, draggableSheets);

  console.log('draggableSheets', draggableSheets);

  console.log('state', state);

  const onDragStart = useCallback((result) => {
    console.log('on drag end', result);
  }, []);
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
      console.log('on drag end', result);
      handleAssignment(state);
    }
  }, []);

  return (
    <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
      <Companies
        assignments={state}
        companies={companies}
        handleAssignment={handleAssignment}
        isDropable
        week={week}
      />
    </DragDropContext>
  );
}

CardsDraggable.propTypes = {
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
  week: PropTypes.shape({
    num: PropTypes.number.isRequired,
    dates: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired,
  }).isRequired,
};

export default React.memo(CardsDraggable);
