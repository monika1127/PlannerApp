import React from 'react';
import mindMapPicture from '../assets/pictures/mind-map.svg';

const DashboardHome = () => {
  return (
    <div className="dasboard-home">
      <div className="dasboard-home-picture">
        <img src={mindMapPicture} alt="MindMap" />
      </div>
      <div className="dasboard-home-description">
        <div>Start planning</div>
        <div>
          Nulla mollis suscipit nibh, et auctor nunc finibus eleifend. Morbi
          eget nunc eleifend, mollis nunc vitae, consectetur magna. Nulla
          posuere massa a eros interdum semper. Morbi vitae sapien ex. Fusce
          finibus elementum purus sed vestibulum. Vestibulum interdum ligula a
          tincidunt ullamcorper. Ut ac turpis ullamcorper, sodales velit in,
          gravida arcu. Fusce sed neque non mi vestibulum dapibus at a odio.
          Nulla sodales, orci posuere gravida pulvinar, purus orci mollis ex,
          non condimentum lorem dui et metus. Etiam sollicitudin justo et mi
          rhoncus interdum. Proin facilisis dapibus justo, vitae vehicula mi
          gravida eget.{' '}
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
