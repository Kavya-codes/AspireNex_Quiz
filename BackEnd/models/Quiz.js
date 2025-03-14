const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true,
  },
  options: [String],
  correctAnswer: {
    type: String,
    required: true,
  },
});

const QuizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  questions: [QuestionSchema],
});

module.exports = mongoose.model('Quiz', QuizSchema);
