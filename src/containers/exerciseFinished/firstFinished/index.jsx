import React from "react";
import {useDispatch, useSelector} from "react-redux";
import Button from '@material-ui/core/Button';
import {decrementFinished, incrementFinished} from "../../../actions/counterFinished";
import ExerciseSocket from "../../../components/exerciseSocket";

const FirstExerciseResult = () => {
  const counterValue = useSelector(state => state.counterFinished.value);
  const dispatch = useDispatch();

  const decrementAction = () => dispatch(decrementFinished());
  const incrementAction = () => dispatch(incrementFinished());

  return <ExerciseSocket title="Finished Counter Exercise">
    <Button onClick={decrementAction} variant={"outlined"}>-</Button>
    <span>{counterValue}</span>
    <Button onClick={incrementAction} variant={"outlined"}>+</Button>
  </ExerciseSocket>
};

export default FirstExerciseResult;
