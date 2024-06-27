export default function Subject({subject}) {
  console.log(subject);
  const {title, icon} = subject;
  console.log(icon);

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
          <img src={icon} alt="icon" />
        </div>
        <p className="subject__title">{title}</p>
      </div>
    </>
  );
}
