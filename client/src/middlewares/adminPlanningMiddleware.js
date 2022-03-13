/* eslint-disable camelcase */
import {
  createAssignment, updateAssignment, deleteAssignment,
} from '../requests/assignmentRequest';
import { requestAdminPlanning } from '../requests/adminPlanningRequest';
import { requestAllQualifications } from '../requests/qualificationsRequest';
import * as actions from '../actions';

const adminPlanningMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case actions.REQUEST_ADMIN_PLANNING: {
      const response = await requestAdminPlanning();

      if (response.status === 200) {
        const { weekStart, absences, planning } = response.data;

        store.dispatch(actions.actionGetAdminPlanning({ weekStart, absences, planning }));
        store.dispatch(actions.actionGetUserPlanning());
        store.dispatch(actions.actionRequestAllQualifications());
      }
      return;
    }
    case actions.REQUEST_ALL_QUALIFICATIONS: {
      const response = await requestAllQualifications();
      if (response.status === 200) {
        store.dispatch(actions.actionGetAllQualifications(response.data));
      }
      return;
    }
    case actions.CREATE_ASSIGNMENT: {
      const { assignment } = store.getState();
      const {
        startingDate: starting_date,
        endingDate: ending_date,
        color,
        position,
        visibility,
        employeeId: employee_id,
        siteId: site_id,
        absenceId: absence_id,
      } = assignment;
      const assignmentDatas = {
        starting_date,
        ending_date,
        color,
        position,
        visibility,
        employee_id,
        site_id,
        absence_id,
      };
      const response = await createAssignment(assignmentDatas);
      if (response.status === 200) {
        store.dispatch(actions.actionResetAssignmentInformations());
        store.dispatch(actions.actionRequestAdminPlanning());
        alert('Assignment created successfully');
      }
      return;
    }
    case actions.UPDATE_ASSIGNMENT: {
      const { assignment } = store.getState();
      const {
        startingDate: starting_date,
        endingDate: ending_date,
        color,
        position,
        visibility,
        employeeId: employee_id,
        siteId: site_id,
        absenceId: absence_id,
      } = assignment;
      const assignmentDatas = {
        starting_date,
        ending_date,
        color,
        position,
        visibility,
        employee_id,
        site_id,
        absence_id,
      };
      const response = await updateAssignment(assignment.id, assignmentDatas);
      if (response.status === 200) {
        store.dispatch(actions.actionResetAssignmentInformations());
        store.dispatch(actions.actionRequestAdminPlanning());
        alert('Assignment updated successfully');
      }
      return;
    }
    case actions.DELETE_ASSIGNMENT: {
      const { assignment } = store.getState();
      const response = await deleteAssignment(assignment.id);
      if (response.status === 200) {
        store.dispatch(actions.actionResetAssignmentInformations());
        store.dispatch(actions.actionRequestAdminPlanning());
        alert('Assignment deleted successfully');
      }
      return;
    }
    default: {
      next(action);
    }
  }
};

export default adminPlanningMiddleware;
