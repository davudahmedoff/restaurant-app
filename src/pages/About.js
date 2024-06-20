import React from 'react';
import AboutBody from '../components/AboutBody';
import Aboutimage from '../components/Aboutimage';
import Header from '../components/Header';
import Team from '../components/Team';
import Footer from "../components/Footer";


const About = () => {
  return (
    <div>
      <Header/>
      <Aboutimage/>
      <AboutBody/>
     <Team/>
     <Footer/>
    </div>
  )
}

export default About
