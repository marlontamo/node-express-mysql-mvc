const noteDB = require('../DB/Database.js')


exports.getAllNotes = async (req, res) => {
    const notes = await noteDB.getNotes();
    console.log(notes)
    res.json(notes);
  },
  // Get a specific user
  exports.getSingleNote = async (req, res) => {
    const noteId = parseInt(req.params.id);

    const note = await noteDB.getSingleNote(noteId);
  
  
    if (note) {
      res.json(note);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  };
  