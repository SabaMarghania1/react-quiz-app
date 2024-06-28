export const initialState = {
  theme: 'light',
  selectedSubjectData: '',
  stage: 'ready',
  index: 4,
  selectedOption: null,
  submitted: null,
  score: 0,
  error: null,
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
      return {...state, selectedOption: action.payload, error: null}; // Clear error on option select
    case 'SUBMIT_ANSWER':
      if (state.selectedOption === null) {
        return {...state, error: 'Please select an option before submitting.'};
      }
      const isCorrect =
        state.selectedSubject.questions[state.index].options[state.selectedOption] ===
        state.selectedSubject.questions[state.index].answer;
      const newScore = isCorrect ? state.score + 1 : state.score;
      return {...state, submitted: true, error: null, score: newScore}; // Clear error on valid submit
    case 'NEXT_QUESTION':
      const nextIndex = state.index + 1;
      if (nextIndex >= state.selectedSubject.questions.length) {
        return {...state, stage: 'result'};
      }
      return {...state, index: nextIndex, selectedOption: null, submitted: false, error: null};
    default:
      return state;
  }
}
