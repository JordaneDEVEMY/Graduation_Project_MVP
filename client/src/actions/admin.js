export const REQUEST_ADMIN_PLANNING = 'REQUEST_ADMIN_PLANNING';
export const REQUEST_ALL_QUALIFICATIONS = 'REQUEST_ALL_QUALIFICATIONS';
export const GET_ADMIN_PLANNING = 'GET_ADMIN_PLANNING';
export const GET_ALL_QUALIFICATIONS = 'GET_ALL_QUALIFICATIONS';

export function actionRequestAdminPlanning(week) {
  return {
    type: REQUEST_ADMIN_PLANNING,
    payload: week,
  };
}

export function actionRequestAllQualifications() {
  return {
    type: REQUEST_ALL_QUALIFICATIONS,
  };
}

export function actionGetAdminPlanning({ weekStart, absences, planning }) {
  return {
    type: GET_ADMIN_PLANNING, payload: { weekStart, absences, planning },
  };
}

export function actionGetAllQualifications(qualifications) {
  return {
    type: GET_ALL_QUALIFICATIONS, payload: qualifications,
  };
}
