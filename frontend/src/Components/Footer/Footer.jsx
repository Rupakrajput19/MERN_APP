import React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

const date= new Date();
const current_year = date.getFullYear();
  
const style_footer = {
    textAlign: "center",
    // position:"absolute",
    // bottom:"0",
    // right:"0",
    // left:"0"
    color:"white",
    width: "auto",
    margin: "auto",
    marginBottom: "20px",
    textDecoration: "underline"
  };

const Footer = () => {
  return (
    <>
        <Link>
      <Typography variant="body1" sx={style_footer}>
        Spraxa Solution Pvt. Ltd. &copy; {current_year}
      </Typography>
        </Link>
    </>
  )
}
export default Footer;