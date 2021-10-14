import React from 'react';
import Timeline from './Timeline';

const Education = () => {
  return (
    <div>
      <div className='TimelineCon'>
        <Timeline
          name={'October, 2020'}
          text={'Udemy Online Course'}
          qualification={
            'MERN Stack Front To Back: Full Stack React, Redux & Node.js'
          }
        />
        <Timeline
          name={'July, 2019'}
          text={'Udemy Online Course'}
          qualification={'Web Development Bootcamp'}
        />
        <Timeline
          name={'June, 2018'}
          text={'University for Development Studies'}
          qualification={'Bachelor of Science in computing with Accounting'}
        />
        <Timeline
          name={'December, 2017'}
          text={'University for Development Studies'}
          qualification={'Web Development Seminar'}
        />{' '}
        <Timeline
          name={'May, 2013'}
          text={'St. Michael Senior High School'}
          qualification={'High School (WASSCE)'}
        />
      </div>
    </div>
  );
};

export default Education;
