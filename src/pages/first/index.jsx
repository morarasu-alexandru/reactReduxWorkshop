import React from "react";
import FirstExercise from "../../containers/exercise/first";
import FirstExerciseResult from "../../containers/exerciseFinished/firstFinished";

const First = () => {
  return <div className="wrapperExercise">
    <div className="exerciseDescription">
      <p>Our counter can decrement but it can't increment</p>
      <p>Solving steps: </p>
      <ul>
        <li>1. Create increment reducer</li>
        <li>2. Create increment action</li>
        <li>3. Create function that dispatches increment action</li>
        <li>4. Don't forget to put the dispatch action 'onClick' on the corresponding button</li>
      </ul>
    </div>
    <div className="exercise exerciseLeft">
      <FirstExercise/>
    </div>
    <div className="exercise exerciseRight">
      <FirstExerciseResult/>
    </div>
  </div>
};

export default First;
