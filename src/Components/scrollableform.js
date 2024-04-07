import React, { useState, useEffect, useRef } from 'react';
import '../css/scrollablecomponent.css';
import emailjs from '@emailjs/browser';
import { useMediaQuery } from '@mui/material';

const ScrollableComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const formRef = useRef();
  const isPortrait = useMediaQuery('(max-width: 960px)');

  useEffect(() => {
    const handleScroll = () => {
      if (!isClosed) {
        const scrollY = window.scrollY || window.pageYOffset;

        // Adjust the scroll threshold as needed (500px in this case)
        if (scrollY >= 500) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isClosed]);

  const handleClose = () => {
    setIsVisible(false);
    setIsClosed(true);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zr3wi64', 'template_cn4ie01', formRef.current, 'GlEnvBPn9HHPUh7Hl')
      .then((result) => {
        console.log(result.text);
        console.log('message sent');
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div
      style={{
        display: isVisible ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: isPortrait ? '80%' : '40%',
        height: isPortrait?'75%':"95%",
        background: 'white', // Light Blue color
        color: '#000', // Black text
        borderRadius: '10px', // Rounded corners
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', // Box shadow
        zIndex: 99,
      }}
    >
      <button
        onClick={handleClose}
        style={{
          position: 'absolute',
          top: '-8px',
          right: '-10px',
          cursor: 'pointer',
          color: '#000',
          backgroundColor: 'white',
          border: 'none',
          borderRadius: '50%',
          height: '30px',
          width: '30px',
          fontSize: '1em',
          fontWeight: '500',
        }}
      >
        X
      </button>
      <div className='form-parent-container'>
        <div className='child-container-1'
        style={{display:"flex",
        alignItems:"center",
        justifyContent:"center",
      }}
        >
          <h2 className='child-container-1-h2'
          style={{fontSize:isPortrait?"2.2em":"",
        position:"relative",
        top:isPortrait?"10px":"20px"
        }}
          >Let's Connect..</h2>
        </div>
        <div className='child-container-2'>
        <form ref={formRef} onSubmit={sendEmail}>
        <div className='scrollable-form-group'>
          <input type='text' id='name' name='user_name' placeholder='Name' required />
        </div>

        <div className='scrollable-form-group'>
          <input type='email' id='email' name='user_email' placeholder='Email' required />
        </div>

        <div className='scrollable-form-group'>
          <input type='text' id='businessName' name='user_business' placeholder='Business Name' />
        </div>

        <div className='scrollable-form-group'>
          <input type='tel' id='phone' name='user_number' placeholder='Phone Number' />
        </div>

        <div className='scrollable-form-group'>
          <textarea name='message' rows='4' placeholder='Message'></textarea>
        </div>

        <div className='scrollable-form-group'>
          <button type='submit' className='scrollable-submit-contact-form-btn' value='send'
          style={{position:"relative",bottom: isPortrait?'20px':""}}
          >
            Submit
          </button>
        </div>
      </form>
        </div>
      </div>
    </div>
  );
};

export default ScrollableComponent;
