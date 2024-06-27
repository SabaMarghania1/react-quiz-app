export default function ThemeSwitch({dispatch, theme}) {
  function toggleTheme() {
    dispatch({type: 'TOGGLE_THEME'});
  }
  return (
    <div className="right">
      <div className="sun"></div>

      <label className="switch">
        <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
        <span className="slider round"></span>
      </label>
      <div className="moon"></div>
    </div>
  );
}
