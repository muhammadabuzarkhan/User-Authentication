const User = require('../model/User');
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');

const JWT_Token = process.env.JWT_Token;

// Create a User using: POST "/api/auth/signup"
exports.createUser = [
  body('name'),
  body('email'),
  body('password'),
  async (req, res) => {
  
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ error: "Email already exists" });
      }

    //   Hash Password 
      const salt = await bcrypt.genSalt(10);
      const hashpass = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashpass
      });

      const data = { user: { id: user.id } };
      const jwttoken = JWT.sign(data, JWT_Token);
      res.json({ jwttoken });

    } catch (error) {
      console.error("Error creating User:", error.message);
      res.status(500).send("Internal Server Error");
    }
  }
];

// Login User API: POST "/api/auth/login"
exports.loginUser = [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password cannot be blank').exists(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: "Please try to login with correct credentials" });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res.status(400).json({ error: "Please try to login with correct credentials" });
      }

      const data = { user: { id: user.id } };
      const authtoken = JWT.sign(data, JWT_Token);
      res.json({ authtoken });

    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
];
