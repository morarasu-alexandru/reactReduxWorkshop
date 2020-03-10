import React, {Fragment} from 'react';

import PageTemplate from "../../components/pageTemplate";
import SecondExercise from "../../containers/exercise/second";
import SecondExerciseFinished from "../../containers/exerciseFinished/secondFinished";
import InstructionsList from "../../components/instructionsList";
import {useDispatch, useSelector} from "react-redux";
import {toggleStepIsDone} from "../../actions/solvingSteps";

const SecondPage = () => {
  const instructionList = useSelector(state => state.solvingSteps["2"]);

  const dispatch = useDispatch();
  const toggleStepIsDoneAction = (itemIndex) => dispatch(toggleStepIsDone( "2", itemIndex));

  return (
    <PageTemplate>
      <Fragment>
        <p>We want to input some text and have as output the same text</p>
        <p>Solving steps: </p>
        <InstructionsList list={instructionList} toggleStepIsDoneAction={toggleStepIsDoneAction} />
      </Fragment>
      <SecondExercise />
      <SecondExerciseFinished />
    </PageTemplate>
  );
};

export default SecondPage;
