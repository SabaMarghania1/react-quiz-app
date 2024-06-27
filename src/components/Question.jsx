export default function Question({question, numQuestions, index, dispatch, selectedOption}) {
  console.log(question);
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
        {question.options.map((option, index) => (
          <div
            className="option subject__container"
            key={index}
            onClick={() => dispatch({type: 'SELECT_OPTION', payload: index})}
          >
            <div className={`${selectedOption === index ? 'type-box active-box' : 'type-box'}`}>
              {['a', 'b', 'c', 'd'][index]}
            </div>
            <p>{option}</p>
          </div>
        ))}
      </div>

      <button className="button">Submit Answer</button>
    </div>
  );
}
