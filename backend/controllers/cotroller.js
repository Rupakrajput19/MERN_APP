import Employee from "../models/employee.js";
// import loginAPI from "../models/login.js";

export const addEmployee = (req, res) => {
  const { name, email, mobile, password } = req.body;
  if (!name || !email || !mobile || !password) {
    res.json({ message: "Invalid data" });
  }
  const empData = new Employee({
    name: name,
    email: email,
    mobile: mobile,
    password: password,
  });
  empData
    .save()
    .then((val) => {
      return res.json({ msg: "Employee Added Successfully.", val: val });
    })
    .catch((err) => {
      return res.json({ message: "Unable to add Employee Details.", error: err });
    });
};

export const getEmployee = (req, res) => {
  // Employee.findById({ _id : req.query.id })
  Employee.find()
    .then((result) => {
      res.json({ message: "Data fetched successfully", data: result });
    })
    .catch((err) => {
      res.json({ message: "Something went wrong.", error: err });
    });
};

export const deleteEmployee = (req, res) => {
  console.log("deleteAPI", req.params);
  console.log("deleteAPI", { _id: req.query.id });
  // Employee.deleteMany({})
  // const id = "63206230c35fb15d5ae5e51e";
  Employee.findByIdAndDelete({ _id: req.query.id })
    .then(() => {
      res.send({ message: "Employee details deleted Sucessfully." });
    })
    .catch((err) => {
      res.send({ message: "Employee details not found.", error: err });
    });
};

export const updateEmployee = (req, res) => {
  console.log("UpdateAPI", { _id: req.query.id });
  Employee.findByIdAndUpdate({ _id: req.query.id },
    {
      $set: {
        name: req.body.name,
      },
    }
  )
    .then(() => {
      res.send({ message: "Employee details updated Sucessfully" });
    })
    .catch((err) => {
      res.send({ message: "Employee details not found.", error: err });
    });
};

export const loginAPI = (req, res) => {
  const { email, password } = req.body;
  
  console.log("User details:", req.body);
  console.log("User details:", { email : email});

  Employee.find({ email : email, password: password })
    .exec()
    .then((result) => {
      if ((result.length) > 0) {
        console.log("result -> ", result)
        res.json({ message: "User logged In..", success: true});
      }
      else {
        console.log("user not found->")
        res.json({ message: "Invalid credentials.", success: false});
      }
    })
    .catch((err) => {
      res.json({ message: "Something went wrong.", error: err });
    });
};
