import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Logo from '../Images/logo/kl-logo.png';
import { NavLink } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import '../css/navbar.css';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = ({id}) => {
 
  const [navbarBackground, setNavbarBackground] = useState('rgba(0, 0, 0, 0)');
  const isMediumScreen = useMediaQuery('(min-width:0px) and (max-width:800px)');

  const buttonStyle = {
    fontSize: '21px',
    width: isMediumScreen?"50px":"170px",
    height: isMediumScreen?"50px":"40px",
    border: 'none',
    borderRadius:"30px",
    fontFamily:"myFont-2",
    fontWeight: '100',
    position:"relative",
    right:isMediumScreen?"-45px":"30px",
    transition: "all 0.3s ease",

    '&:hover': {
      backgroundColor: '#5c2018',
      color: 'white',
      width:"180px",
      height:"45px"
     
    },
  };
  const smallbuttonStyle = {
    fontSize: '12px',
    width: '150px',
    height: '40px',
    border: 'none',
    borderRadius: '30px',
    fontWeight: '600',
    '&:hover': {
      backgroundColor: '#5c2018',
      color: 'white',
    },
  };

  const RegbuttonStyle = {
    fontSize: '14px',
    width: '125px',
    fontFamily:"myFont",
    fontWeight: '600',
    textTransform:"capitalize",
    padding: '10px',
    color: 'white',
    borderRadius: '30px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.05)',
    '&:hover': {
      backgroundColor: '#5c2018',
      color: 'white',
    },
  };

  // Function to handle scroll events
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    // Change the background color when scroll position is greater than 140px
    if (scrollPosition > 140) {
      setNavbarBackground('#f3e0dc'); // Brown color
    } else {
      setNavbarBackground('rgba(0, 0, 0, 0)'); // Transparent color
    }
  };

  // Add scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar position="fixed" sx={{ zIndex: '98', backgroundColor: navbarBackground, boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.2)' }} id={id}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'Transparent', alignItems: 'center' }}>
        {/* Icons */}
        <Typography className="logo-box" variant="h6" component="div">
          <img className={`logo ${navbarBackground !== 'rgba(0, 0, 0, 0)' ? 'logo-change' : ''}`} src={Logo} alt="Logo" />
        </Typography>

        {/* Visible menu for big screens */}
        {!isMediumScreen && (
          <div className="visible-menu">
            <Link to="paper">
              <Button sx={{ ...RegbuttonStyle, color: navbarBackground === 'rgba(0, 0, 0, 0)' ? 'white' : '#5c2018' }} color="inherit">
                Home
              </Button></Link>
              {/* ... (other menu buttons) */}
             <Link to='two-part-content-container'> <Button sx={{...RegbuttonStyle, color: navbarBackground === 'rgba(0, 0, 0, 0)' ? 'white' : '#5c2018'}} color="inherit">
             Our Company
           </Button></Link>
            <Link to='services-div'><Button sx={{...RegbuttonStyle, color: navbarBackground === 'rgba(0, 0, 0, 0)' ? 'white' : '#5c2018'}} color="inherit">
            Services
          </Button></Link>
            <Link to='note-main-container'><Button sx={{...RegbuttonStyle, color: navbarBackground === 'rgba(0, 0, 0, 0)' ? 'white' : '#5c2018'}} color="inherit">
            Note
          </Button></Link>
              <Link to='main-container-contacts'><Button sx={{ ...RegbuttonStyle, color: navbarBackground === 'rgba(0, 0, 0, 0)' ? 'white' : '#5c2018' }} color="inherit">
              Contact
            </Button></Link>
           
          </div>
        )}

        {/* Get connected button (visible on both big and small screens) */}
        <NavLink className="visible-nav-button" style={{ color: navbarBackground === 'rgba(0, 0, 0, 0)' ? 'white' : 'white' }} 
        
        to="/contactform">
          <Button style={{backgroundColor: '#5c2018',fontWeight:"100",textTransform:"Capitalize"}} sx={buttonStyle} color="inherit">
           {isMediumScreen?(<i class="fa-solid fa-comments"></i>):('Get Connected..')}
          </Button>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
