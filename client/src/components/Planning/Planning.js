import React from 'react';
import PropTypes from 'prop-types';
import './planning.scss';

function Planning({
  isAdmin,
}) {
  return (
    <p>
      {`Planning en mode ${isAdmin ? 'admin' : 'user'}`}
    </p>
  );
}

Planning.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
};

export default React.memo(Planning);
