const User = require("../models/user.model");

const handleGetAllUsers = async (req, res) => {
  try {
    console.log("this is user controller");
    const users = await User.find({});
    return res.status(200).json(users);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const handleCreateNewUser = async (req, res) => {
  try {
    const newUser = await User.create({
      fullname: req.body.fullname,
      email: req.body.email,
      password: req.body.password,
      rollno: req.body.rollno,
      course: req.body.course,
      bio: req.body.bio,
    });

    console.log(newUser);

    return res.status(201).json({ msg: "New user created successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  handleGetAllUsers,
  handleCreateNewUser,
};
