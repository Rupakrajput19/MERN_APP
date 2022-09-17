import React  from "react";
import { useState } from "react";
import Registration_Image from "../../Images/registration_page.PNG";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Axios from "axios";
import { APIs } from "../../APIs/api";

function Home() {
  document.title = "Sparxa Software Solution Pvt. Ltd.";
  const Navigator = useNavigate();
  const intitialstate = {
    email: "",
    password: "",
  };
  const [details, setDetails] = useState(intitialstate);
  const [errors, setErrors] = useState({});

  const Error_Validate = (formValues) => {
    let errors = {};

    // Validation for email.
    let emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let emailstr = formValues.email;
    let validEmail = emailpattern.test(emailstr);

    if (formValues.email === "") {
      errors.email = "Email is required!";
      // return errors;
    } else if (!validEmail) {
      errors.email = "Enter valid email id!";
      // return errors;
    }

    let passwordpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@#.$!^%*?&]{8,20}$/;
    let passwordstr = formValues.password;
    let validPassword = passwordpattern.test(passwordstr);

    if (formValues.password === "") {
      errors.password = "Password is required!";
      // return errors;
    } else if (!validPassword) {
      errors.password =
      "Password must be in 8 - 20 character and containt atleast 1 Number, 1 Uppercase , 1 Lowercase & 1 Special character!";
      // return errors;
    }

    setErrors(errors);
    return Object.entries(errors).length > 0;
  };

  const onSubmitClick = (e) => {
    if (!Error_Validate(details)) {
      const { email, password } = details;
      e.preventDefault();
      console.log("details:--", details);

      Axios.post(APIs.loginApi, { email, password })
        .then((result) => {
          console.log("Response from backend -> ", result);
          if (result.data && result.data.success) {
            Navigator("/Home", { replace: true });
          } else {
            setDetails(intitialstate);
            return swal({
              title: "Login Failed!",
              text: `"Invalid login credentials..." \n 'If you are new user please first registered your self.'`,
              icon: "error",
              button: "Try Again",
            });
          }
        })
        .catch((error) => {
          setDetails(intitialstate);
          alert(`Something went wrong ${error}`);
        });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const tempDetails = { ...details, [name]: value };
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
          <Typography id="text_home">Login your account</Typography>
          <TextField
            // id="outlined-basic"
            id="login_email"
            type="email"
            name="email"
            label="Email ID"
            variant="outlined"
            className="input_field"
            value={details.email}
            required
            onChange={handleChange}
          />
          {errors.email ? <p className="clear_error">{errors.email}</p> : ""}
          <TextField
            // id="outlined-basic"
            id="login_password"
            type="password"
            name="password"
            label="Password"
            variant="outlined"
            className="input_field"
            value={details.password}
            required
            onChange={handleChange}
          />
          {errors.password ? (
            <p className="clear_error">{errors.password}</p>
          ) : (
            ""
          )}
          {/* <Link to="/Home" id="submit_link"> */}
          <Button variant="contained" id="submit_btn" onClick={onSubmitClick}>
            Login
          </Button>
          {/* </Link> */}
          <Typography className="login_link">
            {/* <p></p> */}
            <Link to="/forgot_password" id="login_btn">
              Forgot your password?
            </Link>
          </Typography>
          <Typography className="login_link">
            <p>Don't have an account?</p>
            <Link to="/" id="login_btn">
              SingUp
            </Link>
          </Typography>
        </Box>
      </div>
      </>
  );
}

export default Home;
