import React from 'react';
import ExerciseSocket from "../../../components/exerciseSocket";
import {useDispatch, useSelector} from "react-redux";
import {changeInputFinished} from "../../../actions/2/inputFinished";

const SecondExercise = () => {
  const inputValue = useSelector(state => state.inputFinished.value);

  const dispatch = useDispatch();

  const handleChangeAction = (event) => {
    console.log(event.target.value);

    dispatch(changeInputFinished(event.target.value));
  };

  return (
    <ExerciseSocket title="Input Exercise Finished">
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

export default SecondExercise;
