const { User, Room } = require("../models/userModel");

exports.register = async (req, res) => {
  try {
    const { username, useremail, password } = req.body;
    const newUser = new User({ username, useremail, password });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.enterRoom = async (req, res) => {
  try {
    const { username, room } = req.body;
    const newRoomEntry = new Room({ username, room });
    await newRoomEntry.save();
    res.status(201).json({ message: "User Entered Room successfully" });
  } catch (error) {
    console.error("Error entering room:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
