import React, { useState } from 'react';

import AddHabit from './Form/AddHabit';
import AddTask from './Form/AddTask';

const NewActivity = () => {
  const [activeSection, setActiveSection] = useState('habit');

  return (
    <div className="new-activity">
      <div className="new-activity__title">New Habit/Task</div>
      <div className="new-activity__types">
        <div
          className={`new-activity__type ${
            activeSection === 'habit' && '--active'
          }`}
          onClick={() => setActiveSection('habit')}
        >
          Add Habit
        </div>
        <div
          className={`new-activity__type ${
            activeSection === 'task' && '--active'
          }`}
          onClick={() => setActiveSection('task')}
        >
          Add Task
        </div>
      </div>
      <div className="new-activity__container">
        {activeSection === 'habit' && <AddHabit />}
        {activeSection === 'task' && <AddTask />}
      </div>
    </div>
  );
};

export default NewActivity;
