const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User.js");

// Register a new user
router.post("/register", async (req, res) => {
    console.log("Request for signup")
  const { username, email, password, role } = req.body;
  try {
    console.log(username, email, password, role)
    const user = new User({ username, email, password, role });
    await user.save();
    res.status(201).json({ msg: "User registered successfully" });
  } catch (error) {
    console.log(error)
    res.status(400).json({ msg: "Error registering user", error });
  }
});

// Login user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
  } catch (error) {
    console.log(error)
    res.status(400).json({ msg: "Error logging in", error });
  }
});

// Get user profile
router.get("/profile", async (req, res) => {
  try {
    const token = req.header("Authorization");
    if (!token) {
      return res.status(401).json({ msg: "No token, authorization denied" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");
    res.json(user);
  } catch (error) {
    res.status(400).json({ msg: "Error fetching profile", error });
  }
});

module.exports = router;
