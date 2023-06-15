const User = require('../Models/userModel.js');

// Mock data
const users = [
  new User(1, 'John Doe', 'john@example.com'),
  new User(2, 'Jane Smith', 'jane@example.com'),
  new User(3, 'Marlon Tamo', 'marlon@gmail.com'),
  new User(4, 'Mary Jane Bueno', 'jane@gmail.com'),
];
// Get all users
exports.getAllUsers = (req, res) => {
  res.json(users);
},
// Get a specific user
exports.getUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(user => user.id === userId);


  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
};
