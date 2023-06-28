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
  },
  exports.createNote = async(req, res) =>{
    const bodyParams = req.body
    const title = bodyParams.title;
   const contents =bodyParams.contents;
       const noteCreated = await noteDB.createNote(title,contents);
       res.status(201).json(noteCreated)
  },
  exports.updateNote = async(req, res) =>{
    const content = req.body.contents;
    const title = req.body.title;
    const noteId = req.params.id;
    const updatedNote =await noteDB.updateNote(noteId,title,content)
    res.status(200).json(updatedNote)
  }
  