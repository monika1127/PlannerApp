import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import UserPanel from '../../Components/UserPanel';
import Settings from '../../Components/Settings';
import NavigationPanel from '../../Components/NavigationPanel';
import DashboardHome from '../../Components/DashboardHome';
import Note from '../../Components/Notes/Note';
import { Switch, Route } from 'react-router-dom';
import NoteList from '../../Components/Notes/NotesList';
import Habit from '../../Components/Habit/DailyTasks';
import { getNotesCategories } from '../../redux/notes/actions';
import { notesSelector } from '../../redux/notes/selectors';

const Dashboard = () => {
  const [isMobile, setMobile] = useState(
    !window.matchMedia('(min-width: 768px)').matches,
  );
  const dispatch = useDispatch();
  const { notesCategories } = useSelector(notesSelector);

  useEffect(() => {
    const resizeCallback = () =>
      !window.matchMedia('(min-width: 768px)').matches
        ? setMobile(true)
        : setMobile(false);
    window.addEventListener('resize', resizeCallback);
    return () => window.removeEventListener('resize', resizeCallback);
  }, []);

  useEffect(() => {
    notesCategories.length === 0 && dispatch(getNotesCategories());
  }, [dispatch, notesCategories]);

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
          <Route
            path="/dashboard/"
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
