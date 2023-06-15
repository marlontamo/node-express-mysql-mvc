const express = require('express')
const userController = require( '../controllers/userController.js')

const router = express.Router();

// Get all users
exports.getAllUsers=router.get('/', userController.getAllUsers);
// Get a specific user
exports.getSingleUsers=router.get('/:id', userController.getUser);

