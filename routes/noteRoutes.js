const express = require('express')
const notesController = require( '../controllers/notesController.js')

const router = express.Router();

// Get all users
exports.getAllNotes=router.get('/', notesController.getAllNotes);
// Get a specific user
exports.getSinglenote=router.get('/:id', notesController.getSingleNote);


exports.createNote = router.post('/', notesController.createNote);