// import sun from '../assets/icon-sun.svg';

export default function Header({selectedSubject, children}) {
  return <header className={`${selectedSubject ? 'header' : 'header-alone'}`}>{children}</header>;
}
