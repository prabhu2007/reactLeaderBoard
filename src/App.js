import { React, useState, Fragment } from 'react';
import './App.css';
import { InputForm } from './components/InputForm';
import { OutputLeaderBoard } from './components/OutputLeaderBoard';
import { NAMES } from './consts/NAMES';

function App() {
  const [leaderBoard, setLeaderBoard] = useState([]);

  const updateLeaderBoardArray = (eachEntry) => {
    setLeaderBoard([...leaderBoard, eachEntry]);
  };

  return (
    <Fragment>
      <InputForm
        headerTitle={NAMES.STUDENT_DETAILS}
        updateLeaderBoardArray={updateLeaderBoardArray}
      />
      <OutputLeaderBoard leaderBoard={leaderBoard} />
    </Fragment>
  );
}

export default App;
