import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../redux/user/actions';
const NavigationPage = ({ logout }) => {
  return (
    <div>
      Navigation
      <div>hello Monika</div>
      <div>Configure your account</div>
      <Link to="/" onClick={() => logout()}>
        Log Out
      </Link>
    </div>
  );
};

export default connect(null, { logout })(NavigationPage);
