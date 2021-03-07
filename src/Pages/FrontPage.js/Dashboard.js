import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';

import UserPanel from '../../Components/UserPanel';
import Settings from '../../Components/Settings';
import NavigationPanel from '../../Components/NavigationPanel';
import DashboardHome from '../../Components/DashboardHome';
import Note from '../../Components/Notes/Note';
import NoteList from '../../Components/Notes/NotesList';
import Habit from '../../Components/Habit/DailyTasks';
import AddActivity from '../../Components/AddActivity';
import EditHabit from '../../Components/Form/EditHabit';
import { getNotesCategories } from '../../redux/notes/actions';
import { getHabitsList } from '../../redux/habits/actions';
import WeeklyHabitTracker from '../../Components/Habit/WeeklyHabitTracker';

const Dashboard = () => {
  const [isMobile, setMobile] = useState(
    !window.matchMedia('(min-width: 768px)').matches,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const resizeCallback = () =>
      !window.matchMedia('(min-width: 768px)').matches
        ? setMobile(true)
        : setMobile(false);
    window.addEventListener('resize', resizeCallback);
    return () => window.removeEventListener('resize', resizeCallback);
  }, []);

  useEffect(() => {
    dispatch(getNotesCategories());
    dispatch(getHabitsList());
  }, [dispatch]);

  return (
    <div className="dashboard">
      <div className="navigation__panel--absolute">
        <NavigationPanel />
      </div>
      <div className="dashboard__container">
        <div className="current__section">
          <Route path="/dashboard/settings" exact component={Settings} />
          <Route path="/dashboard/notes" exact component={NoteList} />
          <Route path="/dashboard/notes/:id" exact component={Note} />
          <Route path="/dashboard/habits" exact component={Habit} />
          <Route path="/dashboard/addactivity" exact component={AddActivity} />
          <Route path="/dashboard/edithabit/:id" exact component={EditHabit} />
          <Route
            path="/dashboard/calendar"
            exact
            component={WeeklyHabitTracker}
          />
          <Route
            path="/dashboard"
            exact
            render={() => (isMobile ? <UserPanel /> : <DashboardHome />)}
          />
        </div>
        {!isMobile && (
          <div className="user-handle-panel">
            <UserPanel />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
