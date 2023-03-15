const todosRouter = require('express').Router();
const Todo = require('../models/todo');

todosRouter.get('/', (request, response) => {
  Todo.find({}).then((notes) => {
    response.json(notes);
  });
});

todosRouter.post('/', async (request, response, next) => {
  const body = request.body;

  const note = new Todo({
    name: body.name,
    is_completed: body.is_completed || false,
  });

  const savedNote = await note.save();
  response.json(savedNote);
});

todosRouter.get('/:id', (request, response, next) => {
  const id = request.params.id;

  Todo.findById(id)
    .then((note) => {
      if (note) {
        response.json(note);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => {
      // console.log(error);
      // response.status(400).send({ error: 'malformatted id' });
      next(error);
    });
});

todosRouter.put('/:id', (request, response, next) => {
  const body = request.body;

  const note = {
    name: body.name,
    is_completed: body.is_completed,
  };

  Todo.findByIdAndUpdate(request.params.id, note, { new: true, runValidators: true, context: 'query' })
    .then((updatedNote) => {
      response.json(updatedNote);
    })
    .catch((error) => next(error));
});

todosRouter.delete('/:id', (request, response, next) => {
  const id = request.params.id;

  Todo.findByIdAndRemove(id)
    .then((result) => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

module.exports = todosRouter;
