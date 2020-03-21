import React from 'react';
import Button from "@material-ui/core/Button";
import ExerciseSocket from "../../../components/exerciseSocket";
import { useDispatch, useSelector } from "react-redux";
import { decrementFinished, incrementFinished } from "../../../actions/counterFinished";
import { motion } from "framer-motion";
import { changeAnimateValue } from "../../../actions/animate";

const FifthExercise = () => {
  const animationValue = useSelector(state => state.animate.animateValue);
  const counterValue = useSelector(state => state.counterFinished.value);

  const dispatch = useDispatch();

  const decrementAction = () => dispatch(decrementFinished());
  const incrementAction = () => dispatch(incrementFinished());
  const changeAnimateValueAction = (newValue) => dispatch(changeAnimateValue(newValue));

  const handleAnimationClick = () => {
    changeAnimateValueAction({x: 100, y: 0});
  //we have to do three more moves, one after the other, in order to finish the cycle
  };


  return (
    <ExerciseSocket title="Animate box">
      <div style={{width: "100%"}} className="socketContainer">
        <div style={{marginBottom: '20px'}}>
          <Button
            onClick={handleAnimationClick}
            style={{marginBottom: '10px'}}
            size="small" variant="outlined"
            disabled={animationValue.x !== 0 || animationValue.y !== 0 }
          >
            Start Animation
          </Button>
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
      </div>
    </ExerciseSocket>
  );
};

export default FifthExercise;
