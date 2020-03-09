import React from "react";
import {useDispatch, useSelector} from "react-redux";
import Button from '@material-ui/core/Button';
import {decrementFinished, incrementFinished} from "../../../actions/counterFinished";

const FirstExerciseResult = () => {
  const counterValue = useSelector( state => state.counterFinished.value);
  const dispatch = useDispatch();

  const decrementAction = () => dispatch(decrementFinished());
  const incrementAction = () => dispatch(incrementFinished());

  return <div className="exerciseSocketWrapper">
    <div className="subTitleWrapper">
      <h2 className="subTitle">Finished Counter Exercise</h2>
    </div>
    <div className="exerciseSocket">
      <Button onClick={decrementAction} variant={"outlined"}>-</Button>
      <span>{counterValue}</span>
      <Button onClick={incrementAction} variant={"outlined"}>+</Button>
    </div>
  </div>
};

export default FirstExerciseResult;
