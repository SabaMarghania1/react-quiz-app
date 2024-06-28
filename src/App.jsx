import Header from './components/Header';
import Main from './components/Main';
import Question from './components/Question';
import StartScreen from './components/StartScreen';
import Subject from './components/Subject';
import ThemeSwitch from './components/ThemeSwitch';
import data from './data';

import EndScreen from './components/EndScreen';

import {initialState, reducer} from './reducer/reducer';

import {useReducer} from 'react';

export default function App() {
  const [
    {theme, selectedSubject, stage, index, selectedOption, submitted, score, error},
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = selectedSubject?.questions.length;

  return (
    <div className="app">
      <Header selectedSubject={selectedSubject}>
        {selectedSubject && <Subject subject={selectedSubject} />}
        <ThemeSwitch theme={theme} dispatch={dispatch} />
      </Header>
      <Main>
        {stage === 'ready' && <StartScreen data={data} dispatch={dispatch} />}
        {stage === 'startGame' && (
          <Question
            dispatch={dispatch}
            question={selectedSubject.questions[index]}
            numQuestions={numQuestions}
            index={index}
            selectedOption={selectedOption}
            submitted={submitted}
            error={error}
          />
        )}
        {stage === 'result' && (
          <EndScreen selectedSubject={selectedSubject} score={score} numQuestions={numQuestions} />
        )}
      </Main>
    </div>
  );
}
