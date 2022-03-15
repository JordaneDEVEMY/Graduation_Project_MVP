/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import AssignmentForm from '../components/AssignmentForm/AssignmentForm';
import {
  actionRequestAllEmployees,
  actionCreateAssignment,
  actionSetAssignmentInformation,
  actionGetAssignmentInformations,
  actionUpdateAssignment,
} from '../actions';
import planningFunctions from '../utils/planningFunctions';

function AssignmentFormContainer({
  assignment,
  employeesList,
  setModalOpened,
}, ref) {
  const dispatch = useDispatch();

  const handleSubmitAssignment = (formData) => {
    const { method } = formData;
    // const isAbsence = formData.absence_id !== null;

    const {
      id,
      starting_date,
      ending_date,
      color,
      position,
      visibility,
      employee_id,
      site,
      absence_id,
    } = formData;

    const assignmentData = {
      id,
      starting_date,
      ending_date,
      color,
      position,
      visibility,
      employee_id,
      site_id: site.id,
      absence_id,
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

  React.useEffect(() => {
    dispatch(actionRequestAllEmployees());
  }, []);

  return (
    <AssignmentForm
      ref={ref}
      assignment={assignment}
      employeesList={employeesList}
      setModalOpened={setModalOpened}
      handleSubmit={handleSubmitAssignment}
    />
  );
}

export default React.memo(React.forwardRef(AssignmentFormContainer));
