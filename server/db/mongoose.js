var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://<elgun99>:<elgunCebo123>@ds139722.mlab.com:39722/todo' || 'mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
};
