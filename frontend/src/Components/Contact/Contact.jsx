import React from 'react'
import Header from '../Header/Header';
import contact_style from '../Contact/contact_style';

function Contact() {
  document.title = "Contact Us - Sparxa Software Solution Pvt. Ltd."
  const contact_style_class = contact_style();
  return (
    <>
      <Header />
      <div 
      className={contact_style_class.contact_heading}
      > Contact Us</div>
    </>
  );
}

export default Contact;
