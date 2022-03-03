import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import useSelector from 'react-redux';

function RequireUser() {
  const isAdmin = useSelector((state) => state.user.isAdmin);
  const userId = useSelector((state) => state.user.id);

  const location = useLocation();

  return (
    !isAdmin
      ? <Navigate to={`users/${userId}/planning`} replace />
      : <Navigate to="admins/planning" state={{ from: location }} replace />
  );
}

RequireUser.propTypes = {
};
RequireUser.defaultProps = {
};
export default React.memo(RequireUser);
