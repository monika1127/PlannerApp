import React, { useState, useEffect } from 'react';
import UserPanel from '../../Components/UserPanel';
import Settings from '../../Components/Settings';
import NavigationPanel from '../../Components/NavigationPanel';
import DashboardHome from '../../Components/DashboardHome';
import { Switch, Route } from 'react-router-dom';

const Dashboard = () => {
  const [isMobile, setMobile] = useState(
    !window.matchMedia('(min-width: 768px)').matches,
  );

  useEffect(() => {
    const resizeCallback = () =>
      !window.matchMedia('(min-width: 768px)').matches
        ? setMobile(true)
        : setMobile(false);
    window.addEventListener('resize', resizeCallback);
    return () => window.removeEventListener('resize', resizeCallback);
  }, []);

  return (
    <>
      <div className="navigation__panel--absolute">
        <NavigationPanel />
      </div>
      <div className="dashboard__container">
        <div className="current__section">
          <Switch>
            <Route path="/settings" exact component={Settings} />
            <Route
              path="/"
              exact
              render={() => (isMobile ? <UserPanel /> : <DashboardHome />)}
            />
          </Switch>
        </div>
        <div className="user-handle-panel">
          <UserPanel />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
