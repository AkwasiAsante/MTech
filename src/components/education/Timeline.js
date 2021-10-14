import React from 'react';
import './education.css';

const Timeline = ({ name, qualification, text }) => {
  return (
    <div className='timelineStyled'>
      <ul className='Timeline'>
        <li className='TimelineItem'>
          <div className='TimelineLeft'>
            <h5>{name}</h5>
          </div>
          <div className='TimelineRight'>
            <div className='TimeLineContent'>
              <div className='TlText'>
                <h5>{qualification}</h5>
                <p>{text}</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Timeline;
