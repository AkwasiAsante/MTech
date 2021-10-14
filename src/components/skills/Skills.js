import React from 'react';
import ProgressBar from '../progressbar/ProgressBar';
import './skills.css';

const Skills = ({ info }) => {
  const { description, progressImages } = info[0];

  return (
    <div className='skillStyled'>
      <p className='description'>{description}</p>
      <div className='skill-con'>
        <ProgressBar
          name={'CSS3'}
          image={progressImages[0]}
          progress={'89%'}
          bg={'#F56692'}
          desc={description}
        />
        <ProgressBar
          name={'HTML5'}
          image={progressImages[1]}
          progress={'80%'}
          bg={'#6BBE92'}
          desc={description}
        />
        <ProgressBar
          name={'ReactJS'}
          image={progressImages[2]}
          progress={'91%'}
          bg={'#545496'}
          desc={description}
        />
        <ProgressBar
          name={'C#'}
          image={progressImages[3]}
          progress={'95%'}
          bg={'#f74839'}
          desc={description}
        />
        <ProgressBar
          name={'Javscript'}
          image={progressImages[4]}
          progress={'86%'}
          bg={'#640211'}
          desc={description}
        />
        <ProgressBar
          name={'VB.Net'}
          image={progressImages[5]}
          progress={'70%'}
          bg={'slateblue'}
          desc={description}
        />
      </div>
    </div>
  );
};

export default Skills;
