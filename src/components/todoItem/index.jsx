import React from 'react';

const TodoItem = (props) => {
  const {todo} = props;

  return (
    <li>{todo}</li>
  );
};

export default TodoItem;
