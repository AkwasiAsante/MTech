import React from 'react';
import avatar from '../../assets/avatar.svg';
import age from '../../assets/age.svg';
import location from '../../assets/location.svg';
import contact from '../../assets/contact.svg';
import email from '../../assets/email.svg';
import './personalinfo.css';

function PersonalInfo() {
  const handleScroll = () => {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className='personalInfo'>
      <div className='personal-info-con'>
        <div className='avatar-con'>
          <div className='avatar'>
            <img src={avatar} alt='' className='avatar-img' />
          </div>
          <div className='right-avatar'>
            <h4>MTech Solutions</h4>
            <p>Web Developer - Software Developer - Freelancer</p>
            <div className='contact-btn' onClick={handleScroll}>
              Contact
            </div>
          </div>
        </div>
        <p className='about-text'>
          Hello and thanks for visiting my profile. I am <span>Asante</span>, a
          web developer (MERN/Full Stack Developer) and also a Software
          Developer. I love learning, researching and implementing according to
          time.
        </p>
        <div className='icon-text'>
          <div className='icons'>
            <div className='icon'>
              <img src={location} alt='' />
              <p>Accra, Ghana</p>
            </div>
            <div className='icon'>
              <img src={age} alt='' />
              <p>Available (Hire Me)</p>
            </div>
            <div className='icon'>
              <img src={contact} alt='' />
              <p>233 554 169 115</p>
            </div>
            <div className='icon'>
              <img src={email} alt='' />
              <p>mtectsolutions2000@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
