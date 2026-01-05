import React from "react";
const TodoList = ({ todos, handleComplete }) => {
  return (
      <ul>
      <h2>Child Component</h2>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            {!todo.Completed &&(
              <button onClick={() => handleComplete(todo.id)}>Complete</button>)
            }
          </li>
        ))}
      </ul>
  );
};

export default TodoList;
