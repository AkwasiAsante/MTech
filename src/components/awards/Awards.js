import React from 'react';
import AwardItem from './AwardItem';
import award from '../../assets/skills/award.svg';
import calander from '../../assets/skills/calender.svg';
import heads from '../../assets/skills/heads.svg';
import './awards.css';

const Awards = () => {
  return (
    <div className='awardStyled'>
      <AwardItem icon={award} number={'+15'} text={'Projects'} />
      <AwardItem icon={calander} number={'+7'} text={'On Schedule'} />
      <AwardItem icon={heads} number={'+3'} text={'Git Repos'} />
      <AwardItem icon={heads} number={'+5'} text={'Team'} />
    </div>
  );
};

export default Awards;
