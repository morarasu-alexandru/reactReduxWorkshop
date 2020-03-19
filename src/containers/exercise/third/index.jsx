import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Button from '@material-ui/core/Button'

import ExerciseSocket from "../../../components/exerciseSocket";
import { changeTodoInput } from "../../../actions/todo";
import TodoItem from "../../../components/todoItem";

const ThirdExercise = () => {
  const todoValue = useSelector(state => state.todo.input);
  const todoList = useSelector(state => state.todo.list);

  const dispatch = useDispatch();

  const changeTodoInputAction = (e) => dispatch(changeTodoInput(e.target.value));
  // create addTodoAction function

  return (
    <ExerciseSocket title="Todo list Exercise">
      <div className="socketContainer">
        <div>
          <span>Todo: </span>
          <input
            style={{marginRight: '1em'}}
            type="text"
            value={todoValue}
            onChange={changeTodoInputAction}
          />
          <Button disabled={todoValue === ""} variant="outlined" size="small">Add</Button>
        </div>
        <div>
          <ul>
            {todoList.map((todo, index) => <TodoItem key={index} todo={todo}/>)}
          </ul>
        </div>
      </div>
    </ExerciseSocket>
  );
};

export default ThirdExercise;
