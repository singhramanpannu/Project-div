// Import React and other necessary libraries
import React from 'react';
import '../css/contacts.css';
import { NavLink } from 'react-router-dom';

// Define the Contacts component
const Contacts = ({ id }) => {
  return (
    <div className='main-container-contacts' id={id}>
      <div className='top-contacts-part'>
        <div className='contact-information'>
          <h1 className='c-i-h1'>Contacts</h1>
          <ul className='c-i-ul'>
            <li className='c-i-li'> <i class="fa-solid fa-location-dot icons icon-1"></i>54,  Shyam Nagar, Benar Rd, Nirmal Vihar, Jhotwara, Jaipur, Rajasthan 302012</li>
            <li className='c-i-li number'><i class="fa-solid fa-phone icons icon-2"></i>+91 9829155269, +91 9829176249​</li>
            <li className='c-i-li mail'><i class="fa-solid fa-envelope icons icon-3"></i> arerkalyani@gmail.com</li>
            {/* Use an anchor tag for the LinkTree item */}
            <a className='a-tag' href='https://linktr.ee/arerkalyani' target='_blank' rel='noopener noreferrer'><li className='c-i-li linktree'><i class="fa-solid fa-link icons icon-4"></i> LinkTree</li></a>
          </ul>
        </div>
        <div className='map-contact'>
          {/* Add the Google Maps Embed API iframe */}
          <iframe className='iframe' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15249822.21961233!2d82.7525294!3d21.0686228!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ceb6c3aebe2eef%3A0x94a1f8c54a9241a0!2sKalyani%20Architects%20and%20Engineers!5e0!3m2!1sen!2sin!4v1701083118750!5m2!1sen!2sin" 
          width="830" 
          height="440" 
          border="1px solid #5C2018"
          allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">" 
          </iframe>
        </div>
      </div>
      <div className='lower-copyright-part'>
        <div className='lower-left-side'>
          <p>Copyright © 2023 Kalyani Architects and Engineering</p>
        </div>
        <div className='lower-right-side'>Created By <a className='side-krdo' href='https://singhramanpannu.com' target='_blank' rel='noopener noreferrer'>singhramanpannu.com</a></div>
      </div>
    </div>
  );
};

// Export the Contacts component
export default Contacts;
