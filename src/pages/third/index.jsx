import React, {Fragment} from 'react';
import {useDispatch, useSelector} from "react-redux";

import PageTemplate from "../../components/pageTemplate";
import InstructionsList from "../../components/instructionsList";
import {toggleStepIsDone} from "../../actions/solvingSteps";
import ThirdExerciseFinished from "../../containers/exerciseFinished/thirdFinished";
import ThirdExercise from "../../containers/exercise/third";

const ThirdPage = () => {
  const instructionsList = useSelector(state => state.solvingSteps["3"]);

  const dispatch = useDispatch();

  const toggleStepIsDoneAction = (itemIndex) => dispatch(toggleStepIsDone( "3", itemIndex));

  return (
    <PageTemplate>
      <Fragment>
        <p>We want something?</p>
        <p>Solving steps: </p>
        <InstructionsList
          list={instructionsList}
          toggleStepIsDoneAction={toggleStepIsDoneAction}/>
      </Fragment>
      <ThirdExercise />
      <ThirdExerciseFinished />
    </PageTemplate>
  );
};

export default ThirdPage;
