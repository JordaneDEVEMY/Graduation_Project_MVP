/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import AssignmentForm from '../components/AssignmentForm/AssignmentForm';
import {
  actionCreateAssignment,
  actionSetAssignmentInformation,
  actionGetAssignmentInformations,
  actionUpdateAssignment,
} from '../actions';
import planningFunctions from '../utils/planningFunctions';

function AssignmentFormContainer({
  absencesList,
  assignment,
  employeesList,
  handleCancel,
  setModalOpened,
}, ref) {
  const dispatch = useDispatch();

  const handleSubmitAssignment = (formData) => {
    const { method } = formData;

    const {
      absence_id,
      id,
      color,
      employee_id,
      ending_date,
      position,
      site_id,
      starting_date,
      visibility,
    } = formData;

    const assignmentData = {
      absence_id,
      id,
      color,
      employee_id,
      ending_date,
      position,
      site_id,
      starting_date,
      visibility,
      weekSlug: planningFunctions.getWeekSlugFromDate(starting_date),
    };

    console.log('data', assignmentData);

    switch (method) {
      case 'POST':
        dispatch(actionGetAssignmentInformations(assignmentData));
        dispatch(actionCreateAssignment());
        break;
      case 'PATCH':
        dispatch(actionGetAssignmentInformations(assignmentData));
        dispatch(actionSetAssignmentInformation(assignmentData));
        dispatch(actionUpdateAssignment());
        break;
      default:
        break;
    }

    setModalOpened(false);
  };

  return (
    <AssignmentForm
      ref={ref}
      absencesList={absencesList}
      assignment={assignment}
      employeesList={employeesList}
      setModalOpened={setModalOpened}
      handleCancel={handleCancel}
      handleSubmit={handleSubmitAssignment}
    />
  );
}

export default React.memo(React.forwardRef(AssignmentFormContainer));
