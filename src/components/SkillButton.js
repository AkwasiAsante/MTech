import React from 'react';

const SkillButton = ({ name, number, bg }) => {
  return (
    <div>
      <div className='skill-button' style={{ background: bg }}>
        <div className='skills-btn'>
          <span>{number}</span>
          <span>{name}</span>
        </div>
      </div>
    </div>
  );
};

export default SkillButton;
