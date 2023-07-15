const express = require('express')
const bodyParser= require( 'body-parser')
const UR = require('./routes/userRoutes.js')
const Notes = require('./routes/noteRoutes.js')
const app = express();
const router = express.Router();
const port = 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);



 
// Parse incoming JSON data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use userRoutes for '/users' endpoint
app.use('/users',UR.getSingleUsers);
//Use NotesRoutes for '/notes' endpoint
app.use('/notes',Notes.getAllNotes);


});
