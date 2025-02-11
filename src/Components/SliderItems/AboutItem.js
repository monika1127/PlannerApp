import React from 'react';
import { Link } from 'react-router-dom';
import conceptListPicture from '../../assets/pictures/concept-list.svg';

const AboutItem = ({ data, active }) => {
  return (
    <div className={`about-info`}>
      <div className="about-info__image">
        <img src={conceptListPicture} alt="checklist" />
      </div>
      <div className="about-info__details">
        <div className="about-info__title">{data.title}</div>
        <div className="about-info__description">{data.description}</div>
        <Link
          to="/signup"
          className="signIn-btn button button--large button--secondary"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};
export default AboutItem;
