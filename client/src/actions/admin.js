export const REQUEST_ADMIN_PLANNING = 'REQUEST_ADMIN_PLANNING';
export const GET_ADMIN_PLANNING = 'GET_ADMIN_PLANNING';

export function actionRequestAdminPlanning() {
  return {
    type: REQUEST_ADMIN_PLANNING,
  };
}

export function actionGetAdminPlanning({ weekStart, planning }) {
  return {
    type: GET_ADMIN_PLANNING, payload: { weekStart, planning },
  };
}
