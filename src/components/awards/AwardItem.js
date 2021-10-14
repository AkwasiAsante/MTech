import React from 'react';
import './awards.css';

const AwardItem = ({ icon, number, text }) => {
  return (
    <div className='awardItemStyled'>
      <img src={icon} alt='' />
      <p className='ai-number'>{number}</p>
      <p>{text}</p>
    </div>
  );
};

export default AwardItem;
