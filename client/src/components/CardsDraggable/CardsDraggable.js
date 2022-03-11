/* eslint-disable camelcase */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable default-case */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-beautiful-dnd';
import Companies from '../Companies/Companies';
import planningFunctions from '../../utils/planningFunctions';
import './cards_draggable.scss';

function CardsDraggable({
  cards,
  dragState,
  companies,
  handleAssignment,
  setDragState,
  week,
}) {
  console.log('cards draggable admin', cards);
  console.log('cards draggable dragState', dragState);

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
      const data = planningFunctions.getDragEndData(companies, cards, result);

      handleAssignment(data);
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
  dragState: PropTypes.shape().isRequired,
  handleAssignment: PropTypes.func.isRequired,
  setDragState: PropTypes.func.isRequired,
  week: PropTypes.shape({
    num: PropTypes.number.isRequired,
    dates: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired,
  }).isRequired,
};

export default React.memo(CardsDraggable);
