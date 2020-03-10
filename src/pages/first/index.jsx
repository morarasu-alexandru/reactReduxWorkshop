import React, {Fragment} from "react";
import FirstExercise from "../../containers/exercise/first";
import FirstExerciseResult from "../../containers/exerciseFinished/firstFinished";
import PageTemplate from "../../components/pageTemplate";
import {useDispatch, useSelector} from "react-redux";
import InstructionsList from "../../components/instructionsList";
import {toggleStepIsDone} from "../../actions/solvingSteps";

const FirstPage = () => {
  const instructionList = useSelector(state => state.solvingSteps["1"]);

  const dispatch = useDispatch();
  const toggleStepIsDoneAction = (itemIndex) => dispatch(toggleStepIsDone( "1", itemIndex));

  return <PageTemplate>
    <Fragment>
      <p>Ours counter can decrement but it can't increment</p>
      <p>Solving steps: </p>
      <InstructionsList list={instructionList} toggleStepIsDoneAction={toggleStepIsDoneAction} />
    </Fragment>
    <FirstExercise/>
    <FirstExerciseResult/>
  </PageTemplate>
};

export default FirstPage;
