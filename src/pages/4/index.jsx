import React, { Fragment } from 'react';
import { useDispatch, useSelector } from "react-redux";

import PageTemplate from "../../components/pageTemplate";
import InstructionsList from "../../components/instructionsList";
import { toggleStepIsDone } from "../../actions/solvingSteps";
import ForthExercise from "../../containers/exercise/4";
import ForthExerciseFinished from "../../containers/exerciseFinished/4";

const ForthPage = () => {
  const instructionsList = useSelector(state => state.solvingSteps["4"]);
  const dispatch = useDispatch();

  const toggleStepIsDoneAction = (itemIndex) => dispatch(toggleStepIsDone( "4", itemIndex));

  return (
    <PageTemplate>
      <Fragment>
        <p>We have a button 'Get data', we get the data, but we don't update the redux store.</p>
        <p>Also we need to see the loading until we get the data</p>
        <p>Solving steps: </p>
        <InstructionsList
          list={instructionsList}
          toggleStepIsDoneAction={toggleStepIsDoneAction}
        />
      </Fragment>
      <ForthExercise/>
      <ForthExerciseFinished/>
    </PageTemplate>
  );
};

export default ForthPage;
