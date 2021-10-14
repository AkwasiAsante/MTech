import React from 'react';
import email from '../../assets/email.svg';
import contact from '../../assets/contact.svg';
import whatsapp from '../../assets/whatsapp.svg';
import facebook from '../../assets/socials/facebook.svg';

function About() {
  return (
    <div>
      <p>
        <span>
          {' '}
          Name: <b style={{ fontSize: '20px' }}>Gideon Asante </b>
        </span>
        <span style={{ fontSize: '16px', marginLeft: '20px' }}>
          <b>[CEO MTech Solutions] </b>
        </span>
      </p>

      <br />
      <p>
        I am Gideon Asante, a software & Web Developer who uses modern
        technologies in developing web and software applications. I am a
        graduate from the University for Development Studies. Have attended some
        Offline and Online seminars which has given more insight about this
        journey.
      </p>
      <br />
      <p>Currenly I am the CEO of MTech Solutions, Accra Ghana.</p>
      <br />
      <p>You can contact me on the links below</p>
      <p>
        <img style={{ marginRight: '15px' }} src={email} alt='' />
        mtechsolutions2000@gmail.com
      </p>
      <p>
        <img style={{ marginRight: '15px' }} src={contact} alt='' />
        233 554 169 115
      </p>
      <p>
        <img
          style={{
            marginRight: '10px',
            width: '26px',
            height: '26px',
          }}
          src={whatsapp}
          alt=''
        />
        233 505 889 829
      </p>
      <p>
        <img
          style={{
            marginRight: '10px',
            width: '26px',
            height: '26px',
          }}
          src={facebook}
          alt=''
        />
        Akwasi Asante(Major)
      </p>
    </div>
  );
}

export default About;
