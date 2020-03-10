import React from 'react';
import ExerciseSocket from "../../../components/exerciseSocket";
import {useDispatch} from "react-redux";

const ThirdExercise = () => {

  const dispatch = useDispatch();

  return (
    <ExerciseSocket title="Todo list Exercise">
      <div className="socketContainer">
        <div>
          <span>Todo: </span>
          <input
            type="text"
          />
        </div>
        <div></div>
      </div>
    </ExerciseSocket>
  );
};

export default ThirdExercise;
