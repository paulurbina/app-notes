const { Router } = require('express')
const router = Router()

const { renderNoteForm,
    createNewNote,
    renderNotesAll,
    renderEditForm,
    updateNote,
    deleteNote
} = require('../controllers/notes.controller')

router.get('/notes/add', renderNoteForm)
router.post('/notes/new-note', createNewNote)
router.get('/notes/all', renderNotesAll)
router.get('/notes/edit/:id', renderEditForm)
router.put('/notes/edit/:id', updateNote)
router.delete('/notes/delete/:id', deleteNote)

updateNote

module.exports = router
