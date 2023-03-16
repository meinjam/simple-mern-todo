const mongoose = require('mongoose');
const Joi = require('joi');

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 5,
    required: true,
  },
  is_completed: Boolean,
});

todoSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const validateTodo = (todo) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(100).required().label('todo'),
  });

  return schema.validate(todo);
};

const Todo = mongoose.model('Todo', todoSchema);

module.exports = {
  Todo,
  validate: validateTodo,
};
