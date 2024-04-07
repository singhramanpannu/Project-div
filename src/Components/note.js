import React from 'react';
import { Paper, Typography } from '@mui/material';
import '../css/note.css';
import Imageceo from '../Images/profile/profile-3.jpeg';
import {  useMediaQuery, useTheme } from '@mui/material';

const Note = ({ id }) => {
  const theme = useTheme();
  const isPortrait = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Paper id={id} className='note-main-container' 
    style={{backgroundColor:"#f3e0dc"}}
    
    elevation={3}>
      <Typography variant= {isPortrait?"h4":"h2"} className='header-note' 
      style={{fontFamily:"myFont-2"}}
      >
        Note from CEO...
      </Typography>
      <div className='content-cont-note'>
        <div className='div-1-note' style={{position: "relative",
          right:"30px",marginRight:"30px"}}>
          <img className='ceo-profile-pic' src={Imageceo} alt="CEO Profile" />
        </div>
        <div className='div-2-note'>
          <Typography variant= {isPortrait?"h4":"h3"} className='hello' style={{position:"relative",fontFamily:"myFont-2"}}>
            Hello !!
          </Typography>
          <Typography style={{fontFamily:"myfont-light",fontWeight:"600"}} paragraph>
            Since our inception in 1997, our architectural and engineering firm has been guided by a visionary commitment to crafting spaces that seamlessly blend aesthetics with functionality. We are fueled by a passion for embracing cultural richness and contemporary trends, ensuring originality and innovation in every project.
          </Typography>
          <Typography style={{fontFamily:"myfont-light",fontWeight:"600"}} paragraph>
            Since our inception in 1997, our architectural and engineering firm has been guided by a visionary commitment to crafting spaces that seamlessly blend aesthetics with functionality. We are fueled by a passion for embracing cultural richness and contemporary trends, ensuring originality and innovation in every project.
            <br />Thank you for being part of our journey. Together, let's continue shaping spaces that leave a lasting impact.
          </Typography>
          <Typography variant="h6"></Typography>
        </div>
      </div>
    </Paper>
  );
};

export default Note;
