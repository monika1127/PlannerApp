import React from 'react';
import UserPanel from '../../Components/UserPanel';
import HandleTaskList from '../../Components/HandledTaskList';
import NavigationPanel from '../../Components/NavigationPanel';
const NavigationPage = () => {
  return (
    <div className="navigation-page">
      <NavigationPanel />
      <div className="user-handle-data">
        <UserPanel />
        <HandleTaskList />
        <div>
          <div>add task</div>
          <div>add list</div>
        </div>
      </div>
    </div>
  );
};

export default NavigationPage;
