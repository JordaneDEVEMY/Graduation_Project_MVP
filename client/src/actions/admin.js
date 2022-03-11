export const REQUEST_ADMIN_PLANNING = 'REQUEST_ADMIN_PLANNING';
export const GET_ADMIN_PLANNING = 'GET_ADMIN_PLANNING';

export function actionRequestAdminPlanning(week) {
  return {
    type: REQUEST_ADMIN_PLANNING,
    payload: week,
  };
}

export function actionGetAdminPlanning({ weekStart, absences, planning }) {
  return {
    type: GET_ADMIN_PLANNING, payload: { weekStart, absences, planning },
  };
}
