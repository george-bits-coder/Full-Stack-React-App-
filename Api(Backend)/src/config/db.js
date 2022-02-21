const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect("mongodb+srv://newuser123:qaz123@cluster0.9ssus.mongodb.net/test");
};
