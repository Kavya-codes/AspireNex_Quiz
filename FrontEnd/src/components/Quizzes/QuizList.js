import React, { useState, useEffect } from 'react';
import { getQuizzes } from '../../services/quizService'; // Assuming quizService handles API calls

const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const quizzesData = await getQuizzes(); // Replace with actual API call
        setQuizzes(quizzesData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchQuizzes();
  }, []);

  if (loading) return <p>Loading quizzes...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div>
      <h3>Quiz List</h3>
      {quizzes.length === 0 ? (
        <p>No quizzes available.</p>
      ) : (
        <ul>
          {quizzes.map((quiz) => (
            <li key={quiz.id}>
              {quiz.title} - {quiz.questions.length} questions
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default QuizList;
