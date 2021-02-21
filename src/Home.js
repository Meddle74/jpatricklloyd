import React from 'react';
import Navbar from './component/Navbar/Navbar';
import TypeBanner from './component/Banner/TypeBanner';
import About from './component/About';
// import Service from './component/Service';
import Portfolio from './component/Portfolio/Portfolio';
import Contact from './component/Contact';
import Footer from './component/Footer';
import jhonData from './component/jhonData';


export const Home = () => (
  <div className="body_wrapper">
      <Navbar mContainer="custome_container" mainlogo="pl.png" stickylogo="pl.png"/>
      <TypeBanner jhonData={jhonData}/>
      <About aClass="about_area" jhonData={jhonData}/>
      <Portfolio/>
      <Contact jhonData={jhonData}/>
      <Footer jhonData={jhonData}/>
  </div>
)


