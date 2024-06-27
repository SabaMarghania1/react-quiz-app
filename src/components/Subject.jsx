export default function Subject({subject = '', title = ''}) {
  let typeBoxColor;
  if (subject.title === 'HTML') {
    typeBoxColor = '#FFF1E9';
  } else if (subject.title === 'CSS') {
    typeBoxColor = '#E0FDEF';
  } else if (subject.title === 'JavaScript') {
    typeBoxColor = '#EBF0FF';
  } else {
    typeBoxColor = '#F6E7FF';
  }

  return (
    <>
      <div className="left">
        <div style={{backgroundColor: typeBoxColor}} className="type-box">
          <img src={subject.icon} alt="icon" />
        </div>
        <p className="subject__title">{subject.title}</p>
      </div>
    </>
  );
}
