import React, { useState } from 'react';
import '../App.css';

const Quiz = () => {
  const [questionIndex, setQuestionIndex] = useState(0); // Track current question index
  const [score, setScore] = useState(0); // Track score of the user
  const questions = [
    {
      question: 'What is 2 + 2?',
      options: ['3', '4', '5'],
      answer: '4',
    },
    {
      question: 'What is the capital of France?',
      options: ['Berlin', 'Madrid', 'Paris'],
      answer: 'Paris',
    },
    {
      question: 'What is 10 - 5?',
      options: ['3', '5', '7'],
      answer: '5',
    },
  ];

  const handleAnswer = (answer) => {
    if (answer === questions[questionIndex].answer) {
      setScore(score + 1); // Increment score if the answer is correct
    }
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1); // Go to the next question
    }
  };

  if (questionIndex >= questions.length) {
    return (
      <div className="quiz-completed">
        <h2>Quiz Completed!</h2>
        <p>Your score: {score} out of {questions.length}</p>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h2>{questions[questionIndex].question}</h2>
      <div className="options-container">
        {questions[questionIndex].options.map((option, index) => (
          <div className="option" key={index}>
            <input
              type="radio"
              id={`option-${index}`}
              name="answer"
              onClick={() => handleAnswer(option)}
            />
            <label htmlFor={`option-${index}`}>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
