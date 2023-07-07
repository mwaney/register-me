const asyncHandler = require("express-async-handler");
const User = require("../Models/userModel");
/**
 * @desc - Get all users
 * @route GET /api/users
 * @access public
 */
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

/**
 *
 * @desc Get one user using id
 * @route GET /api/users/:id
 * @access public
 */
const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(400);
    throw new Error(`User with id ${req.params.id} not found!!!`);
  }
  res.status(200).json(user);
});

/**
 *
 * @desc Add one user
 * @route POST /api/users/
 * @access public
 */
const addUser = asyncHandler(async (req, res) => {
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
});

/**
 * @desc Upddate one user using id
 * @route PUT /api/users/:id
 * @access public
 */
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(400);
    throw new Error(`User with id ${req.params.id} not found!!!`);
  }

  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedUser);
});

/**
 * @desc Delete one user using id
 * @route DELETE /api/users/:id
 * @access public
 */
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(400);
    throw new Error(`User with id ${req.params.id} not found!!!`);
  }

  await User.deleteOne();
  res.status(200).json(user);
});

module.exports = { getUsers, getUser, addUser, updateUser, deleteUser };
