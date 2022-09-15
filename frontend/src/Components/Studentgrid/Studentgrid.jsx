import React from "react";
import { Typography, Button } from "@mui/material";
// import {Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

const columns = [
  { field: "sno", headerName: "S.No.", width: 170 },
  { field: "name", headerName: "Name", width: 170 },
  { field: "id", headerName: "Students ID", width: 170 },
  { field: "course", headerName: "Course", width: 170 },
  { field: "contact", headerName: "Contact No.", width: 170 },
  { field: "address", headerName: "Address", width: 170 },
];

const rows = [
  {
    sno: 1,
    name: "Ritu Kumar",
    id: 95112,
    course: "MCA",
    contact: 9876543210,
    address: "Delhi",
  },
  {
    sno: 2,
    name: "Rupak",
    id: 80043,
    course: "B.tech",
    contact: 9876543210,
    address: "U. P.",
  },
  {
    sno: 3,
    name: "Pranav",
    id: 47851,
    course: "MCA",
    contact: 9876543210,
    address: "Bihar",
  },
  {
    sno: 4,
    name: "Vincent",
    id: 98541,
    course: "BCA",
    contact: 9876543210,
    address: "Mumbai",
  },
  {
    sno: 5,
    name: "Abhishek",
    id: 75454,
    course: "B.com",
    contact: 9876543210,
    address: "Delhi",
  },
  {
    sno: 6,
    name: "Durgesh",
    id: 78954,
    course: "MCA",
    contact: 9876543210,
    address: "Ghaziabad",
  },
  {
    sno: 7,
    name: "Rohit Kumar",
    id: 65454,
    course: "B.A.",
    contact: 9876543210,
    address: "Hapur",
  },
  {
    sno: 8,
    name: "Akash Sharma",
    id: 15054,
    course: "B.tech",
    contact: 9876543210,
    address: "Noida",
  },
  {
    sno: 9,
    name: "Vijay Shah",
    id: 85254,
    course: "M.A.",
    contact: 9876543210,
    address: "Bihar",
  },
  {
    sno: 10,
    name: "Harish",
    id: 99454,
    course: "LLB",
    contact: 9876543210,
    address: "Delhi",
  },
];

function StudentDataGrid(props) {
  document.title = "Home - Sparxa Software Solution Pvt. Ltd."
  return (
    <>
      <Header />
      <div style={{ textAlign: "center" }}>
        <Typography
          variant="h3"
          className="main_heading"
          style={{
            margin: "50px 0 40px 0",
            color: "white",
            textDecoration: "underline",
          }}
        >
          {props.grid_name}-Details
        </Typography>
        <div
          style={{
            height: 400,
            width: "95%",
            margin: "auto",
            padding:"10px",
            background: "white",
            border: "2px solid black"
          }}
        >
          <DataGrid rows={rows} columns={columns} pageSize={[5]}/>
        </div>
      </div>
        <Link to="/Employeegrid" id="grid_links">
      <Button variant="outlined" id="grid_links_btn">
          Employee-Grid
      </Button>
        </Link>
    </>
  );
}

export default StudentDataGrid;
