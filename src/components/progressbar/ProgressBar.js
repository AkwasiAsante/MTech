import React from 'react';
import './progressbar.css';

const ProgressBar = ({ name, image, progress, bg, desc }) => {
  return (
    <div className='progressBarStyled'>
      <div className='skill'>
        <div className='image'>
          <img src={image} alt='' />
        </div>
        <div className='progress-con'>
          <p>
            {name} <span>{progress}</span>
          </p>
          <div className='progress-bar' style={{ background: 'white' }}>
            <div
              className='progress'
              style={{ background: bg, width: progress }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
