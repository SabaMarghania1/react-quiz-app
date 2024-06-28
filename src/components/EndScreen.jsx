import Subject from './Subject';

export default function EndScreen({selectedSubject, score, numQuestions, dispatch}) {
  return (
    <div className="endGame">
      <header>
        <h1>
          Quiz completed <span>You scored...</span>
        </h1>
      </header>

      <div className="right-side">
        <div className="end-container">
          <Subject subject={selectedSubject} />

          <div className="scores">
            <p className="score">{score}</p>
            <p className="maxscore">out of {numQuestions}</p>
          </div>
        </div>

        <button className="button" onClick={() => dispatch({type: 'RESET'})}>
          Play Again
        </button>
      </div>
    </div>
  );
}
