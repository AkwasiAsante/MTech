import React, { useState } from 'react';
import data from '../../data';
import Skills from '../skills/Skills';
import './tabs.css';
import Personal from '../personal/Personal';
import Education from '../education/Education';
import Experience from '../experience/Experience';
import About from '../about/About';
import Conatct from '../contact/Conatct';

const Tabs = () => {
  const [info, setInfo] = useState(data);
  const [value, setValue] = useState(0);

  const renderData = () => {
    if (value === info[0]) {
      return <Skills info={info} />;
    } else if (value === info[1]) {
      return <Personal />;
    } else if (value === info[2]) {
      return <Education />;
    } else if (value === info[3]) {
      return <Experience />;
    } else if (value === info[4]) {
      return <About />;
    } else if (value === 8) {
      return <Conatct />;
    } else {
      return <Skills info={info} />;
    }
  };
  return (
    <div className='tabStyled'>
      <div className='tabs-container'>
        <div className='btn-container'>
          {info.map((item, index) => {
            return (
              <button
                className={`tab-btn ${info[index] === value && 'active-btn'}`}
                key={item.id}
                onClick={() => setValue(info[index])}
              >
                {item.tab}
              </button>
            );
          })}
        </div>
        {renderData()}
      </div>
    </div>
  );
};

export default Tabs;
