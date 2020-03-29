import React, { Fragment } from 'react';
import { useDispatch, useSelector } from "react-redux";

import PageTemplate from "../../components/pageTemplate";
import FifthExercise from "../../containers/exercise/5";
import FifthExerciseFinished from "../../containers/exerciseFinished/5";
import InstructionsList from "../../components/instructionsList";
import { toggleStepIsDone } from "../../actions/others/solvingSteps";

const FifthPage = () => {
  const instructionsList = useSelector(state => state.solvingSteps["5"]);
  const dispatch = useDispatch();

  const toggleStepIsDoneAction = (itemIndex) => dispatch(toggleStepIsDone( "5", itemIndex));

  return (
    <PageTemplate>
      <Fragment>
        <p>The box is stopping after the first move, it has to do 3 more in order to finish it's cycle</p>
        <p>Solving steps:</p>
        <InstructionsList  list={instructionsList} toggleStepIsDoneAction={toggleStepIsDoneAction} />
      </Fragment>
      <FifthExercise />
      <FifthExerciseFinished />
    </PageTemplate>
  );
};

export default FifthPage;
