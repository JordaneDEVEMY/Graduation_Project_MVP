import React from 'react';
import { useSelector } from 'react-redux';
import App from '../components/App/App';

function AppContainer() {
  const isAdmin = useSelector((state) => state.user.isAdmin);
  const userId = useSelector((state) => state.user.id);

  return (
    <App isAdmin={isAdmin} userId={userId} />
  );
}

AppContainer.propTypes = {};
AppContainer.defaultProps = {};
export default React.memo(AppContainer);
