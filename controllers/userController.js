const User = require("../models/User");

exports.getAllUsers = async (req, res, next) => {
  const users = await User.find({});

  res.status(200).json({
    success: true,
    data: users,
  });
};

exports.createUser = async (req, res, next) => {
  const user = await User.create(req.body);

  res.status(201).json({
    success: true,
    data: user,
  });
};
