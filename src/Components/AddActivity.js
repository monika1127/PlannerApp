import React, { useState } from 'react';

import AddHabit from './Form/AddHabit';
import AddTask from './Form/AddTask';

const AddActivity = () => {
  const [activeSection, setActiveSection] = useState('habit');

  return (
    <div className="add-activity">
      <div className="add-activity__title">New Habit/Task</div>
      <div className="add-activity__types">
        <div
          className={`add-activity__type ${
            activeSection === 'habit' && '--active'
          }`}
          onClick={() => setActiveSection('habit')}
        >
          Add Habit
        </div>
        <div
          className={`add-activity__type ${
            activeSection === 'task' && '--active'
          }`}
          onClick={() => setActiveSection('task')}
        >
          Add Task
        </div>
      </div>
      <div className="add-activity__container">
        {activeSection === 'habit' && <AddHabit />}
        {activeSection === 'task' && <AddTask />}
      </div>
    </div>
  );
};

export default AddActivity;
