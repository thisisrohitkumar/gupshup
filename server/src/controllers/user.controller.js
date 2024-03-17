const bcrypt = require("bcryptjs");
const User = require("../models/user.model");

const handleGetAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json(users);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const handleCreateNewUser = async (req, res) => {
  
  const { fullname, email, password, rollno, course, bio, gender, profileImgURL } = req.body

  const salt = await bcrypt.genSalt(10);

  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    await User.create({ 
      fullname,
      email,
      password: hashedPassword,
      rollno,
      course,
      bio,
      gender,
      profileImgURL
     });

    return res.status(201).json({ msg: "New user created successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const handleDeleteUser = async (req, res) => {
  try {
    await User.deleteOne({_id: req.params.id});
    return res.status(200).json({msg: 'User deleted successfully'});
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  handleGetAllUsers,
  handleCreateNewUser,
  handleDeleteUser
};
