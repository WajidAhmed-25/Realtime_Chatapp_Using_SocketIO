const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  useremail: String,
  password: String
});


const roomSchema = new mongoose.Schema({
  username: String,
  room:String,
});


const User = mongoose.model("User", userSchema);
const Room = mongoose.model("Room", roomSchema);

// module.exports = User
// module.exports = Room;


module.exports = { User, Room };
