const { addnotehandler, getAllNotesHandler, getNotebyIdHandler, editNoteByIdHandler, deleteNoteByIdHandler } = require('./handler')
const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addnotehandler,
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNotebyIdHandler,
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler,
    }
];

module.exports = routes;