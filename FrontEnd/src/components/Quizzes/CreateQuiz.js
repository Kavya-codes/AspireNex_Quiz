import React, { useState } from 'react';
import { createQuiz } from '../../services/quizService'; // Assuming quizService handles API calls

const CreateQuiz = () => {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState([{ question: '', options: ['', '', ''], correctAnswer: '' }]);
  const [error, setError] = useState(null);

  const handleAddQuestion = () => {
    setQuestions([...questions, { question: '', options: ['', '', ''], correctAnswer: '' }]);
  };

  const handleQuestionChange = (index, event) => {
    const { name, value } = event.target;
    const newQuestions = [...questions];
    newQuestions[index][name] = value;
    setQuestions(newQuestions);
  };

  const handleOptionChange = (questionIndex, optionIndex, event) => {
    const { value } = event.target;
    const newQuestions = [...questions];
    newQuestions[questionIndex].options[optionIndex] = value;
    setQuestions(newQuestions);
  };

  const handleCorrectAnswerChange = (questionIndex, event) => {
    const { value } = event.target;
    const newQuestions = [...questions];
    newQuestions[questionIndex].correctAnswer = value;
    setQuestions(newQuestions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Prepare quiz data to send to backend
      const quizData = {
        title,
        questions
      };

      const newQuiz = await createQuiz(quizData); // Replace with actual API call
      console.log('Quiz created successfully:', newQuiz);
      // Optionally handle redirection or notification upon successful quiz creation
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h3>Create Quiz</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Quiz Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <hr />
        {questions.map((question, index) => (
          <div key={index}>
            <label htmlFor={`question${index + 1}`}>Question {index + 1}</label>
            <input
              type="text"
              id={`question${index + 1}`}
              name="question"
              value={question.question}
              onChange={(e) => handleQuestionChange(index, e)}
              required
            />
            <br />
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex}>
                <label htmlFor={`option${optionIndex + 1}`}>
                  Option {optionIndex + 1}
                </label>
                <input
                  type="text"
                  id={`option${optionIndex + 1}`}
                  value={option}
                  onChange={(e) => handleOptionChange(index, optionIndex, e)}
                  required
                />
              </div>
            ))}
            <label htmlFor={`correctAnswer${index + 1}`}>Correct Answer</label>
            <input
              type="text"
              id={`correctAnswer${index + 1}`}
              value={question.correctAnswer}
              onChange={(e) => handleCorrectAnswerChange(index, e)}
              required
            />
            <hr />
          </div>
        ))}
        <button type="button" onClick={handleAddQuestion}>
          Add Question
        </button>
        <button type="submit">Create Quiz</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default CreateQuiz;
