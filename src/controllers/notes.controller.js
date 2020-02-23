const notes = {} || null
const Note = require('../models/Note')

notes.renderNoteForm = (req, res) => {
    res.render('notes/new_notes')
}

notes.createNewNote = async (req, res) => {
    const { title, description } = req.body
    const note = await new Note({
        title, description })
    note.user = req.user.id
    await note.save()

    req.flash('success_msg', 'Note add success')
    res.redirect('/notes/all')
}

notes.renderNotesAll = async (req, res) => {
    const notes = await Note.find({ user: req.user.id }).sort({ createdAt: 'desc' })
    res.render('notes/all_notes', {notes})
}

notes.renderEditForm = async (req, res) => {
    const note = await Note.findById(req.params.id) 
    if (note.user != req.user.id) {
        req.flash('error_msg', 'Not Authorized!')
        return res.redirect('/notes/all')
    }
    res.render('notes/edit_notes', { note })
}

notes.updateNote = async (req, res) => {
    const { title, description } = req.body
    await Note.findByIdAndUpdate(req.params.id, { title, description })
    req.flash('success_msg', 'Note update success')

    res.redirect('/notes/all')

}

notes.deleteNote = async (req, res) => {
    const id = req.params.id
    await Note.findByIdAndDelete(id)
    req.flash('success_msg', 'Note delete success')
    res.redirect('/notes/all')
}


module.exports = notes
