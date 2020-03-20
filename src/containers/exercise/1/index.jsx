import React from "react";
import {useDispatch, useSelector} from "react-redux";
import Button from '@material-ui/core/Button';
import {decrement} from "../../../actions/counter";
import ExerciseSocket from "../../../components/exerciseSocket";

const FirstExercise = () => {
  const counterValue = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  const decrementAction = () => dispatch(decrement());

  return <ExerciseSocket title="Counter Exercise">
    <Button onClick={decrementAction} variant={"outlined"}>-</Button>
    <span>{counterValue}</span>
    <Button variant={"outlined"}>+</Button>
  </ExerciseSocket>
};

export default FirstExercise;
