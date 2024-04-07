import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import '../css/navbar-2.css';
import Logo from '../Images/logo/kl-logo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [navbarBackground] = useState('#f3e0dc'); // Set the desired color

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const isMediumScreen = useMediaQuery('(min-width:0px) and (max-width:800px)');

  const buttonStyle = {
    fontSize: '28px',
    width: '70%',
    height:"50px",
    position:"relative",
    left:"30px",
    textTransform:"capitalize",
    marginTop: '20px',
    fontWeight: '100',
    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#5c2018',
    color:"white",
    '&:hover': {
      backgroundColor: '#5c2018',
      color: 'white',
    },
  };

  const ConbuttonStyle = {
    fontSize: '12px',
    width: '200px',
    fontWeight: '600',
    padding: '10px',
    color: 'white',
    borderRadius: '30px',
    marginRight: '5px',
    backgroundColor: '#5c2018',
    float: 'right',
    '&:hover': {
      backgroundColor: '#5c2018',
      color: 'white',
      border: 'none',
      width: '110%',
      padding: '12px',
    },
  };

  return (
    <AppBar sx={{ backgroundColor: navbarBackground, boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.2)' ,position:"static",borderBottom:"1px solid #5c2018"}}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'Transparent', alignItems: 'center' }}>
        <Typography className='logo-box' variant='h6' component='div'>
          <img style={{filter:'brightness(1) invert(0)'}} className={`logo`} src={Logo} alt='Logo'></img>
        </Typography>
        <NavLink className="visible-nav-button" style={{ color: navbarBackground === 'rgba(0, 0, 0, 0)' ? 'white' : 'white' }} 
        
        to="/">
          <Button style={{backgroundColor:"#5c2018" ,fontFamily:"myFont-2",borderRadius:"30px",position:"relative",bottom:"10px"}} sx={buttonStyle} color="inherit">
          Home
          </Button>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
