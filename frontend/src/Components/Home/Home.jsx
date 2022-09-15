import React from 'react';
import Employeegrid from '../Employeegrid/Employeegrid';

function Home() {
  document.title = "Home - Sparxa Software Solution Pvt. Ltd."
  return (
    <>
      <Employeegrid grid_name="Employee's"/>
    </>
  );
}

export default Home;
