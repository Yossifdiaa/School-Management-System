const User = require('../models/UserSchema');


exports.createUser = async (req, res) => {
    try {
      const user = new User(req.body);
      await user.save();
      res.status(201).json(user);
      console.log('new user created :' , user);
    } catch (error) {
      res.status(400).json(error);
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
      const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
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