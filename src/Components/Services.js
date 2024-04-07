import React from 'react';
import { Card, CardContent, CardMedia, Typography, useMediaQuery, useTheme } from '@mui/material';

const ServicesComponent = ({id}) => {
  const theme = useTheme();
  const isPortrait = useMediaQuery(theme.breakpoints.down('md'));

  const servicesData = [
    { title: 'Architecture Design' , 
    description: ' Our architectural design services encompass the creation and transformation of buildings, emphasizing innovation and functionality. From Residential spaces that reflect individual lifestyles to cutting-edge Commercial structures, Industrial facilities for seamless operations, and Hospitality environments that evoke unforgettable experiences.',
     image: require('../Images/background/Architecture.jpg')  },
    { title: 'Engineering Design',
     description:"In the realm of Engineering Design, we specialize in crafting comprehensive solutions for civil, structural, mechanical, and electrical systems within buildings and structures. Our commitment lies in the seamless integration of diverse engineering disciplines to ensure projects are not only functional but also sustainable and resilient." ,
     image: require('../Images/background/Engineering-design.jpg')  },
    { title: 'Site Development', 
    description: 'Our Site Development services focus on optimizing the potential of every location. From strategic planning to meticulous execution, we create environments that not only meet but exceed expectations. ',
    image: require('../Images/background/site.jpg') },
    { title: 'Interior Designing', 
    description: 'Interior design is an art that transforms spaces into functional and visually captivating realms. We curate environments that harmonize color, furniture, decor, and layout to create living spaces that speak to both practicality and aesthetics. Every design tells a unique story, reflecting individual tastes and lifestyles.', image: require('../Images/background/Interior.jpg')  },
    { title: 'Landscape Design',
     description: 'Our Landscape Design services redefine outdoor spaces, incorporating artistry into planting, paving, and hardscaping. We craft environments that seamlessly integrate with architectural and natural elements, creating harmonious spaces that enchant and endure.',image: require('../Images/background/Landscape.jpg') },
    { title: 'Space Planning', 
    description: 'Space Planning is an art that transforms interiors into functional and aesthetically pleasing environments. Our approach involves meticulous arrangement of furniture, equipment, and elements within a space, creating a seamless blend of form and function.', image: require('../Images/background/space.jpg')  },
    { title: 'Structure Rehabilitation',
     description: 'Structural Strengthening and Restoration involve the precision enhancement and revival of damaged structures. Our expertise lies in improving load-carrying capacity and restoring structures to their original conditions.', image: require('../Images/background/structure.jpg') },
    { title: 'Sustainable Designing', 
    description: 'Sustainable Design is at the core of our commitment to creating structures that stand as testaments to efficiency and environmental responsibility. Our designs not only minimize energy consumption but also prioritize eco-friendly materials and practices, ensuring a lasting impact on both the environment and society.',image: require('../Images/background/sustainable.jpg')  },
    { title: 'Heritage Conservation',
     description: 'Heritage Conservation is our dedication to preserving cultural and historical assets. From iconic buildings to landmarks, our approach involves a meticulous blend of modern practices and preservation ethics.', image: require('../Images/background/heritage.jpg')  },
    
    // Add more services as needed
  ];

  return (
    <div className='services-div' id={id}>
      <div
      style=
      {{
       
        display:"flex",
        flexDirection:"column",
        alignItems:"flex-start",
        paddingLeft:"60px",
        justifyContent:"center",
        height: isPortrait?"160px":"300",
       
    
    
    }}
      >
        <Typography variant= {isPortrait?"h4":"h2"} sx={{ textAlign: 'left', mb: 3,color:"#5c2018",float:"left",fontFamily:"myFont",position:"relative",right:"40px",top:"10px"}}>
          We Excel at...
        </Typography>
      </div>
      <div >
        {servicesData.map((service, index) => (
          <Card
           
            key={index}
            sx={{
              border:"1px solid black",
              display: 'flex',
              flexDirection: isPortrait ? 'column' : 'row',
              width: isPortrait?"80%":"90%",
              margin: '0 auto', // Center the cards
              marginBottom: 16, // Adjust margin as needed
               // Minimum height of 250px
              height: isPortrait?450:280,
              border:"none",
              backgroundColor:"#f3e0dc",
              alignItems:"center",
              justifyContent:"space-around",
              borderRadius:"20px",
              padding:"10px"
            }}
          >
            <CardMedia
              component="img"
              alt={service.title}
              height={isPortrait ? '300' : 'auto'}
              image={service.image}
              sx={{ objectFit: 'fill', minWidth: '35%',border:"none",borderRadius:"20px",height:isPortrait?"35%":"90%" }}
            />
            <CardContent 
            sx={{ 
              minWidth: '50%' ,
              
              height:isPortrait?"55%":"80%",
              display:"flex",
              flexDirection:"column",
              alignItems:"center",
              
              
          
          
          }}>
              <Typography variant= {isPortrait?"h5":"h3"} component="div" 
              sx={{ 
                fontWeight: 'bold',
                 mb: 1,
                 position:"relative",
                 bottom:"10px",
                 color:"#5c2018",
                 fontSize: isPortrait?"1.3em":"2.5em",
                 fontFamily:"myFont"
                 }}>
                {service.title}
              </Typography>
              <Typography variant="body1" color="black" 
              sx={{
              
              alignItems:"center",
              textAlign: "justify",
              fontFamily:"myFont",
              color:"#5c2018",
              height:"60%",
              fontFamily:"myFont-light",
              fontWeight:"600",
              width:"90%",
              padding:"10px",
              fontSize: isPortrait?"13.5px":"16px",
              position:"relative",
                 bottom:"10px",
            }}>
                {service.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
      <div
      style=
      {{
       
        display:"flex",
        flexDirection:"column",
        alignItems:"flex-end",
        paddingRight:"60px",
        justifyContent:"center",
        height: isPortrait?"130":"150"
    
    
    }}
      >
        <Typography variant= {isPortrait?"h6":"h3"} sx={{ textAlign: 'center', mb: 3,fontFamily:"myFont-2",color:"#5c2018",float:"left",position:"relative",left:isPortrait?"50px":"",bottom:isPortrait?"40px":""}}>
          ..and the list goes on
        </Typography>
      </div>
    </div>
  );
};

export default ServicesComponent;
