/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { actionGetAssignmentInformations, actionUpdateAssignment } from '../actions/assignment';
import AssignmentForm from '../components/AssignmentForm/AssignmentForm';

function AssignmentFormContainer({
  assignment,
  setModalOpened,
}, ref) {
  const dispatch = useDispatch();

  const handleSubmitAssignment = (data) => {
    const {
      id,
      starting_date: startingDate,
      ending_date: endingDate,
      color,
      position,
      visibility,
      employee_id: employeeId,
      site,
    } = data;

    const updatedAssignment = {
      id,
      startingDate,
      endingDate,
      color,
      position,
      visibility,
      employeeId,
      siteId: site.id,
      absenceId: null,
    };
    console.log('PATCH REQUEST', updatedAssignment);

    dispatch(actionGetAssignmentInformations(updatedAssignment));
    dispatch(actionUpdateAssignment());

    setModalOpened(false);
  };

  return (
    <AssignmentForm
      ref={ref}
      assignment={assignment}
      handleSubmit={handleSubmitAssignment}
    />
  );
}

export default React.memo(React.forwardRef(AssignmentFormContainer));
