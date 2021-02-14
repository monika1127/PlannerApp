import React, { Fragment } from 'react';
import UserPanel from '../../Components/UserPanel';
import Settings from '../../Components/Settings';
import NavigationPanel from '../../Components/NavigationPanel';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Dashboard = () => {
  return (
    <Router>
      <div className="navigation__panel--absolute">
        <NavigationPanel />
      </div>
      <div className="dashboard__container">
        <div className="current__section">
          <Switch>
            <Route path="/settings" exact component={Settings} />
            <Route path="/dashboard" exact component={UserPanel} />
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
