import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, IconButton } from '@mui/material';
import { NavigateNext, NavigateBefore } from '@mui/icons-material';
import '../css/carousel.css';
import { useTheme } from '@mui/material/styles';
import {useMediaQuery} from '@mui/material';

// Import your images using require
import Image1 from '../Images/carousel/pic-1.jpg';
import Image2 from '../Images/carousel/pic-2.jpg';
import Image3 from '../Images/carousel/pic-3.jpg';
import Image4 from '../Images/carousel/pic-4.jpg';
import Image5 from '../Images/carousel/pic-5.jpg';

const items = [
  {
    name: "Where Trends meet Timelessness",
    url: Image1,
  },
  {
    name: "Where Trends meet Timelessness",
    url: Image2,
  },
  {
    name: "Where Trends meet Timelessness",
    url: Image3,
  },
  {
    name: "Where Trends meet Timelessness",
    url: Image4,
  },
  {
    name: "Where Trends meet Timelessness",
    url: Image5,
  },
];

function CarouselExample() {
  return (
    <Carousel
      NextButton={<IconButton><NavigateNext /></IconButton>}
      PrevButton={<IconButton><NavigateBefore /></IconButton>}
      indicatorIconButtonProps={{ style: { display: 'none' } }} 
    >
      {items.map((item, index) => (
        <CarouselItem key={index} item={item} />
      ))}
    </Carousel>
  );
}

function CarouselItem({ item,id }) {
  const theme = useTheme();
  const isPortrait = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Paper
      className='paper'
      id={id}
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${item.url})`,
        backgroundSize: 'cover',
        color: 'white',
        margin:"0",
        [theme.breakpoints.down('md')]: {
          height: '50vh',
          width:"100%" // Adjust the height for screens smaller than 'md'
        },
     
      }}
      
    >
      <div className='carousel-div'  id={id}>
        <h1 className="h1-for-carousel" style={{ fontSize: isPortrait?"1.8em":"6em",fontFamily:"myFont-2",fontWeight:"100", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
        '@media (max-width: 500px)': {
          fontSize: '1.1em', // Adjust the font size for screens smaller than 500px
        },
      
      }}>{item.name}</h1>
        <p>{item.description}</p>
      </div>
    </Paper>
  );
}

export default CarouselExample;
