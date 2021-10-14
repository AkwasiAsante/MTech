import React from 'react';
import Timeline from '../education/Timeline';

function Experience() {
  return (
    <div>
      <div className='TimelineCon'>
        <Timeline
          name={'2017 - Presnt'}
          text={'Total : 3.5 + years of experience'}
          qualification={'Software Developer At MTech Solutions'}
        />
        <Timeline
          name={'2019 - Present'}
          text={'Total : 1.5 + years of experience'}
          qualification={'Web Developer At MTech Solutions'}
        />
        {/* <Timeline
          name={'2010 - 2016'}
          text={'Total : 6 + years of experience'}
          qualification={'Front-End Developer At Google'}
        /> */}
        <Timeline
          name={'2017 - 2018'}
          text={'Total : 2 + years of experience'}
          qualification={'Research on Lossless Data Comp. Algorithms'}
        />
      </div>
    </div>
  );
}

export default Experience;
