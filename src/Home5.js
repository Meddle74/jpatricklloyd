import React from 'react';
import Navbar from './component/Navbar/Navbar';
import RBanner from './component/Banner/RippleBanner';
import About from './component/About';
import Service from './component/Service';
import Portfolio from './component/Portfolio/Portfolio';
import Testimonial from './component/Testimonial/Testimonial';
import Clientslogo from './component/Clientslogo';
import Blog from './component/Blog/Blog';
import Contact from './component/Contact';
import Skill from './component/Skill/Skill';
import Footer from './component/Footer';
import jhonData from './component/jhonData';

export const Home5 = () => (
  <div className="body_wrapper">
    <Navbar mainlogo="logo2.png" stickylogo="logo.png"/>  
    <RBanner jhonData={jhonData} bClass="banner_shap" imag="man.jpg" textLeft="text-left"/>
    <About aClass="about_area" jhonData={jhonData}/> 
    <Service wClass="work_area" jhonData={jhonData}/>
    <Portfolio/>
    <Skill/>
    <Testimonial/>
    <Clientslogo/>
    <Blog/>
    <Contact jhonData={jhonData}/>
    <Footer jhonData={jhonData}/>
  </div>
)

