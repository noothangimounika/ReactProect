import React, { useState, useEffect } from 'react';
import './QuizApp.css';

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars"
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "J.K. Rowling"],
    answer: "Harper Lee"
  }
];

const QuizApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [timer, setTimer] = useState(15); // 15 seconds per question
  const [quizOver, setQuizOver] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(countdown);
    } else {
      handleNextQuestion(); // Automatically move to the next question if time runs out
    }
  }, [timer]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === quizData[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    setSelectedOption('');
    setTimer(15);
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizOver(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption('');
    setTimer(15);
    setQuizOver(false);
  };

  return (
    <div className="quiz-container">
      {quizOver ? (
        <div className="quiz-result">
          <h2>Quiz Over!</h2>
          <p>Your Score: {score} / {quizData.length}</p>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div className="quiz-content">
          <h2>{quizData[currentQuestionIndex].question}</h2>
          <div className="options">
            {quizData[currentQuestionIndex].options.map((option, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name="option"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => handleOptionChange(option)}
                />
                {option}
              </label>
            ))}
          </div>
          <div className="quiz-footer">
            <button onClick={handleNextQuestion} disabled={!selectedOption}>
              Next
            </button>
            <p>Time Remaining: {timer} seconds</p>
            <p>Score: {score}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
