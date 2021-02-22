import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthUser } from '../Auth/auth';

import { ReactComponent as HomeIcon } from '../assets/icons/home.svg';
import { ReactComponent as StatisticIcon } from '../assets/icons/stats-dots.svg';
import { ReactComponent as HabitIcon } from '../assets/icons/clipboard.svg';
import { ReactComponent as ListIcon } from '../assets/icons/list2.svg';
import { ReactComponent as CalendarIcon } from '../assets/icons/calendar.svg';
import { ReactComponent as MenuIcon } from '../assets/icons/menu.svg';
import { ReactComponent as ExitIcon } from '../assets/icons/exit.svg';
import { ReactComponent as SettingsIcon } from '../assets/icons/cog.svg';

const icons = [
  {
    name: 'Home',
    icon: <HomeIcon width={24} height={24} />,
    url: 'dashboard/',
  },
  {
    name: 'Habits and Tasks List',
    icon: <HabitIcon width={24} height={24} />,
    url: 'dashboard/habits',
  },
  {
    name: 'Notes',
    icon: <ListIcon width={24} height={24} />,
    url: 'dashboard/notes',
  },
  {
    name: 'Calendar',
    icon: <CalendarIcon width={24} height={24} />,
    url: 'dashboard/calendar',
  },
  {
    name: 'Statistics',
    icon: <StatisticIcon width={24} height={24} />,
    url: 'dashboard/statistics',
  },
  {
    name: 'Account Settings',
    icon: <SettingsIcon width={24} height={24} />,
    url: 'dashboard/settings',
  },
];

const NavigationPanel = ({ history }) => {
  const { logoutUser } = useAuthUser();
  const [isExpanded, setExpanded] = useState(false);

  return (
    <div
      className={`navigation-panel ${isExpanded && 'navigation-panel--active'}`}
    >
      <div
        className="navigation-panel__icon"
        onClick={() => setExpanded(!isExpanded)}
      >
        <MenuIcon />
      </div>
      <div className="navigation-panel__items">
        {icons.map((i) => (
          <NavLink
            to={`/${i.url}`}
            exact
            key={i.url}
            className="navigation-panel__item"
            activeClassName="navigation-panel__item--active"
          >
            <div className="navigation-panel__icon">{i.icon}</div>
            <div className="navigation-panel__description">{i.name}</div>
          </NavLink>
        ))}
      </div>
      <div onClick={() => logoutUser()} className="navigation-panel__icon">
        <ExitIcon />
      </div>
    </div>
  );
};

export default NavigationPanel;
