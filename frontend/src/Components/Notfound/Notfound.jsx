import React from 'react';
import notfound_style from './notfound_style';


function NotFound() {
  document.title = "Sparxa Software Solution Pvt. Ltd."
  const notfound_class = notfound_style();
  return (
    <div className={notfound_class.style_notfound}>
      <h1>OOPS!</h1 ><br /><br />
      <h1 >404 Page Not Found!</h1>
    </div>
  );
}

export default NotFound;
