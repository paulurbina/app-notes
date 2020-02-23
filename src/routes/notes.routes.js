const { Router } = require('express')
const router = Router()

const { renderNoteForm,
    createNewNote,
    renderNotesAll,
    renderEditForm,
    updateNote,
    deleteNote
} = require('../controllers/notes.controller')

const { isAuthenticated } = require('../helpers/auth')

router.get('/notes/add', isAuthenticated, renderNoteForm)
router.post('/notes/new-note', isAuthenticated, createNewNote)
router.get('/notes/all', isAuthenticated, renderNotesAll)
router.get('/notes/edit/:id', isAuthenticated, renderEditForm)
router.put('/notes/edit/:id' ,isAuthenticated, updateNote)
router.delete('/notes/delete/:id', isAuthenticated, deleteNote)

updateNote

module.exports = router
