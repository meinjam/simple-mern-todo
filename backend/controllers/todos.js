const todosRouter = require('express').Router();
const { Todo, validate } = require('../models/todo');
const { responseMessage } = require('../utils/response.message');

todosRouter.get('/', (request, response) => {
  Todo.find({}).then((notes) => {
    response.json(notes);
  });
});

todosRouter.post('/', async (request, response, next) => {
  const { error } = validate(request.body);
  if (error) {
    return response.status(400).send(error.details[0].message);
  }

  const body = request.body;

  const note = new Todo({
    name: body.name,
    is_completed: body.is_completed || false,
  });

  const savedNote = await note.save();
  response.json(responseMessage(true, 'Todo added successfully.', savedNote));
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
      response.json(responseMessage(true, 'Todo updated successfully.', updatedNote));
    })
    .catch((error) => next(error));
});

todosRouter.delete('/:id', (request, response, next) => {
  const id = request.params.id;

  Todo.findByIdAndRemove(id)
    .then((result) => {
      // response.status(204).end();
      // response.status(200).json({
      //   success: true,
      //   message: 'Todo deleted successfully.',
      // });

      response.json(responseMessage(true, 'Todo deleted successfully.'));
    })
    .catch((error) => next(error));
});

module.exports = todosRouter;
