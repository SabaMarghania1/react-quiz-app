import Header from './components/Header';
import Main from './components/Main';
import StartScreen from './components/StartScreen';
import Subject from './components/Subject';
import ThemeSwitch from './components/ThemeSwitch';
import data from './data';

import {initialState, reducer} from './reducer/reducer';

import {useReducer} from 'react';

export default function App() {
  const [{theme, selectedSubject}, dispatch] = useReducer(reducer, initialState);
  console.log(data);
  return (
    <div className="app">
      <Header selectedSubject={selectedSubject}>
        {selectedSubject && <Subject />}
        <ThemeSwitch theme={theme} dispatch={dispatch} />
      </Header>
      <Main>
        <StartScreen data={data} />
      </Main>
    </div>
  );
}
