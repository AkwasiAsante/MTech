import React from 'react';
import Awards from '../awards/Awards';
import SkillButton from '../SkillButton';
import Language from '../social/Language';
import './personal.css';
import ig from '../../assets/socials/ig.svg';
import git from '../../assets/socials/git.svg';
import yt from '../../assets/socials/yt.svg';
import ghana from '../../assets/ghana.svg';
import Lang from '../../assets/language.svg';

const Personal = () => {
  return (
    <div className='personalStyled'>
      <div className='skills-con'>
        <h4>Personal Skills</h4>
        <SkillButton name={'Presentation'} number={'1.'} bg={'#6BBE92'} />
        <SkillButton name={'Problem Solver'} number={'2.'} bg={'#16194F'} />
        <SkillButton name={'Fast Learner'} number={'3.'} bg={'#F44E77'} />
        <SkillButton name={'Team Player'} number={'4.'} bg={'#554DDE'} />
        <SkillButton name={'Professional'} number={'5.'} bg={'#9A94FF'} />
      </div>

      <div className='awards-con'>
        <Awards />
        <div className='socials-con'>
          <Language
            icon1={Lang}
            icon2={ghana}
            // icon3={yt}
            text1={'English'}
            text2={'GH (Twi)'}
            title={'Languages'}
          />
          <Language
            icon1={git}
            icon2={ig}
            icon3={yt}
            text1={'@AkwasiAsante'}
            text2={'@mtect.gh'}
            text3={'@MTech'}
            title={'Socials'}
          />
        </div>
      </div>
    </div>
  );
};

export default Personal;
