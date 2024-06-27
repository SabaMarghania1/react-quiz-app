import Subject from './Subject';

export default function StartScreen({data, dispatch}) {
  return (
    <div className="starting-screen">
      <div className="starting-screen-info">
        <h1>
          Welcome to the <span>Frontend Quiz!</span>
        </h1>
        <p>Pick a subject to get started</p>
      </div>

      <div className="subjects__container">
        {data.quizzes.map(subject => {
          return (
            <div
              className="subject__container"
              key={subject.title}
              onClick={() => dispatch({type: 'SELECT_SUBJECT', payload: subject})}
            >
              <Subject subject={subject} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
