import React from "react";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

// import { Button } from "@mui/material";

// const buttonstyle = {
//   width: "100",
//   margin: "50px 100px",
//   textAlign: "center",
//   color: "white",
//   background: "green",
// };

const styletablehead = {
  fontweight:"bold",
  border:"2px solid #bbb"
};

function emp_Data(Sno, empname, empid, contact, position) {
  return { Sno, empname, empid, contact, position };
}

const rows = [
  emp_Data(1, "Ritu Kumar", 855159, 9876543210, "Software Developer"),
  emp_Data(2, "Rupak Rajput", 345237, 9876543210, "Backend Developer"),
  emp_Data(3, "Vinod Kumar", 852262, 9876543210, "Frontend Developer"),
  emp_Data(4, "Chetan Sharma", 215305, 9876543210, "Fullstack Developer"),
  emp_Data(5, "Rajesh Yadav", 963356, 9876543210, "Testing Developer"),
];

function EmployeeDataGrid(props) {
  document.title = "Home - Sparxa Software Solution Pvt. Ltd."
  return (
    <>
    <Header/>
      <Typography
        variant="h3"
        className="typo_heading"
        style={{ textAlign: "center" , margin:"50px 0 40px 0", textDecoration:"underline", color:"white"}}
      >
        {props.grid_name}-Details
      </Typography>

      <TableContainer component={Paper} style={{ height: "auto", width: "95%", margin: "auto" , background:"white", border:"2px solid black"}}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" style={styletablehead}>S.No.</TableCell>
              <TableCell align="center" style={styletablehead}>Employee Name</TableCell>
              <TableCell align="center" style={styletablehead}>Employee ID</TableCell>
              <TableCell align="center" style={styletablehead}>Contact</TableCell>
              <TableCell align="center" style={styletablehead}>Position</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow>
                <TableCell align="center">{row.Sno}</TableCell>
                <TableCell align="center">{row.empname}</TableCell>
                <TableCell align="center">{row.empid}</TableCell>
                <TableCell align="center">{row.contact}</TableCell>
                <TableCell align="center">{row.position}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Link to="/Studentgrid" id="grid_links"><Button variant="outlined" id="grid_links_btn">Student-Grid</Button></Link>
    </>
  );
}

export default EmployeeDataGrid;
