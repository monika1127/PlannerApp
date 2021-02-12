import React, { Fragment } from 'react';
import UserPanel from '../../Components/UserPanel';
import NavigationPanel from '../../Components/NavigationPanel';

const NavigationPage = () => {
  return (
    <Fragment>
      <div className="navigation__panel--absolute">
        <NavigationPanel />
      </div>
      <div className="current__section">
        <UserPanel />
      </div>
      <div className="user-handle-panel--desktop">
        <UserPanel />
      </div>
    </Fragment>
  );
};

export default NavigationPage;
