import React from 'react';
import Button from '@material-ui/core/Button';
import { motion } from "framer-motion";

import ExerciseSocket from "../../../components/exerciseSocket";
import { useDispatch, useSelector } from "react-redux";
import { changeAnimateValueFinished } from "../../../actions/animateFinished";
import { decrementFinished, incrementFinished } from "../../../actions/counterFinished";

const FifthExerciseFinished = () => {
  const animationValue = useSelector(state => state.animateFinished.animateValue);
  const counterValue = useSelector(state => state.counterFinished.value);

  const dispatch = useDispatch();

  const decrementAction = () => dispatch(decrementFinished());
  const incrementAction = () => dispatch(incrementFinished());
  const changeAnimateValueAction = (newValue) => dispatch(changeAnimateValueFinished(newValue));

  const handleAnimationClick = () => {
    changeAnimateValueAction({x: 100, y: 0});
    setTimeout(() => {
      changeAnimateValueAction({x: 100, y: 100, borderRadius: "100%"});

      setTimeout(() => {
        changeAnimateValueAction({x: 0, y: 100, borderRadius: "4px"});

        setTimeout(() => {
          changeAnimateValueAction({x: 0, y: 0})
        }, 1000)

      }, 1000)

    }, 1000)
  };



  return (
    <ExerciseSocket title="Animate box finished">
      <div style={{width: "100%"}} className="socketContainer">
        <div style={{marginBottom: '20px'}}>
          <Button style={{marginBottom: '10px'}} size="small" variant="outlined" disabled={animationValue.x !== 0 || animationValue.y !== 0 } onClick={handleAnimationClick}>Start Animation</Button>
        </div>
        <div className="animationContainer">
          <motion.div
            className="animationElement"
            animate={animationValue}
            transition={{duration: 1}}
          />
        </div>
        <div>
          <Button onClick={decrementAction} variant={"outlined"}>-</Button>
          <span style={{margin: "0 10px"}}>{counterValue}</span>
          <Button onClick={incrementAction} variant={"outlined"}>+</Button>
        </div>
      </div>
    </ExerciseSocket>
  );
};

export default FifthExerciseFinished;
