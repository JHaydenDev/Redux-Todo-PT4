import React from './node_modules/react';
import TodoItem from './TodoItem';

 export default (props) => {
  const todos = props.todos.map((todo, i) => <TodoItem todo={todo} key={i} index={i} />);
  return (
    <ul>
      { todos }
    </ul>
  );
};