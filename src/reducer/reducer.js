export const initialState = {
  theme: 'light',

  selectedSubject: '',
};

export function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_THEME':
      const newTheme = state.theme === 'dark' ? '' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      return {
        ...state,
        theme: newTheme,
      };
    default:
      return state;
  }
}
