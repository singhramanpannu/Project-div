import React from 'react';
import Slider from 'react-slick';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/partners-slider.css'; // Create this CSS file for styling if needed

const PartnersSlider = () => {
  const theme = useTheme();
  const isPortrait = useMediaQuery(theme.breakpoints.down('sm'));

  // Sample data for partner logos
  const partnerLogos = [
    require('../Images/logo/vardhman-group.jpg'), // Add .default to the require statement
    require('../Images/logo/fairmount.webp'),
    require('../Images/logo/oberoi-2.webp'),
    require('../Images/logo/pizza-bakers.png'),
    require('../Images/logo/subway.jfif'),
    require('../Images/logo/Itc-group.jfif'),
    // Add more logos as needed
  ];

  // Slick slider settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow:  3, // Display 2 slides in portrait mode, 4 in landscape
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div style={{
       
       height: "500px",
       display: "flex",
       flexDirection: "column",
       justifyContent: "center",
       alignItems: "center",
       
    }}>
      <Typography variant={isPortrait ? 'h6' : "h4"} sx={{
        textAlign: 'left',
        mb: 3,
        marginBottom: "20px",
        position: "relative",
        right: isPortrait ? "50px" : "400px",
        color: "#5c2018",
        alignItems: "center",
        fontFamily:"myFont"

 
      }}>
        Our Partners in Progress..
      </Typography>
      <Slider {...sliderSettings} style={{
        width: isPortrait ? "90%" : "80%",
        padding: "10px",
        margin: "20px",
        position: "relative",
        left: isPortrait ? '' : "30px",
       
       
        height: isPortrait?"200px":"",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
      }}>
        {partnerLogos.map((logo, index) => (
          <div key={index} className="partner-logo-container" style={{ display: "flex", alignItems: "center", justifyContent: "center",height: isPortrait?"100px":"",}}>
            <img src={logo} alt={`Partner Logo ${index}`} className="partner-logo" style={{position:"relative",left:isPortrait?"10px":"30px"}} />
          </div>
        ))}
      </Slider>
      <Typography variant= {isPortrait?"h5":"h4"} sx={{ textAlign: 'right', mb: 3, width: "98%",color:"#5c2018",position:"relative",top: isPortrait?"50px":"",fontFamily:"myFont-2" }}>
        ...and our list goes on
      </Typography>
    </div>
  );
};

export default PartnersSlider;
