const asyncHandler = require("express-async-handler");
const User = require("../Models/userModel");
/**
 * @desc - Get all users
 * @route GET /api/users
 * @access public
 */
const getUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
};

/**
 *
 * @desc Get one user using id
 * @route GET /api/users/:id
 * @access public
 */
const getUser = async (req, res) => {
  res.send(`Get user with id ${req.params.id}`);
};

/**
 *
 * @desc Add one user
 * @route POST /api/users/
 * @access public
 */
const addUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const user = await User.create({
    name,
    email,
    password,
  });
  res.status(201).json(user);
};

/**
 * @desc Upddate one user using id
 * @route PUT /api/users/:id
 * @access public
 */
const updateUser = async (req, res) => {
  res.send(`Update user with id ${req.params.id}`);
};

/**
 * @desc Delete one user using id
 * @route DELETE /api/users/:id
 * @access public
 */
const deleteUser = async (req, res) => {
  res.send(`Delete user with id ${req.params.id}`);
};

module.exports = { getUsers, getUser, addUser, updateUser, deleteUser };
