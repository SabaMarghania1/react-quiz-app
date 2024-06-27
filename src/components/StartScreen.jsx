import Subject from './Subject';

export default function StartScreen({data}) {
  return (
    <div className="starting-screen">
      <div className="starting-screen-info">
        <h1>
          Welcome to the <span>Frontend Quiz!</span>
        </h1>
        <p>Pick a subject to get started</p>
      </div>

      <div className="subjects__container">
        {data.quizzes.map(subject => (
          <div className="subject__container" key={subject.title}>
            <Subject subject={subject} />
          </div>
        ))}
      </div>
    </div>
  );
}
