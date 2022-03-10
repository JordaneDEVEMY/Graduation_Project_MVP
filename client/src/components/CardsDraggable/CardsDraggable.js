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
  cards,
  companies,
  handleAssignment,
  week,
}) {
  // set cards in state
  const [dragState, setDragState] = useReducer(dragReducer, cards);

  console.log('dragState', dragState);

  /**
   * prepare assignement to assignment form
   */
  const assignmentPrepareData = (data) => {
    const result = {};
    const { source, destination, draggableId } = data;
    const cardId = Number(destination.droppableId.replace('card-', ''));
    // get site
    companies.forEach((company) => {
      const { assignments } = company;
      console.log('assignmentPrepareData cardId', cardId);
      console.log('assignmentPrepareData assignments', assignments);
      const assignment = assignments.filter(({ id }) => id === cardId);
      if (assignment.length === 1) {
        console.log('assignmentPrepareData assignment', assignment);
        result.site = assignment[0].site;
      }
    });
    console.log('prepare data', result, source, draggableId);
    // const card = cards[source.droppableId][source.index];
    // {
    //   starting_date: "string",
    //   ending_date: "string",
    //   color: "string",
    //   position: 0,
    //   visibility: true,
    //   employee_id: 0,
    //   site_id: 0,
    //   absence_id: 0
    // }
    handleAssignment(data);
  };

  /**
   * dispatch actions on drag end
   */
  const onDragEnd = useCallback((result) => {
    if (result.reason === 'DROP') {
      if (!result.destination) {
        return;
      }
      setDragState({
        type: 'MOVE',
        from: result.source.droppableId,
        to: result.destination.droppableId,
        fromIndex: result.source.index,
        toIndex: result.destination.index,
      });
      console.log('on drag end', result);
      assignmentPrepareData(result);
    }
  }, []);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Companies
        cards={dragState}
        companies={companies}
        handleAssignment={handleAssignment}
        isDropable
        week={week}
      />
    </DragDropContext>
  );
}

CardsDraggable.propTypes = {
  cards: PropTypes.shape().isRequired,
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
