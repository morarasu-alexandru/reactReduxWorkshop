import React from 'react';
import Button from "@material-ui/core/Button";

import ExerciseSocket from "../../../components/exerciseSocket";
import {useDispatch, useSelector} from "react-redux";
import {addTodoFinished, changeTodoInputFinished} from "../../../actions/todoFinished";

const ThirdExerciseFinished = () => {
  const todoValue = useSelector(state => state.todoFinished.input);
  const todoList = useSelector(state => state.todoFinished.list);

  const dispatch = useDispatch();

  const changeTodoInputAction = (e) => dispatch(changeTodoInputFinished(e.target.value));
  const addTodoAction = () => dispatch(addTodoFinished());

  return (
    <ExerciseSocket title="Todo list Exercise Finished">
      <div className="socketContainer">
        <div>
          <span>Todo: </span>
          <input style={{marginRight: '1em'}} value={todoValue} onChange={changeTodoInputAction} type="text"/>
          <Button onClick={addTodoAction} disabled={todoValue === ""} variant="outlined" size="small">Add</Button>
        </div>
        <div>
          <ul>
            {todoList.map((todo, index) => <li key={index}>{index + 1}. {todo}</li>)}
          </ul>
        </div>
      </div>
    </ExerciseSocket>
  );
};

export default ThirdExerciseFinished;
