const notes = {} || null
const Note = require('../models/Note')

notes.renderNoteForm = (req, res) => {
    res.render('notes/new_notes')
}

notes.createNewNote = async (req, res) => {
    const { title, description } = req.body
    const note = await new Note({
        title, description
    })
    await note.save()
    res.redirect('/notes/all')
}

notes.renderNotesAll = async (req, res) => {
    const notes = await Note.find()
    res.render('notes/all_notes', {notes})
}

notes.renderEditForm = async (req, res) => {
    const note = await Note.findById(req.params.id) 
    res.render('notes/edit_notes', { note })
}

notes.updateNote = async (req, res) => {
    const { title, description } = req.body
    const note = await Note.findByIdAndUpdate(req.params.id, { title, description })
    res.redirect('/notes/all')

}

notes.deleteNote = async (req, res) => {
    const id = req.params.id
    await Note.findByIdAndDelete(id)
    res.redirect('/notes/all')
}


module.exports = notes
