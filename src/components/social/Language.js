import React from 'react';
import './social.css';

const Language = ({ title, icon1, icon2, icon3, text1, text2, text3 }) => {
  return (
    <div className='languageStyled'>
      <h4>{title}</h4>
      <div className='social-content'>
        <div className='s-icons'>
          <img src={icon1} alt='' />
          <img src={icon2} alt='' />
          <img src={icon3} alt='' />
        </div>
        <div className='s-text'>
          <span>{text1}</span>
          <span>{text2}</span>
          <span>{text3}</span>
        </div>
      </div>
    </div>
  );
};

export default Language;
