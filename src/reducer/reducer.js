export const initialState = {
  theme: 'light',
  selectedSubjectData: '',
  stage: 'ready',
  index: 4,
  selectedOption: null,
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
    case 'SELECT_SUBJECT':
      return {...state, selectedSubject: action.payload, stage: 'startGame'};
    case 'SELECT_OPTION':
      return {...state, selectedOption: action.payload};
    case 'NEXT_QUESTION':
    default:
      return state;
  }
}
