import React from 'react'
import Header from '../Header/Header';
import about_style from '../About/about_style';

function About() {  
  document.title = "About Us - Sparxa Software Solution Pvt. Ltd."
  

  const about_style_class = about_style();
  return (
    <>
      <Header />
      <div 
      className={about_style_class.about_heading}
      >
      About Us
      </div>
    </>
  )
}

export default About;
