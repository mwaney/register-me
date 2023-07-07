/**
 * @desc - Get all users
 * @route GET /api/users
 * @access public
 */
const getUsers = (req, res) => {
  res.send("get all users");
};

/**
 *
 * @desc Get one user using id
 * @route GET /api/users/:id
 * @access public
 */
const getUser = (req, res) => {
  res.send(`Get user with id ${req.params.id}`);
};

/**
 *
 * @desc Add one user
 * @route POST /api/users/
 * @access public
 */
const addUser = (req, res) => {
  res.send("Add a new users");
};

/**
 * @desc Upddate one user using id
 * @route PUT /api/users/:id
 * @access public
 */
const updateUser = (req, res) => {
  res.send(`Update user with id ${req.params.id}`);
};

/**
 * @desc Delete one user using id
 * @route DELETE /api/users/:id
 * @access public
 */
const deleteUser = (req, res) => {
  res.send(`Delete user with id ${req.params.id}`);
};

module.exports = { getUsers, getUser, addUser, updateUser, deleteUser };
