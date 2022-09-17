import User from "../models/SingUp.js";
// import loginAPI from "../models/login.js";

export const addUser = (req, res) => {
  const { name, email, mobile, password } = req.body;
  if (!name || !email || !mobile || !password) {
    res.json({ message: "Invalid data" });
  }
  const UserData = new User({
    name: name,
    email: email,
    mobile: mobile,
    password: password,
  });
  UserData
    .save()
    .then((val) => {
      return res.json({ msg: "User Added Successfully.", val: val });
    })
    .catch((err) => {
      return res.json({ message: "Unable to add User Details.", error: err });
    });
};

export const getUser = (req, res) => {
  // User.findById({ _id : req.query.id })
  User.find()
    .then((result) => {
      res.json({ message: "Data fetched successfully", data: result });
    })
    .catch((err) => {
      res.json({ message: "Something went wrong.", error: err });
    });
};

export const deleteUser = (req, res) => {
  console.log("deleteAPI", { _id: req.query.id });
  // User.deleteMany({})
  // const id = "63206230c35fb15d5ae5e51e";
  User.findByIdAndDelete({ _id: req.query.id })
    .then(() => {
      res.send({ message: "User details deleted Sucessfully." });
    })
    .catch((err) => {
      res.send({ message: "User details not found.", error: err });
    });
};

export const updateUser = (req, res) => {
  console.log("UpdateAPI", req.query);
  User.findByIdAndUpdate({ _id: req.query.id },
    {
      $set: {
        password: req.body.password,
      },
    }
  )
    .then(() => {
      res.send({ message: "User details updated Sucessfully" });
    })
    .catch((err) => {
      res.send({ message: "User details not found.", error: err });
    });
};

export const loginAPI = (req, res) => {
  const { email, password } = req.body;
  
  console.log("User details:", req.body);
  console.log("User details:", { email : email});

  User.find({ email : email, password: password })
    .exec()
    .then((result) => {
      if ((result.length) > 0) {
        console.log("result -> ", result)
        res.json({ message: "User logged In..", success: true});
      }
      else {
        console.log("User not found->")
        res.json({ message: "Invalid credentials.", success: false});
      }
    })
    .catch((err) => {
      res.json({ message: "Something went wrong.", error: err });
    });
};
