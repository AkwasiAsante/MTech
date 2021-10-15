import React, { useRef } from 'react';
import './contact.css';
import email from '../../assets/email.svg';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';

const Conatct = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_68b2rbu',
        'template_40f4ats',
        form.current,
        'user_aaKmnrXANreuXuzHpiwS7'
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Message Sent Successfully !');
        },
        (error) => {
          console.log(error.text);
          toast.error('Error Occured while sending');
        }
      );
    e.target.reset();
  };

  return (
    <div className='contact-con'>
      <div className='contact-container'>
        <h2>
          Contact Me <img src={email} alt='' />
        </h2>
        <div className='form-con'>
          <form ref={form} onSubmit={sendEmail}>
            <input
              name='name'
              type='text'
              placeholder='Enter full name'
              required
            />
            <input
              name='contact'
              type='number'
              placeholder='Enter contact number'
              required
            />
            <input
              name='email'
              type='email'
              placeholder='Enter your email address'
              required
            />
            <textarea
              name='message'
              id=''
              cols='30'
              rows='10'
              placeholder='You message here .....'
              required
            ></textarea>

            <button type='submit' className='send-btn'>
              Send
            </button>
            <Toaster position='top-center' reverseOrder={false} />
          </form>
          {/* <button className='send-btn'>Send</button> */}
        </div>
      </div>
    </div>
  );
};

export default Conatct;
