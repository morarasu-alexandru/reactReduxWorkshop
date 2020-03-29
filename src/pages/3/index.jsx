import React, {Fragment} from 'react';
import {useDispatch, useSelector} from "react-redux";

import PageTemplate from "../../components/pageTemplate";
import InstructionsList from "../../components/instructionsList";
import {toggleStepIsDone} from "../../actions/others/solvingSteps";
import ThirdExerciseFinished from "../../containers/exerciseFinished/3";
import ThirdExercise from "../../containers/exercise/3";

const ThirdPage = () => {
  const instructionsList = useSelector(state => state.solvingSteps["3"]);
  const dispatch = useDispatch();

  const toggleStepIsDoneAction = (itemIndex) => dispatch(toggleStepIsDone( "3", itemIndex));

  return (
    <PageTemplate>
      <Fragment>
        <p>The input is working, the data is stored in the redux store, but the add button is not working.</p>
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
