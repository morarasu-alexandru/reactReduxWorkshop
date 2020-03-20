import cloneDeep from "lodash.clonedeep";
import {solvingStepsActions} from "../actionTypes";
import {updateLocalStorageSteps} from "../utils/localStorage";

const initialState = {
  "1": [
      {step: "1. Create increment action | (src/actions/counter.js)", isDone: false},
      {step: "2. Add increment case in reducer | (src/reducers/counter.js)", isDone: false},
      {step: "3. Create function that dispatches increment action | (src/containers/exercise/1/index.jsx)", isDone: false},
      {step: "4. Don't forget to put the dispatch action 'onClick' on the corresponding button | (same path as above)", isDone: false},
    ],
  "2": [
    {step: "1. Import useDispatch and add a constant dispatch as we did in the previous exercise | (src/exercise/2.index.jsx)", isDone: false},
    {step: "2. Import 'changeInput' action from src/actions/input.js on the component | (same path as above)", isDone: false},
    {step: "3. Dispatch the action within the function 'handleChangeAction' and pass the correct argument | (same path as above)", isDone: false},
    {step: "4. We will notice that will still not work, we have to treat the case we have dispatched the 'changeInput' action within the input reducer | (src/reducers/input.js)", isDone: false}
  ],
  "3": [
    {step: "1. Create addTodo action using as action type | (src/actions/todo.js) ", isDone: false},
    {step: "2. Handle addTodo case in reducer | (src/actions/todo.js)", isDone: false},
    {step: "3. Create addTodoAction function that dispatches the action | (src/containers/exercise/3/index.jsx)", isDone: false},
    {step: "4. Add to onClick the function created | (same path as above)", isDone: false},
  ],
  "4": [
    {step: "1. Observe the asynchronous call on console after clicking get data | (src/containers/exercise/4/index.jsx)", isDone: false},
    {step: "2. Observe and import actions already created, getPosts and getPostsFulfilled | (src/actions/posts.js and src/containers/exercise/4/index.jsx)", isDone: false},
    {step: "3. Handle the action types in the reducer accordingly, one action is to start loading and the other one is to load the data and stop loading | (src/reducers/posts)", isDone: false},
    {step: "4. Create the functions that dispatches the actions and use them in the right place, helper text was added", isDone: false},
  ],
  "5": [
    {step: "1. Observe the actions/reducers, they are ok in this form | (src/reducers/animation.js and src/actions/animate.js)", isDone: false},
    {step: "2. Extend handleAnimationClick function from the component | (src/containers/exercise/5/index.js)", isDone: false},
    {step: "3. While the box is moving, the counter should still work | (src/containers/exercise/5/index.js)", isDone: false},
  ]

};

const solvingSteps = (state = initialState, action) => {
  const newState = cloneDeep(state);

  switch (action.type) {
    case solvingStepsActions.toggleStepIsDone: {
      const {listNumber, itemIndex} = action.payload;

      newState[listNumber][itemIndex].isDone = !state[listNumber][itemIndex].isDone;
      updateLocalStorageSteps(newState);

      return newState;
    }

    case solvingStepsActions.updateSteps: {
      const {steps} = action.payload;

      return steps;
    }

    default:
      return state
  }
};

export default solvingSteps;
