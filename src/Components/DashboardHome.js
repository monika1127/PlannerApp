import React from 'react';
import mindMapPicture from '../assets/pictures/mind-map.svg';

const DashboardHome = () => {
  return (
    <div className="dasboard-home">
      <div className="dasboard-home__picture">
        <img src={mindMapPicture} alt="MindMap" />
      </div>
      <div className="dasboard-home__description">
        <div className="dasboard-home__title">Start planning</div>
        <div className="dasboard-home__text">
          Nulla mollis suscipit nibh, et auctor nunc finibus eleifend. Morbi
          eget nunc eleifend, mollis nunc vitae, consectetur magna. Nulla
          posuere massa a eros interdum semper. Morbi vitae sapien ex. Fusce
          finibus elementum purus sed vestibulum. Vestibulum interdum ligula a
          tincidunt ullamcorper. Ut ac turpis ullamcorper, sodales velit in,
          gravida arcu.
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
