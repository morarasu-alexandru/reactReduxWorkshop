import cloneDeep from "lodash.clonedeep";
import {solvingStepsActions} from "../actionTypes";
import {updateLocalStorageSteps} from "../utils/localStorage";

const initialState = {
  "1": [
      {step: "1. Create increment action | (src/actions/counter.js)", isDone: false},
      {step: "2. Add increment case in reducer | (src/reducers/counter.js)", isDone: false},
      {step: "3. Create function that dispatches increment action | (src/containers/exercise/first/index.jsx)", isDone: false},
      {step: "4. Don't forget to put the dispatch action 'onClick' on the corresponding button | (same path as above)", isDone: false},
    ],
  "2": [
    {step: "1. Import useDispatch and add a constant dispatch as we did in the previous exercise | (src/exercise/second.index.jsx)", isDone: false},
    {step: "2. Import 'changeInput' action from src/actions/input.js on the component | (same path as above)", isDone: false},
    {step: "3. Dispatch the action within the function 'handleChangeAction' and pass the correct argument | (same path as above)", isDone: false},
    {step: "4. We will notice that will still not work, we have to treat the case we have dispatched the 'changeInput' action within the input reducer | (src/reducers/input.js)", isDone: false}
  ]
};

// todo: set the state to local storage saved steps .... on component did mount

const solvingSteps = (state = initialState, action) => {
  const newState = cloneDeep(state);

  switch (action.type) {
    case solvingStepsActions.toggleStepIsDone: {
      const {listNumber, itemIndex} = action.payload;

      newState[listNumber][itemIndex].isDone = !state[listNumber][itemIndex].isDone;
      updateLocalStorageSteps(newState);

      return newState;
    }

    default:
      return state
  }
};

export default solvingSteps;
