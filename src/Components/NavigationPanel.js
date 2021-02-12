import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../redux/user/actions';

import { ReactComponent as HomeIcon } from '../assets/icons/home.svg';
import { ReactComponent as StatisticIcon } from '../assets/icons/stats-dots.svg';
import { ReactComponent as HabitIcon } from '../assets/icons/clipboard.svg';
import { ReactComponent as ListIcon } from '../assets/icons/list2.svg';
import { ReactComponent as CalendarIcon } from '../assets/icons/calendar.svg';
import { ReactComponent as MenuIcon } from '../assets/icons/menu.svg';
import { ReactComponent as ExitIcon } from '../assets/icons/exit.svg';
import { ReactComponent as SettingsIcon } from '../assets/icons/cog.svg';

const NavigationPanel = ({ logout }) => {
  const [isExpanded, setExpanded] = useState(false);

  const icons = [
    { name: 'Home', icon: <HomeIcon width={24} height={24} /> },
    {
      name: 'Habits and Tasks List',
      icon: <HabitIcon width={24} height={24} />,
    },
    { name: 'Notes', icon: <ListIcon width={24} height={24} /> },
    { name: 'Calendar', icon: <CalendarIcon width={24} height={24} /> },
    { name: 'Statistics', icon: <StatisticIcon width={24} height={24} /> },
    { name: 'Account Settings', icon: <SettingsIcon width={24} height={24} /> },
  ];

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
          <div className="navigation-panel__item">
            <div className="navigation-panel__icon">{i.icon}</div>
            <div className="navigation-panel__description">{i.name}</div>
          </div>
        ))}
      </div>
      <Link to="/" onClick={() => logout()} className="navigation-panel__icon">
        <ExitIcon />
      </Link>
    </div>
  );
};

export default connect(null, { logout })(NavigationPanel);
