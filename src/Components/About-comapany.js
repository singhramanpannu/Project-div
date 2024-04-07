import React from 'react';
import { Paper, Typography, Divider } from '@mui/material';
import '../css/about-company.css'; // Create this CSS file for styling if needed
import imageSrc from '../Images/background/gallery-1.jpg';
import {  useMediaQuery, useTheme } from '@mui/material';

const TwoPartContent = ({ id, heading, description, imageSrc }) => {
  const theme = useTheme();
  const isPortrait = useMediaQuery(theme.breakpoints.down('md'));
 
  return (
    
    <Paper id={id}  className='two-part-content-container' elevation={3}>
      <div className='two-part-content-wrapper'>
        {/* Left Part */}
        <div className='left-part'>
        <Typography variant='h5' 
        style={{
          
          position:"relative",
          right: isPortrait?"80px":"230px",
          bottom: isPortrait?"20px":"15px",
          fontFamily:"myFont",
          color:"#5c2018",
          fontSize: isPortrait?"2em":"3em"
        }}
        
        >About our</Typography>
          <Typography variant='h2'  className='heading-top' 
          style=
          {{
            position:"relative",
            left: isPortrait?"-60px":"",
            bottom:"35px",
            fontSize: isPortrait?"3em":"5.2em",
            
            height: isPortrait?"70px":"100px",
            margin:"0",
            display:"flex",
            flexDirection:"column",
            fontWeight:"700"
        }}>
          Company
          </Typography>
          <Divider className='divider' />
          <Typography className='description-bottom' style={{fontSize:isPortrait?"11px":"16px",fontWeight:"600",margin:"0",position:"relative",fontFamily:"myFont-light"
           ,position:"relative",
           bottom:"10px",
           
        
        
        }}>
          Established in 1997, our architectural and engineering firm is guided by a visionary commitment to crafting spaces that seamlessly blend aesthetics with functionality. We are passionate about embracing the essence of culture and contemporary trends, ensuring originality and innovation in all our projects. Our comprehensive services cover architectural design for diverse sectors, from residential and commercial to industrial, hospitality, institutional, and healthcare. We excel in engineering design, interior design, landscape design, and sustainable design, with a focus on energy efficiency and environmental consciousness. From space planning to site development, structural strengthening and restoration, and 3D modeling, our expertise is unrivaled. With unwavering dedication to excellence, we offer project management and consultation and specialty services like waterproofing and industrial floorings too.
          </Typography>
        </div>

        {/* Right Part */}
        <div className='right-part'>
        
          
        </div>
      </div>
    </Paper>
  );
};

export default TwoPartContent;
