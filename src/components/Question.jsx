import React from 'react';
import correctIcon from '../assets/icon-correct.svg';
import incorrectIcon from '../assets/icon-incorrect.svg';

export default function Question({
  question,
  numQuestions,
  index,
  dispatch,
  selectedOption,
  submitted,
  error,
}) {
  const correctAnswer = question.answer;

  const handleSubmit = () => {
    dispatch({type: 'SUBMIT_ANSWER'});
  };

  return (
    <div className="question">
      <div className="question-info">
        <p className="question-number">
          Question {index + 1} of {numQuestions}
        </p>
        <p className="question-title">{question.question}</p>
        <progress className="question-progress" max={numQuestions} value={index + 1} />
      </div>

      <div className="options">
        {question.options.map((option, idx) => (
          <div
            className={`option subject__container ${
              selectedOption === idx ? 'border-selected' : ''
            } ${submitted && selectedOption === idx && option === correctAnswer ? 'correct' : ''} ${
              submitted && selectedOption === idx && option !== correctAnswer ? 'incorrect' : ''
            }`}
            key={idx}
            onClick={() => dispatch({type: 'SELECT_OPTION', payload: idx})}
          >
            <div className="left-side">
              <div
                className={`${selectedOption === idx ? 'type-box active-box' : 'type-box'} ${
                  submitted && option === correctAnswer ? 'correct-box' : ''
                } ${submitted && option !== correctAnswer ? 'incorrect-box' : ''}`}
              >
                {['a', 'b', 'c', 'd'][idx]}
              </div>
              <p>{option}</p>
            </div>

            {submitted && selectedOption === idx && (
              <img
                src={option === correctAnswer ? correctIcon : incorrectIcon}
                alt={option === correctAnswer ? 'Correct Icon' : 'Incorrect Icon'}
                className="option-icon"
              />
            )}
          </div>
        ))}
      </div>

      {!submitted && (
        <button className="button" onClick={handleSubmit}>
          Submit Answer
        </button>
      )}

      {error && <p className="error-message">Please Select an answer</p>}
      {submitted && (
        <button className="button" onClick={() => dispatch({type: 'NEXT_QUESTION'})}>
          Next Question
        </button>
      )}
    </div>
  );
}
