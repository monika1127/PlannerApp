import React from 'react';
import { connect } from 'react-redux';
import { userSelector } from '../redux/user/selectors';
import { ReactComponent as Avatar } from '../assets/icons/user.svg';
import { ReactComponent as MailIcon } from '../assets/icons/envelop.svg';

const Settings = ({ user: { user } }) => {
  return (
    <div>
      <div>
        <div>XXX </div>
        <div className="user-data__avatar">
          <Avatar width={24} height={24} />
        </div>
      </div>
      <div className="user-data__details">
        <div>
          <div>
            <MailIcon />
            <div>E-mail address</div>
          </div>
          <div>Edit</div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: userSelector(state),
});

export default connect(mapStateToProps)(Settings);
