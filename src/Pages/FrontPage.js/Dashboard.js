import React, { useState, useEffect } from 'react';
import UserPanel from '../../Components/UserPanel';
import Settings from '../../Components/Settings';
import NavigationPanel from '../../Components/NavigationPanel';
import DashboardHome from '../../Components/DashboardHome';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Dashboard = () => {
  const [isMobile, setMobile] = useState(
    !window.matchMedia('(min-width: 768px)').matches,
  );

  useEffect(() => {
    window.addEventListener('resize', () =>
      !window.matchMedia('(min-width: 768px)').matches
        ? setMobile(true)
        : setMobile(false),
    );
  }, []);

  return (
    <Router>
      <div className="navigation__panel--absolute">
        <NavigationPanel />
      </div>
      <div className="dashboard__container">
        <div className="current__section">
          <Switch>
            <Route path="/dashboard/settings" exact component={Settings} />
            <Route
              path="/dashboard"
              exact
              render={() => (isMobile ? <UserPanel /> : <DashboardHome />)}
            />
          </Switch>
        </div>
        <div className="user-handle-panel">
          <UserPanel />
        </div>
      </div>
    </Router>
  );
};

export default Dashboard;
