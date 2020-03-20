import React from 'react';
import ExerciseSocket from "../../../components/exerciseSocket";
import {useSelector} from "react-redux";

const SecondExerciseFinished = () => {
  const inputValue = useSelector(state => state.input.value);

  const handleChangeAction = (event) => {
    console.log(event.target.value);

  };

  return (
    <ExerciseSocket title="Input Exercise">
      <div className="socketContainer">
        <div>
          <span>Input: </span>
          <input value={inputValue} onChange={handleChangeAction} type="text"/>
        </div>
        <div>
          <span>Same Output: </span>
          <span>{inputValue}</span>
        </div>
      </div>
    </ExerciseSocket>
  );
};

export default SecondExerciseFinished;
