import React from "react";
import {useDispatch, useSelector} from "react-redux";
import Button from '@material-ui/core/Button';
import {decrement} from "../../../actions/counter";

const FirstExercise = () => {
  const counterValue = useSelector( state => state.counter.value);
  const dispatch = useDispatch();

  const decrementAction = () => dispatch(decrement());


  return <div className="exerciseSocketWrapper">
    <div className="subTitleWrapper">
      <h2 className="subTitle">Counter Exercise</h2>
    </div>
    <div className="exerciseSocket">
      <Button onClick={decrementAction} variant={"outlined"}>-</Button>
      <span>{counterValue}</span>
      <Button variant={"outlined"}>+</Button>
    </div>
  </div>
};

export default FirstExercise;
