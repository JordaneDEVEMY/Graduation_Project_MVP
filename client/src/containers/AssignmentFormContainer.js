/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionGetAssignmentInformations, actionUpdateAssignment } from '../actions/assignment';
import AssignmentForm from '../components/AssignmentForm/AssignmentForm';
import { actionRequestAllEmployees } from '../actions/allEmployees';

function AssignmentFormContainer({
  assignment,
  assignmentEmployeesIDs,
  setModalOpened,
}, ref) {
  const dispatch = useDispatch();
  const { employees: employeesList } = useSelector((state) => state.allEmployees);
  console.log('employeesList', employeesList);

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
    };

    switch (method) {
      case 'POST':
        break;
      case 'PATCH':
        dispatch(actionGetAssignmentInformations(assignmentData));
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
      assignmentEmployeesIDs={assignmentEmployeesIDs}
      assignment={assignment}
      employeesList={employeesList}
      setModalOpened={setModalOpened}
      handleSubmit={handleSubmitAssignment}
    />
  );
}

export default React.memo(React.forwardRef(AssignmentFormContainer));
