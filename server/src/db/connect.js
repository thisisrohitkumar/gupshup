const mongoose = require("mongoose");

const connectToDB = async (URL) => {
  try {
    await mongoose.connect(URL);
    console.log('Connect to Database')
  } catch (error) {
    console.log("Error connecting to Database", error.message);
  }
};

module.exports = connectToDB;
