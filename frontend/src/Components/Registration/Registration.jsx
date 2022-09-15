import React, { useState } from "react";
import Registration_Image from "../../Images/registration_page.PNG";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
// import { AiFillInstagram } from "react-icons/fa";
// import { AiFillFacebook } from "react-icons/fa";
// import { AiFillGoogleCircle } from "react-icons/fa";
// import { AiFillLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router";
// import { useEffect } from "react";
import Axios from 'axios';
import {APIs} from "../../APIs/api";


function Registration() {
  document.title = "Sparxa Software Solution Pvt. Ltd.";
  let Navigator = useNavigate();
  const intitialstate = {
    name: "",
    email: "",
    password: "",
    mobile: "",
    confirm_password: "",
  };
  const [details, setDetails] = useState(intitialstate);
  const [errors, setErrors] = useState({});

  const Error_Validate = (formValues) => {
    let errors = {};

// debugger;
    // Validation for name.
    if (formValues.name === "" ) {
      errors.name = "Name is required!";
      // return errors;
    }
    else if (formValues.name.length < 3 || formValues.name.length >= 20) {
        errors.name = "Please enter name between 3 to 20 characters!";
        // return errors;
    }
    else if (!isNaN(formValues.name)) {
        errors.name = "Only characters allowed in name!";
    //     // return errors;
    }

    // Validation for email.
    let emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let emailstr = formValues.email;
    let validEmail = emailpattern.test(emailstr);

    if (formValues.email === "") {
      errors.email = "Email is required!";
      // return errors;
    }
    else if(!validEmail) {
        errors.email = "Enter valid email id!";
        // return errors;
    }

    //Validation for mobile no.
    if (formValues.mobile === "") {
      errors.mobile = "Mobile no. is required!"
      // return errors;
    }
    else if (isNaN(formValues.mobile)) {
      errors.mobile = "Only numbers allowed in mobile!";
      // return errors;
  }
    else if (!(formValues.mobile.length === 10)) {
        errors.mobile = "Enter 10 digit mobile no!";
        // return errors;
    }

    //Validation for password.
    let passwordpattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@#.$!^%*?&]{8,20}$/;
      let passwordstr = formValues.password;
      let validPassword = passwordpattern.test(passwordstr);

    if (formValues.password === "") {
      errors.password = "Password is required!";
      // return errors;
    }
    else if (!validPassword) {
        errors.password = "Password must be in 8 - 20 character and containt atleast 1 Number, 1 Special Symbol, 1 Uppercase & 1 Lowercase character!";
        // return errors;
    }
  
    //Validation for Confirm password
    if (formValues.confirm_password === "") {
      errors.confirm_password = "Confirm password is required!";
      // return errors;
    }
    else if (!(formValues.password === formValues.confirm_password)) {
        errors.confirm_password = "Password must be same as above password!";
        // return errors;
    }
    setErrors(errors)
    return Object.entries(errors).length > 0;
  };


  const onSubmitClick = (e) => {
    if(!Error_Validate(details)){
      const { name, email, mobile, password, /*confirm_password*/} = details;
      e.preventDefault();
      console.log("details:--", details);
  
      Axios.post(APIs.addEmployee, { name, email, mobile, password}).then((response) => {
        console.log("Registration successfull"); 
      })
      .catch((e) => { 
          console.log(e);
        })
        Navigator("/login", { replace: true });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const tempDetails=({...details,[name]:value})
    setDetails(tempDetails);
  };

  return (
    <>
      <div className="home_style">
        <img
          src={Registration_Image}
          alt="Registration Img"
          className="registration_img"
        />
        <Box
          className="registration_form"
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "30ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <Typography id="text_home_regis">Welcome to Spraxa!</Typography>
          <Typography id="text_home">Registration your account</Typography>
          <div>
            <TextField
              // id="outlined-basic"
              id="name"
              type="text"
              label="Name"
              name="name"
              variant="outlined"
              className="input_field"
              onChange={handleChange}
              required
            />
            {errors.name ? (<p className="clear_errors">{errors.name}</p>) : ("")}
          </div>
          <div>
            <TextField
              // id="outlined-basic"
              id="email"
              type="email"
              label="Email ID"
              name="email"
              variant="outlined"
              className="input_field"
              onChange={handleChange}
              required
            />
            {errors.email ? (<p className="clear_errors">{errors.email}</p>) : ("")}
          </div>
          <div>
            <TextField
              // id="outlined-basic"
              id="mobile"
              type="tel"
              label="Moblie No."
              variant="outlined"
              name="mobile"
              maxLength="10"
              className="input_field"
              onChange={handleChange}
              required
            />
            {errors.mobile ? (<p className="clear_errors">{errors.mobile}</p>) : ("")}
          </div>
          <div>
            <TextField
              // id="outlined-basic"
              id="password"
              label="Password"
              type="password"
              name="password"
              variant="outlined"
              className="input_field"
              onChange={handleChange}
              required
            />
            {errors.password ? (<p className="clear_errors">{errors.password}</p>) : ("")}
          </div>
          <div>
            <TextField
              // id="outlined-basic"
              id="confirm_password"
              label="Confirm Password"
              type="password"
              name="confirm_password"
              variant="outlined"
              className="input_field"
              onChange={handleChange}
              required
            />
            {errors.confirm_password ? (<p className="clear_errors">{errors.confirm_password}</p>) : ("")}
          </div>
          {/* <Link to="/login" id="submit_link"> */}
          <Button variant="contained" id="submit_btn" onClick={onSubmitClick}>
            Submit
          </Button>
          {/* </Link> */}
          <Typography className="login_link">
            <p>Already have an account?</p>
            <Link to="/Login" id="login_btn">
              Login
            </Link>
          </Typography>

          {/* <div className="api_app_login">Create account with<AiFillFacebook /><AiFillInstagram /><AiFillGoogleCircle /><AiFillLinkedin /></div> */}
        </Box>
      </div>
    </>
  );
}

export default Registration;
