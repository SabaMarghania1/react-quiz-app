import Header from './components/Header';
import Subject from './components/Subject';
import ThemeSwitch from './components/ThemeSwitch';
import data from './data.json';

import {initialState, reducer} from './reducer/reducer';

import {useReducer} from 'react';

export default function App() {
  const [{theme, selectedSubject}, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="app">
      <Header selectedSubject={selectedSubject}>
        {selectedSubject && <Subject />}
        <ThemeSwitch theme={theme} dispatch={dispatch} />
      </Header>
    </div>
  );
}
