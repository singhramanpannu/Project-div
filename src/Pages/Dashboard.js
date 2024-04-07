import React from 'react'
import Navbar from '../Components/Navbar'
import CarouselComponent from '../Components/Carousel'
import Slogan from '../Components/slogan'
import '../css/dashboard.css';

import ServicesComponent from '../Components/Services';
import PartnersSlider from '../Components/Partners';
import AboutCompany from '../Components/About-comapany';
import  Note from '../Components/note';
import Contacts from '../Components/contacts';
import ScrollableComponent from '../Components/scrollableform';
const Dashboard = () => {
  return (
    <div className='Dashboard-container'>
      <Navbar></Navbar>
      <CarouselComponent></CarouselComponent>
      <ScrollableComponent></ScrollableComponent>
      <Slogan></Slogan>
      <ServicesComponent></ServicesComponent>
      <PartnersSlider></PartnersSlider>
      <AboutCompany></AboutCompany>
      <Note></Note>
      <Contacts></Contacts>
    </div>
  )
}

export default Dashboard
