const User = require('../models/UserSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.signUpUser = async (req, res) => {
    try { 
      const email = req.body.email;
      const password = req.body.password;
      const role = req.body.role;

      const hashedPassword = await bcrypt.hash(password , 10);

      const user = new User({
        email : email,
        password : hashedPassword,
        role : role
      });
      await user.save();
      res.status(201).json(user);
      console.log('new user created :' , user);
    } catch (error) {
      res.status(400).json(error);
    }
  };


  exports.signInUser = async (req , res) => {
    try {
      const { email, password } = req.body;
      const existingUser = await User.findOne({ email });
  
      if (!existingUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const isMatch = await bcrypt.compare(password, existingUser.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      // Generate a JWT token
      const token = jwt.sign(
        { id: existingUser._id, email: existingUser.email },
        'supersupersecret', // Replace with your JWT secret key
        { expiresIn: '1h' }
      );
  
      // Return the signed JWT token
      res.status(200).json({ token, user: existingUser });
      console.log('User signed in:', existingUser);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };
  
  exports.getUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  };
  
  exports.getUser = async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json('user not found');
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  };
  
  exports.updateUser = async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body);
      if (!user) {
        return res.status(404).json('user not found');
      }
      res.status(200).json(user);
      console.log('user Updated :' , user);
      
    } catch (error) {
      res.status(400).json(error);
    }
  };
  
  exports.deleteUser = async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) {
        return res.status(404).json("user not found");
      }
      res.status(200).json(user);
      console.log('user deleted');
      
    } catch (error) {
      res.status(500).json(error);
    }
  };